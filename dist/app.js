'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
  function Point(x, y) {
    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  _createClass(Point, [{
    key: 'toString',
    value: function toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }
  }]);

  return Point;
}();

var a = new Point(3, 8);
console.log(a.toString());

// 1000ms 后success
var p1 = new Promise(function (resolve, reject) {
  window.setTimeout(function () {
    resolve(123);
  }, 1000);
});
p1.then(function (data) {
  console.log('p1 success', data);
});
// 2000ms 后success
var p2 = new Promise(function (resolve, reject) {
  window.setTimeout(function () {
    resolve(456);
  }, 2000);
});
p2.then(function (data) {
  console.log('p2 success', data);
});
var pa = Promise.all([p1, p2]);
var pr = Promise.race([p1, p2]);
pa.then(function (data) {
  console.log('pa success', data);
});
pr.then(function (data) {
  console.log('pr success', data);
});

var _getVal = getVal();

var _getVal2 = _slicedToArray(_getVal, 2);

var x = _getVal2[0];
var y = _getVal2[1];var _ref = ['wayou', 'male', 'secrect'];
var name = _ref[0];
var age = _ref[2]; //数组解构

function getVal() {
  return [1, 2];
}

var someArray = ["a", "b", "c"];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = someArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    v = _step.value;

    console.log(v); //输出 a,b,c
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
//# sourceMappingURL=app.js.map
