.DEFAULT: release
.PHONY: release
release:
	mkdir -p dist
	cd user && zip -r ../dist/lambda-nodejs14.zip .
	cd layer && zip -r ../dist/layer.zip .
	ls -alh dist
