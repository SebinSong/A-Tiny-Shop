"use strict";(self.webpackChunka_tiny_shop=self.webpackChunka_tiny_shop||[]).push([[791,586,859,901,233,317,45],{6642:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(7294),l=a(5977),r=a(9704),c=a(9662),s=a(8580),i=a(3099),m=function(e){return e.current.getBoundingClientRect().width};var o=function(e){var t=e.slideWidth,a=void 0===t?200:t,l=e.children,r=void 0===l?null:l,c=e.cardDataList,o=void 0===c?null:c,u=e.classes,d=void 0===u?"":u;if(!r||!o)return null;var p=(0,n.useState)(!1),E=(0,i.Z)(p,2),v=E[0],f=E[1],_=(0,n.useState)(0),h=(0,i.Z)(_,2),N=h[0],g=h[1],b=[(0,n.useRef)(null),(0,n.useRef)(null)],y=b[0],C=b[1];(0,n.useEffect)((function(){var e=function(){var e=m(y),t=m(C),a=Math.ceil(e)-32<=t;f(a),g(0)};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[o]);var k=["card-slider-container",d,v&&"with-cta"].filter(Boolean).join(" "),x=Object.assign({},v&&{transform:"translateX(".concat(N,"px)")});return n.createElement("div",{ref:y,className:k},n.createElement("div",{ref:C,className:"card-slider__list",style:x},o.map(r)),n.createElement(s.Z,{tag:"button",classes:"card-slider__slide-btn left",onClick:function(){g((function(e){return e>=0?0:e+a<0?e+a:0}))}},"chevron_left"),n.createElement(s.Z,{tag:"button",classes:"card-slider__slide-btn right",onClick:function(){var e=m(y),t=m(C)+N-(e-132);t<=0||g((function(e){return e-Math.min(a,t)}))}},"chevron_right"))},u=a(1415),d=a(440),p=function(){return n.createElement("div",{className:"discount-product-card"},n.createElement(s.Z,{classes:"icon"},"event_available"),n.createElement("span",{className:"text"},"Comming Soon."))};function E(e){var t=(0,r.I0)(),a=(0,l.k6)();return(0,n.useEffect)((function(){t((0,c.Zw)())}),[]),n.createElement("main",{className:"page shopping-cart"},n.createElement("div",{className:"shopping-cart-page__header"},n.createElement("h1",{className:"header-text"},"Shopping cart"),n.createElement("button",{type:"button",className:"header__shop-more-btn",onClick:function(){a.push("/catalog")}},n.createElement("span",{className:"shop-more-text"},"Shop more"),n.createElement(s.Z,{classes:"shop-more-icon"},"chevron_right"))),n.createElement("div",{className:"shopping-cart-page__content"},n.createElement("div",{className:"content__see-and-checkout"},n.createElement(u.default,null),n.createElement(d.default,null)),n.createElement("div",{className:"content__discount-products-container"},n.createElement("h3",null,"Discount products"),n.createElement(o,{classes:"content__discount-products",cardDataList:[1,2,3,4],slideWidth:182},(function(e){return n.createElement(p,{key:e})})))))}var v=(0,n.memo)(E)},3354:function(e,t,a){a.r(t);var n=a(7294),l=a(8580),r=a(1827),c=a(6749),s=function(){return n.createElement("li",{className:"cart-empty-tile"},n.createElement(l.Z,{classes:"cart-empty-tile__icon"},"production_quantity_limits"),n.createElement("span",{className:"cart-empty-tile__text"},"Your cart is empty"))};t.default=function(e){var t=(0,c.jD)(),a=t.isCartEmpty,l=t.allCartItems;return n.createElement("ul",{className:"content__cart-list"},a?n.createElement(s,null):l.map((function(e){return n.createElement(r.default,{key:e.id,id:e.id,amount:e.amount})})))}},1827:function(e,t,a){a.r(t);var n=a(7294),l=a(1995),r=a(3807),c=a(6749);t.default=function(e){var t=e.id,a=e.amount,s=(0,c.Bi)(t),i=s.setCartAmount,m=s.removeCartItem,o=s.currentItem,u=o.name,d=o.imgPath,p=o.price,E=o.gender,v=o.lightDark,f=o.sleeve,_=o.totalPurchaseCount,h="".concat(E," / ").concat(v," / ").concat(f,"-sleeve");return n.createElement("li",{className:"content__cart-tile"},n.createElement(l.Z,{classes:"cart-tile__img",src:d,alt:u}),n.createElement("div",{className:"cart-tile__details"},n.createElement("span",{className:"detail-name"},u),n.createElement("span",{className:"detail-specs"},h),n.createElement("span",{className:"detail-purchase-count"},n.createElement("span",{className:"num"},_)," of this item have been sold so far.")),n.createElement("div",{className:"cart-tile__cta"},n.createElement("div",{className:"price-and-amount"},n.createElement("span",{className:"detail-price"},n.createElement("span",{className:"text"},"price:"),n.createElement("span",{className:"num"},"$ ",p)),n.createElement("span",{className:"detail-amount"},n.createElement("span",{className:"text"},"amount: "),n.createElement(r.Z,{amount:a,onChange:i}))),n.createElement("button",{type:"button",className:"is-outlined cart-tile__remove-btn",onClick:m},"remove")))}},1415:function(e,t,a){a.r(t);var n=a(3354);t.default=n.default},1470:function(e,t,a){a.r(t);var n=a(6642);t.default=n.default},3314:function(e,t,a){a.r(t);var n=a(7294),l=a(6749);t.default=function(e){var t=(0,l.jD)(),a=t.totalCartPrice,r=t.isCartEmpty,c=r?0:15,s=parseFloat(a)+0+c;return n.createElement("div",{className:"shopping-cart__order-summary"},n.createElement("h3",{className:"order-summary__heading"},"Order Summary"),n.createElement("input",{type:"text",className:"order-summary__promo-input",placeholder:"Enter promo code"}),n.createElement("div",{className:"order-summary__details"},n.createElement("div",{className:"detail-line subtotal"},n.createElement("label",null,"Subtotal"),n.createElement("span",{className:"detail-value"},"$ ",a)),n.createElement("div",{className:"detail-line tax"},n.createElement("label",null,"Estimated tax"),n.createElement("span",{className:"detail-value"},"$ ",(0).toFixed(2))),n.createElement("div",{className:"detail-line shipping"},n.createElement("label",null,"Estimated Shipping / Handling"),n.createElement("span",{className:"detail-value"},"$ ",c.toFixed(2)))),n.createElement("div",{className:"order-summary__total"},n.createElement("label",null,"Total"),n.createElement("span",{className:"detail-value"},"$ ",s.toFixed(2))),n.createElement("div",{className:"order-summary__btn-container"},n.createElement("button",{type:"button",className:"is-primary",disabled:r},"Check out")))}},440:function(e,t,a){a.r(t);var n=a(3314);t.default=n.default}}]);