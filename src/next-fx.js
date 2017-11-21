(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.fx = function () {
    //code goes here.
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.fx;
  }

}());
