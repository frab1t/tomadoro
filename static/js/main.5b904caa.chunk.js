(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/sound.ec792557.mp3"},16:function(e,t,a){e.exports=a.p+"static/media/logo.08ea9508.svg"},21:function(e,t,a){e.exports=a(32)},27:function(e,t,a){},28:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),o=a(15),s=a.n(o),r=(a(26),a(5)),c=a(6),d=a(10),l=a(7),m=a(11),h=a(2),u=a(35),p=a(33),b=a(34),f=a(16),O=a.n(f),k=(a(27),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).defaultClassName="App-logo-rotation",a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("img",{className:"App-logo ".concat(this.props.isStarted?this.defaultClassName:""),src:O.a,alt:"Tomato",title:"Click on the tomato to change modes",onClick:this.props.switchMode})}}]),t}(n.Component)),j=a(36),v=(a(28),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"box"},i.a.createElement(p.a,null,i.a.createElement(b.a,{xs:"12"},i.a.createElement(j.a,{className:"button",block:!0,size:"lg",color:"success",onClick:this.props.startTimer,disabled:this.props.isStarted||0===this.props.seconds},"START"))),i.a.createElement(p.a,null,i.a.createElement(b.a,{xs:"6"},i.a.createElement(j.a,{className:"button",color:"danger",size:"lg",onClick:this.props.stopTimer,disabled:!this.props.isStarted},"STOP")),i.a.createElement(b.a,{xs:"6"},i.a.createElement(j.a,{className:"button",color:"secondary",size:"lg",onClick:this.props.resetTimer,disabled:this.props.isStarted},"RESET"))))}}]),t}(n.Component)),E=a(19),N=a.n(E),S=a(12),y=a.n(S),g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).state={ignore:!0,title:""},a.handlePermissionGranted=a.handlePermissionGranted.bind(Object(h.a)(Object(h.a)(a))),a.handlePermissionDenied=a.handlePermissionDenied.bind(Object(h.a)(Object(h.a)(a))),a.handleNotSupported=a.handleNotSupported.bind(Object(h.a)(Object(h.a)(a))),a.sendNotification=a.sendNotification.bind(Object(h.a)(Object(h.a)(a))),a.handleNotificationOnShow=a.handleNotificationOnShow.bind(Object(h.a)(Object(h.a)(a))),a.playSound=a.playSound.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){this.props.send&&(this.sendNotification(),this.props.handleNotification(!1))}},{key:"handlePermissionGranted",value:function(){this.setState({ignore:!1})}},{key:"handlePermissionDenied",value:function(){this.setState({ignore:!0})}},{key:"handleNotSupported",value:function(){this.setState({ignore:!0})}},{key:"handleNotificationOnError",value:function(e,t){console.log(e,"Notification error tag:"+t)}},{key:"handleNotificationOnShow",value:function(){this.playSound()}},{key:"sendNotification",value:function(){if(!this.state.ignore){var e={tag:Date.now(),body:"Time is Up! \ud83c\udf45",lang:"en",sound:{sound:y.a}};this.setState({title:"tomadoro",options:e})}}},{key:"playSound",value:function(){document.getElementById("sound").play()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(N.a,{ignore:this.state.ignore,onPermissionGranted:this.handlePermissionGranted,onPermissionDenied:this.handlePermissionDenied,notSupported:this.handleNotSupported,onError:this.onError,timeout:5e3,title:this.state.title,options:this.state.options,onShow:this.handleNotificationOnShow}),i.a.createElement("audio",{id:"sound",preload:"auto"},i.a.createElement("source",{src:y.a,type:"audio/mpeg"}),i.a.createElement("embed",{hidden:!0,src:y.a})))}}]),t}(n.Component),T=(a(31),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).appName="tomadoro",a.pomodoroSeconds=1500,a.breakSeconds=300,a.state={startClickNotification:!1,seconds:0,started:!1,break:!1,sendNotification:!1},a.startTimer=a.startTimer.bind(Object(h.a)(Object(h.a)(a))),a.stopTimer=a.stopTimer.bind(Object(h.a)(Object(h.a)(a))),a.resetTimer=a.resetTimer.bind(Object(h.a)(Object(h.a)(a))),a.terminatedTimer=a.terminatedTimer.bind(Object(h.a)(Object(h.a)(a))),a.pomodoroMode=a.pomodoroMode.bind(Object(h.a)(Object(h.a)(a))),a.breakMode=a.breakMode.bind(Object(h.a)(Object(h.a)(a))),a.switchMode=a.switchMode.bind(Object(h.a)(Object(h.a)(a))),a.formatMinute=a.formatMinute.bind(Object(h.a)(Object(h.a)(a))),a.handleNotification=a.handleNotification.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.pomodoroMode()}},{key:"formatMinute",value:function(e){return(e-(e%=60))/60+(9<e?":":":0")+e}},{key:"tick",value:function(){this.setState(function(e){return{seconds:e.seconds-1}}),document.title="(".concat(this.formatMinute(this.state.seconds),") ").concat(this.appName),0===this.state.seconds&&(this.stopTimer(),this.terminatedTimer())}},{key:"startTimer",value:function(){var e=this;this.setState({started:!0,startClickNotification:!0}),this.interval=setInterval(function(){return e.tick()},1e3)}},{key:"stopTimer",value:function(){this.setState({started:!1}),clearInterval(this.interval)}},{key:"resetTimer",value:function(){this.state.break?this.breakMode():this.pomodoroMode(),document.title=this.appName}},{key:"terminatedTimer",value:function(){this.setState({sendNotification:!0}),this.switchMode()}},{key:"pomodoroMode",value:function(){this.setState({seconds:this.pomodoroSeconds,break:!1})}},{key:"breakMode",value:function(){this.setState({seconds:this.breakSeconds,break:!0})}},{key:"switchMode",value:function(){this.state.break&&!this.state.started?this.pomodoroMode():this.state.break||this.state.started||this.breakMode()}},{key:"handleNotification",value:function(e){this.setState({sendNotification:e})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"App-header"},"tomadoro"),i.a.createElement(u.a,null,i.a.createElement(p.a,null,i.a.createElement(b.a,null,i.a.createElement(k,{isStarted:this.state.started,switchMode:this.switchMode}))),i.a.createElement(p.a,null,i.a.createElement(b.a,null,i.a.createElement("p",{className:"timer"},this.formatMinute(this.state.seconds)))),i.a.createElement(p.a,null,i.a.createElement(b.a,{sm:{size:10,offset:1},md:{size:8,offset:2},lg:{size:6,offset:3}},i.a.createElement(v,{startTimer:this.startTimer,stopTimer:this.stopTimer,isStarted:this.state.started,resetTimer:this.resetTimer,seconds:this.state.seconds})))),this.state.startClickNotification?i.a.createElement(g,{send:this.state.sendNotification,handleNotification:this.handleNotification}):"",i.a.createElement("div",{className:"footer"},i.a.createElement("p",null,i.a.createElement("a",{href:"https://github.com/frsposito/tomadoro"},"tomadoro")," ","by ",i.a.createElement("a",{href:"https://github.com/frsposito"},"@frsposito")," (Francesco Esposito)")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.5b904caa.chunk.js.map