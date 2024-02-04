# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /TestChromeGitPod

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port your application runs on
EXPOSE 8080

# Run the Node.js application
CMD ["node", "index.js"]
