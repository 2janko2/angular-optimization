"use strict";(self.webpackChunkangular_conduit=self.webpackChunkangular_conduit||[]).push([[57],{7520:(Ae,$,u)=>{u.d($,{S:()=>J});var i=u(6814),l=u(2029);function W(f,N){if(1&f&&(l.TgZ(0,"li"),l._uU(1),l.qZA()),2&f){const p=N.$implicit;l.xp6(1),l.hij(" ",p," ")}}function z(f,N){if(1&f&&(l.TgZ(0,"ul",1),l.YNc(1,W,2,1,"li",2),l.qZA()),2&f){const p=l.oxw();l.xp6(1),l.Q6J("ngForOf",p.errorList)}}let J=(()=>{class f{constructor(){this.errorList=[]}set errors(p){this.errorList=p?Object.keys(p.errors||{}).map(m=>`${m} ${p.errors[m]}`):[]}static#t=this.\u0275fac=function(m){return new(m||f)};static#e=this.\u0275cmp=l.Xpm({type:f,selectors:[["app-list-errors"]],inputs:{errors:"errors"},standalone:!0,features:[l.jDz],decls:1,vars:1,consts:[["class","error-messages",4,"ngIf"],[1,"error-messages"],[4,"ngFor","ngForOf"]],template:function(m,Z){1&m&&l.YNc(0,z,2,1,"ul",0),2&m&&l.Q6J("ngIf",Z.errorList)},dependencies:[i.O5,i.sg],encapsulation:2})}return f})()},95:(Ae,$,u)=>{u.d($,{Fj:()=>G,NI:()=>lt,oH:()=>ct,u:()=>ft,cw:()=>T,sg:()=>Y,u5:()=>Vn,JJ:()=>Lt,JL:()=>Yt,F:()=>L,UX:()=>An,kI:()=>Se,_Y:()=>ie});var i=u(2029),l=u(6814),W=u(7715),z=u(5592),J=u(7453),f=u(4829),N=u(4564),p=u(8251),m=u(7400),Z=u(2714),be=u(7398);let yt=(()=>{class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(i.Qsj),i.Y36(i.SBq))};static#e=this.\u0275dir=i.lG2({type:e})}return e})(),C=(()=>{class e extends yt{static#t=this.\u0275fac=function(){let t;return function(o){return(t||(t=i.n5z(e)))(o||e)}}();static#e=this.\u0275dir=i.lG2({type:e,features:[i.qOj]})}return e})();const g=new i.OlP("NgValueAccessor"),Ee={provide:g,useExisting:(0,i.Gpc)(()=>G),multi:!0},Fe=new i.OlP("CompositionEventMode");let G=(()=>{class e extends yt{constructor(t,r,o){super(t,r),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Oe(){const e=(0,l.q)()?(0,l.q)().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(i.Qsj),i.Y36(i.SBq),i.Y36(Fe,8))};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){1&r&&i.NdJ("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[i._Bn([Ee]),i.qOj]})}return e})();function _(e){return null==e||("string"==typeof e||Array.isArray(e))&&0===e.length}function Ct(e){return null!=e&&"number"==typeof e.length}const c=new i.OlP("NgValidators"),y=new i.OlP("NgAsyncValidators"),we=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class Se{static min(n){return function Vt(e){return n=>{if(_(n.value)||_(e))return null;const t=parseFloat(n.value);return!isNaN(t)&&t<e?{min:{min:e,actual:n.value}}:null}}(n)}static max(n){return function At(e){return n=>{if(_(n.value)||_(e))return null;const t=parseFloat(n.value);return!isNaN(t)&&t>e?{max:{max:e,actual:n.value}}:null}}(n)}static required(n){return function Dt(e){return _(e.value)?{required:!0}:null}(n)}static requiredTrue(n){return function bt(e){return!0===e.value?null:{required:!0}}(n)}static email(n){return function Mt(e){return _(e.value)||we.test(e.value)?null:{email:!0}}(n)}static minLength(n){return function Et(e){return n=>_(n.value)||!Ct(n.value)?null:n.value.length<e?{minlength:{requiredLength:e,actualLength:n.value.length}}:null}(n)}static maxLength(n){return function Ot(e){return n=>Ct(n.value)&&n.value.length>e?{maxlength:{requiredLength:e,actualLength:n.value.length}}:null}(n)}static pattern(n){return function Ft(e){if(!e)return B;let n,t;return"string"==typeof e?(t="","^"!==e.charAt(0)&&(t+="^"),t+=e,"$"!==e.charAt(e.length-1)&&(t+="$"),n=new RegExp(t)):(t=e.toString(),n=e),r=>{if(_(r.value))return null;const o=r.value;return n.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}(n)}static nullValidator(n){return null}static compose(n){return xt(n)}static composeAsync(n){return It(n)}}function B(e){return null}function wt(e){return null!=e}function St(e){return(0,i.QGY)(e)?(0,W.D)(e):e}function Nt(e){let n={};return e.forEach(t=>{n=null!=t?{...n,...t}:n}),0===Object.keys(n).length?null:n}function Gt(e,n){return n.map(t=>t(e))}function Bt(e){return e.map(n=>function Ne(e){return!e.validate}(n)?n:t=>n.validate(t))}function xt(e){if(!e)return null;const n=e.filter(wt);return 0==n.length?null:function(t){return Nt(Gt(t,n))}}function Q(e){return null!=e?xt(Bt(e)):null}function It(e){if(!e)return null;const n=e.filter(wt);return 0==n.length?null:function(t){return function De(...e){const n=(0,N.jO)(e),{args:t,keys:r}=(0,J.D)(e),o=new z.y(s=>{const{length:a}=t;if(!a)return void s.complete();const h=new Array(a);let D=a,M=a;for(let q=0;q<a;q++){let _t=!1;(0,f.Xf)(t[q]).subscribe((0,p.x)(s,Dn=>{_t||(_t=!0,M--),h[q]=Dn},()=>D--,void 0,()=>{(!D||!_t)&&(M||s.next(r?(0,Z.n)(r,h):h),s.complete())}))}});return n?o.pipe((0,m.Z)(n)):o}(Gt(t,n).map(St)).pipe((0,be.U)(Nt))}}function X(e){return null!=e?It(Bt(e)):null}function Pt(e,n){return null===e?[n]:Array.isArray(e)?[...e,n]:[e,n]}function kt(e){return e._rawValidators}function Tt(e){return e._rawAsyncValidators}function K(e){return e?Array.isArray(e)?e:[e]:[]}function x(e,n){return Array.isArray(e)?e.includes(n):e===n}function Ht(e,n){const t=K(n);return K(e).forEach(o=>{x(t,o)||t.push(o)}),t}function Ut(e,n){return K(n).filter(t=>!x(e,t))}class jt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Q(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=X(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return!!this.control&&this.control.hasError(n,t)}getError(n,t){return this.control?this.control.getError(n,t):null}}class d extends jt{get formDirective(){return null}get path(){return null}}class v extends jt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Rt{constructor(n){this._cd=n}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Lt=(()=>{class e extends Rt{constructor(t){super(t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(v,2))};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){2&r&&i.ekj("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[i.qOj]})}return e})(),Yt=(()=>{class e extends Rt{constructor(t){super(t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(d,10))};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){2&r&&i.ekj("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[i.qOj]})}return e})();const E="VALID",P="INVALID",b="PENDING",O="DISABLED";function nt(e){return(k(e)?e.validators:e)||null}function rt(e,n){return(k(n)?n.asyncValidators:e)||null}function k(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}class zt{constructor(n,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get valid(){return this.status===E}get invalid(){return this.status===P}get pending(){return this.status==b}get disabled(){return this.status===O}get enabled(){return this.status!==O}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Ht(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Ht(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Ut(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Ut(n,this._rawAsyncValidators))}hasValidator(n){return x(this._rawValidators,n)}hasAsyncValidator(n){return x(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){this.touched=!0,this._parent&&!n.onlySelf&&this._parent.markAsTouched(n)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(n=>n.markAllAsTouched())}markAsUntouched(n={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}markAsDirty(n={}){this.pristine=!1,this._parent&&!n.onlySelf&&this._parent.markAsDirty(n)}markAsPristine(n={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}markAsPending(n={}){this.status=b,!1!==n.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!n.onlySelf&&this._parent.markAsPending(n)}disable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=O,this.errors=null,this._forEachChild(r=>{r.disable({...n,onlySelf:!0})}),this._updateValue(),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=E,this._forEachChild(r=>{r.enable({...n,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===E||this.status===b)&&this._runAsyncValidator(n.emitEvent)),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(n)}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?O:E}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n){if(this.asyncValidator){this.status=b,this._hasOwnPendingAsyncValidator=!0;const t=St(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:n})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(!1!==t.emitEvent)}get(n){let t=n;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((r,o)=>r&&r._find(o),this)}getError(n,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(n)}_initObservables(){this.valueChanges=new i.vpe,this.statusChanges=new i.vpe}_calculateStatus(){return this._allControlsDisabled()?O:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(b)?b:this._anyControlsHaveStatus(P)?P:E}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n={}){this.pristine=!this._anyControlsDirty(),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}_updateTouched(n={}){this.touched=this._anyControlsTouched(),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){k(n)&&null!=n.updateOn&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=function Ie(e){return Array.isArray(e)?Q(e):e||null}(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=function Pe(e){return Array.isArray(e)?X(e):e||null}(this._rawAsyncValidators)}}class T extends zt{constructor(n,t,r){super(nt(t),rt(r,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(n,t){return this.controls[n]?this.controls[n]:(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,r={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,r={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,t={}){(function Wt(e,n,t){e._forEachChild((r,o)=>{if(void 0===t[o])throw new i.vHH(1002,"")})})(this,0,n),Object.keys(n).forEach(r=>{(function $t(e,n,t){const r=e.controls;if(!(n?Object.keys(r):r).length)throw new i.vHH(1e3,"");if(!r[t])throw new i.vHH(1001,"")})(this,!0,r),this.controls[r].setValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){null!=n&&(Object.keys(n).forEach(r=>{const o=this.controls[r];o&&o.patchValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((r,o)=>{r.reset(n?n[o]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(n,t,r)=>(n[r]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,r)=>!!r._syncPendingControls()||t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{const r=this.controls[t];r&&n(r,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(const[t,r]of Object.entries(this.controls))if(this.contains(t)&&n(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,r,o)=>((r.enabled||this.disabled)&&(t[o]=r.value),t))}_reduceChildren(n,t){let r=n;return this._forEachChild((o,s)=>{r=t(r,o,s)}),r}_allControlsDisabled(){for(const n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}}const V=new i.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>F}),F="always";function w(e,n,t=F){it(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||"always"===t)&&n.valueAccessor.setDisabledState?.(e.disabled),function He(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&Jt(e,n)})}(e,n),function je(e,n){const t=(r,o)=>{n.valueAccessor.writeValue(r),o&&n.viewToModelUpdate(r)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}(e,n),function Ue(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&Jt(e,n),"submit"!==e.updateOn&&e.markAsTouched()})}(e,n),function Te(e,n){if(n.valueAccessor.setDisabledState){const t=r=>{n.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}(e,n)}function U(e,n,t=!0){const r=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(r),n.valueAccessor.registerOnTouched(r)),R(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function j(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function it(e,n){const t=kt(e);null!==n.validator?e.setValidators(Pt(t,n.validator)):"function"==typeof t&&e.setValidators([t]);const r=Tt(e);null!==n.asyncValidator?e.setAsyncValidators(Pt(r,n.asyncValidator)):"function"==typeof r&&e.setAsyncValidators([r]);const o=()=>e.updateValueAndValidity();j(n._rawValidators,o),j(n._rawAsyncValidators,o)}function R(e,n){let t=!1;if(null!==e){if(null!==n.validator){const o=kt(e);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==n.validator);s.length!==o.length&&(t=!0,e.setValidators(s))}}if(null!==n.asyncValidator){const o=Tt(e);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==n.asyncValidator);s.length!==o.length&&(t=!0,e.setAsyncValidators(s))}}}const r=()=>{};return j(n._rawValidators,r),j(n._rawAsyncValidators,r),t}function Jt(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Zt(e,n){it(e,n)}function st(e,n){if(!e.hasOwnProperty("model"))return!1;const t=e.model;return!!t.isFirstChange()||!Object.is(n,t.currentValue)}function Qt(e,n){e._syncPendingControls(),n.forEach(t=>{const r=t.control;"submit"===r.updateOn&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function at(e,n){if(!n)return null;let t,r,o;return Array.isArray(n),n.forEach(s=>{s.constructor===G?t=s:function Ye(e){return Object.getPrototypeOf(e.constructor)===C}(s)?r=s:o=s}),o||r||t||null}const $e={provide:d,useExisting:(0,i.Gpc)(()=>L)},S=(()=>Promise.resolve())();let L=(()=>{class e extends d{constructor(t,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new i.vpe,this.form=new T({},Q(t),X(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){S.then(()=>{const r=this._findContainer(t.path);t.control=r.registerControl(t.name,t.control),w(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){S.then(()=>{const r=this._findContainer(t.path);r&&r.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){S.then(()=>{const r=this._findContainer(t.path),o=new T({});Zt(o,t),r.registerControl(t.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){S.then(()=>{const r=this._findContainer(t.path);r&&r.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){S.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,Qt(this.form,this._directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(c,10),i.Y36(y,10),i.Y36(V,8))};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){1&r&&i.NdJ("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[i._Bn([$e]),i.qOj]})}return e})();function Xt(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}function Kt(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}const lt=class extends zt{constructor(n=null,t,r){super(nt(t),rt(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),k(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=Kt(n)?n.value:n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Xt(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Xt(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(n){Kt(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};let ie=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}return e})(),se=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=i.oAB({type:e});static#n=this.\u0275inj=i.cJS({})}return e})();const ut=new i.OlP("NgModelWithFormControlWarning"),tn={provide:v,useExisting:(0,i.Gpc)(()=>ct)};let ct=(()=>{class e extends v{set isDisabled(t){}static#t=this._ngModelWarningSentOnce=!1;constructor(t,r,o,s,a){super(),this._ngModelWarningConfig=s,this.callSetDisabledState=a,this.update=new i.vpe,this._ngModelWarningSent=!1,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=at(0,o)}ngOnChanges(t){if(this._isControlChanged(t)){const r=t.form.previousValue;r&&U(r,this,!1),w(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}st(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&U(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}static#e=this.\u0275fac=function(r){return new(r||e)(i.Y36(c,10),i.Y36(y,10),i.Y36(g,10),i.Y36(ut,8),i.Y36(V,8))};static#n=this.\u0275dir=i.lG2({type:e,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[i._Bn([tn]),i.qOj,i.TTD]})}return e})();const en={provide:d,useExisting:(0,i.Gpc)(()=>Y)};let Y=(()=>{class e extends d{constructor(t,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new i.vpe,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(R(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const r=this.form.get(t.path);return w(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){U(t.control||null,t,!1),function qe(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,Qt(this.form,this.directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const r=t.control,o=this.form.get(t.path);r!==o&&(U(r||null,t),(e=>e instanceof lt)(o)&&(w(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const r=this.form.get(t.path);Zt(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const r=this.form.get(t.path);r&&function Re(e,n){return R(e,n)}(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){it(this.form,this),this._oldForm&&R(this._oldForm,this)}_checkFormPresent(){}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(c,10),i.Y36(y,10),i.Y36(V,8))};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){1&r&&i.NdJ("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[i._Bn([en]),i.qOj,i.TTD]})}return e})();const on={provide:v,useExisting:(0,i.Gpc)(()=>ft)};let ft=(()=>{class e extends v{set isDisabled(t){}static#t=this._ngModelWarningSentOnce=!1;constructor(t,r,o,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new i.vpe,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=at(0,s)}ngOnChanges(t){this._added||this._setUpControl(),st(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return function H(e,n){return[...n.path,e]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static#e=this.\u0275fac=function(r){return new(r||e)(i.Y36(d,13),i.Y36(c,10),i.Y36(y,10),i.Y36(g,10),i.Y36(ut,8))};static#n=this.\u0275dir=i.lG2({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[i._Bn([on]),i.qOj,i.TTD]})}return e})(),Ve=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=i.oAB({type:e});static#n=this.\u0275inj=i.cJS({imports:[se]})}return e})(),Vn=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:V,useValue:t.callSetDisabledState??F}]}}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=i.oAB({type:e});static#n=this.\u0275inj=i.cJS({imports:[Ve]})}return e})(),An=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:ut,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:V,useValue:t.callSetDisabledState??F}]}}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=i.oAB({type:e});static#n=this.\u0275inj=i.cJS({imports:[Ve]})}return e})()}}]);