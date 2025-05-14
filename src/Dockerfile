# Use an official Node runtime as a parent image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Install Firebase CLI globally
RUN npm install -g firebase-tools

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Expose the app's port (adjust if necessary for your app)
EXPOSE 8080

# Command to run the app inside the container
CMD ["npm", "run", "serve"]
