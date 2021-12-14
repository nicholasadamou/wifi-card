REPO ?= nicholasadamou/wifi-card
GITSHA=$(shell git rev-parse --short HEAD)
TAG_COMMIT=$(REPO):$(GITSHA)
TAG_LATEST=$(REPO):latest

all: dev

.PHONY: build
build:
	docker build -t $(TAG_LATEST) .

.PHONY: dev
dev:
	yarn start
