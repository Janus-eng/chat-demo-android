"use strict";var X=Object.defineProperty;var z=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable;var E=(f,h,d)=>h in f?X(f,h,{enumerable:!0,configurable:!0,writable:!0,value:d}):f[h]=d,T=(f,h)=>{for(var d in h||(h={}))Y.call(h,d)&&E(f,d,h[d]);if(z)for(var d of z(h))tt.call(h,d)&&E(f,d,h[d]);return f};(self.rspackChunkchat_demo=self.rspackChunkchat_demo||[]).push([[5172],{2606(f,h,d){function M(m,u){var s,K,y;m.accDescr&&((s=u.setAccDescription)==null||s.call(u,m.accDescr)),m.accTitle&&((K=u.setAccTitle)==null||K.call(u,m.accTitle)),m.title&&((y=u.setDiagramTitle)==null||y.call(u,m.title))}d.d(h,{S:()=>M}),(0,d(8755).K2)(M,"populateCommonDb")},5455(f,h,d){d.d(h,{diagram:()=>Q});var M=d(2606),m=d(3218),u=d(5876),s=d(8755),K=d(9342),y={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},k={axes:[],curves:[],options:y},b=structuredClone(k),F=s.UI.radar,P=(0,s.K2)(()=>(0,m.$t)(T(T({},F),(0,s.zj)().radar)),"getConfig"),A=(0,s.K2)(()=>b.axes,"getAxes"),R=(0,s.K2)(()=>b.curves,"getCurves"),j=(0,s.K2)(()=>b.options,"getOptions"),G=(0,s.K2)(a=>{b.axes=a.map(t=>{var e;return{name:t.name,label:(e=t.label)!=null?e:t.name}})},"setAxes"),V=(0,s.K2)(a=>{b.curves=a.map(t=>{var e;return{name:t.name,label:(e=t.label)!=null?e:t.name,entries:_(t.entries)}})},"setCurves"),_=(0,s.K2)(a=>{if(a[0].axis==null)return a.map(e=>e.value);let t=A();if(t.length===0)throw Error("Axes must be populated before curves for reference entries");return t.map(e=>{let r=a.find(i=>{var n;return((n=i.axis)==null?void 0:n.$refText)===e.name});if(r===void 0)throw Error("Missing entry for axis "+e.label);return r.value})},"computeCurveEntries"),C={getAxes:A,getCurves:R,getOptions:j,setAxes:G,setCurves:V,setOptions:(0,s.K2)(a=>{var e,r,i,n,o,l,c,p,g,$;let t=a.reduce((x,v)=>(x[v.name]=v,x),{});b.options={showLegend:(r=(e=t.showLegend)==null?void 0:e.value)!=null?r:y.showLegend,ticks:(n=(i=t.ticks)==null?void 0:i.value)!=null?n:y.ticks,max:(l=(o=t.max)==null?void 0:o.value)!=null?l:y.max,min:(p=(c=t.min)==null?void 0:c.value)!=null?p:y.min,graticule:($=(g=t.graticule)==null?void 0:g.value)!=null?$:y.graticule}},"setOptions"),getConfig:P,clear:(0,s.K2)(()=>{(0,s.IU)(),b=structuredClone(k)},"clear"),setAccTitle:s.SV,getAccTitle:s.iN,setDiagramTitle:s.ke,getDiagramTitle:s.ab,getAccDescription:s.m7,setAccDescription:s.EI},B=(0,s.K2)(a=>{(0,M.S)(a,C);let{axes:t,curves:e,options:r}=a;C.setAxes(t),C.setCurves(e),C.setOptions(r)},"populate"),W={parse:(0,s.K2)(async a=>{let t=await(0,K.qg)("radar",a);s.Rm.debug(t),B(t)},"parse")},U=(0,s.K2)((a,t,e,r)=>{var w;let i=r.db,n=i.getAxes(),o=i.getCurves(),l=i.getOptions(),c=i.getConfig(),p=i.getDiagramTitle(),g=q((0,u.D)(t),c),$=(w=l.max)!=null?w:Math.max(...o.map(L=>Math.max(...L.entries))),x=l.min,v=Math.min(c.width,c.height)/2;H(g,n,v,l.ticks,l.graticule),N(g,n,v,c),S(g,n,o,x,$,l.graticule,c),D(g,o,l.showLegend,c),g.append("text").attr("class","radarTitle").text(p).attr("x",0).attr("y",-c.height/2-c.marginTop)},"draw"),q=(0,s.K2)((a,t)=>{let e=t.width+t.marginLeft+t.marginRight,r=t.height+t.marginTop+t.marginBottom,i={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return a.attr("viewbox",`0 0 ${e} ${r}`).attr("width",e).attr("height",r),a.append("g").attr("transform",`translate(${i.x}, ${i.y})`)},"drawFrame"),H=(0,s.K2)((a,t,e,r,i)=>{if(i==="circle")for(let n=0;n<r;n++){let o=e*(n+1)/r;a.append("circle").attr("r",o).attr("class","radarGraticule")}else if(i==="polygon"){let n=t.length;for(let o=0;o<r;o++){let l=e*(o+1)/r,c=t.map((p,g)=>{let $=2*g*Math.PI/n-Math.PI/2,x=l*Math.cos($),v=l*Math.sin($);return`${x},${v}`}).join(" ");a.append("polygon").attr("points",c).attr("class","radarGraticule")}}},"drawGraticule"),N=(0,s.K2)((a,t,e,r)=>{let i=t.length;for(let n=0;n<i;n++){let o=t[n].label,l=2*n*Math.PI/i-Math.PI/2;a.append("line").attr("x1",0).attr("y1",0).attr("x2",e*r.axisScaleFactor*Math.cos(l)).attr("y2",e*r.axisScaleFactor*Math.sin(l)).attr("class","radarAxisLine"),a.append("text").text(o).attr("x",e*r.axisLabelFactor*Math.cos(l)).attr("y",e*r.axisLabelFactor*Math.sin(l)).attr("class","radarAxisLabel")}},"drawAxes");function S(a,t,e,r,i,n,o){let l=t.length,c=Math.min(o.width,o.height)/2;e.forEach((p,g)=>{if(p.entries.length!==l)return;let $=p.entries.map((x,v)=>{let w=2*Math.PI*v/l-Math.PI/2,L=O(x,r,i,c);return{x:L*Math.cos(w),y:L*Math.sin(w)}});n==="circle"?a.append("path").attr("d",I($,o.curveTension)).attr("class",`radarCurve-${g}`):n==="polygon"&&a.append("polygon").attr("points",$.map(x=>`${x.x},${x.y}`).join(" ")).attr("class",`radarCurve-${g}`)})}function O(a,t,e,r){return r*(Math.min(Math.max(a,t),e)-t)/(e-t)}function I(a,t){let e=a.length,r=`M${a[0].x},${a[0].y}`;for(let i=0;i<e;i++){let n=a[(i-1+e)%e],o=a[i],l=a[(i+1)%e],c=a[(i+2)%e],p={x:o.x+(l.x-n.x)*t,y:o.y+(l.y-n.y)*t},g={x:l.x-(c.x-o.x)*t,y:l.y-(c.y-o.y)*t};r+=` C${p.x},${p.y} ${g.x},${g.y} ${l.x},${l.y}`}return`${r} Z`}function D(a,t,e,r){if(!e)return;let i=(r.width/2+r.marginRight)*3/4,n=-(3*(r.height/2+r.marginTop))/4;t.forEach((o,l)=>{let c=a.append("g").attr("transform",`translate(${i}, ${n+20*l})`);c.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${l}`),c.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(o.label)})}(0,s.K2)(S,"drawCurves"),(0,s.K2)(O,"relativeRadius"),(0,s.K2)(I,"closedRoundCurve"),(0,s.K2)(D,"drawLegend");var Z=(0,s.K2)((a,t)=>{let e="";for(let r=0;r<a.THEME_COLOR_LIMIT;r++){let i=a[`cScale${r}`];e+=`
		.radarCurve-${r} {
			color: ${i};
			fill: ${i};
			fill-opacity: ${t.curveOpacity};
			stroke: ${i};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${i};
			fill-opacity: ${t.curveOpacity};
			stroke: ${i};
		}
		`}return e},"genIndexStyles"),J=(0,s.K2)(a=>{let t=(0,s.P$)(),e=(0,s.zj)(),r=(0,m.$t)(t,e.themeVariables),i=(0,m.$t)(r.radar,a);return{themeVariables:r,radarOptions:i}},"buildRadarStyleOptions"),Q={parser:W,db:C,renderer:{draw:U},styles:(0,s.K2)(({radar:a}={})=>{let{themeVariables:t,radarOptions:e}=J(a);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${e.axisColor};
		stroke-width: ${e.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${e.axisLabelFontSize}px;
		color: ${e.axisColor};
	}
	.radarGraticule {
		fill: ${e.graticuleColor};
		fill-opacity: ${e.graticuleOpacity};
		stroke: ${e.graticuleColor};
		stroke-width: ${e.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${e.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${Z(t,e)}
	`},"styles")}}}]);
