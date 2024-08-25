# Base image for the container
FROM node:20.17.0

# Copy files and install dependencies
WORKDIR /app/
COPY . ./
RUN npm ci && \
  npm run build

# Run in dev mode, `npm run serve` for production
# CMD ["npm", "run", "serve", "--no-update-notifier", "--max-old-space-size=50"]
CMD ["npm", "run", "serve", "--no-update-notifier", "--max-old-space-size=50"]
