(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{24:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var a,r,i,c,o,s,l,d,b,u,p,h=t(1),m=t.n(h),j=t(10),x=t.n(j),f=t(13),g=t(11),O=t(5),y=t(6),C=t(8),v=t(7),w=t(26),k=t(4),S=t(2),z=t(3),A=z.a.form(a||(a=Object(S.a)(["\n  padding: 40px 50px;\n  margin: 50px auto 0;\n  max-width: 400px;\n  background: orange;\n"]))),F=z.a.label(r||(r=Object(S.a)(["\n  display: block;\n  font-family: 'Roboto', sans-serif;\n  color: green;\n  text-transform: uppercase;\n  font-size: 24px;\n"]))),I=z.a.input(i||(i=Object(S.a)(["\n  display: block;\n  padding: 0 0 0 15px;\n  margin: 10px 0 15px;\n  width: 100%;\n  line-height: 40px;\n  color: green;\n  border-width: 0px;\n"]))),L=z.a.button(c||(c=Object(S.a)(["\n  display: block;\n  margin: 40px 0 15px;\n  width: 103%;\n  border-width: 0;\n  line-height: 40px;\n  text-transform: uppercase;\n  font-size: 14px;\n  background-color: green;\n  cursor: pointer;\n"]))),N=t(0),D=function(e){Object(C.a)(t,e);var n=Object(v.a)(t);function t(){var e;Object(O.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={name:"",number:""},e.nameId=Object(w.a)(),e.telId=Object(w.a)(),e.handleSubmit=function(n){var t=e.state,a=t.name,r=t.number;n.preventDefault(),e.props.onSubmit(a,r),e.resetState()},e.handleNameChange=function(n){var t=n.currentTarget,a=t.name,r=t.value;e.setState(Object(k.a)({},a,r))},e.resetState=function(){e.setState({name:"",number:""})},e}return Object(y.a)(t,[{key:"render",value:function(){return Object(N.jsxs)(A,{onSubmit:this.handleSubmit,children:[Object(N.jsxs)(F,{htmlFor:this.nameId,children:["Name",Object(N.jsx)(I,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:this.nameId,value:this.state.name,onChange:this.handleNameChange})]}),Object(N.jsxs)(F,{htmlFor:this.telId,children:["Number",Object(N.jsx)(I,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:this.telId,value:this.state.number,onChange:this.handleNameChange})]}),Object(N.jsx)(L,{type:"submit",children:"Add to contacts"})]})}}]),t}(h.Component),R=z.a.button(o||(o=Object(S.a)(["\n  display: inline-block;\n  width: 30%;\n  border-width: 0;\n  line-height: 40px;\n  text-transform: uppercase;\n  font-size: 14px;\n  background-color: green;\n  cursor: pointer;\n"]))),H=z.a.ul(s||(s=Object(S.a)(["\n  padding: 40px 50px;\n  margin: 50px auto 0;\n  list-style: none;\n  max-width: 400px;\n"]))),J=z.a.p(l||(l=Object(S.a)(["\n  display: block;\n  padding: 0 15px;\n  color: black;\n  font-family: 'Roboto', sans-serif;\n  font-size: 18px;\n"]))),Z=z.a.li(d||(d=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),q=function(e){var n=e.contacts,t=e.onDeleteContacts;return Object(N.jsx)(H,{children:n.map((function(e){var n=e.id,a=e.name,r=e.number;return Object(N.jsxs)(Z,{children:[Object(N.jsxs)(J,{children:[a," : ",r]}),Object(N.jsx)(R,{onClick:function(){return t(n)},children:"Delete"})]},n)}))})},B=z.a.label(b||(b=Object(S.a)(["\n  display: block;\n  margin: 50px auto 0;\n  width: 400px;\n  color: green;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 20px;\n"]))),E=z.a.input(u||(u=Object(S.a)(["\n  display: block;\n  padding: 0 0 0 15px;\n  margin: 10px 0 15px;\n  width: 100%;\n  border-width: 0;\n  line-height: 40px;\n  color: black;\n  border: solid green 1px;\n"]))),M=function(e){var n=e.value,t=e.onChange;return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(B,{htmlFor:"lab",children:["Find contacts by name",Object(N.jsx)(E,{type:"text",id:"lab",value:n,onChange:t})]})})},T=z.a.h2(p||(p=Object(S.a)(["\n  display: block;\n  margin: 50px auto 0;\n  width: 400px;\n  font-family: 'Roboto', sans-serif;\n  color: green;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 34px;\n"]))),K=function(e){Object(C.a)(t,e);var n=Object(v.a)(t);function t(){var e;Object(O.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.formSubmitHandler=function(n,t){var a={id:Object(w.a)(),name:n,number:t};e.setState((function(t){return e.state.contacts.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?(alert("".concat(n," is alredy in contacts")),Object(g.a)({},t)):{contacts:[a].concat(Object(f.a)(t.contacts))}}))},e.deleteContact=function(n){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==n}))}}))},e.changeFilter=function(n){e.setState({filter:n.currentTarget.value})},e.getFilteredContacts=function(){var n=e.state,t=n.filter;return n.contacts.filter((function(e){return e.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())}))},e}return Object(y.a)(t,[{key:"render",value:function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)(T,{children:"Phonebook"}),Object(N.jsx)(D,{onSubmit:this.formSubmitHandler}),Object(N.jsx)(T,{children:"Contacts"}),Object(N.jsx)(M,{value:this.state.filter,onChange:this.changeFilter}),Object(N.jsx)(q,{contacts:this.getFilteredContacts(),onDeleteContacts:this.deleteContacts})]})}}]),t}(h.Component);t(24);x.a.render(Object(N.jsx)(m.a.StrictMode,{children:Object(N.jsx)(K,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.80925d98.chunk.js.map