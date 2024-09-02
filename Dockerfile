FROM node:20.12.1-alpine AS base

WORKDIR /app

COPY package* .

RUN npm install --ignore-scripts

COPY . .

USER node

EXPOSE 6060

CMD ["node", "index.js"]