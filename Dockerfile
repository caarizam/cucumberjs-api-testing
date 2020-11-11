FROM node:12.14.1
WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .


EXPOSE 8888
CMD [ "npm", "verify" ]
