REPO ?= nicholasadamou/wifi-card
GITSHA=$(shell git rev-parse --short HEAD)
TAG_COMMIT=$(REPO):$(GITSHA)

all: dev

.PHONY: build-dev
build-dev:
	docker build -f Dockerfile -t $(REPO):dev .

.PHONY: build-prod
build-prod:
	docker build -f Dockerfile.prod -t $(REPO):prod .

.PHONY: start-dev-container
start-dev-container:
	docker-compose -f docker-compose.yml up --remove-orphans

.PHONY: start-prod-container
start-prod-container:
	docker-compose -f docker-compose.prod.yml up --remove-orphans

.PHONY: dev
dev:
	yarn start
