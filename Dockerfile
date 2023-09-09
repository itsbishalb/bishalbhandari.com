
FROM node:lts AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:alpine
EXPOSE 80
COPY --from=build /app/public /usr/share/nginx/html
