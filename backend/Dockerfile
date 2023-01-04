FROM node:16-buster-slim

WORKDIR /app

COPY package*.json ./

ENV PORT 8000
ENV NODE_ENV production
RUN npm install

COPY . ./

EXPOSE $PORT

RUN apt-get update && apt-get install curl -y

HEALTHCHECK CMD curl -f http://localhost:$PORT || exit 1

CMD ["node","/app/app.js"]

