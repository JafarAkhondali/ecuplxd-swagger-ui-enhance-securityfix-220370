"use strict";(self.webpackChunkswagger_ui=self.webpackChunkswagger_ui||[]).push([[7851],{67569:(D,x,s)=>{s.d(x,{o:()=>g});var n=s(83668),y=s(67459),T=s(86019),Z=s(99939);function v(d,_){if(1&d&&(n.TgZ(0,"span",6),n._uU(1),n.qZA()),2&d){const a=n.oxw(2);n.ekj("mr-8",!a.copyable),n.Q6J("title",a.copyable?a.api.urlForCopy:a.api.url),n.xp6(1),n.hij(" ",a.copyable?a.api.urlForCopy:a.api.url," ")}}function A(d,_){if(1&d&&(n.TgZ(0,"span",4),n.YNc(1,v,2,4,"span",5),n.qZA()),2&d){const a=n.oxw();n.xp6(1),n.Q6J("appCopy",a.copyable)("appCopyValue",a.api.urlForCopy)("appCopyTitle","api-copy-url")}}function e(d,_){if(1&d&&(n.TgZ(0,"span",9),n._uU(1),n.qZA()),2&d){const a=n.oxw(2);n.Q6J("title",a.api.description),n.xp6(1),n.hij(" ",a.api.description," ")}}function f(d,_){if(1&d&&(n.TgZ(0,"span",7),n.YNc(1,e,2,2,"span",8),n.qZA()),2&d){const a=n.oxw();n.xp6(1),n.Q6J("appCopy",a.copyable)("appCopyValue",a.api.description)("appCopyTitle","api-copy-description")}}let g=(()=>{class d{constructor(){this.showMethod=!0,this.showUrl=!0,this.showDescription=!0,this.twoLine=!1,this.copyable=!0}get className(){return this.twoLine?"two-line align-center":""}ngOnInit(){}}return d.\u0275fac=function(a){return new(a||d)},d.\u0275cmp=n.Xpm({type:d,selectors:[["app-api-info"]],hostVars:2,hostBindings:function(a,u){2&a&&n.Tol(u.className)},inputs:{api:"api",showMethod:"showMethod",showUrl:"showUrl",showDescription:"showDescription",twoLine:"twoLine",copyable:"copyable"},decls:4,vars:7,consts:[[1,"method","mr-10",3,"deprecated","method","showMethod"],[1,"flex-1","inline-flex","api-info"],["class","api-url inline-flex align-center","style","min-width: 0",4,"ngIf"],["class","api-description inline-flex align-center","style","min-width: 0",4,"ngIf"],[1,"api-url","inline-flex","align-center",2,"min-width","0"],["class","mx-1 code f-16 title text-ellipsis",3,"title","mr-8",4,"appCopy","appCopyValue","appCopyTitle"],[1,"mx-1","code","f-16","title","text-ellipsis",3,"title"],[1,"api-description","inline-flex","align-center",2,"min-width","0"],["class","sub-title text-ellipsis",3,"title",4,"appCopy","appCopyValue","appCopyTitle"],[1,"sub-title","text-ellipsis",3,"title"]],template:function(a,u){1&a&&(n._UZ(0,"app-api-method",0),n.TgZ(1,"div",1),n.YNc(2,A,2,3,"span",2),n.YNc(3,f,2,3,"span",3),n.qZA()),2&a&&(n.Q6J("deprecated",u.api.deprecated)("method",u.api.method)("showMethod",u.showMethod),n.xp6(1),n.ekj("deprecated",u.api.deprecated),n.xp6(1),n.Q6J("ngIf",u.showUrl),n.xp6(1),n.Q6J("ngIf",u.showDescription))},directives:[y.i,T.O5,Z.j],styles:[".flex[_ngcontent-%COMP%]{display:flex}.inline-flex[_ngcontent-%COMP%]{display:inline-flex!important}.justify-center[_ngcontent-%COMP%]{justify-content:center}.justify-end[_ngcontent-%COMP%]{justify-content:flex-end}.justify-start[_ngcontent-%COMP%]{justify-content:flex-start}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.justify-around[_ngcontent-%COMP%]{justify-content:space-around}.align-flex-end[_ngcontent-%COMP%]{align-items:flex-end}.align-center[_ngcontent-%COMP%]{align-items:center}.align-start[_ngcontent-%COMP%]{align-items:flex-start}.flex-column[_ngcontent-%COMP%]{flex-direction:column}.xy-center[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.x-center[_ngcontent-%COMP%]{display:flex;justify-content:center}.y-center[_ngcontent-%COMP%]{display:flex;align-items:center}.flex-1[_ngcontent-%COMP%]{flex:1;min-width:0}.flex-1-h[_ngcontent-%COMP%]{flex:1;min-height:0}[_nghost-%COMP%]{flex:1;min-width:0;display:inline-flex!important;align-items:center;margin-right:10px}[_nghost-%COMP%]   .method[_ngcontent-%COMP%]{flex-shrink:0}.two-line[_nghost-%COMP%]   .api-info[_ngcontent-%COMP%]{flex-direction:column}"]}),d})()},67459:(D,x,s)=>{s.d(x,{i:()=>A});var n=s(83668),y=s(86019),T=s(90086);const Z=function(e){return{white:!0,"f-12":!0,"inline-flex":!0,"align-center":!0,"justify-center":!0,method:!0,deprecated:e}};function v(e,f){if(1&e&&(n.TgZ(0,"button",1),n._uU(1),n.ALo(2,"uppercase"),n.qZA()),2&e){const g=n.oxw();n.Tol(g.method),n.Q6J("ngClass",n.VKq(6,Z,g.deprecated)),n.xp6(1),n.hij(" ",n.lcZ(2,4,g.method),"\n")}}let A=(()=>{class e{constructor(){this.deprecated=!1,this.showMethod=!0}ngOnInit(){}}return e.\u0275fac=function(g){return new(g||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-api-method"]],inputs:{deprecated:"deprecated",showMethod:"showMethod",method:"method"},decls:1,vars:1,consts:[["mat-flat-button","","class","white f-12 inline-flex align-center justify-center method",3,"ngClass","class",4,"ngIf"],["mat-flat-button","",1,"white","f-12","inline-flex","align-center","justify-center","method",3,"ngClass"]],template:function(g,d){1&g&&n.YNc(0,v,3,8,"button",0),2&g&&n.Q6J("ngIf",d.showMethod)},directives:[y.O5,T.lW,y.mk],pipes:[y.gd],styles:["button.method[_ngcontent-%COMP%]{width:60px;height:27px;border-radius:0;line-height:27px}.white[_ngcontent-%COMP%]{color:var(--main-white)}"]}),e})()},4054:(D,x,s)=>{s.d(x,{l:()=>u});var n=s(83668),y=s(67004),T=s(90111),Z=s(90086),v=s(90032),A=s(77443),e=s(83530),f=s(59112),g=s(86019);function d(c,h){1&c&&(n.TgZ(0,"div",7),n._uU(1," \u6682\u65e0\u8bb0\u5f55 "),n.qZA())}function _(c,h){if(1&c){const m=n.EpF();n.TgZ(0,"div",8),n.NdJ("click",function(){const P=n.CHM(m).$implicit;return n.oxw(2).request(P)}),n.TgZ(1,"span",9),n._uU(2),n.qZA(),n._UZ(3,"span"),n.TgZ(4,"span",10),n._uU(5),n.qZA(),n.qZA()}if(2&c){const m=h.$implicit;n.xp6(2),n.Oqu(m.name),n.xp6(3),n.hij(" ",m.url," ")}}function a(c,h){if(1&c&&(n.YNc(0,d,2,0,"div",5),n.YNc(1,_,6,2,"div",6)),2&c){const m=n.oxw();n.Q6J("ngIf",m.empty),n.xp6(1),n.Q6J("ngForOf",m.historys)}}let u=(()=>{class c{constructor(m,I){this.historyService=m,this.dialogService=I,this.outlined=!0,this.fromRequest=!1,this.selectHistory=new n.vpe,this.historys=[],this.empty=!0}ngOnInit(){}getHistory(){this.historys=this.apiItem?this.historyService.get(this.apiItem.__id):[],this.empty=0===this.historys.length}request(m){this.fromRequest?this.selectHistory.emit(m):this.dialogService.openRequestDialog(this.apiItem,m)}}return c.\u0275fac=function(m){return new(m||c)(n.Y36(y.qp),n.Y36(T.x))},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-api-request-history"]],inputs:{apiItem:"apiItem",outlined:"outlined",fromRequest:"fromRequest"},outputs:{selectHistory:"selectHistory"},decls:6,vars:3,consts:[["mat-stroked-button","","color","primary","appStopClick","","title","\u9009\u62e9\u5386\u53f2\u8bb0\u5f55","tr","api-select-request-histroy|title",1,"outlined","px-2","history",3,"matMenuTriggerFor","menuOpened"],[1,"f-21"],[1,"api-request-hisotry-panel","scroll-y","hidden-x"],["historyRef","matMenu"],["matMenuContent",""],["class","no-historys sub-title text-center","tr","api-no-request-histroy",4,"ngIf"],["class","px-10 code history-item",3,"click",4,"ngFor","ngForOf"],["tr","api-no-request-histroy",1,"no-historys","sub-title","text-center"],[1,"px-10","code","history-item",3,"click"],[1,"title"],[1,"url"]],template:function(m,I){if(1&m&&(n.TgZ(0,"button",0),n.NdJ("menuOpened",function(){return I.getHistory()}),n.TgZ(1,"mat-icon",1),n._uU(2,"history"),n.qZA(),n.qZA(),n.TgZ(3,"mat-menu",2,3),n.YNc(5,a,2,2,"ng-template",4),n.qZA()),2&m){const E=n.MAs(4);n.ekj("no-outlined",!I.outlined),n.Q6J("matMenuTriggerFor",E)}},directives:[Z.lW,v.O,A.X,e.p6,f.Hw,e.VK,e.KA,g.O5,g.sg],styles:[".history[_ngcontent-%COMP%]{margin-left:-1px}.history.no-outlined[_ngcontent-%COMP%]{border-color:transparent!important}  .api-request-hisotry-panel{max-width:initial!important;min-height:initial}  .api-request-hisotry-panel app-api-search{position:relative;left:auto}  .api-request-hisotry-panel app-api-search .search-container{padding:0 10px}  .api-request-hisotry-panel .no-historys{padding:0 10px}.history-item[_ngcontent-%COMP%]{cursor:pointer}.history-item[_ngcontent-%COMP%]:hover{background:var(--main-primary-bg)}"]}),c})()},47193:(D,x,s)=>{s.d(x,{a:()=>d});var n=s(83668),y=s(90111),T=s(67004),Z=s(90086),v=s(90032),A=s(77443),e=s(86019),f=s(4054);function g(_,a){if(1&_&&n._UZ(0,"app-api-request-history",3),2&_){const u=n.oxw();n.Q6J("apiItem",u.apiItem)}}let d=(()=>{class _{constructor(u,c){this.dialogService=u,this.store=c,this.showHistory=!0}ngOnInit(){}request(){const u=this.apiItem||this.store.getApiItem(this.apiId);this.dialogService.openRequestDialog(u)}}return _.\u0275fac=function(u){return new(u||_)(n.Y36(y.x),n.Y36(T.d6))},_.\u0275cmp=n.Xpm({type:_,selectors:[["app-api-request"]],inputs:{apiId:"apiId",apiItem:"apiItem",showHistory:"showHistory"},decls:4,vars:1,consts:[[1,"api-action"],["mat-stroked-button","","color","primary","appStopClick","","tr","api-try-it-out",1,"outlined","px-12",3,"click"],[3,"apiItem",4,"ngIf"],[3,"apiItem"]],template:function(u,c){1&u&&(n.TgZ(0,"div",0),n.TgZ(1,"button",1),n.NdJ("click",function(){return c.request()}),n._uU(2," \u53d1\u8d77\u8bf7\u6c42 "),n.qZA(),n.YNc(3,g,1,1,"app-api-request-history",2),n.qZA()),2&u&&(n.xp6(3),n.Q6J("ngIf",c.showHistory))},directives:[Z.lW,v.O,A.X,e.O5,f.l],styles:[""]}),_})()},77851:(D,x,s)=>{s.r(x),s.d(x,{ApiModule:()=>he});var n=s(57861),y=s(67569),T=s(67459),Z=s(58802),v=s(4054),A=s(85189),e=s(83668),f=s(53050),g=s(4998),d=s(46656),_=s(50439),a=s(98771),u=s(72273),c=s(67004),h=s(86019),m=s(77443),I=s(904),E=s(3454),P=s(90086),J=s(83530),B=s(90032),U=s(49133),H=s(47193),S=s(99939),R=s(85694),Q=s(94617),N=s(50514);let L=(()=>{class i{constructor(t,o){this.idService=t,this.copyService=o,this.closeMenu=new e.vpe,this.removeQuestion=!1,this.showSample=!1,this.fixed=!1,this.noQuestionCode="",this.mockCode="",this.codeString="",this.typeID=this.idService.genID()}set code(t){!this.code&&t?(this._code=t,this.codeString=t):this.resize=!!t}get code(){return this._code}keyEvent(t){"Escape"===t.key&&this.close()}ngOnInit(){}removeCodeQuestion(t){t.checked&&!this.noQuestionCode&&(this.noQuestionCode=this.code.replace(/\?:/gi,":")),this.removeQuestion=t.checked,this.codeString=t.checked?this.noQuestionCode:this.code}getMockCode(t){this.showSample=t.checked,this.mockCode||(this.mockCode="// TODO"),this.codeString=t.checked?this.mockCode:this.removeQuestion?this.noQuestionCode:this.code}copy(){this.copyService.copy(this.codeString,!1),this.fixed||this.close()}close(){this.closeMenu.emit()}useFoarmatCode(t){t!==this.code&&(this._code=t)}fixedPopover(t){this.fixed=t.checked}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.KM),e.Y36(c.tX))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-api-type-hover"]],hostBindings:function(t,o){1&t&&e.NdJ("keyup",function(l){return o.keyEvent(l)},!1,e.Jf7)},inputs:{code:"code"},outputs:{closeMenu:"closeMenu"},decls:18,vars:8,consts:[[3,"id","value","minimap","resize","format"],[1,"justify-between","y-center","py-8"],[1,"left","pl-16"],["color","primary",1,"remove-question",3,"checked","disabled","change"],["tr","api-type-remove-partial"],["color","primary",1,"mx-16","show-sample",3,"checked","change"],["tr","api-type-example"],["color","primary",1,"fixed-popover",3,"checked","change"],["tr","fixed"],[1,"right"],["mat-button","","color","primary","tr","copy",1,"copy-code",3,"click"],["mat-button","","tr","close-esc",1,"close",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div"),e.TgZ(1,"app-editor",0),e.NdJ("format",function(l){return o.useFoarmatCode(l)}),e.qZA(),e.TgZ(2,"div",1),e.TgZ(3,"div",2),e.TgZ(4,"mat-slide-toggle",3),e.NdJ("change",function(l){return o.removeCodeQuestion(l)}),e.TgZ(5,"span",4),e._uU(6,"Partial<T> \u8f6c T"),e.qZA(),e.qZA(),e.TgZ(7,"mat-slide-toggle",5),e.NdJ("change",function(l){return o.getMockCode(l)}),e.TgZ(8,"span",6),e._uU(9,"\u793a\u4f8b"),e.qZA(),e.qZA(),e.TgZ(10,"mat-slide-toggle",7),e.NdJ("change",function(l){return o.fixedPopover(l)}),e.TgZ(11,"span",8),e._uU(12,"\u7f6e\u9876"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div",9),e.TgZ(14,"button",10),e.NdJ("click",function(){return o.copy()}),e._uU(15," \u590d\u5236 "),e.qZA(),e.TgZ(16,"button",11),e.NdJ("click",function(){return o.close()}),e._uU(17," \u5173\u95ed\uff08ESC\uff09 "),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("id",o.typeID)("value",o.codeString)("minimap",!1)("resize",o.resize),e.xp6(3),e.Q6J("checked",o.removeQuestion)("disabled",o.showSample),e.xp6(3),e.Q6J("checked",o.showSample),e.xp6(3),e.Q6J("checked",o.fixed))},directives:[Q.P,N.Rr,m.X,P.lW],styles:[""]}),i})();function j(i,r){if(1&i&&(e.TgZ(0,"pre",6),e._uU(1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Oqu(t.displayText)}}function Y(i,r){if(1&i&&(e.TgZ(0,"span",7),e._uU(1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Oqu(t.displayText)}}function K(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"app-hover-menu",8,9),e.NdJ("opened",function(){return e.CHM(t),e.oxw(2).lazyGetType()}),e.TgZ(2,"a",10),e._uU(3),e.qZA(),e.TgZ(4,"app-api-type-hover",11,12),e.NdJ("closeMenu",function(){return e.CHM(t),e.MAs(1).close()}),e.qZA(),e.qZA()}if(2&i){const t=e.MAs(1),o=e.MAs(5),p=e.oxw(2);e.Q6J("fixed",o.fixed),e.xp6(3),e.Oqu(p.type),e.xp6(1),e.Q6J("code",t.open?p.code:"")}}function W(i,r){if(1&i&&(e.TgZ(0,"span",2),e.YNc(1,j,2,1,"pre",3),e.YNc(2,Y,2,1,"span",4),e.YNc(3,K,6,3,"app-hover-menu",5),e.qZA()),2&i){const t=e.oxw();e.Tol(t.parameterID),e.xp6(1),e.Q6J("ngIf",t.enumType),e.xp6(1),e.Q6J("ngIf",!t.enumType),e.xp6(1),e.Q6J("ngIf",t.refType)}}let b=(()=>{class i{constructor(t,o,p){this.typeService=t,this.idService=o,this.store=p,this.type="",this.refType=!1,this.enumType=!1,this.openOnHover=!0,this.code="",this.parameterID=this.idService.genID()}get displayText(){return this.parameter.display?this.parameter.display+(this.type?": "+(this.refType?"":this.type):""):""}ngOnInit(){this.type=this.typeService.getType(this.parameter),this.enumType=this.type.includes("|"),this.refType=this.typeService.refType}lazyGetType(){if(this.refType&&!this.code){const t=this.store.getCurProjectId();try{this.code=this.typeService.getExports(t,this.type)}catch(o){this.code="// \u89e3\u6790\u5931\u8d25\n"}}}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.SM),e.Y36(c.KM),e.Y36(c.d6))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-api-type"]],inputs:{parameter:"parameter"},decls:2,vars:2,consts:[[1,"inline-flex","align-start"],["class","type-container inline-flex align-center",3,"class",4,"appCopy","appCopySelector"],[1,"type-container","inline-flex","align-center"],["class","ma-0 enum-type code f-14",4,"ngIf"],["class","type-display",4,"ngIf"],["menuClass","api-type-hover-panel hidden-x hidden-y",3,"fixed","opened",4,"ngIf"],[1,"ma-0","enum-type","code","f-14"],[1,"type-display"],["menuClass","api-type-hover-panel hidden-x hidden-y",3,"fixed","opened"],["menu",""],["trigger","",1,"ref-type-name"],["menuContent","",3,"code","closeMenu"],["typeHover",""]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.YNc(1,W,4,5,"span",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("appCopy",!(!o.displayText&&!o.refType))("appCopySelector",o.parameterID))},directives:[S.j,h.O5,E.w,L],styles:["[_nghost-%COMP%]{display:flex;overflow:hidden}.ref-type-name[_ngcontent-%COMP%]{color:var(--main-primary);cursor:pointer;word-break:break-all}  .api-type-hover-panel{min-width:550px;max-width:initial!important}  .api-type-hover-panel .mat-menu-content{padding:0}"]}),i})();function $(i,r){1&i&&(e.TgZ(0,"span"),e.TgZ(1,"span",13),e._uU(2,"\u5b57\u6bb5\u540d"),e.qZA(),e.qZA())}function X(i,r){1&i&&(e.TgZ(0,"tr",4),e.TgZ(1,"td",10),e._UZ(2,"mat-divider"),e.qZA(),e.qZA())}function z(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"tr",14),e.TgZ(2,"td",15),e._UZ(3,"app-api-type",16),e.TgZ(4,"div",17),e._uU(5),e.qZA(),e.qZA(),e.TgZ(6,"td",18),e.TgZ(7,"div",19),e._uU(8),e.qZA(),e.qZA(),e.qZA(),e.YNc(9,X,3,0,"tr",20),e.BQk()),2&i){const t=r.$implicit,o=r.last,p=e.oxw();e.xp6(3),e.Tol(p.copyItemClass),e.Q6J("parameter",t),e.xp6(2),e.hij(" (",t.in,") "),e.xp6(3),e.Oqu(t.description),e.xp6(1),e.Q6J("ngIf",!o)}}function V(i,r){1&i&&(e.TgZ(0,"tr",21),e.TgZ(1,"td",22),e._uU(2," \u6ca1\u6709\u53c2\u6570 "),e.qZA(),e.qZA())}let G=(()=>{class i{constructor(t){this.idService=t,this.parameters=[],this.genId=new e.vpe,this.hadParameters=!0,this.copyItemClass=this.idService.genID()}ngOnInit(){this.hadParameters=this.parameters&&0!==this.parameters.length,this.genId.emit(this.copyItemClass)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.KM))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-api-parameter"]],inputs:{parameters:"parameters"},outputs:{genId:"genId"},decls:18,vars:6,consts:[[1,"y-center","justify-between","mb-10","header"],["tr","api-request-parameters",1,"f-16"],[1,"flex-1","border"],[1,"f-14"],[1,"no-hover"],[1,"pa-8","text-left",2,"width","70%"],[1,"parameter-fields","inline-flex","align-center"],[4,"appCopy","appCopySelector","appCopyTitle"],["tr","description",1,"pa-8","text-left"],[1,"code"],["colspan","2"],[4,"ngFor","ngForOf"],["class","no-data",4,"ngIf"],["tr","api-field-name"],[1,"parameter-item"],[1,"pa-8",2,"width","50%"],[1,"parameter-type",3,"parameter"],[1,"parameter-in","text--disabled","text-ellipsis"],[1,"pa-8",2,"vertical-align","top"],[1,"description"],["class","no-hover",4,"ngIf"],[1,"no-data"],["colspan","2","tr","api-no-parameters",1,"pa-8","text-center","text--disabled"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"span",1),e._uU(2,"\u8bf7\u6c42\u53c2\u6570"),e.qZA(),e.qZA(),e.TgZ(3,"div",2),e.TgZ(4,"table",3),e.TgZ(5,"thead"),e.TgZ(6,"tr",4),e.TgZ(7,"th",5),e.TgZ(8,"div",6),e.YNc(9,$,3,0,"span",7),e.qZA(),e.qZA(),e.TgZ(10,"th",8),e._uU(11,"\u63cf\u8ff0"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(12,"tbody",9),e.TgZ(13,"tr",4),e.TgZ(14,"td",10),e._UZ(15,"mat-divider"),e.qZA(),e.qZA(),e.YNc(16,z,10,6,"ng-container",11),e.YNc(17,V,3,0,"tr",12),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(8),e.uIk("data-copyselector",o.copyItemClass),e.xp6(1),e.Q6J("appCopy",o.hadParameters)("appCopySelector",o.copyItemClass)("appCopyTitle","api-copy-all-fileds"),e.xp6(7),e.Q6J("ngForOf",o.parameters),e.xp6(1),e.Q6J("ngIf",!o.hadParameters))},directives:[m.X,S.j,R.d,h.sg,h.O5,b],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}.header[_ngcontent-%COMP%]{min-height:28px}.description[_ngcontent-%COMP%]{word-break:break-all}"]}),i})();function ee(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"tr",4),e.TgZ(2,"td",9),e._UZ(3,"mat-divider"),e.qZA(),e.qZA(),e.TgZ(4,"tr",24),e.TgZ(5,"td",25),e.TgZ(6,"div",26),e._uU(7),e.qZA(),e.qZA(),e.TgZ(8,"td",13),e.TgZ(9,"div",27),e._uU(10),e.qZA(),e.qZA(),e.TgZ(11,"td",13),e.TgZ(12,"div",28),e._uU(13),e.qZA(),e.qZA(),e.qZA(),e.BQk()),2&i){const t=r.$implicit,o=e.oxw(3);e.xp6(7),e.Oqu(t.key),e.xp6(3),e.hij(" ",t.value.description," "),e.xp6(3),e.hij(" ",o.types[t.value.type]," ")}}function te(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"tr",4),e.TgZ(2,"td",9),e._UZ(3,"mat-divider"),e.qZA(),e.qZA(),e.TgZ(4,"tr",4),e.TgZ(5,"td",19),e.TgZ(6,"table",20),e.TgZ(7,"thead"),e.TgZ(8,"tr",4),e.TgZ(9,"th",21),e._uU(10," \u54cd\u5e94\u5934 "),e.qZA(),e.TgZ(11,"th",22),e._uU(12,"\u63cf\u8ff0"),e.qZA(),e.TgZ(13,"th",23),e._uU(14,"\u7c7b\u578b"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(15,"tbody"),e.YNc(16,ee,14,3,"ng-container",10),e.ALo(17,"keyvalue"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.BQk()),2&i){const t=e.oxw().$implicit;e.xp6(4),e.Tol("header"+t.key),e.xp6(12),e.Q6J("ngForOf",e.lcZ(17,3,t.value.headers))}}function ne(i,r){1&i&&(e.TgZ(0,"tr",4),e.TgZ(1,"td",9),e._UZ(2,"mat-divider"),e.qZA(),e.qZA())}function ie(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"tr",12),e.TgZ(2,"td",13),e.TgZ(3,"div",14),e._uU(4),e.qZA(),e.qZA(),e.TgZ(5,"td",13),e._UZ(6,"app-api-type",15),e.qZA(),e.TgZ(7,"td",13),e.TgZ(8,"div",16),e._uU(9),e.qZA(),e.qZA(),e.qZA(),e.YNc(10,te,18,5,"ng-container",17),e.YNc(11,ne,3,0,"tr",18),e.BQk()),2&i){const t=r.$implicit,o=r.last;e.xp6(4),e.Oqu(t.key),e.xp6(2),e.Q6J("parameter",t.value),e.xp6(3),e.Oqu(t.value.description),e.xp6(1),e.Q6J("ngIf",t.value.headers),e.xp6(1),e.Q6J("ngIf",!o)}}function oe(i,r){1&i&&(e.TgZ(0,"tr",29),e.TgZ(1,"td",30),e._uU(2," \u6682\u65e0\u6570\u636e "),e.qZA(),e.qZA())}let se=(()=>{class i{constructor(){this.responses={},this.produce="application/json",this.produces=[],this.types=u.zY}get responsesEmpty(){return!this.responses||0===Object.keys(this.responses).length}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-api-response"]],inputs:{responses:"responses",produce:"produce",produces:"produces"},decls:20,vars:4,consts:[[1,"y-center","justify-between","mb-10","header"],["tr","api-response",1,"f-16"],[1,"flex-1","border"],[1,"f-14"],[1,"no-hover"],["tr","api-response-code",1,"pa-8","text-left",2,"width","20%"],["tr","api-response-result",1,"pa-8","text-left"],["tr","description",1,"pa-8","text-left",2,"width","30%"],[1,"code"],["colspan","3"],[4,"ngFor","ngForOf"],["class","no-data",4,"ngIf"],[1,"response-item"],[1,"pa-8"],[1,"response-key"],[3,"parameter"],[1,"description"],[4,"ngIf"],["class","no-hover",4,"ngIf"],["colspan","3",1,"px-16"],[1,"response-headers",2,"border","0"],["tr","api-response-header",1,"pa-8","text-left"],["tr","description",1,"pa-8","text-left"],["tr","type",1,"pa-8","text-left"],[1,"response-header-item"],[1,"pa-8",2,"min-width","150px"],[1,"header-key"],[1,"header-description"],[1,"header-type"],[1,"no-data"],["colspan","3","tr","no-data",1,"pa-8","text-center","text--disabled"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"span",1),e._uU(2,"\u54cd\u5e94\u4f53"),e.qZA(),e.qZA(),e.TgZ(3,"div",2),e.TgZ(4,"table",3),e.TgZ(5,"thead"),e.TgZ(6,"tr",4),e.TgZ(7,"th",5),e._uU(8," \u54cd\u5e94\u7801 "),e.qZA(),e.TgZ(9,"th",6),e._uU(10,"\u7ed3\u679c"),e.qZA(),e.TgZ(11,"th",7),e._uU(12,"\u63cf\u8ff0"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"tbody",8),e.TgZ(14,"tr",4),e.TgZ(15,"td",9),e._UZ(16,"mat-divider"),e.qZA(),e.qZA(),e.YNc(17,ie,12,5,"ng-container",10),e.ALo(18,"keyvalue"),e.YNc(19,oe,3,0,"tr",11),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(17),e.Q6J("ngForOf",e.lcZ(18,2,o.responses)),e.xp6(2),e.Q6J("ngIf",o.responsesEmpty))},directives:[m.X,R.d,h.sg,h.O5,b],pipes:[h.Nd],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}.header[_ngcontent-%COMP%]{min-height:28px}.description[_ngcontent-%COMP%]{word-break:break-all}"]}),i})();function pe(i,r){1&i&&(e.TgZ(0,"div",4),e.TgZ(1,"p",5),e._uU(2,"\u6682\u65e0\u6570\u636e"),e.qZA(),e.TgZ(3,"p",6),e._uU(4,"1\u3001\u53ef\u70b9\u51fb\u5de6\u4fa7\u52a0\u53f7\u3002"),e.qZA(),e.TgZ(5,"p",7),e._uU(6,"2\u3001\u6216\u5de6\u4e0a\u65b9\u5730\u5740\u680f\u3002"),e.qZA(),e.TgZ(7,"p",8),e._uU(8,"3\u3001\u6216\u62d6\u66f3\u6587\u4ef6\u5230\u6b64\u5904\u3002"),e.qZA(),e.TgZ(9,"p",9),e._uU(10,"\u5bfc\u5165 API\uff08\u4ec5\u652f\u6301 .json \u6587\u4ef6\uff09"),e.qZA(),e.qZA())}function re(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",10),e.TgZ(1,"mat-checkbox",11),e.NdJ("change",function(p){return e.CHM(t),e.oxw().selectAllApi(p.checked)}),e.qZA(),e.TgZ(2,"div",12),e.TgZ(3,"app-hover-menu",13),e.TgZ(4,"button",14),e._uU(5," \u4ee3\u7801 "),e.qZA(),e.TgZ(6,"div",15),e.TgZ(7,"button",16),e.NdJ("click",function(){return e.CHM(t),e.oxw().genService()}),e._uU(8,"Service"),e.qZA(),e.TgZ(9,"button",16),e.NdJ("click",function(){return e.CHM(t),e.oxw().genServiceCall()}),e._uU(10,"Service \u8c03\u7528"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"button",17),e.NdJ("click",function(){return e.CHM(t),e.oxw().accordion.openAll()}),e._uU(12," \u5c55\u5f00\u5168\u90e8 "),e.qZA(),e.TgZ(13,"button",18),e.NdJ("click",function(){return e.CHM(t),e.oxw().accordion.closeAll()}),e._uU(14," \u6536\u8d77\u5168\u90e8 "),e.qZA(),e.qZA(),e.qZA()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("checked",t.selectAll)("indeterminate",t.someSelected()),e.xp6(2),e.Q6J("closeOnContentClick",!0)("menuClass",t.disabled?"hidden":""),e.xp6(1),e.Q6J("disabled",t.disabled)}}function ae(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",26),e.TgZ(1,"app-api-parameter",27),e.NdJ("genId",function(p){e.CHM(t);const l=e.oxw().$implicit;return e.oxw().setCopyClass(p,l)}),e.qZA(),e._UZ(2,"app-api-response",28),e.qZA()}if(2&i){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("parameters",t.parameters),e.xp6(1),e.Q6J("responses",t.responses)("produces",t.produces)("produce",t.__produce)}}const ce=function(i,r,t){return{"api-item":!0,"my-10":!0,"api-item-actived":i,deprecated:r,hidden:t}};function le(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"mat-expansion-panel",19),e.NdJ("expandedChange",function(p){const C=e.CHM(t).index;return e.oxw().expandeds[C]=p})("click",function(){const l=e.CHM(t).index;return e.oxw().updateUrl(l)}),e.TgZ(1,"mat-expansion-panel-header",20),e.NdJ("mousedown",function(){return e.CHM(t),e.oxw().recordStart()})("mouseup",function(){const l=e.CHM(t).index;return e.oxw().shouldAvoidSelect(l)}),e.TgZ(2,"div",21),e.TgZ(3,"mat-checkbox",22),e.NdJ("ngModelChange",function(p){const C=e.CHM(t).index;return e.oxw().selectedApis[C]=p})("ngModelChange",function(){return e.CHM(t),e.oxw().updateAllComplete()}),e.qZA(),e._UZ(4,"app-api-info",23),e._UZ(5,"app-api-request",24),e.qZA(),e.qZA(),e.YNc(6,ae,3,4,"ng-template",25),e.qZA()}if(2&i){const t=r.$implicit,o=r.index,p=e.oxw();e.Tol(t.__info.method),e.Q6J("id",p.ID_PREFIX+o)("ngClass",e.kEZ(10,ce,o===p.activedIndex,t.deprecated,!t.matched))("expanded",p.expandeds[o]),e.xp6(1),e.ekj("actived",o===p.activedIndex),e.xp6(2),e.Q6J("ngModel",p.selectedApis[o]),e.xp6(1),e.Q6J("api",t.__info),e.xp6(1),e.Q6J("apiItem",t)}}let de=(()=>{class i{constructor(t,o,p,l){this.store=t,this.scroll=o,this.copyService=p,this.typeService=l,this.apiItems=[],this.expandeds=[],this.ID_PREFIX=u.AH,this.allowKeys=new Set(["KeyU","KeyD","KeyP"]),this.selectedApis=[],this.selectAll=!1,this.emptyData=!0}get disabled(){return!this.selectedApis.some(Boolean)}ngOnInit(){this.store.getData$().subscribe(t=>{this.emptyData=0===t.projects.length,this.selectedApis=t.apiItems.map(()=>!1),this.apiItems=t.apiItems,this.expandeds=t.expandeds,this.expandeds[t.index.apiIndex]=!0,this.activedIndex=t.index.apiIndex,this.scroll.tick_then(()=>{this.scroll.to(this.ID_PREFIX+this.activedIndex)})}),(0,g.R)(window,"keyup").pipe((0,d.b)(500),(0,_.h)(()=>{var t;return"INPUT"!==(null===(t=document.activeElement)||void 0===t?void 0:t.tagName)}),(0,_.h)(t=>this.allowKeys.has(t.code)),(0,a.U)(t=>t.code)).subscribe(t=>{const o=this.store.getCurApiItem();void 0!==o&&this[t](o)})}KeyU(t){this.copyService.copy(t.__info.urlForCopy)}KeyD(t){this.copyService.copy(t.__info.description)}KeyP(){const o=document.querySelector(".api-item-actived .parameter-fields");!o||this.copyService.copy(o.dataset.copyselector||"",!0)}selectAllApi(t){this.selectAll=t,this.selectedApis=this.apiItems.map(()=>t)}someSelected(){return this.selectedApis.filter(Boolean).length>0&&!this.selectAll}updateAllComplete(){this.selectAll=this.selectedApis.every(Boolean)}recordStart(){this.start=+new Date}shouldAvoidSelect(t){+new Date-this.start>200&&(this.expandeds[t]=!this.expandeds[t])}updateUrl(t){this.activedIndex=t,this.store.updateUrl(t)}genServiceCall(){const o=this.apiItems.filter((p,l)=>this.selectedApis[l]).map(p=>{const{responses:l,__info:{operationId:C,method:O}}=p;const w=l[200];w&&this.typeService.getType(w);const q=C.replace(/Using.*/,"");let M=this.copyService.getTexts(p.argSelector);return M&&(M=`/* ${M} */`),"get"===O?`${q}() {\n  this.loading = true;\n  this.apiService.${q}(${M}).subscribe((res) => {\n    // this.xxx = res.data;\n    this.loading = false;\n  });\n}`:`\n        ${q}() {\n    this.loading = true;\n    this.apiService.${q}(${M}).subscribe(\n      (res: any) => {\n        // this.xxx = res.data;\n        this.loading = false;\n      },\n      (error) => {\n        this.loading = false;\n        this.modal.error({ message: error.message });\n      }\n    );\n  }\n        `}).join("\n\n");return this.copyService.copy(o),o}genService(){const o=this.apiItems.filter((p,l)=>this.selectedApis[l]).map(p=>{const{responses:l,__info:{operationId:C,method:O,urlForCopy:F,description:w}}=p;let q="any";const M=l[200];return M&&(q=this.typeService.getType(M)),`// ${w}\n${C.replace(/Using.*/,"")}(${this.copyService.getTexts(p.argSelector)}): Observable<${q}> {\n  return this.api.${O}(${F});\n}`}).join("\n\n");return this.copyService.copy(o),o}setCopyClass(t,o){o.argSelector=t}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.d6),e.Y36(c.nk),e.Y36(c.tX),e.Y36(c.SM))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-api-list"]],viewQuery:function(t,o){if(1&t&&e.Gf(f.pp,5),2&t){let p;e.iGM(p=e.CRH())&&(o.accordion=p.first)}},decls:4,vars:3,consts:[["class","no-data f-16 mt-32 text-center",4,"ngIf"],["class","api-items flex y-center justify-between",4,"ngIf"],["multi","","hideToggle",""],[3,"id","ngClass","class","expanded","expandedChange","click",4,"ngFor","ngForOf"],[1,"no-data","f-16","mt-32","text-center"],["tr","no-data",1,"my-32"],["tr","project-import-tip-1"],["tr","project-import-tip-2"],["tr","project-import-tip-3"],["tr","project-import-tip",1,"mt-32"],[1,"api-items","flex","y-center","justify-between"],["color","primary",1,"ml-18",3,"checked","indeterminate","change"],[1,"flex"],[3,"closeOnContentClick","menuClass"],["mat-stroked-button","","color","primary","trigger","","title","For Angular",1,"outlined","mr-10",3,"disabled"],["menuContent",""],["mat-menu-item","",3,"click"],["mat-stroked-button","","color","primary","tr","expand-all",1,"outlined","expand-all","mr-10",3,"click"],["mat-stroked-button","","color","primary","tr","close-all",1,"outlined","close-all",3,"click"],[3,"id","ngClass","expanded","expandedChange","click"],["expandedHeight","48px",1,"pl-0","pr-16",3,"mousedown","mouseup"],[1,"pl-16","y-center","justify-between","flex-1"],["color","primary","appStopClick","",1,"mr-16",3,"ngModel","ngModelChange"],[1,"flex-1",3,"api"],[3,"apiItem"],["matExpansionPanelContent",""],[1,"api-detail","flex"],[1,"px-10","flex-1",3,"parameters","genId"],[1,"px-10","flex-1",3,"responses","produces","produce"]],template:function(t,o){1&t&&(e.YNc(0,pe,11,0,"div",0),e.YNc(1,re,15,5,"div",1),e.TgZ(2,"mat-accordion",2),e.YNc(3,le,7,14,"mat-expansion-panel",3),e.qZA()),2&t&&(e.Q6J("ngIf",o.emptyData),e.xp6(1),e.Q6J("ngIf",o.apiItems.length),e.xp6(2),e.Q6J("ngForOf",o.apiItems))},directives:[h.O5,f.pp,h.sg,m.X,I.oG,E.w,P.lW,J.OP,f.ib,h.mk,f.yz,B.O,U.JJ,U.On,y.o,H.a,f.HS,G,se],styles:["[_nghost-%COMP%]{display:block;padding-top:45px}[_nghost-%COMP%]     .mat-expansion-panel-body{padding:0!important}.api-detail[_ngcontent-%COMP%]{padding:10px 8px 20px}app-api-request[_ngcontent-%COMP%]{flex-shrink:0}.api-items[_ngcontent-%COMP%]{position:fixed;left:300px;right:272px;top:64px;padding:20px 10px 20px 15px;z-index:9;background:var(--main-background-nav)}"]}),i})();const ue=[{path:"",component:(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-api"]],decls:1,vars:0,template:function(t,o){1&t&&e._UZ(0,"app-api-list")},directives:[de],styles:[""]}),i})()}];let me=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[A.Bz.forChild(ue)],A.Bz]}),i})();var k=s(15304),_e=s(59112);let he=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[n.G,me]]}),i})();e.B6R(Z.j,[h.O5,k.xY,y.o,h.sg,U.Fj,U.JJ,U.On,v.l,T.i,m.X,P.lW,k.ZT,_e.Hw,Q.P],[])}}]);