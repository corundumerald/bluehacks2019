"use strict";var precacheConfig=[["./index.html","af94b61fc0da9c9094f1b26968d600a3"],["./static/css/main.97170e65.css","57ca776a999ac9876276c46501d2fb8b"],["./static/js/main.bb4d3c14.js","04b15fd19c3382e16ba5b6af1b42fdde"],["./static/media/brian.dd723101.jpg","dd723101e0d53d746e0a70cd44240abb"],["./static/media/joaquin.94e6a2dd.jpg","94e6a2dd7918be666bd80c17eef1919c"],["./static/media/logo-big.3d72fc4b.png","3d72fc4b7565adf21b9f7909c12f2671"],["./static/media/logo-nav.ea527b38.png","ea527b3850d036ed7aedb3177286fc57"],["./static/media/mikee.531285bb.png","531285bb652ee6c10bede5d958d01911"],["./static/media/partner-rizal-lib.5907c5ad.png","5907c5ad4905c8814dc175f530fa9c2d"],["./static/media/sponsor-accenture.4bfed9f8.PNG","4bfed9f879d56f53d2456fe3f57e94ae"],["./static/media/sponsor-azeus-whitebg.ce5b3c4e.png","ce5b3c4e1a61d9ae7a472e94c56c536e"],["./static/media/sponsor-factset.ebae8f54.png","ebae8f54593b1b0ac35a7222167d9fcb"],["./static/media/sponsor-freelancer-whitebg.804b0dea.png","804b0dea56f269f87a1a3ebbeab75c13"],["./static/media/sponsor-samsung-whitebg.166e0c6d.png","166e0c6d964bb3e0f3bd050235e6f2be"],["./static/media/sponsor-secret6.44bcd2b4.png","44bcd2b47323829d86a3404e67524908"],["./static/media/sponsor-wideout.fb71319e.png","fb71319e56b1aa4406dc668835c073e4"],["./static/media/tup.9ec5a83c.png","9ec5a83c18e0a391f1dd7653d6cd41c4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});