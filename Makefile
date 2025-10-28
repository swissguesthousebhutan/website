install_build_tools:

all:
	cd frontend
	cd frontend && npm ci
	cd frontend && npm run build
#	cd frontend && npm run export
	ln -s frontend/.next/static _site
