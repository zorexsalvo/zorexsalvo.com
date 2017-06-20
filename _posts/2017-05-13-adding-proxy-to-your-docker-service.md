---
layout: post
title: Adding Proxy to Your Docker Service
image_path: https://www.docker.com/sites/default/files/social/docker-facebook-share.png
short_description: This is only a personal note for my docker service configuration in office network proxy.
tags: docker, networking, note
---

Have you ever experienced slow docker build even though your machine is on a network proxy?

Me? always.

Then this idea came from one of our interns. At first, what he did was to add environment variables inside his Dockerfile.

Seems a bright idea huh? but it is not a good one really because his image can be built only __IF__ he is in our office network.

There came a problem where he did not know what went wrong with his build on docker hub because "It ran on local machine". The problem was the http_proxy cannot be resolved by docker hub.

Thats the exact opposite of the Build, Ship, and Run Any App, Anywhere catchphrase of Docker. It didn't even pass the build part kekeke.

Then another idea came up, what if we add the proxy on the docker itself so that we do not have to specify the environment variable `HTTP_PROXY` to the Dockerfile. That is a great idea!

Here's how to do that:

First, create a systemd drop in directory
```
mkdir /etc/systemd/system/docker.service.d/
```

Then, create http-proxy.conf
```
touch /etc/systemd/system/docker.service.d/http-proxy.conf

## http-proxy.conf
[Service]
Environment="HTTP_PROXY=ip.of.your.proxy:port"
Environment="NO_PROXY=localhost,127.0.0.0/8"

```
Then, Flush Changes by doing:
```
sudo systemctl daemon-reload
```

And lastly, Restart Docker
```
sudo systemctl restart docker
```
To check if the environment variable is really added on your docker service, do `docker info`.

And pooof, notice the change in speed in your docker build!
