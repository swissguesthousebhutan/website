#!/usr/bin/ruby

require 'uri'
require 'net/http'

require 'icalendar'

# https://calendar.yahoo.com/
# https://calendar.yahoo.com/pfiver/1f14c10e0f639f20864a0f225d69047f?od=131
#
# Actions > Share > Share > "Get shareable Link" > "To import into a calendar app (ICS)"
#
uri = URI('https://calendar.yahoo.com/ws/v3/users/pfiver/calendars/131/export?key=26896c4706cdbd6d169624ca92f1e57e')

res = Net::HTTP.get_response(uri)
exit(1) unless res.is_a?(Net::HTTPSuccess)

cal = Icalendar::Calendar.parse(res.body).first
# puts cal.to_ical

cal.events.each do |evt|
  STDOUT.write <<~EOF
  #{evt.summary}
    from #{evt.dtstart}
    to   #{evt.dtend}
  EOF
end
