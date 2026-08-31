FROM node:20

WORKDIR /app

# Install root (frontend) dependencies
COPY package*.json ./
RUN npm install

# Install server dependencies
COPY server/package*.json ./server/
RUN cd server && npm install

# Copy the rest of the source code
COPY . .

# Build the frontend and move it into server/build
RUN npm run build

WORKDIR /app/server

EXPOSE 8181

CMD ["node", "index"]
