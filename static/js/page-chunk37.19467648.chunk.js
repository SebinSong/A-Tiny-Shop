"use strict";(self.webpackChunka_tiny_shop=self.webpackChunka_tiny_shop||[]).push([[791,586,859,901,233],{4795:function(e,t,a){a.r(t);var n=a(7294),c=a(5977),l=a(8580),s=a(1415);function r(e){var t=(0,c.k6)();return n.createElement("main",{className:"page shopping-cart"},n.createElement("div",{className:"shopping-cart-page__header"},n.createElement("h1",{className:"header-text"},"Shopping cart"),n.createElement("button",{type:"button",className:"header__shop-more-btn",onClick:function(){t.push("/catalog")}},n.createElement("span",{className:"shop-more-text"},"Shop more"),n.createElement(l.Z,{classes:"shop-more-icon"},"chevron_right"))),n.createElement("div",{className:"shopping-cart-page__content"},n.createElement("div",{className:"content__see-and-checkout"},n.createElement(s.default,null))))}t.default=(0,n.memo)(r)},3354:function(e,t,a){a.r(t);var n=a(7294),c=a(8580),l=a(1827),s=a(6749),r=function(){return n.createElement("li",{className:"cart-empty-tile"},n.createElement(c.Z,{classes:"cart-empty-tile__icon"},"production_quantity_limits"),n.createElement("span",{className:"cart-empty-tile__text"},"Your cart is empty"))};t.default=function(e){var t=(0,s.jD)(),a=t.isCartEmpty,c=t.allCartItems;return n.createElement("ul",{className:"content__cart-list"},a?n.createElement(r,null):c.map((function(e){return n.createElement(l.default,{key:e.id,id:e.id,amount:e.amount})})))}},1827:function(e,t,a){a.r(t);var n=a(7294),c=a(1995),l=a(3807),s=a(6749);t.default=function(e){var t=e.id,a=e.amount,r=(0,s.Bi)(t),m=r.setCartAmount,i=r.removeCartItem,o=r.currentItem,u=o.name,p=o.imgPath,d=o.price,E=o.gender,_=o.lightDark,h=o.sleeve,f=o.totalPurchaseCount,N="".concat(E," / ").concat(_," / ").concat(h,"-sleeve");return n.createElement("li",{className:"content__cart-tile"},n.createElement(c.Z,{classes:"cart-tile__img",src:p,alt:u}),n.createElement("div",{className:"cart-tile__details"},n.createElement("span",{className:"detail-name"},u),n.createElement("span",{className:"detail-specs"},N),n.createElement("span",{className:"detail-purchase-count"},n.createElement("span",{className:"num"},f)," of this item have been sold so far.")),n.createElement("div",{className:"cart-tile__cta"},n.createElement("div",{className:"price-and-amount"},n.createElement("span",{className:"detail-price"},n.createElement("span",{className:"text"},"price:"),n.createElement("span",{className:"num"},"$ ",d)),n.createElement("span",{className:"detail-amount"},n.createElement("span",{className:"text"},"amount: "),n.createElement(l.Z,{amount:a,onChange:m}))),n.createElement("button",{type:"button",className:"is-outlined cart-tile__remove-btn",onClick:i},"remove")))}},1415:function(e,t,a){a.r(t);var n=a(3354);t.default=n.default},1470:function(e,t,a){a.r(t);var n=a(4795);t.default=n.default}}]);