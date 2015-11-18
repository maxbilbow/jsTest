# Clojure code for RabbitMQ tutorials

Here you can find Clojure code examples from
[RabbitMQ tutorials](http://www.rabbitmq.com/getstarted.html).

## Requirements

To run this code you need [Leiningen](http://leiningen.org).

These tutorials will work on JDK 6 through 8 (Oracle or OpenJDK).

## Code

Code examples are executed via `lein run`:

[Tutorial one: "Hello World!"](http://www.rabbitmq.com/tutorial-one-java.html):

    lein run -m rabbitmq.tutorials.send
    lein run -m rabbitmq.tutorials.receive

[Tutorial two: Work Queues](http://www.rabbitmq.com/tutorial-two-java.html):

    lein run -m rabbitmq.tutorials.new-task
    lein run -m rabbitmq.tutorials.worker

[Tutorial three: Publish/Subscribe](http://www.rabbitmq.com/tutorial-three-java.html)

    lein run -m rabbitmq.tutorials.receive-logs
    lein run -m rabbitmq.tutorials.emit-log

[Tutorial four: Routing](http://www.rabbitmq.com/tutorial-four-java.html)

    lein run -m rabbitmq.tutorials.receive-logs-direct
    lein run -m rabbitmq.tutorials.emit-log-direct info

[Tutorial five: Topics](http://www.rabbitmq.com/tutorial-five-java.html)

    lein run -m rabbitmq.tutorials.receive-logs-topic
    lein run -m rabbitmq.tutorials.emit-log-topic info

[Tutorial six: RPC](http://www.rabbitmq.com/tutorial-six-java.html)

    lein run -m rabbitmq.tutorials.rpc-server
    lein run -m rabbitmq.tutorials.rpc-client

To learn more, visit [Langohr documentation](http://clojurerabbitmq.info) site.
