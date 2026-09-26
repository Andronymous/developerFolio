# Production image: build the static site with Node, then serve it with SWAG
# (nginx + Let's Encrypt certificates obtained and renewed automatically).

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
FROM lscr.io/linuxserver/swag:latest

# /config is a volume (it holds the certificates), so the site is baked in
# here and copied into /config/www by the init script on every start.
COPY --from=build /app/build /app/site
COPY docker/custom-cont-init.d/ /custom-cont-init.d/
RUN chmod 755 /custom-cont-init.d/*

EXPOSE 80 443
