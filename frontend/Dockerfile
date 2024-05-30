# Base image for the container
FROM node:20.14.0

# Copy files, install dependencies and build
USER node
WORKDIR /app/
COPY --chown=node . ./
RUN npm i && \
    npm run build

# Run in production mode, `npm run dev` for dev mode
CMD ["npm", "run", "serve", "--no-update-notifier", "--max-old-space-size=50"]
