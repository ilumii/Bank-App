(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(67)},40:function(e,t,a){},41:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),i=a.n(c),s=(a(40),a(16)),o=a(2),l=a(3),u=a(5),m=a(4),d=a(6),b=a(8),p=a(12),h=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.debits?r.a.createElement("h1",null,"Debit Total: ",this.props.debits):r.a.createElement("div",null),this.props.credits?r.a.createElement("h1",null,"Credit Total: ",this.props.credits):r.a.createElement("div",null),r.a.createElement("h1",null,"Account Balance: ",this.props.accountBalance))}}]),t}(n.Component),E=(a(41),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Bank of React"),r.a.createElement(b.b,{to:"/userProfile"},"User Profile"),r.a.createElement("br",null),r.a.createElement(b.b,{to:"debit"},"Debits"),r.a.createElement("br",null),r.a.createElement(b.b,{to:"credit"},"Credits"),r.a.createElement(h,{debits:this.props.debits,credits:this.props.credits,accountBalance:this.props.accountBalance}))}}]),t}(n.Component)),f=(a(46),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"User Profile"),r.a.createElement("div",null,"Username: ",this.props.userName),r.a.createElement("div",null,"Member Since: ",this.props.memberSince),r.a.createElement(b.b,{to:"/home"},"Home"))}}]),t}(n.Component)),v=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){var a=Object(s.a)({},e.state.user),n=t.target.name,r=t.target.value;a[n]=r,e.setState({user:a})},e.handleSubmit=function(t){t.preventDefault(),e.props.mockLogIn(e.state.user),e.setState({redirect:!0})},e.state={user:{userName:"",password:""},redirect:!1},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(p.a,{to:"/userProfile"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"userName"},"User Name"),r.a.createElement("input",{type:"text",name:"userName",onChange:this.handleChange,value:this.state.user.userName})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password"})),r.a.createElement("button",null,"Log In")))}}]),t}(n.Component),j=a(13);a(47),a(48);var O=function(e){var t=e.description,a=e.amount,n=e.date;return e.data,r.a.createElement("div",{className:"Card"},r.a.createElement("div",{className:"Body"},"Description: ",t,r.a.createElement("br",null),"Amount: ",a,r.a.createElement("br",null),"Date: ",n))},g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).display=function(){return e.props.debitsData.map(function(t){return r.a.createElement(O,{description:t.description,amount:t.amount,date:t.date,data:e.props.debitsData})})},e.handleChange=function(t){return function(a){var n=a.target;console.log(n.value),e.setState(Object(j.a)({},t,n.value))}},e.handleSubmit=function(t){t.preventDefault(),e.props.newDebit(e.state.description,e.state.amount,e.state.time)},e.state={description:"",amount:0,time:""},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){e.setState({time:(new Date).toLocaleString()})},1e3)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Debits"),r.a.createElement(h,{debits:this.props.debits,accountBalance:this.props.accountBalance}),r.a.createElement("div",{className:"items"},this.display()),r.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},r.a.createElement("label",null,"Debit Description:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",onChange:this.handleChange("description")})),r.a.createElement("br",null),r.a.createElement("label",null,"Debit Amount:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",onChange:this.handleChange("amount")})),r.a.createElement("br",null),r.a.createElement("input",{value:this.state.time}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",value:"Submit"},"Submit")),r.a.createElement(b.b,{to:"/home"},"Home"))}}]),t}(n.Component),D=(a(49),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).display=function(){return e.props.creditsData.map(function(t){return r.a.createElement(O,{description:t.description,amount:t.amount,date:t.date,data:e.props.debitsData})})},e.handleChange=function(t){return function(a){var n=a.target;console.log(n.value),e.setState(Object(j.a)({},t,n.value))}},e.handleSubmit=function(t){t.preventDefault(),e.props.newCredit(e.state.description,e.state.amount,e.state.time)},e.state={description:"",amount:0,time:""},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){e.setState({time:(new Date).toLocaleString()})},1e3)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Credits"),r.a.createElement(h,{credits:this.props.credits,accountBalance:this.props.accountBalance}),r.a.createElement("div",{className:"items"},this.display()),r.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},r.a.createElement("label",null,"Credit Description:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",onChange:this.handleChange("description")})),r.a.createElement("br",null),r.a.createElement("label",null,"Credit Amount:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",onChange:this.handleChange("amount")})),r.a.createElement("br",null),r.a.createElement("input",{value:this.state.time}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",value:"Submit"},"Submit")),r.a.createElement(b.b,{to:"/home"},"Home"))}}]),t}(n.Component)),S=a(20),C=a.n(S),w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).mockLogIn=function(t){var a=Object(s.a)({},e.state.currentUser);a.userName=t.userName,e.setState({currentUser:a})},e.newDebit=function(t,a,n){var r=(e.state.debits-parseInt(a)).toFixed(2),c={amount:a,description:t,date:n},i=e.state.debitsData.push(c);e.setState({debits:r,description:i})},e.newCredit=function(t,a,n){var r=e.state.credits+parseInt(a),c={amount:a,description:t,date:n},i=e.state.creditsData.push(c);e.setState({credits:r,description:i})},e.state={accountBalance:14568.27,currentUser:{userName:"bob_loblaw",memberSince:"08/23/99"},debits:0,debitsData:[],credits:0,creditsData:[],description:[]},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.a.get("https://moj-api.herokuapp.com/debits").then(function(t){var a=0;t.data.map(function(e){a+=e.amount}),e.setState({debits:a,debitsData:t.data})}).catch(function(e){console.log(e)}),C.a.get("https://moj-api.herokuapp.com/credits").then(function(t){console.log(t);var a=0;t.data.map(function(e){a+=e.amount}),e.setState({credits:a,creditsData:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement(b.a,null,r.a.createElement("div",null,r.a.createElement(p.b,{exact:!0,path:"/home",render:function(){return r.a.createElement(E,{debits:e.state.debits,credits:e.state.credits,accountBalance:(e.state.credits-e.state.debits).toFixed(2)})}}),r.a.createElement(p.b,{exact:!0,path:"/userProfile",render:function(){return r.a.createElement(f,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),r.a.createElement(p.b,{exact:!0,path:"/",render:function(){return r.a.createElement(v,Object.assign({user:e.state.currentUser,mockLogIn:e.mockLogIn},e.props))}}),r.a.createElement(p.b,{exact:!0,path:"/debit",render:function(){return r.a.createElement(g,{debits:e.state.debits,debitsData:e.state.debitsData,newDebit:e.newDebit,accountBalance:(e.state.credits-e.state.debits).toFixed(2)})}}),r.a.createElement(p.b,{exact:!0,path:"/credit",render:function(){return r.a.createElement(D,{credits:e.state.credits,creditsData:e.state.creditsData,newCredit:e.newCredit,accountBalance:(e.state.credits-e.state.debits).toFixed(2)})}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.7bc58c8b.chunk.js.map