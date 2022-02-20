FROM node:7
WORKDIR /app

RUN npm install nodejs
COPY . /app
CMD node server.js
EXPOSE 8081
