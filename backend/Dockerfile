FROM node:20-alpine

WORKDIR /server

# Install dependencies
COPY package.json yarn.lock* package-lock.json* ./

RUN npm install --legacy-peer-deps

# Copy source
COPY . .

# Build
RUN npm run build

# Expose port
EXPOSE 9000

# Start script
CMD ["sh", "-c", "npx medusa db:migrate && npm run start"]
