(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76efdd5e"],{"09ac":function(e,s,t){},"19b2":function(e,s,t){},"2ab9":function(e,s){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAkCAYAAADVeVmEAAAAAXNSR0IArs4c6QAAAVNJREFUaAXtmLFqAkEQhm8tFIS0KazTpE2lKdKkEAshdSBg4RukS5nWF1DTCD6Fha2dYmFvmTeI6c5vwy4sySYQrrmdnYGf3RtOmW//ueG4oqh5lGXZQBP0jnboruYlVysPwDEK48RFv9q/1vjXwM1CWreXCw3gYwTYpkRDv2UFDaxBCh24LrO9c3Z6HrgbbkU7rdCB1ep0jd+t/leaG2Ta3r+1t/HnyQ0X7Ifo0ucSWxvU+4w6kbo/yT0YY1ZfwMC2SBzQVeRmKSkLfeuBb7jYSiH7g2Np2yCnKL3DTaj36Fow/Qm2bji02iQGKOWh9UL9saFlYYcMrTVr+sHQtd+9FigWHyTv06d0BMAorLNZnU22rbWNXQ+zaBtrG6dwArk9s/abdB4vFbb7gH1CsZA1oPyjBuk0QisT1jk8+gYsF9YB22f4FR3RBvW8+7rqCfw8gTMZu333xRPRkQAAAABJRU5ErkJggg=="},"31de":function(e,s,t){e.exports=t.p+"img/hide-password.d5e2dc64.svg"},"3baa":function(e,s,t){"use strict";var a=t("19b2"),r=t.n(a);r.a},"45c0":function(e,s,t){},4730:function(e,s,t){"use strict";var a=t("09ac"),r=t.n(a);r.a},"5de7":function(e,s,t){e.exports=t.p+"img/show-password.8f7643d8.svg"},8394:function(e,s,t){},"86f3":function(e,s,t){"use strict";t("d3b7"),t("3ca3"),t("ddb0"),t("2b3d");var a=t("53ca");s["a"]=function(e,s){var t="object"===Object(a["a"])(e)?JSON.stringify(e):e;if(null===t)return"";var r=new Blob([t],{type:s});return window.URL.createObjectURL(r)}},"9d02":function(e,s,t){"use strict";var a=t("8394"),r=t.n(a);r.a},a42e:function(e,s,t){"use strict";var a=t("45c0"),r=t.n(a);r.a},a594:function(e,s,t){"use strict";t.r(s),t.d(s,"default",(function(){return F}));var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"generate-address-layout d-flex"},[t("div",{staticClass:"title"},[e._v(e._s(e.$t("dappsStaked.generate-address.title")))]),t("div",{staticClass:"desc"},[e._v(" "+e._s(e.$t("dappsStaked.generate-address.desc"))+" ")]),e.onCreatePw?t("create-password",{on:{createPw:e.createPw}}):e._e(),e.onMnemonic?t("mnemonic-phrase",{attrs:{generating:e.generating,mnemonic:e.mnemonic,"keystore-json":e.keystoreJson,"keystore-name":e.keystoreName},on:{onContinue:e.onContinue}}):e._e(),e.onSuccess?t("success",{attrs:{address:e.address,reset:e.reset}}):e._e()],1)},r=[],n=(t("a15b"),t("d3b7"),t("ac1f"),t("25f0"),t("1276"),t("96cf"),t("1da1")),o=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"create-password-container d-flex"},[a("div",{staticClass:"password-container mt-4 d-flex mew-custom-form mew-custom-form__password"},[a("div",{staticClass:"d-flex title-container"},[a("span",{staticClass:"mr-2"},[e._v(e._s(e.$t("dappsStaked.generate-address.create"))+" ")]),a("pop-over")],1),a("div",{staticClass:"user-input-field"},["checkbox"===(e.showPassword?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.pw,expression:"pw"},{name:"validate",rawName:"v-validate",value:"required|min:9",expression:"'required|min:9'"}],ref:"password",staticClass:"mt-4",attrs:{name:"password",placeholder:e.$t("dappsStaked.generate-address.create-pw"),type:"checkbox"},domProps:{checked:Array.isArray(e.pw)?e._i(e.pw,null)>-1:e.pw},on:{input:function(s){return e.updateValue(s.target.value)},change:function(s){var t=e.pw,a=s.target,r=!!a.checked;if(Array.isArray(t)){var n=null,o=e._i(t,n);a.checked?o<0&&(e.pw=t.concat([n])):o>-1&&(e.pw=t.slice(0,o).concat(t.slice(o+1)))}else e.pw=r}}}):"radio"===(e.showPassword?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.pw,expression:"pw"},{name:"validate",rawName:"v-validate",value:"required|min:9",expression:"'required|min:9'"}],ref:"password",staticClass:"mt-4",attrs:{name:"password",placeholder:e.$t("dappsStaked.generate-address.create-pw"),type:"radio"},domProps:{checked:e._q(e.pw,null)},on:{input:function(s){return e.updateValue(s.target.value)},change:function(s){e.pw=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.pw,expression:"pw"},{name:"validate",rawName:"v-validate",value:"required|min:9",expression:"'required|min:9'"}],ref:"password",staticClass:"mt-4",attrs:{name:"password",placeholder:e.$t("dappsStaked.generate-address.create-pw"),type:e.showPassword?"text":"password"},domProps:{value:e.pw},on:{input:[function(s){s.target.composing||(e.pw=s.target.value)},function(s){return e.updateValue(s.target.value)}]}}),a("div",{staticClass:"password-icons",on:{click:function(s){e.showPassword=!e.showPassword}}},[e.showPassword?e._e():a("img",{staticClass:"hide-password",attrs:{alt:"",src:t("31de")}}),e.showPassword?a("img",{staticClass:"show-password",attrs:{alt:"",src:t("5de7")}}):e._e()])]),a("div",{staticClass:"user-input-field"},["checkbox"===(e.showConfirmPassword?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmedPw,expression:"confirmedPw"},{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"}],staticClass:"mt-2",attrs:{name:"password_confirmation","data-vv-as":"password",placeholder:e.$t("dappsStaked.generate-address.confirm-pw"),min:"9",required:"",type:"checkbox"},domProps:{checked:Array.isArray(e.confirmedPw)?e._i(e.confirmedPw,null)>-1:e.confirmedPw},on:{change:function(s){var t=e.confirmedPw,a=s.target,r=!!a.checked;if(Array.isArray(t)){var n=null,o=e._i(t,n);a.checked?o<0&&(e.confirmedPw=t.concat([n])):o>-1&&(e.confirmedPw=t.slice(0,o).concat(t.slice(o+1)))}else e.confirmedPw=r}}}):"radio"===(e.showConfirmPassword?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmedPw,expression:"confirmedPw"},{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"}],staticClass:"mt-2",attrs:{name:"password_confirmation","data-vv-as":"password",placeholder:e.$t("dappsStaked.generate-address.confirm-pw"),min:"9",required:"",type:"radio"},domProps:{checked:e._q(e.confirmedPw,null)},on:{change:function(s){e.confirmedPw=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmedPw,expression:"confirmedPw"},{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"}],staticClass:"mt-2",attrs:{name:"password_confirmation","data-vv-as":"password",placeholder:e.$t("dappsStaked.generate-address.confirm-pw"),min:"9",required:"",type:e.showConfirmPassword?"text":"password"},domProps:{value:e.confirmedPw},on:{input:function(s){s.target.composing||(e.confirmedPw=s.target.value)}}}),a("div",{staticClass:"confirm-pw-icons password-icons",on:{click:function(s){e.showConfirmPassword=!e.showConfirmPassword}}},[e.showConfirmPassword?e._e():a("img",{staticClass:"hide-password",attrs:{alt:"",src:t("31de")}}),e.showConfirmPassword?a("img",{staticClass:"show-password",attrs:{alt:"",src:t("5de7")}}):e._e()])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.pw.length>0,expression:"pw.length > 0"}],staticClass:"passwd-strength ml-0"},[e._v(" "+e._s(e.$t("dappsStaked.generate-address.password-strength"))+": "),a("span",{class:[e.strengthClass,"ml-1"]},[e._v(e._s(e.strength))])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.pw.length>0&&"strong"!==e.strengthClass,expression:"pw.length > 0 && strengthClass !== 'strong'"}],staticClass:"errors"},[e._v(" "+e._s(e.$t("dappsStaked.generate-address.error-pw-strength"))+" ")]),e.errors.items.length>0?a("div",{staticClass:"errors"},e._l(e.errors.items,(function(s,t){return a("div",{key:s+t},[e._v(" "+e._s(s.msg)+" ")])})),0):e._e(),a("label",{staticClass:"switch mt-4 d-flex"},[a("input",{attrs:{type:"checkbox"},on:{click:function(s){e.agree=!e.agree}}}),a("span",{staticClass:"ml-2"},[e._v(" "+e._s(e.$t("dappsStaked.generate-address.pw-agreement"))+" ")])]),a("button",{class:[e.disabled?"disabled":"","large-round-button-green-filled mt-5"],on:{click:e.onContinue}},[e._v(" "+e._s(e.$t("common.continue"))+" "),a("img",{attrs:{alt:"",src:t("2ab9")}})])]),a("div",{staticClass:"warning-container d-flex"},[e._m(0),a("div",[a("span",[e._v(e._s(e.$t("dappsStaked.generate-address.attention")))]),a("i18n",{staticClass:"warning",attrs:{tag:"p",path:"dappsStaked.generate-address.warning"}},[a("span",{attrs:{slot:"password-keystore"},slot:"password-keystore"},[e._v(e._s(e.$t("dappsStaked.generate-address.password-keystore")))]),a("span",{staticClass:"uppercase",attrs:{slot:"no-one"},slot:"no-one"},[e._v(e._s(e.$t("dappsStaked.generate-address.no-one"))+" ")])])],1)])])},i=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("i",{staticClass:"fa fa-exclamation-triangle"})])}],d=t("19b5"),c=t("580e"),l=t.n(c),p={components:{popOver:d["a"]},data:function(){return{pw:"",confirmedPw:"",showPassword:!1,showConfirmPassword:!1,agree:!1,strength:"",strengthClass:""}},computed:{disabled:function(){return!(this.pw&&this.confirmedPw&&0===this.errors.items.length&&this.agree&&"strong"===this.strengthClass)}},methods:{onContinue:function(){this.$emit("createPw",this.pw)},updateValue:function(e){var s=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l()(e).score;case 2:a=t.sent,t.t0=a,t.next=1===t.t0?6:2===t.t0?9:3===t.t0?12:4===t.t0?15:18;break;case 6:return s.strength=s.$t("dappsStaked.generate-address.v-weak"),s.strengthClass="very-weak",t.abrupt("break",20);case 9:return s.strength=s.$t("dappsStaked.generate-address.weak"),s.strengthClass="weak",t.abrupt("break",20);case 12:return s.strength=s.$t("dappsStaked.generate-address.good"),s.strengthClass="strong",t.abrupt("break",20);case 15:return s.strength=s.$t("dappsStaked.generate-address.strong"),s.strengthClass="strong",t.abrupt("break",20);case 18:s.strength=s.$t("dappsStaked.generate-address.v-weak"),s.strengthClass="very-weak";case 20:case"end":return t.stop()}}),t)})))()}}},u=p,m=(t("a42e"),t("2877")),w=Object(m["a"])(u,o,i,!1,null,"4d2cc879",null),f=w.exports,g=t("35be"),v=t.n(g),h=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"mnemonic-phrase-container d-flex mt-4"},[a("div",{staticClass:"d-flex title-container"},[a("span",{staticClass:"title mr-2"},[e._v(e._s(e.$t("dappsStaked.generate-address.mnemonic-title"))+" ")]),a("i18n",{staticClass:"desc",attrs:{path:"dappsStaked.generate-address.mnemonic-desc",tag:"span"}},[a("span",{attrs:{slot:"learn-more"},slot:"learn-more"},[e._v(e._s(e.$t("common.learn-more")))])])],1),a("div",{staticClass:"mnemonic-container mt-4"},e._l(e.mnemonic,(function(s,t){return a("div",{key:s+t},[a("span",{staticClass:"number"},[e._v(e._s(t+1)+".")]),a("span",{staticClass:"word ml-1"},[e._v(e._s(s))])])})),0),a("div",{staticClass:"button-container d-flex"},[a("a",{class:[e.keystoreJson?"":"disabled","large-round-button-green-border mt-5"],attrs:{download:e.keystoreName,rel:"noopener noreferrer",href:e.keystoreJson},on:{click:e.downloadDone}},[e.keystoreJson?a("span",[e._v(e._s(e.$t("dappsStaked.generate-address.download")))]):e._e(),e.keystoreJson?e._e():a("div",{staticClass:"generating"},[a("i",{staticClass:"fa fa-spinner fa-lg fa-spin"}),a("p",[e._v(e._s(e.$t("dappsStaked.generate-address.message-wait")))])])]),a("button",{class:[e.downloaded?"":"disabled","large-round-button-green-filled mt-3"],on:{click:e.onContinue}},[e._v(" "+e._s(e.$t("common.continue"))+" "),a("img",{attrs:{alt:"",src:t("2ab9")}})])])])},k=[],C={props:{mnemonic:{type:Array,default:function(){return[]}},keystoreJson:{type:String,default:""},keystoreName:{type:String,default:""},generating:{type:Boolean,default:!1}},data:function(){return{downloaded:!1}},methods:{onContinue:function(){this.$emit("onContinue")},downloadDone:function(){this.downloaded=!0}}},_=C,b=(t("9d02"),Object(m["a"])(_,h,k,!1,null,"ffbbfbe0",null)),y=b.exports,x=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"success-container d-flex mt-4"},[t("i",{staticClass:"check-icon fa fa-check",attrs:{"aria-hidden":"true"}}),t("h2",{staticClass:"title"},[e._v(e._s(e.$t("confirmation.success")))]),t("p",[e._v(e._s(e.$t("dappsStaked.generate-address.generated-successfully")))]),t("div",{staticClass:"withdrawal-address-container"},[t("h4",[e._v(e._s(e.$t("dappsStaked.generate-address.withdrawal-address")))]),t("p",[e._v(" "+e._s(e.address)+" ")])]),t("div",{staticClass:"button-container d-flex"},[t("button",{class:["large-round-button-green-filled mt-3"],on:{click:e.startToStake}},[e._v(" "+e._s(e.$t("dappsStaked.generate-address.start-to-stake"))+" ")]),t("button",{class:["generate-again large-round-button-green-border mt-3"],on:{click:e.reset}},[e._v(" "+e._s(e.$t("dappsStaked.generate-address.generate-again"))+" ")])])])},P=[],S={props:{address:{type:String,default:""},reset:{type:Function,default:function(){}}},methods:{startToStake:function(){this.$router.push("/access-my-wallet")}}},A=S,$=(t("4730"),Object(m["a"])(A,x,P,!1,null,"4171fdfe",null)),N=$.exports,j=t("86f3"),R=t("ce96"),q={components:{createPassword:f,mnemonicPhrase:y,success:N},data:function(){return{mnemonic:"",onCreatePw:!0,generating:!1,onMnemonic:!1,onSuccess:!1,keystoreJson:"",keystoreName:"",address:""}},methods:{reset:function(){this.mnemonic="",this.onCreatePw=!0,this.generating=!1,this.onMnemonic=!1,this.onSuccess=!1,this.keystoreJson="",this.keystoreName="",this.address="",window.scrollTo(0,0)},onContinue:function(){this.onMnemonic=!1,this.onSuccess=!0},createPw:function(e){var s=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s.generating=!0,a=new v.a,t.next=4,a.getMnemonic();case 4:return r=t.sent,s.mnemonic=r.split(" "),s.onCreatePw=!1,s.onMnemonic=!0,t.next=10,a.toWithdrawalKeystore(e);case 10:return n=t.sent,s.keystoreJson=Object(j["a"])(n,"mime"),s.generating=!1,s.keystoreName="keystore-"+n.path.split("/").join("_")+"-"+Date.now()+".json",t.next=16,a.getPublicKey(0,!1);case 16:return o=t.sent,s.address=o.toString("hex"),t.next=20,Object(g["verifyKeystore"])(n,e).catch((function(e){R["e"].responseHandler(e,R["e"].ERROR)}));case 20:case"end":return t.stop()}}),t)})))()}}},O=q,B=(t("3baa"),Object(m["a"])(O,a,r,!1,null,"38df2967",null)),F=B.exports}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-76efdd5e.fb8de84f.js.map