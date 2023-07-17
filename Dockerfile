# Base image
FROM node:18-alpine as build

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the SvelteKit app
RUN npm run build

# Use a smaller base image to reduce final size
FROM node:18-alpine

WORKDIR /app

# Bring built artifacts from build stage
COPY --from=build /app .

# Expose port 4173 for the app
EXPOSE 4173

# Start the app
CMD ["npm", "run", "preview"]
