# Use an official Node.js image as the base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set the port on which the application will run
ENV PORT=4000

# Expose the application port
EXPOSE $PORT

# Start the application
CMD [ "npm", "start" ]
