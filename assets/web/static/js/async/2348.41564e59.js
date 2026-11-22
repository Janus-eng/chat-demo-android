"use strict";(self.rspackChunkchat_demo=self.rspackChunkchat_demo||[]).push([[2348],{8987(nt,N,M){M.d(N,{o:()=>K});var K=(0,M(8755).K2)(()=>`
  /* Font Awesome icon styling - consolidated */
  .label-icon {
    display: inline-block;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
  }
  
  .node .label-icon path {
    fill: currentColor;
    stroke: revert;
    stroke-width: revert;
  }
`,"getIconStyles")},3860(nt,N,M){M.d(N,{CP:()=>F,HT:()=>V,PB:()=>W,aC:()=>Y,lC:()=>z,m:()=>H,tk:()=>n});var K=M(8755),X=M(4674),n=(0,K.K2)((v,y)=>{let k=v.append("rect");if(k.attr("x",y.x),k.attr("y",y.y),k.attr("fill",y.fill),k.attr("stroke",y.stroke),k.attr("width",y.width),k.attr("height",y.height),y.name&&k.attr("name",y.name),y.rx&&k.attr("rx",y.rx),y.ry&&k.attr("ry",y.ry),y.attrs!==void 0)for(let b in y.attrs)k.attr(b,y.attrs[b]);return y.class&&k.attr("class",y.class),k},"drawRect"),z=(0,K.K2)((v,y)=>{n(v,{x:y.startx,y:y.starty,width:y.stopx-y.startx,height:y.stopy-y.starty,fill:y.fill,stroke:y.stroke,class:"rect"}).lower()},"drawBackgroundRect"),H=(0,K.K2)((v,y)=>{let k=y.text.replace(K.H1," "),b=v.append("text");b.attr("x",y.x),b.attr("y",y.y),b.attr("class","legend"),b.style("text-anchor",y.anchor),y.class&&b.attr("class",y.class);let T=b.append("tspan");return T.attr("x",y.x+2*y.textMargin),T.text(k),b},"drawText"),Y=(0,K.K2)((v,y,k,b)=>{let T=v.append("image");T.attr("x",y),T.attr("y",k);let q=(0,X.J)(b);T.attr("xlink:href",q)},"drawImage"),F=(0,K.K2)((v,y,k,b)=>{let T=v.append("use");T.attr("x",y),T.attr("y",k);let q=(0,X.J)(b);T.attr("xlink:href",`#${q}`)},"drawEmbeddedImage"),W=(0,K.K2)(()=>({x:0,y:0,width:100,height:100,fill:"#EDF2AE",stroke:"#666",anchor:"start",rx:0,ry:0}),"getNoteRect"),V=(0,K.K2)(()=>({x:0,y:0,width:100,height:100,"text-anchor":"start",style:"#666",textMargin:0,rx:0,ry:0,tspan:!0}),"getTextObj")},711(nt,N,M){M.d(N,{diagram:()=>Et});var K=M(3860),X=M(8987),n=M(8755),z=M(6040),H=M(2631),Y=(function(){var t=(0,n.K2)(function(i,r,o,u){for(o=o||{},u=i.length;u--;o[i[u]]=r);return o},"o"),e=[6,8,10,11,12,14,16,17,18],a=[1,9],c=[1,10],s=[1,11],h=[1,12],p=[1,13],f=[1,14],g={trace:(0,n.K2)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,taskName:18,taskData:19,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",18:"taskName",19:"taskData"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,2]],performAction:(0,n.K2)(function(i,r,o,u,d,l,w){var m=l.length-1;switch(d){case 1:return l[m-1];case 2:case 6:case 7:this.$=[];break;case 3:l[m-1].push(l[m]),this.$=l[m-1];break;case 4:case 5:this.$=l[m];break;case 8:u.setDiagramTitle(l[m].substr(6)),this.$=l[m].substr(6);break;case 9:this.$=l[m].trim(),u.setAccTitle(this.$);break;case 10:case 11:this.$=l[m].trim(),u.setAccDescription(this.$);break;case 12:u.addSection(l[m].substr(8)),this.$=l[m].substr(8);break;case 13:u.addTask(l[m-1],l[m]),this.$="task"}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:a,12:c,14:s,16:h,17:p,18:f},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:15,11:a,12:c,14:s,16:h,17:p,18:f},t(e,[2,5]),t(e,[2,6]),t(e,[2,8]),{13:[1,16]},{15:[1,17]},t(e,[2,11]),t(e,[2,12]),{19:[1,18]},t(e,[2,4]),t(e,[2,9]),t(e,[2,10]),t(e,[2,13])],defaultActions:{},parseError:(0,n.K2)(function(i,r){if(r.recoverable)this.trace(i);else{var o=Error(i);throw o.hash=r,o}},"parseError"),parse:(0,n.K2)(function(i){var r=this,o=[0],u=[],d=[null],l=[],w=this.table,m="",E=0,J=0,O=0,St=l.slice.call(arguments,1),_=Object.create(this.lexer),B={};for(var tt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,tt)&&(B[tt]=this.yy[tt]);_.setInput(i,B),B.lexer=_,B.parser=this,_.yylloc===void 0&&(_.yylloc={});var et=_.yylloc;l.push(et);var It=_.options&&_.options.ranges;function yt(){var I;return typeof(I=u.pop()||_.lex()||1)!="number"&&(I instanceof Array&&(I=(u=I).pop()),I=r.symbols_[I]||I),I}typeof B.parseError=="function"?this.parseError=B.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,n.K2)(function(I){o.length=o.length-2*I,d.length=d.length-I,l.length=l.length-I},"popStack"),(0,n.K2)(yt,"lex");for(var $,it,L,S,dt,G,j,ft,Z,R={};;){if(L=o[o.length-1],this.defaultActions[L]?S=this.defaultActions[L]:($==null&&($=yt()),S=w[L]&&w[L][$]),S===void 0||!S.length||!S[0]){var gt="";for(G in Z=[],w[L])this.terminals_[G]&&G>2&&Z.push("'"+this.terminals_[G]+"'");gt=_.showPosition?"Parse error on line "+(E+1)+`:
`+_.showPosition()+`
Expecting `+Z.join(", ")+", got '"+(this.terminals_[$]||$)+"'":"Parse error on line "+(E+1)+": Unexpected "+($==1?"end of input":"'"+(this.terminals_[$]||$)+"'"),this.parseError(gt,{text:_.match,token:this.terminals_[$]||$,line:_.yylineno,loc:et,expected:Z})}if(S[0]instanceof Array&&S.length>1)throw Error("Parse Error: multiple actions possible at state: "+L+", token: "+$);switch(S[0]){case 1:o.push($),d.push(_.yytext),l.push(_.yylloc),o.push(S[1]),$=null,it?($=it,it=null):(J=_.yyleng,m=_.yytext,E=_.yylineno,et=_.yylloc,O>0&&O--);break;case 2:if(j=this.productions_[S[1]][1],R.$=d[d.length-j],R._$={first_line:l[l.length-(j||1)].first_line,last_line:l[l.length-1].last_line,first_column:l[l.length-(j||1)].first_column,last_column:l[l.length-1].last_column},It&&(R._$.range=[l[l.length-(j||1)].range[0],l[l.length-1].range[1]]),(dt=this.performAction.apply(R,[m,J,E,B,S[1],d,l].concat(St)))!==void 0)return dt;j&&(o=o.slice(0,-1*j*2),d=d.slice(0,-1*j),l=l.slice(0,-1*j)),o.push(this.productions_[S[1]][0]),d.push(R.$),l.push(R._$),ft=w[o[o.length-2]][o[o.length-1]],o.push(ft);break;case 3:return!0}}return!0},"parse")};function x(){this.yy={}}return g.lexer={EOF:1,parseError:(0,n.K2)(function(i,r){if(this.yy.parser)this.yy.parser.parseError(i,r);else throw Error(i)},"parseError"),setInput:(0,n.K2)(function(i,r){return this.yy=r||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,n.K2)(function(){var i=this._input[0];return this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i,i.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},"input"),unput:(0,n.K2)(function(i){var r=i.length,o=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r),this.offset-=r;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),o.length-1&&(this.yylineno-=o.length-1);var d=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:o?(o.length===u.length?this.yylloc.first_column:0)+u[u.length-o.length].length-o[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[d[0],d[0]+this.yyleng-r]),this.yyleng=this.yytext.length,this},"unput"),more:(0,n.K2)(function(){return this._more=!0,this},"more"),reject:(0,n.K2)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:(0,n.K2)(function(i){this.unput(this.match.slice(i))},"less"),pastInput:(0,n.K2)(function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,n.K2)(function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,n.K2)(function(){var i=this.pastInput(),r=Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+r+"^"},"showPosition"),test_match:(0,n.K2)(function(i,r){var o,u,d;if(this.options.backtrack_lexer&&(d={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(d.yylloc.range=this.yylloc.range.slice(0))),(u=i[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],o=this.performAction.call(this,this.yy,this,r,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),o)return o;if(this._backtrack)for(var l in d)this[l]=d[l];return!1},"test_match"),next:(0,n.K2)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var i,r,o,u,d=this._currentRules(),l=0;l<d.length;l++)if((o=this._input.match(this.rules[d[l]]))&&(!r||o[0].length>r[0].length)){if(r=o,u=l,this.options.backtrack_lexer){if((i=this.test_match(o,d[l]))!==!1)return i;if(!this._backtrack)return!1;r=!1;continue}if(!this.options.flex)break}return r?(i=this.test_match(r,d[u]))!==!1&&i:this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,n.K2)(function(){var i=this.next();return i||this.lex()},"lex"),begin:(0,n.K2)(function(i){this.conditionStack.push(i)},"begin"),popState:(0,n.K2)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,n.K2)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,n.K2)(function(i){return(i=this.conditionStack.length-1-Math.abs(i||0))>=0?this.conditionStack[i]:"INITIAL"},"topState"),pushState:(0,n.K2)(function(i){this.begin(i)},"pushState"),stateStackSize:(0,n.K2)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,n.K2)(function(i,r,o,u){switch(o){case 0:case 1:case 3:case 4:break;case 2:return 10;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 18;case 16:return 19;case 17:return":";case 18:return 6;case 19:return"INVALID"}},"anonymous"),rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18,19],inclusive:!0}}},(0,n.K2)(x,"Parser"),x.prototype=g,g.Parser=x,new x})();Y.parser=Y;var F="",W=[],V=[],v=[],y=(0,n.K2)(function(){W.length=0,V.length=0,F="",v.length=0,(0,n.IU)()},"clear"),k=(0,n.K2)(function(t){F=t,W.push(t)},"addSection"),b=(0,n.K2)(function(){return W},"getSections"),T=(0,n.K2)(function(){let t=rt(),e=0;for(;!t&&e<100;)t=rt(),e++;return V.push(...v),V},"getTasks"),q=(0,n.K2)(function(){let t=[];return V.forEach(e=>{e.people&&t.push(...e.people)}),[...new Set(t)].sort()},"updateActors"),xt=(0,n.K2)(function(t,e){let a=e.substr(1).split(":"),c=0,s=[];a.length===1?(c=Number(a[0]),s=[]):(c=Number(a[0]),s=a[1].split(","));let h=s.map(f=>f.trim()),p={section:F,type:F,people:h,task:t,score:c};v.push(p)},"addTask"),mt=(0,n.K2)(function(t){let e={section:F,type:F,description:t,task:t,classes:[]};V.push(e)},"addTaskOrg"),rt=(0,n.K2)(function(){let t=(0,n.K2)(function(a){return v[a].processed},"compileTask"),e=!0;for(let[a,c]of v.entries())t(a),e=e&&c.processed;return e},"compileTasks"),kt=(0,n.K2)(function(){return q()},"getActors"),st={getConfig:(0,n.K2)(()=>(0,n.D7)().journey,"getConfig"),clear:y,setDiagramTitle:n.ke,getDiagramTitle:n.ab,setAccTitle:n.SV,getAccTitle:n.iN,setAccDescription:n.EI,getAccDescription:n.m7,addSection:k,getSections:b,getTasks:T,addTask:xt,addTaskOrg:mt,getActors:kt},_t=(0,n.K2)(t=>`.label {
    font-family: ${t.fontFamily};
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
    font-family: ${t.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor?`fill: ${t.faceColor}`:"fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${t.fontFamily};
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0?`fill: ${t.fillType0}`:""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0?`fill: ${t.fillType1}`:""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0?`fill: ${t.fillType2}`:""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0?`fill: ${t.fillType3}`:""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0?`fill: ${t.fillType4}`:""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0?`fill: ${t.fillType5}`:""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0?`fill: ${t.fillType6}`:""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0?`fill: ${t.fillType7}`:""};
  }

  .actor-0 {
    ${t.actor0?`fill: ${t.actor0}`:""};
  }
  .actor-1 {
    ${t.actor1?`fill: ${t.actor1}`:""};
  }
  .actor-2 {
    ${t.actor2?`fill: ${t.actor2}`:""};
  }
  .actor-3 {
    ${t.actor3?`fill: ${t.actor3}`:""};
  }
  .actor-4 {
    ${t.actor4?`fill: ${t.actor4}`:""};
  }
  .actor-5 {
    ${t.actor5?`fill: ${t.actor5}`:""};
  }
  ${(0,X.o)()}
`,"getStyles"),at=(0,n.K2)(function(t,e){return(0,K.tk)(t,e)},"drawRect"),bt=(0,n.K2)(function(t,e){let a=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),c=t.append("g");function s(f){let g=(0,H.JL)().startAngle(Math.PI/2).endAngle(Math.PI/2*3).innerRadius(7.5).outerRadius(6.8181818181818175);f.append("path").attr("class","mouth").attr("d",g).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}function h(f){let g=(0,H.JL)().startAngle(3*Math.PI/2).endAngle(Math.PI/2*5).innerRadius(7.5).outerRadius(6.8181818181818175);f.append("path").attr("class","mouth").attr("d",g).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}function p(f){f.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return c.append("circle").attr("cx",e.cx-5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),c.append("circle").attr("cx",e.cx+5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),(0,n.K2)(s,"smile"),(0,n.K2)(h,"sad"),(0,n.K2)(p,"ambivalent"),e.score>3?s(c):e.score<3?h(c):p(c),a},"drawFace"),lt=(0,n.K2)(function(t,e){let a=t.append("circle");return a.attr("cx",e.cx),a.attr("cy",e.cy),a.attr("class","actor-"+e.pos),a.attr("fill",e.fill),a.attr("stroke",e.stroke),a.attr("r",e.r),a.class!==void 0&&a.attr("class",a.class),e.title!==void 0&&a.append("title").text(e.title),a},"drawCircle"),Kt=(0,n.K2)(function(t,e){return(0,K.m)(t,e)},"drawText"),vt=(0,n.K2)(function(t,e,a){let c=t.append("g"),s=(0,K.PB)();s.x=e.x,s.y=e.y,s.fill=e.fill,s.width=a.width*e.taskCount+a.diagramMarginX*(e.taskCount-1),s.height=a.height,s.class="journey-section section-type-"+e.num,s.rx=3,s.ry=3,at(c,s),ct(a)(e.text,c,s.x,s.y,s.width,s.height,{class:"journey-section section-type-"+e.num},a,e.colour)},"drawSection"),ot=-1,wt=(0,n.K2)(function(t,e,a){let c=e.x+a.width/2,s=t.append("g");ot++,s.append("line").attr("id","task"+ot).attr("x1",c).attr("y1",e.y).attr("x2",c).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),bt(s,{cx:c,cy:300+(5-e.score)*30,score:e.score});let h=(0,K.PB)();h.x=e.x,h.y=e.y,h.fill=e.fill,h.width=a.width,h.height=a.height,h.class="task task-type-"+e.num,h.rx=3,h.ry=3,at(s,h);let p=e.x+14;e.people.forEach(f=>{let g=e.actors[f].color;lt(s,{cx:p,cy:e.y,r:7,fill:g,stroke:"#000",title:f,pos:e.actors[f].position}),p+=10}),ct(a)(e.task,s,h.x,h.y,h.width,h.height,{class:"task"},a,e.colour)},"drawTask"),ct=(function(){function t(s,h,p,f,g,x,i,r){c(h.append("text").attr("x",p+g/2).attr("y",f+x/2+5).style("font-color",r).style("text-anchor","middle").text(s),i)}function e(s,h,p,f,g,x,i,r,o){let{taskFontSize:u,taskFontFamily:d}=r,l=s.split(/<br\s*\/?>/gi);for(let w=0;w<l.length;w++){let m=w*u-u*(l.length-1)/2,E=h.append("text").attr("x",p+g/2).attr("y",f).attr("fill",o).style("text-anchor","middle").style("font-size",u).style("font-family",d);E.append("tspan").attr("x",p+g/2).attr("dy",m).text(l[w]),E.attr("y",f+x/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),c(E,i)}}function a(s,h,p,f,g,x,i,r){let o=h.append("switch"),u=o.append("foreignObject").attr("x",p).attr("y",f).attr("width",g).attr("height",x).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");u.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(s),e(s,o,p,f,g,x,i,r),c(u,i)}function c(s,h){for(let p in h)p in h&&s.attr(p,h[p])}return(0,n.K2)(t,"byText"),(0,n.K2)(e,"byTspan"),(0,n.K2)(a,"byFo"),(0,n.K2)(c,"_setTextAttrs"),function(s){return s.textPlacement==="fo"?a:s.textPlacement==="old"?t:e}})(),$t=(0,n.K2)(function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},"initGraphics"),Mt=(0,n.K2)(function(t){Object.keys(t).forEach(function(e){P[e]=t[e]})},"setConf"),A={},U=0;function ht(t){let e=(0,n.D7)().journey,a=e.maxLabelWidth;U=0;let c=60;Object.keys(A).forEach(s=>{let h=A[s].color;lt(t,{cx:20,cy:c,r:7,fill:h,stroke:"#000",pos:A[s].position});let p=t.append("text").attr("visibility","hidden").text(s),f=p.node().getBoundingClientRect().width;p.remove();let g=[];if(f<=a)g=[s];else{let x=s.split(" "),i="";p=t.append("text").attr("visibility","hidden"),x.forEach(r=>{let o=i?`${i} ${r}`:r;if(p.text(o),p.node().getBoundingClientRect().width>a){if(i&&g.push(i),i=r,p.text(r),p.node().getBoundingClientRect().width>a){let u="";for(let d of r)u+=d,p.text(u+"-"),p.node().getBoundingClientRect().width>a&&(g.push(u.slice(0,-1)+"-"),u=d);i=u}}else i=o}),i&&g.push(i),p.remove()}g.forEach((x,i)=>{var o;let r=Kt(t,{x:40,y:c+7+20*i,fill:"#666",text:x,textMargin:(o=e.boxTextMargin)!=null?o:5}).node().getBoundingClientRect().width;r>U&&r>e.leftMargin-r&&(U=r)}),c+=Math.max(20,20*g.length)})}(0,n.K2)(ht,"drawActorLegend");var P=(0,n.D7)().journey,D=0,Tt=(0,n.K2)(function(t,e,a,c){let s,h=(0,n.D7)(),p=h.journey.titleColor,f=h.journey.titleFontSize,g=h.journey.titleFontFamily,x=h.securityLevel;x==="sandbox"&&(s=(0,z.Lt)("#i"+e));let i=x==="sandbox"?(0,z.Lt)(s.nodes()[0].contentDocument.body):(0,z.Lt)("body");C.init();let r=i.select("#"+e);$t(r);let o=c.db.getTasks(),u=c.db.getDiagramTitle(),d=c.db.getActors();for(let O in A)delete A[O];let l=0;d.forEach(O=>{A[O]={color:P.actorColours[l%P.actorColours.length],position:l},l++}),ht(r),D=P.leftMargin+U,C.insert(0,0,D,50*Object.keys(A).length),Ct(r,o,0);let w=C.getBounds();u&&r.append("text").text(u).attr("x",D).attr("font-size",f).attr("font-weight","bold").attr("y",25).attr("fill",p).attr("font-family",g);let m=w.stopy-w.starty+2*P.diagramMarginY,E=D+w.stopx+2*P.diagramMarginX;(0,n.a$)(r,m,E,P.useMaxWidth),r.append("line").attr("x1",D).attr("y1",4*P.height).attr("x2",E-D-4).attr("y2",4*P.height).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");let J=70*!!u;r.attr("viewBox",`${w.startx} -25 ${E} ${m+J}`),r.attr("preserveAspectRatio","xMinYMin meet"),r.attr("height",m+J+25)},"draw"),C={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:(0,n.K2)(function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},"init"),updateVal:(0,n.K2)(function(t,e,a,c){t[e]===void 0?t[e]=a:t[e]=c(a,t[e])},"updateVal"),updateBounds:(0,n.K2)(function(t,e,a,c){let s=(0,n.D7)().journey,h=this,p=0;function f(g){return(0,n.K2)(function(x){p++;let i=h.sequenceItems.length-p+1;h.updateVal(x,"starty",e-i*s.boxMargin,Math.min),h.updateVal(x,"stopy",c+i*s.boxMargin,Math.max),h.updateVal(C.data,"startx",t-i*s.boxMargin,Math.min),h.updateVal(C.data,"stopx",a+i*s.boxMargin,Math.max),g!=="activation"&&(h.updateVal(x,"startx",t-i*s.boxMargin,Math.min),h.updateVal(x,"stopx",a+i*s.boxMargin,Math.max),h.updateVal(C.data,"starty",e-i*s.boxMargin,Math.min),h.updateVal(C.data,"stopy",c+i*s.boxMargin,Math.max))},"updateItemBounds")}(0,n.K2)(f,"updateFn"),this.sequenceItems.forEach(f())},"updateBounds"),insert:(0,n.K2)(function(t,e,a,c){let s=Math.min(t,a),h=Math.max(t,a),p=Math.min(e,c),f=Math.max(e,c);this.updateVal(C.data,"startx",s,Math.min),this.updateVal(C.data,"starty",p,Math.min),this.updateVal(C.data,"stopx",h,Math.max),this.updateVal(C.data,"stopy",f,Math.max),this.updateBounds(s,p,h,f)},"insert"),bumpVerticalPos:(0,n.K2)(function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos},"bumpVerticalPos"),getVerticalPos:(0,n.K2)(function(){return this.verticalPos},"getVerticalPos"),getBounds:(0,n.K2)(function(){return this.data},"getBounds")},Q=P.sectionFills,ut=P.sectionColours,Ct=(0,n.K2)(function(t,e,a){let c=(0,n.D7)().journey,s="",h=a+(2*c.height+c.diagramMarginY),p=0,f="#CCC",g="black",x=0;for(let[i,r]of e.entries()){if(s!==r.section){f=Q[p%Q.length],x=p%Q.length,g=ut[p%ut.length];let u=0,d=r.section;for(let l=i;l<e.length&&e[l].section==d;l++)u+=1;vt(t,{x:i*c.taskMargin+i*c.width+D,y:50,text:r.section,fill:f,num:x,colour:g,taskCount:u},c),s=r.section,p++}let o=r.people.reduce((u,d)=>(A[d]&&(u[d]=A[d]),u),{});r.x=i*c.taskMargin+i*c.width+D,r.y=h,r.width=c.diagramMarginX,r.height=c.diagramMarginY,r.colour=g,r.fill=f,r.num=x,r.actors=o,wt(t,r,c),C.insert(r.x,r.y,r.x+r.width+c.taskMargin,450)}},"drawTasks"),pt={setConf:Mt,draw:Tt},Et={parser:Y,db:st,renderer:pt,styles:_t,init:(0,n.K2)(t=>{pt.setConf(t.journey),st.clear()},"init")}}}]);
