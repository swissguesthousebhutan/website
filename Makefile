PATH:=$(PATH):$(shell ruby -e 'print Gem.user_dir')/bin:$(HOME)/.local/bin
# all galleries
DROPBOX_GALLERIES_ZIP_URL := https://www.dropbox.com$\
	/scl/fo/x0eanxzviitghqq5shpbe/AFPNQ-Yzp_tlvrmlfSqAvpo?rlkey=je0rhpjtli2fanfib355fv6wc&dl=1
# "Rooms" gallery only
DROPBOX_GALLERIES_ZIP_URL := https://www.dropbox.com$\
	/scl/fo/dv86s637pjus5f21jkyeh/AE1euxlrgDWvjJ8vOxA_w7A?rlkey=r3g0a85dyg65axo8y4w2bbwch&dl=1
DROPBOX_GALLERIES_ZIP:=$(shell mktemp)

install_build_tools:
ifdef GITHUB_ACTIONS
	sudo apt-get install imagemagick libmagickwand-dev
endif
	gem install --user-install  gallery-gen
	pip install --user          makesite-liquidish
	gem install --user icalendar # required by getch_calendar_data.rb

download_galleries:
	curl -Lo $(DROPBOX_GALLERIES_ZIP) '$(DROPBOX_GALLERIES_ZIP_URL)'
	rm -rf galleries
	mkdir -p galleries/Rooms
	unzip $(DROPBOX_GALLERIES_ZIP) -x / -d galleries/Rooms

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
