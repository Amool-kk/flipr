FROM node:16-buster-slim

WORKDIR /app

COPY package*.json ./

ENV PORT 8000
ENV NODE_ENV production
RUN npm install

COPY . ./

EXPOSE $PORT

CMD ["node","/app/app.js"]
