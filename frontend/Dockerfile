FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ARG VITE_BACKEND_SERVER
ENV VITE_BACKEND_SERVER=$VITE_BACKEND_SERVER

RUN npm run build

FROM nginx:stable-alpine
# Copy our custom routing rules
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
