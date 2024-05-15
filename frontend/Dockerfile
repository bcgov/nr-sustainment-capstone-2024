# Base image for the container
FROM node:20.12.2

# The working directory inside the container
WORKDIR /frontend/

# Copy the rest of the application code
COPY . .

# Install npm dependencies and build the app
RUN npm i && \
    npm run build

# Expose 5173 to localhost
EXPOSE 5173

# Run in dev mode, `npm run serve` for production
CMD ["npm", "run", "serve"]

# Use a non-root image user
USER 1001
