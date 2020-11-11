FROM node:12.14.1
WORKDIR /usr/src/app
COPY features reporting reports ./
COPY package.json config.ts tsconfig.json ./
RUN npm install

EXPOSE 8888
CMD [ "npm", "test" ]
