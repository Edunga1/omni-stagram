(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){e.exports=a(277)},118:function(e,t,a){},120:function(e,t,a){},124:function(e,t,a){},243:function(e,t,a){},270:function(e,t,a){},272:function(e,t,a){},274:function(e,t,a){},277:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(108),i=a.n(c),s=(a(118),a(3)),o=a(5),u=a(8),m=a(7),l=a(9),h=a(284),p=a(288),d=a(289),f=(a(120),a(26)),b=a.n(f),j=a(35),O=a(286),v=a(282),g=a(281),y=a(285),S=a(280),E=a(106),I=a(283),x=(a(124),a(109)),w=a.n(x),k=(a(243),{transitionDuration:0}),C=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.userId,a=e.items.map(function(e){return r.a.createElement("div",{className:"item",key:e.id},r.a.createElement("a",{href:t?"./".concat(t,"/").concat(e.id):"#"},r.a.createElement("img",{className:"thumbnail",src:e.src,alt:"thumbnail"})))});return r.a.createElement(w.a,{className:"MasonryLayout",options:k,disableImagesLoaded:!1,updateOnEachImageLoad:!1},a)}}]),t}(n.Component);C.defaultProps={userId:"",items:[{id:"1",src:"https://i.imgur.com/c3s8eqU.jpg"},{id:"2",src:"https://i.imgur.com/IgB7tpM.jpg"},{id:"3",src:"https://i.imgur.com/T85TaZN.png"},{id:"4",src:"https://i.imgur.com/TfSJnWE.jpg"},{id:"5",src:"https://i.imgur.com/DxFDaWi.jpg"},{id:"6",src:"https://i.imgur.com/ra03Qce.jpg"},{id:"7",src:"https://i.imgur.com/kSj5X0Q.jpg"},{id:"8",src:"https://i.imgur.com/B45yGfm.jpg"},{id:"9",src:"https://i.imgur.com/Y1QVk9A.jpg"},{id:"10",src:"https://i.imgur.com/5NLQX9d.jpg"}]};var N=a(112),D=a(74),M=a.n(D),$={count:20},P=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";Object(s.a)(this,e),this.$latestId=t,this.$last=""}return Object(o.a)(e,[{key:"setInstagramId",value:function(e){var t=!1;return this.$latestId!==e&&(this.$latestId=e,this.$last="",t=!0),t}},{key:"nextMedias",value:function(){var e=Object(j.a)(b.a.mark(function e(){var t,a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=Object(N.a)({},$,{last:this.$last}),e.next=4,M.a.get("http://35.200.41.28:5000/users/".concat(this.$latestId,"/medias"),{params:a}).catch(function(){return null});case 4:return(n=e.sent)&&(this.$last=n.data.last,t=t.concat(n.data.medias)),e.abrupt("return",t);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"detail",value:function(){var e=Object(j.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("http://localhost:5000/users/".concat(this.$latestId,"/medias/").concat(t)).then(function(e){return e.data}).catch(function(){return null});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),B=a(279),L=function(e){function t(e){var a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this))).source=Object(B.a)(e,"scroll").pipe(Object(S.a)(function(){return e.scrollY+e.innerHeight+n>document.body.scrollHeight})),a}return Object(l.a)(t,e),t}(a(4).a),A=a(110),Q=a.n(A),W="instagram",q=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).onChangeSnsIdSource=new O.a,e.defaultSearch=Q.a.parse(window.location.search).q||W,e}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.onChange;this.onChangeSnsIdSource.pipe(Object(y.a)(this.defaultSearch)).subscribe(function(t){e(t)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("input",{type:"text",defaultValue:this.defaultSearch,onChange:function(t){return e.onChangeSnsIdSource.next(t.target.value)}}))}}]),t}(n.Component),F=function(e){function t(){var e;Object(s.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={items:[]},e.repository=new P,e.onSearchBoxChangeSource=new O.a;var a=e.onSearchBoxChangeSource.pipe(Object(g.a)(1e3)),n=new L(window).pipe(Object(y.a)(null)),r=!1;return Object(v.a)(a,n).pipe(Object(S.a)(function(){return!r}),Object(E.a)(function(e){return e[0]}),Object(S.a)(function(e){return!!e}),Object(I.a)(function(){r=!0}),Object(E.a)(function(t){return[e.repository.setInstagramId(t),e.repository.nextMedias(),t]})).subscribe(function(){var t=Object(j.a)(b.a.mark(function t(a){var n,c,i,s,o;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=a[0],t.next=3,a[1];case 3:t.t0=function(e){return{id:e.id,src:e.tumbnailSrc}},c=t.sent.map(t.t0),i=a[2],s=e.state.items,o=n?c:s.concat(c),e.setState({userId:i,items:o}),r=!1;case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()),e}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.userId,n=t.items;return r.a.createElement("div",{className:"Main"},r.a.createElement(q,{onChange:function(t){return e.onSearchBoxChangeSource.next(t)}}),r.a.createElement(C,{userId:a,items:n}))}}]),t}(n.Component),H=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("header",{className:"header"},"omni stagram"),r.a.createElement("article",{className:"body"},r.a.createElement(F,null)))}}]),t}(n.Component),J=a(107),T=(a(270),a(272),a(287)),V=(a(274),function(){function e(t){Object(s.a)(this,e),this.time=t}return Object(o.a)(e,[{key:"parseBy",value:function(e){var t=this.time,a=e-t;return a<6e4?"".concat(Math.floor(a/1e3),"\ucd08 \uc804"):a<36e5?"".concat(Math.floor(a/6e4),"\ubd84 \uc804"):a<864e5?"".concat(Math.floor(a/36e5),"\uc2dc\uac04 \uc804"):a<2592e6?"".concat(Math.floor(a/864e5),"\uc77c \uc804"):"".concat(t.getMonth()+1,"/").concat(t.getDate())}}]),e}()),X=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={commentCreatedAt:""},a.formatter=new V(new Date(1e3*e.timestamp)),a.interval$=Object(T.a)(1e3),a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval$.subscribe(function(){var t=new Date,a=e.formatter.parseBy(t);e.setState({commentCreatedAt:a})})}},{key:"render",value:function(){var e=this.props,t=e.text,a=e.userId,n=e.userProfileSrc,c=this.state.commentCreatedAt;return r.a.createElement("div",{className:"Comment"},r.a.createElement("img",{className:"img-profile",src:n,alt:"profile"}),r.a.createElement("a",{className:"link-user",href:"/?q=".concat(a)},r.a.createElement("span",{className:"txt-username"},a)),r.a.createElement("span",{className:"txt-comment"},t),r.a.createElement("span",{className:"txt-time"},c))}}]),t}(n.Component),Y=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.text,a=e.timestamp,n=e.userId,c=e.userProfileSrc,i=e.mediaSrc,s=e.comments.map(function(e,t){return r.a.createElement(X,{key:t.toString(),text:e.text,timestamp:e.timestamp,userId:e.userId,userProfileSrc:e.userProfileSrc})});return r.a.createElement("div",{className:"Detail"},r.a.createElement("div",{className:"body"},r.a.createElement("img",{className:"img-main",src:i,alt:"media"}),r.a.createElement(X,{text:t,timestamp:a,userId:n,userProfileSrc:c}),r.a.createElement("div",{className:"box-comments"},s)))}}]),t}(n.Component),G=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={isDone:!1,text:"",timestamp:0,userId:"",userProfileSrc:"",mediaSrc:"",comments:[]},a.onDetailFetch$=Object(J.a)(new P(e.match.params.user).detail(e.match.params.media)),a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.onDetailFetch$.subscribe(function(t){e.setState({isDone:!0,text:t.text,timestamp:t.timestamp,userId:t.userId,userProfileSrc:t.userProfileSrc,mediaSrc:t.mediaSrc,comments:t.comments})})}},{key:"render",value:function(){var e=this.state,t=e.isDone,a=e.text,n=e.timestamp,c=e.userId,i=e.userProfileSrc,s=e.mediaSrc,o=e.comments;return r.a.createElement("div",{className:"MediaInfo"},t?r.a.createElement(Y,{text:a,timestamp:n,userId:c,userProfileSrc:i,mediaSrc:s,comments:o.sort(function(e,t){return t.timestamp-e.timestamp})}):"Loading...")}}]),t}(n.Component),U=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{basename:"/d-day-online"},r.a.createElement(p.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:H}),r.a.createElement(d.a,{path:"/:user/:media",component:G})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[113,2,1]]]);
//# sourceMappingURL=main.ab5cbf46.chunk.js.map