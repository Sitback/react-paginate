!function(e,a){"object"==typeof exports&&"object"==typeof module?module.exports=a(require("react")):"function"==typeof define&&define.amd?define(["react"],a):"object"==typeof exports?exports.ReactPaginate=a(require("react")):e.ReactPaginate=a(e.React)}(this,(e=>(()=>{var a={186:(e,a,t)=>{"use strict";var r=t(985);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,a,t,n,i,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function a(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:n};return t.PropTypes=t,t}},736:(e,a,t)=>{e.exports=t(186)()},985:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},970:a=>{"use strict";a.exports=e}},t={};function r(e){var n=t[e];if(void 0!==n)return n.exports;var i=t[e]={exports:{}};return a[e](i,i.exports,r),i.exports}r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a}),a},r.d=(e,a)=>{for(var t in a)r.o(a,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";r.r(n),r.d(n,{default:()=>L});var e=r(970),a=r.n(e),t=r(736),i=r.n(t);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}var s=function(e){var t=e.pageClassName,r=e.pageLinkClassName,n=e.page,i=e.selected,s=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,p=e.pageSelectedHandler,u=e.href,g=e.extraAriaContext,d=e.pageLabelBuilder,f=e.rel,b=e.ariaLabel||"Page "+n+(g?" "+g:""),v=null;return i&&(v="page",b=e.ariaLabel||"Page "+n+" is your current page",t=void 0!==t?t+" "+s:s,void 0!==r?void 0!==l&&(r=r+" "+l):r=l),a().createElement("li",{className:t},a().createElement("a",o({rel:f,role:u?void 0:"button",className:r,href:u,tabIndex:i?"-1":"0","aria-label":b,"aria-current":v,onKeyPress:p},c(p)),d(n)))};s.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};const l=s;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}var p=function(e){var t=e.breakLabel,r=e.breakAriaLabel,n=e.breakClassName,i=e.breakLinkClassName,o=e.breakHandler,s=e.getEventListener,l=n||"break";return a().createElement("li",{className:l},a().createElement("a",c({className:i,role:"button",tabIndex:"0","aria-label":r,onKeyPress:o},s(o)),t))};p.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabel:i().string,breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};const u=p;function g(e){return null!=e?e:arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f.apply(this,arguments)}function b(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,k(r.key),r)}}function v(e,a,t){return a=h(a),function(e,a){if(a&&("object"===d(a)||"function"==typeof a))return a;if(void 0!==a)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}(e,m()?Reflect.construct(a,t||[],h(e).constructor):a.apply(e,t))}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,a){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,a){return e.__proto__=a,e},C(e,a)}function P(e,a,t){return(a=k(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function k(e){var a=function(e,a){if("object"!=d(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==d(a)?a:String(a)}var x=function(e){function t(e){var r,n;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,t),P(y(r=v(this,t,[e])),"handlePreviousPage",(function(e){var a=r.state.selected;r.handleClick(e,null,a>0?a-1:void 0,{isPrevious:!0})})),P(y(r),"handleNextPage",(function(e){var a=r.state.selected,t=r.props.pageCount;r.handleClick(e,null,a<t-1?a+1:void 0,{isNext:!0})})),P(y(r),"handlePageSelected",(function(e,a){if(r.state.selected===e)return r.callActiveCallback(e),void r.handleClick(a,null,void 0,{isActive:!0});r.handleClick(a,null,e)})),P(y(r),"handlePageChange",(function(e){r.state.selected!==e&&(r.setState({selected:e}),r.callCallback(e))})),P(y(r),"getEventListener",(function(e){return P({},r.props.eventListener,e)})),P(y(r),"handleClick",(function(e,a,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.isPrevious,o=void 0!==i&&i,s=n.isNext,l=void 0!==s&&s,c=n.isBreak,p=void 0!==c&&c,u=n.isActive,g=void 0!==u&&u;e.preventDefault?e.preventDefault():e.returnValue=!1;var d=r.state.selected,f=r.props.onClick,b=t;if(f){var v=f({index:a,selected:d,nextSelectedPage:t,event:e,isPrevious:o,isNext:l,isBreak:p,isActive:g});if(!1===v)return;Number.isInteger(v)&&(b=v)}void 0!==b&&r.handlePageChange(b)})),P(y(r),"handleBreakClick",(function(e,a){var t=r.state.selected;r.handleClick(a,e,t<e?r.getForwardJump():r.getBackwardJump(),{isBreak:!0})})),P(y(r),"callCallback",(function(e){void 0!==r.props.onPageChange&&"function"==typeof r.props.onPageChange&&r.props.onPageChange({selected:e})})),P(y(r),"callActiveCallback",(function(e){void 0!==r.props.onPageActive&&"function"==typeof r.props.onPageActive&&r.props.onPageActive({selected:e})})),P(y(r),"getElementPageRel",(function(e){var a=r.state.selected,t=r.props,n=t.nextPageRel,i=t.prevPageRel,o=t.selectedPageRel;return a-1===e?i:a===e?o:a+1===e?n:void 0})),P(y(r),"pagination",(function(){var e=[],t=r.props,n=t.pageRangeDisplayed,i=t.pageCount,o=t.marginPagesDisplayed,s=t.breakLabel,l=t.breakClassName,c=t.breakLinkClassName,p=t.breakAriaLabels,g=r.state.selected;if(i<=n)for(var d=0;d<i;d++)e.push(r.getPageElement(d));else{var f=n/2,b=n-f;g>i-n/2?f=n-(b=i-g):g<n/2&&(b=n-(f=g));var v,m,h=function(e){return r.getPageElement(e)},y=[];for(v=0;v<i;v++){var C=v+1;if(C<=o)y.push({type:"page",index:v,display:h(v)});else if(C>i-o)y.push({type:"page",index:v,display:h(v)});else if(v>=g-f&&v<=g+(0===g&&n>1?b-1:b))y.push({type:"page",index:v,display:h(v)});else if(s&&y.length>0&&y[y.length-1].display!==m&&(n>0||o>0)){var P=v<g?p.backward:p.forward;m=a().createElement(u,{key:v,breakAriaLabel:P,breakLabel:s,breakClassName:l,breakLinkClassName:c,breakHandler:r.handleBreakClick.bind(null,v),getEventListener:r.getEventListener}),y.push({type:"break",index:v,display:m})}}y.forEach((function(a,t){var r=a;"break"===a.type&&y[t-1]&&"page"===y[t-1].type&&y[t+1]&&"page"===y[t+1].type&&y[t+1].index-y[t-1].index<=2&&(r={type:"page",index:a.index,display:h(a.index)}),e.push(r.display)}))}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),n=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,r.state={selected:n},r}var r,n;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),a&&C(e,a)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,r=e.extraAriaContext,n=e.pageCount,i=e.forcePage;void 0===a||t||this.callCallback(a),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(n)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(n,"). Did you forget a Math.ceil()?")),void 0!==a&&a>n-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(a," > ").concat(n-1,").")),void 0!==i&&i>n-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(n-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,r=e+a.pageRangeDisplayed;return r>=t?t-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var a=this.props,t=a.hrefBuilder,r=a.pageCount,n=a.hrefAllControls;if(t)return n||e>=0&&e<r?t(e+1,r,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var t=this.state.selected,r=this.props,n=r.pageClassName,i=r.pageLinkClassName,o=r.activeClassName,s=r.activeLinkClassName,c=r.extraAriaContext,p=r.pageLabelBuilder;return a().createElement(l,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,rel:this.getElementPageRel(e),pageClassName:n,pageLinkClassName:i,activeClassName:o,activeLinkClassName:s,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:p,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var t=this.props,r=t.disabledClassName,n=t.disabledLinkClassName,i=t.pageCount,o=t.className,s=t.containerClassName,l=t.previousLabel,c=t.previousClassName,p=t.previousLinkClassName,u=t.previousAriaLabel,d=t.prevRel,b=t.nextLabel,v=t.nextClassName,m=t.nextLinkClassName,h=t.nextAriaLabel,y=t.nextRel,C=this.state.selected,P=0===C,k=C===i-1,x="".concat(g(c)).concat(P?" ".concat(g(r)):""),L="".concat(g(v)).concat(k?" ".concat(g(r)):""),N="".concat(g(p)).concat(P?" ".concat(g(n)):""),O="".concat(g(m)).concat(k?" ".concat(g(n)):""),E=P?"true":"false",w=k?"true":"false";return a().createElement("nav",{"aria-label":"pagination"},a().createElement("ul",{className:o||s},a().createElement("li",{className:x},a().createElement("a",f({className:N,href:this.getElementHref(C-1),tabIndex:P?"-1":"0",role:"button",onKeyDown:this.handlePreviousPage,"aria-disabled":E,"aria-label":u,rel:d},this.getEventListener(this.handlePreviousPage)),l)),this.pagination(),a().createElement("li",{className:L},a().createElement("a",f({className:O,href:this.getElementHref(C+1),tabIndex:k?"-1":"0",role:"button",onKeyDown:this.handleNextPage,"aria-disabled":w,"aria-label":h,rel:y},this.getEventListener(this.handleNextPage)),b))))}}])&&b(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}(e.Component);P(x,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabels:i().shape({forward:i().string,backward:i().string}),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),P(x,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const L=x})(),n})()));
//# sourceMappingURL=react-paginate.js.map