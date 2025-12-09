FROM node:20-alpine

WORKDIR /server

# Install dependencies - paths relative to repo root
COPY backend/package.json backend/yarn.lock* backend/package-lock.json* ./

RUN npm install --legacy-peer-deps

# Copy source - paths relative to repo root
COPY backend/ .

# Build
RUN npm run build

# Expose port
EXPOSE 9000

# Start script
CMD ["sh", "-c", "npx medusa db:migrate && npm run start"]
