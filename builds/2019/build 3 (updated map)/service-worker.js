"use strict";var precacheConfig=[["./index.html","2588b4aa58d46b68cc58099e12622069"],["./static/css/main.fc836824.css","07c6ae54e85ac1cf6a66f39ed25639b5"],["./static/js/main.b8269046.js","73a871039e441cfa9ee31617422e0c50"],["./static/media/brian.dd723101.jpg","dd723101e0d53d746e0a70cd44240abb"],["./static/media/logo-big.3d72fc4b.png","3d72fc4b7565adf21b9f7909c12f2671"],["./static/media/logo-nav.ea527b38.png","ea527b3850d036ed7aedb3177286fc57"],["./static/media/mikee.531285bb.png","531285bb652ee6c10bede5d958d01911"],["./static/media/sponsor-accenture.1ebcd3db.png","1ebcd3db9275487b450f50bb0479becb"],["./static/media/sponsor-azeus.6f088066.JPG","6f0880665e5c0e1aaa5ff1c1ab1cc018"],["./static/media/sponsor-cipher.2916fe4d.png","2916fe4d267864a311578c120d8bc380"],["./static/media/sponsor-devsoc.fc3167a8.png","fc3167a8aed09ace2b4a04ea896ef159"],["./static/media/sponsor-devsocateneo.fff4dcf5.png","fff4dcf5c92a2f62a4cbb8c62d25bcb2"],["./static/media/sponsor-dxc.756a28b8.png","756a28b82fb6ce72e969ed42bcacd0f9"],["./static/media/sponsor-insync.0b1d776e.png","0b1d776e8dc91fc10c5c3c4394da8f4f"],["./static/media/sponsor-kamagong.8f32829d.jpg","8f32829d510503031fca6f7f82bccb09"],["./static/media/sponsor-lcs.3f447746.png","3f447746b2c0ca9391baf63054f98d5d"],["./static/media/sponsor-mozilla.ca1913ad.png","ca1913adf3fb7bb1038136eb4fa9fa33"],["./static/media/sponsor-rizal-lib.dabf79bb.jpg","dabf79bb9243722e0c81dcd9ae419903"],["./static/media/sponsor-smart.7f6228eb.png","7f6228ebf8d613cfaf8d0f8671b0cfdc"],["./static/media/tup.9ec5a83c.png","9ec5a83c18e0a391f1dd7653d6cd41c4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});