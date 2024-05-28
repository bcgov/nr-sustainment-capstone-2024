# Build static files
# Node Bullseye has npm
FROM node:20.13.1-bullseye AS build

# Install packages, build and keep only prod packages
WORKDIR /frontend
COPY . ./
RUN npm ci && \
    npm run build

# Deploy container
# Caddy serves static files
FROM caddy:2.7.6-alpine
RUN apk add --no-cache ca-certificates

# Copy static files and run formatting
COPY --from=build /frontend/dist /srv
COPY Caddyfile /etc/caddy/Caddyfile
RUN caddy fmt --overwrite /etc/caddy/Caddyfile

# Ports, health check and non-root user
EXPOSE 3000 3001
HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost/:3001/health
USER 1001
