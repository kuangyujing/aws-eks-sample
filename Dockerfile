# Set base image
FROM node:latest

# Create a directory in container
WORKDIR /app

# Copy application source code to container
COPY package*.json ./
COPY index.js ./

# Install dependencies
RUN npm install

# Expose container port
EXPOSE 3000

# Run application
CMD [ "node", "app.js" ]

