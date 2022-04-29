FROM node:17-alpine

WORKDIR /home/node/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

USER node

CMD ["npm", "start"]
