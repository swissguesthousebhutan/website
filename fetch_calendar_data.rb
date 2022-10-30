#!/usr/bin/ruby

require 'json'
require 'net/http'
require 'uri'

require 'icalendar'

# https://calendar.yahoo.com/
# https://calendar.yahoo.com/pfiver/1f14c10e0f639f20864a0f225d69047f?od=131
#
# Actions > Share > Share > "Get shareable Link" > "To import into a calendar app (ICS)"
#
uri = URI('https://calendar.yahoo.com/ws/v3/users/pfiver/calendars/131/export?key=26896c4706cdbd6d169624ca92f1e57e')

today = Date.today
days = (today - 1..today.next_year).map { |d| [d, { :free => true }] }.to_h
days = (Date.new(Date.today.year, 1, 1)-1...Date.new(Date.today.year+1, 1, 1)).map { |d| [d, { :free => true }] }.to_h

res = Net::HTTP.get_response(uri)
exit(1) unless res.is_a?(Net::HTTPSuccess)

cal = Icalendar::Calendar.parse(res.body).first
# puts cal.to_ical

# cal.events.each do |evt|
#   STDOUT.write <<~EOF
#   #{evt.summary}
#     from #{evt.dtstart}
#     to   #{evt.dtend}
#   EOF
# end

cal.events.each do |event|
  (event.dtstart..event.dtend).each do |day|
    days[day]&.store(:free, false)
  end
end

# docc = Date.new(2022,8,23)
# puts JSON.pretty_generate days.slice(*docc-1..docc+1)

MONTH_NAMES = %w[January February March April May June
                 July August September October November December]

DAY_CLASSES = {
  :prevMonth   => 'prev-month',
  :free        => 'calendar-free',
  :freeWasBusy => 'calendar-busy-free',
  :busy        => 'calendar-busy',
  :busyWasFree => 'calendar-free-busy',
}

DAY_TITLES = {
  :free => "rooms available",
  :busy => "fully booked"
}

def get_day_class(today_available, prev_day_available)
  free = today_available
  prev_free = prev_day_available
  free && prev_free ? DAY_CLASSES[:free]
    : free && !prev_free ? DAY_CLASSES[:freeWasBusy]
        : !free && prev_free ? DAY_CLASSES[:busyWasFree] : DAY_CLASSES[:busy]
end

# data required by calendar.html template:
#
#            const calendar_data = {
#                months: [{
#                    name: "Februar 2020",
#                    weeks: [{
#                        days: [{
#                            classes: "",
#                            title: "",
#                            number: 1
#                        }]
#                    }]
#                }]
#            };

day = nil
week = nil
month = nil
calendar_data = { months: [] }

prev_day_available = days.to_a[0][1][:free]

days.to_a[1..-1].each do |date, data|

  if date.day == 1 or calendar_data[:months].empty?
    month = {
      name: "#{MONTH_NAMES[date.month - 1]} #{date.year}",
      weeks: []
    }
    calendar_data[:months].push(month)
  end

  if date.wday == 1 or month[:weeks].empty?
    week = { days: [] }
    month[:weeks].push(week)
  end

  if date.day == 1
    week[:days].push *(0...(date.wday+6)%7).map{({
      classes: "prev-month",
      title: "",
      number: ""
    })}
  end

  day = {
    classes: get_day_class(data[:free], prev_day_available),
    title: DAY_TITLES[data[:free] ? :free : :busy],
    number: date.day
  }
  week[:days].push(day)

  prev_day_available = data[:free]
end

puts JSON.pretty_generate calendar_data
