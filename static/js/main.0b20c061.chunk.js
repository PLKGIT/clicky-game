(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Rockford Files","image":"./images/rockford.jpg","clicked":false},{"id":2,"name":"Baretta","image":"./images/baretta.jpg","clicked":false},{"id":3,"name":"Mannix","image":"./images/mannix.jpg","clicked":false},{"id":4,"name":"Police Woman","image":"./images/policewoman.jpg","clicked":false},{"id":5,"name":"Quincy, M.E.","image":"./images/quincy.jpg","clicked":false},{"id":6,"name":"Mod Squad","image":"./images/modsquad.jpg","clicked":false},{"id":7,"name":"Charlies\' Angels","image":"./images/charlies.jpg","clicked":false},{"id":8,"name":"Columbo","image":"./images/columbo.jpg","clicked":false},{"id":9,"name":"Hart to Hart","image":"./images/hart.jpg","clicked":false},{"id":10,"name":"Hawaii 5-0","image":"./images/hawaii.jpg","clicked":false},{"id":11,"name":"Ironside","image":"./images/ironside.jpg","clicked":false},{"id":12,"name":"Kojak","image":"./images/kojak.jpg","clicked":false},{"id":13,"name":"Barnaby Jones","image":"./images/barnaby.jpg","clicked":false},{"id":14,"name":"McMillan & Wife","image":"./images/mcmillan.jpg","clicked":false},{"id":15,"name":"McCloud","image":"./images/mccloud.jpg","clicked":false},{"id":16,"name":"Starsky and Hutch","image":"./images/starsky.jpg","clicked":false}]')},,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),i=t.n(c),n=t(3),l=t.n(n),s=t(1),r=t(4),m=t(5),o=t(8),d=t(7);var g=function(e){return i.a.createElement("div",{className:"fixed-top bg-dark text-white py-3"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-4"},i.a.createElement("p",{className:"h1 text-left pl-3"},"70's TV Mashup")),i.a.createElement("div",{className:"col-4"},i.a.createElement("p",{className:"h2 text-center pt-2"},e.message)),i.a.createElement("div",{className:"col-4"},i.a.createElement("p",{className:"h2 text-right  pt-2 pr-3"},"Score: ",e.score," | Top Score: ",e.topScore))))};var u=function(){return i.a.createElement("div",{className:"jumbotron bg-primary text-white mt-5"},i.a.createElement("h1",{className:"display-4 text-center"},"Clicky Game"),i.a.createElement("p",{className:"lead text-center"},"Click on an image to earn points, but don't click any image than once!"))};t(14);var p=function(e){return i.a.createElement("div",{className:"container"},e.children)},f=(t(15),function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("span",{onClick:function(){return e.HandleCardClicked(e.id)},className:"clicked"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image,width:"200"}))))});var k=function(){return i.a.createElement("footer",{className:"footer bg-dark text-white py-1 text-center"},i.a.createElement("div",{className:"container"},i.a.createElement("h6",null,"\xa9 Copyright 2020 Pam Kelly")))},h=t(6),E=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(r.a)(this,t);for(var c=arguments.length,i=new Array(c),n=0;n<c;n++)i[n]=arguments[n];return(e=a.call.apply(a,[this].concat(i))).state={message:"Welcome to the 70s!",score:0,topScore:0,images:h},e.HandleCorrectClick=function(a){var t=e.state,c=t.score,i=t.topScore,n=c+1,l=Math.max(n,i);e.setState({images:e.ShuffleImages(a),score:n,topScore:l,message:"Good guess!"})},e.HandleRepeatClick=function(a){e.setState({images:e.ResetClicked(a),score:0,message:"Sorry, you chose that already!"})},e.ResetClicked=function(a){var t=a.map((function(e){return Object(s.a)({},e,{clicked:!1})}));return e.ShuffleImages(t)},e.ShuffleImages=function(e){for(var a=e.length-1;a>0;){var t=Math.floor(Math.random()*(a+1)),c=e[a];e[a]=e[t],e[t]=c,a--}return e},e.HandleCardClicked=function(a){console.log("Card clicked!");var t=!1,c=e.state.images.map((function(e){var c=Object(s.a)({},e);return c.id===a&&(c.clicked||(c.clicked=!0,t=!0)),c}));t?e.HandleCorrectClick(c):e.HandleRepeatClick(c)},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({images:this.ShuffleImages(this.state.images)})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement(g,{message:this.state.message,score:this.state.score,topScore:this.state.topScore}),i.a.createElement(u,null),i.a.createElement(p,null,this.state.images.map((function(a){return i.a.createElement(f,{id:a.id,key:a.id,name:a.name,image:a.image,clicked:a.clicked,HandleCardClicked:e.HandleCardClicked})}))),i.a.createElement(k,null))}}]),t}(c.Component);t(16);l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(E,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.0b20c061.chunk.js.map