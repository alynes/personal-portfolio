(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{167:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(6),r=a.n(o),i=a(26),c=a(22),s=(a(80),a(11)),m=a(29),p=a(196),u=a(200),d=a(197),h=a(38),f=a(202),E=a(65),g=a.n(E),v=a(201),b=a(198),y=a(199),w=a(64),k=a.n(w),A=a(63),N=a.n(A),x=a(204),j=a(195),O=a(194);function T(e){var t=e.text,a=e.url,n=e.svg;return l.a.createElement(x.a,{button:!0,key:"Trade",component:i.b,to:a},l.a.createElement(O.a,null,n),l.a.createElement(j.a,{primary:t}))}function I(){var e=function(e){var t=Object(n.useState)(e.toLocaleTimeString()),a=Object(s.a)(t,2),l=a[0],o=a[1];return Object(n.useEffect)((function(){var e=setInterval((function(){o((new Date).toLocaleTimeString())}),1e3);return function(){clearInterval(e)}})),l}(new Date);return l.a.createElement("div",{style:{width:"100%",textAlign:"center"}},l.a.createElement("h3",{style:{width:"100%"}},e))}var S=Object(p.a)((function(){return{img:{width:"100%",flex:1},clockContainer:{display:"flex",width:"100%",flexDirection:"column",alignItems:"center",justifyContent:"center"},link:{textAlign:"left",padding:"0 0 8px 16px",pointerEvents:"all"}}}));function P(){var e=S(),t=l.a.createElement(N.a,null),a=l.a.createElement(k.a,null);return l.a.createElement("div",{id:"drawer",style:{pointerEvents:"none"}},l.a.createElement("div",{id:"drawer-main-content",style:{display:"inline-block",background:"#fff",pointerEvents:"all"}},l.a.createElement(d.a,null,l.a.createElement("div",{className:e.clockContainer},l.a.createElement("img",{className:e.img,src:"/portfolio/astronaut-flip.gif",alt:"astronaut-flip"}),l.a.createElement(I,null))),l.a.createElement(b.a,null),l.a.createElement(y.a,{id:"this"},l.a.createElement(T,{text:"Portfolio",url:"",svg:t}),l.a.createElement(T,{text:"Resum\xe9",url:"/resume/",svg:a})),l.a.createElement(b.a,null)),l.a.createElement("div",{style:{height:"72px",background:"rgba(0, 0, 0, 0)"}}),l.a.createElement("div",{style:{position:"fixed",bottom:0,zIndex:-1,marginBottom:"8px"}},l.a.createElement("div",{className:e.link},l.a.createElement("a",{href:"https://github.com/alynes"},"github.com/alynes")),l.a.createElement("div",{className:e.link},l.a.createElement("a",{href:"https://linkedin.com/in/alynes"},"linkedin.com/alynes"))))}function C(e){var t=e.children,a=e.threshold,o=e.x,r=void 0===o?null:o,i=e.setX,c=void 0===i?null:i,m=e.y,p=void 0===m?null:m,u=e.setY,d=void 0===u?null:u,h=e.setDirection,f=void 0===h?null:h,E=e.revX,g=void 0!==E&&E,v=e.revY,b=void 0!==v&&v,y=Object(n.useState)(0),w=Object(s.a)(y,2),k=w[0],A=w[1],N=Object(n.useState)(null),x=Object(s.a)(N,2),j=x[0],O=x[1],T=Object(n.useState)(null),I=Object(s.a)(T,2),S=I[0],P=I[1],C=Object(n.useState)(null),M=Object(s.a)(C,2),D=M[0],R=M[1],B=Object(n.useState)(null),X=Object(s.a)(B,2),L=X[0],W=X[1];return Object(n.useEffect)((function(){var e=D-j,t=L-S;null!==r&&Math.abs(e)>=a&&(e>0?(c(!1===g?r+1:r-1),null!==f&&f("right"),A(!1),R(j)):(c(!1===g?r-1:r+1),null!==f&&f("left"),A(!1),R(j))),null!==p&&Math.abs(t)>=a&&(t>0?(console.log("Y - 1"),d(!1===b?p-1:p+1),null!==f&&f("down"),A(!1)):(console.log("Y + 1"),d(!1===b?p+1:p-1),null!==f&&f("up"),A(!1)))}),[D,L]),l.a.createElement(n.Fragment,null,l.a.createElement("div",{style:{display:"inline-block",touchAction:"none"},onTouchStart:function(e){e.preventDefault(),A(!0),O(e.touches[0].pageX),P(e.touches[0].pageY)},onTouchMove:function(e){k&&(R(e.touches[0].pageX),W(e.touches[0].pageY))},onTouchEnd:function(){A(!1)},onMouseDown:function(e){e.preventDefault(),A(!0),O(e.pageX),P(e.pageY)},onMouseMove:function(e){!0===k&&(R(e.pageX),W(e.pageY))},onMouseUp:function(){A(!1)},onMouseLeave:function(){A(!1)}},t))}var M=Object(p.a)((function(e){return{drawer:Object(m.a)({},e.breakpoints.up("lg"),{width:270,flexShrink:0}),drawerPaper:{width:270}}}));function D(e){var t=e.children,a=e.location,o=M(),r=Object(n.useState)(0),i=Object(s.a)(r,2),c=i[0],m=i[1],p=Object(n.useState)(!1),E=Object(s.a)(p,2),b=E[0],y=E[1];function w(){y(!b)}Object(n.useEffect)((function(){try{window.scroll({top:0,left:0,behavior:"smooth"})}catch(e){window.scrollTo(0,0)}}),[a.pathname]),Object(n.useEffect)((function(){c<0?(y(!1),m(0)):c>0?(y(!0),m(0)):m(0)}),[c]);var k=l.a.createElement(f.a,{variant:"temporary",anchor:"left",open:b,onClose:w,classes:{paper:o.drawerPaper},ModalProps:{keepMounted:!0}},l.a.createElement(P,null));return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(C,{x:c,setX:m,threshold:30},l.a.createElement(u.a,{position:"fixed",style:{display:"block"}},l.a.createElement(d.a,null,l.a.createElement(v.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:w},l.a.createElement(g.a,null)),l.a.createElement(h.a,{variant:"h6",noWrap:!0}),l.a.createElement("div",{style:{flex:1}}),l.a.createElement("a",{href:"https://github.com/alynes/portfolio/",style:{display:"inline-block",height:"32px"}},l.a.createElement("img",{style:{height:"100%",margin:"auto"},src:"/portfolio/github-mark.png",alt:"create response"}))))),l.a.createElement("nav",{className:o.drawer,"aria-label":"menu items"},l.a.createElement(C,{x:c,setX:m,threshold:30},k))),l.a.createElement("div",{id:"content-area"},l.a.createElement("br",null),l.a.createElement("br",null),t))}var R=a(205),B=a(203);a(87);function X(e){var t,a=e.children,o=e.initialIndex,r=void 0===o?0:o,i=e.autoInterval,c=void 0===i?0:i,m=e.autoDirection,p=void 0===m?"left":m,u=Object(n.useState)(r),d=Object(s.a)(u,2),h=d[0],f=d[1],E=Object(n.useState)("none"),g=Object(s.a)(E,2),v=g[0],b=g[1],y=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),l=a[0],o=a[1];return Object(n.useEffect)((function(){if(e>0){var t=setInterval((function(){o(!0)}),1e3*e);return function(){clearInterval(t)}}})),[l,o]}(c),w=Object(s.a)(y,2),k=w[0],A=w[1];switch(Object(n.useEffect)((function(){!0===k&&("left"===p?(f(h-1),b("left")):(f(h+1),b("right")),A(!1))}),[k]),v){case"right":t="slideRight";break;case"left":t="slideLeft";break;default:t="slide"}return l.a.createElement(C,{threshold:30,x:h,setX:f,setDirection:b},l.a.createElement("div",{style:{display:"block",width:"100%",height:"200px"}},l.a.createElement("div",{style:{position:"absolute",width:"100%",height:"100%",minHeight:"auto"}},l.a.createElement(R.a,{childFactory:function(e){return l.a.cloneElement(e,{classNames:t,timeout:600})},component:null},l.a.createElement(B.a,{key:h,timeout:600,classNames:t},l.a.createElement("div",{className:"slide",style:{position:"absolute",top:0,left:0,right:0,bottom:0,margin:"auto"}},a[Math.abs(h)%a.length]))))))}var L=[{name:"TradeBoy",description:"Experimental cryptocurrency trading",id:"trade-boy",src:["/tb-price.mp4","/tb-buysell.mp4","/tb-delete-cancel.mp4"],alt:"Experimental crytocurrency trading app"},{name:"The Bipolar Chronicles",description:"Interactive musical experience",id:"bp-chronicles",src:["/bc-jellyfish.mp4","/bc-music-player.mp4","/bc-build-scale.mp4"],alt:"Interactive musical experience application"},{name:"Social Automator",description:"Social media automation",id:"social-automator",src:["/sa-schedule.mp4","/sa-who-r-u.mp4","/sa-task-create.mp4"],alt:"Social media automation application"}],W=Object(p.a)((function(e){var t;return{grid:(t={display:"grid",justifyItems:"center",alignItems:"start"},Object(m.a)(t,e.breakpoints.up("xs"),{gridTemplateColumns:"1fr",gridTemplateRows:"1fr 1fr 1fr",margin:"3%"}),Object(m.a)(t,e.breakpoints.up("sm"),{gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",margin:"3%",marginTop:"3vh"}),Object(m.a)(t,e.breakpoints.up("md"),{gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"1fr 1fr",margin:"auto",marginTop:"3vh"}),t),carouselContainer:{position:"relative",display:"block",width:"90%",minHeight:"30vmin",overflow:"hidden",margin:"auto",backgroundColor:"none"},gridItemContainer:{position:"relative",display:"block",width:"100%",height:"100%",overflow:"hidden",margin:0}}}));function Y(){var e=W();return l.a.createElement("div",{className:"App-page",style:{maxWidth:"80vw",margin:"auto"}},l.a.createElement("div",null,l.a.createElement("div",{className:e.grid},L.map((function(t){return l.a.createElement("div",{key:t.id,className:e.gridItemContainer},l.a.createElement(i.b,{to:"/".concat(t.id),style:{display:"flex",flexDirection:"column"}},l.a.createElement("h1",{style:{textAlign:"center"},className:"App-link"},t.name),l.a.createElement("p",{style:{textAlign:"center"},className:"App-link"},t.description),l.a.createElement("div",{className:e.carouselContainer},l.a.createElement(X,{autoInterval:15},t.src.map((function(e,t){return l.a.createElement("video",{key:t,autoPlay:!0,muted:!0,loop:!0,className:"carousel-img",src:"/portfolio"+e})}))))),l.a.createElement("br",null))}))),l.a.createElement(b.a,null)))}function q(){return l.a.createElement("div",{className:"App-page"},l.a.createElement("h1",null,"TradeBoy"),l.a.createElement("p",null,'My client is a cryptocurrency day-trader, and was feeling fatigued by the constant need to be at his computer, ready to make a trade. He is a self-described "scalper", and uses large percentages of his funds to make profits off of very small price differences. The issue with that is that most exchanges, of course, only let you spend the money that you have. They don\'t have the ability to let you spend what you WILL have in the future. My solution to this was to create an application that allows you to make "sequential" trades.'),l.a.createElement("p",null,"I used the Binance REST API to make queries on the pricing data as well as to make trades directly and automatically on this platform."),l.a.createElement("div",{className:"App-img-container"},l.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:"App-img",src:"/portfolio/tb-login.mp4"})),l.a.createElement("p",null,"The calculations are done in the front end each time something changes, and then the math is double checked and validation is applied by the server."),l.a.createElement("div",{className:"App-img-container"},l.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:"App-img",src:"/portfolio/tb-price.mp4"})),l.a.createElement("p",null,"These buy/sell modifiers make it easy to make many trades quickly."),l.a.createElement("div",{className:"App-img-container"},l.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:"App-img",src:"/portfolio/tb-buysell.mp4"})),l.a.createElement("p",null,"In-progress orders may be deleted or cancelled if already sent to the Binance exchange. I set up an AWS EC2 instance to host the app, and he uses it every day."),l.a.createElement("div",{className:"App-img-container"},l.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:"App-img",src:"/portfolio/tb-delete-cancel.mp4"})),l.a.createElement("br",null))}function H(){return l.a.createElement("div",{className:"App-page"},l.a.createElement("h1",null,"Social Automator"),l.a.createElement("p",null,"This project began with a simple goal. CREATE SOCIAL MEDIA BOTS. Turns out, that is not so effective on it's own. With much time and many Python scripting experiments this project evolved into a social automation platform aimed at decreasing the necessary time and effort needed to grow and maintain a social presence online."),l.a.createElement("div",{className:"App-img-container"},l.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:"App-img",src:"/portfolio/sa-login.mp4"})),l.a.createElement("p",null,'What you are seeing here is a form to create "responses". If the bot detects certain patterns in text, it will formulate a response based on the given text data. Built in is validation. If you are missing a quotation, bracket, or comma the app will let you know; and once the validation is satisfied, you may test your sentence generation.'),l.a.createElement("div",{className:"App-img-container"},l.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:"App-img",src:"/portfolio/sa-response-edit.mp4"})),l.a.createElement("p",null,"If it cannot find the pattern in the test text, it will not respond."),l.a.createElement("div",{className:"App-img-container"},l.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:"App-img",src:"/portfolio/sa-not-found.mp4"})),l.a.createElement("p",null,"OAuth2 authentication with 3rd party API's."),l.a.createElement("div",{className:"App-img-container"},l.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:"App-img",src:"/portfolio/sa-oauth2.mp4"})),l.a.createElement("p",null,"Responses are used in tasks. Such as responding to comments on one's own or another's Instagram page and responding to reply's made on comments while seeking new followers or responding to a page's bio."),l.a.createElement("div",{className:"App-img-container"},l.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:"App-img",src:"/portfolio/sa-task-create.mp4"})),l.a.createElement("p",null,"Those tasks are grouped into a weekly schedule and users actions are batched together by a worker service."),l.a.createElement("div",{className:"App-img-container"},l.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:"App-img",src:"/portfolio/sa-schedule.mp4"})))}function F(){return l.a.createElement("div",{className:"App-page"},l.a.createElement("h1",null,"The Bipolar Chronicles"),l.a.createElement("p",null,'In the age of short attention spans, the wonder for content creators of all kinds is "how do we get people to pay attention?" I answered this question for a small music company based in Dallas by creating a world in which listeners can explore while they enjoy the music as well.'),l.a.createElement("p",null," Tap on different objects and characters to gain points and reveal the plot."),l.a.createElement("div",{className:"App-img-container"},l.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:"App-img",src:"/portfolio/bc-jellyfish.mp4"})),l.a.createElement("p",null,"I created the front end using React, with Redux and CSSTransitions, using Django Rest Framework in the backend."),l.a.createElement("div",{className:"App-img-container"},l.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:"App-img",src:"/portfolio/bc-all-directions.mp4"})),l.a.createElement("p",null,"The music player changes the level."),l.a.createElement("div",{className:"App-img-container"},l.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:"App-img",src:"/portfolio/bc-music-player.mp4"})),l.a.createElement("p",null,"I created a simple level builder that they can use to customise these worlds from a graphical standpoint."),l.a.createElement("p",null,"Elements can be scaled."),l.a.createElement("div",{className:"App-img-container"},l.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:"App-img",src:"/portfolio/bc-build-scale.mp4"})),l.a.createElement("p",null,"Elements can also be translated."),l.a.createElement("div",{className:"App-img-container"},l.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:"App-img",src:"/portfolio/bc-build-translate.mp4"})),l.a.createElement("p",null,"Now the blue guy disappears on click, but the coin does not."),l.a.createElement("div",{className:"App-img-container"},l.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:"App-img",src:"/portfolio/bc-build-scale-result.mp4"})),l.a.createElement("p",null,"That's because translate moves elements without moving their clickable area. So does scale."),l.a.createElement("div",{className:"App-img-container"},l.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:"App-img",src:"/portfolio/bc-build-translate-result.mp4"})),l.a.createElement("br",null))}var J=a(66),U=a.n(J);function z(){var e=function(e){var t=null,a=new XMLHttpRequest;a.open("GET",e,!1),a.send(),200===Number(a.status)&&(t=a.responseText);return t}("".concat("/portfolio","/RESUME.md"));return l.a.createElement("div",{className:"App-page"},l.a.createElement(U.a,{escapeHtml:!1,source:e}),l.a.createElement("br",null),l.a.createElement("br",null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement((function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i.a,null,l.a.createElement(c.c,null,l.a.createElement(c.a,{exact:!0,path:"/resume/print",render:function(e){return l.a.createElement(z,e)}}),l.a.createElement(D,null,l.a.createElement(c.a,{exact:!0,path:"/",render:function(e){return l.a.createElement(Y,e)}}),l.a.createElement(c.a,{exact:!0,path:"/resume",render:function(e){return l.a.createElement(z,e)}}),l.a.createElement(c.a,{exact:!0,path:"/trade-boy",component:q}),l.a.createElement(c.a,{exact:!0,path:"/social-automator",component:H}),l.a.createElement(c.a,{exact:!0,path:"/bp-chronicles",component:F})))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},75:function(e,t,a){e.exports=a(167)},80:function(e,t,a){},87:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.804442bb.chunk.js.map