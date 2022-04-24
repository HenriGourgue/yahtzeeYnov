// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"roll.js":[function(require,module,exports) {
function roll() {
  var nbDices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  var dices = [];

  for (var i = 1; i <= nbDices; i++) {
    dices.push(Math.floor(Math.random() * 6) + 1);
  }

  return dices;
}

module.exports = {
  roll: roll
};
},{}],"utils/utils.js":[function(require,module,exports) {
function sortAscending(dices) {
  var tmp; //Sort dices array

  for (var i = 0; i <= dices.length; i -= -1) {
    for (var j = dices.length - 1; j >= i + 1; j--) {
      if (dices[j] < dices[i]) {
        tmp = dices[i];
        dices[i] = dices[j];
        dices[j] = tmp;
      }
    }
  }

  return dices;
}

module.exports = {
  sortAscending: sortAscending
};
},{}],"combination.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _require = require('./utils/utils'),
    sortAscending = _require.sortAscending;

function isThreeOfAKind(dices) {
  var found = false;
  var counts = {};

  for (var i = 0; i < dices.length; i++) {
    if (counts[dices[i]]) {
      counts[dices[i]] += 1;
    } else {
      counts[dices[i]] = 1;
    }
  }

  for (var prop in counts) {
    if (counts[prop] > 2) {
      found = true;
    }
  }

  return found;
}

function isFourOfAKind(dices) {
  var found = false;
  var counts = {};

  for (var i = 0; i < dices.length; i++) {
    if (counts[dices[i]]) {
      counts[dices[i]] += 1;
    } else {
      counts[dices[i]] = 1;
    }
  }

  for (var prop in counts) {
    if (counts[prop] > 3) {
      found = true;
    }
  }

  return found;
}

function isFullHouse(dices) {
  var foundDouble = false,
      foundTriple = false,
      counts = {};

  for (var i = 0; i < dices.length; i++) {
    if (counts[dices[i]]) {
      counts[dices[i]] += 1;
    } else {
      counts[dices[i]] = 1;
    }
  }

  for (var prop in counts) {
    if (counts[prop] === 2) {
      foundDouble = true;
    }

    if (counts[prop] === 3) {
      foundTriple = true;
    }
  }

  return foundDouble && foundTriple;
}

function isSmallStraight(dices) {
  //Sort dices array
  dices = sortAscending(dices); // Get rid of duplicates

  dices = _toConsumableArray(new Set(dices));
  var result = true,
      starting = 0; //Maybe got a straight starting at index 0

  if (dices[1] === dices[0] + 1) {
    starting = 0;
  } //Maybe got a straight starting at index 1
  else {
    starting = 1;
  } //Evaluating straight


  for (var k = starting; k < starting + 3; k -= -1) {
    if (!(dices[k] === dices[k + 1] - 1)) {
      result = false;
      break;
    }
  }

  return result;
}

function isLargeStraight(dices) {
  //Sort dices array
  dices = sortAscending(dices); //Evaluating straigh

  var result = true;

  for (var k = 0; k < dices.length - 1; k -= -1) {
    if (!(dices[k] === dices[k + 1] - 1)) {
      result = false;
      break;
    }
  }

  return result;
}

function isYahtzee(dices) {
  var result = true;

  for (var i = 0; i < dices.length - 1; i -= -1) {
    if (!(dices[i] === dices[i + 1])) {
      result = false;
      break;
    }
  }

  return result;
}

function isOnes(dices) {
  return dices.includes(1);
}

function isTwos(dices) {
  return dices.includes(2);
}

function isThrees(dices) {
  return dices.includes(3);
}

function isFours(dices) {
  return dices.includes(4);
}

function isFives(dices) {
  return dices.includes(5);
}

function isSixes(dices) {
  return dices.includes(6);
}

module.exports = {
  isThreeOfAKind: isThreeOfAKind,
  isFourOfAKind: isFourOfAKind,
  isFullHouse: isFullHouse,
  isSmallStraight: isSmallStraight,
  isLargeStraight: isLargeStraight,
  isYahtzee: isYahtzee,
  isOnes: isOnes,
  isTwos: isTwos,
  isThrees: isThrees,
  isFours: isFours,
  isFives: isFives,
  isSixes: isSixes
};
},{"./utils/utils":"utils/utils.js"}],"score.js":[function(require,module,exports) {
var _require = require('./combination'),
    isThreeOfAKind = _require.isThreeOfAKind,
    isFourOfAKind = _require.isFourOfAKind,
    isFullHouse = _require.isFullHouse,
    isSmallStraight = _require.isSmallStraight,
    isLargeStraight = _require.isLargeStraight,
    isYahtzee = _require.isYahtzee,
    isOnes = _require.isOnes,
    isTwos = _require.isTwos,
    isThrees = _require.isThrees,
    isFours = _require.isFours,
    isFives = _require.isFives,
    isSixes = _require.isSixes;

function getScore(dices) {
  var score = {
    ones: null,
    twos: null,
    threes: null,
    fours: null,
    fives: null,
    sixes: null,
    threeOfKind: null,
    fourOfKind: null,
    fullHouse: null,
    smallStraight: null,
    largeStraight: null,
    chance: null,
    yahtzee: null
  };

  if (isOnes(dices)) {
    var ones = dices.filter(function (dice) {
      return dice === 1;
    });
    score.ones = getArraySum(ones, 1);
  }

  if (isTwos(dices)) {
    var twos = dices.filter(function (dice) {
      return dice === 2;
    });
    score.twos = getArraySum(twos, 2);
  }

  if (isThrees(dices)) {
    var threes = dices.filter(function (dice) {
      return dice === 3;
    });
    score.threes = getArraySum(threes, 3);
  }

  if (isFours(dices)) {
    var fours = dices.filter(function (dice) {
      return dice === 4;
    });
    score.fours = getArraySum(fours, 4);
  }

  if (isFives(dices)) {
    var fives = dices.filter(function (dice) {
      return dice === 5;
    });
    score.fives = getArraySum(fives, 5);
  }

  if (isSixes(dices)) {
    var sixes = dices.filter(function (dice) {
      return dice === 6;
    });
    score.sixes = getArraySum(sixes, 6);
  }

  if (isThreeOfAKind(dices)) {
    score.threeOfKind = getArraySum(dices);
  }

  if (isFourOfAKind(dices)) {
    score.fourOfKind = getArraySum(dices);
  }

  if (isFullHouse(dices)) {
    score.fullHouse = 25;
  }

  if (isSmallStraight(dices)) {
    score.smallStraight = 30;
  }

  if (isLargeStraight(dices)) {
    score.largeStraight = 40;
  }

  if (isYahtzee(dices)) {
    score.yahtzee = 50;
  }

  score.chance = getArraySum(dices);
  return score;
}

function getArraySum(array) {
  var searchedValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  if (searchedValue) return array.length * searchedValue;
  var score = 0;

  for (var i = 0; i < array.length; i++) {
    score += array[i];
  }

  return score;
}

module.exports = {
  getScore: getScore
};
},{"./combination":"combination.js"}],"main.js":[function(require,module,exports) {
'use strict';

var _require = require('./roll'),
    roll = _require.roll;

var _require2 = require('./score'),
    getScore = _require2.getScore;

var score = getScore(roll());
var finalScore = 0;

for (var combination in score) {
  if (score[combination] != null) {
    console.log('You got a ', combination);
    finalScore += score[combination];
  }
}

console.log('Your final score is ', finalScore);
},{"./roll":"roll.js","./score":"score.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50134" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map