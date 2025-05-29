<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Execute in dev

1. Clone the repository
2. Install dependencies `yarn install`
3. Clone the `.env.template` and rename to `.env` and fill environment variables
3. start database `docker compose up -d`
4. Generate Prisma client `npx prisma generate`
5. Execute project `yarn run start:dev`