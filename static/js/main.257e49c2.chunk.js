(this.webpackJsonptomadoro=this.webpackJsonptomadoro||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/sound.ec792557.mp3"},15:function(e,t,a){e.exports=a.p+"static/media/logo.08ea9508.svg"},20:function(e,t,a){e.exports=a(32)},26:function(e,t,a){},27:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),o=a(14),s=a.n(o),r=(a(25),a(5)),c=a(6),d=a(10),l=a(7),m=a(2),h=a(11),u=a(35),p=a(33),f=a(34),b=a(15),k=a.n(b),v=(a(26),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).defaultClassName="App-logo-rotation",a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("img",{className:"App-logo ".concat(this.props.isStarted?this.defaultClassName:""),src:k.a,alt:"Tomato",title:"Click on the tomato to change modes",onClick:this.props.switchMode})}}]),t}(i.Component)),E=a(36),N=(a(27),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"box"},n.a.createElement(p.a,null,n.a.createElement(f.a,{xs:"12"},n.a.createElement(E.a,{className:"button",block:!0,size:"lg",color:"success",onClick:this.props.startTimer,disabled:this.props.isStarted||0===this.props.seconds},"START"))),n.a.createElement(p.a,null,n.a.createElement(f.a,{xs:"6"},n.a.createElement(E.a,{className:"button",color:"danger",size:"lg",onClick:this.props.stopTimer,disabled:!this.props.isStarted},"STOP")),n.a.createElement(f.a,{xs:"6"},n.a.createElement(E.a,{className:"button",color:"secondary",size:"lg",onClick:this.props.resetTimer,disabled:this.props.isStarted},"RESET"))))}}]),t}(i.Component)),O=a(18),S=a.n(O),j=a(12),y=a.n(j),g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).state={ignore:!0,title:""},a.handlePermissionGranted=a.handlePermissionGranted.bind(Object(m.a)(a)),a.handlePermissionDenied=a.handlePermissionDenied.bind(Object(m.a)(a)),a.handleNotSupported=a.handleNotSupported.bind(Object(m.a)(a)),a.sendNotification=a.sendNotification.bind(Object(m.a)(a)),a.handleNotificationOnShow=a.handleNotificationOnShow.bind(Object(m.a)(a)),a.playSound=a.playSound.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){this.props.send&&(this.sendNotification(),this.props.handleNotification(!1))}},{key:"handlePermissionGranted",value:function(){this.setState({ignore:!1})}},{key:"handlePermissionDenied",value:function(){this.setState({ignore:!0})}},{key:"handleNotSupported",value:function(){this.setState({ignore:!0})}},{key:"handleNotificationOnError",value:function(e,t){console.log(e,"Notification error tag:"+t)}},{key:"handleNotificationOnShow",value:function(){this.playSound()}},{key:"sendNotification",value:function(){if(!this.state.ignore){var e={tag:Date.now(),body:"Time is Up! \ud83c\udf45",lang:"en",sound:{sound:y.a}};this.setState({title:"tomadoro",options:e})}}},{key:"playSound",value:function(){document.getElementById("sound").play()}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(S.a,{ignore:this.state.ignore,onPermissionGranted:this.handlePermissionGranted,onPermissionDenied:this.handlePermissionDenied,notSupported:this.handleNotSupported,onError:this.onError,timeout:5e3,title:this.state.title,options:this.state.options,onShow:this.handleNotificationOnShow}),n.a.createElement("audio",{id:"sound",preload:"auto"},n.a.createElement("source",{src:y.a,type:"audio/mpeg"}),n.a.createElement("embed",{hidden:!0,src:y.a})))}}]),t}(i.Component),T=(a(31),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).appName="tomadoro",a.pomodoroSeconds=1500,a.breakSeconds=300,a.state={startClickNotification:!1,seconds:0,started:!1,break:!1,sendNotification:!1},a.startTimer=a.startTimer.bind(Object(m.a)(a)),a.stopTimer=a.stopTimer.bind(Object(m.a)(a)),a.resetTimer=a.resetTimer.bind(Object(m.a)(a)),a.terminatedTimer=a.terminatedTimer.bind(Object(m.a)(a)),a.pomodoroMode=a.pomodoroMode.bind(Object(m.a)(a)),a.breakMode=a.breakMode.bind(Object(m.a)(a)),a.switchMode=a.switchMode.bind(Object(m.a)(a)),a.formatMinute=a.formatMinute.bind(Object(m.a)(a)),a.handleNotification=a.handleNotification.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.pomodoroMode()}},{key:"formatMinute",value:function(e){return(e-(e%=60))/60+(9<e?":":":0")+e}},{key:"tick",value:function(){this.setState((function(e){return{seconds:e.seconds-1}})),document.title="(".concat(this.formatMinute(this.state.seconds),") ").concat(this.appName),0===this.state.seconds&&(this.stopTimer(),this.terminatedTimer())}},{key:"startTimer",value:function(){var e=this;this.setState({started:!0,startClickNotification:!0}),this.interval=setInterval((function(){return e.tick()}),1e3)}},{key:"stopTimer",value:function(){this.setState({started:!1}),clearInterval(this.interval)}},{key:"resetTimer",value:function(){this.state.break?this.breakMode():this.pomodoroMode(),document.title=this.appName}},{key:"terminatedTimer",value:function(){this.setState({sendNotification:!0}),this.switchMode()}},{key:"pomodoroMode",value:function(){this.setState({seconds:this.pomodoroSeconds,break:!1})}},{key:"breakMode",value:function(){this.setState({seconds:this.breakSeconds,break:!0})}},{key:"switchMode",value:function(){this.state.break&&!this.state.started?this.pomodoroMode():this.state.break||this.state.started||this.breakMode()}},{key:"handleNotification",value:function(e){this.setState({sendNotification:e})}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"App-header"},"tomadoro"),n.a.createElement(u.a,null,n.a.createElement(p.a,null,n.a.createElement(f.a,null,n.a.createElement(v,{isStarted:this.state.started,switchMode:this.switchMode}))),n.a.createElement(p.a,null,n.a.createElement(f.a,null,n.a.createElement("p",{className:"timer"},this.formatMinute(this.state.seconds)))),n.a.createElement(p.a,null,n.a.createElement(f.a,{sm:{size:10,offset:1},md:{size:8,offset:2},lg:{size:6,offset:3}},n.a.createElement(N,{startTimer:this.startTimer,stopTimer:this.stopTimer,isStarted:this.state.started,resetTimer:this.resetTimer,seconds:this.state.seconds})))),this.state.startClickNotification?n.a.createElement(g,{send:this.state.sendNotification,handleNotification:this.handleNotification}):"",n.a.createElement("div",{className:"footer"},n.a.createElement("p",null,n.a.createElement("a",{href:"https://github.com/frsposito/tomadoro"},"tomadoro")," ","by ",n.a.createElement("a",{href:"https://github.com/frsposito"},"@frsposito")," (Francesco Esposito)")))}}]),t}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.257e49c2.chunk.js.map