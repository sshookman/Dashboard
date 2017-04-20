FROM resin/raspberrypi3-alpine-node:slim
MAINTAINER Sean Shookman <SMS1127@gmail.com>

EXPOSE 3000

WORKDIR /app
ADD . /app

RUN ["npm", "install"]
CMD ["npm", "start"]
