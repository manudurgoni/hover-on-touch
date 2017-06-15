export default {
  /**
   * Get closest DOM element up the tree that contains a class, ID, or data attribute
   * @param  {Node} elem The base element
   * @param  {String} selector The class, id, data attribute, or tag to look for
   * @return {Node} Null if no match
   */
  getClosest(elem, selector) {
    var firstChar = selector.charAt(0);

    // Get closest match
    for (; elem && elem !== document; elem = elem.parentNode) {

      // If selector is a class
      if (firstChar === '.') {
        if (elem.classList.contains(selector.substr(1))) {
          return elem;
        }
      }

      // If selector is an ID
      if (firstChar === '#') {
        if (elem.id === selector.substr(1)) {
          return elem;
        }
      }

      // If selector is a data attribute
      if (firstChar === '[') {
        if (elem.hasAttribute(selector.substr(1, selector.length - 2))) {
          return elem;
        }
      }

      // If selector is a tag
      if (elem.tagName.toLowerCase() === selector) {
        return elem;
      }

    }

    return false;
  },

  /**
   * Return an array of gifs from an array of files
   */
  getGifs(imgs) {
    let gifs = [];

    for (let img of imgs) {
      let ext = img.src.split('.').pop();

      (ext === 'gif') && gifs.push(img);
    }

    return (gifs.length > 0) ? gifs : false;
  },

  /**
   * Restart gifs
   */
  restartGifs(imgs) {

    for (let img of imgs) {
      let url = img.src;

      img.src = '#/';
      img.src = url;
    }
  }
};
