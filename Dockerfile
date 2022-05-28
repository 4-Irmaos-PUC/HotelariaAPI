FROM node:alpine
WORKDIR /usr/src/app
RUN npm update
EXPOSE 3000
CMD npm start