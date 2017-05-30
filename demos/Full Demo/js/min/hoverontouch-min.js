function HoverOnTouch(){this.init(),this.addCss(),this.rewriteLinks(),this.touchEvents()}HoverOnTouch.prototype.init=function(){this.all_objects=document.getElementsByClassName("hoverontouch"),this.pressTimer,this.longpress=!1,this.scrollStartX=0,this.scrollStartY=0,this.multipleTouch=!1},HoverOnTouch.prototype.addCss=function(){var t=document.createElement("style");t.type="text/css",t.innerHTML=".hoverontouch {-webkit-tap-highlight-color: rgba(0,0,0,0); -webkit-user-select: none; -webkit-touch-callout: none; }",document.body.appendChild(t)},HoverOnTouch.prototype.rewriteLinks=function(){for(var t=0;t<this.all_objects.length;t++)if(object=this.all_objects[t],"A"===object.tagName){var e=object.getAttribute("href");e&&(object.setAttribute("data-link",e),object.removeAttribute("href"))}},HoverOnTouch.prototype.touchEvents=function(){var t=this;this.handlerMouseenterHoverontouch=this.mouseenterHoverontouch.bind(this),this.handlerMouseeoutHoverontouch=this.mouseeoutHoverontouch.bind(this),this.handlerMouseupHoverontouch=this.mouseupHoverontouch.bind(this),this.handlerTouchstartHoverontouch=this.touchstartHoverontouch.bind(this),this.handlerTouchendHoverontouch=this.touchendHoverontouch.bind(this);for(var e=0;e<this.all_objects.length;e++){var o=this.all_objects[e];o.allImages=o.getElementsByTagName("img"),o.gifs=this.filterGifs(o.allImages),o.addEventListener("mouseenter",this.handlerMouseenterHoverontouch),o.addEventListener("mouseout",this.handlerMouseeoutHoverontouch),o.addEventListener("mouseup",this.handlerMouseupHoverontouch),o.addEventListener("touchstart",this.handlerTouchstartHoverontouch),o.addEventListener("touchend",this.handlerTouchendHoverontouch)}},HoverOnTouch.prototype.mouseenterHoverontouch=function(t){var e=this.getClosest(t.target,".hoverontouch");this.restartImagesIfGif(e.allImages),e.className+=" hoverontouch--aktiv"},HoverOnTouch.prototype.mouseeoutHoverontouch=function(t){var e=this.getClosest(t.target,".hoverontouch");e.classList.remove("hoverontouch--aktiv")},HoverOnTouch.prototype.mouseupHoverontouch=function(t){var e=this.getClosest(t.target,".hoverontouch");if(e.classList.remove("hoverontouch--aktiv"),e.getAttribute("data-link")){console.log("clicked");var o=e.getAttribute("data-link");if(1===t.which)window.location.href=o;else if(t.which>=2)var r=window.open(o,"_blank");console.log("run redirect")}},HoverOnTouch.prototype.touchstartHoverontouch=function(t){console.log("touchstart"),t.touches.length>1&&(console.log("more than 1 touch"),this.multipleTouch=!0);var e=this.getClosest(t.target,".hoverontouch");this.restartGifs(e.gifs),e.className+=" hoverontouch--aktiv",this.scrollStartX=event.pageX,this.scrollStartY=event.pageY;var o=this;console.log("timer runs"),this.pressTimer=window.setTimeout(function(){console.log("timer end, longpress detected"),o.longpress=!0},250)},HoverOnTouch.prototype.touchendHoverontouch=function(t){console.log("touchend");var e=this.getClosest(t.target,".hoverontouch");if(e.classList.remove("hoverontouch--aktiv"),clearTimeout(this.pressTimer),this.longpress)console.log("this was longpress"),this.longpress=!1;else{var o=this.scrollStartX,r=t.pageX,s=Math.abs(o-r),n=t.pageY,h=this.scrollStartY,i=Math.abs(h-n);if(e.getAttribute("data-link")&&i<=5&&s<=5&&this.multipleTouch===!1){alert(this.multipleTouch),console.log("clicked");var u=e.getAttribute("data-link");window.location.href=u}this.multipleTouch=!1}event.preventDefault()},HoverOnTouch.prototype.destroy=function(){this.removeAllListeners(),console.log("removed everything. Set Hoverontouch variable to null if you like")},HoverOnTouch.prototype.removeAllListeners=function(){for(var t=0;t<this.all_objects.length;t++){var e=this.all_objects[t];e.removeEventListener("mouseenter",this.handlerMouseenterHoverontouch),e.removeEventListener("mouseout",this.handlerMouseeoutHoverontouch),e.removeEventListener("touchstart",this.handlerTouchstartHoverontouch),e.removeEventListener("touchend",this.handlerTouchendHoverontouch)}},HoverOnTouch.prototype.reInitHoverOnTouch=function(){this.removeAllListeners(),this.all_objects=document.getElementsByClassName("hoverontouch"),this.rewriteLinks(),this.touchEvents()},window.oncontextmenu=function(t){return t.preventDefault(),t.stopPropagation(),!1},HoverOnTouch.prototype.filterGifs=function(t){for(var e=[],o=t.length-1;o>=0;o--){var r=t[o].src.split(".").pop();"gif"===r&&e.push(t[o])}return e},HoverOnTouch.prototype.restartGifs=function(t){for(var e=t.length-1;e>=0;e--){var o=t[e],r=o.src;o.src="#/",o.src=r}},HoverOnTouch.prototype.getClosest=function(t,e){for(var o=e.charAt(0);t&&t!==document;t=t.parentNode){if("."===o&&t.classList.contains(e.substr(1)))return t;if("#"===o&&t.id===e.substr(1))return t;if("["===o&&t.hasAttribute(e.substr(1,e.length-2)))return t;if(t.tagName.toLowerCase()===e)return t}return!1},HoverOnTouch.prototype.resetGif=function(t){var e=t,o=e.src;e.src="#/",e.src=o},HoverOnTouch.prototype.restartImagesIfGif=function(t){for(var e=t.length-1;e>=0;e--){var o=t[e].src.split(".").pop();"gif"===o&&this.resetGif(t[e])}};