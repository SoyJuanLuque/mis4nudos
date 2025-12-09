FROM node:20-alpine

# Install build dependencies
RUN apk add --no-cache python3 make g++ && echo "Build v4 - Admin forced"

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

# Expose port
EXPOSE 9000

# Start script
CMD ["sh", "-c", "npx medusa db:migrate && npm run start"]
