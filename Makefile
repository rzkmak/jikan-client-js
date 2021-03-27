.PHONY: test lint publish build

test:
	npm run test

lint:
	npm run lint

publish:
	npm run build
	npm publish

build:
	npm run build