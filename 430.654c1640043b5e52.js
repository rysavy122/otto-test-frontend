"use strict";(self.webpackChunkspa_angular_typescript_hello_world=self.webpackChunkspa_angular_typescript_hello_world||[]).push([[430],{2430:(f,c,n)=>{n.r(c),n.d(c,{ProtectedModule:()=>h});var p=n(6895),d=n(1316),l=n(5477),e=n(4650),i=n(5247),u=n(7605),g=n(4852);let m=(()=>{class t{constructor(o){this.messageService=o,this.message=""}ngOnInit(){this.messageService.getProtectedResource().subscribe(o=>{const{data:a,error:r}=o;a&&(this.message=JSON.stringify(a,null,2)),r&&(this.message=JSON.stringify(r,null,2))})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(i.ez))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-protected"]],decls:17,vars:1,consts:[[1,"content-layout"],["id","page-title",1,"content__title"],[1,"content__body"],["id","page-description"],["title","Protected Message",3,"code"],[1,"submit-button"]],template:function(o,a){1&o&&(e.TgZ(0,"app-page-layout")(1,"div",0)(2,"h1",1),e._uU(3,"Protected Page"),e.qZA(),e.TgZ(4,"div",2)(5,"p",3)(6,"span"),e._uU(7,"This page retrieves a "),e.TgZ(8,"strong"),e._uU(9,"protected message"),e.qZA(),e._uU(10," from an external API."),e.qZA(),e.TgZ(11,"span")(12,"strong"),e._uU(13,"Only authenticated users can access this page."),e.qZA()()(),e._UZ(14,"app-code-snippet",4),e.TgZ(15,"button",5),e._uU(16,"Forschungsfrage stellen"),e.qZA()()()()),2&o&&(e.xp6(14),e.Q6J("code",a.message))},dependencies:[u.N,g.w],encapsulation:2}),t})(),h=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,l.m,d.Bz.forChild([{path:"",component:m}])]}),t})()}}]);