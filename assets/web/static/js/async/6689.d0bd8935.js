(self.rspackChunkchat_demo=self.rspackChunkchat_demo||[]).push([[6689],{868(Ct){Ct.exports=function(Nt,O){var q=O.prototype,N=q.format;q.format=function(S){var L=this,e=this.$locale();if(!this.isValid())return N.bind(this)(S);var R=this.$utils(),g=(S||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(G){switch(G){case"Q":return Math.ceil((L.$M+1)/3);case"Do":return e.ordinal(L.$D);case"gggg":return L.weekYear();case"GGGG":return L.isoWeekYear();case"wo":return e.ordinal(L.week(),"W");case"w":case"ww":return R.s(L.week(),G==="w"?1:2,"0");case"W":case"WW":return R.s(L.isoWeek(),G==="W"?1:2,"0");case"k":case"kk":return R.s(String(L.$H===0?24:L.$H),G==="k"?1:2,"0");case"X":return Math.floor(L.$d.getTime()/1e3);case"x":return L.$d.getTime();case"z":return"["+L.offsetName()+"]";case"zzz":return"["+L.offsetName("long")+"]";default:return G}});return N.bind(this)(g)}}},4076(Ct){Ct.exports=(function(){"use strict";var Nt={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},O=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,q=/\d/,N=/\d\d/,S=/\d\d?/,L=/\d*[^-_:/,()\s\d]+/,e={},R=function(p){return(p*=1)+(p>68?1900:2e3)},g=function(p){return function(K){this[p]=+K}},G=[/[+-]\d\d:?(\d\d)?|Z/,function(p){(this.zone||(this.zone={})).offset=(function(K){if(!K||K==="Z")return 0;var F=K.match(/([+-]|\d\d)/g),z=60*F[1]+(+F[2]||0);return z===0?0:F[0]==="+"?-z:z})(p)}],vt=function(p){var K=e[p];return K&&(K.indexOf?K:K.s.concat(K.f))},St=function(p,K){var F,z=e.meridiem;if(z){for(var ft=1;ft<=24;ft+=1)if(p.indexOf(z(ft,0,K))>-1){F=ft>12;break}}else F=p===(K?"pm":"PM");return F},I={A:[L,function(p){this.afternoon=St(p,!1)}],a:[L,function(p){this.afternoon=St(p,!0)}],Q:[q,function(p){this.month=3*(p-1)+1}],S:[q,function(p){this.milliseconds=100*p}],SS:[N,function(p){this.milliseconds=10*p}],SSS:[/\d{3}/,function(p){this.milliseconds=+p}],s:[S,g("seconds")],ss:[S,g("seconds")],m:[S,g("minutes")],mm:[S,g("minutes")],H:[S,g("hours")],h:[S,g("hours")],HH:[S,g("hours")],hh:[S,g("hours")],D:[S,g("day")],DD:[N,g("day")],Do:[L,function(p){var K=e.ordinal,F=p.match(/\d+/);if(this.day=F[0],K)for(var z=1;z<=31;z+=1)K(z).replace(/\[|\]/g,"")===p&&(this.day=z)}],w:[S,g("week")],ww:[N,g("week")],M:[S,g("month")],MM:[N,g("month")],MMM:[L,function(p){var K=vt("months"),F=(vt("monthsShort")||K.map(function(z){return z.slice(0,3)})).indexOf(p)+1;if(F<1)throw Error();this.month=F%12||F}],MMMM:[L,function(p){var K=vt("months").indexOf(p)+1;if(K<1)throw Error();this.month=K%12||K}],Y:[/[+-]?\d+/,g("year")],YY:[N,function(p){this.year=R(p)}],YYYY:[/\d{4}/,g("year")],Z:G,ZZ:G};return function(p,K,F){F.p.customParseFormat=!0,p&&p.parseTwoDigitYear&&(R=p.parseTwoDigitYear);var z=K.prototype,ft=z.parse;z.parse=function(Kt){var de=Kt.date,ue=Kt.utc,it=Kt.args;this.$u=ue;var ct=it[1];if(typeof ct=="string"){var Mt=it[2]===!0,Gt=it[3]===!0,H=it[2];Gt&&(H=it[2]),e=this.$locale(),!Mt&&H&&(e=F.Ls[H]),this.$d=(function(mt,lt,Rt,jt){try{if(["x","X"].indexOf(lt)>-1)return new Date((lt==="X"?1e3:1)*mt);var Z=(function(ne){var fe,re;fe=ne,re=e&&e.formats;for(var It=(ne=fe.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Ot,wt,rt){var Pt=rt&&rt.toUpperCase();return wt||re[rt]||Nt[rt]||re[Pt].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(gt,ae,se){return ae||se.slice(1)})})).match(O),ke=It.length,Ft=0;Ft<ke;Ft+=1){var me=It[Ft],Wt=I[me],ve=Wt&&Wt[0],ye=Wt&&Wt[1];It[Ft]=ye?{regex:ve,parser:ye}:me.replace(/^\[|\]$/g,"")}return function(Ot){for(var wt={},rt=0,Pt=0;rt<ke;rt+=1){var gt=It[rt];if(typeof gt=="string")Pt+=gt.length;else{var ae=gt.regex,se=gt.parser,be=Ot.slice(Pt),oe=ae.exec(be)[0];se.call(wt,oe),Ot=Ot.replace(oe,"")}}return(function(_t){var zt=_t.afternoon;if(zt!==void 0){var ce=_t.hours;zt?ce<12&&(_t.hours+=12):ce===12&&(_t.hours=0),delete _t.afternoon}})(wt),wt}})(lt)(mt),nt=Z.year,yt=Z.month,he=Z.day,Vt=Z.hours,xt=Z.minutes,Ut=Z.seconds,Zt=Z.milliseconds,Tt=Z.zone,At=Z.week,Xt=new Date,qt=he||(nt||yt?1:Xt.getDate()),Qt=nt||Xt.getFullYear(),Lt=0;nt&&!yt||(Lt=yt>0?yt-1:Xt.getMonth());var Yt,Jt=Vt||0,te=xt||0,ee=Ut||0,ie=Zt||0;return Tt?new Date(Date.UTC(Qt,Lt,qt,Jt,te,ee,ie+60*Tt.offset*1e3)):Rt?new Date(Date.UTC(Qt,Lt,qt,Jt,te,ee,ie)):(Yt=new Date(Qt,Lt,qt,Jt,te,ee,ie),At&&(Yt=jt(Yt).week(At).toDate()),Yt)}catch(ne){return new Date("")}})(de,ct,ue,F),this.init(),H&&H!==!0&&(this.$L=this.locale(H).$L),(Mt||Gt)&&de!=this.format(ct)&&(this.$d=new Date("")),e={}}else if(ct instanceof Array)for(var Et=ct.length,kt=1;kt<=Et;kt+=1){it[1]=ct[kt-1];var bt=F.apply(this,it);if(bt.isValid()){this.$d=bt.$d,this.$L=bt.$L,this.init();break}kt===Et&&(this.$d=new Date(""))}else ft.call(this,Kt)}}})()},3188(Ct){Ct.exports=function(Nt,O,q){var N=function(e){return e.add(4-e.isoWeekday(),"day")},S=O.prototype;S.isoWeekYear=function(){return N(this).year()},S.isoWeek=function(e){if(!this.$utils().u(e))return this.add(7*(e-this.isoWeek()),"day");var R,g,G,vt=N(this),St=(R=this.isoWeekYear(),G=4-(g=(this.$u?q.utc:q)().year(R).startOf("year")).isoWeekday(),g.isoWeekday()>4&&(G+=7),g.add(G,"day"));return vt.diff(St,"week")+1},S.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var L=S.startOf;S.startOf=function(e,R){var g=this.$utils(),G=!!g.u(R)||R;return g.p(e)==="isoweek"?G?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):L.bind(this)(e,R)}}},7864(Ct,Nt,O){"use strict";O.d(Nt,{diagram:()=>je});var q,N,S,L=O(3218),e=O(8755),R=O(4674),g=O(9182),G=O(3188),vt=O(4076),St=O(868),I=O(7414),p=O(6040),K=O(1733),F=O(6763),z=O(6700);function ft(t){return t}function Kt(t){return"translate("+t+",0)"}function de(t){return"translate(0,"+t+")"}function ue(){return!this.__axis}function it(t,n){var i=[],c=null,f=null,l=6,b=6,X=3,M="u">typeof window&&window.devicePixelRatio>1?0:.5,Y=t===1||t===4?-1:1,W=t===4||t===2?"x":"y",B=t===1||t===3?Kt:de;function _(x){var V=c==null?n.ticks?n.ticks.apply(n,i):n.domain():c,$=f==null?n.tickFormat?n.tickFormat.apply(n,i):ft:f,pt=Math.max(l,0)+X,dt=n.range(),at=+dt[0]+M,st=+dt[dt.length-1]+M,ot=(n.bandwidth?function(r,h){return h=Math.max(0,r.bandwidth()-2*h)/2,r.round()&&(h=Math.round(h)),u=>+r(u)+h}:function(r){return h=>+r(h)})(n.copy(),M),et=x.selection?x.selection():x,Q=et.selectAll(".domain").data([null]),j=et.selectAll(".tick").data(V,n).order(),k=j.exit(),T=j.enter().append("g").attr("class","tick"),v=j.select("line"),m=j.select("text");Q=Q.merge(Q.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),j=j.merge(T),v=v.merge(T.append("line").attr("stroke","currentColor").attr(W+"2",Y*l)),m=m.merge(T.append("text").attr("fill","currentColor").attr(W,Y*pt).attr("dy",t===1?"0em":t===3?"0.71em":"0.32em")),x!==et&&(Q=Q.transition(x),j=j.transition(x),v=v.transition(x),m=m.transition(x),k=k.transition(x).attr("opacity",1e-6).attr("transform",function(r){return isFinite(r=ot(r))?B(r+M):this.getAttribute("transform")}),T.attr("opacity",1e-6).attr("transform",function(r){var h=this.parentNode.__axis;return B((h&&isFinite(h=h(r))?h:ot(r))+M)})),k.remove(),Q.attr("d",t===4||t===2?b?"M"+Y*b+","+at+"H"+M+"V"+st+"H"+Y*b:"M"+M+","+at+"V"+st:b?"M"+at+","+Y*b+"V"+M+"H"+st+"V"+Y*b:"M"+at+","+M+"H"+st),j.attr("opacity",1).attr("transform",function(r){return B(ot(r)+M)}),v.attr(W+"2",Y*l),m.attr(W,Y*pt).text($),et.filter(ue).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===2?"start":t===4?"end":"middle"),et.each(function(){this.__axis=ot})}return _.scale=function(x){return arguments.length?(n=x,_):n},_.ticks=function(){return i=Array.from(arguments),_},_.tickArguments=function(x){return arguments.length?(i=x==null?[]:Array.from(x),_):i.slice()},_.tickValues=function(x){return arguments.length?(c=x==null?null:Array.from(x),_):c&&c.slice()},_.tickFormat=function(x){return arguments.length?(f=x,_):f},_.tickSize=function(x){return arguments.length?(l=b=+x,_):l},_.tickSizeInner=function(x){return arguments.length?(l=+x,_):l},_.tickSizeOuter=function(x){return arguments.length?(b=+x,_):b},_.tickPadding=function(x){return arguments.length?(X=+x,_):X},_.offset=function(x){return arguments.length?(M=+x,_):M},_}var ct=O(8837),Mt=(function(){var t=(0,e.K2)(function(r,h,u,d){for(u=u||{},d=r.length;d--;u[r[d]]=h);return u},"o"),n=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],i=[1,26],c=[1,27],f=[1,28],l=[1,29],b=[1,30],X=[1,31],M=[1,32],Y=[1,33],W=[1,34],B=[1,9],_=[1,10],x=[1,11],V=[1,12],$=[1,13],pt=[1,14],dt=[1,15],at=[1,16],st=[1,19],ot=[1,20],et=[1,21],Q=[1,22],j=[1,23],k=[1,25],T=[1,35],v={trace:(0,e.K2)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:(0,e.K2)(function(r,h,u,d,y,s,o){var a=s.length-1;switch(y){case 1:return s[a-1];case 2:case 6:case 7:this.$=[];break;case 3:s[a-1].push(s[a]),this.$=s[a-1];break;case 4:case 5:this.$=s[a];break;case 8:d.setWeekday("monday");break;case 9:d.setWeekday("tuesday");break;case 10:d.setWeekday("wednesday");break;case 11:d.setWeekday("thursday");break;case 12:d.setWeekday("friday");break;case 13:d.setWeekday("saturday");break;case 14:d.setWeekday("sunday");break;case 15:d.setWeekend("friday");break;case 16:d.setWeekend("saturday");break;case 17:d.setDateFormat(s[a].substr(11)),this.$=s[a].substr(11);break;case 18:d.enableInclusiveEndDates(),this.$=s[a].substr(18);break;case 19:d.TopAxis(),this.$=s[a].substr(8);break;case 20:d.setAxisFormat(s[a].substr(11)),this.$=s[a].substr(11);break;case 21:d.setTickInterval(s[a].substr(13)),this.$=s[a].substr(13);break;case 22:d.setExcludes(s[a].substr(9)),this.$=s[a].substr(9);break;case 23:d.setIncludes(s[a].substr(9)),this.$=s[a].substr(9);break;case 24:d.setTodayMarker(s[a].substr(12)),this.$=s[a].substr(12);break;case 27:d.setDiagramTitle(s[a].substr(6)),this.$=s[a].substr(6);break;case 28:this.$=s[a].trim(),d.setAccTitle(this.$);break;case 29:case 30:this.$=s[a].trim(),d.setAccDescription(this.$);break;case 31:d.addSection(s[a].substr(8)),this.$=s[a].substr(8);break;case 33:d.addTask(s[a-1],s[a]),this.$="task";break;case 34:this.$=s[a-1],d.setClickEvent(s[a-1],s[a],null);break;case 35:this.$=s[a-2],d.setClickEvent(s[a-2],s[a-1],s[a]);break;case 36:this.$=s[a-2],d.setClickEvent(s[a-2],s[a-1],null),d.setLink(s[a-2],s[a]);break;case 37:this.$=s[a-3],d.setClickEvent(s[a-3],s[a-2],s[a-1]),d.setLink(s[a-3],s[a]);break;case 38:this.$=s[a-2],d.setClickEvent(s[a-2],s[a],null),d.setLink(s[a-2],s[a-1]);break;case 39:this.$=s[a-3],d.setClickEvent(s[a-3],s[a-1],s[a]),d.setLink(s[a-3],s[a-2]);break;case 40:this.$=s[a-1],d.setLink(s[a-1],s[a]);break;case 41:case 47:this.$=s[a-1]+" "+s[a];break;case 42:case 43:case 45:this.$=s[a-2]+" "+s[a-1]+" "+s[a];break;case 44:case 46:this.$=s[a-3]+" "+s[a-2]+" "+s[a-1]+" "+s[a]}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(n,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:i,13:c,14:f,15:l,16:b,17:X,18:M,19:18,20:Y,21:W,22:B,23:_,24:x,25:V,26:$,27:pt,28:dt,29:at,30:st,31:ot,33:et,35:Q,36:j,37:24,38:k,40:T},t(n,[2,7],{1:[2,1]}),t(n,[2,3]),{9:36,11:17,12:i,13:c,14:f,15:l,16:b,17:X,18:M,19:18,20:Y,21:W,22:B,23:_,24:x,25:V,26:$,27:pt,28:dt,29:at,30:st,31:ot,33:et,35:Q,36:j,37:24,38:k,40:T},t(n,[2,5]),t(n,[2,6]),t(n,[2,17]),t(n,[2,18]),t(n,[2,19]),t(n,[2,20]),t(n,[2,21]),t(n,[2,22]),t(n,[2,23]),t(n,[2,24]),t(n,[2,25]),t(n,[2,26]),t(n,[2,27]),{32:[1,37]},{34:[1,38]},t(n,[2,30]),t(n,[2,31]),t(n,[2,32]),{39:[1,39]},t(n,[2,8]),t(n,[2,9]),t(n,[2,10]),t(n,[2,11]),t(n,[2,12]),t(n,[2,13]),t(n,[2,14]),t(n,[2,15]),t(n,[2,16]),{41:[1,40],43:[1,41]},t(n,[2,4]),t(n,[2,28]),t(n,[2,29]),t(n,[2,33]),t(n,[2,34],{42:[1,42],43:[1,43]}),t(n,[2,40],{41:[1,44]}),t(n,[2,35],{43:[1,45]}),t(n,[2,36]),t(n,[2,38],{42:[1,46]}),t(n,[2,37]),t(n,[2,39])],defaultActions:{},parseError:(0,e.K2)(function(r,h){if(h.recoverable)this.trace(r);else{var u=Error(r);throw u.hash=h,u}},"parseError"),parse:(0,e.K2)(function(r){var h=this,u=[0],d=[],y=[null],s=[],o=this.table,a="",D=0,w=0,E=0,A=s.slice.call(arguments,1),C=Object.create(this.lexer),ut={};for(var le in this.yy)Object.prototype.hasOwnProperty.call(this.yy,le)&&(ut[le]=this.yy[le]);C.setInput(r,ut),ut.lexer=C,ut.parser=this,C.yylloc===void 0&&(C.yylloc={});var Te=C.yylloc;s.push(Te);var Ve=C.options&&C.options.ranges;function Ee(){var tt;return typeof(tt=d.pop()||C.lex()||1)!="number"&&(tt instanceof Array&&(tt=(d=tt).pop()),tt=h.symbols_[tt]||tt),tt}typeof ut.parseError=="function"?this.parseError=ut.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,e.K2)(function(tt){u.length=u.length-2*tt,y.length=y.length-tt,s.length=s.length-tt},"popStack"),(0,e.K2)(Ee,"lex");for(var U,we,$t,J,Ae,ge,ht,Le,pe,Ht={};;){if($t=u[u.length-1],this.defaultActions[$t]?J=this.defaultActions[$t]:(U==null&&(U=Ee()),J=o[$t]&&o[$t][U]),J===void 0||!J.length||!J[0]){var Ye="";for(ge in pe=[],o[$t])this.terminals_[ge]&&ge>2&&pe.push("'"+this.terminals_[ge]+"'");Ye=C.showPosition?"Parse error on line "+(D+1)+`:
`+C.showPosition()+`
Expecting `+pe.join(", ")+", got '"+(this.terminals_[U]||U)+"'":"Parse error on line "+(D+1)+": Unexpected "+(U==1?"end of input":"'"+(this.terminals_[U]||U)+"'"),this.parseError(Ye,{text:C.match,token:this.terminals_[U]||U,line:C.yylineno,loc:Te,expected:pe})}if(J[0]instanceof Array&&J.length>1)throw Error("Parse Error: multiple actions possible at state: "+$t+", token: "+U);switch(J[0]){case 1:u.push(U),y.push(C.yytext),s.push(C.yylloc),u.push(J[1]),U=null,we?(U=we,we=null):(w=C.yyleng,a=C.yytext,D=C.yylineno,Te=C.yylloc,E>0&&E--);break;case 2:if(ht=this.productions_[J[1]][1],Ht.$=y[y.length-ht],Ht._$={first_line:s[s.length-(ht||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(ht||1)].first_column,last_column:s[s.length-1].last_column},Ve&&(Ht._$.range=[s[s.length-(ht||1)].range[0],s[s.length-1].range[1]]),(Ae=this.performAction.apply(Ht,[a,w,D,ut,J[1],y,s].concat(A)))!==void 0)return Ae;ht&&(u=u.slice(0,-1*ht*2),y=y.slice(0,-1*ht),s=s.slice(0,-1*ht)),u.push(this.productions_[J[1]][0]),y.push(Ht.$),s.push(Ht._$),Le=o[u[u.length-2]][u[u.length-1]],u.push(Le);break;case 3:return!0}}return!0},"parse")};function m(){this.yy={}}return v.lexer={EOF:1,parseError:(0,e.K2)(function(r,h){if(this.yy.parser)this.yy.parser.parseError(r,h);else throw Error(r)},"parseError"),setInput:(0,e.K2)(function(r,h){return this.yy=h||this.yy||{},this._input=r,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,e.K2)(function(){var r=this._input[0];return this.yytext+=r,this.yyleng++,this.offset++,this.match+=r,this.matched+=r,r.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),r},"input"),unput:(0,e.K2)(function(r){var h=r.length,u=r.split(/(?:\r\n?|\n)/g);this._input=r+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-h),this.offset-=h;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),u.length-1&&(this.yylineno-=u.length-1);var y=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:u?(u.length===d.length?this.yylloc.first_column:0)+d[d.length-u.length].length-u[0].length:this.yylloc.first_column-h},this.options.ranges&&(this.yylloc.range=[y[0],y[0]+this.yyleng-h]),this.yyleng=this.yytext.length,this},"unput"),more:(0,e.K2)(function(){return this._more=!0,this},"more"),reject:(0,e.K2)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:(0,e.K2)(function(r){this.unput(this.match.slice(r))},"less"),pastInput:(0,e.K2)(function(){var r=this.matched.substr(0,this.matched.length-this.match.length);return(r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,e.K2)(function(){var r=this.match;return r.length<20&&(r+=this._input.substr(0,20-r.length)),(r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,e.K2)(function(){var r=this.pastInput(),h=Array(r.length+1).join("-");return r+this.upcomingInput()+`
`+h+"^"},"showPosition"),test_match:(0,e.K2)(function(r,h){var u,d,y;if(this.options.backtrack_lexer&&(y={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(y.yylloc.range=this.yylloc.range.slice(0))),(d=r[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],u=this.performAction.call(this,this.yy,this,h,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),u)return u;if(this._backtrack)for(var s in y)this[s]=y[s];return!1},"test_match"),next:(0,e.K2)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var r,h,u,d,y=this._currentRules(),s=0;s<y.length;s++)if((u=this._input.match(this.rules[y[s]]))&&(!h||u[0].length>h[0].length)){if(h=u,d=s,this.options.backtrack_lexer){if((r=this.test_match(u,y[s]))!==!1)return r;if(!this._backtrack)return!1;h=!1;continue}if(!this.options.flex)break}return h?(r=this.test_match(h,y[d]))!==!1&&r:this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,e.K2)(function(){var r=this.next();return r||this.lex()},"lex"),begin:(0,e.K2)(function(r){this.conditionStack.push(r)},"begin"),popState:(0,e.K2)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,e.K2)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,e.K2)(function(r){return(r=this.conditionStack.length-1-Math.abs(r||0))>=0?this.conditionStack[r]:"INITIAL"},"topState"),pushState:(0,e.K2)(function(r){this.begin(r)},"pushState"),stateStackSize:(0,e.K2)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,e.K2)(function(r,h,u,d){switch(u){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:case 15:case 18:case 21:case 24:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:case 9:case 10:case 12:case 13:break;case 11:return 10;case 14:this.begin("href");break;case 16:return 43;case 17:this.begin("callbackname");break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 22:return 42;case 23:this.begin("click");break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}},(0,e.K2)(m,"Parser"),m.prototype=v,v.Parser=m,new m})();Mt.parser=Mt,g.extend(G),g.extend(vt),g.extend(St);var Gt={friday:5,saturday:6},H="",Et="",kt=void 0,bt="",mt=[],lt=[],Rt=new Map,jt=[],Z=[],nt="",yt="",he=["active","done","crit","milestone","vert"],Vt=[],xt=!1,Ut=!1,Zt="sunday",Tt="saturday",At=0,Xt=(0,e.K2)(function(){jt=[],Z=[],nt="",Vt=[],De=0,q=void 0,N=void 0,P=[],H="",Et="",yt="",kt=void 0,bt="",mt=[],lt=[],xt=!1,Ut=!1,At=0,Rt=new Map,(0,e.IU)(),Zt="sunday",Tt="saturday"},"clear"),qt=(0,e.K2)(function(t){Et=t},"setAxisFormat"),Qt=(0,e.K2)(function(){return Et},"getAxisFormat"),Lt=(0,e.K2)(function(t){kt=t},"setTickInterval"),Yt=(0,e.K2)(function(){return kt},"getTickInterval"),Jt=(0,e.K2)(function(t){bt=t},"setTodayMarker"),te=(0,e.K2)(function(){return bt},"getTodayMarker"),ee=(0,e.K2)(function(t){H=t},"setDateFormat"),ie=(0,e.K2)(function(){xt=!0},"enableInclusiveEndDates"),ne=(0,e.K2)(function(){return xt},"endDatesAreInclusive"),fe=(0,e.K2)(function(){Ut=!0},"enableTopAxis"),re=(0,e.K2)(function(){return Ut},"topAxisEnabled"),It=(0,e.K2)(function(t){yt=t},"setDisplayMode"),ke=(0,e.K2)(function(){return yt},"getDisplayMode"),Ft=(0,e.K2)(function(){return H},"getDateFormat"),me=(0,e.K2)(function(t){mt=t.toLowerCase().split(/[\s,]+/)},"setIncludes"),Wt=(0,e.K2)(function(){return mt},"getIncludes"),ve=(0,e.K2)(function(t){lt=t.toLowerCase().split(/[\s,]+/)},"setExcludes"),ye=(0,e.K2)(function(){return lt},"getExcludes"),Ot=(0,e.K2)(function(){return Rt},"getLinks"),wt=(0,e.K2)(function(t){nt=t,jt.push(t)},"addSection"),rt=(0,e.K2)(function(){return jt},"getSections"),Pt=(0,e.K2)(function(){let t=Ce(),n=0;for(;!t&&n<10;)t=Ce(),n++;return Z=P},"getTasks"),gt=(0,e.K2)(function(t,n,i,c){let f=t.format(n.trim()),l=t.format("YYYY-MM-DD");return!(c.includes(f)||c.includes(l))&&(!!(i.includes("weekends")&&(t.isoWeekday()===Gt[Tt]||t.isoWeekday()===Gt[Tt]+1)||i.includes(t.format("dddd").toLowerCase()))||i.includes(f)||i.includes(l))},"isInvalidDate"),ae=(0,e.K2)(function(t){Zt=t},"setWeekday"),se=(0,e.K2)(function(){return Zt},"getWeekday"),be=(0,e.K2)(function(t){Tt=t},"setWeekend"),oe=(0,e.K2)(function(t,n,i,c){let f;if(!i.length||t.manualEndTime)return;let[l,b]=_t(f=(f=t.startTime instanceof Date?g(t.startTime):g(t.startTime,n,!0)).add(1,"d"),t.endTime instanceof Date?g(t.endTime):g(t.endTime,n,!0),n,i,c);t.endTime=l.toDate(),t.renderEndTime=b},"checkTaskDates"),_t=(0,e.K2)(function(t,n,i,c,f){let l=!1,b=null;for(;t<=n;)l||(b=n.toDate()),(l=gt(t,i,c,f))&&(n=n.add(1,"d")),t=t.add(1,"d");return[n,b]},"fixTaskDates"),zt=(0,e.K2)(function(t,n,i){i=i.trim();let c=new RegExp("^after\\s+(?<ids>[\\d\\w- ]+)").exec(i);if(c!==null){let l=null;for(let X of c.groups.ids.split(" ")){let M=Dt(X);M!==void 0&&(!l||M.endTime>l.endTime)&&(l=M)}if(l)return l.endTime;let b=new Date;return b.setHours(0,0,0,0),b}let f=g(i,n.trim(),!0);if(f.isValid())return f.toDate();{e.Rm.debug("Invalid date:"+i),e.Rm.debug("With date format:"+n.trim());let l=new Date(i);if(l===void 0||isNaN(l.getTime())||-1e4>l.getFullYear()||l.getFullYear()>1e4)throw Error("Invalid date:"+i);return l}},"getStartDate"),ce=(0,e.K2)(function(t){let n=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return n!==null?[Number.parseFloat(n[1]),n[2]]:[NaN,"ms"]},"parseDuration"),_e=(0,e.K2)(function(t,n,i,c=!1){i=i.trim();let f=new RegExp("^until\\s+(?<ids>[\\d\\w- ]+)").exec(i);if(f!==null){let Y=null;for(let B of f.groups.ids.split(" ")){let _=Dt(B);_!==void 0&&(!Y||_.startTime<Y.startTime)&&(Y=_)}if(Y)return Y.startTime;let W=new Date;return W.setHours(0,0,0,0),W}let l=g(i,n.trim(),!0);if(l.isValid())return c&&(l=l.add(1,"d")),l.toDate();let b=g(t),[X,M]=ce(i);if(!Number.isNaN(X)){let Y=b.add(X,M);Y.isValid()&&(b=Y)}return b.toDate()},"getEndDate"),De=0,Bt=(0,e.K2)(function(t){return t===void 0?"task"+(De+=1):t},"parseId"),Ie=(0,e.K2)(function(t,n){let i=(n.substr(0,1)===":"?n.substr(1,n.length):n).split(","),c={};xe(i,c,he);for(let l=0;l<i.length;l++)i[l]=i[l].trim();let f="";switch(i.length){case 1:c.id=Bt(),c.startTime=t.endTime,f=i[0];break;case 2:c.id=Bt(),c.startTime=zt(void 0,H,i[0]),f=i[1];break;case 3:c.id=Bt(i[0]),c.startTime=zt(void 0,H,i[1]),f=i[2]}return f&&(c.endTime=_e(c.startTime,H,f,xt),c.manualEndTime=g(f,"YYYY-MM-DD",!0).isValid(),oe(c,H,lt,mt)),c},"compileData"),Fe=(0,e.K2)(function(t,n){let i=(n.substr(0,1)===":"?n.substr(1,n.length):n).split(","),c={};xe(i,c,he);for(let f=0;f<i.length;f++)i[f]=i[f].trim();switch(i.length){case 1:c.id=Bt(),c.startTime={type:"prevTaskEnd",id:t},c.endTime={data:i[0]};break;case 2:c.id=Bt(),c.startTime={type:"getStartDate",startData:i[0]},c.endTime={data:i[1]};break;case 3:c.id=Bt(i[0]),c.startTime={type:"getStartDate",startData:i[1]},c.endTime={data:i[2]}}return c},"parseData"),P=[],$e={},We=(0,e.K2)(function(t,n){let i={section:nt,type:nt,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:n},task:t,classes:[]},c=Fe(N,n);i.raw.startTime=c.startTime,i.raw.endTime=c.endTime,i.id=c.id,i.prevTaskId=N,i.active=c.active,i.done=c.done,i.crit=c.crit,i.milestone=c.milestone,i.vert=c.vert,i.order=At,At++;let f=P.push(i);N=i.id,$e[i.id]=f-1},"addTask"),Dt=(0,e.K2)(function(t){return P[$e[t]]},"findTaskById"),Oe=(0,e.K2)(function(t,n){let i={section:nt,type:nt,description:t,task:t,classes:[]},c=Ie(q,n);i.startTime=c.startTime,i.endTime=c.endTime,i.id=c.id,i.active=c.active,i.done=c.done,i.crit=c.crit,i.milestone=c.milestone,i.vert=c.vert,q=i,Z.push(i)},"addTaskOrg"),Ce=(0,e.K2)(function(){let t=(0,e.K2)(function(i){let c=P[i],f="";switch(P[i].raw.startTime.type){case"prevTaskEnd":{let l=Dt(c.prevTaskId);c.startTime=l.endTime;break}case"getStartDate":(f=zt(void 0,H,P[i].raw.startTime.startData))&&(P[i].startTime=f)}return P[i].startTime&&(P[i].endTime=_e(P[i].startTime,H,P[i].raw.endTime.data,xt),P[i].endTime&&(P[i].processed=!0,P[i].manualEndTime=g(P[i].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),oe(P[i],H,lt,mt))),P[i].processed},"compileTask"),n=!0;for(let[i,c]of P.entries())t(i),n=n&&c.processed;return n},"compileTasks"),Pe=(0,e.K2)(function(t,n){let i=n;(0,e.D7)().securityLevel!=="loose"&&(i=(0,R.J)(n)),t.split(",").forEach(function(c){Dt(c)!==void 0&&(Ke(c,()=>{window.open(i,"_self")}),Rt.set(c,i))}),Se(t,"clickable")},"setLink"),Se=(0,e.K2)(function(t,n){t.split(",").forEach(function(i){let c=Dt(i);c!==void 0&&c.classes.push(n)})},"setClass"),ze=(0,e.K2)(function(t,n,i){if((0,e.D7)().securityLevel!=="loose"||n===void 0)return;let c=[];if(typeof i=="string"){c=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let f=0;f<c.length;f++){let l=c[f].trim();l.startsWith('"')&&l.endsWith('"')&&(l=l.substr(1,l.length-2)),c[f]=l}}c.length===0&&c.push(t),Dt(t)!==void 0&&Ke(t,()=>{L._K.runFunc(n,...c)})},"setClickFun"),Ke=(0,e.K2)(function(t,n){Vt.push(function(){let i=document.querySelector(`[id="${t}"]`);i!==null&&i.addEventListener("click",function(){n()})},function(){let i=document.querySelector(`[id="${t}-text"]`);i!==null&&i.addEventListener("click",function(){n()})})},"pushFun"),Be=(0,e.K2)(function(t,n,i){t.split(",").forEach(function(c){ze(c,n,i)}),Se(t,"clickable")},"setClickEvent"),He=(0,e.K2)(function(t){Vt.forEach(function(n){n(t)})},"bindFunctions"),Ne={getConfig:(0,e.K2)(()=>(0,e.D7)().gantt,"getConfig"),clear:Xt,setDateFormat:ee,getDateFormat:Ft,enableInclusiveEndDates:ie,endDatesAreInclusive:ne,enableTopAxis:fe,topAxisEnabled:re,setAxisFormat:qt,getAxisFormat:Qt,setTickInterval:Lt,getTickInterval:Yt,setTodayMarker:Jt,getTodayMarker:te,setAccTitle:e.SV,getAccTitle:e.iN,setDiagramTitle:e.ke,getDiagramTitle:e.ab,setDisplayMode:It,getDisplayMode:ke,setAccDescription:e.EI,getAccDescription:e.m7,addSection:wt,getSections:rt,getTasks:Pt,addTask:We,findTaskById:Dt,addTaskOrg:Oe,setIncludes:me,getIncludes:Wt,setExcludes:ve,getExcludes:ye,setClickEvent:Be,setLink:Pe,getLinks:Ot,bindFunctions:He,parseDuration:ce,isInvalidDate:gt,setWeekday:ae,getWeekday:se,setWeekend:be};function xe(t,n,i){let c=!0;for(;c;)c=!1,i.forEach(function(f){let l=RegExp("^\\s*"+f+"\\s*$");t[0].match(l)&&(n[f]=!0,t.shift(1),c=!0)})}(0,e.K2)(xe,"getTaskTags");var Ge=(0,e.K2)(function(){e.Rm.debug("Something is calling, setConf, remove the call")},"setConf"),Me={monday:I.AB,tuesday:I.PG,wednesday:I.Gu,thursday:I.Mo,friday:I.TU,saturday:I.rG,sunday:I.YP},Re=(0,e.K2)((t,n)=>{let i=[...t].map(()=>-1/0),c=[...t].sort((l,b)=>l.startTime-b.startTime||l.order-b.order),f=0;for(let l of c)for(let b=0;b<i.length;b++)if(l.startTime>=i[b]){i[b]=l.endTime,l.order=b+n,b>f&&(f=b);break}return f},"getMaxIntersections"),je={parser:Mt,db:Ne,renderer:{setConf:Ge,draw:(0,e.K2)(function(t,n,i,c){let f,l=(0,e.D7)().gantt,b=(0,e.D7)().securityLevel;b==="sandbox"&&(f=(0,p.Lt)("#i"+n));let X=b==="sandbox"?(0,p.Lt)(f.nodes()[0].contentDocument.body):(0,p.Lt)("body"),M=b==="sandbox"?f.nodes()[0].contentDocument:document,Y=M.getElementById(n);(S=Y.parentElement.offsetWidth)===void 0&&(S=1200),l.useWidth!==void 0&&(S=l.useWidth);let W=c.db.getTasks(),B=[];for(let k of W)B.push(k.type);B=j(B);let _={},x=2*l.topPadding;if(c.db.getDisplayMode()==="compact"||l.displayMode==="compact"){let k={};for(let v of W)k[v.section]===void 0?k[v.section]=[v]:k[v.section].push(v);let T=0;for(let v of Object.keys(k)){let m=Re(k[v],T)+1;T+=m,x+=m*(l.barHeight+l.barGap),_[v]=m}}else for(let k of(x+=W.length*(l.barHeight+l.barGap),B))_[k]=W.filter(T=>T.type===k).length;Y.setAttribute("viewBox","0 0 "+S+" "+x);let V=X.select(`[id="${n}"]`),$=(0,K.w7)().domain([(0,F.jk)(W,function(k){return k.startTime}),(0,F.T9)(W,function(k){return k.endTime})]).rangeRound([0,S-l.leftPadding-l.rightPadding]);function pt(k,T){let v=k.startTime,m=T.startTime,r=0;return v>m?r=1:v<m&&(r=-1),r}function dt(k,T,v){let m=l.barHeight,r=m+l.barGap,h=l.topPadding,u=l.leftPadding,d=(0,K.m4)().domain([0,B.length]).range(["#00B9FA","#F95002"]).interpolate(z.bE);st(r,h,u,T,v,k,c.db.getExcludes(),c.db.getIncludes()),ot(u,h,T,v),at(k,r,h,u,m,d,T),et(r,h),Q(u,h,T,v)}function at(k,T,v,m,r,h,u){k.sort((o,a)=>o.vert===a.vert?0:o.vert?1:-1);let d=[...new Set(k.map(o=>o.order))].map(o=>k.find(a=>a.order===o));V.append("g").selectAll("rect").data(d).enter().append("rect").attr("x",0).attr("y",function(o,a){return o.order*T+v-2}).attr("width",function(){return u-l.rightPadding/2}).attr("height",T).attr("class",function(o){for(let[a,D]of B.entries())if(o.type===D)return"section section"+a%l.numberSectionStyles;return"section section0"}).enter();let y=V.append("g").selectAll("rect").data(k).enter(),s=c.db.getLinks();if(y.append("rect").attr("id",function(o){return o.id}).attr("rx",3).attr("ry",3).attr("x",function(o){return o.milestone?$(o.startTime)+m+.5*($(o.endTime)-$(o.startTime))-.5*r:$(o.startTime)+m}).attr("y",function(o,a){return a=o.order,o.vert?l.gridLineStartPadding:a*T+v}).attr("width",function(o){return o.milestone?r:o.vert?.08*r:$(o.renderEndTime||o.endTime)-$(o.startTime)}).attr("height",function(o){return o.vert?W.length*(l.barHeight+l.barGap)+2*l.barHeight:r}).attr("transform-origin",function(o,a){return a=o.order,($(o.startTime)+m+.5*($(o.endTime)-$(o.startTime))).toString()+"px "+(a*T+v+.5*r).toString()+"px"}).attr("class",function(o){let a="";o.classes.length>0&&(a=o.classes.join(" "));let D=0;for(let[E,A]of B.entries())o.type===A&&(D=E%l.numberSectionStyles);let w="";return o.active?o.crit?w+=" activeCrit":w=" active":o.done?w=o.crit?" doneCrit":" done":o.crit&&(w+=" crit"),w.length===0&&(w=" task"),o.milestone&&(w=" milestone "+w),o.vert&&(w=" vert "+w),w+=D,"task"+(w+=" "+a)}),y.append("text").attr("id",function(o){return o.id+"-text"}).text(function(o){return o.task}).attr("font-size",l.fontSize).attr("x",function(o){let a=$(o.startTime),D=$(o.renderEndTime||o.endTime);if(o.milestone&&(a+=.5*($(o.endTime)-$(o.startTime))-.5*r,D=a+r),o.vert)return $(o.startTime)+m;let w=this.getBBox().width;return w>D-a?D+w+1.5*l.leftPadding>u?a+m-5:D+m+5:(D-a)/2+a+m}).attr("y",function(o,a){return o.vert?l.gridLineStartPadding+W.length*(l.barHeight+l.barGap)+60:o.order*T+l.barHeight/2+(l.fontSize/2-2)+v}).attr("text-height",r).attr("class",function(o){let a=$(o.startTime),D=$(o.endTime);o.milestone&&(D=a+r);let w=this.getBBox().width,E="";o.classes.length>0&&(E=o.classes.join(" "));let A=0;for(let[ut,le]of B.entries())o.type===le&&(A=ut%l.numberSectionStyles);let C="";return o.active&&(C=o.crit?"activeCritText"+A:"activeText"+A),o.done?C=o.crit?C+" doneCritText"+A:C+" doneText"+A:o.crit&&(C=C+" critText"+A),o.milestone&&(C+=" milestoneText"),o.vert&&(C+=" vertText"),w>D-a?D+w+1.5*l.leftPadding>u?E+" taskTextOutsideLeft taskTextOutside"+A+" "+C:E+" taskTextOutsideRight taskTextOutside"+A+" "+C+" width-"+w:E+" taskText taskText"+A+" "+C+" width-"+w}),(0,e.D7)().securityLevel==="sandbox"){let o=(0,p.Lt)("#i"+n).nodes()[0].contentDocument;y.filter(function(a){return s.has(a.id)}).each(function(a){var D=o.querySelector("#"+a.id),w=o.querySelector("#"+a.id+"-text");let E=D.parentNode;var A=o.createElement("a");A.setAttribute("xlink:href",s.get(a.id)),A.setAttribute("target","_top"),E.appendChild(A),A.appendChild(D),A.appendChild(w)})}}function st(k,T,v,m,r,h,u,d){let y,s;if(u.length===0&&d.length===0)return;for(let{startTime:E,endTime:A}of h)(y===void 0||E<y)&&(y=E),(s===void 0||A>s)&&(s=A);if(!y||!s)return;if(g(s).diff(g(y),"year")>5)return void e.Rm.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");let o=c.db.getDateFormat(),a=[],D=null,w=g(y);for(;w.valueOf()<=s;)c.db.isInvalidDate(w,o,u,d)?D?D.end=w:D={start:w,end:w}:D&&(a.push(D),D=null),w=w.add(1,"d");V.append("g").selectAll("rect").data(a).enter().append("rect").attr("id",E=>"exclude-"+E.start.format("YYYY-MM-DD")).attr("x",E=>$(E.start.startOf("day"))+v).attr("y",l.gridLineStartPadding).attr("width",E=>$(E.end.endOf("day"))-$(E.start.startOf("day"))).attr("height",r-T-l.gridLineStartPadding).attr("transform-origin",function(E,A){return($(E.start)+v+.5*($(E.end)-$(E.start))).toString()+"px "+(A*k+.5*r).toString()+"px"}).attr("class","exclude-range")}function ot(k,T,v,m){var s;let r,h=c.db.getDateFormat();r=c.db.getAxisFormat()||(h==="D"?"%d":(s=l.axisFormat)!=null?s:"%Y-%m-%d");let d=it(3,$).tickSize(-m+T+l.gridLineStartPadding).tickFormat((0,ct.DC)(r)),y=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(c.db.getTickInterval()||l.tickInterval);if(y!==null){let o=y[1],a=y[2],D=c.db.getWeekday()||l.weekday;switch(a){case"millisecond":d.ticks(I.t6.every(o));break;case"second":d.ticks(I.uc.every(o));break;case"minute":d.ticks(I.wX.every(o));break;case"hour":d.ticks(I.Ag.every(o));break;case"day":d.ticks(I.UA.every(o));break;case"week":d.ticks(Me[D].every(o));break;case"month":d.ticks(I.Ui.every(o))}}if(V.append("g").attr("class","grid").attr("transform","translate("+k+", "+(m-50)+")").call(d).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),c.db.topAxisEnabled()||l.topAxis){let o=it(1,$).tickSize(-m+T+l.gridLineStartPadding).tickFormat((0,ct.DC)(r));if(y!==null){let a=y[1],D=y[2],w=c.db.getWeekday()||l.weekday;switch(D){case"millisecond":o.ticks(I.t6.every(a));break;case"second":o.ticks(I.uc.every(a));break;case"minute":o.ticks(I.wX.every(a));break;case"hour":o.ticks(I.Ag.every(a));break;case"day":o.ticks(I.UA.every(a));break;case"week":o.ticks(Me[w].every(a));break;case"month":o.ticks(I.Ui.every(a))}}V.append("g").attr("class","grid").attr("transform","translate("+k+", "+T+")").call(o).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function et(k,T){let v=0,m=Object.keys(_).map(r=>[r,_[r]]);V.append("g").selectAll("text").data(m).enter().append(function(r){let h=r[0].split(e.Y2.lineBreakRegex),u=-(h.length-1)/2,d=M.createElementNS("http://www.w3.org/2000/svg","text");for(let[y,s]of(d.setAttribute("dy",u+"em"),h.entries())){let o=M.createElementNS("http://www.w3.org/2000/svg","tspan");o.setAttribute("alignment-baseline","central"),o.setAttribute("x","10"),y>0&&o.setAttribute("dy","1em"),o.textContent=s,d.appendChild(o)}return d}).attr("x",10).attr("y",function(r,h){if(!(h>0))return r[1]*k/2+T;for(let u=0;u<h;u++)return v+=m[h-1][1],r[1]*k/2+v*k+T}).attr("font-size",l.sectionFontSize).attr("class",function(r){for(let[h,u]of B.entries())if(r[0]===u)return"sectionTitle sectionTitle"+h%l.numberSectionStyles;return"sectionTitle"})}function Q(k,T,v,m){let r=c.db.getTodayMarker();if(r==="off")return;let h=V.append("g").attr("class","today"),u=new Date,d=h.append("line");d.attr("x1",$(u)+k).attr("x2",$(u)+k).attr("y1",l.titleTopMargin).attr("y2",m-l.titleTopMargin).attr("class","today"),r!==""&&d.attr("style",r.replace(/,/g,";"))}function j(k){let T={},v=[];for(let m=0,r=k.length;m<r;++m)Object.prototype.hasOwnProperty.call(T,k[m])||(T[k[m]]=!0,v.push(k[m]));return v}(0,e.K2)(pt,"taskCompare"),W.sort(pt),dt(W,S,x),(0,e.a$)(V,x,S,l.useMaxWidth),V.append("text").text(c.db.getDiagramTitle()).attr("x",S/2).attr("y",l.titleTopMargin).attr("class","titleText"),(0,e.K2)(dt,"makeGantt"),(0,e.K2)(at,"drawRects"),(0,e.K2)(st,"drawExcludeDays"),(0,e.K2)(ot,"makeGrid"),(0,e.K2)(et,"vertLabels"),(0,e.K2)(Q,"drawToday"),(0,e.K2)(j,"checkUnique")},"draw")},styles:(0,e.K2)(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles")}}}]);
