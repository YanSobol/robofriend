(this.webpackJsonprobofriend=this.webpackJsonprobofriend||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),s=n.n(c),a=(n(12),n(2)),o=n(3),i=n(5),h=n(4),l=(n(13),n(14),n(0)),b=function(e){var t=e.robot,n=t.name,r=t.username,c=t.email,s=t.id;return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"card tc dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(l.jsx)("img",{className:"robot_image",alt:"robot_image",src:"https://robohash.org/".concat(r+s,"?200x200")}),Object(l.jsx)("h2",{children:n}),Object(l.jsx)("h5",{children:c})]})})},u=function(e){var t=e.robots.map((function(e){return Object(l.jsx)(b,{robot:e},e.id)}));return Object(l.jsx)("div",{className:"flex flex-wrap",children:t})},j=function(e){var t=e.searchChange;return Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robot",onChange:t})})},d=function(e){return Object(l.jsx)("div",{style:{overflow:"scroll",border:"2px solid white",height:"700px"},children:e.children})},f=(n(16),function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"Oooops we have a problem"}):this.props.children}}]),n}(r.Component)),p=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChanges=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"RoboFriend"}),Object(l.jsx)(j,{searchChange:this.onSearchChanges}),Object(l.jsx)(d,{children:Object(l.jsx)(f,{children:Object(l.jsx)(u,{robots:t})})})]})}}]),n}(r.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};s.a.render(Object(l.jsx)(p,{}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.c676492a.chunk.js.map