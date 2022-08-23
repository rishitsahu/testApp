ARG NODE_VERSION
FROM node:$NODE_VERSION-alpine3.14
COPY ./app.js /app.js
COPY package.json /package.json
RUN yarn
EXPOSE 3000
CMD ["node", "app.js"]
