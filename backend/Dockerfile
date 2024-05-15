# Base image for the container
FROM node:20.12.2

# The working directory inside the container
WORKDIR /backend/

# copy everything from current|root dir to WORKDIR
COPY . .

# Install all dependencies and typescript
RUN npm i 


# Expose 3000 to localhost
EXPOSE 3000

# Run in dev mode, `npm run serve` for production
CMD ["npm", "run", "dev"]

# Move ownership to User 1001 and switch to it from root
RUN chown -R 1001:1001 /backend
USER 1001
