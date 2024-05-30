# Base image for the container
FROM node:20.13.1

# Copy files and install dependencies
WORKDIR /app/
COPY . ./
RUN npm i

# Run in dev mode, `npm run serve` for production
CMD ["npm", "run", "dev"]
