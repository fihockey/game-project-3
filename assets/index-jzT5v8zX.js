var Re=(h,s)=>()=>(s||h((s={exports:{}}).exports,s),s.exports);var Ve=Re((je,O)=>{(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))S(v);new MutationObserver(v=>{for(const w of v)if(w.type==="childList")for(const F of w.addedNodes)F.tagName==="LINK"&&F.rel==="modulepreload"&&S(F)}).observe(document,{childList:!0,subtree:!0});function b(v){const w={};return v.integrity&&(w.integrity=v.integrity),v.referrerPolicy&&(w.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?w.credentials="include":v.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function S(v){if(v.ep)return;v.ep=!0;const w=b(v);fetch(v.href,w)}})();const L=[{question:"Who was the first presenter of the absolute hit television show Deal or No Deal?",answers:["Dwayne The Rock Johnson","Mary Berry","Noel Edmonds","Mr Blobby"],correctAnswer:2},{question:"When would you use a Call Back Function?",answers:["To loop through an array","To execute a function that has been previously defined","To break out of a function","To try and get back with your ex"],correctAnswer:1},{question:"Why do we use Query Selectors?",answers:["To access HTML elements","To test an individual function","To stop errors on the type","To ask JSON when he is having a super lit party"],correctAnswer:0},{question:"What does D.R.Y stand for in terms of functions?",answers:["Don't Recognise Yourself","Deliciously Roasted Yams","Delightfully Random Yeti","Don't Repeat Yourself"],correctAnswer:3},{question:"Why do we use Event Listeners?",answers:["To get notified when the new version of Node has dropped","To get access to object values and variables","To execute a function once an event has happened","To spy on Winnie The Pooh organising a top secret honey raid"],correctAnswer:2},{question:"Who is the greatest quiz developer this world has ever seen?",answers:["Fiona","Fi","Fifi","The Hockinator"],correctAnswer:3}],qe=[{moneyValue:"£0"},{moneyValue:"1p"},{moneyValue:"£5"},{moneyValue:"£250"},{moneyValue:"£5,000"},{moneyValue:"£50,000"},{moneyValue:"£250,000"}];var O={};(function h(s,b,S,v){var w=!!(s.Worker&&s.Blob&&s.Promise&&s.OffscreenCanvas&&s.OffscreenCanvasRenderingContext2D&&s.HTMLCanvasElement&&s.HTMLCanvasElement.prototype.transferControlToOffscreen&&s.URL&&s.URL.createObjectURL),F=typeof Path2D=="function"&&typeof DOMMatrix=="function",oe=function(){if(!s.OffscreenCanvas)return!1;var r=new OffscreenCanvas(1,1),e=r.getContext("2d");e.fillRect(0,0,1,1);var n=r.transferToImageBitmap();try{e.createPattern(n,"no-repeat")}catch{return!1}return!0}();function Y(){}function B(r){var e=b.exports.Promise,n=e!==void 0?e:s.Promise;return typeof n=="function"?new n(r):(r(Y,Y),null)}var k=function(r,e){return{transform:function(n){if(r)return n;if(e.has(n))return e.get(n);var t=new OffscreenCanvas(n.width,n.height),o=t.getContext("2d");return o.drawImage(n,0,0),e.set(n,t),t},clear:function(){e.clear()}}}(oe,new Map),N=function(){var r=Math.floor(16.666666666666668),e,n,t={},o=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(i){var l=Math.random();return t[l]=requestAnimationFrame(function a(c){o===c||o+r-1<c?(o=c,delete t[l],i()):t[l]=requestAnimationFrame(a)}),l},n=function(i){t[i]&&cancelAnimationFrame(t[i])}):(e=function(i){return setTimeout(i,r)},n=function(i){return clearTimeout(i)}),{frame:e,cancel:n}}(),se=function(){var r,e,n={};function t(o){function i(l,a){o.postMessage({options:l||{},callback:a})}o.init=function(a){var c=a.transferControlToOffscreen();o.postMessage({canvas:c},[c])},o.fire=function(a,c,d){if(e)return i(a,null),e;var m=Math.random().toString(36).slice(2);return e=B(function(f){function y(p){p.data.callback===m&&(delete n[m],o.removeEventListener("message",y),e=null,k.clear(),d(),f())}o.addEventListener("message",y),i(a,m),n[m]=y.bind(null,{data:{callback:m}})}),e},o.reset=function(){o.postMessage({reset:!0});for(var a in n)n[a](),delete n[a]}}return function(){if(r)return r;if(!S&&w){var o=["var CONFETTI, SIZE = {}, module = {};","("+h.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([o])))}catch(i){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",i),null}t(r)}return r}}(),ie={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function le(r,e){return e?e(r):r}function ce(r){return r!=null}function g(r,e,n){return le(r&&ce(r[e])?r[e]:ie[e],n)}function ue(r){return r<0?0:Math.floor(r)}function de(r,e){return Math.floor(Math.random()*(e-r))+r}function D(r){return parseInt(r,16)}function he(r){return r.map(fe)}function fe(r){var e=String(r).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:D(e.substring(0,2)),g:D(e.substring(2,4)),b:D(e.substring(4,6))}}function ve(r){var e=g(r,"origin",Object);return e.x=g(e,"x",Number),e.y=g(e,"y",Number),e}function me(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function ye(r){var e=r.getBoundingClientRect();r.width=e.width,r.height=e.height}function ge(r){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=r,e}function pe(r,e,n,t,o,i,l,a,c){r.save(),r.translate(e,n),r.rotate(i),r.scale(t,o),r.arc(0,0,1,l,a,c),r.restore()}function we(r){var e=r.angle*(Math.PI/180),n=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-e+(.5*n-Math.random()*n),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar,flat:r.flat}}function Me(r,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var n=e.tick++/e.totalTicks,t=e.x+e.random*e.tiltCos,o=e.y+e.random*e.tiltSin,i=e.wobbleX+e.random*e.tiltCos,l=e.wobbleY+e.random*e.tiltSin;if(r.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",r.beginPath(),F&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))r.fill(Te(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(i-t)*.1,Math.abs(l-o)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var a=Math.PI/10*e.wobble,c=Math.abs(i-t)*.1,d=Math.abs(l-o)*.1,m=e.shape.bitmap.width*e.scalar,f=e.shape.bitmap.height*e.scalar,y=new DOMMatrix([Math.cos(a)*c,Math.sin(a)*c,-Math.sin(a)*d,Math.cos(a)*d,e.x,e.y]);y.multiplySelf(new DOMMatrix(e.shape.matrix));var p=r.createPattern(k.transform(e.shape.bitmap),"no-repeat");p.setTransform(y),r.globalAlpha=1-n,r.fillStyle=p,r.fillRect(e.x-m/2,e.y-f/2,m,f),r.globalAlpha=1}else if(e.shape==="circle")r.ellipse?r.ellipse(e.x,e.y,Math.abs(i-t)*e.ovalScalar,Math.abs(l-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):pe(r,e.x,e.y,Math.abs(i-t)*e.ovalScalar,Math.abs(l-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var u=Math.PI/2*3,M=4*e.scalar,T=8*e.scalar,C=e.x,P=e.y,x=5,E=Math.PI/x;x--;)C=e.x+Math.cos(u)*T,P=e.y+Math.sin(u)*T,r.lineTo(C,P),u+=E,C=e.x+Math.cos(u)*M,P=e.y+Math.sin(u)*M,r.lineTo(C,P),u+=E;else r.moveTo(Math.floor(e.x),Math.floor(e.y)),r.lineTo(Math.floor(e.wobbleX),Math.floor(o)),r.lineTo(Math.floor(i),Math.floor(l)),r.lineTo(Math.floor(t),Math.floor(e.wobbleY));return r.closePath(),r.fill(),e.tick<e.totalTicks}function be(r,e,n,t,o){var i=e.slice(),l=r.getContext("2d"),a,c,d=B(function(m){function f(){a=c=null,l.clearRect(0,0,t.width,t.height),k.clear(),o(),m()}function y(){S&&!(t.width===v.width&&t.height===v.height)&&(t.width=r.width=v.width,t.height=r.height=v.height),!t.width&&!t.height&&(n(r),t.width=r.width,t.height=r.height),l.clearRect(0,0,t.width,t.height),i=i.filter(function(p){return Me(l,p)}),i.length?a=N.frame(y):f()}a=N.frame(y),c=f});return{addFettis:function(m){return i=i.concat(m),d},canvas:r,promise:d,reset:function(){a&&N.cancel(a),c&&c()}}}function J(r,e){var n=!r,t=!!g(e||{},"resize"),o=!1,i=g(e,"disableForReducedMotion",Boolean),l=w&&!!g(e||{},"useWorker"),a=l?se():null,c=n?me:ye,d=r&&a?!!r.__confetti_initialized:!1,m=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,f;function y(u,M,T){for(var C=g(u,"particleCount",ue),P=g(u,"angle",Number),x=g(u,"spread",Number),E=g(u,"startVelocity",Number),Pe=g(u,"decay",Number),Se=g(u,"gravity",Number),xe=g(u,"drift",Number),K=g(u,"colors",he),Ie=g(u,"ticks",Number),$=g(u,"shapes"),Fe=g(u,"scalar"),Le=!!g(u,"flat"),X=ve(u),ee=C,H=[],Ae=r.width*X.x,Oe=r.height*X.y;ee--;)H.push(we({x:Ae,y:Oe,angle:P,spread:x,startVelocity:E,color:K[ee%K.length],shape:$[de(0,$.length)],ticks:Ie,decay:Pe,gravity:Se,drift:xe,scalar:Fe,flat:Le}));return f?f.addFettis(H):(f=be(r,H,c,M,T),f.promise)}function p(u){var M=i||g(u,"disableForReducedMotion",Boolean),T=g(u,"zIndex",Number);if(M&&m)return B(function(E){E()});n&&f?r=f.canvas:n&&!r&&(r=ge(T),document.body.appendChild(r)),t&&!d&&c(r);var C={width:r.width,height:r.height};a&&!d&&a.init(r),d=!0,a&&(r.__confetti_initialized=!0);function P(){if(a){var E={getBoundingClientRect:function(){if(!n)return r.getBoundingClientRect()}};c(E),a.postMessage({resize:{width:E.width,height:E.height}});return}C.width=C.height=null}function x(){f=null,t&&(o=!1,s.removeEventListener("resize",P)),n&&r&&(document.body.removeChild(r),r=null,d=!1)}return t&&!o&&(o=!0,s.addEventListener("resize",P,!1)),a?a.fire(u,C,x):y(u,C,x)}return p.reset=function(){a&&a.reset(),f&&f.reset()},p}var W;function G(){return W||(W=J(null,{useWorker:!0,resize:!0})),W}function Te(r,e,n,t,o,i,l){var a=new Path2D(r),c=new Path2D;c.addPath(a,new DOMMatrix(e));var d=new Path2D;return d.addPath(c,new DOMMatrix([Math.cos(l)*o,Math.sin(l)*o,-Math.sin(l)*i,Math.cos(l)*i,n,t])),d}function Ce(r){if(!F)throw new Error("path confetti are not supported in this browser");var e,n;typeof r=="string"?e=r:(e=r.path,n=r.matrix);var t=new Path2D(e),o=document.createElement("canvas"),i=o.getContext("2d");if(!n){for(var l=1e3,a=l,c=l,d=0,m=0,f,y,p=0;p<l;p+=2)for(var u=0;u<l;u+=2)i.isPointInPath(t,p,u,"nonzero")&&(a=Math.min(a,p),c=Math.min(c,u),d=Math.max(d,p),m=Math.max(m,u));f=d-a,y=m-c;var M=10,T=Math.min(M/f,M/y);n=[T,0,0,T,-Math.round(f/2+a)*T,-Math.round(y/2+c)*T]}return{type:"path",path:e,matrix:n}}function Ee(r){var e,n=1,t="#000000",o='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof r=="string"?e=r:(e=r.text,n="scalar"in r?r.scalar:n,o="fontFamily"in r?r.fontFamily:o,t="color"in r?r.color:t);var i=10*n,l=""+i+"px "+o,a=new OffscreenCanvas(i,i),c=a.getContext("2d");c.font=l;var d=c.measureText(e),m=Math.ceil(d.actualBoundingBoxRight+d.actualBoundingBoxLeft),f=Math.ceil(d.actualBoundingBoxAscent+d.actualBoundingBoxDescent),y=2,p=d.actualBoundingBoxLeft+y,u=d.actualBoundingBoxAscent+y;m+=y+y,f+=y+y,a=new OffscreenCanvas(m,f),c=a.getContext("2d"),c.font=l,c.fillStyle=t,c.fillText(e,p,u);var M=1/n;return{type:"bitmap",bitmap:a.transferToImageBitmap(),matrix:[M,0,0,M,-m*M/2,-f*M/2]}}b.exports=function(){return G().apply(this,arguments)},b.exports.reset=function(){G().reset()},b.exports.create=J,b.exports.shapeFromPath=Ce,b.exports.shapeFromText=Ee})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),O,!1);const Be=O.exports;O.exports.create;let I=0,V=0;const z=document.querySelector("#question"),j=document.querySelector("#answer-one"),U=document.querySelector("#answer-two"),_=document.querySelector("#answer-three"),Z=document.querySelector("#answer-four"),R=document.querySelectorAll(".answers"),re=document.querySelector(".score__title"),Q=document.querySelector(".score__container"),A=document.querySelector("#next-question"),q=document.querySelector("#start-again");if(!z||!j||!U||!_||!Z||!R||!re||!Q||!A||!q)throw new Error("Issue with the containers");const ne=h=>{const s=L[h].question;z.innerHTML=s};ne(I);const ae=h=>{const s=L[h].answers[0];j.innerHTML=s;const b=L[h].answers[1];U.innerHTML=b;const S=L[h].answers[2];_.innerHTML=S;const v=L[h].answers[3];Z.innerHTML=v};ae(I);const te=h=>{const s=qe[h].moneyValue;Q.innerHTML=s};te(V);const ke=h=>{const s=h.target,b=L[I].correctAnswer;Number(s.value)==b?(Ne(s),V++):De(s),I===5?(A.innerHTML="PRIZE",q.style.display="none"):A.innerHTML="Next Question",R.forEach(v=>{v.disabled=!0}),te(V)},Ne=h=>{h.classList.add("correct-answer")},De=h=>{h.classList.add("wrong-answer")},We=h=>{h.target,A.innerHTML==="PRIZE"?(z.style.display="none",j.style.display="none",U.style.display="none",_.style.display="none",Z.style.display="none",A.style.display="none",q.style.display="block",re.style.fontSize="50px",Q.style.fontSize="40px",Be({particleCount:150,spread:150,colors:["#C81109","#EF680A","#F6B91E"]})):(I++,R.forEach(s=>{s.classList.add("default-answer"),s.classList.replace("correct-answer","default-answer"),s.classList.replace("wrong-answer","default-answer"),s.disabled=!1}),ne(I),ae(I))},He=h=>{h.target,window.location.reload()};R.forEach(h=>{h.addEventListener("click",ke)});A.addEventListener("click",We);q.addEventListener("click",He)});export default Ve();