"use strict";(self.webpackChunka_tiny_shop=self.webpackChunka_tiny_shop||[]).push([[859,901,233],{3354:function(e,t,a){a.r(t);var n=a(7294),c=a(1827),l=a(7560);t.default=function(e){return n.createElement("ul",{className:"content__cart-list"},l.Z.slice(0,3).map((function(e){return n.createElement(c.default,{key:e.id,id:e.id,amount:5})})))}},1827:function(e,t,a){a.r(t);var n=a(7294),c=a(1995),l=a(3807),s=a(6749);t.default=function(e){var t=e.id,a=e.amount,r=(0,s.j)(t),m=r.setCartAmount,i=r.removeCartItem,u=r.currentItem,o=u.name,d=u.imgPath,p=u.price,E=u.gender,_=u.lightDark,f=u.sleeve,N=u.totalPurchaseCount,v="".concat(E," / ").concat(_," / ").concat(f,"-sleeve");return n.createElement("li",{className:"content__cart-tile"},n.createElement(c.Z,{classes:"cart-tile__img",src:d,alt:o}),n.createElement("div",{className:"cart-tile__details"},n.createElement("span",{className:"detail-name"},o),n.createElement("span",{className:"detail-specs"},v),n.createElement("span",{className:"detail-purchase-count"},n.createElement("span",{className:"num"},N)," of this item have been sold so far.")),n.createElement("div",{className:"cart-tile__cta"},n.createElement("div",{className:"price-and-amount"},n.createElement("span",{className:"detail-price"},n.createElement("span",{className:"text"},"price:"),n.createElement("span",{className:"num"},"$ ",p)),n.createElement("span",{className:"detail-amount"},n.createElement("span",{className:"text"},"amount: "),n.createElement(l.Z,{amount:a,onChange:m}))),n.createElement("button",{type:"button",className:"is-outlined cart-tile__remove-btn",onClick:i},"remove")))}},1415:function(e,t,a){a.r(t);var n=a(3354);t.default=n.default}}]);