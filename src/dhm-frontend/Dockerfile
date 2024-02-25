FROM node:latest

WORKDIR /app/dhm-frontend

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000:3000

RUN npm run build

CMD ["npm","start"]
