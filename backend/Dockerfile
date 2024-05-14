FROM node:20.12.2

WORKDIR /api/

COPY . .

RUN npm i 
RUN npm i typescript

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/server.js"]
