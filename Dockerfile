FROM node AS builder
WORKDIR /app
COPY /client /app
RUN npm install
RUN npm run build

FROM node
WORKDIR /app
COPY . /app
RUN npm install
COPY --from=builder /app/build ./client/build
CMD NODE_ENV=production node server.js
EXPOSE 8080
