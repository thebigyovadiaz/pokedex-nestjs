<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Configure application

1. Clone repository

2. Install dependencies
```
yarn install
```

3. Install Nest CLI
```
npm i -g @nestjs/cli
```

4. Start up database
```
docker-compose up -d
```

#
# Start application

1. Clone file ```.env.template``` and rename for ```.env```

2. Filled environment variables in ```.env```

3. Rebuild Database with seed
```
http://localhost:3000/api/v2/seed
```

4. Start mode developer
```
yarn start:dev
```

#
# Stack used
* [MondoDB](https://www.mongodb.com/)
* [NestJS](https://nestjs.com/)
* [Docker](https://docs.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/install/)
* [Docker Desktop](https://docs.docker.com/desktop/)

