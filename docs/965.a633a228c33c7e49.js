"use strict";(self.webpackChunkangular_conduit=self.webpackChunkangular_conduit||[]).push([[965],{7965:(u,r,t)=>{t.r(r),t.d(r,{ProfileFavoritesComponent:()=>f});var n=t(3292),a=t(9773),l=t(8645),e=t(2029),c=t(3699),_=t(1666);let f=(()=>{class o{constructor(i,s){this.route=i,this.profileService=s,this.destroy$=new l.x}ngOnInit(){this.profileService.get(this.route.parent?.snapshot.params.username).pipe((0,a.R)(this.destroy$)).subscribe({next:i=>{this.profile=i,this.favoritesConfig={type:"all",filters:{favorited:this.profile.username}}}})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static#t=this.\u0275fac=function(s){return new(s||o)(e.Y36(c.gz),e.Y36(_.H))};static#e=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-profile-favorites"]],standalone:!0,features:[e.jDz],decls:1,vars:2,consts:[[3,"limit","config"]],template:function(s,p){1&s&&e._UZ(0,"app-article-list",0),2&s&&e.Q6J("limit",10)("config",p.favoritesConfig)},dependencies:[n.P],encapsulation:2})}return o})()}}]);