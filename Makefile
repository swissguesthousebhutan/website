install_build_tools:

all:
	cd frontend \
	    && npm ci \
	    && npm run build
	mv frontend/out _site
