---
layout: post
image_path: img/gogs.png
title: Self-Hosted Git Server with Gogs
published: true
short_description: An easy to deploy git server.
tags: [git, server, docker]
---
### What is Gogs?
Gogs (gogs.io) is a painless self-hosted Git service.

If you want to have your own GitHub-like service, it's the best choice
for me, since I made it work in less than an hour. Maybe you're thinking,
why would anyone want to create another service like GitHub when clearly
there is already GitHub? Me, I needed to have private repositories for some
of my projects. I can't do that in Github unless I upgrade my account to a
"Developer" plan for $7/month. To be honest, for me that is already expensive,
to pay $7 just for private repositories, or maybe I'm just really poor. I'm
not descrediting GitHub in any way, for public repos I'll still choose GitHub.


### First Things First
You'll need: to have atleast basic knowledge on docker, and you need docker
installed on your machine of course. PS, GOGS installation don't have to be
always dockerized, there are also bare metal installation guides but just for
this post and the resources that I have we'll stick to the docker version, also
you'll need a VPS for it to be accessible in the cloud.

When you're done with the first steps, just pull the official gogs docker image: <br />
`$ docker pull gogs/gogs`

You'll also have to create a db (mysql, postgres, etc) container so: <br />
`$ docker pull postgres`
<script src="https://gist.github.com/zorexsalvo/e65c3e6f9ce68665fe2c8ba37022ab64.js"></script>

Once db is ready, you can already run your gogs-container:
```
$ docker run --name gogs -d -v /var/gogs/:/data gogs/gogs
```

After that, once you open the address, you'll see the Web UI Server Configuration where
you'll key-in all the server details, database, application name, administrator, host,
domain, etc. Once you finished all of that, you're now good to go.

__For you reference:__
- I'm hosting it (together w this personal site and other personal apps) on a vps (1GB RAM,
1CPU Core, 20GB SSD Storage, 1TB Transfer, 40Gbps Network In 1000Mbps Network Out) for $5/mo;
I bought my domain from Godaddy for less 1$; am using nginx for reverse proxy.

__For personal git server, Gogs is really my to-go server. I haven't had any problems setting it up,
it has the essential functionalities you are looking for a git server, and it is really lightweight!__
<img src="{{ site.baseurl }}/img/gogs.png" width="100%" alt="git.zorexsalvo.com">
