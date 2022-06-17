"use strict";(self["webpackChunkvue_e_commerce"]=self["webpackChunkvue_e_commerce"]||[]).push([[341],{3547:function(t,e,a){a.d(e,{Z:function(){return w}});var l=a(3396),o=a(7139);const s={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},i={class:"modal-dialog",role:"document"},d={class:"modal-content border-0"},n={class:"modal-header bg-danger text-white"},c={class:"modal-title"},r=(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),p={class:"modal-body"},u=(0,l.Uk)(" 是否刪除 "),m={class:"text-danger"},b=(0,l.Uk)(" (刪除後將無法恢復)。 "),g={class:"modal-footer"},_=(0,l._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function h(t,e,a,h,f,v){return(0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("div",i,[(0,l._)("div",d,[(0,l._)("div",n,[(0,l._)("h5",c,[(0,l._)("span",null,"刪除 "+(0,o.zw)(a.item.title),1)]),r]),(0,l._)("div",p,[u,(0,l._)("strong",m,(0,o.zw)(a.item.title),1),b]),(0,l._)("div",g,[_,(0,l._)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=e=>t.$emit("del-item"))},"確認刪除")])])])],512)}var f=a(1339),v={props:{item:{}},data(){return{modal:""}},mixins:[f.Z]},P=a(89);const y=(0,P.Z)(v,[["render",h]]);var w=y},1455:function(t,e,a){a.d(e,{Z:function(){return h}});var l=a(3396),o=a(7139),s=a(9242);const i={"aria-label":"Page navigation example"},d={class:"pagination justify-content-center"},n=(0,l._)("span",{"aria-hidden":"true"},"«",-1),c=[n],r=["onClick"],p=(0,l._)("span",{"aria-hidden":"true"},"»",-1),u=[p];function m(t,e,a,n,p,m){return(0,l.wg)(),(0,l.iD)("nav",i,[(0,l._)("ul",d,[(0,l._)("li",{class:(0,o.C_)(["page-item",{disabled:!1===a.pages.has_pre}])},[(0,l._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,s.iM)((t=>m.updatePage(a.pages.current_page-1)),["prevent"]))},c)],2),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.pages.total_pages,(t=>((0,l.wg)(),(0,l.iD)("li",{class:(0,o.C_)(["page-item",{active:t===a.pages.current_page}]),key:t},[(0,l._)("a",{class:"page-link",href:"#",onClick:(0,s.iM)((e=>m.updatePage(t)),["prevent"])},(0,o.zw)(t),9,r)],2)))),128)),(0,l._)("li",{class:(0,o.C_)(["page-item",{disabled:!1===a.pages.has_next}])},[(0,l._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,s.iM)((t=>m.updatePage(a.pages.current_page+1)),["prevent"]))},u)],2)])])}var b={props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},g=a(89);const _=(0,g.Z)(b,[["render",m]]);var h=_},5341:function(t,e,a){a.r(e),a.d(e,{default:function(){return Pt}});var l=a(3396),o=a(7139);const s={class:"container text-end mt-3"},i={class:"container table-responsive"},d={class:"table mt-4"},n=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"編輯"),(0,l._)("th",null,"產品名稱"),(0,l._)("th",{width:"120",class:"text-end"},"分類"),(0,l._)("th",{width:"120",class:"text-end"},"原價"),(0,l._)("th",{width:"120",class:"text-end"},"售價"),(0,l._)("th",{width:"100",class:"text-end"},"狀態")])],-1),c={class:"btn-group"},r=["onClick"],p=(0,l._)("i",{class:"bi bi-pencil-square"},null,-1),u=(0,l._)("span",{class:"d-none d-md-inline"}," 編輯",-1),m=[p,u],b=["onClick"],g=(0,l._)("i",{class:"bi bi-x-square-fill"},null,-1),_=(0,l._)("span",{class:"d-none d-md-inline"}," 刪除",-1),h=[g,_],f={class:"text-end"},v={class:"text-end"},P={class:"text-end"},y={class:"text-end"},w={key:0,class:"text-success"},x={key:1,class:"text-muted"};function k(t,e,a,p,u,g){const _=(0,l.up)("loading-overlay"),k=(0,l.up)("pagination"),M=(0,l.up)("productmodal"),$=(0,l.up)("delmodal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(_,{active:u.isLoading},null,8,["active"]),(0,l._)("div",s,[(0,l._)("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=t=>g.openModal(!0))},"增加一個產品")]),(0,l._)("div",i,[(0,l._)("table",d,[n,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(u.products,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("td",null,[(0,l._)("div",c,[(0,l._)("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>g.openModal(!1,e)},m,8,r),(0,l._)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>g.openDelModal(e)},h,8,b)])]),(0,l._)("td",null,(0,o.zw)(e.title),1),(0,l._)("td",f,(0,o.zw)(e.category),1),(0,l._)("td",v,"$"+(0,o.zw)(t.$filters.currency(e.origin_price)),1),(0,l._)("td",P,"$"+(0,o.zw)(t.$filters.currency(e.price)),1),(0,l._)("td",y,[e.is_enabled?((0,l.wg)(),(0,l.iD)("span",w,"啟用")):((0,l.wg)(),(0,l.iD)("span",x,"未啟用"))])])))),128))])])]),(0,l.Wm)(k,{pages:u.pagination,onEmitPages:g.getProducts},null,8,["pages","onEmitPages"]),(0,l.Wm)(M,{ref:"productModal",product:u.tempProduct,onUpdateProduct:g.updateProduct},null,8,["product","onUpdateProduct"]),(0,l.Wm)($,{item:u.tempProduct,ref:"delModal",onDelItem:g.delProduct},null,8,["item","onDelItem"])],64)}var M=a(9242);const $={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},C={class:"modal-dialog modal-xl",role:"document"},U={class:"modal-content border-0"},D=(0,l._)("div",{class:"modal-header bg-dark text-white"},[(0,l._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,l._)("span",null,"新增產品")]),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),V={class:"modal-body"},Z={class:"row"},z={class:"col-sm-4"},L={class:"mb-3"},q=(0,l._)("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),H=["src"],N={key:0,class:"mt-5"},W=["onUpdate:modelValue"],Y=["onClick"],j=["src"],I={key:0},K={class:"col-sm-8"},S={class:"mb-3"},E=(0,l._)("label",{for:"title",class:"form-label"},"標題",-1),F={class:"row gx-2"},O={class:"mb-3 col-md-6"},A=(0,l._)("label",{for:"category",class:"form-label"},"分類",-1),B={class:"mb-3 col-md-6"},G=(0,l._)("label",{for:"price",class:"form-label"},"單位",-1),J={class:"row gx-2"},Q={class:"mb-3 col-md-6"},R=(0,l._)("label",{for:"origin_price",class:"form-label"},"原價",-1),T={class:"mb-3 col-md-6"},X=(0,l._)("label",{for:"price",class:"form-label"},"售價",-1),tt=(0,l._)("hr",null,null,-1),et={class:"mb-3"},at=(0,l._)("label",{for:"description",class:"form-label"},"產品描述",-1),lt={class:"mb-3"},ot=(0,l._)("label",{for:"content",class:"form-label"},"說明內容",-1),st={class:"mb-3"},it={class:"form-check"},dt=(0,l._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),nt={class:"modal-footer"},ct=(0,l._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function rt(t,e,a,o,s,i){return(0,l.wg)(),(0,l.iD)("div",$,[(0,l._)("div",C,[(0,l._)("div",U,[D,(0,l._)("div",V,[(0,l._)("div",Z,[(0,l._)("div",z,[(0,l._)("div",L,[q,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[0]||(e[0]=t=>s.tempProduct.imageUrl=t),placeholder:"請輸入圖片連結"},null,512),[[M.nr,s.tempProduct.imageUrl]])]),(0,l._)("img",{class:"img-fluid",src:s.tempProduct.imageUrl,alt:""},null,8,H),s.tempProduct.images?((0,l.wg)(),(0,l.iD)("div",N,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.tempProduct.images,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{class:"mb-3 input-group",key:e},[(0,l.wy)((0,l._)("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":t=>s.tempProduct.images[e]=t,placeholder:"請輸入連結"},null,8,W),[[M.nr,s.tempProduct.images[e]]]),(0,l._)("button",{type:"button",class:"btn btn-outline-danger",onClick:t=>s.tempProduct.images.splice(e,1)}," 移除 ",8,Y),(0,l._)("img",{class:"img-fluid",src:s.tempProduct.images[e],alt:""},null,8,j)])))),128)),s.tempProduct.images[s.tempProduct.images.length-1]||!s.tempProduct.images.length?((0,l.wg)(),(0,l.iD)("div",I,[(0,l._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[1]||(e[1]=t=>s.tempProduct.images.push(""))}," 新增圖片 ")])):(0,l.kq)("",!0)])):(0,l.kq)("",!0)]),(0,l._)("div",K,[(0,l._)("div",S,[E,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[2]||(e[2]=t=>s.tempProduct.title=t),placeholder:"請輸入標題"},null,512),[[M.nr,s.tempProduct.title]])]),(0,l._)("div",F,[(0,l._)("div",O,[A,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":e[3]||(e[3]=t=>s.tempProduct.category=t),placeholder:"請輸入分類"},null,512),[[M.nr,s.tempProduct.category]])]),(0,l._)("div",B,[G,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":e[4]||(e[4]=t=>s.tempProduct.unit=t),placeholder:"請輸入單位"},null,512),[[M.nr,s.tempProduct.unit]])])]),(0,l._)("div",J,[(0,l._)("div",Q,[R,(0,l.wy)((0,l._)("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":e[5]||(e[5]=t=>s.tempProduct.origin_price=t),placeholder:"請輸入原價"},null,512),[[M.nr,s.tempProduct.origin_price,void 0,{number:!0}]])]),(0,l._)("div",T,[X,(0,l.wy)((0,l._)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[6]||(e[6]=t=>s.tempProduct.price=t),placeholder:"請輸入售價"},null,512),[[M.nr,s.tempProduct.price,void 0,{number:!0}]])])]),tt,(0,l._)("div",et,[at,(0,l.wy)((0,l._)("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[7]||(e[7]=t=>s.tempProduct.description=t),placeholder:"請輸入產品描述"},null,512),[[M.nr,s.tempProduct.description]])]),(0,l._)("div",lt,[ot,(0,l.wy)((0,l._)("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[8]||(e[8]=t=>s.tempProduct.content=t),placeholder:"請輸入產品說明內容"},null,512),[[M.nr,s.tempProduct.content]])]),(0,l._)("div",st,[(0,l._)("div",it,[(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[9]||(e[9]=t=>s.tempProduct.is_enabled=t),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[M.e8,s.tempProduct.is_enabled]]),dt])])])])]),(0,l._)("div",nt,[ct,(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[10]||(e[10]=e=>t.$emit("update-product",s.tempProduct))}," 確認 ")])])])],512)}var pt=a(1339),ut={props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProduct=this.product,this.tempProduct.images||(this.tempProduct.images=[])}},data(){return{modal:{},tempProduct:{}}},methods:{uploadFile(){const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t);const a="https://vue3-course-api.hexschool.io/api/sixfeet-api/admin/upload";this.$http.post(a,e).then((t=>{console.log(t.data),t.data.success&&(this.tempProduct.imageUrl=t.data.imageUrl)}))}},mixins:[pt.Z]},mt=a(89);const bt=(0,mt.Z)(ut,[["render",rt]]);var gt=bt,_t=a(1455),ht=a(3547),ft={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{productmodal:gt,delmodal:ht.Z,pagination:_t.Z},inject:["emitter"],methods:{getProducts(t=1){const e=`https://vue3-course-api.hexschool.io/api/sixfeet-api/admin/products?page=${t}`;this.isLoading=!0,this.$http.get(e).then((t=>{this.isLoading=!1,t.data.success&&(console.log(t.data,t.data.pagination),this.products=t.data.products,this.pagination=t.data.pagination)}))},openModal(t,e){this.tempProduct=t?{}:{...e},this.isNew=t;const a=this.$refs.productModal;a.showModal()},updateProduct(t){this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/sixfeet-api/admin/product",a="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/sixfeet-api/admin/product/${t.id}`,a="put");const l=this.$refs.productModal;this.$http[a](e,{data:this.tempProduct}).then((t=>{console.log(t),l.hideModal(),"post"===a?this.$httpMessageState(t,"新增"):this.$httpMessageState(t,"更新"),this.getProducts()}))},openDelModal(t){this.tempProduct={...t};const e=this.$refs.delModal;e.showModal()},delProduct(){const t=`https://vue3-course-api.hexschool.io/api/sixfeet-api/admin/product/${this.tempProduct.id}`;this.$http.delete(t).then((t=>{console.log(t.data);const e=this.$refs.delModal;e.hideModal(),this.$httpMessageState(t,"刪除"),this.getProducts()}))}},created(){this.getProducts()}};const vt=(0,mt.Z)(ft,[["render",k]]);var Pt=vt}}]);
//# sourceMappingURL=341.c4e70564.js.map