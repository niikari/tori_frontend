FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# RUN chmod a+x public/env.js

EXPOSE 3000

CMD ["npm", "start"]
