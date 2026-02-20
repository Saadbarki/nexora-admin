FROM node:20-alpine

WORKDIR /app

# Copy package files first to cache layers
COPY package*.json ./
RUN npm install --production

# Copy the rest of the source code
COPY . .

EXPOSE 8888

CMD ["npm", "run", "start"]
