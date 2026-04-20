install_build_tools:

all:
	rm -rf _site
	cd frontend \
	    && npm ci \
	    && npm run build
	mv frontend/out _site

publish:
	rsync -avL _site/. www-data@nexus:www.swissguesthouse.bt/site/.
