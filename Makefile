dc/up:
	docker-compose up
	
d/ps:
	docker ps

dc/ps:
	docker-compose ps

dc/up-d:
	docker-compose up -d

dc/down:
	docker-compose down

dc/exec-mysql:
	docker-compose exec mysql mysql -uroot -p

dc/migrate:
	docker-compose run --rm app npx sequelize-cli db:migrate:all
	
dc/migrate-undo:
	docker-compose run --rm backend npx sequelize-cli db:migrate:undo

dc/migrate-undo-all:
	docker-compose run --rm backend npx sequelize-cli db:migrate:undo:all

dc/seed-undo:
	docker-compose run --rm backend npx sequelize-cli db:seed:undo

dc/seed-all:
	docker-compose run --rm backend npx sequelize-cli db:seed:all

dc/seed-undo-all:
	docker-compose run --rm backend npx sequelize-cli db:seed:undo:all
