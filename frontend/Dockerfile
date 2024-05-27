# Build static files
# Node Bullseye has npm
FROM node:20.13.1 AS build

# Copy files, install dependencies and build
WORKDIR /app/
COPY . ./
RUN npm i

# Run in production mode, `npm run dev` for dev mode
CMD ["npm", "run", "serve"]
