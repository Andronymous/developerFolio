# This file is the main docker file configurations

# Official Node JS runtime as a parent image
FROM node:24-alpine

# Set the working directory to ./app
WORKDIR /app

RUN apk add --no-cache git

# Install app dependencies from the lockfile for reproducible builds
COPY package.json package-lock.json ./
RUN npm ci

# Bundle app source
COPY . /app

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run app.js when the container launches
CMD ["npm", "start"]
