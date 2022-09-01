ARG NODE_SUBVERSION
FROM node:17-alpine$NODE_SUBVERSION
COPY ./app.js /app.js
COPY package.json /package.json
RUN yarn
EXPOSE 4000
CMD ["node", "app.js"]
