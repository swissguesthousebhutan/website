all:
	gem install --user-install gallery_generator
	pip3 install --user makesite-liquidish
	rm -rf site
	prepare_images.rb
	makesite-liquidish.py

all_dev:
	rm -rf site
	../gallery-generator/bin/prepare_images.rb
	../makesite/makesite_liquidish.py
