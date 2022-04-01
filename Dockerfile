
FROM alpine:edge

USER root

RUN apk add openjdk11 
RUN java --version

#install npm
#RUN apk update && apk upgrade -y && \
 #   apk add -y nodejs \
  #  npm                       # note this one
RUN apk add  --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/v3.7/main/ nodejs=8.9.3-r1
    
#RUN \
#add-pkg --repository http://dl-cdn.alpinelinux.org/alpine/edge/community
RUN apk add --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/testing firefox
	
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV REST_HOST=$REST_HOST
ENV REST_PORT=$REST_PORT

# install and cache app dependencies
COPY package.json /app/package.json

#Global npm dependencies
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

#optionally if you want to run npm global bin without specifying path
ENV PATH=$PATH:/home/node/.npm-global/bin
RUN npm install -g
COPY . /app

#change permissions for webdriver-update
RUN chmod -R 777 ./

RUN webdriver-manager update
RUN npm test
WORKDIR ./Reports
RUN ls -lh
#RUN cat 2020-12-23.html
