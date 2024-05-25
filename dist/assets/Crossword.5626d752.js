import{_ as G,d as W,r as g,q as F,c as p,b as n,F as q,n as C,g as L,h as z,L as $,e as m,o as w,M as E,f as P,y as B,t as A,p as Y,j,z as K}from"./index.79296608.js";const O={across:[{pos:[1,1],question:"Integrated body and mind.",answer:"CENTAUR"},{pos:[2,1],question:"Teal tactic: Yes, _.",answer:"AND"},{pos:[2,7],question:"Soul, Self, or total psyche.",answer:"ATMAN"},{pos:[3,1],question:"Mean Red/Orange interpersonal aim.",answer:"USE"},{pos:[3,5],question:"Infrared narrative: _ _ eat it?",answer:"CANI"},{pos:[4,1],question:"Collective compass direction.(abbr)",answer:"SO"},{pos:[4,7],question:"Deep sleep brainwaves.",answer:"DELTA"},{pos:[5,3],question:"Romantic idealist destination.",answer:"EDEN"},{pos:[6,9],question:"Lower Right pronoun.",answer:"ITS"},{pos:[7,4],question:"Type system originator, for one.",answer:"MYERS"},{pos:[7,10],question:"_ from Eden.",answer:"UP"},{pos:[8,1],question:"Teal time management system.(abbr)",answer:"ILP"},{pos:[8,10],question:"Spiritual teacher Adi.",answer:"DA"},{pos:[9,7],question:"Carol Gilligan Levels Type.",answer:"WOMEN"},{pos:[10,1],question:"The Up relating to Quadrants.",answer:"SHOW"},{pos:[11,4],question:"Incidental group of holons.",answer:"HEAP"},{pos:[11,9],question:"Earlier Level prefix.",answer:"PRE"}],down:[{pos:[1,1],question:"Formless empty witness State.",answer:"CAUSAL"},{pos:[1,2],question:"Zen flow character.",answer:"ENSO"},{pos:[1,3],question:"Bardo visitation.",answer:"NDE"},{pos:[1,5],question:"Fundamental pattern essense.",answer:"ARCHETYPE"},{pos:[1,7],question:"Best-selling Orange paragon.",answer:"RAND"},{pos:[1,9],question:"Basic mantra.",answer:"OM"},{pos:[2,8],question:"A quantum level of consciousness.",answer:"TIER"},{pos:[2,10],question:"Stage theory standardized unit.",answer:"ALTITUDE"},{pos:[6,7],question:"Display emergent Levels.",answer:"GROWUP"},{pos:[6,11],question:"Greatest depth for greatest _?",answer:"SPAN"},{pos:[7,2],question:"Relaxed waking brainwaves.",answer:"ALPHA"},{pos:[9,9],question:"Philosophical relational model.",answer:"MAP"},{pos:[10,4],question:"Typical question starter.",answer:"WH"}]};const k=v=>(Y("data-v-82d94d8e"),v=v(),j(),v),V={id:"puzzle-body"},Q=k(()=>n("div",{class:"main-title"},[n("h1",null,"Integral Crossword")],-1)),Z={class:"crossword-body"},J={id:"puzzle-wrapper"},X={id:"puzzle"},ee=["row"],se=["col"],te=["onKeyup"],oe={id:"puzzle-clues"},ne={id:"acrossDiv"},ae=["onClick"],re={id:"downDiv"},ie=["onClick"],le={class:"buttons"},ce=k(()=>n("i",{class:"material-icons"},"quiz",-1)),ue=k(()=>n("i",{class:"material-icons"},"visibility",-1)),de=k(()=>n("i",{class:"material-icons"},"delete_outline",-1)),pe=11,we=11,he=W({__name:"Crossword",setup(v){document.title="Integral Crossword Puzzle";const _=g(O.across),f=g(O.down),b=g(!1),S=g(!0),x=s=>{s=="across"?b.value=!b.value:S.value=!S.value},T=s=>11*(s[0]-1)+s[1],h=s=>{var o=document.querySelector(`tr[row='${s[0]}']>td[col='${s[1]}']`);return o},M=(s,o,e)=>{let r=0;for(;r<o.length;){const t=h(e==="across"?[s[0],s[1]+r]:[s[0]+r,s[1]]);if(t){const a=t.lastElementChild;a&&(a.value=o.charAt(r))}r++}},R=()=>{_.value.forEach(s=>M(s.pos,s.answer,"across")),f.value.forEach(s=>M(s.pos,s.answer,"down"))};F(()=>{const s=()=>{const t=[["",""]];for(let a=0;a<11;a++){t[a]=[];for(let i=0;i<11;i++)t[a][i]=""}return t},o=t=>(_.value.forEach(a=>{let i=a.answer,c=a.pos;for(let l=0;l<i.length;l++)t[c[0]-1][c[1]+l-1]=i[l]}),f.value.forEach(a=>{let i=a.answer,c=a.pos;for(let l=0;l<i.length;l++)t[c[0]-1+l][c[1]-1]=i[l]}),t);let e=s();e=o(e);let r=_.value.map(t=>t.pos).concat(f.value.map(t=>t.pos));e.forEach((t,a)=>{t.forEach((i,c)=>{let l=[a+1,c+1];if(i)r.forEach(u=>{if(u[0]==a+1&&u[1]==c+1){let I=h(l),d=document.createElement("div");d.className="head-label",d.style.height="1em",d.style.zIndex="1",d.style.fontSize="1em",d.style.position="absolute",d.innerHTML=T(l).toString(),I==null||I.prepend(d)}});else{let u=h(l);if(u)for(;u.lastChild;)u.removeChild(u.lastChild)}})})});const N=async s=>{if(typeof s=="object"){let o=h(s),e=o==null?void 0:o.lastChild;await K(()=>e==null?void 0:e.focus())}},D=s=>{if(s){if(confirm("Really want to CLEAR all your progresst?")){let o=document.getElementsByClassName("clearme");Array.from(o).forEach(e=>e.value="")}}else{let o=document.getElementsByClassName("clearme");Array.from(o).forEach(e=>e.value="")}},H=()=>{confirm("This will erase your porgoresst! Are you REALLY sure? If you are, you can keep mashing it btw.")&&(setTimeout(()=>{D(!1)},3e3),R())},U=()=>{var s="";s+=`Instructs:
Click couch to jump to square, then click or use arrow keys to move.
`,s+=`Clue Button will briefly display answers and reset board.
Get good.
`,alert(s)},y=(s,o,e)=>{let r=h([o,e]),t=r==null?void 0:r.lastChild;t instanceof HTMLInputElement&&typeof t.focus=="function"&&t.focus()};return(s,o)=>(w(),p("div",V,[Q,n("div",Z,[n("div",J,[n("table",X,[n("tbody",null,[(w(),p(q,null,C(pe,(e,r)=>n("tr",{row:e,key:r},[(w(),p(q,null,C(we,(t,a)=>n("td",{col:t,key:a},[n("input",{class:"clearme",onKeyup:[E(i=>y("left",e,t-1),["left"]),E(i=>y("right",e,t+1),["right"]),E(i=>y("down",e+1,t),["down"]),E(i=>y("up",e-1,t),["up"])],maxlength:"1",val:"",type:"text",tabindex:"-1",name:"`'${row}+${col}'`"},null,40,te)],8,se)),64))],8,ee)),64))])])]),n("div",oe,[n("div",ne,[n("h2",{onClick:o[0]||(o[0]=e=>x("across"))},"Across"),L($,{name:"grow",tag:"ul",id:"across"},{default:z(()=>[(w(!0),p(q,null,C(_.value,e=>P((w(),p("li",{class:"couch",tabindex:"1",key:e.answer},[n("span",{class:"material-icons",onClick:r=>N(e.pos)},"chair",8,ae),m(" "+A(T(e.pos))+". "+A(e.question),1)])),[[B,!b.value]])),128))]),_:1})]),n("div",re,[n("h2",{onClick:o[1]||(o[1]=e=>x("down"))},"Down"),L($,{name:"grow",tag:"ul",id:"down"},{default:z(()=>[(w(!0),p(q,null,C(f.value,e=>P((w(),p("li",{class:"couch",tabindex:"1",key:e.answer},[n("span",{class:"material-icons",onClick:r=>N(e.pos)},"chair",8,ie),m(" "+A(T(e.pos))+": "+A(e.question),1)])),[[B,!S.value]])),128))]),_:1})]),n("div",le,[n("span",{id:"solve",onClick:U},[ce,m(" info ")]),n("span",{id:"other",onClick:H},[ue,m(" clueMe ")]),n("span",{id:"clear",onClick:o[2]||(o[2]=e=>D(!0))},[de,m(" resetBoard ")])])])])]))}});var ve=G(he,[["__scopeId","data-v-82d94d8e"]]);export{ve as default};