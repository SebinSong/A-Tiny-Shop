"use strict";(self.webpackChunka_tiny_shop=self.webpackChunka_tiny_shop||[]).push([[879,147],{2964:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(3099),r=n(7294),i=n(9704),c=n(2436),o=n(8580);function s(e){var t=e.classes,n=void 0===t?"":t,i=e.initialText,c=void 0===i?"Select option":i,s=e.initialItem,l=void 0===s?null:s,m=e.options,u=void 0===m?[]:m,d=e.onItemSelect,p=void 0===d?null:d,f=(0,r.useRef)(),v=(0,r.useState)(l?l.name:c),E=(0,a.Z)(v,2),_=E[0],h=E[1],y=(0,r.useState)(!1),N=(0,a.Z)(y,2),g=N[0],w=N[1],k=["dropdown-container",n,g&&"is-expanded"].filter(Boolean).join(" ");return r.createElement("div",{className:k,tabIndex:"1"},r.createElement("button",{className:"dropdown__selected-item",onClick:function(){w((function(e){return!e}))},ref:f},r.createElement("span",{className:"text"},_),r.createElement(o.Z,{classes:"selected-item__arrow"},"expand_more")),r.createElement("ul",{className:"dropdown__option-list"},u.map((function(e){return r.createElement("li",{key:e.id,className:"dropdown__option-list-item",onClick:function(){return function(e){h(e.name),w((function(e){return!e})),p&&p(e),f.current.focus()}(e)}},e.name)}))))}var l=(0,r.memo)(s),m=n(1995),u=n(4572);function d(e){var t=e.productInfo,n=void 0===t?null:t,a=e.classes,c=void 0===a?"":a,o=e.tag,s=void 0===o?"div":o,l=e.overrideBtnClick,d=void 0===l?null:l,p=(0,i.I0)();if(!n)return null;var f=n.imgPath,v=n.name,E=n.price,_=r.createElement(r.Fragment,null,r.createElement("div",{className:"product-card__img-container"},r.createElement(m.Z,{src:f,alt:v,imageMinHeight:200})),r.createElement("div",{className:"product-card__item-summary"},r.createElement("span",{className:"item-summary__name"},v),r.createElement("span",{className:"item-summary__price"},"$ ",E.toFixed(2))),r.createElement("button",{className:"is-secondary item-summary__view-detail-btn",onClick:function(){d?d(n):p((0,u.K1)(n))}},"View Detail"));return(0,r.createElement)(s,{className:"product-card ".concat(c)},_)}var p=(0,r.memo)(d),f=n(8266);function v(e){var t=e.itemList,n=e.itemRender;return r.createElement("div",{className:"masonry__column"},t.map((function(e){return n(e)})))}function E(e){var t=e.classes,n=void 0===t?"":t,i=e.list,c=void 0===i?null:i,o=e.itemRender,s=void 0===o?null:o,l=e.noPadding,m=void 0!==l&&l,u=e.itemWidth,d=void 0===u?260:u,p=e.gap,E=void 0===p?15:p,_=(0,r.useRef)(null),h=(0,r.useState)(1),y=(0,a.Z)(h,2),N=y[0],g=y[1];(0,r.useEffect)((function(){var e=_.current,t=function(){var t,n,a=parseFloat((t=e,n="width",window.getComputedStyle(t)[n])),r=m?a:a-2*E,i=d+2,c=Math.floor(r/i),o=r%i;g(c<=1?1:function(){return o>=E*(c-1)?c:c-1})};return window.addEventListener("resize",t),e.style.setProperty("--masonry-item-width","".concat(d,"px")),e.style.setProperty("--masonry-gap","".concat(E,"px")),t(),function(){window.removeEventListener("resize",t)}}),[]);var w=[n,m&&"no-padding"].filter(Boolean).join(" "),k=(0,f.BR)(N).map((function(){return[]}));return c.forEach((function(e,t){k[t%N].push(e)})),r.createElement("div",{ref:_,className:"masonry-container ".concat(w)},k.map((function(e,t){return r.createElement(v,{key:"col-".concat(t),itemList:e,itemRender:s})})))}var _=(0,r.memo)(E),h=n(7560),y=[{id:"most-popular",name:"Most popular"},{id:"top-rated",name:"Top rated"},{id:"lowest-price",name:"Lowest price"},{id:"highest-price",name:"highest price"}],N=null;var g=function(e){var t=(0,i.I0)(),n=(0,i.v9)(c.ZQ),o=(0,i.v9)(c.Cz),s=(0,r.useState)(!1),m=(0,a.Z)(s,2),u=m[0],d=m[1],f=(0,r.useState)(h.Z),v=(0,a.Z)(f,2),E=v[0],g=v[1];(0,r.useEffect)((function(){d(!0);var e=h.Z.filter((function(e){return["sleeve","gender","lightDark"].every((function(t){return k(e,t,n[t])}))}));if(o){var t=c._L[o];t&&e.sort(t)}clearTimeout(N),N=setTimeout((function(){d(!1),g(e)}),200+Math.floor(100*Math.random()))}),[n,o]);var w=(0,r.useCallback)((function(e){t((0,c.HD)(e.id))})),k=function(e,t,n){return 0===n.length||n.includes(e[t])},b=(0,r.useCallback)((function(e){return r.createElement(p,{classes:"product-list__item",tag:"div",key:e.id,productInfo:e})}));return r.createElement("section",{className:"catalog-page__product-list"},r.createElement("div",{className:"product-list__section-header"},r.createElement("div",{className:"section-header__text"},r.createElement("h1",null,"Available products"),r.createElement("span",{className:"items-count"},r.createElement("span",{className:"slash"},"/"),r.createElement("span",{className:"count"},r.createElement("span",{className:"num"},u?0:E.length),"items found"))),r.createElement("div",{className:"sort-by"},r.createElement("span",{className:"text"},"Sort by :"),r.createElement(l,{classes:"sort-by-dropdown",options:y,onItemSelect:w}))),r.createElement("div",{className:"product-list__content"},u?r.createElement("p",null,"Loading..."):r.createElement(_,{itemWidth:240,gap:32,list:E,itemRender:b})))}},6793:function(e,t,n){n.r(t);var a=n(2964);t.default=a.default}}]);