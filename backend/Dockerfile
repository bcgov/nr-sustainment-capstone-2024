# Base image for the container
FROM node:20.12.2

# The working directory inside the container
WORKDIR /backend/

# Add backend usrer group with group id 1001
RUN groupadd --gid 1001 backendUsr

# Add backend usr with group id 1001
RUN useradd --uid 1001 --gid backendUsr --home /backend backendUsr

# copy everything from current|root dir to WORKDIR
COPY . .

# Install all dependencies and typescript
RUN npm i 


# Expose 3000 to localhost
EXPOSE 3000

# Run in dev mode, `npm run serve` for production
CMD ["npm", "run", "dev"]

# Move ownership to backendUsr 1001 and switch to it from root
RUN chown -R 1001:1001 /backend
USER backendUsr
