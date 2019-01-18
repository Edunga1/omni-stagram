FROM node:10-alpine as builder

# Environments
ENV NODE_ENV=production

# 사용자 및 작업위치 설정
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# dependencies
COPY package.json .
RUN npm install

# copy app source
COPY . .

# build
RUN npm run build

FROM nginx:alpine

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
