(self["webpackChunkvue_e_commerce"]=self["webpackChunkvue_e_commerce"]||[]).push([[213],{1957:function(t,e,i){i(6699),i(1703),
/*!
  * Bootstrap carousel.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(e,s){t.exports=s(i(4130),i(6221),i(7317),i(1884))}(0,(function(t,e,i,s){"use strict";const n=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},l=n(t),a=n(e),o=n(i),r=n(s),c="transitionend",d=t=>null===t||void 0===t?`${t}`:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),u=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e},h=t=>{const e=u(t);return e?document.querySelector(e):null},f=t=>{t.dispatchEvent(new Event(c))},g=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),m=(t,e,i)=>{Object.keys(i).forEach((s=>{const n=i[s],l=e[s],a=l&&g(l)?"element":d(l);if(!new RegExp(n).test(a))throw new TypeError(`${t.toUpperCase()}: Option "${s}" provided type "${a}" but expected type "${n}".`)}))},p=t=>!(!g(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),v=t=>{t.offsetHeight},_=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},b=[],x=t=>{"loading"===document.readyState?(b.length||document.addEventListener("DOMContentLoaded",(()=>{b.forEach((t=>t()))})),b.push(t)):t()},y=()=>"rtl"===document.documentElement.dir,w=t=>{x((()=>{const e=_();if(e){const i=t.NAME,s=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=s,t.jQueryInterface)}}))},k=(t,e,i,s)=>{let n=t.indexOf(e);if(-1===n)return t[!i&&s?t.length-1:0];const l=t.length;return n+=i?1:-1,s&&(n=(n+l)%l),t[Math.max(0,Math.min(n,l-1))]},E="carousel",I="bs.carousel",j=`.${I}`,S=".data-api",$="ArrowLeft",C="ArrowRight",L=500,T=40,A={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},D={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},O="next",X="prev",U="left",N="right",P={[$]:N,[C]:U},q=`slide${j}`,M=`slid${j}`,Q=`keydown${j}`,B=`mouseenter${j}`,H=`mouseleave${j}`,W=`touchstart${j}`,K=`touchmove${j}`,R=`touchend${j}`,V=`pointerdown${j}`,z=`pointerup${j}`,J=`dragstart${j}`,Z=`load${j}${S}`,Y=`click${j}${S}`,F="carousel",G="active",tt="slide",et="carousel-item-end",it="carousel-item-start",st="carousel-item-next",nt="carousel-item-prev",lt="pointer-event",at=".active",ot=".active.carousel-item",rt=".carousel-item",ct=".carousel-item img",dt=".carousel-item-next, .carousel-item-prev",ut=".carousel-indicators",ht="[data-bs-target]",ft="[data-bs-slide], [data-bs-slide-to]",gt='[data-bs-ride="carousel"]',mt="touch",pt="pen";class vt extends r.default{constructor(t,e){super(t),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._indicatorsElement=o.default.findOne(ut,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return A}static get NAME(){return E}next(){this._slide(O)}nextWhenVisible(){!document.hidden&&p(this._element)&&this.next()}prev(){this._slide(X)}pause(t){t||(this._isPaused=!0),o.default.findOne(dt,this._element)&&(f(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(t){this._activeElement=o.default.findOne(ot,this._element);const e=this._getItemIndex(this._activeElement);if(t>this._items.length-1||t<0)return;if(this._isSliding)return void l.default.one(this._element,M,(()=>this.to(t)));if(e===t)return this.pause(),void this.cycle();const i=t>e?O:X;this._slide(i,this._items[t])}_getConfig(t){return t={...A,...a.default.getDataAttributes(this._element),..."object"===typeof t?t:{}},m(E,t,D),t}_handleSwipe(){const t=Math.abs(this.touchDeltaX);if(t<=T)return;const e=t/this.touchDeltaX;this.touchDeltaX=0,e&&this._slide(e>0?N:U)}_addEventListeners(){this._config.keyboard&&l.default.on(this._element,Q,(t=>this._keydown(t))),"hover"===this._config.pause&&(l.default.on(this._element,B,(t=>this.pause(t))),l.default.on(this._element,H,(t=>this.cycle(t)))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const t=t=>this._pointerEvent&&(t.pointerType===pt||t.pointerType===mt),e=e=>{t(e)?this.touchStartX=e.clientX:this._pointerEvent||(this.touchStartX=e.touches[0].clientX)},i=t=>{this.touchDeltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this.touchStartX},s=e=>{t(e)&&(this.touchDeltaX=e.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((t=>this.cycle(t)),L+this._config.interval))};o.default.find(ct,this._element).forEach((t=>{l.default.on(t,J,(t=>t.preventDefault()))})),this._pointerEvent?(l.default.on(this._element,V,(t=>e(t))),l.default.on(this._element,z,(t=>s(t))),this._element.classList.add(lt)):(l.default.on(this._element,W,(t=>e(t))),l.default.on(this._element,K,(t=>i(t))),l.default.on(this._element,R,(t=>s(t))))}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=P[t.key];e&&(t.preventDefault(),this._slide(e))}_getItemIndex(t){return this._items=t&&t.parentNode?o.default.find(rt,t.parentNode):[],this._items.indexOf(t)}_getItemByOrder(t,e){const i=t===O;return k(this._items,e,i,this._config.wrap)}_triggerSlideEvent(t,e){const i=this._getItemIndex(t),s=this._getItemIndex(o.default.findOne(ot,this._element));return l.default.trigger(this._element,q,{relatedTarget:t,direction:e,from:s,to:i})}_setActiveIndicatorElement(t){if(this._indicatorsElement){const e=o.default.findOne(at,this._indicatorsElement);e.classList.remove(G),e.removeAttribute("aria-current");const i=o.default.find(ht,this._indicatorsElement);for(let s=0;s<i.length;s++)if(Number.parseInt(i[s].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(t)){i[s].classList.add(G),i[s].setAttribute("aria-current","true");break}}}_updateInterval(){const t=this._activeElement||o.default.findOne(ot,this._element);if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=e):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(t,e){const i=this._directionToOrder(t),s=o.default.findOne(ot,this._element),n=this._getItemIndex(s),a=e||this._getItemByOrder(i,s),r=this._getItemIndex(a),c=Boolean(this._interval),d=i===O,u=d?it:et,h=d?st:nt,f=this._orderToDirection(i);if(a&&a.classList.contains(G))return void(this._isSliding=!1);if(this._isSliding)return;const g=this._triggerSlideEvent(a,f);if(g.defaultPrevented)return;if(!s||!a)return;this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(a),this._activeElement=a;const m=()=>{l.default.trigger(this._element,M,{relatedTarget:a,direction:f,from:n,to:r})};if(this._element.classList.contains(tt)){a.classList.add(h),v(a),s.classList.add(u),a.classList.add(u);const t=()=>{a.classList.remove(u,h),a.classList.add(G),s.classList.remove(G,h,u),this._isSliding=!1,setTimeout(m,0)};this._queueCallback(t,s,!0)}else s.classList.remove(G),a.classList.add(G),this._isSliding=!1,m();c&&this.cycle()}_directionToOrder(t){return[N,U].includes(t)?y()?t===U?X:O:t===U?O:X:t}_orderToDirection(t){return[O,X].includes(t)?y()?t===X?U:N:t===X?N:U:t}static carouselInterface(t,e){const i=vt.getOrCreateInstance(t,e);let{_config:s}=i;"object"===typeof e&&(s={...s,...e});const n="string"===typeof e?e:s.slide;if("number"===typeof e)i.to(e);else if("string"===typeof n){if("undefined"===typeof i[n])throw new TypeError(`No method named "${n}"`);i[n]()}else s.interval&&s.ride&&(i.pause(),i.cycle())}static jQueryInterface(t){return this.each((function(){vt.carouselInterface(this,t)}))}static dataApiClickHandler(t){const e=h(this);if(!e||!e.classList.contains(F))return;const i={...a.default.getDataAttributes(e),...a.default.getDataAttributes(this)},s=this.getAttribute("data-bs-slide-to");s&&(i.interval=!1),vt.carouselInterface(e,i),s&&vt.getInstance(e).to(s),t.preventDefault()}}return l.default.on(document,Y,ft,vt.dataApiClickHandler),l.default.on(window,Z,(()=>{const t=o.default.find(gt);for(let e=0,i=t.length;e<i;e++)vt.carouselInterface(t[e],vt.getInstance(t[e]))})),w(vt),vt}))},8958:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return L}});var s=i(3396),n=i(7139),l=i.p+"img/logo.4b14f4a9.svg",a=i.p+"img/member.d1ff2b50.jpg",o=i.p+"img/user1.0f0ffbcc.jpg",r=i.p+"img/user2.17a0b03b.jpg",c=i.p+"img/user3.ed282590.jpg";const d=(0,s.uE)('<section class="container mt-5"><div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"><div class="pe-5"><img class="img-fluid" src="'+l+'" alt="logo" style="height:50px;"></div><h2 class="display-3">關於我們</h2></div><div class="row gx-0 gy-3 g-lg-5 mt-1"><div class="col-lg-6"><p class="h3 lh-lg">     sixfeet 六腳家具是成立於 2022 年的家具品牌，團隊成員包含家具設計、產品設計、室內設計等各領域的專業設計師，透過「設計思考」來滿足使用者需求， 協助客戶挑選與搭配風格家具。<br>     六腳家具希望發揚臺灣在地的創意與工藝，把臺灣本土具代表性的元素融入設計， 期盼能陪伴使用者度過靜好的歲月。 </p></div><div class="col-lg-6"><img class="img-fluid h-100" src="'+a+'" alt="member"></div></div></section>',1),u={class:"bg-light py-3 py-lg-5"},h=(0,s._)("h2",{class:"container mb-3 mb-lg-4 fw-bold"},"顧客心得",-1),f={id:"carouselExampleCaptions",class:"carousel carousel-dark slide","data-bs-ride":"carousel",ref:"carousel"},g=(0,s.uE)('<div class="carousel-inner container text-center"><div class="carousel-item customer active"><div class="row flex-column flex-lg-row h-100"><div class="col position-relative"><img src="'+o+'" class="d-block position-absolute top-50 start-50 translate-middle rounded-circle" alt="user1"></div><div class="col d-flex flex-column justify-content-evenly"><p class="px-5 h2 lh-base mb-0 text-start">     謝謝六腳幫助我挑選孩子們的家具，自從用了他們的家具，我小孩每次考試都考一百分呢！ </p><figcaption class="px-5 blockquote-footer text-end"><span class="h3">來自臺北的王女士</span></figcaption></div></div></div><div class="carousel-item customer"><div class="row flex-column flex-lg-row h-100"><div class="col position-relative"><img src="'+r+'" class="d-block position-absolute top-50 start-50 translate-middle rounded-circle" alt="user1"></div><div class="col d-flex flex-column justify-content-evenly"><p class="px-5 h2 lh-base mb-0 text-start">   May my love surround you like sunshine and give you glorious freedom. </p><figcaption class="px-5 blockquote-footer text-end"><span class="h3">約翰史密斯先生</span></figcaption></div></div></div><div class="carousel-item customer"><div class="row flex-column flex-lg-row h-100"><div class="col position-relative"><img src="'+c+'" class="d-block position-absolute top-50 start-50 translate-middle rounded-circle" alt="user1"></div><div class="col d-flex flex-column justify-content-evenly"><p class="px-5 h2 lh-base mb-0 text-start">     六腳的家具不僅外觀優美，而且非常舒服，尤其是這他們的沙發，我們家的狗狗小黑很喜歡，謝謝六腳家具！ </p><figcaption class="px-5 blockquote-footer text-end"><span class="h3">中部的林家兄妹</span></figcaption></div></div></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',3),m=[g],p={class:"container py-3 py-lg-5"},v=(0,s._)("h2",{class:"fw-bold mb-3 mb-lg-4"},"家具小教室",-1),_={class:"row g-3 gx-lg-5"},b={class:"col-lg-6"},x=["src","alt"],y={class:"col-lg-6 d-flex flex-column justify-content-between"},w={class:"h4 lh-lg my-3"},k={class:"text-center"};function E(t,e,i,l,a,o){return(0,s.wg)(),(0,s.iD)(s.HY,null,[d,(0,s._)("section",u,[h,(0,s._)("div",f,m,512)]),(0,s._)("section",p,[v,(0,s._)("div",_,[(0,s._)("div",b,[(0,s._)("img",{class:"img-fluid h-100",src:a.knowledge.imgUrl,alt:a.knowledge.title},null,8,x)]),(0,s._)("div",y,[(0,s._)("p",w,(0,n.zw)(a.knowledge.text),1),(0,s._)("div",k,[(0,s._)("button",{type:"button",class:"btn btn-outline-dark btn-lg",onClick:e[0]||(e[0]=t=>o.readKnowledge())}," 看下一則小知識 ")])])])])],64)}var I=i(1957),j=i.n(I),S={data(){return{aboutCarousel:{},num:0,knowledge:{title:"",imgUrl:"",text:""},knowledges:[{title:"知識1",imgUrl:"https://upload.cc/i1/2022/07/11/JDhdQC.jpg",text:"家具是日常生活和社會活動中為起居，或工作方便而配備的用具，傳統的家具都是獨立於房屋主體結構之外可以移動的，現代很多家具已成為建築的一個組成部分。"},{title:"知識2",imgUrl:"https://upload.cc/i1/2022/07/11/JKsZ2X.jpg",text:"家具按設計風格可分為：現代家具、中式古典家具、歐式古典家具、美式家具、在地家具（指當地生產的家具，並使用當地材料和技術）等。"},{title:"知識3",imgUrl:"https://upload.cc/i1/2022/07/11/6yo1Qc.jpg",text:"家具設計是藝術和技術的結合，反映了當代產品設計的發展，偏重於藝術。設計師會和製造商共同合作來完成設計，家具設計是經過兩者的共同努力完成良好的家具。"},{title:"知識4",imgUrl:"https://upload.cc/i1/2022/07/11/DNwSgO.jpg",text:"家具按所用材料可分為：實木家具、板木結合家具、板式家具、鋼木家具、複合板式家具、石材家具、軟體家具、藤編家具、竹編家具、和其他人造材材料家具（如玻璃、不鏽鋼、塑膠等）。"}]}},methods:{readKnowledge(){this.num+=1,this.num>3&&(this.num=0),this.knowledge.title=this.knowledges[this.num].title,this.knowledge.imgUrl=this.knowledges[this.num].imgUrl,this.knowledge.text=this.knowledges[this.num].text}},created(){this.knowledge.title=this.knowledges[this.num].title,this.knowledge.imgUrl=this.knowledges[this.num].imgUrl,this.knowledge.text=this.knowledges[this.num].text},mounted(){this.aboutCarousel=new(j())(this.$refs.carousel)}},$=i(89);const C=(0,$.Z)(S,[["render",E]]);var L=C}}]);
//# sourceMappingURL=213.dbbfadb4.js.map