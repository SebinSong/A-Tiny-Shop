"use strict";(self.webpackChunka_tiny_shop=self.webpackChunka_tiny_shop||[]).push([[586,859,901,233,317,45],{4795:function(e,t,a){a.r(t);var l=a(7294),n=a(5977),c=a(8580),r=a(1415),s=a(440);function m(e){var t=(0,n.k6)();return l.createElement("main",{className:"page shopping-cart"},l.createElement("div",{className:"shopping-cart-page__header"},l.createElement("h1",{className:"header-text"},"Shopping cart"),l.createElement("button",{type:"button",className:"header__shop-more-btn",onClick:function(){t.push("/catalog")}},l.createElement("span",{className:"shop-more-text"},"Shop more"),l.createElement(c.Z,{classes:"shop-more-icon"},"chevron_right"))),l.createElement("div",{className:"shopping-cart-page__content"},l.createElement("div",{className:"content__see-and-checkout"},l.createElement(r.default,null),l.createElement(s.default,null))))}t.default=(0,l.memo)(m)},3354:function(e,t,a){a.r(t);var l=a(7294),n=a(8580),c=a(1827),r=a(6749),s=function(){return l.createElement("li",{className:"cart-empty-tile"},l.createElement(n.Z,{classes:"cart-empty-tile__icon"},"production_quantity_limits"),l.createElement("span",{className:"cart-empty-tile__text"},"Your cart is empty"))};t.default=function(e){var t=(0,r.jD)(),a=t.isCartEmpty,n=t.allCartItems;return l.createElement("ul",{className:"content__cart-list"},a?l.createElement(s,null):n.map((function(e){return l.createElement(c.default,{key:e.id,id:e.id,amount:e.amount})})))}},1827:function(e,t,a){a.r(t);var l=a(7294),n=a(1995),c=a(3807),r=a(6749);t.default=function(e){var t=e.id,a=e.amount,s=(0,r.Bi)(t),m=s.setCartAmount,i=s.removeCartItem,o=s.currentItem,u=o.name,d=o.imgPath,p=o.price,E=o.gender,_=o.lightDark,N=o.sleeve,h=o.totalPurchaseCount,v="".concat(E," / ").concat(_," / ").concat(N,"-sleeve");return l.createElement("li",{className:"content__cart-tile"},l.createElement(n.Z,{classes:"cart-tile__img",src:d,alt:u}),l.createElement("div",{className:"cart-tile__details"},l.createElement("span",{className:"detail-name"},u),l.createElement("span",{className:"detail-specs"},v),l.createElement("span",{className:"detail-purchase-count"},l.createElement("span",{className:"num"},h)," of this item have been sold so far.")),l.createElement("div",{className:"cart-tile__cta"},l.createElement("div",{className:"price-and-amount"},l.createElement("span",{className:"detail-price"},l.createElement("span",{className:"text"},"price:"),l.createElement("span",{className:"num"},"$ ",p)),l.createElement("span",{className:"detail-amount"},l.createElement("span",{className:"text"},"amount: "),l.createElement(c.Z,{amount:a,onChange:m}))),l.createElement("button",{type:"button",className:"is-outlined cart-tile__remove-btn",onClick:i},"remove")))}},1415:function(e,t,a){a.r(t);var l=a(3354);t.default=l.default},3314:function(e,t,a){a.r(t);var l=a(7294),n=a(6749);t.default=function(e){var t=(0,n.jD)(),a=t.totalCartPrice,c=t.isCartEmpty,r=c?0:15,s=parseFloat(a)+0+r;return l.createElement("div",{className:"shopping-cart__order-summary"},l.createElement("h3",{className:"order-summary__heading"},"Order Summary"),l.createElement("input",{type:"text",className:"order-summary__promo-input",placeholder:"Enter promo code"}),l.createElement("div",{className:"order-summary__details"},l.createElement("div",{className:"detail-line subtotal"},l.createElement("label",null,"Subtotal"),l.createElement("span",{className:"detail-value"},"$ ",a)),l.createElement("div",{className:"detail-line tax"},l.createElement("label",null,"Estimated tax"),l.createElement("span",{className:"detail-value"},"$ ",(0).toFixed(2))),l.createElement("div",{className:"detail-line shipping"},l.createElement("label",null,"Estimated Shipping / Handling"),l.createElement("span",{className:"detail-value"},"$ ",r.toFixed(2)))),l.createElement("div",{className:"order-summary__total"},l.createElement("label",null,"Total"),l.createElement("span",{className:"detail-value"},"$ ",s.toFixed(2))),l.createElement("div",{className:"order-summary__btn-container"},l.createElement("button",{type:"button",className:"is-primary",disabled:c},"Check out")))}},440:function(e,t,a){a.r(t);var l=a(3314);t.default=l.default}}]);