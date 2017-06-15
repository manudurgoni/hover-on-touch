import Utils from 'utils';

export default class HoverOnTouch {
  constructor(opts = {}) {
    this.name = 'hoverontouch';
    this.className = `.${this.name}`;
    /**
     * Default values
     * Options available :
     * - activeClass: class added on hover/touch
     * - global: if true, we apply the hoverontouch on every links
     * - disableClass: if global option is true, we don't apply hoverontouch on element with the disableClass
     */
    this.opts = {
      activeClass: `${this.name}--aktiv`,
      global: false,
      disableClass: `${this.name}--disable`
    };
    Object.assign(this.opts, opts);

    this.device = {
      isTouch: 'ontouchstart' in window || navigator.maxTouchPoints
    };

    // set variables
    this.vars = {
      currentHoveredElement: null,
      pressTimer: null,
      longpress: false,
      scrollStartX: 0,
      scrollStartY: 0,
      multipleTouchAmount: 0,
      multiTouchGesture: false
    };

    // gather all elements
    this.domElements = (this.opts.global) ? document.querySelectorAll(`a:not(.${this.opts.disableClass})`) : document.querySelectorAll(this.className);

    this.init();
  }

  init() {
    this.bindAll();
    this.parseElements();
  }

  bindAll() {
    [
      'mouseenterHoverontouch',
      'mouseeoutHoverontouch',
      'mouseupHoverontouch',
      'touchstartHoverontouch',
      'touchendHoverontouch'
    ].forEach((fn) => (this[fn] = this[fn].bind(this)));
  }

  parseElements() {

    for (let el of this.domElements) {
      el.classList.add(this.name);

      el.imgs = el.querySelectorAll('img');
      el.gifs = Utils.getGifs(el.imgs);

      el.style.cssText = `-webkit-tap-highlight-color: rgba(0,0,0,0); 
                          -webkit-user-select: none; 
                          -webkit-touch-callout: none;`;

      for (let img of el.imgs) {
        img.style.cssText = 'pointer-events: none;';
      }

      // rewrite link if mobile
      if (el.tagName === 'A' && this.device.isTouch) {
        let link = el.getAttribute('href');

        if (link) {
          // only rewrite if not already done
          el.setAttribute('data-link', link);
          el.removeAttribute('href');
        }
      }

      this.addElementListeners(el);
    }
  }

  addElementListeners(el) {
    el.addEventListener('mouseenter', this.mouseenterHoverontouch);
    el.addEventListener('mouseout', this.mouseeoutHoverontouch);
    el.addEventListener('mouseup', this.mouseupHoverontouch);

    if (this.device.isTouch) {
      el.addEventListener('touchstart', this.touchstartHoverontouch);
      el.addEventListener('touchend', this.touchendHoverontouch);
    }
  }

  removeElementListeners(el) {
    el.removeEventListener('mouseenter', this.mouseenterHoverontouch);
    el.removeEventListener('mouseout', this.mouseeoutHoverontouch);
    el.removeEventListener('mouseup', this.mouseupHoverontouch);

    if (this.device.isTouch) {
      el.removeEventListener('touchstart', this.touchstartHoverontouch);
      el.removeEventListener('touchend', this.touchendHoverontouch);
    }
  }

  /**
   * Mouse & Touch handlers
   */
  mouseenterHoverontouch(e) {
    if (this.currentHoveredElement) return;

    this.currentHoveredElement = Utils.getClosest(e.target, this.className);

    this.currentHoveredElement.gifs && Utils.restartGifs(this.currentHoveredElement.gifs);

    this.currentHoveredElement.classList.add(this.opts.activeClass);
  }
  mouseeoutHoverontouch() {
    if (!this.currentHoveredElement) return;

    this.currentHoveredElement.classList.remove(this.opts.activeClass);
    this.currentHoveredElement = null;
  }
  mouseupHoverontouch() {
  }
  touchstartHoverontouch(e) {
    if (this.currentHoveredElement) return;
    console.log('what', this.currentHoveredElement);
    this.currentHoveredElement = Utils.getClosest(e.target, this.className);

    this.vars.multipleTouchAmount = this.vars.multipleTouchAmount + 1;
    if (this.vars.multipleTouchAmount > 1) {
      this.vars.multiTouchGesture = true;
    }

    this.currentHoveredElement.gifs && Utils.restartGifs(this.currentHoveredElement.gifs);

    this.currentHoveredElement.classList.add(this.opts.activeClass);

    // get entry coordinates for scroll block (needs to go into changedTouches because of the handler)
    this.vars.scrollStartX = e.changedTouches[0].pageX;
    this.vars.scrollStartY = e.changedTouches[0].pageY;

    this.vars.pressTimer = window.setTimeout(() => {
      this.vars.longpress = true;
    }, 250);
  }
  touchendHoverontouch(e) {
    if (!this.currentHoveredElement) return;

    this.currentHoveredElement.classList.remove(this.opts.activeClass);

    window.clearTimeout(this.vars.pressTimer);

    this.vars.multipleTouchAmount = Math.max(this.vars.multipleTouchAmount - 1, 0);

    console.log(`longpress : ${this.vars.longpress}`, this.vars.multiTouchGesture, this.vars.multipleTouchAmount);
    if (!this.vars.longpress && !this.vars.multiTouchGesture && !this.vars.multipleTouchAmount) {
      // this is a click, so go to the data-link, but only if data link exists and not more scrolling than 10px
      // calculate Distance
      let XOriginal = this.vars.scrollStartX;
      let XEnd = e.changedTouches[0].pageX;
      let distanceX = Math.abs(XOriginal - XEnd);

      let YEnd = e.changedTouches[0].pageY;
      let YOriginal = this.vars.scrollStartY;
      let distanceY = Math.abs(YOriginal - YEnd);

      this.vars.longpress = false;

      if (this.currentHoveredElement.getAttribute('data-link') && distanceY <= 5 && distanceX <= 5) {
        let location = this.currentHoveredElement.getAttribute('data-link');

        window.location.href = location;
      };

    }

    this.vars.longpress = false;

    // set back multiTouchGesture to false if multi touch end
    if (this.multipleTouchAmount === 0) {
      this.multiTouchGesture = false;
    };

    this.currentHoveredElement = null;

    e.preventDefault();
    e.stopPropagation();
  }

  destroy() {
    for (let el of this.domElements) {
      this.removeElementListeners(el);
    }
  }
}
