FROM node:20-alpine

# Install build dependencies
RUN apk add --no-cache python3 make g++ && echo "Build v5 - Debug"

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

# Debug: Show build output structure
RUN echo "=== Build output ===" && ls -la .medusa/ && ls -la .medusa/server/ && ls -la .medusa/server/public/ 2>/dev/null || echo "No public dir"

# Start script - debug paths first
CMD ["sh", "-c", "echo '=== Runtime check ===' && pwd && ls -la .medusa/server/public/admin/ 2>/dev/null && npx medusa db:migrate && npm run start"]
