all_dev:
	#rm -rf _site _data
	../gallery-gen/bin/gallery-gen
	../makesite-liquidish/makesite_liquidish/makesite.py

	mogrify -resize 200x200 _site/assets/Picture*
	rsync -avL _site/. www-data@patrickpfeifer.net:www.swissguesthouse.bt/site/.

all_prod:
	gem install --user-install gallery-gen
	pip install --user-install makesite-liquidish

	rm -rf _site _data
	gallery-gen
	makesite
