FROM jekyll/jekyll:3.6
LABEL maintainer="Zorex Salvo <zorexsalvo@gmail.com>"

COPY . /opt/
WORKDIR /opt/

EXPOSE 4000

CMD ["jekyll", "serve"]
