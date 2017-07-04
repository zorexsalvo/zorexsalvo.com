---
layout: post
title: Asynchronous Task with Celery and RabbitMQ
image_path: img/RabbitMQ_and_Docker.jpg
short_description: Personal note on how to implement asynchronous tasks on python with Celery and RabbitMQ
published: true
---
Slow API Responses? Browser Timeouts?

Maybe you have very slow processes like external API calls, email or sms services,
etc that do not really need to be processed synchronously before actually returning
an OK response.

Last week, I experience that \*awkward\* pause/site hangs/infinite loading/"a few moments
later" moment when I'm demonstrating my app to our QA. I didn't expect it to be like that
honestly cause I never experienced that on my local machine. As it turns out, my processing
is hanging on my emailing service part wherein I have to perform a request on our mail
server via SMTP. The response time is very inconsistent, and unless the mail server responds
or my process timeouts my app stays on that hanging state.

<img src="{{ site.baseurl }}/img/momentslater.jpg" width="100%" alt="A Few Moments Later">

Worry no more! because the Rabbit x Celery combo is here for you. RabbitMQ will be used as
the Message broker. It stores the queue of tasks then one-by-one it is executed by Celery.
How to use it? I have here a simple python that demonstrates it.

First, you have to install celery and RabbitMQ:

```
pip install celery==4.0.2
sudo apt-get install -y rabbitmq-server
```

Then create a script called task.py:

`touch tasks.py`

On tasks.py initialize celery:
```
from celery import Celery
app = Celery('tasks', broker='amqp://localhost//')
```


Then, create the method, decorate it with your celery object for it to be recognized by
celery.
```
@app.task
def create_a_slow_process_needs_async(job_name):
    print('Async job {}'.format(job_name))
```

After that you need to start your celery worker:
```
celery -A tasks worker  --loglevel=info

<console>
-------------- celery@zorexsalvo v4.0.2 (latentcall)
---- **** -----
--- * ***  * -- Linux-4.4.0-78-generic-x86_64-with-elementary-0.4.1-loki 2017-06-21 16:42:32
-- * - **** ---
- ** ---------- [config]
- ** ---------- .> app:         tasks:0x7fd374ebb210
- ** ---------- .> transport:   amqp://guest:**@localhost:5672//
- ** ---------- .> results:     disabled://
- *** --- * --- .> concurrency: 4 (prefork)
-- ******* ---- .> task events: OFF (enable -E to monitor tasks in this worker)
--- ***** -----
 -------------- [queues]
                .> celery           exchange=celery(direct) key=celery

[tasks]
  . tasks.reverse

[2017-06-21 16:42:32,523: INFO/MainProcess] Connected to amqp://guest:**@127.0.0.1:5672//
[2017-06-21 16:42:32,529: INFO/MainProcess] mingle: searching for neighbors
[2017-06-21 16:42:33,545: INFO/MainProcess] mingle: all alone
[2017-06-21 16:42:33,556: INFO/MainProcess] celery@zorexsalvo ready.
```

Then try executing the job in the shell:
```
Python 2.7.12 (default, Nov 19 2016, 06:48:10)
[GCC 5.4.0 20160609] on linux2
Type "help", "copyright", "credits" or "license" for more information.
>>> import tasks
>>> tasks.create_a_slow_process_needs_async.delay('Send email blast!!')
<AsyncResult: 41ba4299-77a1-421b-9c35-873347f98b14>
```
