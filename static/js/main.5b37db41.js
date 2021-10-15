!function(){var e,t,n,r,a,i={4285:function(e,t,n){"use strict";var r=n(7294),a=n(3935),i=n(3727),c=n(9704),o=n(5977),l=n(684),s=n(1473),u=n(7462),d=n(3099),m={desktop:"(min-width: 1200px)","from-tablet":"(min-width: 769px)",tablet:"(min-width: 769px) and (max-width: 1199px)","till-tablet":"(max-width: 768px)","from-large-phone":"(min-width: 415px)","large-phone":"(min-width: 415px) and (max-width: 768px)","till-large-phone":"(max-width: 414px)","small-phone":"(max-width: 414px)"};var p=function(e){var t=m[e||""];if(!t)throw new Error('useMQ custom hook error - device option "'.concat(e,'" not supported'));var n=(0,r.useState)(!1),a=(0,d.Z)(n,2),i=a[0],c=a[1],o=function(){window.matchMedia(t).matches?c(!0):c(!1)};return(0,r.useEffect)((function(){return window.addEventListener("resize",o),o(),function(){window.removeEventListener("resize",o)}}),[]),i},g={isActive:!1};var f=n(4942);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={isOpen:!1,badgeOn:!1};var _=function(e){return e.cartWidget.isOpen},y=function(e){return e.cartWidget.badgeOn},k=n(8580),E=n(8266);var w=function(e){var t=e.children,n=void 0===t?"":t,a=e.classes,i=void 0===a?"":a,c=e.onClick,o=void 0===c?null:c,l=e.showBadge,s=void 0!==l&&l;return r.createElement("li",{className:"toolbar__item icon-button ".concat(i),onClick:o},r.createElement(k.Z,{tag:"button",classes:"icon-button__icon ".concat((0,E.og)("has-badge",s))},n))};var O=function(){var e=(0,c.I0)(),t=(0,c.v9)(y),n=(0,r.useCallback)((function(){return e({type:"search-widget/toggle"})}),[]),a=(0,r.useCallback)((function(){return e({type:"cart-widget/open"})}),[]);return r.createElement("ul",{className:"toolbar__icon-btn-container"},r.createElement(w,{classes:"search-icon",onClick:n},"search"),r.createElement(w,{classes:"cart-icon",showBadge:t,onClick:a},"shopping_cart"))};var x=function(e){var t=e.children,n=void 0===t?"":t,a=e.name,c=void 0===a?"":a,l=e.to,s=void 0===l?"/":l,u=(0,o.k6)();return r.createElement("li",{className:"toolbar__item nav-link",onClick:function(){return u.push(s)}},r.createElement(i.OL,{to:s,activeClassName:"active"},n||c||""))},P=n(4308);var C=function(e){var t=(0,o.k6)();return r.createElement("li",{className:"toolbar__item logo",onClick:function(){return t.push("/home")}},r.createElement("a",null,r.createElement("img",{className:"toolbar__logo-image",alt:"tiny-shop-logo",src:P})))},j=[{id:"home",name:"Home",icon:"home",navigateTo:"/home"},{id:"catalog",name:"Catalog",icon:"category",navigateTo:"/catalog"},{id:"shopping-cart",name:"Shopping Cart",icon:"shopping_cart",navigateTo:"/shopping-cart"}];function N(e){var t=e.isDrawerOpen,n=void 0!==t&&t,a=e.closeDrawer,i=void 0===a?null:a,c=(0,o.k6)();return r.createElement("div",{className:"drawer-container ".concat((0,E.og)("is-open",n))},r.createElement("ul",{className:"drawer__menu-list"},r.createElement("li",{className:"drawer__menu-list-header"},r.createElement("img",{className:"menu-list-header__img",alt:"logo",src:P}),r.createElement("span",{className:"menu-list-header__close-btn",onClick:i},r.createElement(k.Z,{classes:"icon",tag:"button"},"close"),r.createElement("span",{className:"hover-helper"})),r.createElement("span",{className:"menu-list-header__dash-line"})),j.map((function(e){var t=e.id,n=e.name,a=e.navigateTo,o=e.icon;return r.createElement("li",{key:t,onClick:function(){return e=a,i&&i(),void setTimeout((function(){return c.push(e)}),200);var e},className:"drawer__menu-list-item"},r.createElement(k.Z,{classes:"menu-list-item__icon"},o),r.createElement("button",{className:"text"},n),r.createElement(k.Z,{classes:"menu-list-item__arrow"},"chevron_right"))}))),r.createElement("div",{className:"drawer__backdrop",onClick:i}))}var D=(0,r.memo)(N);var S=function(e){var t=e.value,n=void 0===t?"":t,a=e.onInput,i=void 0===a?null:a,c=e.tabIndex,o=void 0===c?0:c,l=e.classes,s=void 0===l?"":l,u=e.placeholder,d=void 0===u?"":u;return r.createElement("span",{className:"search-input ".concat(s)},r.createElement("input",{className:"search-input__input",type:"text",tabIndex:o,value:n,placeholder:d,onChange:i}),r.createElement(k.Z,{classes:"search-input__search-icon"},"search"))},Z=n(1995),I=n(4572);var T=function(e){var t=e.currentSearchKeyword,n=void 0===t?"":t,a=e.itemData,i=void 0===a?null:a,o=(0,c.I0)(),l=i.imgPath,s=i.name,u=i.price,d=function(e,t){var n=t.toLowerCase().indexOf(e.toLowerCase());return!e||n<0?t:[t.slice(0,n),r.createElement("span",{key:"highlighted",className:"highlighted"},t.slice(n,n+e.length)),t.slice(n+e.length)]}(n.trim(),s);return r.createElement("div",{className:"search-widget__search-item",onClick:function(){o((0,I.K1)(i))}},r.createElement(Z.Z,{classes:"search-item__img",src:l,alt:s}),r.createElement("span",{className:"search-item__item-details"},r.createElement("span",{className:"item-details__name"},d),r.createElement("span",{className:"item-details__price"},"$ ",u)))},A=n(7560);function L(e){var t=(0,c.I0)(),n=(0,c.v9)((function(e){return e.searchWidget.isActive})),a=(0,r.useState)(""),i=(0,d.Z)(a,2),o=i[0],l=i[1],s=(0,r.useState)([]),u=(0,d.Z)(s,2),m=u[0],p=u[1],g=(0,r.useState)(!1),f=(0,d.Z)(g,2),h=f[0],v=f[1],b=(0,r.useCallback)((function(e){var t=e.target.value;l((function(e){return e!==t?t:e})),v(!0),setTimeout((function(){var e=t.trim().toLowerCase(),n=e?A.Z.filter((function(t){return t.name.toLowerCase().indexOf(e)>=0})):[];p(n),v(!1)}),200)})),_=(0,r.useCallback)((function(){t({type:"search-widget/close"})}));return r.createElement("div",{className:"search-widget ".concat((0,E.og)("is-active",n))},r.createElement("div",{className:"search-widget__search-bar"},r.createElement(k.Z,{classes:"search-widget__close-btn",tag:"button",onClick:_},"close"),r.createElement(S,{classes:"search-widget__search-input",value:o,onInput:b,placeholder:"Search ..."})),r.createElement("div",{className:"search-widget__content"},h?r.createElement("div",null,"Loading ..."):0===m.length?r.createElement("div",null,"no items found"):m.map((function(e){return r.createElement(T,{key:e.id,currentSearchKeyword:o,itemData:e})}))))}var B=(0,r.memo)(L);var M=function(e){var t=e.amount,n=void 0===t?0:t,a=e.classes,i=void 0===a?"":a,c=e.isSmall,o=void 0!==c&&c,l=e.disableInput,s=void 0!==l&&l,u=e.min,m=void 0===u?1:u,p=e.max,g=void 0===p?99:p,f=e.onChange,h=void 0===f?null:f,v=(0,r.useState)(n),b=(0,d.Z)(v,2),_=b[0],y=b[1];(0,r.useEffect)((function(){y(n)}),[n]);var E=function(e){y(e),h&&h(e)},w=["amount-selector",i,o&&"is-small"].filter(Boolean).join(" ");return r.createElement("span",{className:w},r.createElement(k.Z,{classes:"amount-selector__btn plus",tag:"button",onClick:function(){_<g&&E(_+1)}},"add"),r.createElement("input",{className:"amount-selector__input",type:"text",value:_,disabled:s,onChange:function(e){var t=e.target.value;if(""!==t){if(/^\d+$/g.test(t)&&function(e,t,n){return(e=Number(e))>=t&&e<=n}(t,m,g)){var n=Number(t);E(n)}}else y("")},onBlur:function(){""===_&&E(0)}}),r.createElement(k.Z,{classes:"amount-selector__btn minus",tag:"button",onClick:function(){_>m&&E(_-1)}},"remove"))},F=n(4538);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=[],R=function(e){return e<99?e+1:e},U=function(e){return e>1?e-1:e},G=function(e){return e>=1&&e<=99},K=function(e){return{type:"cart/set-amount",payload:{id:e.id,amount:e.amount}}};var q=function(e){return e.cart},$=function(e){return e.cart.reduce((function(e,t){var n=t.amount,r=t.data;return e+n*parseFloat(r.price)}),0).toFixed(2)};function Y(e){var t=e.classes,n=void 0===t?"":t,a=e.itemData,i=void 0===a?null:a,o=e.amount,l=(0,c.I0)(),s="cart-widget__item  ".concat(n),u=i||{},d=u.imgPath,m=u.name,p=u.price,g=u.id,f=(0,r.useCallback)((function(e){l(K({id:g,amount:e}))}),[]);return r.createElement("div",{className:s},r.createElement(Z.Z,{classes:"cart-widget__item-img",src:d,alt:m}),r.createElement("span",{className:"cart-widget__item-details"},r.createElement("span",{className:"item-details__name"},m),r.createElement("span",{className:"item-details__price"},"$ ",p),r.createElement("span",{className:"item-details__cta-container"},r.createElement(M,{classes:"item-details__amount-selector",isSmall:!0,disableInput:!0,amount:o,onChange:f}),r.createElement("button",{type:"button",className:"item-details__remove-btn",onClick:function(){l(function(e){return{type:"cart/remove",payload:{id:e}}}(g))}},"remove"))))}var J=(0,r.memo)(Y),Q=function(){return r.createElement("li",{className:"empty-cart"},r.createElement(k.Z,{classes:"icon"},"face"),r.createElement("span",{className:"text"},"Your cart is empty"))};function X(e){var t=(0,c.I0)(),n=(0,c.v9)(_),a=(0,c.v9)(q),i=(0,c.v9)($),o=0===a.length,l=(0,r.useCallback)((function(){return t({type:"cart-widget/close"})}),[]);return r.createElement("div",{className:"cart-widget-container ".concat((0,E.og)("is-open",n))},r.createElement("div",{className:"cart-widget__overlay",onClick:l}),r.createElement("div",{className:"cart-widget__content"},r.createElement("div",{className:"cart-widget__content-header"},r.createElement("span",{className:"header-text"},"Cart"),r.createElement(k.Z,{classes:"header-close-btn",tag:"button",onClick:l},"close")),r.createElement("ul",{className:"cart-widget__item-list"},o?r.createElement(Q,null):a.map((function(e){return r.createElement(J,{key:e.id,amount:e.amount,itemData:e.data})}))),o?null:r.createElement("div",{className:"cart-widget__button-container"},r.createElement("button",{type:"button",className:"is-primary check-out-btn"},r.createElement("span",{className:"text"},"Check out"),r.createElement("span",{className:"total-amount"},"$ ",i)))))}var V=(0,r.memo)(X),ee=[{id:"home",name:"Home",to:"/home"},{id:"catalog",name:"Catalog",to:"/catalog"},{id:"cart",name:"Shopping Cart",to:"/shopping-cart"}];var te=function(e){var t=p("from-tablet"),n=(0,r.useState)(!1),a=(0,d.Z)(n,2),i=a[0],c=a[1],o=(0,r.useCallback)((function(){return c(!0)}),[]),l=(0,r.useCallback)((function(){return c(!1)}),[]),s=r.createElement("ul",{className:"toolbar__nav-link-container"},r.createElement(C,null),ee.map((function(e){return r.createElement(x,(0,u.Z)({key:e.id},e))}))),m=r.createElement(r.Fragment,null,r.createElement(w,{classes:"menu-icon",onClick:o},"menu"),r.createElement(C,null));return r.createElement("aside",{className:"navigation-bar"},r.createElement("ul",{className:"toolbar-container"},t?s:m,r.createElement(O,null)),r.createElement(D,{isDrawerOpen:i,closeDrawer:l}),r.createElement(B,null),r.createElement(V,null))};var ne=function(e){var t=e.productData,n=e.closeModal,a=(0,c.I0)(),i=(0,r.useState)(0),o=(0,d.Z)(i,2),l=o[0],s=o[1],u=(0,r.useState)(!1),m=(0,d.Z)(u,2),p=m[0],g=m[1],f=(0,c.v9)(q);(0,r.useEffect)((function(){var e=f.find((function(e){return e.id===t.id})),n=Boolean(e);g(n),s(n?e.amount:1)}),[t,f]);var h=(0,r.useCallback)((function(e){return s(e)}),[]);return r.createElement("div",{className:"details__btn-container"},r.createElement(M,{classes:"details__amount-selector",amount:l,onChange:h}),r.createElement("button",{className:"is-primary details__add-to-cart-btn",onClick:function(){if(p){var e={id:t.id,amount:l};a(K(e))}else{var r={id:t.id,amount:l,data:t};a(function(e){return{type:"cart/add",payload:{id:e.id,amount:e.amount,data:e.data}}}(r)),a({type:"cart-widget/badge-on"})}n()}},p?"Update Cart":"Add To Cart"))};var re=function(){var e=(0,c.I0)(),t=(0,c.v9)(I.uv),n=(0,c.v9)(I.b8),a=n||{},i=a.name,o=a.imgPath,l=a.sleeve,s=a.lightDark,u=a.gender,d=a.price,m=a.totalPurchaseCount,p=(0,r.useCallback)((function(){e((0,I.dx)())}),[]);return r.createElement("div",{className:"product-detail-modal ".concat((0,E.og)("is-open",t))},r.createElement("div",{className:"product-detail-modal__overlay",onClick:p}),r.createElement("div",{className:"product-detail-modal__content"},Boolean(n)&&r.createElement(r.Fragment,null,r.createElement("div",{className:"product-detail-modal__img-container"},r.createElement(Z.Z,{classes:"img-container__img-box",src:o,alt:i})),r.createElement("div",{className:"product-detail-modal__details"},r.createElement("div",{className:"details__name"},i),r.createElement("div",{className:"details__price"},"$ ",d.toFixed(2)),r.createElement("div",{className:"details__detail-group"},r.createElement("span",{className:"detail-group__header"},"Details"),r.createElement("span",{className:"detail-group__item"},r.createElement("label",null,"gender"),r.createElement("span",{className:"value"},u)),r.createElement("span",{className:"detail-group__item"},r.createElement("label",null,"sleeve"),r.createElement("span",{className:"value"},l)),r.createElement("span",{className:"detail-group__item"},r.createElement("label",null,"light / dark"),r.createElement("span",{className:"value"},s)),r.createElement("span",{className:"detail-group__item"},r.createElement("label",null,"total purchased"),r.createElement("span",{className:"value count"},m))),r.createElement(ne,{isModalOpen:t,productData:n,closeModal:p})),r.createElement(k.Z,{classes:"product-detail-modal__close-btn",tag:"button",onClick:p},"close"))))},ae=function(e){var t=e.searchWidget,n=e.productDetail,r=e.cartWidget;return n.isOpen||t.isActive||r.isOpen},ie=(0,l.ZP)((function(e){return(0,E.uq)(n(6705)("./".concat(e.name)),1200,2e4)}),{fallback:r.createElement(s.default,null),cacheKey:function(e){return e.name}});var ce=function(e){var t=(0,c.v9)(ae);return(0,r.useEffect)((function(){var e,n;e=t,n=document.documentElement.classList,e?n.add("disable-scroll"):n.remove("disable-scroll")}),[t]),r.createElement(r.Fragment,null,r.createElement(te,null),r.createElement(re,null),r.createElement(o.rs,null,r.createElement(o.AW,{path:"/home"},r.createElement(ie,{name:"home"})),r.createElement(o.AW,{path:"/catalog"},r.createElement(ie,{name:"catalog"})),r.createElement(o.AW,{path:"/shopping-cart"},r.createElement(ie,{name:"shopping-cart"})),r.createElement(o.l_,{to:"/catalog"})))},oe=n(4890),le=n(8500),se=n(2436),ue=(0,oe.UY)({catalog:se.Od,searchWidget:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case"search-widget/open":return{isActive:!0};case"search-widget/close":return{isActive:!1};case"search-widget/toggle":return{isActive:!e.isActive};default:return e}},productDetail:I.Hn,cartWidget:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,n=e.isOpen;switch(e.badgeOn,t.type){case"cart-widget/open":return{isOpen:!0,badgeOn:!1};case"cart-widget/close":return{isOpen:!1,badgeOn:!1};case"cart-widget/toggle":return{isOpen:!n,badgeOn:!1};case"cart-widget/badge-on":return v(v({},e),{},{badgeOn:!0});case"cart-widget/badge-off":return v(v({},e),{},{badgeOn:!1})}return e},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"cart/add":return[].concat((0,F.Z)(e),[(0,E.Xh)(r)]);case"cart/remove":return e.filter((function(e){return e.id!==r.id}));case"cart/increment-amount":return e.map((function(e){return e.id!==r.id?e:H(H({},e),{},{amount:R(e.amount)})}));case"cart/decrement-amount":return e.map((function(e){return e.id!==r.id?e:H(H({},e),{},{amount:U(e.amount)})}));case"cart/set-amount":return e.map((function(e){return e.id!==r.id?e:H(H({},e),{},{amount:G(r.amount)?r.amount:e.amount})}))}return e}}),de=(0,le.Uo)(),me=(0,oe.MT)(ue,de),pe=document.querySelector("#root");a.render(r.createElement(i.UT,null,r.createElement(c.zt,{store:me},r.createElement(ce,null))),pe)},8580:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294);function a(e){var t=e.name,n=void 0===t?"":t,a=e.classes,i=void 0===a?"":a,c=e.isBold,o=void 0!==c&&c,l=e.tag,s=void 0===l?"span":l,u=e.children,d=void 0===u?"":u,m=e.onClick,p=void 0===m?null:m;return(0,r.createElement)(s,{className:["mi",o&&"mib",i].filter(Boolean).join(" "),onClick:p},d||n||"")}var i=(0,r.memo)(a)},1995:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(3099),a=n(7294);var i=function(e){var t=e.src,n=void 0===t?"":t,i=e.alt,c=void 0===i?"":i,o=e.imageWidth,l=void 0===o?100:o,s=e.imageMinHeight,u=void 0===s?100:s,d=e.classes,m=void 0===d?"":d,p=e.delay,g=void 0===p?80:p,f=(0,a.useRef)(null),h=(0,a.useRef)(null),v=(0,a.useState)(!1),b=(0,r.Z)(v,2),_=b[0],y=b[1];(0,a.useEffect)((function(){var e=h.current.style;e.setProperty("--image-width","".concat(l,"px")),e.setProperty("--image-min-height","".concat(u,"px")),f.current.addEventListener("load",(function(){setTimeout((function(){f.current&&y(!0)}),g)}))}),[]);var k=[m,_&&"is-loaded"].filter(Boolean).join(" ");return a.createElement("span",{ref:h,className:"image-loader-box ".concat(k)},a.createElement("span",{className:"image-loader-box__loading-animation"}),a.createElement("img",{ref:f,src:n,alt:c}))}},5774:function(e,t,n){"use strict";n.r(t);var r=n(7294);function a(){return r.createElement("main",{className:"page fallback"},"Loading the page...")}t.default=(0,r.memo)(a)},1473:function(e,t,n){"use strict";n.r(t);var r=n(5774);t.default=r.default},2436:function(e,t,n){"use strict";n.d(t,{kE:function(){return o},cT:function(){return l},HD:function(){return s},ZQ:function(){return h},Cz:function(){return v},Od:function(){return u},_L:function(){return b}});var r=n(4942);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={filters:{sleeve:[],gender:[],lightDark:[]},sort:""},o=[{filterName:"Sleeve",filterId:"sleeve",items:[{id:"long",name:"Long"},{id:"short",name:"Short"}]},{filterName:"Gender",filterId:"gender",items:[{id:"unisex",name:"Unisex"},{id:"men",name:"Men"},{id:"women",name:"Women"}]},{filterName:"Light / Dark",filterId:"lightDark",items:[{id:"light",name:"Light"},{id:"dark",name:"Dark"}]}],l=function(e){return{type:"catalog/filter/toggle",payload:{filterType:e.filterType,filterItem:e.filterItem}}},s=function(e){return{type:"catalog/sort/set",payload:{type:e}}};function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload,a=e.filters,o=(e.sort,[a,null==r?void 0:r.filterType,null==r?void 0:r.filterItem]);switch(n){case"catalog/filter/add":if(!d.apply(void 0,o))return i(i({},e),{},{filters:m.apply(void 0,o)});case"catalog/filter/remove":if(d.apply(void 0,o))return i(i({},e),{},{filters:p.apply(void 0,o)});case"catalog/filter/toggle":return i(i({},e),{},{filters:g.apply(void 0,o)});case"catalog/filter/reset":return i(i({},e),{},{filters:f(a,r.filterType)});case"catalog/sort/set":return i(i({},e),{},{sort:r.type});case"catalog/sort/remove":return i(i({},e),{},{sort:""})}return e}function d(e,t,n){return e[t].includes(n)}function m(e,t,n){var a=e[t].slice();return a.push(n),i(i({},e),{},(0,r.Z)({},t,a))}function p(e,t,n){var a=e[t].slice(),c=a.indexOf(n);return a.splice(c,1),i(i({},e),{},(0,r.Z)({},t,a))}function g(){return d.apply(void 0,arguments)?p.apply(void 0,arguments):m.apply(void 0,arguments)}function f(e,t){return e}var h=function(e){return e.catalog.filters},v=function(e){return e.catalog.sort},b={"most-popular":function(e,t){return t.totalPurchaseCount-e.totalPurchaseCount},"top-rated":function(e,t){return t.rate-e.rate},"lowest-price":function(e,t){return e.price-t.price},"highest-price":function(e,t){return t.price-e.price}}},4572:function(e,t,n){"use strict";n.d(t,{Hn:function(){return s},K1:function(){return o},dx:function(){return l},b8:function(){return u},uv:function(){return d}});var r=n(4942);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={isOpen:!1,productData:null},o=function(e){return{type:"product-detail/open",payload:e}},l=function(){return{type:"product-detail/close"}};function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload,a=e.isOpen;switch(n){case"product-detail/open":if(!a)return{isOpen:!0,productData:r};case"product-detail/close":if(a)return i(i({},e),{},{isOpen:!1})}return e}var u=function(e){return e.productDetail.productData},d=function(e){return e.productDetail.isOpen}},7560:function(e,t,n){"use strict";var r=[{productIndex:0,id:"ArborealGreySweat_long_bright_unisex_0",imgPath:n(2907),name:"Arboreal sweat - grey",sleeve:"long",lightDark:"light",gender:"unisex",price:70,totalPurchaseCount:90,rate:3.59},{productIndex:1,id:"AurevoirWhiteSweat_long_bright_women_1",imgPath:n(8017),name:"Aurevoir sweat - white",sleeve:"long",lightDark:"light",gender:"women",price:75,totalPurchaseCount:103,rate:4.69},{productIndex:2,id:"AveaWhiteTShirt_short_bright_unisex_2",imgPath:n(5511),name:"Avea t-shirt - white",sleeve:"short",lightDark:"light",gender:"unisex",price:40,totalPurchaseCount:94,rate:4.98},{productIndex:3,id:"BluePrintedTShirt_short_dark_men_3",imgPath:n(6955),name:"Blue printed t-shirt",sleeve:"short",lightDark:"dark",gender:"men",price:49.99,totalPurchaseCount:138,rate:3.81},{productIndex:4,id:"CapeTownWhiteTShirt_short_bright_men_4",imgPath:n(957),name:"Capetown t-shirt - white",sleeve:"short",lightDark:"light",gender:"men",price:39.99,totalPurchaseCount:68,rate:4.48},{productIndex:5,id:"CRDBlackHood_long_dark_men_5",imgPath:n(3712),name:"CRD hood - black",sleeve:"long",lightDark:"dark",gender:"men",price:84.99,totalPurchaseCount:133,rate:4.2},{productIndex:6,id:"GreyPrintedSweatShirt_long_bright_women_6",imgPath:n(1716),name:"Printed sweat shirt - grey",sleeve:"long",lightDark:"light",gender:"women",price:55,totalPurchaseCount:51,rate:4.21},{productIndex:7,id:"HerbalistHood_long_dark_unisex_7",imgPath:n(5794),name:"Herbalist hood",sleeve:"long",lightDark:"dark",gender:"unisex",price:75,totalPurchaseCount:6,rate:4.09},{productIndex:8,id:"LoveForestTShirt_short_bright_men_8",imgPath:n(6537),name:"Love-Forest t-shirt",sleeve:"short",lightDark:"light",gender:"men",price:35,totalPurchaseCount:6,rate:4.58},{productIndex:9,id:"MuziBlackSweat_long_dark_men_9",imgPath:n(594),name:"Muzi sweat - black",sleeve:"long",lightDark:"dark",gender:"men",price:34.99,totalPurchaseCount:17,rate:3.51},{productIndex:10,id:"MuziBlackTShirt_short_dark_men_10",imgPath:n(8147),name:"Muzi tee - black",sleeve:"short",lightDark:"dark",gender:"men",price:29.99,totalPurchaseCount:143,rate:4.81},{productIndex:11,id:"MuziWhiteLongTShirt_long_bright_women_11",imgPath:n(753),name:"Muzi long t-shirt - white",sleeve:"long",lightDark:"light",gender:"women",price:45,totalPurchaseCount:55,rate:4.47},{productIndex:12,id:"MuziWhiteTShirt_short_bright_men_12",imgPath:n(9877),name:"Muzi t-shirt - white",sleeve:"short",lightDark:"light",gender:"men",price:29.99,totalPurchaseCount:104,rate:3.92},{productIndex:13,id:"MuziYellowTShirt_short_bright_women_13",imgPath:n(8309),name:"Muzi t-shirt - yellow",sleeve:"short",lightDark:"light",gender:"women",price:34.99,totalPurchaseCount:128,rate:4.19},{productIndex:14,id:"OrangeTShirt_short_bright_men_14",imgPath:n(2807),name:"Orange t-shirt",sleeve:"short",lightDark:"light",gender:"men",price:49.99,totalPurchaseCount:68,rate:4.1},{productIndex:15,id:"ReskpPurpleHood_long_bright_men_15",imgPath:n(7520),name:"Reskp purple hood",sleeve:"long",lightDark:"light",gender:"men",price:65,totalPurchaseCount:100,rate:4.62},{productIndex:16,id:"RoddBlackSweat_long_dark_women_16",imgPath:n(7677),name:"Rodd sweat - black",sleeve:"long",lightDark:"dark",gender:"women",price:60,totalPurchaseCount:84,rate:4.99},{productIndex:17,id:"StylishGreyShirt_long_dark_women_17",imgPath:n(8033),name:"Stylish grey shirt",sleeve:"long",lightDark:"dark",gender:"women",price:54.99,totalPurchaseCount:9,rate:4.91},{productIndex:18,id:"WarmBlackCardigan_long_dark_unisex_18",imgPath:n(2962),name:"Warm black cardigan",sleeve:"long",lightDark:"dark",gender:"unisex",price:45,totalPurchaseCount:145,rate:4.25},{productIndex:19,id:"WhitePrintedTShirt_short_bright_women_19",imgPath:n(215),name:"Printed t-shirt - white",sleeve:"short",lightDark:"light",gender:"women",price:39.99,totalPurchaseCount:82,rate:4.04}];t.Z=r},8266:function(e,t,n){"use strict";n.d(t,{Xh:function(){return w},BR:function(){return E},uq:function(){return _},og:function(){return k}});var r=n(4538),a=n(5861),i=n(3099),c=n(5671),o=n(136),l=n(9077),s=n(1120),u=n(4566),d=n(7757),m=n.n(d);function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.Z)(e);if(t){var a=(0,s.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,l.Z)(this,n)}}var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise((function(t){return setTimeout(t,e)}))},f=function(e){(0,o.Z)(n,e);var t=p(n);function n(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"promise timed-out";return(0,c.Z)(this,n),(e=t.call(this,r)).name="PromiseTimeoutError",e.date=new Date,e}return n}((0,u.Z)(Error));function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Promise.all([e,g(t)]).then((function(e){return(0,i.Z)(e,1)[0]}))}function v(e){return b.apply(this,arguments)}function b(){return(b=(0,a.Z)(m().mark((function e(t){var n,r,a,i,c=arguments;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:1e4,r=new f,i=new Promise((function(e,t){a=setTimeout((function(){return t(r)}),n)})),e.abrupt("return",Promise.race([t,i]).then((function(e){return clearTimeout(a),e})).catch((function(e){throw clearTimeout(a),e})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return y.apply(this,arguments)}function y(){return(y=(0,a.Z)(m().mark((function e(t){var n,r,a=arguments;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:200,r=a.length>2&&void 0!==a[2]?a[2]:1e4,e.abrupt("return",v(h(t,n),r));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?e:""}function E(e){return Number.isInteger(e)?(0,r.Z)(new Array(e).keys()):[]}function w(e){return e?JSON.parse(JSON.stringify(e)):e}},6705:function(e,t,n){var r={"./catalog":[5093,194],"./catalog/":[5093,194],"./catalog/Catalog":[6541,992],"./catalog/Catalog.js":[6541,992],"./catalog/Catalog.scss":[596,356],"./catalog/category-filter":[4044,243],"./catalog/category-filter/":[4044,243],"./catalog/category-filter/CategoryFilter":[1141,803],"./catalog/category-filter/CategoryFilter.js":[1141,803],"./catalog/category-filter/CategoryFilter.scss":[6818,223],"./catalog/category-filter/FilterGroup":[4626,178],"./catalog/category-filter/FilterGroup.js":[4626,178],"./catalog/category-filter/index":[4044,243],"./catalog/category-filter/index.js":[4044,243],"./catalog/index":[5093,194],"./catalog/index.js":[5093,194],"./catalog/product-list":[6793,879],"./catalog/product-list/":[6793,879],"./catalog/product-list/ProductList":[2964,147],"./catalog/product-list/ProductList.js":[2964,147],"./catalog/product-list/ProductList.scss":[1564,698],"./catalog/product-list/index":[6793,879],"./catalog/product-list/index.js":[6793,879],"./fallback":[1473],"./fallback/":[1473],"./fallback/Fallback":[5774],"./fallback/Fallback.js":[5774],"./fallback/Fallback.scss":[8097,558],"./fallback/index":[1473],"./fallback/index.js":[1473],"./home":[9152,358],"./home/":[9152,358],"./home/Home":[4792,596],"./home/Home.js":[4792,596],"./home/Home.scss":[5340,773],"./home/index":[9152,358],"./home/index.js":[9152,358],"./shopping-cart":[1470,791],"./shopping-cart/":[1470,791],"./shopping-cart/ShoppingCart":[4795,586],"./shopping-cart/ShoppingCart.js":[4795,586],"./shopping-cart/ShoppingCart.scss":[8949,216],"./shopping-cart/index":[1470,791],"./shopping-cart/index.js":[1470,791]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=6705,e.exports=a},2907:function(e,t,n){"use strict";e.exports=n.p+"static/images/4661a30fd7b7ed775538.jpg"},8017:function(e,t,n){"use strict";e.exports=n.p+"static/images/26aebcf9d957e276648d.jpg"},5511:function(e,t,n){"use strict";e.exports=n.p+"static/images/6ad630a05992f2162f37.jpg"},6955:function(e,t,n){"use strict";e.exports=n.p+"static/images/61a8ca775656a20b2ad3.jpg"},3712:function(e,t,n){"use strict";e.exports=n.p+"static/images/0103f0a169bd537075d7.jpg"},957:function(e,t,n){"use strict";e.exports=n.p+"static/images/9b17cb8c273b05f905f5.jpg"},1716:function(e,t,n){"use strict";e.exports=n.p+"static/images/0921044314f158a08816.jpg"},5794:function(e,t,n){"use strict";e.exports=n.p+"static/images/b4038aa1909a0465339d.jpg"},6537:function(e,t,n){"use strict";e.exports=n.p+"static/images/587a90363f4992177c6a.jpg"},594:function(e,t,n){"use strict";e.exports=n.p+"static/images/aaf8a15379d806d979c2.jpg"},8147:function(e,t,n){"use strict";e.exports=n.p+"static/images/3812594a3df2f0de0ab8.jpg"},753:function(e,t,n){"use strict";e.exports=n.p+"static/images/5beb41eeefeaaf7cd364.jpg"},9877:function(e,t,n){"use strict";e.exports=n.p+"static/images/03ae7b53aec03d5b21cc.jpg"},8309:function(e,t,n){"use strict";e.exports=n.p+"static/images/6147be29401e61235040.jpg"},2807:function(e,t,n){"use strict";e.exports=n.p+"static/images/1e10a00ba90ec287c1a5.jpg"},7520:function(e,t,n){"use strict";e.exports=n.p+"static/images/397915c7959ecccfc0b2.jpg"},7677:function(e,t,n){"use strict";e.exports=n.p+"static/images/bf7b34849c14feff1974.jpg"},8033:function(e,t,n){"use strict";e.exports=n.p+"static/images/811e05f103e9b4b34078.jpg"},2962:function(e,t,n){"use strict";e.exports=n.p+"static/images/a834f040c3f29bf6e7b5.jpg"},215:function(e,t,n){"use strict";e.exports=n.p+"static/images/81fc1e29f8d4633f2f97.jpg"},4308:function(e,t,n){"use strict";e.exports=n.p+"static/images/dc7a24eb5b66220e2639.png"}},c={};function o(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={exports:{}};return i[e](n,n.exports,o),n.exports}o.m=i,e=[],o.O=function(t,n,r,a){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],a=e[u][2];for(var c=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(c=!1,a<i&&(i=a));if(c){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))},o.u=function(e){return"static/js/"+{147:"page-chunk18",178:"page-chunk10",194:"page-chunk0",216:"page-chunk41",223:"page-chunk9",243:"page-chunk5",356:"page-chunk4",358:"page-chunk30",558:"page-chunk27",586:"page-chunk39",596:"page-chunk32",698:"page-chunk20",773:"page-chunk34",791:"page-chunk37",803:"page-chunk7",879:"page-chunk16",992:"page-chunk2"}[e]+"."+{147:"c4cce136",178:"d8ce3b8d",194:"64e0e150",216:"0f383551",223:"86483e42",243:"18ba59e5",356:"907e6e69",358:"c33b99a2",558:"90d44af3",586:"fd690f71",596:"4bf96b75",698:"86f33381",773:"5a176d27",791:"3caaec8e",803:"cee252c0",879:"4d2f5318",992:"ed1840c8"}[e]+".chunk.js"},o.miniCssF=function(e){return"static/css/"+{147:"page-chunk18",178:"page-chunk10",194:"page-chunk0",216:"page-chunk41",223:"page-chunk9",243:"page-chunk5",356:"page-chunk4",358:"page-chunk30",586:"page-chunk39",596:"page-chunk32",698:"page-chunk20",773:"page-chunk34",791:"page-chunk37",803:"page-chunk7",879:"page-chunk16",992:"page-chunk2"}[e]+"."+{147:"92796e66",178:"1c413b99",194:"bfed5f6b",216:"c2791aa7",223:"3b384d92",243:"cb17a6bf",356:"8da7bad0",358:"5fa47de2",586:"c2791aa7",596:"5fa47de2",698:"a24e5b94",773:"5fa47de2",791:"c2791aa7",803:"cb17a6bf",879:"92796e66",992:"bfed5f6b"}[e]+".chunk.css"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},n="a-tiny-shop:",o.l=function(e,r,a,i){if(t[e])t[e].push(r);else{var c,l;if(void 0!==a)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+a){c=d;break}}c||(l=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",n+a),c.src=e),t[e]=[r];var m=function(n,r){c.onerror=c.onload=null,clearTimeout(p);var a=t[e];if(delete t[e],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((function(e){return e(r)})),n)return n(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=m.bind(null,c.onerror),c.onload=m.bind(null,c.onload),l&&document.head.appendChild(c)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="",r=function(e){return new Promise((function(t,n){var r=o.miniCssF(e),a=o.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=(c=n[r]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(a===e||a===t))return c}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var c;if((a=(c=i[r]).getAttribute("data-href"))===e||a===t)return c}}(r,a))return t();!function(e,t,n,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=function(i){if(a.onerror=a.onload=null,"load"===i.type)n();else{var c=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=c,l.request=o,a.parentNode.removeChild(a),r(l)}},a.href=t,document.head.appendChild(a)}(e,a,t,n)}))},a={179:0},o.f.miniCss=function(e,t){a[e]?t.push(a[e]):0!==a[e]&&{147:1,178:1,194:1,216:1,223:1,243:1,356:1,358:1,586:1,596:1,698:1,773:1,791:1,803:1,879:1,992:1}[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))},function(){var e={179:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,a){r=e[t]=[n,a]}));n.push(r[2]=a);var i=o.p+o.u(t),c=new Error;o.l(i,(function(n){if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}}),"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,i=n[0],c=n[1],l=n[2],s=0;for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(l)var u=l(o);for(t&&t(n);s<i.length;s++)a=i[s],o.o(e,a)&&e[a]&&e[a][0](),e[i[s]]=0;return o.O(u)},n=self.webpackChunka_tiny_shop=self.webpackChunka_tiny_shop||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var l=o.O(void 0,[42],(function(){return o(4285)}));l=o.O(l)}();