FROM node:9.0
LABEL maintainer="Zorex Salvo <zorexsalvo@gmail.com>"

COPY package.json /opt/
RUN npm install

COPY . /opt/
EXPOSE 8080
WORKDIR /opt/

CMD ["npm", "run", "dev"]
