FROM node:21-alpine

WORKDIR /app/dhm-frontend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["npm","start"]
