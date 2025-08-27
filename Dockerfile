FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

COPY .env .

RUN npm run build 

EXPOSE 3001

CMD [ "npm", "run", "start:prod" ]