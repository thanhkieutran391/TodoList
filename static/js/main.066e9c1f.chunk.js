(this["webpackJsonptodolist-material"]=this["webpackJsonptodolist-material"]||[]).push([[0],{64:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),o=n(9),i=n.n(o),r=(n(64),n(49)),s=n(41),j=n(42),u=n(112),d=n(10),b=function(t){var e=t.saveTodo,n=Object(c.useState)(""),a=Object(s.a)(n,2),o=a[0],i=a[1];return Object(d.jsx)("form",{onSubmit:function(t){t.preventDefault(),e(o),i("")},children:Object(d.jsx)(u.a,{id:"standard-basic",label:"Input a todo",onChange:function(t){i(t.target.value)},value:o})})},l=n(107),O=n(108),f=n(111),h=n(110),x=n(113),v=n(109),p=n(48),m=n.n(p),g=function(t){var e=t.todos,n=t.deleteTodo;return Object(d.jsx)(l.a,{children:e.map((function(t,e){return Object(d.jsxs)(O.a,{dense:!0,button:!0,children:[Object(d.jsx)(x.a,{tabIndex:-1,disableRipple:!0}),Object(d.jsx)(h.a,{primary:t}),Object(d.jsx)(f.a,{children:Object(d.jsx)(v.a,{"aria-label":"Delete",onClick:function(){n(e)},children:Object(d.jsx)(m.a,{})})})]},e)}))})},T=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(j.a,{variant:"h2",component:"h2",children:"Todo List"}),Object(d.jsx)(b,{saveTodo:function(t){var e=t.trim();e.length>0&&function(t){a([].concat(Object(r.a)(n),[t]))}(e)}}),Object(d.jsx)(g,{todos:n,deleteTodo:function(t){var e=n.filter((function(e,n){return n!==t}));a(e)}})]})};var C=function(){return Object(d.jsx)(T,{})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,115)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),o(t),i(t)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),S()}},[[73,1,2]]]);
//# sourceMappingURL=main.066e9c1f.chunk.js.map