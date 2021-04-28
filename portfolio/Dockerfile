FROM node:14-slim AS builder

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

RUN yarn builder

## Caddy
FROM caddy:2.1.1-alpine

COPY ./Caddyfile /etc/caddy/Caddyfile

COPY --from=builder /usr/src/app/build/ /srv/

EXPOSE 80

EXPOSE 443