"use strict";(self.webpackChunkangular_conduit=self.webpackChunkangular_conduit||[]).push([[753],{3753:(C,l,i)=>{i.r(l),i.d(l,{EditorComponent:()=>E});var _=i(6814),r=i(95),d=i(8645),g=i(2572),u=i(9773),p=i(7520),t=i(2029),m=i(5371),c=i(3699),h=i(3934);function f(n,v){if(1&n){const e=t.EpF();t.TgZ(0,"span",15)(1,"i",16),t.NdJ("click",function(){const a=t.CHM(e).$implicit,T=t.oxw();return t.KtG(T.removeTag(a))}),t.qZA(),t._uU(2),t.qZA()}if(2&n){const e=v.$implicit;t.xp6(2),t.hij(" ",e," ")}}let E=(()=>{class n{constructor(e,s,o,a){this.articleService=e,this.route=s,this.router=o,this.userService=a,this.tagList=[],this.articleForm=new r.cw({title:new r.NI("",{nonNullable:!0}),description:new r.NI("",{nonNullable:!0}),body:new r.NI("",{nonNullable:!0})}),this.tagField=new r.NI("",{nonNullable:!0}),this.errors=null,this.isSubmitting=!1,this.destroy$=new d.x}ngOnInit(){this.route.snapshot.params.slug&&(0,g.a)([this.articleService.get(this.route.snapshot.params.slug),this.userService.getCurrentUser()]).pipe((0,u.R)(this.destroy$)).subscribe(([e,{user:s}])=>{s.username===e.author.username?(this.tagList=e.tagList,this.articleForm.patchValue(e)):this.router.navigate(["/"])})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}addTag(){const e=this.tagField.value;null!=e&&""!==e.trim()&&this.tagList.indexOf(e)<0&&this.tagList.push(e),this.tagField.reset("")}removeTag(e){this.tagList=this.tagList.filter(s=>s!==e)}submitForm(){this.isSubmitting=!0,this.addTag(),this.articleService.create({...this.articleForm.value,tagList:this.tagList}).pipe((0,u.R)(this.destroy$)).subscribe({next:e=>this.router.navigate(["/article/",e.slug]),error:e=>{this.errors=e,this.isSubmitting=!1}})}static#t=this.\u0275fac=function(s){return new(s||n)(t.Y36(m.J),t.Y36(c.gz),t.Y36(c.F0),t.Y36(h.v))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-editor-page"]],standalone:!0,features:[t.jDz],decls:20,vars:5,consts:[[1,"editor-page"],[1,"container","page"],[1,"row"],[1,"col-md-10","offset-md-1","col-xs-12"],[3,"errors"],[3,"formGroup"],[3,"disabled"],[1,"form-group"],["formControlName","title","type","text","placeholder","Article Title",1,"form-control","form-control-lg"],["formControlName","description","type","text","placeholder","What's this article about?",1,"form-control"],["formControlName","body","rows","8","placeholder","Write your article (in markdown)",1,"form-control"],["type","text","placeholder","Enter tags",1,"form-control",3,"formControl","keyup.enter"],[1,"tag-list"],["class","tag-default tag-pill",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-lg","pull-xs-right","btn-primary",3,"click"],[1,"tag-default","tag-pill"],[1,"ion-close-round",3,"click"]],template:function(s,o){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"app-list-errors",4),t.TgZ(5,"form",5)(6,"fieldset",6)(7,"fieldset",7),t._UZ(8,"input",8),t.qZA(),t.TgZ(9,"fieldset",7),t._UZ(10,"input",9),t.qZA(),t.TgZ(11,"fieldset",7)(12,"textarea",10),t._uU(13,"              "),t.qZA()(),t.TgZ(14,"fieldset",7)(15,"input",11),t.NdJ("keyup.enter",function(){return o.addTag()}),t.qZA(),t.TgZ(16,"div",12),t.YNc(17,f,3,1,"span",13),t.qZA()(),t.TgZ(18,"button",14),t.NdJ("click",function(){return o.submitForm()}),t._uU(19," Publish Article "),t.qZA()()()()()()()),2&s&&(t.xp6(4),t.Q6J("errors",o.errors),t.xp6(1),t.Q6J("formGroup",o.articleForm),t.xp6(1),t.Q6J("disabled",o.isSubmitting),t.xp6(9),t.Q6J("formControl",o.tagField),t.xp6(2),t.Q6J("ngForOf",o.tagList))},dependencies:[p.S,r.UX,r._Y,r.Fj,r.JJ,r.JL,r.oH,r.sg,r.u,_.sg],encapsulation:2})}return n})()}}]);