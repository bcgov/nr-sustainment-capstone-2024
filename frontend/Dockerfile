# Base image for the container
FROM node:20.14.0

ENV npm_config_cache=/app/.npm
ENV APP_USER=1011540000

# Copy files, install dependencies and build
USER ${APP_USER}
WORKDIR /app/
COPY --chown=${APP_USER} . ./
RUN npm i && \
    npm run build

# Run in production mode, `npm run dev` for dev mode
CMD ["npm", "run", "serve", "--no-update-notifier", "--max-old-space-size=50"]
