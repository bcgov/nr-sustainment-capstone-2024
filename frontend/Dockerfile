# Base image for the container
FROM node:20.12.2

# The working directory inside the container
WORKDIR /frontend/

# Copy the rest of the application code
COPY . .

RUN npm i

# Expose 5173 to localhost
EXPOSE 5173

# Run in dev mode, `npm run serve` for production
CMD ["npm", "run", "dev"]

# Set the correct permissions
RUN chown -R 1001:1001 /frontend

# Run as non-root image user
USER 1001
