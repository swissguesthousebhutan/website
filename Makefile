all_now:
	#rm -rf _site _data
	#../gallery-gen/bin/gallery-gen
	../makesite-liquidish/makesite_liquidish/makesite.py

	cp .htaccess book _site
	mogrify -resize 200x200 _site/assets/Picture*
#	rsync -avL _site/. www-data@patrickpfeifer.net:www.swissguesthouse.bt/site/.

all_dev:
	rm -rf _site _data
	../gallery-gen/bin/gallery-gen
	../makesite-liquidish/makesite_liquidish/makesite.py

	cp .htaccess book _site
	mogrify -resize 200x200 _site/assets/Picture*
	rsync -avL _site/. www-data@patrickpfeifer.net:www.swissguesthouse.bt/site/.





all_ever:
	watchmedo shell-command --ignore-directories --ignore-patterns "*~" --wait --command make .

all_prod:
	gem install --user-install gallery-gen
	pip install --user-install makesite-liquidish

	rm -rf _site _data
	gallery-gen
	makesite
