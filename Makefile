build:
	cd portfolio && $(MAKE) build

run:
	docker-compose -f docker-compose.yml up