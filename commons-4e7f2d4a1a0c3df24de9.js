(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,r){"use strict";var a,n=r("q1tI"),i=(a=n)&&"object"==typeof a&&"default"in a?a.default:a;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(a){if("function"!=typeof a)throw new Error("Expected WrappedComponent to be a React component.");var s,c=[];function u(){s=e(c.map((function(e){return e.props}))),d.canUseDOM?t(s):r&&(s=r(s))}var d=function(e){var t,r;function n(){return e.apply(this,arguments)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.peek=function(){return s},n.rewind=function(){if(n.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,c=[],e};var o=n.prototype;return o.UNSAFE_componentWillMount=function(){c.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),u()},o.render=function(){return i.createElement(a,this.props)},n}(n.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(a)+")"),o(d,"canUseDOM",l),d}}},"8z7e":function(e,t,r){},"9eSz":function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.default=void 0;var n,i=a(r("PJYZ")),o=a(r("VbXa")),l=a(r("8OQS")),s=a(r("pVnL")),c=a(r("q1tI")),u=a(r("17x9")),d=function(e){var t=(0,s.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,r=e.fixed,a=p(t||r||[]);return a&&a.src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},h=Object.create({}),g=function(e){var t=d(e),r=m(t);return h[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,E=new WeakMap;function T(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),c.default.createElement("source",{media:n,srcSet:r,sizes:i}))}))}function w(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function S(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function O(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function C(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var N=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),E.set(e,t)),function(){r.unobserve(e),E.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+c+o+l+r+a+t+i+n+s+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},A=c.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,l=c.default.createElement(k,(0,s.default)({ref:t,src:r},i,{ariaHidden:o}));return a.length>1?c.default.createElement("picture",null,n(a),l):l})),k=c.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,s.default)({"aria-hidden":m,sizes:r,srcSet:a,src:n},p,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));k.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var I=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&v&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||b&&(y||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),(r=m(t))&&(h[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,l=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,E=e.itemProp,w=e.loading,C=e.draggable,N=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,s.default)({opacity:N?1:0,transition:I?"opacity "+b+"ms":"none"},l),j="boolean"==typeof y?"lightgray":y,R={transitionDelay:b+"ms"},P=(0,s.default)({opacity:this.state.imgLoaded?0:1},I&&R,l,f),M={title:t,alt:this.state.isVisible?"":r,style:P,className:m,itemProp:E};if(h){var z=h,q=p(h);return c.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),j&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&R)}),q.base64&&c.default.createElement(A,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:M,imageVariants:z,generateSources:O}),q.tracedSVG&&c.default.createElement(A,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:M,imageVariants:z,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,T(z),c.default.createElement(k,{alt:r,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:C})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,s.default)({alt:r,title:t,loading:w},q,{imageVariants:z}))}}))}if(g){var V=g,H=p(g),_=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},i);return"inherit"===i.display&&delete _.display,c.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},j&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:j,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},I&&R)}),H.base64&&c.default.createElement(A,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:M,imageVariants:V,generateSources:O}),H.tracedSVG&&c.default.createElement(A,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:M,imageVariants:V,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,T(V),c.default.createElement(k,{alt:r,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:C})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,s.default)({alt:r,title:t,loading:w},H,{imageVariants:V}))}}))}return null},t}(c.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var x=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),j=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function R(e){return function(t,r,a){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");u.default.checkPropTypes(((n={})[r]=e,n),t,"prop",a)}}I.propTypes={resolutions:x,sizes:j,fixed:R(u.default.oneOfType([x,u.default.arrayOf(x)])),fluid:R(u.default.oneOfType([j,u.default.arrayOf(j)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var P=I;t.default=P},Bl7J:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),i=r("Wbzz"),o=function(e){e.siteTitle;return n.a.createElement("header",null)};o.defaultProps={siteTitle:""};var l=o,s=(r("8z7e"),r("9eSz")),c=r.n(s);function u(){var e=Object(i.useStaticQuery)("482392091");return n.a.createElement("section",{name:"#top",id:"burgernavbar-style",className:"section1"},n.a.createElement("input",{id:"main-menu-checkbox",type:"checkbox"}),n.a.createElement("header",{className:"header-area"},n.a.createElement("a",{className:"navbar-logo",href:"/#top"},n.a.createElement(c.a,{className:"nav-logo",alt:"",fluid:e.logo.childImageSharp.fluid})),n.a.createElement("div",{className:"grid-container-burgernav"},n.a.createElement("div",{className:"burger-grid"},n.a.createElement("label",{for:"main-menu-checkbox",className:"zoom menu-toggle label",id:"main-menu-toggle"},n.a.createElement("span",{className:"sr-only"},"Open"),n.a.createElement("span",{className:"fa fa-bars"})),n.a.createElement("div",{className:"d-inline-flex"},n.a.createElement("nav",{id:"main-menu",role:"navigation",className:"main-menu","aria-expanded":"false","aria-label":"Main menu"},n.a.createElement("label",{for:"main-menu-checkbox",className:"menu-close zoom",id:"main-menu-close"},n.a.createElement("span",{className:"sr-only"},"Close"),n.a.createElement("span",{className:"fa fa-close","aria-hidden":"true"})),n.a.createElement("ul",null,n.a.createElement("li",{className:"nav-item"},n.a.createElement(i.Link,{to:"/",className:"nav-link"},"Inicio")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(i.Link,{to:"/about",className:"nav-link"},"Nosotros")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(i.Link,{to:"/group",className:"nav-link"},"Servicios")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(i.Link,{to:"/service",className:"nav-link"},"Blog")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(i.Link,{to:"/contact",className:"nav-link"},"Cursos")))),n.a.createElement("label",{for:"main-menu-checkbox",className:"backdrop",tabindex:"-1","aria-hidden":"true",hidden:!0}))))))}function d(){return n.a.createElement("section",{className:"footer-style"},n.a.createElement("div",{className:"grid-container-footer"},n.a.createElement("div",{className:"footer-grid"},n.a.createElement("h4",{className:"footer-head"},"Star Clean MX"),n.a.createElement("div",{className:"line-red-2"}),n.a.createElement("p",{className:"footer-logo-text"},"Busca brindar un servicio especializado a través de un enfoque integral y trato personalizado. La diversidad de campos en los que nuestros colaboradores son especialistas, proporciona una visión amplia en el espectro del negocio.")),n.a.createElement("div",null,n.a.createElement("h4",{className:"footer-head"},"Mapa del Sitio"),n.a.createElement("div",{className:"line-red-2"}),n.a.createElement("ul",{className:"list-left list-footer"},n.a.createElement("li",null,n.a.createElement(i.Link,{to:"/"},n.a.createElement("a",{className:"list-left"},"MISIÓN"))),n.a.createElement("li",null,n.a.createElement(i.Link,{to:"/about"},n.a.createElement("a",{className:"list-left"},"VISIÓN"))),n.a.createElement("li",null,n.a.createElement(i.Link,{to:"/group"},n.a.createElement("a",{className:"list-left"},"VALORES"))),n.a.createElement("li",null,n.a.createElement(i.Link,{to:"/service"},n.a.createElement("a",{className:"list-left"},"ACTIVIDADES"))),n.a.createElement("li",null,n.a.createElement(i.Link,{to:"/contact"},n.a.createElement("a",{className:"list-left"},"SERVICIOS"))))),n.a.createElement("div",null,n.a.createElement("h4",{className:"footer-head"},"Servicios"),n.a.createElement("div",{className:"line-red-2"}),n.a.createElement("ul",{className:"list-left list-footer"},n.a.createElement("li",null,n.a.createElement(i.Link,{to:"/consultoria"},n.a.createElement("a",{className:"list-left"},"Consultoria"))),n.a.createElement("li",null,n.a.createElement(i.Link,{to:"/fiscal"},n.a.createElement("a",{className:"list-left"},"Fiscal"))),n.a.createElement("li",null,n.a.createElement(i.Link,{to:"/finanzas"},n.a.createElement("a",{className:"list-left"},"Finanzas"))),n.a.createElement("li",null,n.a.createElement(i.Link,{to:"/gobcorp"},n.a.createElement("a",{className:"list-left"},"Gobierno Corporativo"))),n.a.createElement("li",null,n.a.createElement(i.Link,{to:"/legal"},n.a.createElement("a",{className:"list-left"},"Legal"))),n.a.createElement("li",null,n.a.createElement(i.Link,{to:"/gobierno",className:"list-left"},"Sector Gobierno")))),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("h4",{className:"footer-head"},"Contacto TAXG"),n.a.createElement("div",{className:"line-red-2"}),n.a.createElement("p",{className:"footer-text-2"},"Rio Magdalena 326",n.a.createElement("br",null),"Int. GO-06",n.a.createElement("br",null),"Tizapán, San Angel",n.a.createElement("br",null),"Alvaro Obregon, 01090, CDMX",n.a.createElement("br",null),"Telefono: (55) 13-28-6997")),n.a.createElement("div",{className:"footer-rights-grid"},n.a.createElement("div",{className:"line-footer"}),n.a.createElement("h6",{className:"footer-alegada"}," ©2020  -  Todos los Derechos Reservados."))))}t.a=function(e){var t=e.children,r=Object(i.useStaticQuery)("3649515864");return n.a.createElement(n.a.Fragment,null,n.a.createElement(l,{siteTitle:r.site.siteMetadata.title}),n.a.createElement("div",null,n.a.createElement(u,null),n.a.createElement("main",null,t),n.a.createElement(d,null)))}},ZhWT:function(e,t){var r="undefined"!=typeof Element,a="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var l,s,c,u;if(Array.isArray(t)){if((l=t.length)!=o.length)return!1;for(s=l;0!=s--;)if(!e(t[s],o[s]))return!1;return!0}if(a&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;for(u=t.entries();!(s=u.next()).done;)if(!e(s.value[1],o.get(s.value[0])))return!1;return!0}if(n&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((l=t.length)!=o.length)return!1;for(s=l;0!=s--;)if(t[s]!==o[s])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((l=(c=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(s=l;0!=s--;)if(!Object.prototype.hasOwnProperty.call(o,c[s]))return!1;if(r&&t instanceof Element)return!1;for(s=l;0!=s--;)if(("_owner"!==c[s]&&"__v"!==c[s]&&"__o"!==c[s]||!t.$$typeof)&&!e(t[c[s]],o[c[s]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return he}));var a,n,i,o,l=r("17x9"),s=r.n(l),c=r("8+s/"),u=r.n(c),d=r("ZhWT"),f=r.n(d),m=r("q1tI"),p=r.n(m),h=r("6qGY"),g=r.n(h),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(E).map((function(e){return E[e]})),"charset"),w="cssText",S="href",O="http-equiv",C="innerHTML",N="itemprop",L="name",A="property",k="rel",I="src",x="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",P="defer",M="encodeSpecialCharacters",z="onChangeClientState",q="titleTemplate",V=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),H=[E.NOSCRIPT,E.SCRIPT,E.STYLE],_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},D=function(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=Z(e,E.TITLE),r=Z(e,q);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var a=Z(e,R);return t||a||void 0},J=function(e){return Z(e,z)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var a=Object.keys(r),n=0;n<a.length;n++){var i=a[n].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},X=function(e,t,r){var a={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+_(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var l=i[o],s=l.toLowerCase();-1===t.indexOf(s)||r===k&&"canonical"===e[r].toLowerCase()||s===k&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(l)||l!==C&&l!==w&&l!==N||(r=l)}if(!r||!e[r])return!1;var c=e[r].toLowerCase();return a[r]||(a[r]={}),n[r]||(n[r]={}),!a[r][c]&&(n[r][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(n),o=0;o<i.length;o++){var l=i[o],s=g()({},a[l],n[l]);a[l]=s}return e}),[]).reverse()},Z=function(e,t){for(var r=e.length-1;r>=0;r--){var a=e[r];if(a.hasOwnProperty(t))return a[t]}return null},$=(a=Date.now(),function(e){var t=Date.now();t-a>16?(a=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ne=null,ie=function(e,t){var r=e.baseTag,a=e.bodyAttributes,n=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;se(E.BODY,a),se(E.HTML,n),le(d,f);var m={baseTag:ce(E.BASE,r),linkTags:ce(E.LINK,i),metaTags:ce(E.META,o),noscriptTags:ce(E.NOSCRIPT,l),scriptTags:ce(E.SCRIPT,c),styleTags:ce(E.STYLE,u)},p={},h={};Object.keys(m).forEach((function(e){var t=m[e],r=t.newTags,a=t.oldTags;r.length&&(p[e]=r),a.length&&(h[e]=m[e].oldTags)})),t&&t(),s(e,p,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(E.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var a=r.getAttribute("data-react-helmet"),n=a?a.split(","):[],i=[].concat(n),o=Object.keys(t),l=0;l<o.length;l++){var s=o[l],c=t[s]||"";r.getAttribute(s)!==c&&r.setAttribute(s,c),-1===n.indexOf(s)&&n.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)r.removeAttribute(i[d]);n.length===i.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==o.join(",")&&r.setAttribute("data-react-helmet",o.join(","))}},ce=function(e,t){var r=document.head||document.querySelector(E.HEAD),a=r.querySelectorAll(e+"[data-react-helmet]"),n=Array.prototype.slice.call(a),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var a in t)if(t.hasOwnProperty(a))if(a===C)r.innerHTML=t.innerHTML;else if(a===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[a]?"":t[a];r.setAttribute(a,l)}r.setAttribute("data-react-helmet","true"),n.some((function(e,t){return o=t,r.isEqualNode(e)}))?n.splice(o,1):i.push(r)})),n.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:n,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,r){var a=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+a:a}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[j[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(a={key:e})["data-react-helmet"]=!0,n=de(r,a),[p.a.createElement(E.TITLE,n,e)];var e,r,a,n},toString:function(){return function(e,t,r,a){var n=ue(r),i=oe(t);return n?"<"+e+' data-react-helmet="true" '+n+">"+Y(i,a)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(i,a)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case b:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var a,n=((a={key:r})["data-react-helmet"]=!0,a);return Object.keys(t).forEach((function(e){var r=j[e]||e;if(r===C||r===w){var a=t.innerHTML||t.cssText;n.dangerouslySetInnerHTML={__html:a}}else n[r]=t[e]})),p.a.createElement(e,n)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,a){var n=Object.keys(a).filter((function(e){return!(e===C||e===w)})).reduce((function(e,t){var n=void 0===a[t]?t:t+'="'+Y(a[t],r)+'"';return e?e+" "+n:n}),""),i=a.innerHTML||a.cssText||"",o=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+n+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},me=function(e){var t=e.baseTag,r=e.bodyAttributes,a=e.encode,n=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,s=e.scriptTags,c=e.styleTags,u=e.title,d=void 0===u?"":u,f=e.titleAttributes;return{base:fe(E.BASE,t,a),bodyAttributes:fe(y,r,a),htmlAttributes:fe(b,n,a),link:fe(E.LINK,i,a),meta:fe(E.META,o,a),noscript:fe(E.NOSCRIPT,l,a),script:fe(E.SCRIPT,s,a),style:fe(E.STYLE,c,a),title:fe(E.TITLE,{title:d,titleAttributes:f},a)}},pe=u()((function(e){return{baseTag:Q([S,x],e),bodyAttributes:K(y,e),defer:Z(e,P),encode:Z(e,M),htmlAttributes:K(b,e),linkTags:X(E.LINK,[k,S],e),metaTags:X(E.META,[L,T,O,A,N],e),noscriptTags:X(E.NOSCRIPT,[C],e),onChangeClientState:J(e),scriptTags:X(E.SCRIPT,[I,C],e),styleTags:X(E.STYLE,[w],e),title:G(e),titleAttributes:K(v,e)}}),(function(e){ne&&re(ne),e.defer?ne=te((function(){ie(e,(function(){ne=null}))})):(ie(e),ne=null)}),me)((function(){return null})),he=(n=pe,o=i=function(e){function t(){return B(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,a=e.arrayTypeChildren,n=e.newChildProps,i=e.nestedChildren;return W({},a,((t={})[r.type]=[].concat(a[r.type]||[],[W({},n,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,a=e.child,n=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(a.type){case E.TITLE:return W({},n,((t={})[a.type]=o,t.titleAttributes=W({},i),t));case E.BODY:return W({},n,{bodyAttributes:W({},i)});case E.HTML:return W({},n,{htmlAttributes:W({},i)})}return W({},n,((r={})[a.type]=W({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=W({},t);return Object.keys(e).forEach((function(t){var a;r=W({},r,((a={})[t]=e[t],a))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,a={};return p.a.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,i=n.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[V[r]||r]=e[r],t}),t)}(D(n,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:a=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=D(e,["children"]),a=W({},r);return t&&(a=this.mapChildrenToProps(t,a)),p.a.createElement(n,a)},F(t,null,[{key:"canUseDOM",set:function(e){n.canUseDOM=e}}]),t}(p.a.Component),i.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=n.peek,i.rewind=function(){var e=n.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind}).call(this,r("yLpj"))},vrFN:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),i=r("qhky"),o=r("Wbzz");function l(e){var t=e.description,r=e.lang,a=e.meta,l=e.title,s=Object(o.useStaticQuery)("63159454").site,c=t||s.siteMetadata.description;return n.a.createElement(i.a,{htmlAttributes:{lang:r},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:l},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:c}].concat(a)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(a){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=commons-4e7f2d4a1a0c3df24de9.js.map