FROM node:17-alpine3.14
ARG SERVICE_NAME
COPY ./app.js /app.js
COPY package.json /package.json
RUN yarn
EXPOSE 4000
CMD ["node", "app.js"]
