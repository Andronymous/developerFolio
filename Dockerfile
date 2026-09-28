# Production image: build the static site with Node, then serve it with nginx.
# TLS and the public domain are handled by a separate SWAG reverse proxy.

# ---- Build stage ----
FROM node:24-alpine AS build

WORKDIR /app

RUN apk add --no-cache git

# Install app dependencies from the lockfile for reproducible builds
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- Runtime stage ----
FROM nginx:stable-alpine

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
