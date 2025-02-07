# # Use the official Node.js 16-slim image
# FROM node:16-slim

# # Install necessary dependencies for Puppeteer
# RUN apt-get update && apt-get install -y \
#     libnss3 \
#     libatk-bridge2.0-0 \
#     libatk1.0-0 \
#     libcups2 \
#     libxss1 \
#     libappindicator3-1 \
#     libasound2 \
#     fonts-liberation \
#     x11-utils \
#     && rm -rf /var/lib/apt/lists/*

# # Set the working directory inside the container
# WORKDIR /app

# # Copy all your application files to the container
# COPY . .

# # Install app dependencies inside the container
# RUN npm install

# # Expose port 5000 for your app
# EXPOSE 5000

# # Define the command to run your app
# CMD ["npm", "start"]



# FROM node:18

# # Install latest chrome dev package and fonts
# RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
#     && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
#     && apt-get update \
#     && apt-get install -y google-chrome-unstable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf \
#     --no-install-recommends \
#     && rm -rf /var/lib/apt/lists/*

# # Create app directory
# WORKDIR /usr/src/app

# # Copy package files
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy app source
# COPY . .

# # Expose port (use the port your app runs on)
# EXPOSE 3000

# # Start command
# CMD [ "npm", "start" ]


# FROM ghcr.io/puppeteer/puppeteer:latest

# USER root

# WORKDIR /usr/src/app

# COPY package*.json ./
# RUN npm install
# RUN npx puppeteer browsers install chrome


# COPY . .

# CMD ["node", "server.js"]


# FROM node:20-slim

# # Install required dependencies including Chrome
# RUN apt-get update && apt-get install -y wget curl \
#     && wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
#     && apt install -y ./google-chrome-stable_current_amd64.deb \
#     && rm ./google-chrome-stable_current_amd64.deb

# WORKDIR /usr/src/app

# COPY package*.json ./
# RUN npm install

# COPY . .

# ENV PUPPETEER_EXECUTABLE_PATH="/usr/bin/google-chrome-stable"

# CMD ["node", "server.js"]



# FROM node:20-slim

# # Install dependencies and Chrome
# RUN apt-get update && apt-get install -y \
#     wget \
#     gnupg \
#     ca-certificates \
#     && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
#     && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
#     && apt-get update \
#     && apt-get install -y google-chrome-stable \
#     && rm -rf /var/lib/apt/lists/*

# WORKDIR /usr/src/app

# # Copy package files first for better caching
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy rest of the application
# COPY . .

# # Set Chrome path
# ENV PUPPETEER_EXECUTABLE_PATH="/usr/bin/google-chrome-stable"
# ENV PUPPETEER_SKIP_DOWNLOAD="true"

# # Expose port
# EXPOSE 5000

# # Start command
# CMD ["node", "server.js"]



FROM node:20-slim

# Install dependencies and Chrome
RUN apt-get update && apt-get install -y \
    wget \
    gnupg \
    ca-certificates \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list \
    && apt-get update \
    && apt-get install -y google-chrome-stable \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy the rest of the app
COPY . .

# Set environment variables
ENV PUPPETEER_EXECUTABLE_PATH="/usr/bin/google-chrome"
ENV PUPPETEER_SKIP_DOWNLOAD="true"

# Expose the port
EXPOSE 5000

# Start the application
CMD ["node", "server.js"]
