"use strict";(self.webpackChunkspa_angular_typescript_hello_world=self.webpackChunkspa_angular_typescript_hello_world||[]).push([[500],{2500:(A,i,s)=>{s.r(i),s.d(i,{AdminModule:()=>h});var m=s(6895),p=s(1316),c=s(5477),e=s(4650),l=s(5247),r=s(7605),u=s(4852);let g=(()=>{class n{constructor(t){this.messageService=t,this.message=""}ngOnInit(){this.messageService.getAdminResource().subscribe(t=>{const{data:a,error:d}=t;a&&(this.message=JSON.stringify(a,null,2)),d&&(this.message=JSON.stringify(d,null,2))})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.ez))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-admin"]],decls:18,vars:1,consts:[[1,"content-layout"],["id","page-title",1,"content__title"],[1,"content__body"],["id","page-description"],["title","Admin Message",3,"code"]],template:function(t,a){1&t&&(e.TgZ(0,"app-page-layout")(1,"div",0)(2,"h1",1),e._uU(3,"Admin Page"),e.qZA(),e.TgZ(4,"div",2)(5,"p",3)(6,"span"),e._uU(7,"This page retrieves an "),e.TgZ(8,"strong"),e._uU(9,"admin message"),e.qZA(),e._uU(10," from an external API."),e.qZA(),e.TgZ(11,"span")(12,"strong"),e._uU(13,"Only authenticated users with the "),e.TgZ(14,"code"),e._uU(15,"read:admin-messages"),e.qZA(),e._uU(16," permission should access this page."),e.qZA()()(),e._UZ(17,"app-code-snippet",4),e.qZA()()()),2&t&&(e.xp6(17),e.Q6J("code",a.message))},dependencies:[r.N,u.w],encapsulation:2}),n})(),h=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.ez,c.m,p.Bz.forChild([{path:"",component:g}])]}),n})()}}]);