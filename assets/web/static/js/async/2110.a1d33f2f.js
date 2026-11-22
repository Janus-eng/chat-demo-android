"use strict";(self.rspackChunkchat_demo=self.rspackChunkchat_demo||[]).push([[2110],{2669(vt,st,C){var H;C.d(st,{Zk:()=>B,q7:()=>oe,tM:()=>de,u4:()=>he});var Y=C(6982),V=C(4543),it=C(5754),W=C(3218),s=C(8755),D=(function(){var e=(0,s.K2)(function(o,y,p,f){for(p=p||{},f=o.length;f--;p[o[f]]=y);return p},"o"),t=[1,2],i=[1,3],n=[1,4],r=[2,4],l=[1,9],c=[1,11],g=[1,16],u=[1,17],S=[1,18],b=[1,19],T=[1,33],E=[1,20],$=[1,21],I=[1,22],K=[1,23],L=[1,24],d=[1,26],A=[1,27],w=[1,28],R=[1,29],F=[1,30],M=[1,31],U=[1,32],yt=[1,35],gt=[1,36],mt=[1,37],ft=[1,38],Q=[1,34],m=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],St=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,39,40,41,45,48,51,52,53,54,57],Jt=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],Ct={trace:(0,s.K2)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,CLICK:38,STRING:39,HREF:40,classDef:41,CLASSDEF_ID:42,CLASSDEF_STYLEOPTS:43,DEFAULT:44,style:45,STYLE_IDS:46,STYLEDEF_STYLEOPTS:47,class:48,CLASSENTITY_IDS:49,STYLECLASS:50,direction_tb:51,direction_bt:52,direction_rl:53,direction_lr:54,eol:55,";":56,EDGE_STATE:57,STYLE_SEPARATOR:58,left_of:59,right_of:60,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"CLICK",39:"STRING",40:"HREF",41:"classDef",42:"CLASSDEF_ID",43:"CLASSDEF_STYLEOPTS",44:"DEFAULT",45:"style",46:"STYLE_IDS",47:"STYLEDEF_STYLEOPTS",48:"class",49:"CLASSENTITY_IDS",50:"STYLECLASS",51:"direction_tb",52:"direction_bt",53:"direction_rl",54:"direction_lr",56:";",57:"EDGE_STATE",58:"STYLE_SEPARATOR",59:"left_of",60:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[9,5],[9,5],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[55,1],[55,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:(0,s.K2)(function(o,y,p,f,k,a,lt){var h=a.length-1;switch(k){case 3:return f.setRootDoc(a[h]),a[h];case 4:this.$=[];break;case 5:a[h]!="nl"&&(a[h-1].push(a[h]),this.$=a[h-1]);break;case 6:case 7:case 12:this.$=a[h];break;case 8:this.$="nl";break;case 13:let kt=a[h-1];kt.description=f.trimColon(a[h]),this.$=kt;break;case 14:this.$={stmt:"relation",state1:a[h-2],state2:a[h]};break;case 15:let _=f.trimColon(a[h]);this.$={stmt:"relation",state1:a[h-3],state2:a[h-1],description:_};break;case 19:this.$={stmt:"state",id:a[h-3],type:"default",description:"",doc:a[h-1]};break;case 20:var J=a[h],tt=a[h-2].trim();if(a[h].match(":")){var ct=a[h].split(":");J=ct[0],tt=[tt,ct[1]]}this.$={stmt:"state",id:J,type:"default",description:tt};break;case 21:this.$={stmt:"state",id:a[h-3],type:"default",description:a[h-5],doc:a[h-1]};break;case 22:this.$={stmt:"state",id:a[h],type:"fork"};break;case 23:this.$={stmt:"state",id:a[h],type:"join"};break;case 24:this.$={stmt:"state",id:a[h],type:"choice"};break;case 25:this.$={stmt:"state",id:f.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:a[h-1].trim(),note:{position:a[h-2].trim(),text:a[h].trim()}};break;case 29:this.$=a[h].trim(),f.setAccTitle(this.$);break;case 30:case 31:this.$=a[h].trim(),f.setAccDescription(this.$);break;case 32:this.$={stmt:"click",id:a[h-3],url:a[h-2],tooltip:a[h-1]};break;case 33:this.$={stmt:"click",id:a[h-3],url:a[h-1],tooltip:""};break;case 34:case 35:this.$={stmt:"classDef",id:a[h-1].trim(),classes:a[h].trim()};break;case 36:this.$={stmt:"style",id:a[h-1].trim(),styleClass:a[h].trim()};break;case 37:this.$={stmt:"applyClass",id:a[h-1].trim(),styleClass:a[h].trim()};break;case 38:f.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 39:f.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 40:f.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 41:f.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 44:case 45:this.$={stmt:"state",id:a[h].trim(),type:"default",description:""};break;case 46:case 47:this.$={stmt:"state",id:a[h-2].trim(),classes:[a[h].trim()],type:"default",description:""}}},"anonymous"),table:[{3:1,4:t,5:i,6:n},{1:[3]},{3:5,4:t,5:i,6:n},{3:6,4:t,5:i,6:n},e([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],r,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:l,5:c,8:8,9:10,10:12,11:13,12:14,13:15,16:g,17:u,19:S,22:b,24:T,25:E,26:$,27:I,28:K,29:L,32:25,33:d,35:A,37:w,38:R,41:F,45:M,48:U,51:yt,52:gt,53:mt,54:ft,57:Q},e(m,[2,5]),{9:39,10:12,11:13,12:14,13:15,16:g,17:u,19:S,22:b,24:T,25:E,26:$,27:I,28:K,29:L,32:25,33:d,35:A,37:w,38:R,41:F,45:M,48:U,51:yt,52:gt,53:mt,54:ft,57:Q},e(m,[2,7]),e(m,[2,8]),e(m,[2,9]),e(m,[2,10]),e(m,[2,11]),e(m,[2,12],{14:[1,40],15:[1,41]}),e(m,[2,16]),{18:[1,42]},e(m,[2,18],{20:[1,43]}),{23:[1,44]},e(m,[2,22]),e(m,[2,23]),e(m,[2,24]),e(m,[2,25]),{30:45,31:[1,46],59:[1,47],60:[1,48]},e(m,[2,28]),{34:[1,49]},{36:[1,50]},e(m,[2,31]),{13:51,24:T,57:Q},{42:[1,52],44:[1,53]},{46:[1,54]},{49:[1,55]},e(St,[2,44],{58:[1,56]}),e(St,[2,45],{58:[1,57]}),e(m,[2,38]),e(m,[2,39]),e(m,[2,40]),e(m,[2,41]),e(m,[2,6]),e(m,[2,13]),{13:58,24:T,57:Q},e(m,[2,17]),e(Jt,r,{7:59}),{24:[1,60]},{24:[1,61]},{23:[1,62]},{24:[2,48]},{24:[2,49]},e(m,[2,29]),e(m,[2,30]),{39:[1,63],40:[1,64]},{43:[1,65]},{43:[1,66]},{47:[1,67]},{50:[1,68]},{24:[1,69]},{24:[1,70]},e(m,[2,14],{14:[1,71]}),{4:l,5:c,8:8,9:10,10:12,11:13,12:14,13:15,16:g,17:u,19:S,21:[1,72],22:b,24:T,25:E,26:$,27:I,28:K,29:L,32:25,33:d,35:A,37:w,38:R,41:F,45:M,48:U,51:yt,52:gt,53:mt,54:ft,57:Q},e(m,[2,20],{20:[1,73]}),{31:[1,74]},{24:[1,75]},{39:[1,76]},{39:[1,77]},e(m,[2,34]),e(m,[2,35]),e(m,[2,36]),e(m,[2,37]),e(St,[2,46]),e(St,[2,47]),e(m,[2,15]),e(m,[2,19]),e(Jt,r,{7:78}),e(m,[2,26]),e(m,[2,27]),{5:[1,79]},{5:[1,80]},{4:l,5:c,8:8,9:10,10:12,11:13,12:14,13:15,16:g,17:u,19:S,21:[1,81],22:b,24:T,25:E,26:$,27:I,28:K,29:L,32:25,33:d,35:A,37:w,38:R,41:F,45:M,48:U,51:yt,52:gt,53:mt,54:ft,57:Q},e(m,[2,32]),e(m,[2,33]),e(m,[2,21])],defaultActions:{5:[2,1],6:[2,2],47:[2,48],48:[2,49]},parseError:(0,s.K2)(function(o,y){if(y.recoverable)this.trace(o);else{var p=Error(o);throw p.hash=y,p}},"parseError"),parse:(0,s.K2)(function(o){var y=this,p=[0],f=[],k=[null],a=[],lt=this.table,h="",J=0,tt=0,ct=0,kt=a.slice.call(arguments,1),_=Object.create(this.lexer),q={};for(var $t in this.yy)Object.prototype.hasOwnProperty.call(this.yy,$t)&&(q[$t]=this.yy[$t]);_.setInput(o,q),q.lexer=_,q.parser=this,_.yylloc===void 0&&(_.yylloc={});var It=_.yylloc;a.push(It);var ue=_.options&&_.options.ranges;function qt(){var O;return typeof(O=f.pop()||_.lex()||1)!="number"&&(O instanceof Array&&(O=(f=O).pop()),O=y.symbols_[O]||O),O}typeof q.parseError=="function"?this.parseError=q.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,s.K2)(function(O){p.length=p.length-2*O,k.length=k.length-O,a.length=a.length-O},"popStack"),(0,s.K2)(qt,"lex");for(var x,At,Z,N,Zt,_t,j,Qt,Tt,et={};;){if(Z=p[p.length-1],this.defaultActions[Z]?N=this.defaultActions[Z]:(x==null&&(x=qt()),N=lt[Z]&&lt[Z][x]),N===void 0||!N.length||!N[0]){var te="";for(_t in Tt=[],lt[Z])this.terminals_[_t]&&_t>2&&Tt.push("'"+this.terminals_[_t]+"'");te=_.showPosition?"Parse error on line "+(J+1)+`:
`+_.showPosition()+`
Expecting `+Tt.join(", ")+", got '"+(this.terminals_[x]||x)+"'":"Parse error on line "+(J+1)+": Unexpected "+(x==1?"end of input":"'"+(this.terminals_[x]||x)+"'"),this.parseError(te,{text:_.match,token:this.terminals_[x]||x,line:_.yylineno,loc:It,expected:Tt})}if(N[0]instanceof Array&&N.length>1)throw Error("Parse Error: multiple actions possible at state: "+Z+", token: "+x);switch(N[0]){case 1:p.push(x),k.push(_.yytext),a.push(_.yylloc),p.push(N[1]),x=null,At?(x=At,At=null):(tt=_.yyleng,h=_.yytext,J=_.yylineno,It=_.yylloc,ct>0&&ct--);break;case 2:if(j=this.productions_[N[1]][1],et.$=k[k.length-j],et._$={first_line:a[a.length-(j||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(j||1)].first_column,last_column:a[a.length-1].last_column},ue&&(et._$.range=[a[a.length-(j||1)].range[0],a[a.length-1].range[1]]),(Zt=this.performAction.apply(et,[h,tt,J,q,N[1],k,a].concat(kt)))!==void 0)return Zt;j&&(p=p.slice(0,-1*j*2),k=k.slice(0,-1*j),a=a.slice(0,-1*j)),p.push(this.productions_[N[1]][0]),k.push(et.$),a.push(et._$),Qt=lt[p[p.length-2]][p[p.length-1]],p.push(Qt);break;case 3:return!0}}return!0},"parse")};function bt(){this.yy={}}return Ct.lexer={EOF:1,parseError:(0,s.K2)(function(o,y){if(this.yy.parser)this.yy.parser.parseError(o,y);else throw Error(o)},"parseError"),setInput:(0,s.K2)(function(o,y){return this.yy=y||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,s.K2)(function(){var o=this._input[0];return this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o,o.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},"input"),unput:(0,s.K2)(function(o){var y=o.length,p=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-y),this.offset-=y;var f=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),p.length-1&&(this.yylineno-=p.length-1);var k=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:p?(p.length===f.length?this.yylloc.first_column:0)+f[f.length-p.length].length-p[0].length:this.yylloc.first_column-y},this.options.ranges&&(this.yylloc.range=[k[0],k[0]+this.yyleng-y]),this.yyleng=this.yytext.length,this},"unput"),more:(0,s.K2)(function(){return this._more=!0,this},"more"),reject:(0,s.K2)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:(0,s.K2)(function(o){this.unput(this.match.slice(o))},"less"),pastInput:(0,s.K2)(function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,s.K2)(function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,s.K2)(function(){var o=this.pastInput(),y=Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+y+"^"},"showPosition"),test_match:(0,s.K2)(function(o,y){var p,f,k;if(this.options.backtrack_lexer&&(k={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(k.yylloc.range=this.yylloc.range.slice(0))),(f=o[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=f.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:f?f[f.length-1].length-f[f.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],p=this.performAction.call(this,this.yy,this,y,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),p)return p;if(this._backtrack)for(var a in k)this[a]=k[a];return!1},"test_match"),next:(0,s.K2)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var o,y,p,f,k=this._currentRules(),a=0;a<k.length;a++)if((p=this._input.match(this.rules[k[a]]))&&(!y||p[0].length>y[0].length)){if(y=p,f=a,this.options.backtrack_lexer){if((o=this.test_match(p,k[a]))!==!1)return o;if(!this._backtrack)return!1;y=!1;continue}if(!this.options.flex)break}return y?(o=this.test_match(y,k[f]))!==!1&&o:this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,s.K2)(function(){var o=this.next();return o||this.lex()},"lex"),begin:(0,s.K2)(function(o){this.conditionStack.push(o)},"begin"),popState:(0,s.K2)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,s.K2)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,s.K2)(function(o){return(o=this.conditionStack.length-1-Math.abs(o||0))>=0?this.conditionStack[o]:"INITIAL"},"topState"),pushState:(0,s.K2)(function(o){this.begin(o)},"pushState"),stateStackSize:(0,s.K2)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,s.K2)(function(o,y,p,f){switch(p){case 0:return 38;case 1:return 40;case 2:return 39;case 3:return 44;case 4:case 45:return 51;case 5:case 46:return 52;case 6:case 47:return 53;case 7:case 48:return 54;case 8:case 9:case 11:case 12:case 13:case 14:case 57:case 59:case 65:break;case 10:case 80:return 5;case 15:case 35:return this.pushState("SCALE"),17;case 16:case 36:return 18;case 17:case 23:case 37:case 52:case 55:this.popState();break;case 18:return this.begin("acc_title"),33;case 19:return this.popState(),"acc_title_value";case 20:return this.begin("acc_descr"),35;case 21:return this.popState(),"acc_descr_value";case 22:this.begin("acc_descr_multiline");break;case 24:return"acc_descr_multiline_value";case 25:return this.pushState("CLASSDEF"),41;case 26:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 27:return this.popState(),this.pushState("CLASSDEFID"),42;case 28:return this.popState(),43;case 29:return this.pushState("CLASS"),48;case 30:return this.popState(),this.pushState("CLASS_STYLE"),49;case 31:return this.popState(),50;case 32:return this.pushState("STYLE"),45;case 33:return this.popState(),this.pushState("STYLEDEF_STYLES"),46;case 34:return this.popState(),47;case 38:this.pushState("STATE");break;case 39:case 42:return this.popState(),y.yytext=y.yytext.slice(0,-8).trim(),25;case 40:case 43:return this.popState(),y.yytext=y.yytext.slice(0,-8).trim(),26;case 41:case 44:return this.popState(),y.yytext=y.yytext.slice(0,-10).trim(),27;case 49:this.pushState("STATE_STRING");break;case 50:return this.pushState("STATE_ID"),"AS";case 51:case 67:return this.popState(),"ID";case 53:return"STATE_DESCR";case 54:return 19;case 56:return this.popState(),this.pushState("struct"),20;case 58:return this.popState(),21;case 60:return this.begin("NOTE"),29;case 61:return this.popState(),this.pushState("NOTE_ID"),59;case 62:return this.popState(),this.pushState("NOTE_ID"),60;case 63:this.popState(),this.pushState("FLOATING_NOTE");break;case 64:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 66:return"NOTE_TEXT";case 68:return this.popState(),this.pushState("NOTE_TEXT"),24;case 69:return this.popState(),y.yytext=y.yytext.substr(2).trim(),31;case 70:return this.popState(),y.yytext=y.yytext.slice(0,-8).trim(),31;case 71:case 72:return 6;case 73:return 16;case 74:return 57;case 75:return 24;case 76:return y.yytext=y.yytext.trim(),14;case 77:return 15;case 78:return 28;case 79:return 58;case 81:return"INVALID"}},"anonymous"),rules:[/^(?:click\b)/i,/^(?:href\b)/i,/^(?:"[^"]*")/i,/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[12,13],inclusive:!1},struct:{rules:[12,13,25,29,32,38,45,46,47,48,57,58,59,60,74,75,76,77,78],inclusive:!1},FLOATING_NOTE_ID:{rules:[67],inclusive:!1},FLOATING_NOTE:{rules:[64,65,66],inclusive:!1},NOTE_TEXT:{rules:[69,70],inclusive:!1},NOTE_ID:{rules:[68],inclusive:!1},NOTE:{rules:[61,62,63],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[34],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[33],inclusive:!1},CLASS_STYLE:{rules:[31],inclusive:!1},CLASS:{rules:[30],inclusive:!1},CLASSDEFID:{rules:[28],inclusive:!1},CLASSDEF:{rules:[26,27],inclusive:!1},acc_descr_multiline:{rules:[23,24],inclusive:!1},acc_descr:{rules:[21],inclusive:!1},acc_title:{rules:[19],inclusive:!1},SCALE:{rules:[16,17,36,37],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[51],inclusive:!1},STATE_STRING:{rules:[52,53],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[12,13,39,40,41,42,43,44,49,50,54,55,56],inclusive:!1},ID:{rules:[12,13],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,18,20,22,25,29,32,35,38,56,60,71,72,73,74,75,76,77,79,80,81],inclusive:!0}}},(0,s.K2)(bt,"Parser"),bt.prototype=Ct,Ct.Parser=bt,new bt})();D.parser=D;var B=D,P="TB",v="state",G="root",rt="relation",X="default",at="divider",Lt="fill:none",wt="fill: #333",Rt="text",Nt="normal",Et="rect",Dt="rectWithTitle",Ot="divider",Kt="roundedWithTitle",nt="statediagram",ee=`${nt}-state`,Bt="transition",se=`${Bt} note-edge`,ie=`${nt}-note`,re=`${nt}-cluster`,ae=`${nt}-cluster-alt`,Ft="parent",Yt="note",xt="----",ne=`${xt}${Yt}`,Pt=`${xt}${Ft}`,Gt=(0,s.K2)((e,t=P)=>{if(!e.doc)return t;let i=t;for(let n of e.doc)n.stmt==="dir"&&(i=n.value);return i},"getDir"),oe={getClasses:(0,s.K2)(function(e,t){return t.db.getClasses()},"getClasses"),draw:(0,s.K2)(async function(e,t,i,n){var S,b;s.Rm.info("REF0:"),s.Rm.info("Drawing state diagram (v2)",t);let{securityLevel:r,state:l,layout:c}=(0,s.D7)();n.db.extract(n.db.getRootDocV2());let g=n.db.getData(),u=(0,Y.A)(t,r);g.type=n.type,g.layoutAlgorithm=c,g.nodeSpacing=(l==null?void 0:l.nodeSpacing)||50,g.rankSpacing=(l==null?void 0:l.rankSpacing)||50,g.markers=["barb"],g.diagramId=t,await(0,it.XX)(g,u);try{(typeof n.db.getLinks=="function"?n.db.getLinks():new Map).forEach((T,E)=>{var w;let $,I=typeof E=="string"?E:typeof(E==null?void 0:E.id)=="string"?E.id:"";if(!I)return void s.Rm.warn("\u26A0\uFE0F Invalid or missing stateId from key:",JSON.stringify(E));let K=(w=u.node())==null?void 0:w.querySelectorAll("g");if(K==null||K.forEach(R=>{var F;((F=R.textContent)==null?void 0:F.trim())===I&&($=R)}),!$)return void s.Rm.warn("\u26A0\uFE0F Could not find node matching text:",I);let L=$.parentNode;if(!L)return void s.Rm.warn("\u26A0\uFE0F Node has no parent, cannot wrap:",I);let d=document.createElementNS("http://www.w3.org/2000/svg","a"),A=T.url.replace(/^"+|"+$/g,"");if(d.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",A),d.setAttribute("target","_blank"),T.tooltip){let R=T.tooltip.replace(/^"+|"+$/g,"");d.setAttribute("title",R)}L.replaceChild(d,$),d.appendChild($),s.Rm.info("\u{1F517} Wrapped node in <a> tag for:",I,T.url)})}catch(T){s.Rm.error("\u274C Error injecting clickable links:",T)}W._K.insertTitle(u,"statediagramTitleText",(S=l==null?void 0:l.titleTopMargin)!=null?S:25,n.db.getDiagramTitle()),(0,V.P)(u,8,nt,(b=l==null?void 0:l.useMaxWidth)!=null?b:!0)},"draw"),getDir:Gt},ht=new Map,z=0;function dt(e="",t=0,i="",n=xt){let r=i!==null&&i.length>0?`${n}${i}`:"";return`state-${e}${r}-${t}`}(0,s.K2)(dt,"stateDomId");var le=(0,s.K2)((e,t,i,n,r,l,c,g)=>{s.Rm.trace("items",t),t.forEach(u=>{var S;switch(u.stmt){case v:case X:ut(e,u,i,n,r,l,c,g);break;case rt:{ut(e,u.state1,i,n,r,l,c,g),ut(e,u.state2,i,n,r,l,c,g);let b={id:"edge"+z,start:u.state1.id,end:u.state2.id,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:Lt,labelStyle:"",label:s.Y2.sanitizeText((S=u.description)!=null?S:"",(0,s.D7)()),arrowheadStyle:wt,labelpos:"c",labelType:Rt,thickness:Nt,classes:Bt,look:c};r.push(b),z++}}})},"setupDoc"),jt=(0,s.K2)((e,t=P)=>{let i=t;if(e.doc)for(let n of e.doc)n.stmt==="dir"&&(i=n.value);return i},"getDir");function ot(e,t,i){if(!t.id||t.id==="</join></fork>"||t.id==="</choice>")return;t.cssClasses&&(Array.isArray(t.cssCompiledStyles)||(t.cssCompiledStyles=[]),t.cssClasses.split(" ").forEach(r=>{var c;let l=i.get(r);l&&(t.cssCompiledStyles=[...(c=t.cssCompiledStyles)!=null?c:[],...l.styles])}));let n=e.find(r=>r.id===t.id);n?Object.assign(n,t):e.push(t)}function zt(e){var t,i;return(i=(t=e==null?void 0:e.classes)==null?void 0:t.join(" "))!=null?i:""}function Mt(e){var t;return(t=e==null?void 0:e.styles)!=null?t:[]}(0,s.K2)(ot,"insertOrUpdateNode"),(0,s.K2)(zt,"getClassesFromDbInfo"),(0,s.K2)(Mt,"getStylesFromDbInfo");var ut=(0,s.K2)((e,t,i,n,r,l,c,g)=>{var $,I,K;let u=t.id,S=i.get(u),b=zt(S),T=Mt(S),E=(0,s.D7)();if(s.Rm.info("dataFetcher parsedItem",t,S,T),u!=="root"){let L=Et;t.start===!0?L="stateStart":t.start===!1&&(L="stateEnd"),t.type!==X&&(L=t.type),ht.get(u)||ht.set(u,{id:u,shape:L,description:s.Y2.sanitizeText(u,E),cssClasses:`${b} ${ee}`,cssStyles:T});let d=ht.get(u);t.description&&(Array.isArray(d.description)?(d.shape=Dt,d.description.push(t.description)):($=d.description)!=null&&$.length&&d.description.length>0?(d.shape=Dt,d.description===u?d.description=[t.description]:d.description=[d.description,t.description]):(d.shape=Et,d.description=t.description),d.description=s.Y2.sanitizeTextOrArray(d.description,E)),((I=d.description)==null?void 0:I.length)===1&&d.shape===Dt&&(d.type==="group"?d.shape=Kt:d.shape=Et),!d.type&&t.doc&&(s.Rm.info("Setting cluster for XCX",u,jt(t)),d.type="group",d.isGroup=!0,d.dir=jt(t),d.shape=t.type===at?Ot:Kt,d.cssClasses=`${d.cssClasses} ${re} ${l?ae:""}`);let A={labelStyle:"",shape:d.shape,label:d.description,cssClasses:d.cssClasses,cssCompiledStyles:[],cssStyles:d.cssStyles,id:u,dir:d.dir,domId:dt(u,z),type:d.type,isGroup:d.type==="group",padding:8,rx:10,ry:10,look:c};if(A.shape===Ot&&(A.label=""),e&&e.id!=="root"&&(s.Rm.trace("Setting node ",u," to be child of its parent ",e.id),A.parentId=e.id),A.centerLabel=!0,t.note){let w={labelStyle:"",shape:"note",label:t.note.text,cssClasses:ie,cssStyles:[],cssCompiledStyles:[],id:u+ne+"-"+z,domId:dt(u,z,Yt),type:d.type,isGroup:d.type==="group",padding:(K=E.flowchart)==null?void 0:K.padding,look:c,position:t.note.position},R=u+Pt,F={labelStyle:"",shape:"noteGroup",label:t.note.text,cssClasses:d.cssClasses,cssStyles:[],id:u+Pt,domId:dt(u,z,Ft),type:"group",isGroup:!0,padding:16,look:c,position:t.note.position};z++,F.id=R,w.parentId=R,ot(n,F,g),ot(n,w,g),ot(n,A,g);let M=u,U=w.id;t.note.position==="left of"&&(M=w.id,U=u),r.push({id:M+"-"+U,start:M,end:U,arrowhead:"none",arrowTypeEnd:"",style:Lt,labelStyle:"",classes:se,arrowheadStyle:wt,labelpos:"c",labelType:Rt,thickness:Nt,look:c})}else ot(n,A,g)}t.doc&&(s.Rm.trace("Adding nodes children "),le(t,t.doc,i,n,r,!l,c,g))},"dataFetcher"),ce=(0,s.K2)(()=>{ht.clear(),z=0},"reset"),Ut="start",Vt="color",Wt="fill",Xt=(0,s.K2)(()=>new Map,"newClassesList"),Ht=(0,s.K2)(()=>({relations:[],states:new Map,documents:{}}),"newDoc"),pt=(0,s.K2)(e=>JSON.parse(JSON.stringify(e)),"clone"),he=(H=class{constructor(t){this.version=t,this.nodes=[],this.edges=[],this.rootDoc=[],this.classes=Xt(),this.documents={root:Ht()},this.currentDocument=this.documents.root,this.startEndCount=0,this.dividerCnt=0,this.links=new Map,this.getAccTitle=s.iN,this.setAccTitle=s.SV,this.getAccDescription=s.m7,this.setAccDescription=s.EI,this.setDiagramTitle=s.ke,this.getDiagramTitle=s.ab,this.clear(),this.setRootDoc=this.setRootDoc.bind(this),this.getDividerId=this.getDividerId.bind(this),this.setDirection=this.setDirection.bind(this),this.trimColon=this.trimColon.bind(this)}extract(t){for(let r of(this.clear(!0),Array.isArray(t)?t:t.doc))switch(r.stmt){case v:this.addState(r.id.trim(),r.type,r.doc,r.description,r.note);break;case rt:this.addRelation(r.state1,r.state2,r.description);break;case"classDef":this.addStyleClass(r.id.trim(),r.classes);break;case"style":this.handleStyleDef(r);break;case"applyClass":this.setCssClass(r.id.trim(),r.styleClass);break;case"click":this.addLink(r.id,r.url,r.tooltip)}let i=this.getStates(),n=(0,s.D7)();for(let r of(ce(),ut(void 0,this.getRootDocV2(),i,this.nodes,this.edges,!0,n.look,this.classes),this.nodes))if(Array.isArray(r.label)){if(r.description=r.label.slice(1),r.isGroup&&r.description.length>0)throw Error(`Group nodes can only have label. Remove the additional description for node [${r.id}]`);r.label=r.label[0]}}handleStyleDef(t){let i=t.id.trim().split(","),n=t.styleClass.split(",");for(let r of i){let l=this.getState(r);if(!l){let c=r.trim();this.addState(c),l=this.getState(c)}l&&(l.styles=n.map(c=>{var g;return(g=c.replace(/;/g,""))==null?void 0:g.trim()}))}}setRootDoc(t){s.Rm.info("Setting root doc",t),this.rootDoc=t,this.version===1?this.extract(t):this.extract(this.getRootDocV2())}docTranslator(t,i,n){if(i.stmt===rt){this.docTranslator(t,i.state1,!0),this.docTranslator(t,i.state2,!1);return}if(i.stmt===v&&(i.id==="[*]"?(i.id=t.id+(n?"_start":"_end"),i.start=n):i.id=i.id.trim()),i.stmt!==G&&i.stmt!==v||!i.doc)return;let r=[],l=[];for(let c of i.doc)if(c.type===at){let g=pt(c);g.doc=pt(l),r.push(g),l=[]}else l.push(c);if(r.length>0&&l.length>0){let c={stmt:v,id:(0,W.$C)(),type:"divider",doc:pt(l)};r.push(pt(c)),i.doc=r}i.doc.forEach(c=>this.docTranslator(i,c,!0))}getRootDocV2(){return this.docTranslator({id:G,stmt:G},{id:G,stmt:G,doc:this.rootDoc},!0),{id:G,doc:this.rootDoc}}addState(t,i=X,n,r,l,c,g,u){let S=t==null?void 0:t.trim();if(this.currentDocument.states.has(S)){let b=this.currentDocument.states.get(S);if(!b)throw Error(`State not found: ${S}`);b.doc||(b.doc=n),b.type||(b.type=i)}else s.Rm.info("Adding state ",S,r),this.currentDocument.states.set(S,{stmt:v,id:S,descriptions:[],type:i,doc:n,note:l,classes:[],styles:[],textStyles:[]});if(r&&(s.Rm.info("Setting state description",S,r),(Array.isArray(r)?r:[r]).forEach(b=>this.addDescription(S,b.trim()))),l){let b=this.currentDocument.states.get(S);if(!b)throw Error(`State not found: ${S}`);b.note=l,b.note.text=s.Y2.sanitizeText(b.note.text,(0,s.D7)())}c&&(s.Rm.info("Setting state classes",S,c),(Array.isArray(c)?c:[c]).forEach(b=>this.setCssClass(S,b.trim()))),g&&(s.Rm.info("Setting state styles",S,g),(Array.isArray(g)?g:[g]).forEach(b=>this.setStyle(S,b.trim()))),u&&(s.Rm.info("Setting state styles",S,g),(Array.isArray(u)?u:[u]).forEach(b=>this.setTextStyle(S,b.trim())))}clear(t){this.nodes=[],this.edges=[],this.documents={root:Ht()},this.currentDocument=this.documents.root,this.startEndCount=0,this.classes=Xt(),t||(this.links=new Map,(0,s.IU)())}getState(t){return this.currentDocument.states.get(t)}getStates(){return this.currentDocument.states}logDocuments(){s.Rm.info("Documents = ",this.documents)}getRelations(){return this.currentDocument.relations}addLink(t,i,n){this.links.set(t,{url:i,tooltip:n}),s.Rm.warn("Adding link",t,i,n)}getLinks(){return this.links}startIdIfNeeded(t=""){return t==="[*]"?(this.startEndCount++,`${Ut}${this.startEndCount}`):t}startTypeIfNeeded(t="",i=X){return t==="[*]"?Ut:i}endIdIfNeeded(t=""){return t==="[*]"?(this.startEndCount++,`end${this.startEndCount}`):t}endTypeIfNeeded(t="",i=X){return t==="[*]"?"end":i}addRelationObjs(t,i,n=""){let r=this.startIdIfNeeded(t.id.trim()),l=this.startTypeIfNeeded(t.id.trim(),t.type),c=this.startIdIfNeeded(i.id.trim()),g=this.startTypeIfNeeded(i.id.trim(),i.type);this.addState(r,l,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),this.addState(c,g,i.doc,i.description,i.note,i.classes,i.styles,i.textStyles),this.currentDocument.relations.push({id1:r,id2:c,relationTitle:s.Y2.sanitizeText(n,(0,s.D7)())})}addRelation(t,i,n){if(typeof t=="object"&&typeof i=="object")this.addRelationObjs(t,i,n);else if(typeof t=="string"&&typeof i=="string"){let r=this.startIdIfNeeded(t.trim()),l=this.startTypeIfNeeded(t),c=this.endIdIfNeeded(i.trim()),g=this.endTypeIfNeeded(i);this.addState(r,l),this.addState(c,g),this.currentDocument.relations.push({id1:r,id2:c,relationTitle:n?s.Y2.sanitizeText(n,(0,s.D7)()):void 0})}}addDescription(t,i){var l;let n=this.currentDocument.states.get(t),r=i.startsWith(":")?i.replace(":","").trim():i;(l=n==null?void 0:n.descriptions)==null||l.push(s.Y2.sanitizeText(r,(0,s.D7)()))}cleanupLabel(t){return t.startsWith(":")?t.slice(2).trim():t.trim()}getDividerId(){return this.dividerCnt++,`divider-id-${this.dividerCnt}`}addStyleClass(t,i=""){this.classes.has(t)||this.classes.set(t,{id:t,styles:[],textStyles:[]});let n=this.classes.get(t);i&&n&&i.split(",").forEach(r=>{let l=r.replace(/([^;]*);/,"$1").trim();if(RegExp(Vt).exec(r)){let c=l.replace(Wt,"bgFill").replace(Vt,Wt);n.textStyles.push(c)}n.styles.push(l)})}getClasses(){return this.classes}setCssClass(t,i){t.split(",").forEach(n=>{var l;let r=this.getState(n);if(!r){let c=n.trim();this.addState(c),r=this.getState(c)}(l=r==null?void 0:r.classes)==null||l.push(i)})}setStyle(t,i){var n,r;(r=(n=this.getState(t))==null?void 0:n.styles)==null||r.push(i)}setTextStyle(t,i){var n,r;(r=(n=this.getState(t))==null?void 0:n.textStyles)==null||r.push(i)}getDirectionStatement(){return this.rootDoc.find(t=>t.stmt==="dir")}getDirection(){var t,i;return(i=(t=this.getDirectionStatement())==null?void 0:t.value)!=null?i:"TB"}setDirection(t){let i=this.getDirectionStatement();i?i.value=t:this.rootDoc.unshift({stmt:"dir",value:t})}trimColon(t){return t.startsWith(":")?t.slice(1).trim():t.trim()}getData(){let t=(0,s.D7)();return{nodes:this.nodes,edges:this.edges,other:{},config:t,direction:Gt(this.getRootDocV2())}}getConfig(){return(0,s.D7)().state}},(0,s.K2)(H,"StateDB"),H.relationType={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},H),de=(0,s.K2)(e=>`
defs #statediagram-barbEnd {
    fill: ${e.transitionColor};
    stroke: ${e.transitionColor};
  }
g.stateGroup text {
  fill: ${e.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${e.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${e.stateLabelColor};
}

g.stateGroup rect {
  fill: ${e.mainBkg};
  stroke: ${e.nodeBorder};
}

g.stateGroup line {
  stroke: ${e.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${e.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${e.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${e.noteBorderColor};
  fill: ${e.noteBkgColor};

  text {
    fill: ${e.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${e.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${e.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${e.edgeLabelBackground};
  p {
    background-color: ${e.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${e.edgeLabelBackground};
    fill: ${e.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${e.transitionLabelColor||e.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${e.transitionLabelColor||e.tertiaryTextColor};
}

.stateLabel text {
  fill: ${e.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${e.specialStateColor};
  stroke: ${e.specialStateColor};
}

.node .fork-join {
  fill: ${e.specialStateColor};
  stroke: ${e.specialStateColor};
}

.node circle.state-end {
  fill: ${e.innerEndBackground};
  stroke: ${e.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${e.compositeBackground||e.background};
  // stroke: ${e.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${e.stateBkg||e.mainBkg};
  stroke: ${e.stateBorder||e.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${e.mainBkg};
  stroke: ${e.stateBorder||e.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${e.lineColor};
}

.statediagram-cluster rect {
  fill: ${e.compositeTitleBackground};
  stroke: ${e.stateBorder||e.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${e.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${e.stateBorder||e.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${e.compositeBackground||e.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${e.altBackground?e.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${e.altBackground?e.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${e.noteBkgColor};
  stroke: ${e.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${e.noteBkgColor};
  stroke: ${e.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${e.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${e.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${e.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${e.lineColor};
  stroke: ${e.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${e.textColor};
}
`,"getStyles")},4543(vt,st,C){C.d(st,{P:()=>V});var Y=C(8755),V=(0,Y.K2)((s,D,B,P)=>{s.attr("class",B);let{width:v,height:G,x:rt,y:X}=it(s,D);(0,Y.a$)(s,G,v,P);let at=W(rt,X,v,G,D);s.attr("viewBox",at),Y.Rm.debug(`viewBox configured: ${at} with padding: ${D}`)},"setupViewPortForSVG"),it=(0,Y.K2)((s,D)=>{var P;let B=((P=s.node())==null?void 0:P.getBBox())||{width:0,height:0,x:0,y:0};return{width:B.width+2*D,height:B.height+2*D,x:B.x,y:B.y}},"calculateDimensionsWithPadding"),W=(0,Y.K2)((s,D,B,P,v)=>`${s-v} ${D-v} ${B} ${P}`,"createViewBox")},6982(vt,st,C){C.d(st,{A:()=>it});var Y=C(8755),V=C(6040),it=(0,Y.K2)((W,s)=>{let D;return s==="sandbox"&&(D=(0,V.Lt)("#i"+W)),(s==="sandbox"?(0,V.Lt)(D.nodes()[0].contentDocument.body):(0,V.Lt)("body")).select(`[id="${W}"]`)},"getDiagramElement")}}]);
