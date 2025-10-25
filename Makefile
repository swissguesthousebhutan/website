PATH:=$(PATH):$(shell ruby -e 'print Gem.user_dir')/bin:$(HOME)/.local/bin

install_build_tools:
	sudo apt-get install imagemagick libmagickwand-dev
	gem install --user-install  gallery-gen
	pip install --user          makesite-liquidish
	gem install --user icalendar # required by getch_calendar_data.rb

all:
	rm -rf _site _data
	mkdir _data
	ruby fetch_calendar_data.rb > _data/calendar-data.json
	gallery-gen
	makesite
	cp -a assets *.css favicon.ico book.py .htaccess _site
	mogrify -resize 200x200 _site/assets/Picture*

publish:
	rsync -avL _site/. www-data@patrickpfeifer.net:www.swissguesthouse.bt/site/.

all_dev:
	# ...
	../gallery-gen/bin/gallery-gen
	../makesite-liquidish/makesite_liquidish/makesite.py
	# ...

all_ever:
	watchmedo shell-command --ignore-directories --ignore-patterns "*~" --wait --command make .
