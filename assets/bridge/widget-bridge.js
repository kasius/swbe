!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VTWidgetBridge=e():n.VTWidgetBridge=e()}("undefined"!=typeof self?self:this,function(){return function(n){function e(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var t={};return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=0)}([function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(1);t.d(e,"Bridge",function(){return r.a}),t.d(e,"BridgeConfig",function(){return r.b})},function(n,e,t){"use strict";function r(){y()&&(window.veritranBridgeHelper.sendMessage=g,window.veritranBridgeHelper.sendAttributes=x)}function i(n){var e=j[n];if(e){e.splice(0).forEach(function(e){return C.frameworkCallback(function(){return e(n,{})})})}}function o(n,e){r();var t=++A;return y()&&window.veritranBridgeHelper.raiseWidgetEvent(n,e,t),u(n,e,t)}function u(n,e,t){function r(){_.push(t)}return{default:function(i){if(!y()){var o=i(n,e);o&&!c(t)&&C.frameworkTimeout(function(){m(o.messageName,o.attrs)},0)}return{cancel:r}},cancel:r}}function c(n){return-1!=_.indexOf(n)}function f(n,e){r(),d(E,n,e)}function a(n,e){r(),d(H,n,e)}function d(n,e,t){var r=n[e];r?-1===r.indexOf(t)&&n[e].push(t):n[e]=[t]}function l(n,e){r(),b(H,n,e),b(E,n,e)}function s(n){d(j,"onCompletedInit",n)}function v(n){d(j,"onBackButtonDeviceAction",n)}function p(n){y()&&window.veritranBridgeHelper.enableBackButtonHandler(n)}function b(n,e,t){var r=n[e];if(r){var i=r.indexOf(t);-1!==i&&n[e].splice(i,1)}}function g(n,e,t){c(t)||m(n,e)}function m(n,e){var t=H[n];if(t){var r=t.splice(0);r.forEach(function(t){return C.frameworkCallback(function(){return t(n,e)})})}var i=E[n];i&&i.forEach(function(t){r&&-1!==r.indexOf(t)||C.frameworkCallback(function(){return t(n,e)})})}function w(n){n()}function B(n,e){setTimeout(n,e)}function k(n){r();var e={};n.forEach(function(n){e[n]=void 0});var t=function(n){for(var t in n)e[t]=n[t];return{then:i}},i=function(t){var r=++A;return T[r]=function(n){for(var r in n)e[r]=n[r];t(e)},y()?window.veritranBridgeHelper.getAttributes(r,n):C.frameworkTimeout(function(){return x(r,e)},0),{cancel:function(){return h(r)}}};return{defaultValues:t,then:i}}function x(n,e){var t=h(n);t&&C.frameworkCallback(function(){return t(e)})}function h(n){var e=T[n];return delete T[n],e}function y(){return!!window.veritranBridgeHelper}t.d(e,"a",function(){return O}),t.d(e,"b",function(){return C});var O={bridgeExists:y,callEvent:i,raiseEvent:o,subscribe:f,subscribeOnce:a,unsubscribe:l,onCompletedInit:s,getAttributes:k,onBackButtonDeviceAction:v,enableBackButton:p},C={init:r,frameworkCallback:w,frameworkTimeout:B},E={},H={},j={},T={},A=0,_=[];r()}])});
//# sourceMappingURL=widget-bridge.js.map