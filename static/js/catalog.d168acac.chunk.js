"use strict";(self.webpackChunka_tiny_shop=self.webpackChunka_tiny_shop||[]).push([[701],{7274:function(e,t,r){r.r(t),r.d(t,{default:function(){return D}});var n=r(7294),a=r(9704),i=r(8226),o=r(2436);function l(e){var t=e.item,r=void 0===t?null:t,a=e.children,o=void 0===a?"":a,l=e.onChange,c=void 0===l?null:l,s=e.value,u=void 0!==s&&s,m=o||(null==r?void 0:r.name)||"",d="checkbox-".concat(m);return n.createElement("span",{className:"checkbox-container ".concat((0,i.og)("is-on",u))},n.createElement("span",{className:"checkbox__box"},n.createElement("span",{className:"mark"}),n.createElement("input",{id:d,type:"checkbox",className:"checkbox__input",checked:u,onChange:function(){c&&(c&&c(r||{id:m,name:m},!u))}})),n.createElement("label",{className:"checkbox__label",htmlFor:d},m))}var c=(0,n.memo)(l),s=r(8580);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e){var t=e.filterName,r=void 0===t?"":t,l=e.filterId,m=void 0===l?"":l,d=e.items,p=void 0===d?[]:d,g=(0,a.I0)(),h=(0,a.v9)((function(e){return e.catalog.filters[m]})),f=u((0,n.useState)(!1),2),v=f[0],_=f[1],y=(0,n.useCallback)((function(e,t){g((0,o.cT)({filterType:m,filterItem:e.id}))}));return n.createElement("div",{className:"filter-group ".concat((0,i.og)("is-closed",v))},n.createElement("span",{className:"group-name",onClick:function(){return _((function(e){return!e}))}},n.createElement("span",{className:"text"},r),n.createElement(s.Z,{classes:"expand-arrow"},"arrow_circle_up")),n.createElement("div",{className:"items"},p.map((function(e){return n.createElement(c,{key:e.id,item:e,onChange:y,value:h.includes(e.id)},e.name)}))))}var p=(0,n.memo)(d);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var h=function(e){return n.createElement("section",{className:"catalog-page__category-filter"},n.createElement("div",{className:"category-filter__section-title"},n.createElement("span",{className:"sub"},"Filters"),n.createElement("h1",null,"Categories")),n.createElement("div",{className:"category-filter__filters"},o.kE.map((function(e){return n.createElement(p,g({key:e.filterName},e))}))))};function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _(e){var t=e.classes,r=void 0===t?"":t,a=e.initialText,i=void 0===a?"Select option":a,o=e.initialItem,l=void 0===o?null:o,c=e.options,u=void 0===c?[]:c,m=e.onItemSelect,d=void 0===m?null:m,p=(0,n.useRef)(),g=f((0,n.useState)(l?l.name:i),2),h=g[0],v=g[1],_=f((0,n.useState)(!1),2),y=_[0],b=_[1],x=["dropdown-container",r,y&&"is-expanded"].filter(Boolean).join(" ");return n.createElement("div",{className:x,tabIndex:"1"},n.createElement("button",{className:"dropdown__selected-item",onClick:function(){b((function(e){return!e}))},ref:p},n.createElement("span",{className:"text"},h),n.createElement(s.Z,{classes:"selected-item__arrow"},"expand_more")),n.createElement("ul",{className:"dropdown__option-list"},u.map((function(e){return n.createElement("li",{key:e.id,className:"dropdown__option-list-item",onClick:function(){return function(e){v(e.name),b((function(e){return!e})),d&&d(e),p.current.focus()}(e)}},e.name)}))))}var y=(0,n.memo)(_);function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var w=function(e){var t=e.src,r=void 0===t?"":t,a=e.alt,i=void 0===a?"":a,o=e.imageWidth,l=void 0===o?100:o,c=e.imageMinHeight,s=void 0===c?100:c,u=e.classes,m=void 0===u?"":u,d=e.delay,p=void 0===d?100:d,g=(0,n.useRef)(null),h=(0,n.useRef)(null),f=b((0,n.useState)(!1),2),v=f[0],_=f[1];(0,n.useEffect)((function(){var e=h.current.style;e.setProperty("--image-width","".concat(l,"px")),e.setProperty("--image-min-height","".concat(s,"px")),g.current.addEventListener("load",(function(){setTimeout((function(){g.current&&_(!0)}),p)}))}),[]);var y=[m,v&&"is-loaded"].filter(Boolean).join(" ");return n.createElement("span",{ref:h,className:"image-loader-box ".concat(y)},n.createElement("span",{className:"image-loader-box__loading-animation"}),n.createElement("img",{ref:g,src:r,alt:i}))};function k(e){var t=e.productInfo,r=void 0===t?null:t,a=e.classes,i=void 0===a?"":a,o=e.tag,l=void 0===o?"div":o;if(console.log("re-rendering product!: ",r.name),!r)return null;var c=r.imgPath,s=r.name,u=r.price,m=n.createElement(n.Fragment,null,n.createElement("div",{className:"product-card__img-container"},n.createElement(w,{src:c,alt:s,imageMinHeight:200})),n.createElement("div",{className:"product-card__item-summary"},n.createElement("span",{className:"item-summary__name"},s),n.createElement("span",{className:"item-summary__price"},"$ ",u.toFixed(2))),n.createElement("button",{className:"is-tertiary item-summary__view-detail-btn"},"View Detail"));return(0,n.createElement)(l,{className:"product-card ".concat(i)},m)}var E=(0,n.memo)(k);function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function N(e){var t=e.itemList,r=e.itemRender;return n.createElement("div",{className:"masonry__column"},t.map((function(e){return r(e)})))}var C=function(e){var t=e.classes,r=void 0===t?"":t,a=e.list,o=void 0===a?null:a,l=e.itemRender,c=void 0===l?null:l,s=e.noPadding,u=void 0!==s&&s,m=e.itemWidth,d=void 0===m?260:m,p=e.gap,g=void 0===p?15:p,h=(0,n.useRef)(null),f=P((0,n.useState)(1),2),v=f[0],_=f[1];(0,n.useEffect)((function(){var e=h.current,t=function(){var t,r,n=parseFloat((t=e,r="width",window.getComputedStyle(t)[r])),a=u?n:n-2*g,i=d+2,o=Math.floor(a/i),l=a%i;_(1===o?1:function(){return l>=g*(o-1)?o:o-1})};return window.addEventListener("resize",t),e.style.setProperty("--masonry-item-width","".concat(d,"px")),e.style.setProperty("--masonry-gap","".concat(g,"px")),t(),function(){window.removeEventListener("resize",t)}}),[]);var y=[r,u&&"no-padding"].filter(Boolean).join(" "),b=(0,i.BR)(v).map((function(){return[]}));return o.forEach((function(e,t){b[t%v].push(e)})),n.createElement("div",{ref:h,className:"masonry-container ".concat(y)},b.map((function(e,t){return n.createElement(N,{key:"col-".concat(t),itemList:e,itemRender:c})})))},I=[{productIndex:0,id:"ArborealGreySweat_long_bright_unisex_0",imgPath:r(2907),name:"Arboreal sweat - grey",sleeve:"long",lightDark:"light",gender:"unisex",price:70,totalPurchaseCount:90,rate:3.59},{productIndex:1,id:"AurevoirWhiteSweat_long_bright_women_1",imgPath:r(8017),name:"Aurevoir sweat - white",sleeve:"long",lightDark:"light",gender:"women",price:75,totalPurchaseCount:103,rate:4.69},{productIndex:2,id:"AveaWhiteTShirt_short_bright_unisex_2",imgPath:r(5511),name:"Avea t-shirt - white",sleeve:"short",lightDark:"light",gender:"unisex",price:40,totalPurchaseCount:94,rate:4.98},{productIndex:3,id:"BluePrintedTShirt_short_dark_men_3",imgPath:r(6955),name:"Blue printed t-shirt",sleeve:"short",lightDark:"dark",gender:"men",price:49.99,totalPurchaseCount:138,rate:3.81},{productIndex:4,id:"CapeTownWhiteTShirt_short_bright_men_4",imgPath:r(957),name:"Capetown t-shirt - white",sleeve:"short",lightDark:"light",gender:"men",price:39.99,totalPurchaseCount:68,rate:4.48},{productIndex:5,id:"CRDBlackHood_long_dark_men_5",imgPath:r(3712),name:"CRD hood - black",sleeve:"long",lightDark:"dark",gender:"men",price:84.99,totalPurchaseCount:133,rate:4.2},{productIndex:6,id:"GreyPrintedSweatShirt_long_bright_women_6",imgPath:r(1716),name:"Printed sweat shirt - grey",sleeve:"long",lightDark:"light",gender:"women",price:55,totalPurchaseCount:51,rate:4.21},{productIndex:7,id:"HerbalistHood_long_dark_unisex_7",imgPath:r(5794),name:"Herbalist hood",sleeve:"long",lightDark:"dark",gender:"unisex",price:75,totalPurchaseCount:6,rate:4.09},{productIndex:8,id:"LoveForestTShirt_short_bright_men_8",imgPath:r(6537),name:"Love-Forest t-shirt",sleeve:"short",lightDark:"light",gender:"men",price:35,totalPurchaseCount:6,rate:4.58},{productIndex:9,id:"MuziBlackSweat_long_dark_men_9",imgPath:r(594),name:"Muzi sweat - black",sleeve:"long",lightDark:"dark",gender:"men",price:34.99,totalPurchaseCount:17,rate:3.51},{productIndex:10,id:"MuziBlackTShirt_short_dark_men_10",imgPath:r(8147),name:"Muzi tee - black",sleeve:"short",lightDark:"dark",gender:"men",price:29.99,totalPurchaseCount:143,rate:4.81},{productIndex:11,id:"MuziWhiteLongTShirt_long_bright_women_11",imgPath:r(753),name:"Muzi long t-shirt - white",sleeve:"long",lightDark:"light",gender:"women",price:45,totalPurchaseCount:55,rate:4.47},{productIndex:12,id:"MuziWhiteTShirt_short_bright_men_12",imgPath:r(9877),name:"Muzi t-shirt - white",sleeve:"short",lightDark:"light",gender:"men",price:29.99,totalPurchaseCount:104,rate:3.92},{productIndex:13,id:"MuziYellowTShirt_short_bright_women_13",imgPath:r(8309),name:"Muzi t-shirt - yellow",sleeve:"short",lightDark:"light",gender:"women",price:34.99,totalPurchaseCount:128,rate:4.19},{productIndex:14,id:"OrangeTShirt_short_bright_men_14",imgPath:r(2807),name:"Orange t-shirt",sleeve:"short",lightDark:"light",gender:"men",price:49.99,totalPurchaseCount:68,rate:4.1},{productIndex:15,id:"ReskpPurpleHood_long_bright_men_15",imgPath:r(7520),name:"Reskp purple hood",sleeve:"long",lightDark:"light",gender:"men",price:65,totalPurchaseCount:100,rate:4.62},{productIndex:16,id:"RoddBlackSweat_long_dark_women_16",imgPath:r(7677),name:"Rodd sweat - black",sleeve:"long",lightDark:"dark",gender:"women",price:60,totalPurchaseCount:84,rate:4.99},{productIndex:17,id:"StylishGreyShirt_long_dark_women_17",imgPath:r(8033),name:"Stylish grey shirt",sleeve:"long",lightDark:"dark",gender:"women",price:54.99,totalPurchaseCount:9,rate:4.91},{productIndex:18,id:"WarmBlackCardigan_long_dark_unisex_18",imgPath:r(2962),name:"Warm black cardigan",sleeve:"long",lightDark:"dark",gender:"unisex",price:45,totalPurchaseCount:145,rate:4.25},{productIndex:19,id:"WhitePrintedTShirt_short_bright_women_19",imgPath:r(215),name:"Printed t-shirt - white",sleeve:"short",lightDark:"light",gender:"women",price:39.99,totalPurchaseCount:82,rate:4.04}],j=[{id:"most-popular",name:"Most popular"},{id:"top-rated",name:"Top rated"},{id:"lowest-price",name:"Lowest price"},{id:"highest-price",name:"highest price"}];var A=function(e){var t=(0,a.I0)(),r=(0,a.v9)(o.ZQ),i=(0,n.useCallback)((function(e){t((0,o.HD)(e.id))})),l=I.filter((function(e){return["sleeve","gender","lightDark"].every((function(t){return function(e,t,r){return 0===r.length||r.includes(e[t])}(e,t,r[t])}))}));return n.createElement("section",{className:"catalog-page__product-list"},n.createElement("div",{className:"product-list__section-header"},n.createElement("div",{className:"section-header__text"},n.createElement("h1",null,"Available products"),n.createElement("span",{className:"items-count"},n.createElement("span",{className:"slash"},"/"),n.createElement("span",{className:"count"},n.createElement("span",{className:"num"},l.length),"items found"))),n.createElement("div",{className:"sort-by"},n.createElement("span",{className:"text"},"Sort by :"),n.createElement(y,{classes:"sort-by-dropdown",options:j,onItemSelect:i}))),n.createElement("div",{className:"product-list__content"},n.createElement(C,{itemWidth:240,gap:32,list:l,itemRender:function(e){return n.createElement(E,{classes:"product-list__item",tag:"div",key:e.id,productInfo:e})}})))};var D=function(e){return n.createElement("main",{className:"page catalog"},n.createElement("div",{className:"catalog-page__header"},n.createElement("h1",null,"Catalog")),n.createElement("div",{className:"catalog-page__content"},n.createElement(h,null),n.createElement(A,null)))}},2907:function(e,t,r){e.exports=r.p+"static/images/9a8fd9a438fe1be145c8.jpg"},8017:function(e,t,r){e.exports=r.p+"static/images/5c7fe6a24c6a12bb7840.jpg"},5511:function(e,t,r){e.exports=r.p+"static/images/a8647ea2e4edb7148c0b.jpg"},6955:function(e,t,r){e.exports=r.p+"static/images/869107a156ca5f2abebc.jpg"},3712:function(e,t,r){e.exports=r.p+"static/images/7bf2c162f3d43660a336.jpg"},957:function(e,t,r){e.exports=r.p+"static/images/a83ab4a0b4cb8b5e737e.jpg"},1716:function(e,t,r){e.exports=r.p+"static/images/495e459d3b266ac2d346.jpg"},5794:function(e,t,r){e.exports=r.p+"static/images/7aa8d79ec9e29367467b.jpg"},6537:function(e,t,r){e.exports=r.p+"static/images/0247a489930b0f951b51.jpg"},594:function(e,t,r){e.exports=r.p+"static/images/83e98fda00dd6d89fdb2.jpg"},8147:function(e,t,r){e.exports=r.p+"static/images/194f8900e710420a67ea.jpg"},753:function(e,t,r){e.exports=r.p+"static/images/052187ef037dec6f9eae.jpg"},9877:function(e,t,r){e.exports=r.p+"static/images/4f68c06ef6424b890484.jpg"},8309:function(e,t,r){e.exports=r.p+"static/images/71c2ab4ec462b01ba4dc.jpg"},2807:function(e,t,r){e.exports=r.p+"static/images/d012a13ec109a047656c.jpg"},7520:function(e,t,r){e.exports=r.p+"static/images/bffba67c469711b96971.jpg"},7677:function(e,t,r){e.exports=r.p+"static/images/1a6c849a35ba14bef2af.jpg"},8033:function(e,t,r){e.exports=r.p+"static/images/5a4f19591dc73fe6f270.jpg"},2962:function(e,t,r){e.exports=r.p+"static/images/e4e96a11b536857fb72c.jpg"},215:function(e,t,r){e.exports=r.p+"static/images/146537f165486c0d448c.jpg"}}]);