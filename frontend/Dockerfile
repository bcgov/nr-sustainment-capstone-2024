# Base image for the container
FROM node:alpine

# The working directory inside the container
WORKDIR /frontend

# Copy the rest of the application code
COPY . .

# Install npm dependencies and build the app
RUN npm i && \
  npm run build

# Install curl for the healthcheck
RUN apk --update --no-cache add curl

#PORTS, CMD, Permission Change and User
EXPOSE 5173

CMD ["npm", "run", "serve"]

RUN chown -R 1001:1001 /frontend
USER 1001
