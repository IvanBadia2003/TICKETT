FROM node:18.17.1

WORKDIR /usr/src/app

COPY src/js/package*.json ./

RUN npm install express

COPY src/html /usr/src/app/html
COPY src/css /usr/src/app/css
COPY src/js /usr/src/app/js
COPY src/scss /usr/src/app/scss
COPY src/index.html /usr/src/app

COPY src/js/server.js /usr/src/app

COPY . .

EXPOSE 4000

CMD ["node", "server.js"]
