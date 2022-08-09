all:
	gem install --user-install gallery-gen
	pip install --user-install makesite-liquidish
	rm -rf _site
	gallery-gen
	makesite

all_dev:
	rm -rf _site
	../gallery-gen/bin/gallery-gen
	../makesite-liquidish/makesite_liquidish/makesite.py
