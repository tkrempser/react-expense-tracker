(this["webpackJsonpreact-expense-tracker"]=this["webpackJsonpreact-expense-tracker"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),l=(n(13),n(5)),s=n(2),i=n(1),r=n(27),u=(n(14),n(0)),j=function(e){var t="card ".concat(e.className);return Object(u.jsx)("div",{className:t,children:e.children})},o=(n(16),n(17),function(e){return Object(u.jsx)("div",{className:"expenses-filter",children:Object(u.jsxs)("div",{className:"expenses-filter__control",children:[Object(u.jsx)("label",{children:"Filter by year"}),Object(u.jsxs)("select",{onChange:function(t){e.onSelectYear(t.target.value)},value:e.selectedYear,children:[Object(u.jsx)("option",{value:"2022",children:"2022"}),Object(u.jsx)("option",{value:"2021",children:"2021"}),Object(u.jsx)("option",{value:"2020",children:"2020"}),Object(u.jsx)("option",{value:"2019",children:"2019"})]})]})})}),d=(n(18),function(e){var t=e.date.toLocaleString("en-US",{day:"2-digit"}),n=e.date.toLocaleString("en-US",{month:"long"}),a=e.date.getFullYear();return Object(u.jsxs)("div",{className:"expense-date",children:[Object(u.jsx)("div",{className:"expense-date__month",children:n}),Object(u.jsx)("div",{className:"expense-date__year",children:a}),Object(u.jsx)("div",{className:"expense-date__day",children:t})]})}),b=(n(19),function(e){var t=Object(i.useState)(e.title),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(u.jsx)(j,{className:"expense-item",children:Object(u.jsxs)("div",{className:"expense-item__description",children:[Object(u.jsx)(d,{date:e.date}),Object(u.jsx)("h2",{children:a}),Object(u.jsxs)("div",{className:"expense-item__price",onClick:function(){c("Updated")},children:["$",e.amount.toFixed(2)]})]})})}),x=(n(20),function(e){return 0===e.items.length?Object(u.jsx)("h2",{className:"expenses-list__fallback",children:"No expenses found."}):Object(u.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(b,{amount:e.amount,date:e.date,title:e.title},e.id)},e.id)}))})}),O=n(8),v=(n(21),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(u.jsxs)("div",{className:"chart-bar",children:[Object(u.jsx)("div",{className:"chart-bar__inner",children:Object(u.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(u.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),h=(n(22),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(u.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(u.jsx)(v,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),p=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(O.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(u.jsx)(h,{dataPoints:n})},m=function(e){var t=Object(i.useState)("2021"),n=Object(s.a)(t,2),a=n[0],c=n[1],l=e.expenses.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(u.jsxs)(j,{className:"expenses",children:[Object(u.jsx)(o,{onSelectYear:function(e){c(e)},selectedYear:a}),Object(u.jsx)(p,{expenses:l}),Object(u.jsx)(x,{items:l})]})},f=(n(23),n(24),function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1],l=Object(i.useState)(""),r=Object(s.a)(l,2),j=r[0],o=r[1],d=Object(i.useState)(""),b=Object(s.a)(d,2),x=b[0],O=b[1];return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={date:new Date(x),amount:+j,title:a};e.onAddExpense(n),O(""),c(""),o("")},children:[Object(u.jsxs)("div",{className:"new-expense__controls",children:[Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Title"}),Object(u.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)},value:a})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Amount"}),Object(u.jsx)("input",{type:"number",min:"0.01",step:"0.01",onChange:function(e){o(e.target.value)},value:j})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Date"}),Object(u.jsx)("input",{type:"date",min:"2020-01-01",max:"2021-12-31",onChange:function(e){O(e.target.value)},value:x})]})]}),Object(u.jsxs)("div",{className:"new-expense__actions",children:[Object(u.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(u.jsx)("button",{type:"submit",children:"Add"})]})]})}),_=function(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1],l=function(){c(!1)};return Object(u.jsxs)("div",{className:"new-expense",children:[!a&&Object(u.jsx)("button",{onClick:function(){c(!0)},children:"Add New Expense"}),a&&Object(u.jsx)(f,{onAddExpense:function(t){e.onAddExpense(t),l()},onCancel:l})]})},N=function(){var e=Object(i.useState)([{id:"e1",amount:9.99,date:new Date(2021,5,22),title:"Book"},{id:"e2",amount:39.49,date:new Date(2020,5,21),title:"Shirt"},{id:"e3",amount:85.59,date:new Date(2021,4,8),title:"Electricity bill"}]),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(_,{onAddExpense:function(e){e.id=Object(r.a)(),a((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(u.jsx)(m,{expenses:n})]})};c.a.render(Object(u.jsx)(N,{}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.54406708.chunk.js.map