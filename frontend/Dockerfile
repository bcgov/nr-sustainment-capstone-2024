# Base image for the container
FROM node:20.13.1

# Copy files
WORKDIR /app/
COPY . ./

# Add nonroot user and take ownership
RUN groupadd --gid 1001 nonroot && \
    useradd --uid 1001 --gid nonroot --home /app nonroot && \
    chown -R 1001:1001 /app

# Switch nonroot user and install dependencies
USER nonroot
RUN npm i

# Declare port and run CMD
EXPOSE 5173
CMD ["npm", "run", "serve"]
