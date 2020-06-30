(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{PCxb:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return r})),t.d(a,"default",(function(){return l}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var s=t("7ljp"),c=t("013z");t("qKvR");function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}var r={},n={_frontmatter:r},i=c.a;function l(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,s,c={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,["components"]);return Object(s.b)(i,o({},n,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h2",null,"Consumer groups"),Object(s.b)("p",null,"You can review the major concepts for Kafka Consumer in ",Object(s.b)("a",o({parentName:"p"},{href:"../../kafka-producers-consumers/#kafka-consumers"}),"this note")," and the ",Object(s.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/docs/EventStreams?topic=EventStreams-consuming_messages#consumer-groups"}),"product documentation"),".\nThe following figure summarizes the concepts involved in this lab: Consumers belong to ",Object(s.b)("strong",{parentName:"p"},"consumer groups")," and partitions are dynamically allocated to consumer(s) within the group."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.388888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB2ElEQVQoz1VSaXObMBTk//+ifm0802ka10nqYgdjjAFjDJj7EIek7ROEJtHMjmaennb3HZqUEuqoe8FyPscWCCERxAPOfg/n2uNMcIMBXtAjLTi0r0Qzmfo0jAvxh4A6rJPYHlr8fKnw+FpjvS2x0Qu8HctJQPuczDkwEspGIkoFkeIdkmICRS0QphzffzdYPbdYbRj0QwLjeMWbGcEPB2hpKZCQ1XsuYHoMz2aDrdVAP9V4MSroVg2HSioqgVvCcYnG/4QPRPi6T6EbASHC5UaEI5/LUwjog3kZYV1HuPRouh0JMHjhiGs8Is5ImLDaNPj2Y4Z+yGCdY5inBJ4i7AeJBS5Z3p077J0ONpFWVOItE7BDjnFchgfsTh3WO4b1nsGgfDUgdStRLadS0pIjo9K9kB7IleEyuHeBXmBylbYSHZ/7PFBFQSVhZxJngpVInFKJkGJRLaFxSuBixi2lcn1aCeqZQ2uwtTvcKanqJe40qEShVSQCxwkSadUhK0rUbUvCgKacJfk8FMtn+HNs8ffUTMPY2y0yhkk5bmYHbi7x6An8Ijz5koZUwLv4uIZ3EsPXtWl7IK/ltDYF3Q37cN9Qj5t3p0Ys4FBvHSL3Egb7lsOJahIF/gFf9vlwL3VA+QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"consumer groups",title:"consumer groups",src:"/refarch-eda/static/75701f1ef05216ee0b2dab14e2541f68/3cbba/consumer-groups.png",srcSet:["/refarch-eda/static/75701f1ef05216ee0b2dab14e2541f68/7fc1e/consumer-groups.png 288w","/refarch-eda/static/75701f1ef05216ee0b2dab14e2541f68/a5df1/consumer-groups.png 576w","/refarch-eda/static/75701f1ef05216ee0b2dab14e2541f68/3cbba/consumer-groups.png 1152w","/refarch-eda/static/75701f1ef05216ee0b2dab14e2541f68/6e3b3/consumer-groups.png 1252w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("h2",null,"Considerations"),Object(s.b)("p",null,"Kafka automatically detects failed consumers so that it can reassign partitions to working consumers. "),Object(s.b)("p",null,"The consumer can take time to process records, so to avoid the consumer group controler removing consumer taking too long, it is possible to set the ",Object(s.b)("a",o({parentName:"p"},{href:"https://kafka.apache.org/documentation/#max.poll.interval.ms"}),"max.poll.interval.ms")," consumer property. If poll() is not called before expiration of this timeout, then the consumer is considered failed and the group will rebalance in order to reassign the partitions to another member.\nThe second mechanism is the heartbeat consumers send to the group cordinator to show they are alive. The ",Object(s.b)("a",o({parentName:"p"},{href:"https://kafka.apache.org/documentation/#session.timeout.ms"}),"session.timeout.ms")," specifies the max value to consider before removing a non responding consumer. "),Object(s.b)("h2",null,"Offset"),Object(s.b)("p",null,"Consumers do a read commit for the last processed record: "),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"676px"}},"\n      ",Object(s.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.513888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB7klEQVQoz21SiY7aMBTM//9XV2qrXdruboEFAoQEct8HsR1Px05YVVUtjfz8jvF7YzuT1vBiBfcqcbgqC5fYBwrHG8/BjIfPvc05j/h+iZmcopngtL3G9iJh1te1QE7nXWqs9gKavg9fIkiVtV9dge4OhMWEzVKzPgtktUY3amw8ScJB80aBtqvx+6yQ1wP6YWAnE30NvEggrQSatoGfaORVi6S801aom4qXTYiLHk3X2xqnI+HOHxElKd5JeEtbZGXDoEZWFBxrRJiPiLMclxTwoxLXpLcyZUUGP6VktxpxXuMYajgNRza6mPWyExiEtvbGE6g7c5lE2U3W9+HPMlQ8H0Np4+5NssaGrXSOoF5vR4kTE1Z7aQlM0i+X2I14ehvxfpIUX+J5K9ixtFqtief1gO8bQalmnxcpOMDcUVpyXOoSpvMeZQqbo8C4dMzPgGnSCGJpcwzeDyP9esHcpaMX68yHyUjacJyaqNoJXT8tZHPOcJ/gcuxumFDUCkotLEuOgWMOijdTU4QZ+GKaoitcImm7NpIsJSQycfDhNGPULxDwKFVWqU/ST8If6xhPqxA/twUOlwGn6zzaTDiTRmmHLy8Bvr0mlKMmocTFEJb/EBojzXN+nQhlxRa0xN/rMbL5n2EcIckSjt//N+cPdiVJntes83wAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"of-1",title:"of-1",src:"/refarch-eda/static/6804c4c12cc260f154d7de73a61b4cf6/71afc/offsets.png",srcSet:["/refarch-eda/static/6804c4c12cc260f154d7de73a61b4cf6/7fc1e/offsets.png 288w","/refarch-eda/static/6804c4c12cc260f154d7de73a61b4cf6/a5df1/offsets.png 576w","/refarch-eda/static/6804c4c12cc260f154d7de73a61b4cf6/71afc/offsets.png 676w"],sizes:"(max-width: 676px) 100vw, 676px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("p",null,"When a consumer starts and is assigned a partition to consume, it will start at its group’s committed offset or latest or ealiest as ",Object(s.b)("a",o({parentName:"p"},{href:"https://kafka.apache.org/documentation/#auto.offset.reset"}),"auto.offset.reset")," (When there is a committed offset, the auto.offset.reset property is not used)."),Object(s.b)("p",null,"If a consumer fails after processing a message but before committing its offset, the committed offset information will not reflect the processing of the message. "),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.26388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB8ElEQVQoz01SiW6bQBDl//+mf9BWqSo5bWzHdp1gYwzmNOY0sLvs8TpA6makEYt29PYdY2ltMFbTaaSlQlYpXOl79KjPCudAoSjovjEwNFrWCpsDx+abi6evOX78YnheFtjaNaLrACungUEanCIacjq8HjvYfoe13WB/bnG89NODfW9QloDrSXxfDlh9WeLlKcL2WGOx2GL16iPJCBAfVd41gkwhvOmJYV5JZKVEdVfoOqCqDBgDokTh94YePEmsiakX9MhuYvqGqYBVtxqKZF+uAu8+w5vXw4sHtC0moHszy/1nDRf0cCIQxAyXmE/nMCHgkONGBKyea/LGIMklnFDgGHDEN0kAs8xhwKNG0NFHPpipR6uEnM9czHcPyS0zyIlJ2RrcKg0/1CRBI7lq1DWmR+c5RcwYXJ9jteVY7wY45KsfC7JJwSoolKYbQ2FTCDu3I6Pv2DnUpwY+yeEcKEpiI4DzRWH73uFw7nFwCdir4bgZ3g4Zpcz+M8yIlZcq+MQqzimUWiItJOpWTYDp1SBNgMNJ4eeStsFm1AJ7O8Xi+Q9e1j6itIfVMT15EFLkDhlrXxiiTE6J9rQx46qMoZDoeX047WY4B+JHY1NAiYQbDBjVWm2vwcSc8gi292g4lVPKjJmHd2ON50+/n8o8+i+VGvj1mS0fJgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"of-2",title:"of-2",src:"/refarch-eda/static/8c29f64fd1f8fe592175dddda475a51d/3cbba/offsets-2.png",srcSet:["/refarch-eda/static/8c29f64fd1f8fe592175dddda475a51d/7fc1e/offsets-2.png 288w","/refarch-eda/static/8c29f64fd1f8fe592175dddda475a51d/a5df1/offsets-2.png 576w","/refarch-eda/static/8c29f64fd1f8fe592175dddda475a51d/3cbba/offsets-2.png 1152w","/refarch-eda/static/8c29f64fd1f8fe592175dddda475a51d/132e7/offsets-2.png 1404w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("p",null,"This means that the message will be processed again by the next consumer in that group to be assigned the partition."),Object(s.b)("p",null,"In the case where consumers are set to auto commit, it means the offset if committed at the poll() level and if the service crashed while processing of this record as: "),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"706px"}},"\n      ",Object(s.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAB5UlEQVQoz02SV47bMBCGff8z5Cx5SRbYACm213Vty01Wc5FXhaQavwxdshlgIIIQ/soej1HG8lFYMmU5Xy2HyOKHHcezJc+hri1dB0HS4G0KJoOUP6OK4VSzORj2UUPdWHrXvKPQFu+gGSxLJuuS0bJgvMyZrnPiSy1gkGVCKES/Jy3fvoa8fPnOy0Dz+jrh9ceY4STCCGmv7RyzJUlbNsKyixvCc00iQOGpplAdZSmAuUVrGC8q3t61kBlmnhK1RxbLmPH8hKk6eqayN6kOxAsMa9nLR4ttJQYHlCGAlra1t2gS+W/ja7Zi0+0+rPGjml1Q3y07BVpA93HFbKuZ7zR+0tHU99ycXbiDWStu5Fg30HbPvQtyLt30PkuBXMmKGlsqzpeOKLGkkptT+QSNReEhErvO+rQSqxV7ceWLIOeil2btreGJVzD0ROH0SNhf8GuW059npJm0V8FVgJUQjt8Nc69ktlKstgo/UASRusVQuVIcq5Mbnlu2cSfsFSo8cbrW0nAjZPdSkqMUl8DPoZGmFUMpxpUSJYowVpLnA1BLMy6TnUjeCthKgj6JGpehe39pCsbYf5YjsbwNXBlGijD/lfOw7Epx72ckdvsLLVZLDnGLkSfSSNiuiOc8z+5z2+c9n/MXiPX7PZNVHGUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"of-3",title:"of-3",src:"/refarch-eda/static/4686853f10161b026f380c01f3e68127/46db9/offsets-3.png",srcSet:["/refarch-eda/static/4686853f10161b026f380c01f3e68127/7fc1e/offsets-3.png 288w","/refarch-eda/static/4686853f10161b026f380c01f3e68127/a5df1/offsets-3.png 576w","/refarch-eda/static/4686853f10161b026f380c01f3e68127/46db9/offsets-3.png 706w"],sizes:"(max-width: 706px) 100vw, 706px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("p",null,"then the record (partition 0 - offset 4) will never be processed."),Object(s.b)("h2",null,"Consumer lag"),Object(s.b)("p",null,"The consumer lag for a partition is the difference between the offset of the most recently published message and the consumer’s committed offset."),Object(s.b)("p",null,"If the lag starts to grow, it means the consumer is not able to keep up with the producer’s pace."),Object(s.b)("p",null,"The risk, is that slow consumer may fall behind, and when partition management may remove old log segments, leading the consumer to jump forward to continnue on the next log segment. Consumer may have lost messages."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"682px"}},"\n      ",Object(s.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.91666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABvUlEQVQoz3WS2bKaQBBA/f8/uw8xbhFxwaig4AYqzDAMzEkD5t5UJemqrlm7+/QyQMTWoA1kL4gvcLs70sxxvkIi53sKj4fjlbv2O9fMstmXTOam0/nKEBxKSuMY5KphJYfxOsffKT6mT/anUgI4vs1vfF9c+RlpmgbyvA0E+6NhtVV4ayXOFOFREewVhW4YOCckac32VBFeLOvIkNwrobUs9wXrUHN7WHpxWNm2RB/jgvFSM/QU20OBHxS0cIP3T+rGUVYOLQbJ7cEuOgnJmaeu5U1cSeCm6VPOXjVRYjoNY8PxbDicDEbsO8J/SX/fdFR/3/9fOkJjSrIs4/l8dKtS+vNDm2J4uBMEBy6Xc3fXphZfrdDVnUaJ5XK31LUQVmJwlnZOpzN+zD1G4wlxHHdpjryciZ+LgRZnljTta9mmuNkVjGaKsehqo1lui74phcDEiTiczfH9lThdkCQJLeTQSxn7d6Jz2ZPl7fjAYlUxFEdzcTSVLh+TP7r8Lkynz6KUGXuhrKOooA2WK6gs71r29QvjCm+j8LcaL9DSZS17JRDvsfldaK01mSC4z+J/aR/TfU2E+VJd9mv7/gtNg/5W5vBBiQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"offsets 4",title:"offsets 4",src:"/refarch-eda/static/c3cca3accc73283d2e165bbb29377111/8bbfc/offsets-4.png",srcSet:["/refarch-eda/static/c3cca3accc73283d2e165bbb29377111/7fc1e/offsets-4.png 288w","/refarch-eda/static/c3cca3accc73283d2e165bbb29377111/a5df1/offsets-4.png 576w","/refarch-eda/static/c3cca3accc73283d2e165bbb29377111/8bbfc/offsets-4.png 682w"],sizes:"(max-width: 682px) 100vw, 682px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("p",null,"You can use the kafka-consumer-groups tool to see the consumer lag, or use the Event Streams User Interface:"),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"23.26388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAABYlAAAWJQFJUiTwAAAArklEQVQY062PCw7DIAxDuf85t26lpcD4fz2gXcUBhmQ9OSE4kOfrjY0d+Nch+8FhrIX1EVQ4CB1Qa0X5qZyss59qXdYnaBdhGonSFtp6iI+B1P5qJigbB43PtzeXn2uDLkOaAN6WIcvK8HhtkMqNx+Y03kIWekCo/oMMJvTw6y7aEmeANA4r4/ccYVyCS4WUC2LqyiebD7EFuAAf0uh3Wh9Grd9LucLHAMrpNVvwBePnhmzp0UMYAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"es cg 1",title:"es cg 1",src:"/refarch-eda/static/6b8b0055be781f20426597017d7ccd1b/3cbba/es-cg-1.png",srcSet:["/refarch-eda/static/6b8b0055be781f20426597017d7ccd1b/7fc1e/es-cg-1.png 288w","/refarch-eda/static/6b8b0055be781f20426597017d7ccd1b/a5df1/es-cg-1.png 576w","/refarch-eda/static/6b8b0055be781f20426597017d7ccd1b/3cbba/es-cg-1.png 1152w","/refarch-eda/static/6b8b0055be781f20426597017d7ccd1b/0b124/es-cg-1.png 1728w","/refarch-eda/static/6b8b0055be781f20426597017d7ccd1b/4ea69/es-cg-1.png 2304w","/refarch-eda/static/6b8b0055be781f20426597017d7ccd1b/f6c25/es-cg-1.png 2670w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("p",null,"The group can be extended to see how each consumer, within the group, performs on a multi partitions topic:"),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.01388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA+ElEQVQoz5VSC2uGMAz0//9FEVGZb5nWPtRWb71+1AnbPljgMJeaNLk0EUJgGAZM04S+76G1xn/sugB3vkA/McaEIkoprOuKfd/hnIO1NnwjfucW+2GxagdpLIQ6kEgpQbDgtm2IFxCMcwKePTkvjv9orQKM0SGeNE2DNE1RFAW6rkPbtgH0y7JElmWo6zrwqqoCz/MczGOs/qhR+tzG54zjiCSOy+44xkuX68a3Vj85zfkcIWaQUa5bQ5LzPN+C2j05i+7uwKxE2MhdkGCHzw6eXfzFafbkMkTwj8MvZZ7nMPuyLIgLiqDI77j0UslF4NM/u5Xcn38BseJtyj5CC0oAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"es cg 2",title:"es cg 2",src:"/refarch-eda/static/ebf66ca70caabacc24ce335f4c9bf8a6/3cbba/es-cg-2.png",srcSet:["/refarch-eda/static/ebf66ca70caabacc24ce335f4c9bf8a6/7fc1e/es-cg-2.png 288w","/refarch-eda/static/ebf66ca70caabacc24ce335f4c9bf8a6/a5df1/es-cg-2.png 576w","/refarch-eda/static/ebf66ca70caabacc24ce335f4c9bf8a6/3cbba/es-cg-2.png 1152w","/refarch-eda/static/ebf66ca70caabacc24ce335f4c9bf8a6/0b124/es-cg-2.png 1728w","/refarch-eda/static/ebf66ca70caabacc24ce335f4c9bf8a6/4ea69/es-cg-2.png 2304w","/refarch-eda/static/ebf66ca70caabacc24ce335f4c9bf8a6/4992e/es-cg-2.png 2458w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("h2",null,"Consumer group APIs"),Object(s.b)("h3",null,"List the consumer groups using CLI"),Object(s.b)("pre",null,Object(s.b)("code",o({parentName:"pre"},{className:"language-shell"}),"ibmcloud es groups\n")),Object(s.b)("p",null,"Results:"),Object(s.b)("pre",null,Object(s.b)("code",o({parentName:"pre"},{className:"language-shell"}),"Group ID   \nContainerAnomalyRetrySpringConsumers   \nContainerSpringConsumers   \nOrderSpringConsumers   \nordercmd-command-consumer-grp   \nordercmd-event-consumer-grp   \norderquery-container-consumer   \norderquery-orders-consumer   \nreefer-telemetry-reactive   \nvoyage-consumer-group   \n\n")),Object(s.b)("h3",null,"Get the details of a consumer group"),Object(s.b)("pre",null,Object(s.b)("code",o({parentName:"pre"},{className:"language-shell"}),"ibmcloud es group ordercmd-command-consumer-grp \n")),Object(s.b)("p",null,"and the results:"),Object(s.b)("pre",null,Object(s.b)("code",o({parentName:"pre"},{className:"language-shell"}),"Details for consumer group ordercmd-command-consumer-grp\nGroup ID                        State   \nordercmd-command-consumer-grp   Stable   \n\nTopic                            Partition   Current offset   End offset   Offset lag   Client                      Consumer                                                         Host   \neda-integration-order-commands   0           11               11           0            ordercmd-command-consumer   ordercmd-command-consumer-337bb052-371b-431a-b386-3a0e99fafb18   /169.254.0.3   \n")),Object(s.b)("h3",null,"Reset a group"),Object(s.b)("p",null,"Sometime it is needed to reprocess the messages. The easiest way is to change the groupid of the consumers to get an implicit offsets reset, but it is also possible to reset for some topic to the earliest offset:"),Object(s.b)("pre",null,Object(s.b)("code",o({parentName:"pre"},{className:"language-shell"})," ibmcloud es group-reset --group ordercmd-command-consumer-grp --all-topics --mode earliest --execute\n")),Object(s.b)("p",null,"The previous command is the same as using the kafka tool:"),Object(s.b)("pre",null,Object(s.b)("code",o({parentName:"pre"},{className:"language-shell"}),"kafka-consumer-groups \\\n                    --bootstrap-server kafkahost:9092 \\\n                    --group ordercmd-command-consumer-grp \\\n                    --reset-offsets \\\n                    --all-topics \\\n                    --to-earliest \\\n                    --execute\n")),Object(s.b)("p",null,"To get the processing for a specific topic:"),Object(s.b)("pre",null,Object(s.b)("code",o({parentName:"pre"},{})," ibmcloud es group-reset --group ordercmd-command-consumer-grp --topic orders\n")),Object(s.b)("h3",null,"Delete a group"),Object(s.b)("p",null,"This works only for empty group"),Object(s.b)("pre",null,Object(s.b)("code",o({parentName:"pre"},{}),"ibmcloud es group-delete reefer-telemetry\n")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-technology-event-streams-consumergrp-mdx-bf3dde96357b2cd169f8.js.map