"use strict";(self.rspackChunkchat_demo=self.rspackChunkchat_demo||[]).push([[8821],{2606(L,S,r){function h(c,s){var t,m,p;c.accDescr&&((t=s.setAccDescription)==null||t.call(s,c.accDescr)),c.accTitle&&((m=s.setAccTitle)==null||m.call(s,c.accTitle)),c.title&&((p=s.setDiagramTitle)==null||p.call(s,c.title))}r.d(S,{S:()=>h}),(0,r(8755).K2)(h,"populateCommonDb")},5428(L,S,r){r.d(S,{diagram:()=>j});var h=r(2606),c=r(3218),s=r(5876),t=r(8755),m=r(9342),p=r(2631),M=r(1733),C=t.UI.pie,x={sections:new Map,showData:!1,config:C},f=x.sections,w=x.showData,I=structuredClone(C),W=(0,t.K2)(()=>structuredClone(I),"getConfig"),E=(0,t.K2)(()=>{f=new Map,w=x.showData,(0,t.IU)()},"clear"),U=(0,t.K2)(({label:e,value:i})=>{if(i<0)throw Error(`"${e}" has invalid value: ${i}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);f.has(e)||(f.set(e,i),t.Rm.debug(`added new section: ${e}, with value: ${i}`))},"addSection"),B=(0,t.K2)(()=>f,"getSections"),J=(0,t.K2)(e=>{w=e},"setShowData"),N=(0,t.K2)(()=>w,"getShowData"),b={getConfig:W,clear:E,setDiagramTitle:t.ke,getDiagramTitle:t.ab,setAccTitle:t.SV,getAccTitle:t.iN,setAccDescription:t.EI,getAccDescription:t.m7,addSection:U,getSections:B,setShowData:J,getShowData:N},P=(0,t.K2)((e,i)=>{(0,h.S)(e,i),i.setShowData(e.showData),e.sections.map(i.addSection)},"populateDb"),V={parse:(0,t.K2)(async e=>{let i=await(0,m.qg)("pie",e);t.Rm.debug(i),P(i,b)},"parse")},_=(0,t.K2)(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),q=(0,t.K2)(e=>{let i=[...e.values()].reduce((o,n)=>o+n,0),k=[...e.entries()].map(([o,n])=>({label:o,value:n})).filter(o=>o.value/i*100>=1).sort((o,n)=>n.value-o.value);return(0,p.rL)().value(o=>o.value)(k)},"createPieArcs"),j={parser:V,db:b,renderer:{draw:(0,t.K2)((e,i,k,o)=>{t.Rm.debug(`rendering pie chart
`+e);let n=o.db,A=(0,t.D7)(),K=(0,c.$t)(n.getConfig(),A.pie),D=(0,s.D)(i),d=D.append("g");d.attr("transform","translate(225,225)");let{themeVariables:l}=A,[g]=(0,c.I5)(l.pieOuterStrokeWidth);g!=null||(g=2);let R=K.textPosition,G=(0,p.JL)().innerRadius(0).outerRadius(185),H=(0,p.JL)().innerRadius(185*R).outerRadius(185*R);d.append("circle").attr("cx",0).attr("cy",0).attr("r",185+g/2).attr("class","pieOuterCircle");let $=n.getSections(),Q=q($),X=[l.pie1,l.pie2,l.pie3,l.pie4,l.pie5,l.pie6,l.pie7,l.pie8,l.pie9,l.pie10,l.pie11,l.pie12],T=0;$.forEach(a=>{T+=a});let z=Q.filter(a=>(a.data.value/T*100).toFixed(0)!=="0"),v=(0,M.UM)(X);d.selectAll("mySlices").data(z).enter().append("path").attr("d",G).attr("fill",a=>v(a.data.label)).attr("class","pieCircle"),d.selectAll("mySlices").data(z).enter().append("text").text(a=>(a.data.value/T*100).toFixed(0)+"%").attr("transform",a=>"translate("+H.centroid(a)+")").style("text-anchor","middle").attr("class","slice"),d.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");let O=[...$.entries()].map(([a,u])=>({label:a,value:u})),y=d.selectAll(".legend").data(O).enter().append("g").attr("class","legend").attr("transform",(a,u)=>"translate(216,"+(22*u-22*O.length/2)+")");y.append("rect").attr("width",18).attr("height",18).style("fill",a=>v(a.label)).style("stroke",a=>v(a.label)),y.append("text").attr("x",22).attr("y",14).text(a=>n.getShowData()?`${a.label} [${a.value}]`:a.label);let F=512+Math.max(...y.selectAll("text").nodes().map(a=>{var u;return(u=a==null?void 0:a.getBoundingClientRect().width)!=null?u:0}));D.attr("viewBox",`0 0 ${F} 450`),(0,t.a$)(D,450,F,K.useMaxWidth)},"draw")},styles:_}}}]);
