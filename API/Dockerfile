# syntax=docker/dockerfile:1

FROM node:24-alpine

WORKDIR /app

COPY API/package*.json ./

RUN npm install --omit=dev

COPY API/ .

EXPOSE 3000

CMD ["node", "index.js"]