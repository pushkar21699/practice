FROM node:7
WORKDIR /app

RUN npm install nodejs
COPY . /app
CMD node server1.js
EXPOSE 3000