# Use the official Node.js image as the base image
FROM node:22

# Set the working directory in the container
WORKDIR /app

# Install Firebase CLI globally
RUN npm install -g firebase-tools

# Copy the package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install the dependencies inside the container
RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Expose the port the app will run on
EXPOSE 8000

# Command to start the application
CMD ["npm", "run", "dev"]
