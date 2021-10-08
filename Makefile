build:
	docker build -t server-image:first .
run:
	docker run -d -p 3000:3000 --rm --name server-container server-image:first
dev:
	docker run -d -p 3000:3000 -v "server-volume:/app" -v /app/node_modules --rm --name server-container server-image:first
stop:
	docker stop server-container
clear:
	docker container prune
	docker images prune
logs:
	docker logs server-container