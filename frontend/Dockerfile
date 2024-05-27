# Base image for the container
FROM node:20.13.1

# The working directory inside the container
WORKDIR /frontend/

# Add frontend user group with group id 1001 and Add frontend usr with group id 1001
RUN groupadd --gid 1001 frontendUser && \
    useradd --uid 1001 --gid frontendUser --home /frontend frontendUser
# Copy the rest of the application code
COPY . .

# Install npm dependencies and build the app
RUN npm i && \
    npm run build

#PORTS, CMD, Permission Change and User
RUN chown -R 1001:1001 /frontend
USER frontendUser
EXPOSE 5173
CMD ["npm", "run", "dev"]
