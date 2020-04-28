(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{V3zU:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return l}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var r=a("7ljp"),i=a("013z");a("qKvR");function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var o={},s={_frontmatter:o},c=i.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(r.b)(c,n({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"As an introduction to the scope of the data replication in the context of distributed system, we encourage to read our summary in ",Object(r.b)("a",n({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-data-ai-analytics/data/data-replication/"}),"this article"),"."),Object(r.b)("p",null,"In this section we are going to address the data replication in the context of Kafka using IBM Geo Replication and Kafka Mirror Maker 2."),Object(r.b)("h2",null,"Problem statement"),Object(r.b)("p",null,"We suppose we need to replicate data in Kafka topics between different Kafka clusters running in different availability zones or data centers. There are multiple motivations for such replication. We can list at least the followings:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Support disaster recovery, using different data centers to replicate microservice generated data in an active - passive mode."),Object(r.b)("li",{parentName:"ul"},"Move data closer to end user to improve performance and latency, this is more an active - active model, where the same microservices are deployed on the different data centers."),Object(r.b)("li",{parentName:"ul"},"The need to build on-premise data aggregation or data lake layer to perform batch analytics jobs from data gathered from different remote environments."),Object(r.b)("li",{parentName:"ul"},"Isolate secure data from on-premise cluster, with data encryption and data transformation to remove personal identifiable information, but still exchange such data between environments.")),Object(r.b)("p",null,"We are proposing two environments:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"One running a local, on-premise cluster using Kafka 2.4 open source packaging, like Strimzi vanilla Kafka or Red Hat AMQ Streams, and IBM Event Streams on Cloud.")),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABxklEQVQoz0WSy27TUBCG8yCseQlehQ07noAlYskTsESCVOomYsFNLFigoioLxII2cZqk5aJGTeP4Ul/O3fbHOJbgWNacMx7/55/5/5FzLV0HIUCaQbzvUEoSbZ/r8F5i1+DbIFGSspyc97aQXEMj+764r7GNZ+R9YHu7J1qsuN3l1CpQVJY/O01eaqxpqbUlzRVpesciWhLHCbb1+OCpjWeTGrT1qMYyOlteStGMo6Mx6/XlgYFygU9zxU2iqQpHkiqM80QXC16NXzOfR4e6ThhmquH9j1ouNHKJY/Rzm1CZBmUC5V0l7Wq0FpDSYYWB0o2MQnLGgB9G4Y18z3PKqhb2hqTQlNKN6QEfvljz4NkZk2mMMzUnbyJePvnMyfE51jryzJLEiqLWfE+uON0tuMg2eBv4OokYP/3Ctw8rjNSqIC1PVynTZUYhs5utf3N9HbPbpGRJKYJ4AXJ0Dt5dnXL/42PuvX3E89lElILtTcLm145sXx4AdQ+IDLdfbSNqSztN24pyopqcnQhmrCjthGm8Jbc1ha4OYnixxaB8Q5DoeoGCYWRlfsbKz2If64Y4vJ0ADrbp7dEbpjs8g43+ve3/vRNyfwFL7Ftpi6AglwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Replication with mirror maker",title:"Replication with mirror maker",src:"/refarch-eda/static/4eb3c07250ca87079b64c33108ba2e61/3cbba/replication-2.png",srcSet:["/refarch-eda/static/4eb3c07250ca87079b64c33108ba2e61/7fc1e/replication-2.png 288w","/refarch-eda/static/4eb3c07250ca87079b64c33108ba2e61/a5df1/replication-2.png 576w","/refarch-eda/static/4eb3c07250ca87079b64c33108ba2e61/3cbba/replication-2.png 1152w","/refarch-eda/static/4eb3c07250ca87079b64c33108ba2e61/ca8b9/replication-2.png 1320w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"In the figure above, Mirror Maker 2.0 is used to do bi-directional replication between topics defined in both cluster. The grey topic is replicated from right to left, and the Mirror Maker 2.0 source connector runs close to the target cluster, the left cluster. The light blue topic is replicated from left to right by the second Mirror Maker 2.0. Microservices on both data centers can consume messages from both topics."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"One running Event streams on Openshift on-premise, and using Geo-replication to Event Streams on IBM cloud.")),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.93055555555555%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABrUlEQVQoz1WSX24TMRDG9zpwBG7BNUDqETgCL7xzACReWygC1EBBImooiKYg2oqkVUObqEl2vV6P//2YdcNDLX2yPR5/M/PNVCIZ5yIpQYwwX8DVdSTqPWfouoT4jM8BiQE1lbXyhhvX8H/1b5ICVd0Ia9MxmU7Z//SZ2WxB2wW+DA84PTvFiVfChBWndl9sB6MRjW1JGvHk9wnj8TFJM3DBU5lWSoTL6RmvX21zfnFe7h/23vPzeEyIWYkijXNkzfrHt++8e/OWerUuhMPhkMFgoNVkOi9UVp1/XRoOp5ZlB0GjzG5aFiYpSVQ5hNYlWhGs65i7mrlvuGqWGGOREPAhYlqrGSrhn7+Wh0+PePDkK9ujaxUu8GxnwtbzMXtHKqjqsmo9vXgvLj5yf/cx93Yf8XKyXypxmlVU8b0PGtRRNUYwndBJoK+p16m1lsY0iGYlqqHVxlljWNdL5nbF0tZaSSjZN2rv/YtfX3K3qEn6MSbtpI/qmDRij6z6qdAu3HbZWZIS9J3PqX8LingHpcshZPrREbkdj7LfQS7kOlg6Ogr95JMS5A3SBpvzP2tXYFq1aAElAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Replication with geo replication",title:"Replication with geo replication",src:"/refarch-eda/static/765787f0bcf0770305bbb983eb3b6215/3cbba/replication-1.png",srcSet:["/refarch-eda/static/765787f0bcf0770305bbb983eb3b6215/7fc1e/replication-1.png 288w","/refarch-eda/static/765787f0bcf0770305bbb983eb3b6215/a5df1/replication-1.png 576w","/refarch-eda/static/765787f0bcf0770305bbb983eb3b6215/3cbba/replication-1.png 1152w","/refarch-eda/static/765787f0bcf0770305bbb983eb3b6215/c86d5/replication-1.png 1326w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"Then we want to address two main scenarios:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"#active-passive"}),"Active - passive"),", which addresses more a disaster recovery approach where consumers reconnect to a new cluster after the first one fails."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"#active-active"}),"Active - active")," deployments where participant clusters have producers and consumers and some topics are replicated so the messages are processed by different consumers")),Object(r.b)("p",null,"But first we need to review the new replication capability introduced with Kafka 2.4, the ",Object(r.b)("a",n({parentName:"p"},{href:"https://cwiki.apache.org/confluence/display/KAFKA/KIP-382%3A+MirrorMaker+2.0"}),"Mirror Maker 2.0"),"."),Object(r.b)("h2",null,"Mirror Maker 2.0"),Object(r.b)("p",null,"Mirror maker 2.0 is a new feature as part of Kafka 2.4 to support data replication between clusters. It is based on Kafka Connect framework, and it supports data and metadata replication, like the topic configuration, the offset and the consumer checkpoints are synchronously replicated to the target cluster."),Object(r.b)("p",null,"Mirror maker uses the cluster name or identifier as prefix for topic, and uses the concept of source topic and target topic. The specification is described in detail in ",Object(r.b)("a",n({parentName:"p"},{href:"https://cwiki.apache.org/confluence/display/KAFKA/KIP-382%3A+MirrorMaker+2.0#KIP-382:MirrorMaker2.0-RemoteTopics,Partitions"}),"this KIP 382"),"."),Object(r.b)("p",null,"To test the tool, we can use the Strimzi Kafka latest docker image deployed on Openshift cluster (We address Strimzi deployment in ",Object(r.b)("a",n({parentName:"p"},{href:"../deployments/strimzi/deploy/"}),"this note"),"). For mirror maker 2.0, the deployment descriptor are in the ",Object(r.b)("a",n({parentName:"p"},{href:"https://strimzi.io/downloads/"}),"Strimzi project")," under the ",Object(r.b)("inlineCode",{parentName:"p"},"examples/kafka-mirror-maker-2")," folder (we have a copy of this yaml file, prepared for our replication, in the deployments/strimzi folder of this project)."),Object(r.b)("p",null,"To define the clusters and topic configuration we use a properties file. One simple example to replicate from IBM Cloud Event streams to Kafka on premise is in the folder ",Object(r.b)("a",n({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-eda/blob/master/deployments/strimzi/es-mirror-maker.properties"}),"deployments/strimzi/es-mirror-maker.properties")),Object(r.b)("p",null,"Using the same kafka image we can start a mirror maker container with:"),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{className:"language-properties"}),"clusters = source, target\nsource.bootstrap.servers = my-cluster-kafka-bootstrap-jb-kafka-strimzi.gse-eda-demos-fa9ee67c9ab6a7791435450358e564cc-0001.us-east.containers.appdomain.cloud:443\nsource.security.protocol=SSL\nsource.ssl.truststore.password=password\nsource.ssl.truststore.location=/home/truststore.jks\ntarget.bootstrap.servers = kafka1:9092\n# enable and configure individual replication flows\nsource->target.enabled = true\nsource->target.topics = test\n")),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{className:"language-bash"}),"./connect-mirror-maker.sh /home/strimzi.properties \n")),Object(r.b)("p",null,"When Mirror maker starts it will create some topics on source cluster to manage the offsets and topic metadata:"),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{}),"mm2-configs.target.internal                                   1            3\nmm2-offset-syncs.target.internal                              1            3\nmm2-offsets.target.internal                                   25           3\nmm2-status.target.internal                                    5            3\n")),Object(r.b)("p",null,"And on the target cluster:"),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{}),"__consumer_offsets\nheartbeats\nmm2-configs.source.internal\nmm2-offsets.source.internal\nmm2-status.source.internal\nsource.checkpoints.internal\nsource.heartbeats\nsource.test\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"source.test")," topic is the replicated ",Object(r.b)("inlineCode",{parentName:"p"},"test")," topic from the source cluster."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"662px"}},"\n      ",Object(r.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.583333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABjklEQVQoz22SS2/TQBSF/fNBILGqkBA7FgjEgl3VqmZRFxohUiq3inkkMYYEO45rZ+wQP8b2x8ykRllwpDOPOzP33MdYKHRdT9drgpr2s7I3TU25y6nKQq0bZKfOlL2SmLW+o9GrRwOtruuMUY+y7WnazrBV++3mB97HF/juS3VBUOUBvmcjYhdRbAnjhOQuRUpJ27aGVprl3E48wjA0UWgVKRsjIuuUdeSySW6NZLG+xr95RbZ0SNOEszPbvBugg7OqqmI6nRKtVux2JXVdG0WNPxtBMB4xGzlUIuPum8vN8WuW4wvSZI1t2wRBQFmWCCFMQBYH0Aqa/X0Z8nDBxfMnvDt6wPbXjNXnS06OHvH99C1ZkuA4DnEcm6z+RTgU8xDDfhf/5oNyeP70IU30k+jqPc6zx3w9foPIUsbjKzzPY7FYsFIZ6uysww4dUqMqcpbuJ6ajc9WIkHj2hej6kmzmIVQ5fN9nMpkwn8+JomjvkP+g34dpvo+pZS1JlYMsL5D35/qr6a5qJ0MzNf8CiV5c/93+qbMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"mm k connect",title:"mm k connect",src:"/refarch-eda/static/f6dcdf7aeb09f297e5f953dfe6b42b30/7a604/mm-k-connect.png",srcSet:["/refarch-eda/static/f6dcdf7aeb09f297e5f953dfe6b42b30/7fc1e/mm-k-connect.png 288w","/refarch-eda/static/f6dcdf7aeb09f297e5f953dfe6b42b30/a5df1/mm-k-connect.png 576w","/refarch-eda/static/f6dcdf7aeb09f297e5f953dfe6b42b30/7a604/mm-k-connect.png 662w"],sizes:"(max-width: 662px) 100vw, 662px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("h2",null,"Active - Passive"),Object(r.b)("p",null,"To support active - passive, one site has producers and consumers on local topics, and topic data are replicated on active cluster without online consumers"),Object(r.b)("h2",null,"Active - Active"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"producers, deployed on IBM cloud within Openshift, send messages to Event streams on cloud, on the ‘reeferTelemetries` topic. The explanation of the telemetry simulator producer deployment is done ",Object(r.b)("a",n({parentName:"li"},{href:"https://ibm-cloud-architecture.github.io/refarch-reefer-ml/infuse/simul-app/#prepare-for-kubernetes-deployment"}),"here."))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-design-patterns-data-replication-mdx-fc7ee1ed21acbb8db6b1.js.map