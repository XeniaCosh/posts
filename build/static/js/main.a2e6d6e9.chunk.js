(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,a){t.exports=a(19)},17:function(t,e,a){},18:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),o=a(8),r=a.n(o),l=(a(16),a(17),a(18),a(9));null===localStorage.getItem("app-posts")&&localStorage.setItem("app-posts",JSON.stringify(l));var i=a(2),c=a(3),p=a(5),u=a(4),m=a(6),h=a(1),d=function(t){function e(){return Object(i.a)(this,e),Object(p.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return s.a.createElement("div",{id:"posts",className:this.props.app.state.posts.length?"well":"empty-posts-area"},this.props.app.state.posts.map(function(e){return s.a.createElement("article",{key:e.id},s.a.createElement("header",null,s.a.createElement("h3",null,e.title)),s.a.createElement("section",null,s.a.createElement("p",null,e.body)),s.a.createElement("footer",null,s.a.createElement("div",{className:"tags"},e.tags.map(function(t){return s.a.createElement("button",{key:t,className:"btn btn-xs btn-default"},t)}))),s.a.createElement("div",{className:"controls"},s.a.createElement("button",{id:"post-button-"+e.id,className:"btn btn-danger btn-mini",onClick:t.props.app.handleRemove},"\u0443\u0434\u0430\u043b\u0438\u0442\u044c")))}))}}]),e}(n.Component),b=function(t){function e(){return Object(i.a)(this,e),Object(p.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return s.a.createElement("form",{id:"post-add",className:"col-lg-4",onSubmit:this.props.app.handleSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",className:"form-control",name:"title",placeholder:"\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",onChange:this.props.app.handleChange,value:this.props.app.state.title})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",className:"form-control",name:"body",placeholder:"\u0437\u0430\u043f\u0438\u0441\u044c",onChange:this.props.app.handleChange,value:this.props.app.state.body})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",className:"form-control",name:"tags",placeholder:"\u0442\u0435\u0433, \u0435\u0449\u0435 \u0442\u0435\u0433",onChange:this.props.app.handleChange,value:this.props.app.state.tags})),s.a.createElement("button",{type:"submit",className:"btn btn-primary"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))}}]),e}(n.Component),g=function(t){function e(t){var a;return Object(i.a)(this,e),a=Object(p.a)(this,Object(u.a)(e).call(this,t)),null===localStorage.getItem(a.props.localKey)&&localStorage.setItem(a.props.localKey,JSON.stringify([])),a.state={posts:JSON.parse(localStorage.getItem(a.props.localKey)),title:"",body:"",tags:[]},a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(Object(h.a)(a))),a.handleRemove=a.handleRemove.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("header",{id:"header"},s.a.createElement("div",{className:"page-header"},s.a.createElement("h1",null,"\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u043f\u043e\u0441\u0442\u043e\u0432"))),s.a.createElement("section",null,s.a.createElement(d,{app:this}),s.a.createElement(b,{app:this})))}},{key:"handleChange",value:function(t){switch(t.target.name){case"title":this.setState({title:t.target.value});break;case"body":this.setState({body:t.target.value});break;case"tags":this.setState({tags:t.target.value.split(",")})}}},{key:"handleSubmit",value:function(t){t.preventDefault();var e=this.getPostsMaxId(),a=this.state.title.trim(),n=this.state.body.trim(),s=this.state.tags.map(function(t){return t.trim()}).filter(function(t,e,a){return t&&a.indexOf(t)===e});if(a.length&&n.length&&s.length){var o={id:e,title:a,body:n,tags:s};this.setState(function(t){return{posts:t.posts.concat(o),title:"",body:"",tags:[]}},function(){localStorage.setItem(this.props.localKey,JSON.stringify(this.state.posts))})}}},{key:"handleRemove",value:function(t){var e=parseInt(t.target.id.substr("button-post-".length));this.setState(function(t){return{posts:t.posts.filter(function(t){return parseInt(t.id)!==e}),title:"",body:"",tags:[]}},function(){localStorage.setItem(this.props.localKey,JSON.stringify(this.state.posts))})}},{key:"getPostsMaxId",value:function(){var t=1;return this.state.posts.forEach(function(e){e.id>=t&&(t=+e.id+1)}),t}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(g,{localKey:"app-posts"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t){t.exports=[{id:1,title:"\u0421\u0442\u0440\u0435\u043c\u044f\u0449\u0438\u0439\u0441\u044f \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0438\u0439",body:"\u041f\u043e\u043b\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0439 \u043d\u0435\u0439\u0442\u0440\u0430\u043b\u0438\u0437\u0443\u0435\u0442 \u043a\u043e\u043b\u043b\u0438\u043d\u0435\u0430\u0440\u043d\u044b\u0439 \u043f\u043e\u043b\u0438\u043d\u043e\u043c, \u043e\u0442\u043a\u0443\u0434\u0430 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0434\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u043e\u0435 \u0440\u0430\u0432\u0435\u043d\u0441\u0442\u0432\u043e.",tags:["\u0442\u0435\u0433","\u0435\u0449\u0435 \u0442\u0435\u0433"]},{id:2,title:"\u042d\u0444\u0444\u0443\u0437\u0438\u0432\u043d\u044b\u0439 \u0442\u043e\u043f\u0430\u0437",body:"\u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043f\u043b\u0438\u0442\u044b \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u043b\u0438 \u0441\u0431\u043b\u0438\u0436\u0430\u0442\u044c\u0441\u044f, \u0433\u0435\u0439\u0437\u0435\u0440 \u0441\u0434\u0432\u0438\u0433\u0430\u0435\u0442 \u043a\u0438\u043c\u0431\u0435\u0440\u043b\u0438\u0442, \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u0432 \u0441\u0443\u043c\u043c\u0430\u0440\u043d\u043e\u0439 \u043c\u0438\u043d\u0435\u0440\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438.",tags:["\u043a\u043e\u0440\u0435\u043d\u043d\u043e\u0439 \u0446\u043e\u043a\u043e\u043b\u044c","\u0434\u0438\u0444\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u0430\u0446\u0438\u044f","\u0430\u043f\u0430\u0442\u0438\u0442"]},{id:3,title:"\u0417\u0432\u0443\u043a\u043e\u0440\u044f\u0434\u043d\u044b\u0439 \u043e\u043a\u0442\u0430\u0432\u0435\u0440",body:"\u0420\u0435\u0442\u0440\u043e \u043c\u043e\u043d\u043e\u0442\u043e\u043d\u043d\u043e \u0434\u0438\u0441\u0441\u043e\u043d\u0438\u0440\u0443\u0435\u0442 \u0444\u043e\u0440\u0448\u043b\u0430\u0433, \u0438 \u0437\u0434\u0435\u0441\u044c \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043c\u043e\u0434\u0443\u0441\u0430 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0440\u044f\u0434 \u043a\u0430\u043a\u0438\u0445-\u043b\u0438\u0431\u043e \u0435\u0434\u0438\u043d\u044b\u0445 \u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0435\u0439.",tags:["\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u043e\u043d\u043e\u0440\u043e\u043f\u0435\u0440\u0438\u043e\u0434","\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435"]},{id:4,title:"\u0421\u043f\u0438\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u0442\u043e\u043d",body:"\u041b\u044e\u0431\u043e\u0435 \u0432\u043e\u0437\u043c\u0443\u0449\u0435\u043d\u0438\u0435 \u0437\u0430\u0442\u0443\u0445\u0430\u0435\u0442, \u0435\u0441\u043b\u0438 \u0432\u0437\u0440\u044b\u0432 \u043d\u0435\u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0435\u043c\u043e \u0438\u0441\u043a\u0430\u0436\u0430\u0435\u0442 \u044d\u043a\u0440\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d, \u0438 \u044d\u0442\u043e \u043d\u0435\u0443\u0434\u0438\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e, \u0435\u0441\u043b\u0438 \u0432\u0441\u043f\u043e\u043c\u043d\u0438\u0442\u044c.",tags:["\u0441\u0432\u0435\u0440\u0445\u043d\u043e\u0432\u0430\u044f","\u0433\u0438\u0434\u0440\u043e\u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0443\u0434\u0430\u0440"]}]}},[[10,1,2]]]);
//# sourceMappingURL=main.a2e6d6e9.chunk.js.map