# Use a Node image that has the necessary Playwright system dependencies
FROM mcr.microsoft.com/playwright/node:20-slim

# Set the working directory
WORKDIR /app/product-scraper

# Copy the monorepo-level package files
COPY package.json pnpm-lock.yaml ./

# Change to the backend directory for pnpm installation
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy only the product-scraper directory for the rest of the build
COPY product-scraper /app/product-scraper/

# Set the final working directory
WORKDIR /app/product-scraper

# Install all dependencies using pnpm
# This should also install the local workspace dependencies and their node_modules
RUN pnpm install --frozen-lockfile --production

# Build the entire monorepo project
# This assumes the build command will compile the TS into JS dist/ files
RUN pnpm build

# Final app configuration (Prisma and start command)
# Generate Prisma Client (must run after building @scraper/db)
RUN pnpm --filter @scraper/db exec prisma generate

# Final image configuration
EXPOSE 10000

# Set the start command to run the compiled API
CMD ["node", "apps/api/dist/server.js"]