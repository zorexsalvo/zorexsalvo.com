---
layout: post
title: How I Built This Blog?
image_path: img/jekyll.jpg
short_description: This blog site is made out of materializecss, jekyll, a bit of vue.js
                   and it is hosted on GitHub via GitHub Pages.
published: true
---
Last week, I've been tinkering with VueJS, then I just thought what if I use Vue JS with
materializecss. By the way, I'm not good with frontend, Vue.js is the first javascript
framework that I took interest in. So I'm really excited about what will happen if I
use __my__ favorite javascript and css frameworks.

At first, I have a semi-complex app idea in mind, but thinking how to do it knowing that
I am not that proficient yet in both of the frontend frameworks that I will be using, my
motivation is dying.

So last Saturday, after I just finished studying some of the essentials of Vue, I realized
again what if I just improve my blog site first? My previous blog site uses a ready
made jekyll-template I got from jekyllthemes.org.

So first, I created a static template, a very minimal-design, with Vue and MaterializeCSS.
That didn't satisfied me much as I want the functionality of my previous gh-pages to be put
on this new blog. So I studied how to port my static template to dynamic using Jekyll. I am
very familiar to what jekyll is using in templating (*it is called liquid I think*) since
that is very similar to Django Template Tags and Filters. I created layouts, post loops,
configs, and other initial configuration to reduce code repetitions.

Then, I created a github repository, setup my domain, then viola it is now available
in web. After that, I put all my blogs to my \_posts/ folder. Now I can manage my
blogs posts via GitHub.



*If there is anything you want to suggest to improve this site, other features, etc. please do
email me at zorexsalvo@gmail.com. I'm also planning to opensource this template once I finished
developing it.*
