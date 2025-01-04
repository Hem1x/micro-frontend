FROM node:18-alpine

WORKDIR /app

COPY . .

RUN rm -rf node_modules pnpm-lock.yaml
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build

EXPOSE 5003

CMD [ "npm", "run", "preview" ]