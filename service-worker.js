"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/slaying-your-webpack-dragon/index.html","f4c379df4709365fc6a259afc8636b7a"],["/slaying-your-webpack-dragon/static/css/main.8e44408c.css","33fc75d25671f1d8bb71174f97ce6bc4"],["/slaying-your-webpack-dragon/static/media/build.8e72012b.png","8e72012bb033bfc6ea56ddc1a51800da"],["/slaying-your-webpack-dragon/static/media/bundle.870e6373.gif","870e6373def6a8c0832f31b760eb4c6c"],["/slaying-your-webpack-dragon/static/media/chrome.7007a5a1.svg","7007a5a19584d4c02e2c80c1e1b237fc"],["/slaying-your-webpack-dragon/static/media/code-splitting.6deeb189.gif","6deeb1890fef416ebbace7557d03e251"],["/slaying-your-webpack-dragon/static/media/grunt-gulping.3006c2ba.svg","3006c2ba2f1bf1483d14643306068866"],["/slaying-your-webpack-dragon/static/media/grunt-logo.b2c410c4.svg","b2c410c40d2a3e782bb5f196c58067b9"],["/slaying-your-webpack-dragon/static/media/gulp.0a6ada06.svg","0a6ada061170437c9ffd76db51af58bf"],["/slaying-your-webpack-dragon/static/media/m-6.aceb5b18.gif","aceb5b182bbac1d2accc5fc9a1131a8d"],["/slaying-your-webpack-dragon/static/media/public.d64ee06e.png","d64ee06e6c9d47a995a1551101da7d68"],["/slaying-your-webpack-dragon/static/media/svg-url.ddbc6770.png","ddbc67700e8fd42cfb1f07bbf4bc02cd"],["/slaying-your-webpack-dragon/static/media/tumblr_n9raos3MIf1shl3p1o1_1280.a8b7404a.gif","a8b7404a5d73054ad0786f5a51955058"],["/slaying-your-webpack-dragon/static/media/vue-loader.6af17bf9.png","6af17bf9a1a6eadb50d5545313c1db77"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,n,t){var r=new URL(e);return t&&r.pathname.match(t)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,a){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],t=new URL(a,self.location),r=createCacheKey(t,hashParamName,n,/\.\w{8}\./);return[t.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!a.has(n)){var t=new Request(n,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+n+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(n,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!a.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),a=urlsToCacheKeys.has(n));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/slaying-your-webpack-dragon/index.html",self.location).toString(),a=urlsToCacheKeys.has(n)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});