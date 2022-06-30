"use strict";(self["webpackChunkvue_e_commerce"]=self["webpackChunkvue_e_commerce"]||[]).push([[240],{7240:function(t,s,i){i.r(s),i.d(s,{default:function(){return it}});var e=i(3396),o=i(7139),c=i(9242);const r={class:"container my-5"},a={class:"row g-5"},l={class:"col-lg-6"},d=["src","alt"],n={key:0,class:"row g-0"},h=["src","alt"],u={class:"col-lg-6"},p={class:"card"},g={class:"card-body"},v={class:"card-title mb-3 pb-3 border-bottom fw-bold"},f={class:"card-text"},b={class:"h5 mb-3 pb-3 border-bottom lh-lg"},_={class:"h6 mb-3 pb-3 border-bottom lh-base"},m=(0,e._)("br",null,null,-1),k={class:"card-text border-bottom mb-3 pb-3 row text-end"},w={class:"col-sm-6"},y={class:"h5 text-secondary lh-base"},x=(0,e.Uk)(" 原價 "),$={class:"text-decoration-line-through"},I={class:"col-sm-6"},S={class:"h4 text-dark"},U={class:"row row-cols-1 row-cols-md-2 gx-1"},C={class:"col mb-3 mb-md-0"},D=(0,e._)("i",{class:"bi bi-cart-plus-fill"},null,-1),F=(0,e.Uk)(" 加入購物車 "),L=[D,F],P={class:"col"},M={key:0},z=(0,e._)("i",{class:"bi bi-bag-heart-fill"},null,-1),N=(0,e.Uk)(" 加入最愛"),O=[z,N],q={key:1},H=(0,e._)("i",{class:"bi bi-heartbreak-fill"},null,-1),J=(0,e.Uk)(" 我不愛它"),Y=[H,J],E={class:"bg-light py-5"},K={class:"container"},T=(0,e._)("h3",{class:"mb-5"},"您可能會感興趣的商品",-1),j={class:"row gy-3"},W={class:"card border-secondary h-100"},Z=["src","alt"],A={class:"card-body d-flex justify-content-end flex-column"},B=["onClick"],G=(0,e._)("i",{class:"bi bi-info-square-fill"},null,-1),Q=(0,e.Uk)("  查看更多資訊 "),R=[G,Q];function V(t,s,i,D,F,z){const N=(0,e.up)("loading-overlay");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(N,{active:F.isLoading},null,8,["active"]),(0,e._)("section",r,[(0,e._)("div",a,[(0,e._)("div",l,[(0,e._)("img",{class:"img-fluid",src:F.product.imageUrl,alt:F.product.title},null,8,d),F.product.images?((0,e.wg)(),(0,e.iD)("div",n,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(F.product.images,(s=>((0,e.wg)(),(0,e.iD)("div",{class:"col-lg-4",key:s},[(0,e._)("img",{class:"img-fluid",src:s,alt:t.其他圖片},null,8,h)])))),128))])):(0,e.kq)("",!0)]),(0,e._)("div",u,[(0,e._)("div",p,[(0,e._)("div",g,[(0,e._)("h3",v,(0,o.zw)(F.product.title),1),(0,e._)("div",f,[(0,e._)("p",b,"     "+(0,o.zw)(F.product.content),1),(0,e._)("p",_,[(0,e.Uk)(" 分類 : "+(0,o.zw)(F.product.category)+" ",1),m,(0,e.Uk)((0,o.zw)(F.product.description),1)])]),(0,e._)("div",k,[(0,e._)("div",w,[(0,e._)("p",y,[x,(0,e._)("span",$,"NT$"+(0,o.zw)(t.$filters.currency(F.product.origin_price)),1)])]),(0,e._)("div",I,[(0,e._)("p",S,"特價 NT$"+(0,o.zw)(t.$filters.currency(F.product.price)),1)])]),(0,e._)("div",U,[(0,e._)("div",C,[(0,e._)("a",{href:"#",class:"d-block btn btn-outline-dark px-1",onClick:s[0]||(s[0]=(0,c.iM)((t=>z.addCart(F.product.id)),["prevent"]))},L)]),(0,e._)("div",P,[(0,e._)("a",{href:"#",class:"d-block btn btn-outline-dark px-1",onClick:s[1]||(s[1]=(0,c.iM)((t=>z.toggleFavorites(F.product)),["prevent"]))},[z.isFavorite(F.product.id)?((0,e.wg)(),(0,e.iD)("span",q,Y)):((0,e.wg)(),(0,e.iD)("span",M,O))])])])])])])])]),(0,e._)("section",E,[(0,e._)("div",K,[T,(0,e._)("div",j,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(F.interests,(t=>((0,e.wg)(),(0,e.iD)("div",{class:"col-lg-4",key:t.id},[(0,e._)("div",W,[(0,e._)("img",{class:"card-img-top img-fluid",src:t.imageUrl,alt:t.title},null,8,Z),(0,e._)("div",A,[(0,e._)("a",{href:"#",class:"btn btn-secondary d-block",onClick:(0,c.iM)((s=>z.toProduct(t.id)),["prevent"])},R,8,B)])])])))),128))])])])],64)}i(6699);var X={data(){return{product:{},products:[],id:"",isLoading:!1,favorites:[],favoriteId:[],interests:[]}},methods:{getProduct(){const t=`https://vue3-course-api.hexschool.io/api/sixfeet-api/product/${this.id}`;this.isLoading=!0,this.$http.get(t).then((t=>{console.log("product",t.data),this.isLoading=!1,t.data.success&&(this.product=t.data.product)}))},addCart(t){const s="https://vue3-course-api.hexschool.io/api/sixfeet-api/cart";this.isLoading=!0;const i={product_id:t,qty:1};this.$http.post(s,{data:i}).then((t=>{console.log(t.data),this.$httpMessageState(t,"加到購物車"),this.isLoading=!1}))},getFavorites(){this.favorites=JSON.parse(localStorage.getItem("favorites"))||[],console.log("favorites",this.favorites),this.favoriteId=[],this.favorites.forEach((t=>{this.favoriteId.push(t.id)}))},toggleFavorites(t){const s=t.id,i=this.favorites.some((t=>t.id===s));if(i){const t=this.favorites.find((t=>t.id===s));this.favorites.splice(this.favorites.indexOf(t),1),localStorage.setItem("favorites",JSON.stringify(this.favorites));const i={data:{success:!0}};this.$httpMessageState(i,"從我的最愛移除")}else{this.favorites.push(t),localStorage.setItem("favorites",JSON.stringify(this.favorites));const s={data:{success:!0}};this.$httpMessageState(s,"加入我的最愛")}this.getFavorites()},isFavorite(t){return this.favoriteId.includes(t)},getProducts(){const t="https://vue3-course-api.hexschool.io/api/sixfeet-api/products/all";return this.isLoading=!0,this.$http.get(t).then((t=>{this.products=t.data.products,console.log("products:",t),this.isLoading=!1}))},getInterests(){const t=this.products.findIndex((t=>t.id===this.id));this.products.splice(t,1);const s=[];while(s.length<3){const t=parseInt(Math.random()*(this.products.length-1),10);-1===s.indexOf(t)&&s.push(t)}s.forEach((t=>{this.interests.push(this.products[t])})),console.log(s,this.interests)},toProduct(t){this.$router.push(`/product/${t}`),this.id=t,this.getProducts(),this.getFavorites(),this.getProduct(),this.interests=[],this.getInterests()}},created(){this.id=this.$route.params.productId,this.getProducts().then((()=>{this.getFavorites(),this.getProduct(),this.getInterests()}))}},tt=i(89);const st=(0,tt.Z)(X,[["render",V]]);var it=st}}]);
//# sourceMappingURL=240.cbb6d106.js.map