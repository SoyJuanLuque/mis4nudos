FROM node:20-alpine

# Install build dependencies
RUN apk add --no-cache python3 make g++ && echo "Build v7 - Copy admin"

WORKDIR /server

# Install dependencies - paths relative to repo root
COPY backend/package.json backend/yarn.lock* backend/package-lock.json* ./

RUN npm install --legacy-peer-deps

# Copy source - paths relative to repo root
COPY backend/ .

# Set environment for build
ENV NODE_ENV=production

# Build backend and admin
RUN npm run build

# Debug: Show build output structure
RUN echo "=== Build output ===" && ls -la .medusa/server/public/admin/ 2>/dev/null

# Copy admin build to multiple possible locations
RUN cp -r /server/.medusa/server/public/admin /server/public/ 2>/dev/null || mkdir -p /server/public && cp -r /server/.medusa/server/public/admin /server/public/

# Expose port
EXPOSE 9000

# Start script
CMD ["sh", "-c", "npx medusa db:migrate && npm run start"]
