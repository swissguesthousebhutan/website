all:
	rm -rf _site
	cd frontend \
	    && npm ci \
	    && npm run build
	mv frontend/out _site
