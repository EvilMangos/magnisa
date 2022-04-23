FROM node:17.0.1

WORKDIR /magnisa

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
