# Use an official Node.js image as the base
FROM node:16

RUN mkdir -p /usr/src/app

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json /usr/src/app

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . /usr/src/app

# Set the port on which the application will run
ENV PORT=4000

# Expose the application port
EXPOSE $PORT

# Start the application
CMD [ "npm", "start" ]
