(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) f(d);
  new MutationObserver((d) => {
    for (const h of d)
      if (h.type === "childList")
        for (const S of h.addedNodes)
          S.tagName === "LINK" && S.rel === "modulepreload" && f(S);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(d) {
    const h = {};
    return (
      d.integrity && (h.integrity = d.integrity),
      d.referrerPolicy && (h.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : d.crossOrigin === "anonymous"
        ? (h.credentials = "omit")
        : (h.credentials = "same-origin"),
      h
    );
  }
  function f(d) {
    if (d.ep) return;
    d.ep = !0;
    const h = o(d);
    fetch(d.href, h);
  }
})();
function $y(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var Ef = { exports: {} },
  xn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nd;
function Wy() {
  if (Nd) return xn;
  Nd = 1;
  var i = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function o(f, d, h) {
    var S = null;
    if (
      (h !== void 0 && (S = "" + h),
      d.key !== void 0 && (S = "" + d.key),
      "key" in d)
    ) {
      h = {};
      for (var E in d) E !== "key" && (h[E] = d[E]);
    } else h = d;
    return (
      (d = h.ref),
      { $$typeof: i, type: f, key: S, ref: d !== void 0 ? d : null, props: h }
    );
  }
  return (xn.Fragment = r), (xn.jsx = o), (xn.jsxs = o), xn;
}
var Hd;
function Iy() {
  return Hd || ((Hd = 1), (Ef.exports = Wy())), Ef.exports;
}
var Z = Iy(),
  Tf = { exports: {} },
  lt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cd;
function Py() {
  if (Cd) return lt;
  Cd = 1;
  var i = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    f = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    h = Symbol.for("react.consumer"),
    S = Symbol.for("react.context"),
    E = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    A = Symbol.for("react.lazy"),
    C = Symbol.iterator;
  function q(p) {
    return p === null || typeof p != "object"
      ? null
      : ((p = (C && p[C]) || p["@@iterator"]),
        typeof p == "function" ? p : null);
  }
  var B = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    N = Object.assign,
    V = {};
  function L(p, H, X) {
    (this.props = p),
      (this.context = H),
      (this.refs = V),
      (this.updater = X || B);
  }
  (L.prototype.isReactComponent = {}),
    (L.prototype.setState = function (p, H) {
      if (typeof p != "object" && typeof p != "function" && p != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, p, H, "setState");
    }),
    (L.prototype.forceUpdate = function (p) {
      this.updater.enqueueForceUpdate(this, p, "forceUpdate");
    });
  function w() {}
  w.prototype = L.prototype;
  function F(p, H, X) {
    (this.props = p),
      (this.context = H),
      (this.refs = V),
      (this.updater = X || B);
  }
  var G = (F.prototype = new w());
  (G.constructor = F), N(G, L.prototype), (G.isPureReactComponent = !0);
  var ft = Array.isArray,
    P = { H: null, A: null, T: null, S: null, V: null },
    Ut = Object.prototype.hasOwnProperty;
  function zt(p, H, X, j, J, rt) {
    return (
      (X = rt.ref),
      { $$typeof: i, type: p, key: H, ref: X !== void 0 ? X : null, props: rt }
    );
  }
  function Ot(p, H) {
    return zt(p.type, H, void 0, void 0, void 0, p.props);
  }
  function bt(p) {
    return typeof p == "object" && p !== null && p.$$typeof === i;
  }
  function $t(p) {
    var H = { "=": "=0", ":": "=2" };
    return (
      "$" +
      p.replace(/[=:]/g, function (X) {
        return H[X];
      })
    );
  }
  var de = /\/+/g;
  function Zt(p, H) {
    return typeof p == "object" && p !== null && p.key != null
      ? $t("" + p.key)
      : H.toString(36);
  }
  function Rl() {}
  function zl(p) {
    switch (p.status) {
      case "fulfilled":
        return p.value;
      case "rejected":
        throw p.reason;
      default:
        switch (
          (typeof p.status == "string"
            ? p.then(Rl, Rl)
            : ((p.status = "pending"),
              p.then(
                function (H) {
                  p.status === "pending" &&
                    ((p.status = "fulfilled"), (p.value = H));
                },
                function (H) {
                  p.status === "pending" &&
                    ((p.status = "rejected"), (p.reason = H));
                }
              )),
          p.status)
        ) {
          case "fulfilled":
            return p.value;
          case "rejected":
            throw p.reason;
        }
    }
    throw p;
  }
  function Vt(p, H, X, j, J) {
    var rt = typeof p;
    (rt === "undefined" || rt === "boolean") && (p = null);
    var et = !1;
    if (p === null) et = !0;
    else
      switch (rt) {
        case "bigint":
        case "string":
        case "number":
          et = !0;
          break;
        case "object":
          switch (p.$$typeof) {
            case i:
            case r:
              et = !0;
              break;
            case A:
              return (et = p._init), Vt(et(p._payload), H, X, j, J);
          }
      }
    if (et)
      return (
        (J = J(p)),
        (et = j === "" ? "." + Zt(p, 0) : j),
        ft(J)
          ? ((X = ""),
            et != null && (X = et.replace(de, "$&/") + "/"),
            Vt(J, H, X, "", function (Pe) {
              return Pe;
            }))
          : J != null &&
            (bt(J) &&
              (J = Ot(
                J,
                X +
                  (J.key == null || (p && p.key === J.key)
                    ? ""
                    : ("" + J.key).replace(de, "$&/") + "/") +
                  et
              )),
            H.push(J)),
        1
      );
    et = 0;
    var le = j === "" ? "." : j + ":";
    if (ft(p))
      for (var Et = 0; Et < p.length; Et++)
        (j = p[Et]), (rt = le + Zt(j, Et)), (et += Vt(j, H, X, rt, J));
    else if (((Et = q(p)), typeof Et == "function"))
      for (p = Et.call(p), Et = 0; !(j = p.next()).done; )
        (j = j.value), (rt = le + Zt(j, Et++)), (et += Vt(j, H, X, rt, J));
    else if (rt === "object") {
      if (typeof p.then == "function") return Vt(zl(p), H, X, j, J);
      throw (
        ((H = String(p)),
        Error(
          "Objects are not valid as a React child (found: " +
            (H === "[object Object]"
              ? "object with keys {" + Object.keys(p).join(", ") + "}"
              : H) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return et;
  }
  function _(p, H, X) {
    if (p == null) return p;
    var j = [],
      J = 0;
    return (
      Vt(p, j, "", "", function (rt) {
        return H.call(X, rt, J++);
      }),
      j
    );
  }
  function Y(p) {
    if (p._status === -1) {
      var H = p._result;
      (H = H()),
        H.then(
          function (X) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 1), (p._result = X));
          },
          function (X) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 2), (p._result = X));
          }
        ),
        p._status === -1 && ((p._status = 0), (p._result = H));
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var W =
    typeof reportError == "function"
      ? reportError
      : function (p) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var H = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof p == "object" &&
                p !== null &&
                typeof p.message == "string"
                  ? String(p.message)
                  : String(p),
              error: p,
            });
            if (!window.dispatchEvent(H)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", p);
            return;
          }
          console.error(p);
        };
  function pt() {}
  return (
    (lt.Children = {
      map: _,
      forEach: function (p, H, X) {
        _(
          p,
          function () {
            H.apply(this, arguments);
          },
          X
        );
      },
      count: function (p) {
        var H = 0;
        return (
          _(p, function () {
            H++;
          }),
          H
        );
      },
      toArray: function (p) {
        return (
          _(p, function (H) {
            return H;
          }) || []
        );
      },
      only: function (p) {
        if (!bt(p))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return p;
      },
    }),
    (lt.Component = L),
    (lt.Fragment = o),
    (lt.Profiler = d),
    (lt.PureComponent = F),
    (lt.StrictMode = f),
    (lt.Suspense = v),
    (lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P),
    (lt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (p) {
        return P.H.useMemoCache(p);
      },
    }),
    (lt.cache = function (p) {
      return function () {
        return p.apply(null, arguments);
      };
    }),
    (lt.cloneElement = function (p, H, X) {
      if (p == null)
        throw Error(
          "The argument must be a React element, but you passed " + p + "."
        );
      var j = N({}, p.props),
        J = p.key,
        rt = void 0;
      if (H != null)
        for (et in (H.ref !== void 0 && (rt = void 0),
        H.key !== void 0 && (J = "" + H.key),
        H))
          !Ut.call(H, et) ||
            et === "key" ||
            et === "__self" ||
            et === "__source" ||
            (et === "ref" && H.ref === void 0) ||
            (j[et] = H[et]);
      var et = arguments.length - 2;
      if (et === 1) j.children = X;
      else if (1 < et) {
        for (var le = Array(et), Et = 0; Et < et; Et++)
          le[Et] = arguments[Et + 2];
        j.children = le;
      }
      return zt(p.type, J, void 0, void 0, rt, j);
    }),
    (lt.createContext = function (p) {
      return (
        (p = {
          $$typeof: S,
          _currentValue: p,
          _currentValue2: p,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (p.Provider = p),
        (p.Consumer = { $$typeof: h, _context: p }),
        p
      );
    }),
    (lt.createElement = function (p, H, X) {
      var j,
        J = {},
        rt = null;
      if (H != null)
        for (j in (H.key !== void 0 && (rt = "" + H.key), H))
          Ut.call(H, j) &&
            j !== "key" &&
            j !== "__self" &&
            j !== "__source" &&
            (J[j] = H[j]);
      var et = arguments.length - 2;
      if (et === 1) J.children = X;
      else if (1 < et) {
        for (var le = Array(et), Et = 0; Et < et; Et++)
          le[Et] = arguments[Et + 2];
        J.children = le;
      }
      if (p && p.defaultProps)
        for (j in ((et = p.defaultProps), et))
          J[j] === void 0 && (J[j] = et[j]);
      return zt(p, rt, void 0, void 0, null, J);
    }),
    (lt.createRef = function () {
      return { current: null };
    }),
    (lt.forwardRef = function (p) {
      return { $$typeof: E, render: p };
    }),
    (lt.isValidElement = bt),
    (lt.lazy = function (p) {
      return { $$typeof: A, _payload: { _status: -1, _result: p }, _init: Y };
    }),
    (lt.memo = function (p, H) {
      return { $$typeof: m, type: p, compare: H === void 0 ? null : H };
    }),
    (lt.startTransition = function (p) {
      var H = P.T,
        X = {};
      P.T = X;
      try {
        var j = p(),
          J = P.S;
        J !== null && J(X, j),
          typeof j == "object" &&
            j !== null &&
            typeof j.then == "function" &&
            j.then(pt, W);
      } catch (rt) {
        W(rt);
      } finally {
        P.T = H;
      }
    }),
    (lt.unstable_useCacheRefresh = function () {
      return P.H.useCacheRefresh();
    }),
    (lt.use = function (p) {
      return P.H.use(p);
    }),
    (lt.useActionState = function (p, H, X) {
      return P.H.useActionState(p, H, X);
    }),
    (lt.useCallback = function (p, H) {
      return P.H.useCallback(p, H);
    }),
    (lt.useContext = function (p) {
      return P.H.useContext(p);
    }),
    (lt.useDebugValue = function () {}),
    (lt.useDeferredValue = function (p, H) {
      return P.H.useDeferredValue(p, H);
    }),
    (lt.useEffect = function (p, H, X) {
      var j = P.H;
      if (typeof X == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return j.useEffect(p, H);
    }),
    (lt.useId = function () {
      return P.H.useId();
    }),
    (lt.useImperativeHandle = function (p, H, X) {
      return P.H.useImperativeHandle(p, H, X);
    }),
    (lt.useInsertionEffect = function (p, H) {
      return P.H.useInsertionEffect(p, H);
    }),
    (lt.useLayoutEffect = function (p, H) {
      return P.H.useLayoutEffect(p, H);
    }),
    (lt.useMemo = function (p, H) {
      return P.H.useMemo(p, H);
    }),
    (lt.useOptimistic = function (p, H) {
      return P.H.useOptimistic(p, H);
    }),
    (lt.useReducer = function (p, H, X) {
      return P.H.useReducer(p, H, X);
    }),
    (lt.useRef = function (p) {
      return P.H.useRef(p);
    }),
    (lt.useState = function (p) {
      return P.H.useState(p);
    }),
    (lt.useSyncExternalStore = function (p, H, X) {
      return P.H.useSyncExternalStore(p, H, X);
    }),
    (lt.useTransition = function () {
      return P.H.useTransition();
    }),
    (lt.version = "19.1.0"),
    lt
  );
}
var qd;
function Hf() {
  return qd || ((qd = 1), (Tf.exports = Py())), Tf.exports;
}
var D = Hf();
const Fy = $y(D);
var Af = { exports: {} },
  Un = {},
  Rf = { exports: {} },
  zf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wd;
function t0() {
  return (
    wd ||
      ((wd = 1),
      (function (i) {
        function r(_, Y) {
          var W = _.length;
          _.push(Y);
          t: for (; 0 < W; ) {
            var pt = (W - 1) >>> 1,
              p = _[pt];
            if (0 < d(p, Y)) (_[pt] = Y), (_[W] = p), (W = pt);
            else break t;
          }
        }
        function o(_) {
          return _.length === 0 ? null : _[0];
        }
        function f(_) {
          if (_.length === 0) return null;
          var Y = _[0],
            W = _.pop();
          if (W !== Y) {
            _[0] = W;
            t: for (var pt = 0, p = _.length, H = p >>> 1; pt < H; ) {
              var X = 2 * (pt + 1) - 1,
                j = _[X],
                J = X + 1,
                rt = _[J];
              if (0 > d(j, W))
                J < p && 0 > d(rt, j)
                  ? ((_[pt] = rt), (_[J] = W), (pt = J))
                  : ((_[pt] = j), (_[X] = W), (pt = X));
              else if (J < p && 0 > d(rt, W))
                (_[pt] = rt), (_[J] = W), (pt = J);
              else break t;
            }
          }
          return Y;
        }
        function d(_, Y) {
          var W = _.sortIndex - Y.sortIndex;
          return W !== 0 ? W : _.id - Y.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var h = performance;
          i.unstable_now = function () {
            return h.now();
          };
        } else {
          var S = Date,
            E = S.now();
          i.unstable_now = function () {
            return S.now() - E;
          };
        }
        var v = [],
          m = [],
          A = 1,
          C = null,
          q = 3,
          B = !1,
          N = !1,
          V = !1,
          L = !1,
          w = typeof setTimeout == "function" ? setTimeout : null,
          F = typeof clearTimeout == "function" ? clearTimeout : null,
          G = typeof setImmediate < "u" ? setImmediate : null;
        function ft(_) {
          for (var Y = o(m); Y !== null; ) {
            if (Y.callback === null) f(m);
            else if (Y.startTime <= _)
              f(m), (Y.sortIndex = Y.expirationTime), r(v, Y);
            else break;
            Y = o(m);
          }
        }
        function P(_) {
          if (((V = !1), ft(_), !N))
            if (o(v) !== null) (N = !0), Ut || ((Ut = !0), Zt());
            else {
              var Y = o(m);
              Y !== null && Vt(P, Y.startTime - _);
            }
        }
        var Ut = !1,
          zt = -1,
          Ot = 5,
          bt = -1;
        function $t() {
          return L ? !0 : !(i.unstable_now() - bt < Ot);
        }
        function de() {
          if (((L = !1), Ut)) {
            var _ = i.unstable_now();
            bt = _;
            var Y = !0;
            try {
              t: {
                (N = !1), V && ((V = !1), F(zt), (zt = -1)), (B = !0);
                var W = q;
                try {
                  e: {
                    for (
                      ft(_), C = o(v);
                      C !== null && !(C.expirationTime > _ && $t());

                    ) {
                      var pt = C.callback;
                      if (typeof pt == "function") {
                        (C.callback = null), (q = C.priorityLevel);
                        var p = pt(C.expirationTime <= _);
                        if (((_ = i.unstable_now()), typeof p == "function")) {
                          (C.callback = p), ft(_), (Y = !0);
                          break e;
                        }
                        C === o(v) && f(v), ft(_);
                      } else f(v);
                      C = o(v);
                    }
                    if (C !== null) Y = !0;
                    else {
                      var H = o(m);
                      H !== null && Vt(P, H.startTime - _), (Y = !1);
                    }
                  }
                  break t;
                } finally {
                  (C = null), (q = W), (B = !1);
                }
                Y = void 0;
              }
            } finally {
              Y ? Zt() : (Ut = !1);
            }
          }
        }
        var Zt;
        if (typeof G == "function")
          Zt = function () {
            G(de);
          };
        else if (typeof MessageChannel < "u") {
          var Rl = new MessageChannel(),
            zl = Rl.port2;
          (Rl.port1.onmessage = de),
            (Zt = function () {
              zl.postMessage(null);
            });
        } else
          Zt = function () {
            w(de, 0);
          };
        function Vt(_, Y) {
          zt = w(function () {
            _(i.unstable_now());
          }, Y);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (_) {
            _.callback = null;
          }),
          (i.unstable_forceFrameRate = function (_) {
            0 > _ || 125 < _
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Ot = 0 < _ ? Math.floor(1e3 / _) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return q;
          }),
          (i.unstable_next = function (_) {
            switch (q) {
              case 1:
              case 2:
              case 3:
                var Y = 3;
                break;
              default:
                Y = q;
            }
            var W = q;
            q = Y;
            try {
              return _();
            } finally {
              q = W;
            }
          }),
          (i.unstable_requestPaint = function () {
            L = !0;
          }),
          (i.unstable_runWithPriority = function (_, Y) {
            switch (_) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                _ = 3;
            }
            var W = q;
            q = _;
            try {
              return Y();
            } finally {
              q = W;
            }
          }),
          (i.unstable_scheduleCallback = function (_, Y, W) {
            var pt = i.unstable_now();
            switch (
              (typeof W == "object" && W !== null
                ? ((W = W.delay),
                  (W = typeof W == "number" && 0 < W ? pt + W : pt))
                : (W = pt),
              _)
            ) {
              case 1:
                var p = -1;
                break;
              case 2:
                p = 250;
                break;
              case 5:
                p = 1073741823;
                break;
              case 4:
                p = 1e4;
                break;
              default:
                p = 5e3;
            }
            return (
              (p = W + p),
              (_ = {
                id: A++,
                callback: Y,
                priorityLevel: _,
                startTime: W,
                expirationTime: p,
                sortIndex: -1,
              }),
              W > pt
                ? ((_.sortIndex = W),
                  r(m, _),
                  o(v) === null &&
                    _ === o(m) &&
                    (V ? (F(zt), (zt = -1)) : (V = !0), Vt(P, W - pt)))
                : ((_.sortIndex = p),
                  r(v, _),
                  N || B || ((N = !0), Ut || ((Ut = !0), Zt()))),
              _
            );
          }),
          (i.unstable_shouldYield = $t),
          (i.unstable_wrapCallback = function (_) {
            var Y = q;
            return function () {
              var W = q;
              q = Y;
              try {
                return _.apply(this, arguments);
              } finally {
                q = W;
              }
            };
          });
      })(zf)),
    zf
  );
}
var Bd;
function e0() {
  return Bd || ((Bd = 1), (Rf.exports = t0())), Rf.exports;
}
var Mf = { exports: {} },
  kt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jd;
function l0() {
  if (jd) return kt;
  jd = 1;
  var i = Hf();
  function r(v) {
    var m = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var A = 2; A < arguments.length; A++)
        m += "&args[]=" + encodeURIComponent(arguments[A]);
    }
    return (
      "Minified React error #" +
      v +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var f = {
      d: {
        f: o,
        r: function () {
          throw Error(r(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    d = Symbol.for("react.portal");
  function h(v, m, A) {
    var C =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: C == null ? null : "" + C,
      children: v,
      containerInfo: m,
      implementation: A,
    };
  }
  var S = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function E(v, m) {
    if (v === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    (kt.createPortal = function (v, m) {
      var A =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(r(299));
      return h(v, m, null, A);
    }),
    (kt.flushSync = function (v) {
      var m = S.T,
        A = f.p;
      try {
        if (((S.T = null), (f.p = 2), v)) return v();
      } finally {
        (S.T = m), (f.p = A), f.d.f();
      }
    }),
    (kt.preconnect = function (v, m) {
      typeof v == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        f.d.C(v, m));
    }),
    (kt.prefetchDNS = function (v) {
      typeof v == "string" && f.d.D(v);
    }),
    (kt.preinit = function (v, m) {
      if (typeof v == "string" && m && typeof m.as == "string") {
        var A = m.as,
          C = E(A, m.crossOrigin),
          q = typeof m.integrity == "string" ? m.integrity : void 0,
          B = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        A === "style"
          ? f.d.S(v, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: C,
              integrity: q,
              fetchPriority: B,
            })
          : A === "script" &&
            f.d.X(v, {
              crossOrigin: C,
              integrity: q,
              fetchPriority: B,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (kt.preinitModule = function (v, m) {
      if (typeof v == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var A = E(m.as, m.crossOrigin);
            f.d.M(v, {
              crossOrigin: A,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && f.d.M(v);
    }),
    (kt.preload = function (v, m) {
      if (
        typeof v == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var A = m.as,
          C = E(A, m.crossOrigin);
        f.d.L(v, A, {
          crossOrigin: C,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (kt.preloadModule = function (v, m) {
      if (typeof v == "string")
        if (m) {
          var A = E(m.as, m.crossOrigin);
          f.d.m(v, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: A,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else f.d.m(v);
    }),
    (kt.requestFormReset = function (v) {
      f.d.r(v);
    }),
    (kt.unstable_batchedUpdates = function (v, m) {
      return v(m);
    }),
    (kt.useFormState = function (v, m, A) {
      return S.H.useFormState(v, m, A);
    }),
    (kt.useFormStatus = function () {
      return S.H.useHostTransitionStatus();
    }),
    (kt.version = "19.1.0"),
    kt
  );
}
var Yd;
function a0() {
  if (Yd) return Mf.exports;
  Yd = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), (Mf.exports = l0()), Mf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ld;
function n0() {
  if (Ld) return Un;
  Ld = 1;
  var i = e0(),
    r = Hf(),
    o = a0();
  function f(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function d(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function h(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function S(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function E(t) {
    if (h(t) !== t) throw Error(f(188));
  }
  function v(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = h(t)), e === null)) throw Error(f(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return E(n), t;
          if (u === a) return E(n), e;
          u = u.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) (l = n), (a = u);
      else {
        for (var c = !1, s = n.child; s; ) {
          if (s === l) {
            (c = !0), (l = n), (a = u);
            break;
          }
          if (s === a) {
            (c = !0), (a = n), (l = u);
            break;
          }
          s = s.sibling;
        }
        if (!c) {
          for (s = u.child; s; ) {
            if (s === l) {
              (c = !0), (l = u), (a = n);
              break;
            }
            if (s === a) {
              (c = !0), (a = u), (l = n);
              break;
            }
            s = s.sibling;
          }
          if (!c) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? t : e;
  }
  function m(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = m(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var A = Object.assign,
    C = Symbol.for("react.element"),
    q = Symbol.for("react.transitional.element"),
    B = Symbol.for("react.portal"),
    N = Symbol.for("react.fragment"),
    V = Symbol.for("react.strict_mode"),
    L = Symbol.for("react.profiler"),
    w = Symbol.for("react.provider"),
    F = Symbol.for("react.consumer"),
    G = Symbol.for("react.context"),
    ft = Symbol.for("react.forward_ref"),
    P = Symbol.for("react.suspense"),
    Ut = Symbol.for("react.suspense_list"),
    zt = Symbol.for("react.memo"),
    Ot = Symbol.for("react.lazy"),
    bt = Symbol.for("react.activity"),
    $t = Symbol.for("react.memo_cache_sentinel"),
    de = Symbol.iterator;
  function Zt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (de && t[de]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Rl = Symbol.for("react.client.reference");
  function zl(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Rl ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case N:
        return "Fragment";
      case L:
        return "Profiler";
      case V:
        return "StrictMode";
      case P:
        return "Suspense";
      case Ut:
        return "SuspenseList";
      case bt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case B:
          return "Portal";
        case G:
          return (t.displayName || "Context") + ".Provider";
        case F:
          return (t._context.displayName || "Context") + ".Consumer";
        case ft:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case zt:
          return (
            (e = t.displayName || null), e !== null ? e : zl(t.type) || "Memo"
          );
        case Ot:
          (e = t._payload), (t = t._init);
          try {
            return zl(t(e));
          } catch {}
      }
    return null;
  }
  var Vt = Array.isArray,
    _ = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Y = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    W = { pending: !1, data: null, method: null, action: null },
    pt = [],
    p = -1;
  function H(t) {
    return { current: t };
  }
  function X(t) {
    0 > p || ((t.current = pt[p]), (pt[p] = null), p--);
  }
  function j(t, e) {
    p++, (pt[p] = t.current), (t.current = e);
  }
  var J = H(null),
    rt = H(null),
    et = H(null),
    le = H(null);
  function Et(t, e) {
    switch ((j(et, e), j(rt, t), j(J, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? id(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = id(e)), (t = cd(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    X(J), j(J, t);
  }
  function Pe() {
    X(J), X(rt), X(et);
  }
  function ui(t) {
    t.memoizedState !== null && j(le, t);
    var e = J.current,
      l = cd(e, t.type);
    e !== l && (j(rt, t), j(J, l));
  }
  function jn(t) {
    rt.current === t && (X(J), X(rt)),
      le.current === t && (X(le), (zn._currentValue = W));
  }
  var ii = Object.prototype.hasOwnProperty,
    ci = i.unstable_scheduleCallback,
    fi = i.unstable_cancelCallback,
    Dh = i.unstable_shouldYield,
    Oh = i.unstable_requestPaint,
    Me = i.unstable_now,
    _h = i.unstable_getCurrentPriorityLevel,
    Yf = i.unstable_ImmediatePriority,
    Lf = i.unstable_UserBlockingPriority,
    Yn = i.unstable_NormalPriority,
    xh = i.unstable_LowPriority,
    Gf = i.unstable_IdlePriority,
    Uh = i.log,
    Nh = i.unstable_setDisableYieldValue,
    Na = null,
    ae = null;
  function Fe(t) {
    if (
      (typeof Uh == "function" && Nh(t),
      ae && typeof ae.setStrictMode == "function")
    )
      try {
        ae.setStrictMode(Na, t);
      } catch {}
  }
  var ne = Math.clz32 ? Math.clz32 : qh,
    Hh = Math.log,
    Ch = Math.LN2;
  function qh(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((Hh(t) / Ch) | 0)) | 0;
  }
  var Ln = 256,
    Gn = 4194304;
  function Ml(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Xn(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = t.suspendedLanes,
      c = t.pingedLanes;
    t = t.warmLanes;
    var s = a & 134217727;
    return (
      s !== 0
        ? ((a = s & ~u),
          a !== 0
            ? (n = Ml(a))
            : ((c &= s),
              c !== 0
                ? (n = Ml(c))
                : l || ((l = s & ~t), l !== 0 && (n = Ml(l)))))
        : ((s = a & ~u),
          s !== 0
            ? (n = Ml(s))
            : c !== 0
            ? (n = Ml(c))
            : l || ((l = a & ~t), l !== 0 && (n = Ml(l)))),
      n === 0
        ? 0
        : e !== 0 &&
          e !== n &&
          (e & u) === 0 &&
          ((u = n & -n),
          (l = e & -e),
          u >= l || (u === 32 && (l & 4194048) !== 0))
        ? e
        : n
    );
  }
  function Ha(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function wh(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Xf() {
    var t = Ln;
    return (Ln <<= 1), (Ln & 4194048) === 0 && (Ln = 256), t;
  }
  function Qf() {
    var t = Gn;
    return (Gn <<= 1), (Gn & 62914560) === 0 && (Gn = 4194304), t;
  }
  function ri(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Ca(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function Bh(t, e, l, a, n, u) {
    var c = t.pendingLanes;
    (t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0);
    var s = t.entanglements,
      y = t.expirationTimes,
      R = t.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var O = 31 - ne(l),
        U = 1 << O;
      (s[O] = 0), (y[O] = -1);
      var z = R[O];
      if (z !== null)
        for (R[O] = null, O = 0; O < z.length; O++) {
          var M = z[O];
          M !== null && (M.lane &= -536870913);
        }
      l &= ~U;
    }
    a !== 0 && Zf(t, a, 0),
      u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(c & ~e));
  }
  function Zf(t, e, l) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var a = 31 - ne(e);
    (t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 4194090));
  }
  function Vf(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - ne(l),
        n = 1 << a;
      (n & e) | (t[a] & e) && (t[a] |= e), (l &= ~n);
    }
  }
  function si(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function oi(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Kf() {
    var t = Y.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Md(t.type));
  }
  function jh(t, e) {
    var l = Y.p;
    try {
      return (Y.p = t), e();
    } finally {
      Y.p = l;
    }
  }
  var tl = Math.random().toString(36).slice(2),
    Kt = "__reactFiber$" + tl,
    It = "__reactProps$" + tl,
    Vl = "__reactContainer$" + tl,
    di = "__reactEvents$" + tl,
    Yh = "__reactListeners$" + tl,
    Lh = "__reactHandles$" + tl,
    Jf = "__reactResources$" + tl,
    qa = "__reactMarker$" + tl;
  function hi(t) {
    delete t[Kt], delete t[It], delete t[di], delete t[Yh], delete t[Lh];
  }
  function Kl(t) {
    var e = t[Kt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[Vl] || l[Kt])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = od(t); t !== null; ) {
            if ((l = t[Kt])) return l;
            t = od(t);
          }
        return e;
      }
      (t = l), (l = t.parentNode);
    }
    return null;
  }
  function Jl(t) {
    if ((t = t[Kt] || t[Vl])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function wa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function kl(t) {
    var e = t[Jf];
    return (
      e ||
        (e = t[Jf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function wt(t) {
    t[qa] = !0;
  }
  var kf = new Set(),
    $f = {};
  function Dl(t, e) {
    $l(t, e), $l(t + "Capture", e);
  }
  function $l(t, e) {
    for ($f[t] = e, t = 0; t < e.length; t++) kf.add(e[t]);
  }
  var Gh = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Wf = {},
    If = {};
  function Xh(t) {
    return ii.call(If, t)
      ? !0
      : ii.call(Wf, t)
      ? !1
      : Gh.test(t)
      ? (If[t] = !0)
      : ((Wf[t] = !0), !1);
  }
  function Qn(t, e, l) {
    if (Xh(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function Zn(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function He(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  var mi, Pf;
  function Wl(t) {
    if (mi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        (mi = (e && e[1]) || ""),
          (Pf =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      mi +
      t +
      Pf
    );
  }
  var yi = !1;
  function vi(t, e) {
    if (!t || yi) return "";
    yi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var U = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(U.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(U, []);
                } catch (M) {
                  var z = M;
                }
                Reflect.construct(t, [], U);
              } else {
                try {
                  U.call();
                } catch (M) {
                  z = M;
                }
                t.call(U.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                z = M;
              }
              (U = t()) &&
                typeof U.catch == "function" &&
                U.catch(function () {});
            }
          } catch (M) {
            if (M && z && typeof M.stack == "string") return [M.stack, z.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        c = u[0],
        s = u[1];
      if (c && s) {
        var y = c.split(`
`),
          R = s.split(`
`);
        for (
          n = a = 0;
          a < y.length && !y[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; n < R.length && !R[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === y.length || n === R.length)
          for (
            a = y.length - 1, n = R.length - 1;
            1 <= a && 0 <= n && y[a] !== R[n];

          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (y[a] !== R[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || y[a] !== R[n])) {
                  var O =
                    `
` + y[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      O.includes("<anonymous>") &&
                      (O = O.replace("<anonymous>", t.displayName)),
                    O
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      (yi = !1), (Error.prepareStackTrace = l);
    }
    return (l = t ? t.displayName || t.name : "") ? Wl(l) : "";
  }
  function Qh(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Wl(t.type);
      case 16:
        return Wl("Lazy");
      case 13:
        return Wl("Suspense");
      case 19:
        return Wl("SuspenseList");
      case 0:
      case 15:
        return vi(t.type, !1);
      case 11:
        return vi(t.type.render, !1);
      case 1:
        return vi(t.type, !0);
      case 31:
        return Wl("Activity");
      default:
        return "";
    }
  }
  function Ff(t) {
    try {
      var e = "";
      do (e += Qh(t)), (t = t.return);
      while (t);
      return e;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function he(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function tr(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Zh(t) {
    var e = tr(t) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      a = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var n = l.get,
        u = l.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (c) {
            (a = "" + c), u.call(this, c);
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (c) {
            a = "" + c;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Vn(t) {
    t._valueTracker || (t._valueTracker = Zh(t));
  }
  function er(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = "";
    return (
      t && (a = tr(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function Kn(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Vh = /[\n"\\]/g;
  function me(t) {
    return t.replace(Vh, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function pi(t, e, l, a, n, u, c, s) {
    (t.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (t.type = c)
        : t.removeAttribute("type"),
      e != null
        ? c === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + he(e))
          : t.value !== "" + he(e) && (t.value = "" + he(e))
        : (c !== "submit" && c !== "reset") || t.removeAttribute("value"),
      e != null
        ? gi(t, c, he(e))
        : l != null
        ? gi(t, c, he(l))
        : a != null && t.removeAttribute("value"),
      n == null && u != null && (t.defaultChecked = !!u),
      n != null &&
        (t.checked = n && typeof n != "function" && typeof n != "symbol"),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (t.name = "" + he(s))
        : t.removeAttribute("name");
  }
  function lr(t, e, l, a, n, u, c, s) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (t.type = u),
      e != null || l != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || e != null)) return;
      (l = l != null ? "" + he(l) : ""),
        (e = e != null ? "" + he(e) : l),
        s || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = s ? t.checked : !!a),
      (t.defaultChecked = !!a),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (t.name = c);
  }
  function gi(t, e, l) {
    (e === "number" && Kn(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function Il(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var n = 0; n < l.length; n++) e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        (n = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== n && (t[l].selected = n),
          n && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + he(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          (t[n].selected = !0), a && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function ar(t, e, l) {
    if (
      e != null &&
      ((e = "" + he(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + he(l) : "";
  }
  function nr(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (Vt(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), (e = l);
    }
    (l = he(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== "" && a !== null && (t.value = a);
  }
  function Pl(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Kh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ur(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : a
      ? t.setProperty(e, l)
      : typeof l != "number" || l === 0 || Kh.has(e)
      ? e === "float"
        ? (t.cssFloat = l)
        : (t[e] = ("" + l).trim())
      : (t[e] = l + "px");
  }
  function ir(t, e, l) {
    if (e != null && typeof e != "object") throw Error(f(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
            ? (t.cssFloat = "")
            : (t[a] = ""));
      for (var n in e)
        (a = e[n]), e.hasOwnProperty(n) && l[n] !== a && ur(t, n, a);
    } else for (var u in e) e.hasOwnProperty(u) && ur(t, u, e[u]);
  }
  function Si(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Jh = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    kh =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Jn(t) {
    return kh.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var bi = null;
  function Ei(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Fl = null,
    ta = null;
  function cr(t) {
    var e = Jl(t);
    if (e && (t = e.stateNode)) {
      var l = t[It] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (pi(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + me("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[It] || null;
                if (!n) throw Error(f(90));
                pi(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              (a = l[e]), a.form === t.form && er(a);
          }
          break t;
        case "textarea":
          ar(t, l.value, l.defaultValue);
          break t;
        case "select":
          (e = l.value), e != null && Il(t, !!l.multiple, e, !1);
      }
    }
  }
  var Ti = !1;
  function fr(t, e, l) {
    if (Ti) return t(e, l);
    Ti = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Ti = !1),
        (Fl !== null || ta !== null) &&
          (Nu(), Fl && ((e = Fl), (t = ta), (ta = Fl = null), cr(e), t)))
      )
        for (e = 0; e < t.length; e++) cr(t[e]);
    }
  }
  function Ba(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[It] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(f(231, e, typeof l));
    return l;
  }
  var Ce = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Ai = !1;
  if (Ce)
    try {
      var ja = {};
      Object.defineProperty(ja, "passive", {
        get: function () {
          Ai = !0;
        },
      }),
        window.addEventListener("test", ja, ja),
        window.removeEventListener("test", ja, ja);
    } catch {
      Ai = !1;
    }
  var el = null,
    Ri = null,
    kn = null;
  function rr() {
    if (kn) return kn;
    var t,
      e = Ri,
      l = e.length,
      a,
      n = "value" in el ? el.value : el.textContent,
      u = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++);
    var c = l - t;
    for (a = 1; a <= c && e[l - a] === n[u - a]; a++);
    return (kn = n.slice(t, 1 < a ? 1 - a : void 0));
  }
  function $n(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Wn() {
    return !0;
  }
  function sr() {
    return !1;
  }
  function Pt(t) {
    function e(l, a, n, u, c) {
      (this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = c),
        (this.currentTarget = null);
      for (var s in t)
        t.hasOwnProperty(s) && ((l = t[s]), (this[s] = l ? l(u) : u[s]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Wn
          : sr),
        (this.isPropagationStopped = sr),
        this
      );
    }
    return (
      A(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = Wn));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Wn));
        },
        persist: function () {},
        isPersistent: Wn,
      }),
      e
    );
  }
  var Ol = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    In = Pt(Ol),
    Ya = A({}, Ol, { view: 0, detail: 0 }),
    $h = Pt(Ya),
    zi,
    Mi,
    La,
    Pn = A({}, Ya, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Oi,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== La &&
              (La && t.type === "mousemove"
                ? ((zi = t.screenX - La.screenX), (Mi = t.screenY - La.screenY))
                : (Mi = zi = 0),
              (La = t)),
            zi);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Mi;
      },
    }),
    or = Pt(Pn),
    Wh = A({}, Pn, { dataTransfer: 0 }),
    Ih = Pt(Wh),
    Ph = A({}, Ya, { relatedTarget: 0 }),
    Di = Pt(Ph),
    Fh = A({}, Ol, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    tm = Pt(Fh),
    em = A({}, Ol, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    lm = Pt(em),
    am = A({}, Ol, { data: 0 }),
    dr = Pt(am),
    nm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    um = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    im = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function cm(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = im[t])
      ? !!e[t]
      : !1;
  }
  function Oi() {
    return cm;
  }
  var fm = A({}, Ya, {
      key: function (t) {
        if (t.key) {
          var e = nm[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = $n(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? um[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Oi,
      charCode: function (t) {
        return t.type === "keypress" ? $n(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? $n(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    rm = Pt(fm),
    sm = A({}, Pn, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    hr = Pt(sm),
    om = A({}, Ya, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Oi,
    }),
    dm = Pt(om),
    hm = A({}, Ol, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    mm = Pt(hm),
    ym = A({}, Pn, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    vm = Pt(ym),
    pm = A({}, Ol, { newState: 0, oldState: 0 }),
    gm = Pt(pm),
    Sm = [9, 13, 27, 32],
    _i = Ce && "CompositionEvent" in window,
    Ga = null;
  Ce && "documentMode" in document && (Ga = document.documentMode);
  var bm = Ce && "TextEvent" in window && !Ga,
    mr = Ce && (!_i || (Ga && 8 < Ga && 11 >= Ga)),
    yr = " ",
    vr = !1;
  function pr(t, e) {
    switch (t) {
      case "keyup":
        return Sm.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function gr(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var ea = !1;
  function Em(t, e) {
    switch (t) {
      case "compositionend":
        return gr(e);
      case "keypress":
        return e.which !== 32 ? null : ((vr = !0), yr);
      case "textInput":
        return (t = e.data), t === yr && vr ? null : t;
      default:
        return null;
    }
  }
  function Tm(t, e) {
    if (ea)
      return t === "compositionend" || (!_i && pr(t, e))
        ? ((t = rr()), (kn = Ri = el = null), (ea = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return mr && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Am = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Sr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Am[t.type] : e === "textarea";
  }
  function br(t, e, l, a) {
    Fl ? (ta ? ta.push(a) : (ta = [a])) : (Fl = a),
      (e = ju(e, "onChange")),
      0 < e.length &&
        ((l = new In("onChange", "change", null, l, a)),
        t.push({ event: l, listeners: e }));
  }
  var Xa = null,
    Qa = null;
  function Rm(t) {
    ed(t, 0);
  }
  function Fn(t) {
    var e = wa(t);
    if (er(e)) return t;
  }
  function Er(t, e) {
    if (t === "change") return e;
  }
  var Tr = !1;
  if (Ce) {
    var xi;
    if (Ce) {
      var Ui = "oninput" in document;
      if (!Ui) {
        var Ar = document.createElement("div");
        Ar.setAttribute("oninput", "return;"),
          (Ui = typeof Ar.oninput == "function");
      }
      xi = Ui;
    } else xi = !1;
    Tr = xi && (!document.documentMode || 9 < document.documentMode);
  }
  function Rr() {
    Xa && (Xa.detachEvent("onpropertychange", zr), (Qa = Xa = null));
  }
  function zr(t) {
    if (t.propertyName === "value" && Fn(Qa)) {
      var e = [];
      br(e, Qa, t, Ei(t)), fr(Rm, e);
    }
  }
  function zm(t, e, l) {
    t === "focusin"
      ? (Rr(), (Xa = e), (Qa = l), Xa.attachEvent("onpropertychange", zr))
      : t === "focusout" && Rr();
  }
  function Mm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Fn(Qa);
  }
  function Dm(t, e) {
    if (t === "click") return Fn(e);
  }
  function Om(t, e) {
    if (t === "input" || t === "change") return Fn(e);
  }
  function _m(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ue = typeof Object.is == "function" ? Object.is : _m;
  function Za(t, e) {
    if (ue(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!ii.call(e, n) || !ue(t[n], e[n])) return !1;
    }
    return !0;
  }
  function Mr(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Dr(t, e) {
    var l = Mr(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e))
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Mr(l);
    }
  }
  function Or(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? Or(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function _r(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Kn(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Kn(t.document);
    }
    return e;
  }
  function Ni(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var xm = Ce && "documentMode" in document && 11 >= document.documentMode,
    la = null,
    Hi = null,
    Va = null,
    Ci = !1;
  function xr(t, e, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Ci ||
      la == null ||
      la !== Kn(a) ||
      ((a = la),
      "selectionStart" in a && Ni(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Va && Za(Va, a)) ||
        ((Va = a),
        (a = ju(Hi, "onSelect")),
        0 < a.length &&
          ((e = new In("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = la))));
  }
  function _l(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var aa = {
      animationend: _l("Animation", "AnimationEnd"),
      animationiteration: _l("Animation", "AnimationIteration"),
      animationstart: _l("Animation", "AnimationStart"),
      transitionrun: _l("Transition", "TransitionRun"),
      transitionstart: _l("Transition", "TransitionStart"),
      transitioncancel: _l("Transition", "TransitionCancel"),
      transitionend: _l("Transition", "TransitionEnd"),
    },
    qi = {},
    Ur = {};
  Ce &&
    ((Ur = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete aa.animationend.animation,
      delete aa.animationiteration.animation,
      delete aa.animationstart.animation),
    "TransitionEvent" in window || delete aa.transitionend.transition);
  function xl(t) {
    if (qi[t]) return qi[t];
    if (!aa[t]) return t;
    var e = aa[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in Ur) return (qi[t] = e[l]);
    return t;
  }
  var Nr = xl("animationend"),
    Hr = xl("animationiteration"),
    Cr = xl("animationstart"),
    Um = xl("transitionrun"),
    Nm = xl("transitionstart"),
    Hm = xl("transitioncancel"),
    qr = xl("transitionend"),
    wr = new Map(),
    wi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  wi.push("scrollEnd");
  function Te(t, e) {
    wr.set(t, e), Dl(e, [t]);
  }
  var Br = new WeakMap();
  function ye(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Br.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: Ff(e) }), Br.set(t, e), e);
    }
    return { value: t, source: e, stack: Ff(e) };
  }
  var ve = [],
    na = 0,
    Bi = 0;
  function tu() {
    for (var t = na, e = (Bi = na = 0); e < t; ) {
      var l = ve[e];
      ve[e++] = null;
      var a = ve[e];
      ve[e++] = null;
      var n = ve[e];
      ve[e++] = null;
      var u = ve[e];
      if (((ve[e++] = null), a !== null && n !== null)) {
        var c = a.pending;
        c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
          (a.pending = n);
      }
      u !== 0 && jr(l, n, u);
    }
  }
  function eu(t, e, l, a) {
    (ve[na++] = t),
      (ve[na++] = e),
      (ve[na++] = l),
      (ve[na++] = a),
      (Bi |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function ji(t, e, l, a) {
    return eu(t, e, l, a), lu(t);
  }
  function ua(t, e) {
    return eu(t, null, null, e), lu(t);
  }
  function jr(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = t.return; u !== null; )
      (u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 &&
          ((t = u.stateNode), t === null || t._visibility & 1 || (n = !0)),
        (t = u),
        (u = u.return);
    return t.tag === 3
      ? ((u = t.stateNode),
        n &&
          e !== null &&
          ((n = 31 - ne(l)),
          (t = u.hiddenUpdates),
          (a = t[n]),
          a === null ? (t[n] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        u)
      : null;
  }
  function lu(t) {
    if (50 < pn) throw ((pn = 0), (Zc = null), Error(f(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var ia = {};
  function Cm(t, e, l, a) {
    (this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ie(t, e, l, a) {
    return new Cm(t, e, l, a);
  }
  function Yi(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function qe(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = ie(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function Yr(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function au(t, e, l, a, n, u) {
    var c = 0;
    if (((a = t), typeof t == "function")) Yi(t) && (c = 1);
    else if (typeof t == "string")
      c = wy(t, l, J.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case bt:
          return (t = ie(31, l, e, n)), (t.elementType = bt), (t.lanes = u), t;
        case N:
          return Ul(l.children, n, u, e);
        case V:
          (c = 8), (n |= 24);
          break;
        case L:
          return (
            (t = ie(12, l, e, n | 2)), (t.elementType = L), (t.lanes = u), t
          );
        case P:
          return (t = ie(13, l, e, n)), (t.elementType = P), (t.lanes = u), t;
        case Ut:
          return (t = ie(19, l, e, n)), (t.elementType = Ut), (t.lanes = u), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case w:
              case G:
                c = 10;
                break t;
              case F:
                c = 9;
                break t;
              case ft:
                c = 11;
                break t;
              case zt:
                c = 14;
                break t;
              case Ot:
                (c = 16), (a = null);
                break t;
            }
          (c = 29),
            (l = Error(f(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (e = ie(c, l, e, n)), (e.elementType = t), (e.type = a), (e.lanes = u), e
    );
  }
  function Ul(t, e, l, a) {
    return (t = ie(7, t, a, e)), (t.lanes = l), t;
  }
  function Li(t, e, l) {
    return (t = ie(6, t, null, e)), (t.lanes = l), t;
  }
  function Gi(t, e, l) {
    return (
      (e = ie(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var ca = [],
    fa = 0,
    nu = null,
    uu = 0,
    pe = [],
    ge = 0,
    Nl = null,
    we = 1,
    Be = "";
  function Hl(t, e) {
    (ca[fa++] = uu), (ca[fa++] = nu), (nu = t), (uu = e);
  }
  function Lr(t, e, l) {
    (pe[ge++] = we), (pe[ge++] = Be), (pe[ge++] = Nl), (Nl = t);
    var a = we;
    t = Be;
    var n = 32 - ne(a) - 1;
    (a &= ~(1 << n)), (l += 1);
    var u = 32 - ne(e) + n;
    if (30 < u) {
      var c = n - (n % 5);
      (u = (a & ((1 << c) - 1)).toString(32)),
        (a >>= c),
        (n -= c),
        (we = (1 << (32 - ne(e) + n)) | (l << n) | a),
        (Be = u + t);
    } else (we = (1 << u) | (l << n) | a), (Be = t);
  }
  function Xi(t) {
    t.return !== null && (Hl(t, 1), Lr(t, 1, 0));
  }
  function Qi(t) {
    for (; t === nu; )
      (nu = ca[--fa]), (ca[fa] = null), (uu = ca[--fa]), (ca[fa] = null);
    for (; t === Nl; )
      (Nl = pe[--ge]),
        (pe[ge] = null),
        (Be = pe[--ge]),
        (pe[ge] = null),
        (we = pe[--ge]),
        (pe[ge] = null);
  }
  var Wt = null,
    Mt = null,
    ot = !1,
    Cl = null,
    De = !1,
    Zi = Error(f(519));
  function ql(t) {
    var e = Error(f(418, ""));
    throw (ka(ye(e, t)), Zi);
  }
  function Gr(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[Kt] = t), (e[It] = a), l)) {
      case "dialog":
        it("cancel", e), it("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        it("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Sn.length; l++) it(Sn[l], e);
        break;
      case "source":
        it("error", e);
        break;
      case "img":
      case "image":
      case "link":
        it("error", e), it("load", e);
        break;
      case "details":
        it("toggle", e);
        break;
      case "input":
        it("invalid", e),
          lr(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          Vn(e);
        break;
      case "select":
        it("invalid", e);
        break;
      case "textarea":
        it("invalid", e), nr(e, a.value, a.defaultValue, a.children), Vn(e);
    }
    (l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      ud(e.textContent, l)
        ? (a.popover != null && (it("beforetoggle", e), it("toggle", e)),
          a.onScroll != null && it("scroll", e),
          a.onScrollEnd != null && it("scrollend", e),
          a.onClick != null && (e.onclick = Yu),
          (e = !0))
        : (e = !1),
      e || ql(t);
  }
  function Xr(t) {
    for (Wt = t.return; Wt; )
      switch (Wt.tag) {
        case 5:
        case 13:
          De = !1;
          return;
        case 27:
        case 3:
          De = !0;
          return;
        default:
          Wt = Wt.return;
      }
  }
  function Ka(t) {
    if (t !== Wt) return !1;
    if (!ot) return Xr(t), (ot = !0), !1;
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || cf(t.type, t.memoizedProps))),
        (l = !l)),
      l && Mt && ql(t),
      Xr(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(f(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((l = t.data), l === "/$")) {
              if (e === 0) {
                Mt = Re(t.nextSibling);
                break t;
              }
              e--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || e++;
          t = t.nextSibling;
        }
        Mt = null;
      }
    } else
      e === 27
        ? ((e = Mt), pl(t.type) ? ((t = of), (of = null), (Mt = t)) : (Mt = e))
        : (Mt = Wt ? Re(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Ja() {
    (Mt = Wt = null), (ot = !1);
  }
  function Qr() {
    var t = Cl;
    return (
      t !== null &&
        (ee === null ? (ee = t) : ee.push.apply(ee, t), (Cl = null)),
      t
    );
  }
  function ka(t) {
    Cl === null ? (Cl = [t]) : Cl.push(t);
  }
  var Vi = H(null),
    wl = null,
    je = null;
  function ll(t, e, l) {
    j(Vi, e._currentValue), (e._currentValue = l);
  }
  function Ye(t) {
    (t._currentValue = Vi.current), X(Vi);
  }
  function Ki(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function Ji(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var c = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var s = u;
          u = n;
          for (var y = 0; y < e.length; y++)
            if (s.context === e[y]) {
              (u.lanes |= l),
                (s = u.alternate),
                s !== null && (s.lanes |= l),
                Ki(u.return, l, t),
                a || (c = null);
              break t;
            }
          u = s.next;
        }
      } else if (n.tag === 18) {
        if (((c = n.return), c === null)) throw Error(f(341));
        (c.lanes |= l),
          (u = c.alternate),
          u !== null && (u.lanes |= l),
          Ki(c, l, t),
          (c = null);
      } else c = n.child;
      if (c !== null) c.return = n;
      else
        for (c = n; c !== null; ) {
          if (c === t) {
            c = null;
            break;
          }
          if (((n = c.sibling), n !== null)) {
            (n.return = c.return), (c = n);
            break;
          }
          c = c.return;
        }
      n = c;
    }
  }
  function $a(t, e, l, a) {
    t = null;
    for (var n = e, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(f(387));
        if (((c = c.memoizedProps), c !== null)) {
          var s = n.type;
          ue(n.pendingProps.value, c.value) ||
            (t !== null ? t.push(s) : (t = [s]));
        }
      } else if (n === le.current) {
        if (((c = n.alternate), c === null)) throw Error(f(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (t !== null ? t.push(zn) : (t = [zn]));
      }
      n = n.return;
    }
    t !== null && Ji(e, t, l, a), (e.flags |= 262144);
  }
  function iu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ue(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Bl(t) {
    (wl = t),
      (je = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Jt(t) {
    return Zr(wl, t);
  }
  function cu(t, e) {
    return wl === null && Bl(t), Zr(t, e);
  }
  function Zr(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), je === null)) {
      if (t === null) throw Error(f(308));
      (je = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else je = je.next = e;
    return l;
  }
  var qm =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                });
            };
          },
    wm = i.unstable_scheduleCallback,
    Bm = i.unstable_NormalPriority,
    Ct = {
      $$typeof: G,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ki() {
    return { controller: new qm(), data: new Map(), refCount: 0 };
  }
  function Wa(t) {
    t.refCount--,
      t.refCount === 0 &&
        wm(Bm, function () {
          t.controller.abort();
        });
  }
  var Ia = null,
    $i = 0,
    ra = 0,
    sa = null;
  function jm(t, e) {
    if (Ia === null) {
      var l = (Ia = []);
      ($i = 0),
        (ra = Ic()),
        (sa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return $i++, e.then(Vr, Vr), e;
  }
  function Vr() {
    if (--$i === 0 && Ia !== null) {
      sa !== null && (sa.status = "fulfilled");
      var t = Ia;
      (Ia = null), (ra = 0), (sa = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Ym(t, e) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = e);
          for (var n = 0; n < l.length; n++) (0, l[n])(e);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        }
      ),
      a
    );
  }
  var Kr = _.S;
  _.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      jm(t, e),
      Kr !== null && Kr(t, e);
  };
  var jl = H(null);
  function Wi() {
    var t = jl.current;
    return t !== null ? t : St.pooledCache;
  }
  function fu(t, e) {
    e === null ? j(jl, jl.current) : j(jl, e.pool);
  }
  function Jr() {
    var t = Wi();
    return t === null ? null : { parent: Ct._currentValue, pool: t };
  }
  var Pa = Error(f(460)),
    kr = Error(f(474)),
    ru = Error(f(542)),
    Ii = { then: function () {} };
  function $r(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function su() {}
  function Wr(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(su, su), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Pr(t), t);
      default:
        if (typeof e.status == "string") e.then(su, su);
        else {
          if (((t = St), t !== null && 100 < t.shellSuspendCounter))
            throw Error(f(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  (n.status = "fulfilled"), (n.value = a);
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  (n.status = "rejected"), (n.reason = a);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Pr(t), t);
        }
        throw ((Fa = e), Pa);
    }
  }
  var Fa = null;
  function Ir() {
    if (Fa === null) throw Error(f(459));
    var t = Fa;
    return (Fa = null), t;
  }
  function Pr(t) {
    if (t === Pa || t === ru) throw Error(f(483));
  }
  var al = !1;
  function Pi(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Fi(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function nl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ul(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (dt & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (a.pending = e),
        (e = lu(t)),
        jr(t, null, l),
        e
      );
    }
    return eu(t, a, e, l), lu(t);
  }
  function tn(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), Vf(t, l);
    }
  }
  function tc(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var c = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          u === null ? (n = u = c) : (u = u.next = c), (l = l.next);
        } while (l !== null);
        u === null ? (n = u = e) : (u = u.next = e);
      } else n = u = e;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = l);
      return;
    }
    (t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e);
  }
  var ec = !1;
  function en() {
    if (ec) {
      var t = sa;
      if (t !== null) throw t;
    }
  }
  function ln(t, e, l, a) {
    ec = !1;
    var n = t.updateQueue;
    al = !1;
    var u = n.firstBaseUpdate,
      c = n.lastBaseUpdate,
      s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var y = s,
        R = y.next;
      (y.next = null), c === null ? (u = R) : (c.next = R), (c = y);
      var O = t.alternate;
      O !== null &&
        ((O = O.updateQueue),
        (s = O.lastBaseUpdate),
        s !== c &&
          (s === null ? (O.firstBaseUpdate = R) : (s.next = R),
          (O.lastBaseUpdate = y)));
    }
    if (u !== null) {
      var U = n.baseState;
      (c = 0), (O = R = y = null), (s = u);
      do {
        var z = s.lane & -536870913,
          M = z !== s.lane;
        if (M ? (ct & z) === z : (a & z) === z) {
          z !== 0 && z === ra && (ec = !0),
            O !== null &&
              (O = O.next =
                {
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var I = t,
              k = s;
            z = e;
            var vt = l;
            switch (k.tag) {
              case 1:
                if (((I = k.payload), typeof I == "function")) {
                  U = I.call(vt, U, z);
                  break t;
                }
                U = I;
                break t;
              case 3:
                I.flags = (I.flags & -65537) | 128;
              case 0:
                if (
                  ((I = k.payload),
                  (z = typeof I == "function" ? I.call(vt, U, z) : I),
                  z == null)
                )
                  break t;
                U = A({}, U, z);
                break t;
              case 2:
                al = !0;
            }
          }
          (z = s.callback),
            z !== null &&
              ((t.flags |= 64),
              M && (t.flags |= 8192),
              (M = n.callbacks),
              M === null ? (n.callbacks = [z]) : M.push(z));
        } else
          (M = {
            lane: z,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            O === null ? ((R = O = M), (y = U)) : (O = O.next = M),
            (c |= z);
        if (((s = s.next), s === null)) {
          if (((s = n.shared.pending), s === null)) break;
          (M = s),
            (s = M.next),
            (M.next = null),
            (n.lastBaseUpdate = M),
            (n.shared.pending = null);
        }
      } while (!0);
      O === null && (y = U),
        (n.baseState = y),
        (n.firstBaseUpdate = R),
        (n.lastBaseUpdate = O),
        u === null && (n.shared.lanes = 0),
        (hl |= c),
        (t.lanes = c),
        (t.memoizedState = U);
    }
  }
  function Fr(t, e) {
    if (typeof t != "function") throw Error(f(191, t));
    t.call(e);
  }
  function ts(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) Fr(l[t], e);
  }
  var oa = H(null),
    ou = H(0);
  function es(t, e) {
    (t = Ke), j(ou, t), j(oa, e), (Ke = t | e.baseLanes);
  }
  function lc() {
    j(ou, Ke), j(oa, oa.current);
  }
  function ac() {
    (Ke = ou.current), X(oa), X(ou);
  }
  var il = 0,
    at = null,
    mt = null,
    Nt = null,
    du = !1,
    da = !1,
    Yl = !1,
    hu = 0,
    an = 0,
    ha = null,
    Lm = 0;
  function _t() {
    throw Error(f(321));
  }
  function nc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ue(t[l], e[l])) return !1;
    return !0;
  }
  function uc(t, e, l, a, n, u) {
    return (
      (il = u),
      (at = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (_.H = t === null || t.memoizedState === null ? js : Ys),
      (Yl = !1),
      (u = l(a, n)),
      (Yl = !1),
      da && (u = as(e, l, a, n)),
      ls(t),
      u
    );
  }
  function ls(t) {
    _.H = Su;
    var e = mt !== null && mt.next !== null;
    if (((il = 0), (Nt = mt = at = null), (du = !1), (an = 0), (ha = null), e))
      throw Error(f(300));
    t === null ||
      Bt ||
      ((t = t.dependencies), t !== null && iu(t) && (Bt = !0));
  }
  function as(t, e, l, a) {
    at = t;
    var n = 0;
    do {
      if ((da && (ha = null), (an = 0), (da = !1), 25 <= n))
        throw Error(f(301));
      if (((n += 1), (Nt = mt = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (_.H = Jm), (u = e(l, a));
    } while (da);
    return u;
  }
  function Gm() {
    var t = _.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? nn(e) : e),
      (t = t.useState()[0]),
      (mt !== null ? mt.memoizedState : null) !== t && (at.flags |= 1024),
      e
    );
  }
  function ic() {
    var t = hu !== 0;
    return (hu = 0), t;
  }
  function cc(t, e, l) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l);
  }
  function fc(t) {
    if (du) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      du = !1;
    }
    (il = 0), (Nt = mt = at = null), (da = !1), (an = hu = 0), (ha = null);
  }
  function Ft() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Nt === null ? (at.memoizedState = Nt = t) : (Nt = Nt.next = t), Nt;
  }
  function Ht() {
    if (mt === null) {
      var t = at.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = mt.next;
    var e = Nt === null ? at.memoizedState : Nt.next;
    if (e !== null) (Nt = e), (mt = t);
    else {
      if (t === null)
        throw at.alternate === null ? Error(f(467)) : Error(f(310));
      (mt = t),
        (t = {
          memoizedState: mt.memoizedState,
          baseState: mt.baseState,
          baseQueue: mt.baseQueue,
          queue: mt.queue,
          next: null,
        }),
        Nt === null ? (at.memoizedState = Nt = t) : (Nt = Nt.next = t);
    }
    return Nt;
  }
  function rc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function nn(t) {
    var e = an;
    return (
      (an += 1),
      ha === null && (ha = []),
      (t = Wr(ha, t, e)),
      (e = at),
      (Nt === null ? e.memoizedState : Nt.next) === null &&
        ((e = e.alternate),
        (_.H = e === null || e.memoizedState === null ? js : Ys)),
      t
    );
  }
  function mu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return nn(t);
      if (t.$$typeof === G) return Jt(t);
    }
    throw Error(f(438, String(t)));
  }
  function sc(t) {
    var e = null,
      l = at.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = at.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = rc()), (at.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = $t;
    return e.index++, l;
  }
  function Le(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function yu(t) {
    var e = Ht();
    return oc(e, mt, t);
  }
  function oc(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var c = n.next;
        (n.next = u.next), (u.next = c);
      }
      (e.baseQueue = n = u), (a.pending = null);
    }
    if (((u = t.baseState), n === null)) t.memoizedState = u;
    else {
      e = n.next;
      var s = (c = null),
        y = null,
        R = e,
        O = !1;
      do {
        var U = R.lane & -536870913;
        if (U !== R.lane ? (ct & U) === U : (il & U) === U) {
          var z = R.revertLane;
          if (z === 0)
            y !== null &&
              (y = y.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: R.action,
                  hasEagerState: R.hasEagerState,
                  eagerState: R.eagerState,
                  next: null,
                }),
              U === ra && (O = !0);
          else if ((il & z) === z) {
            (R = R.next), z === ra && (O = !0);
            continue;
          } else
            (U = {
              lane: 0,
              revertLane: R.revertLane,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null,
            }),
              y === null ? ((s = y = U), (c = u)) : (y = y.next = U),
              (at.lanes |= z),
              (hl |= z);
          (U = R.action),
            Yl && l(u, U),
            (u = R.hasEagerState ? R.eagerState : l(u, U));
        } else
          (z = {
            lane: U,
            revertLane: R.revertLane,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null,
          }),
            y === null ? ((s = y = z), (c = u)) : (y = y.next = z),
            (at.lanes |= U),
            (hl |= U);
        R = R.next;
      } while (R !== null && R !== e);
      if (
        (y === null ? (c = u) : (y.next = s),
        !ue(u, t.memoizedState) && ((Bt = !0), O && ((l = sa), l !== null)))
      )
        throw l;
      (t.memoizedState = u),
        (t.baseState = c),
        (t.baseQueue = y),
        (a.lastRenderedState = u);
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function dc(t) {
    var e = Ht(),
      l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      n = l.pending,
      u = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var c = (n = n.next);
      do (u = t(u, c.action)), (c = c.next);
      while (c !== n);
      ue(u, e.memoizedState) || (Bt = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (l.lastRenderedState = u);
    }
    return [u, a];
  }
  function ns(t, e, l) {
    var a = at,
      n = Ht(),
      u = ot;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var c = !ue((mt || n).memoizedState, l);
    c && ((n.memoizedState = l), (Bt = !0)), (n = n.queue);
    var s = cs.bind(null, a, n, t);
    if (
      (un(2048, 8, s, [t]),
      n.getSnapshot !== e || c || (Nt !== null && Nt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ma(9, vu(), is.bind(null, a, n, l, e), null),
        St === null)
      )
        throw Error(f(349));
      u || (il & 124) !== 0 || us(a, e, l);
    }
    return l;
  }
  function us(t, e, l) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = at.updateQueue),
      e === null
        ? ((e = rc()), (at.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t));
  }
  function is(t, e, l, a) {
    (e.value = l), (e.getSnapshot = a), fs(e) && rs(t);
  }
  function cs(t, e, l) {
    return l(function () {
      fs(e) && rs(t);
    });
  }
  function fs(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ue(t, l);
    } catch {
      return !0;
    }
  }
  function rs(t) {
    var e = ua(t, 2);
    e !== null && oe(e, t, 2);
  }
  function hc(t) {
    var e = Ft();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), Yl)) {
        Fe(!0);
        try {
          l();
        } finally {
          Fe(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Le,
        lastRenderedState: t,
      }),
      e
    );
  }
  function ss(t, e, l, a) {
    return (t.baseState = l), oc(t, mt, typeof a == "function" ? a : Le);
  }
  function Xm(t, e, l, a, n) {
    if (gu(t)) throw Error(f(485));
    if (((t = e.action), t !== null)) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          u.listeners.push(c);
        },
      };
      _.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = e.pending),
        l === null
          ? ((u.next = e.pending = u), os(e, u))
          : ((u.next = l.next), (e.pending = l.next = u));
    }
  }
  function os(t, e) {
    var l = e.action,
      a = e.payload,
      n = t.state;
    if (e.isTransition) {
      var u = _.T,
        c = {};
      _.T = c;
      try {
        var s = l(n, a),
          y = _.S;
        y !== null && y(c, s), ds(t, e, s);
      } catch (R) {
        mc(t, e, R);
      } finally {
        _.T = u;
      }
    } else
      try {
        (u = l(n, a)), ds(t, e, u);
      } catch (R) {
        mc(t, e, R);
      }
  }
  function ds(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            hs(t, e, a);
          },
          function (a) {
            return mc(t, e, a);
          }
        )
      : hs(t, e, l);
  }
  function hs(t, e, l) {
    (e.status = "fulfilled"),
      (e.value = l),
      ms(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), os(t, l)));
  }
  function mc(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = l), ms(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function ms(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function ys(t, e) {
    return e;
  }
  function vs(t, e) {
    if (ot) {
      var l = St.formState;
      if (l !== null) {
        t: {
          var a = at;
          if (ot) {
            if (Mt) {
              e: {
                for (var n = Mt, u = De; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (((n = Re(n.nextSibling)), n === null)) {
                    n = null;
                    break e;
                  }
                }
                (u = n.data), (n = u === "F!" || u === "F" ? n : null);
              }
              if (n) {
                (Mt = Re(n.nextSibling)), (a = n.data === "F!");
                break t;
              }
            }
            ql(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = Ft()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ys,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = qs.bind(null, at, a)),
      (a.dispatch = l),
      (a = hc(!1)),
      (u = Sc.bind(null, at, !1, a.queue)),
      (a = Ft()),
      (n = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = n),
      (l = Xm.bind(null, at, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function ps(t) {
    var e = Ht();
    return gs(e, mt, t);
  }
  function gs(t, e, l) {
    if (
      ((e = oc(t, e, ys)[0]),
      (t = yu(Le)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = nn(e);
      } catch (c) {
        throw c === Pa ? ru : c;
      }
    else a = e;
    e = Ht();
    var n = e.queue,
      u = n.dispatch;
    return (
      l !== e.memoizedState &&
        ((at.flags |= 2048), ma(9, vu(), Qm.bind(null, n, l), null)),
      [a, u, t]
    );
  }
  function Qm(t, e) {
    t.action = e;
  }
  function Ss(t) {
    var e = Ht(),
      l = mt;
    if (l !== null) return gs(e, l, t);
    Ht(), (e = e.memoizedState), (l = Ht());
    var a = l.queue.dispatch;
    return (l.memoizedState = t), [e, a, !1];
  }
  function ma(t, e, l, a) {
    return (
      (t = { tag: t, create: l, deps: a, inst: e, next: null }),
      (e = at.updateQueue),
      e === null && ((e = rc()), (at.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function vu() {
    return { destroy: void 0, resource: void 0 };
  }
  function bs() {
    return Ht().memoizedState;
  }
  function pu(t, e, l, a) {
    var n = Ft();
    (a = a === void 0 ? null : a),
      (at.flags |= t),
      (n.memoizedState = ma(1 | e, vu(), l, a));
  }
  function un(t, e, l, a) {
    var n = Ht();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    mt !== null && a !== null && nc(a, mt.memoizedState.deps)
      ? (n.memoizedState = ma(e, u, l, a))
      : ((at.flags |= t), (n.memoizedState = ma(1 | e, u, l, a)));
  }
  function Es(t, e) {
    pu(8390656, 8, t, e);
  }
  function Ts(t, e) {
    un(2048, 8, t, e);
  }
  function As(t, e) {
    return un(4, 2, t, e);
  }
  function Rs(t, e) {
    return un(4, 4, t, e);
  }
  function zs(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Ms(t, e, l) {
    (l = l != null ? l.concat([t]) : null), un(4, 4, zs.bind(null, e, t), l);
  }
  function yc() {}
  function Ds(t, e) {
    var l = Ht();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && nc(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function Os(t, e) {
    var l = Ht();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && nc(e, a[1])) return a[0];
    if (((a = t()), Yl)) {
      Fe(!0);
      try {
        t();
      } finally {
        Fe(!1);
      }
    }
    return (l.memoizedState = [a, e]), a;
  }
  function vc(t, e, l) {
    return l === void 0 || (il & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = No()), (at.lanes |= t), (hl |= t), l);
  }
  function _s(t, e, l, a) {
    return ue(l, e)
      ? l
      : oa.current !== null
      ? ((t = vc(t, l, a)), ue(t, e) || (Bt = !0), t)
      : (il & 42) === 0
      ? ((Bt = !0), (t.memoizedState = l))
      : ((t = No()), (at.lanes |= t), (hl |= t), e);
  }
  function xs(t, e, l, a, n) {
    var u = Y.p;
    Y.p = u !== 0 && 8 > u ? u : 8;
    var c = _.T,
      s = {};
    (_.T = s), Sc(t, !1, e, l);
    try {
      var y = n(),
        R = _.S;
      if (
        (R !== null && R(s, y),
        y !== null && typeof y == "object" && typeof y.then == "function")
      ) {
        var O = Ym(y, a);
        cn(t, e, O, se(t));
      } else cn(t, e, a, se(t));
    } catch (U) {
      cn(t, e, { then: function () {}, status: "rejected", reason: U }, se());
    } finally {
      (Y.p = u), (_.T = c);
    }
  }
  function Zm() {}
  function pc(t, e, l, a) {
    if (t.tag !== 5) throw Error(f(476));
    var n = Us(t).queue;
    xs(
      t,
      n,
      e,
      W,
      l === null
        ? Zm
        : function () {
            return Ns(t), l(a);
          }
    );
  }
  function Us(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: W,
      baseState: W,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Le,
        lastRenderedState: W,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Le,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Ns(t) {
    var e = Us(t).next.queue;
    cn(t, e, {}, se());
  }
  function gc() {
    return Jt(zn);
  }
  function Hs() {
    return Ht().memoizedState;
  }
  function Cs() {
    return Ht().memoizedState;
  }
  function Vm(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = se();
          t = nl(l);
          var a = ul(e, t, l);
          a !== null && (oe(a, e, l), tn(a, e, l)),
            (e = { cache: ki() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function Km(t, e, l) {
    var a = se();
    (l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      gu(t)
        ? ws(e, l)
        : ((l = ji(t, e, l, a)), l !== null && (oe(l, t, a), Bs(l, e, a)));
  }
  function qs(t, e, l) {
    var a = se();
    cn(t, e, l, a);
  }
  function cn(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (gu(t)) ws(e, n);
    else {
      var u = t.alternate;
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var c = e.lastRenderedState,
            s = u(c, l);
          if (((n.hasEagerState = !0), (n.eagerState = s), ue(s, c)))
            return eu(t, e, n, 0), St === null && tu(), !1;
        } catch {
        } finally {
        }
      if (((l = ji(t, e, n, a)), l !== null))
        return oe(l, t, a), Bs(l, e, a), !0;
    }
    return !1;
  }
  function Sc(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Ic(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      gu(t))
    ) {
      if (e) throw Error(f(479));
    } else (e = ji(t, l, a, 2)), e !== null && oe(e, t, 2);
  }
  function gu(t) {
    var e = t.alternate;
    return t === at || (e !== null && e === at);
  }
  function ws(t, e) {
    da = du = !0;
    var l = t.pending;
    l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e);
  }
  function Bs(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), Vf(t, l);
    }
  }
  var Su = {
      readContext: Jt,
      use: mu,
      useCallback: _t,
      useContext: _t,
      useEffect: _t,
      useImperativeHandle: _t,
      useLayoutEffect: _t,
      useInsertionEffect: _t,
      useMemo: _t,
      useReducer: _t,
      useRef: _t,
      useState: _t,
      useDebugValue: _t,
      useDeferredValue: _t,
      useTransition: _t,
      useSyncExternalStore: _t,
      useId: _t,
      useHostTransitionStatus: _t,
      useFormState: _t,
      useActionState: _t,
      useOptimistic: _t,
      useMemoCache: _t,
      useCacheRefresh: _t,
    },
    js = {
      readContext: Jt,
      use: mu,
      useCallback: function (t, e) {
        return (Ft().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: Jt,
      useEffect: Es,
      useImperativeHandle: function (t, e, l) {
        (l = l != null ? l.concat([t]) : null),
          pu(4194308, 4, zs.bind(null, e, t), l);
      },
      useLayoutEffect: function (t, e) {
        return pu(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        pu(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = Ft();
        e = e === void 0 ? null : e;
        var a = t();
        if (Yl) {
          Fe(!0);
          try {
            t();
          } finally {
            Fe(!1);
          }
        }
        return (l.memoizedState = [a, e]), a;
      },
      useReducer: function (t, e, l) {
        var a = Ft();
        if (l !== void 0) {
          var n = l(e);
          if (Yl) {
            Fe(!0);
            try {
              l(e);
            } finally {
              Fe(!1);
            }
          }
        } else n = e;
        return (
          (a.memoizedState = a.baseState = n),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: n,
          }),
          (a.queue = t),
          (t = t.dispatch = Km.bind(null, at, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Ft();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = hc(t);
        var e = t.queue,
          l = qs.bind(null, at, e);
        return (e.dispatch = l), [t.memoizedState, l];
      },
      useDebugValue: yc,
      useDeferredValue: function (t, e) {
        var l = Ft();
        return vc(l, t, e);
      },
      useTransition: function () {
        var t = hc(!1);
        return (
          (t = xs.bind(null, at, t.queue, !0, !1)),
          (Ft().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var a = at,
          n = Ft();
        if (ot) {
          if (l === void 0) throw Error(f(407));
          l = l();
        } else {
          if (((l = e()), St === null)) throw Error(f(349));
          (ct & 124) !== 0 || us(a, e, l);
        }
        n.memoizedState = l;
        var u = { value: l, getSnapshot: e };
        return (
          (n.queue = u),
          Es(cs.bind(null, a, u, t), [t]),
          (a.flags |= 2048),
          ma(9, vu(), is.bind(null, a, u, l, e), null),
          l
        );
      },
      useId: function () {
        var t = Ft(),
          e = St.identifierPrefix;
        if (ot) {
          var l = Be,
            a = we;
          (l = (a & ~(1 << (32 - ne(a) - 1))).toString(32) + l),
            (e = "«" + e + "R" + l),
            (l = hu++),
            0 < l && (e += "H" + l.toString(32)),
            (e += "»");
        } else (l = Lm++), (e = "«" + e + "r" + l.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: gc,
      useFormState: vs,
      useActionState: vs,
      useOptimistic: function (t) {
        var e = Ft();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l),
          (e = Sc.bind(null, at, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: sc,
      useCacheRefresh: function () {
        return (Ft().memoizedState = Vm.bind(null, at));
      },
    },
    Ys = {
      readContext: Jt,
      use: mu,
      useCallback: Ds,
      useContext: Jt,
      useEffect: Ts,
      useImperativeHandle: Ms,
      useInsertionEffect: As,
      useLayoutEffect: Rs,
      useMemo: Os,
      useReducer: yu,
      useRef: bs,
      useState: function () {
        return yu(Le);
      },
      useDebugValue: yc,
      useDeferredValue: function (t, e) {
        var l = Ht();
        return _s(l, mt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = yu(Le)[0],
          e = Ht().memoizedState;
        return [typeof t == "boolean" ? t : nn(t), e];
      },
      useSyncExternalStore: ns,
      useId: Hs,
      useHostTransitionStatus: gc,
      useFormState: ps,
      useActionState: ps,
      useOptimistic: function (t, e) {
        var l = Ht();
        return ss(l, mt, t, e);
      },
      useMemoCache: sc,
      useCacheRefresh: Cs,
    },
    Jm = {
      readContext: Jt,
      use: mu,
      useCallback: Ds,
      useContext: Jt,
      useEffect: Ts,
      useImperativeHandle: Ms,
      useInsertionEffect: As,
      useLayoutEffect: Rs,
      useMemo: Os,
      useReducer: dc,
      useRef: bs,
      useState: function () {
        return dc(Le);
      },
      useDebugValue: yc,
      useDeferredValue: function (t, e) {
        var l = Ht();
        return mt === null ? vc(l, t, e) : _s(l, mt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = dc(Le)[0],
          e = Ht().memoizedState;
        return [typeof t == "boolean" ? t : nn(t), e];
      },
      useSyncExternalStore: ns,
      useId: Hs,
      useHostTransitionStatus: gc,
      useFormState: Ss,
      useActionState: Ss,
      useOptimistic: function (t, e) {
        var l = Ht();
        return mt !== null
          ? ss(l, mt, t, e)
          : ((l.baseState = t), [t, l.queue.dispatch]);
      },
      useMemoCache: sc,
      useCacheRefresh: Cs,
    },
    ya = null,
    fn = 0;
  function bu(t) {
    var e = fn;
    return (fn += 1), ya === null && (ya = []), Wr(ya, t, e);
  }
  function rn(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function Eu(t, e) {
    throw e.$$typeof === C
      ? Error(f(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          f(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function Ls(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Gs(t) {
    function e(b, g) {
      if (t) {
        var T = b.deletions;
        T === null ? ((b.deletions = [g]), (b.flags |= 16)) : T.push(g);
      }
    }
    function l(b, g) {
      if (!t) return null;
      for (; g !== null; ) e(b, g), (g = g.sibling);
      return null;
    }
    function a(b) {
      for (var g = new Map(); b !== null; )
        b.key !== null ? g.set(b.key, b) : g.set(b.index, b), (b = b.sibling);
      return g;
    }
    function n(b, g) {
      return (b = qe(b, g)), (b.index = 0), (b.sibling = null), b;
    }
    function u(b, g, T) {
      return (
        (b.index = T),
        t
          ? ((T = b.alternate),
            T !== null
              ? ((T = T.index), T < g ? ((b.flags |= 67108866), g) : T)
              : ((b.flags |= 67108866), g))
          : ((b.flags |= 1048576), g)
      );
    }
    function c(b) {
      return t && b.alternate === null && (b.flags |= 67108866), b;
    }
    function s(b, g, T, x) {
      return g === null || g.tag !== 6
        ? ((g = Li(T, b.mode, x)), (g.return = b), g)
        : ((g = n(g, T)), (g.return = b), g);
    }
    function y(b, g, T, x) {
      var Q = T.type;
      return Q === N
        ? O(b, g, T.props.children, x, T.key)
        : g !== null &&
          (g.elementType === Q ||
            (typeof Q == "object" &&
              Q !== null &&
              Q.$$typeof === Ot &&
              Ls(Q) === g.type))
        ? ((g = n(g, T.props)), rn(g, T), (g.return = b), g)
        : ((g = au(T.type, T.key, T.props, null, b.mode, x)),
          rn(g, T),
          (g.return = b),
          g);
    }
    function R(b, g, T, x) {
      return g === null ||
        g.tag !== 4 ||
        g.stateNode.containerInfo !== T.containerInfo ||
        g.stateNode.implementation !== T.implementation
        ? ((g = Gi(T, b.mode, x)), (g.return = b), g)
        : ((g = n(g, T.children || [])), (g.return = b), g);
    }
    function O(b, g, T, x, Q) {
      return g === null || g.tag !== 7
        ? ((g = Ul(T, b.mode, x, Q)), (g.return = b), g)
        : ((g = n(g, T)), (g.return = b), g);
    }
    function U(b, g, T) {
      if (
        (typeof g == "string" && g !== "") ||
        typeof g == "number" ||
        typeof g == "bigint"
      )
        return (g = Li("" + g, b.mode, T)), (g.return = b), g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case q:
            return (
              (T = au(g.type, g.key, g.props, null, b.mode, T)),
              rn(T, g),
              (T.return = b),
              T
            );
          case B:
            return (g = Gi(g, b.mode, T)), (g.return = b), g;
          case Ot:
            var x = g._init;
            return (g = x(g._payload)), U(b, g, T);
        }
        if (Vt(g) || Zt(g))
          return (g = Ul(g, b.mode, T, null)), (g.return = b), g;
        if (typeof g.then == "function") return U(b, bu(g), T);
        if (g.$$typeof === G) return U(b, cu(b, g), T);
        Eu(b, g);
      }
      return null;
    }
    function z(b, g, T, x) {
      var Q = g !== null ? g.key : null;
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return Q !== null ? null : s(b, g, "" + T, x);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case q:
            return T.key === Q ? y(b, g, T, x) : null;
          case B:
            return T.key === Q ? R(b, g, T, x) : null;
          case Ot:
            return (Q = T._init), (T = Q(T._payload)), z(b, g, T, x);
        }
        if (Vt(T) || Zt(T)) return Q !== null ? null : O(b, g, T, x, null);
        if (typeof T.then == "function") return z(b, g, bu(T), x);
        if (T.$$typeof === G) return z(b, g, cu(b, T), x);
        Eu(b, T);
      }
      return null;
    }
    function M(b, g, T, x, Q) {
      if (
        (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
      )
        return (b = b.get(T) || null), s(g, b, "" + x, Q);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case q:
            return (
              (b = b.get(x.key === null ? T : x.key) || null), y(g, b, x, Q)
            );
          case B:
            return (
              (b = b.get(x.key === null ? T : x.key) || null), R(g, b, x, Q)
            );
          case Ot:
            var nt = x._init;
            return (x = nt(x._payload)), M(b, g, T, x, Q);
        }
        if (Vt(x) || Zt(x)) return (b = b.get(T) || null), O(g, b, x, Q, null);
        if (typeof x.then == "function") return M(b, g, T, bu(x), Q);
        if (x.$$typeof === G) return M(b, g, T, cu(g, x), Q);
        Eu(g, x);
      }
      return null;
    }
    function I(b, g, T, x) {
      for (
        var Q = null, nt = null, K = g, $ = (g = 0), Yt = null;
        K !== null && $ < T.length;
        $++
      ) {
        K.index > $ ? ((Yt = K), (K = null)) : (Yt = K.sibling);
        var st = z(b, K, T[$], x);
        if (st === null) {
          K === null && (K = Yt);
          break;
        }
        t && K && st.alternate === null && e(b, K),
          (g = u(st, g, $)),
          nt === null ? (Q = st) : (nt.sibling = st),
          (nt = st),
          (K = Yt);
      }
      if ($ === T.length) return l(b, K), ot && Hl(b, $), Q;
      if (K === null) {
        for (; $ < T.length; $++)
          (K = U(b, T[$], x)),
            K !== null &&
              ((g = u(K, g, $)),
              nt === null ? (Q = K) : (nt.sibling = K),
              (nt = K));
        return ot && Hl(b, $), Q;
      }
      for (K = a(K); $ < T.length; $++)
        (Yt = M(K, b, $, T[$], x)),
          Yt !== null &&
            (t &&
              Yt.alternate !== null &&
              K.delete(Yt.key === null ? $ : Yt.key),
            (g = u(Yt, g, $)),
            nt === null ? (Q = Yt) : (nt.sibling = Yt),
            (nt = Yt));
      return (
        t &&
          K.forEach(function (Tl) {
            return e(b, Tl);
          }),
        ot && Hl(b, $),
        Q
      );
    }
    function k(b, g, T, x) {
      if (T == null) throw Error(f(151));
      for (
        var Q = null, nt = null, K = g, $ = (g = 0), Yt = null, st = T.next();
        K !== null && !st.done;
        $++, st = T.next()
      ) {
        K.index > $ ? ((Yt = K), (K = null)) : (Yt = K.sibling);
        var Tl = z(b, K, st.value, x);
        if (Tl === null) {
          K === null && (K = Yt);
          break;
        }
        t && K && Tl.alternate === null && e(b, K),
          (g = u(Tl, g, $)),
          nt === null ? (Q = Tl) : (nt.sibling = Tl),
          (nt = Tl),
          (K = Yt);
      }
      if (st.done) return l(b, K), ot && Hl(b, $), Q;
      if (K === null) {
        for (; !st.done; $++, st = T.next())
          (st = U(b, st.value, x)),
            st !== null &&
              ((g = u(st, g, $)),
              nt === null ? (Q = st) : (nt.sibling = st),
              (nt = st));
        return ot && Hl(b, $), Q;
      }
      for (K = a(K); !st.done; $++, st = T.next())
        (st = M(K, b, $, st.value, x)),
          st !== null &&
            (t &&
              st.alternate !== null &&
              K.delete(st.key === null ? $ : st.key),
            (g = u(st, g, $)),
            nt === null ? (Q = st) : (nt.sibling = st),
            (nt = st));
      return (
        t &&
          K.forEach(function (ky) {
            return e(b, ky);
          }),
        ot && Hl(b, $),
        Q
      );
    }
    function vt(b, g, T, x) {
      if (
        (typeof T == "object" &&
          T !== null &&
          T.type === N &&
          T.key === null &&
          (T = T.props.children),
        typeof T == "object" && T !== null)
      ) {
        switch (T.$$typeof) {
          case q:
            t: {
              for (var Q = T.key; g !== null; ) {
                if (g.key === Q) {
                  if (((Q = T.type), Q === N)) {
                    if (g.tag === 7) {
                      l(b, g.sibling),
                        (x = n(g, T.props.children)),
                        (x.return = b),
                        (b = x);
                      break t;
                    }
                  } else if (
                    g.elementType === Q ||
                    (typeof Q == "object" &&
                      Q !== null &&
                      Q.$$typeof === Ot &&
                      Ls(Q) === g.type)
                  ) {
                    l(b, g.sibling),
                      (x = n(g, T.props)),
                      rn(x, T),
                      (x.return = b),
                      (b = x);
                    break t;
                  }
                  l(b, g);
                  break;
                } else e(b, g);
                g = g.sibling;
              }
              T.type === N
                ? ((x = Ul(T.props.children, b.mode, x, T.key)),
                  (x.return = b),
                  (b = x))
                : ((x = au(T.type, T.key, T.props, null, b.mode, x)),
                  rn(x, T),
                  (x.return = b),
                  (b = x));
            }
            return c(b);
          case B:
            t: {
              for (Q = T.key; g !== null; ) {
                if (g.key === Q)
                  if (
                    g.tag === 4 &&
                    g.stateNode.containerInfo === T.containerInfo &&
                    g.stateNode.implementation === T.implementation
                  ) {
                    l(b, g.sibling),
                      (x = n(g, T.children || [])),
                      (x.return = b),
                      (b = x);
                    break t;
                  } else {
                    l(b, g);
                    break;
                  }
                else e(b, g);
                g = g.sibling;
              }
              (x = Gi(T, b.mode, x)), (x.return = b), (b = x);
            }
            return c(b);
          case Ot:
            return (Q = T._init), (T = Q(T._payload)), vt(b, g, T, x);
        }
        if (Vt(T)) return I(b, g, T, x);
        if (Zt(T)) {
          if (((Q = Zt(T)), typeof Q != "function")) throw Error(f(150));
          return (T = Q.call(T)), k(b, g, T, x);
        }
        if (typeof T.then == "function") return vt(b, g, bu(T), x);
        if (T.$$typeof === G) return vt(b, g, cu(b, T), x);
        Eu(b, T);
      }
      return (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
        ? ((T = "" + T),
          g !== null && g.tag === 6
            ? (l(b, g.sibling), (x = n(g, T)), (x.return = b), (b = x))
            : (l(b, g), (x = Li(T, b.mode, x)), (x.return = b), (b = x)),
          c(b))
        : l(b, g);
    }
    return function (b, g, T, x) {
      try {
        fn = 0;
        var Q = vt(b, g, T, x);
        return (ya = null), Q;
      } catch (K) {
        if (K === Pa || K === ru) throw K;
        var nt = ie(29, K, null, b.mode);
        return (nt.lanes = x), (nt.return = b), nt;
      } finally {
      }
    };
  }
  var va = Gs(!0),
    Xs = Gs(!1),
    Se = H(null),
    Oe = null;
  function cl(t) {
    var e = t.alternate;
    j(qt, qt.current & 1),
      j(Se, t),
      Oe === null &&
        (e === null || oa.current !== null || e.memoizedState !== null) &&
        (Oe = t);
  }
  function Qs(t) {
    if (t.tag === 22) {
      if ((j(qt, qt.current), j(Se, t), Oe === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Oe = t);
      }
    } else fl();
  }
  function fl() {
    j(qt, qt.current), j(Se, Se.current);
  }
  function Ge(t) {
    X(Se), Oe === t && (Oe = null), X(qt);
  }
  var qt = H(0);
  function Tu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || sf(l))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  function bc(t, e, l, a) {
    (e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : A({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var Ec = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = se(),
        n = nl(a);
      (n.payload = e),
        l != null && (n.callback = l),
        (e = ul(t, n, a)),
        e !== null && (oe(e, t, a), tn(e, t, a));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = se(),
        n = nl(a);
      (n.tag = 1),
        (n.payload = e),
        l != null && (n.callback = l),
        (e = ul(t, n, a)),
        e !== null && (oe(e, t, a), tn(e, t, a));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = se(),
        a = nl(l);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = ul(t, a, l)),
        e !== null && (oe(e, t, l), tn(e, t, l));
    },
  };
  function Zs(t, e, l, a, n, u, c) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, u, c)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Za(l, a) || !Za(n, u)
        : !0
    );
  }
  function Vs(t, e, l, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && Ec.enqueueReplaceState(e, e.state, null);
  }
  function Ll(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e) a !== "ref" && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = A({}, l));
      for (var n in t) l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  var Au =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function Ks(t) {
    Au(t);
  }
  function Js(t) {
    console.error(t);
  }
  function ks(t) {
    Au(t);
  }
  function Ru(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function $s(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Tc(t, e, l) {
    return (
      (l = nl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Ru(t, e);
      }),
      l
    );
  }
  function Ws(t) {
    return (t = nl(t)), (t.tag = 3), t;
  }
  function Is(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      (t.payload = function () {
        return n(u);
      }),
        (t.callback = function () {
          $s(e, l, a);
        });
    }
    var c = l.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (t.callback = function () {
        $s(e, l, a),
          typeof n != "function" &&
            (ml === null ? (ml = new Set([this])) : ml.add(this));
        var s = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: s !== null ? s : "",
        });
      });
  }
  function km(t, e, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && $a(e, l, n, !0),
        (l = Se.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              Oe === null ? Kc() : l.alternate === null && Dt === 0 && (Dt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === Ii
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                  kc(t, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === Ii
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
                  kc(t, a, n)),
              !1
            );
        }
        throw Error(f(435, l.tag));
      }
      return kc(t, a, n), Kc(), !1;
    }
    if (ot)
      return (
        (e = Se.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = n),
            a !== Zi && ((t = Error(f(422), { cause: a })), ka(ye(t, l))))
          : (a !== Zi && ((e = Error(f(423), { cause: a })), ka(ye(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (n &= -n),
            (t.lanes |= n),
            (a = ye(a, l)),
            (n = Tc(t.stateNode, a, n)),
            tc(t, n),
            Dt !== 4 && (Dt = 2)),
        !1
      );
    var u = Error(f(520), { cause: a });
    if (
      ((u = ye(u, l)),
      vn === null ? (vn = [u]) : vn.push(u),
      Dt !== 4 && (Dt = 2),
      e === null)
    )
      return !0;
    (a = ye(a, l)), (l = e);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = n & -n),
            (l.lanes |= t),
            (t = Tc(l.stateNode, a, t)),
            tc(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (ml === null || !ml.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = Ws(n)),
              Is(n, t, l, a),
              tc(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Ps = Error(f(461)),
    Bt = !1;
  function Gt(t, e, l, a) {
    e.child = t === null ? Xs(e, null, l, a) : va(e, t.child, l, a);
  }
  function Fs(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ("ref" in a) {
      var c = {};
      for (var s in a) s !== "ref" && (c[s] = a[s]);
    } else c = a;
    return (
      Bl(e),
      (a = uc(t, e, l, c, u, n)),
      (s = ic()),
      t !== null && !Bt
        ? (cc(t, e, n), Xe(t, e, n))
        : (ot && s && Xi(e), (e.flags |= 1), Gt(t, e, a, n), e.child)
    );
  }
  function to(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" &&
        !Yi(u) &&
        u.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = u), eo(t, e, u, a, n))
        : ((t = au(l.type, null, a, e, e.mode, n)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((u = t.child), !xc(t, n))) {
      var c = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Za), l(c, a) && t.ref === e.ref)
      )
        return Xe(t, e, n);
    }
    return (
      (e.flags |= 1),
      (t = qe(u, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function eo(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Za(u, a) && t.ref === e.ref)
        if (((Bt = !1), (e.pendingProps = a = u), xc(t, n)))
          (t.flags & 131072) !== 0 && (Bt = !0);
        else return (e.lanes = t.lanes), Xe(t, e, n);
    }
    return Ac(t, e, l, a, n);
  }
  function lo(t, e, l) {
    var a = e.pendingProps,
      n = a.children,
      u = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((a = u !== null ? u.baseLanes | l : l), t !== null)) {
          for (n = e.child = t.child, u = 0; n !== null; )
            (u = u | n.lanes | n.childLanes), (n = n.sibling);
          e.childLanes = u & ~a;
        } else (e.childLanes = 0), (e.child = null);
        return ao(t, e, a, l);
      }
      if ((l & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && fu(e, u !== null ? u.cachePool : null),
          u !== null ? es(e, u) : lc(),
          Qs(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          ao(t, e, u !== null ? u.baseLanes | l : l, l)
        );
    } else
      u !== null
        ? (fu(e, u.cachePool), es(e, u), fl(), (e.memoizedState = null))
        : (t !== null && fu(e, null), lc(), fl());
    return Gt(t, e, n, l), e.child;
  }
  function ao(t, e, l, a) {
    var n = Wi();
    return (
      (n = n === null ? null : { parent: Ct._currentValue, pool: n }),
      (e.memoizedState = { baseLanes: l, cachePool: n }),
      t !== null && fu(e, null),
      lc(),
      Qs(e),
      t !== null && $a(t, e, a, !0),
      null
    );
  }
  function zu(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(f(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Ac(t, e, l, a, n) {
    return (
      Bl(e),
      (l = uc(t, e, l, a, void 0, n)),
      (a = ic()),
      t !== null && !Bt
        ? (cc(t, e, n), Xe(t, e, n))
        : (ot && a && Xi(e), (e.flags |= 1), Gt(t, e, l, n), e.child)
    );
  }
  function no(t, e, l, a, n, u) {
    return (
      Bl(e),
      (e.updateQueue = null),
      (l = as(e, a, l, n)),
      ls(t),
      (a = ic()),
      t !== null && !Bt
        ? (cc(t, e, u), Xe(t, e, u))
        : (ot && a && Xi(e), (e.flags |= 1), Gt(t, e, l, u), e.child)
    );
  }
  function uo(t, e, l, a, n) {
    if ((Bl(e), e.stateNode === null)) {
      var u = ia,
        c = l.contextType;
      typeof c == "object" && c !== null && (u = Jt(c)),
        (u = new l(a, u)),
        (e.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Ec),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = a),
        (u.state = e.memoizedState),
        (u.refs = {}),
        Pi(e),
        (c = l.contextType),
        (u.context = typeof c == "object" && c !== null ? Jt(c) : ia),
        (u.state = e.memoizedState),
        (c = l.getDerivedStateFromProps),
        typeof c == "function" && (bc(e, l, c, a), (u.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((c = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          c !== u.state && Ec.enqueueReplaceState(u, u.state, null),
          ln(e, a, u, n),
          en(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      u = e.stateNode;
      var s = e.memoizedProps,
        y = Ll(l, s);
      u.props = y;
      var R = u.context,
        O = l.contextType;
      (c = ia), typeof O == "object" && O !== null && (c = Jt(O));
      var U = l.getDerivedStateFromProps;
      (O =
        typeof U == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (s = e.pendingProps !== s),
        O ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((s || R !== c) && Vs(e, u, a, c)),
        (al = !1);
      var z = e.memoizedState;
      (u.state = z),
        ln(e, a, u, n),
        en(),
        (R = e.memoizedState),
        s || z !== R || al
          ? (typeof U == "function" && (bc(e, l, U, a), (R = e.memoizedState)),
            (y = al || Zs(e, l, y, a, z, R, c))
              ? (O ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = R)),
            (u.props = a),
            (u.state = R),
            (u.context = c),
            (a = y))
          : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1));
    } else {
      (u = e.stateNode),
        Fi(t, e),
        (c = e.memoizedProps),
        (O = Ll(l, c)),
        (u.props = O),
        (U = e.pendingProps),
        (z = u.context),
        (R = l.contextType),
        (y = ia),
        typeof R == "object" && R !== null && (y = Jt(R)),
        (s = l.getDerivedStateFromProps),
        (R =
          typeof s == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((c !== U || z !== y) && Vs(e, u, a, y)),
        (al = !1),
        (z = e.memoizedState),
        (u.state = z),
        ln(e, a, u, n),
        en();
      var M = e.memoizedState;
      c !== U ||
      z !== M ||
      al ||
      (t !== null && t.dependencies !== null && iu(t.dependencies))
        ? (typeof s == "function" && (bc(e, l, s, a), (M = e.memoizedState)),
          (O =
            al ||
            Zs(e, l, O, a, z, M, y) ||
            (t !== null && t.dependencies !== null && iu(t.dependencies)))
            ? (R ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, M, y),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, M, y)),
              typeof u.componentDidUpdate == "function" && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (c === t.memoizedProps && z === t.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (c === t.memoizedProps && z === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = M)),
          (u.props = a),
          (u.state = M),
          (u.context = y),
          (a = O))
        : (typeof u.componentDidUpdate != "function" ||
            (c === t.memoizedProps && z === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (c === t.memoizedProps && z === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      zu(t, e),
      (a = (e.flags & 128) !== 0),
      u || a
        ? ((u = e.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = va(e, t.child, null, n)),
              (e.child = va(e, null, l, n)))
            : Gt(t, e, l, n),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = Xe(t, e, n)),
      t
    );
  }
  function io(t, e, l, a) {
    return Ja(), (e.flags |= 256), Gt(t, e, l, a), e.child;
  }
  var Rc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function zc(t) {
    return { baseLanes: t, cachePool: Jr() };
  }
  function Mc(t, e, l) {
    return (t = t !== null ? t.childLanes & ~l : 0), e && (t |= be), t;
  }
  function co(t, e, l) {
    var a = e.pendingProps,
      n = !1,
      u = (e.flags & 128) !== 0,
      c;
    if (
      ((c = u) ||
        (c =
          t !== null && t.memoizedState === null ? !1 : (qt.current & 2) !== 0),
      c && ((n = !0), (e.flags &= -129)),
      (c = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (ot) {
        if ((n ? cl(e) : fl(), ot)) {
          var s = Mt,
            y;
          if ((y = s)) {
            t: {
              for (y = s, s = De; y.nodeType !== 8; ) {
                if (!s) {
                  s = null;
                  break t;
                }
                if (((y = Re(y.nextSibling)), y === null)) {
                  s = null;
                  break t;
                }
              }
              s = y;
            }
            s !== null
              ? ((e.memoizedState = {
                  dehydrated: s,
                  treeContext: Nl !== null ? { id: we, overflow: Be } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (y = ie(18, null, null, 0)),
                (y.stateNode = s),
                (y.return = e),
                (e.child = y),
                (Wt = e),
                (Mt = null),
                (y = !0))
              : (y = !1);
          }
          y || ql(e);
        }
        if (
          ((s = e.memoizedState),
          s !== null && ((s = s.dehydrated), s !== null))
        )
          return sf(s) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        Ge(e);
      }
      return (
        (s = a.children),
        (a = a.fallback),
        n
          ? (fl(),
            (n = e.mode),
            (s = Mu({ mode: "hidden", children: s }, n)),
            (a = Ul(a, n, l, null)),
            (s.return = e),
            (a.return = e),
            (s.sibling = a),
            (e.child = s),
            (n = e.child),
            (n.memoizedState = zc(l)),
            (n.childLanes = Mc(t, c, l)),
            (e.memoizedState = Rc),
            a)
          : (cl(e), Dc(e, s))
      );
    }
    if (
      ((y = t.memoizedState), y !== null && ((s = y.dehydrated), s !== null))
    ) {
      if (u)
        e.flags & 256
          ? (cl(e), (e.flags &= -257), (e = Oc(t, e, l)))
          : e.memoizedState !== null
          ? (fl(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (fl(),
            (n = a.fallback),
            (s = e.mode),
            (a = Mu({ mode: "visible", children: a.children }, s)),
            (n = Ul(n, s, l, null)),
            (n.flags |= 2),
            (a.return = e),
            (n.return = e),
            (a.sibling = n),
            (e.child = a),
            va(e, t.child, null, l),
            (a = e.child),
            (a.memoizedState = zc(l)),
            (a.childLanes = Mc(t, c, l)),
            (e.memoizedState = Rc),
            (e = n));
      else if ((cl(e), sf(s))) {
        if (((c = s.nextSibling && s.nextSibling.dataset), c)) var R = c.dgst;
        (c = R),
          (a = Error(f(419))),
          (a.stack = ""),
          (a.digest = c),
          ka({ value: a, source: null, stack: null }),
          (e = Oc(t, e, l));
      } else if (
        (Bt || $a(t, e, l, !1), (c = (l & t.childLanes) !== 0), Bt || c)
      ) {
        if (
          ((c = St),
          c !== null &&
            ((a = l & -l),
            (a = (a & 42) !== 0 ? 1 : si(a)),
            (a = (a & (c.suspendedLanes | l)) !== 0 ? 0 : a),
            a !== 0 && a !== y.retryLane))
        )
          throw ((y.retryLane = a), ua(t, a), oe(c, t, a), Ps);
        s.data === "$?" || Kc(), (e = Oc(t, e, l));
      } else
        s.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = y.treeContext),
            (Mt = Re(s.nextSibling)),
            (Wt = e),
            (ot = !0),
            (Cl = null),
            (De = !1),
            t !== null &&
              ((pe[ge++] = we),
              (pe[ge++] = Be),
              (pe[ge++] = Nl),
              (we = t.id),
              (Be = t.overflow),
              (Nl = e)),
            (e = Dc(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return n
      ? (fl(),
        (n = a.fallback),
        (s = e.mode),
        (y = t.child),
        (R = y.sibling),
        (a = qe(y, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = y.subtreeFlags & 65011712),
        R !== null ? (n = qe(R, n)) : ((n = Ul(n, s, l, null)), (n.flags |= 2)),
        (n.return = e),
        (a.return = e),
        (a.sibling = n),
        (e.child = a),
        (a = n),
        (n = e.child),
        (s = t.child.memoizedState),
        s === null
          ? (s = zc(l))
          : ((y = s.cachePool),
            y !== null
              ? ((R = Ct._currentValue),
                (y = y.parent !== R ? { parent: R, pool: R } : y))
              : (y = Jr()),
            (s = { baseLanes: s.baseLanes | l, cachePool: y })),
        (n.memoizedState = s),
        (n.childLanes = Mc(t, c, l)),
        (e.memoizedState = Rc),
        a)
      : (cl(e),
        (l = t.child),
        (t = l.sibling),
        (l = qe(l, { mode: "visible", children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((c = e.deletions),
          c === null ? ((e.deletions = [t]), (e.flags |= 16)) : c.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function Dc(t, e) {
    return (
      (e = Mu({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Mu(t, e) {
    return (
      (t = ie(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function Oc(t, e, l) {
    return (
      va(e, t.child, null, l),
      (t = Dc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function fo(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Ki(t.return, e, l);
  }
  function _c(t, e, l, a, n) {
    var u = t.memoizedState;
    u === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
        })
      : ((u.isBackwards = e),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = a),
        (u.tail = l),
        (u.tailMode = n));
  }
  function ro(t, e, l) {
    var a = e.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    if ((Gt(t, e, a.children, l), (a = qt.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && fo(t, l, e);
          else if (t.tag === 19) fo(t, l, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      a &= 1;
    }
    switch ((j(qt, a), n)) {
      case "forwards":
        for (l = e.child, n = null; l !== null; )
          (t = l.alternate),
            t !== null && Tu(t) === null && (n = l),
            (l = l.sibling);
        (l = n),
          l === null
            ? ((n = e.child), (e.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          _c(e, !1, n, l, u);
        break;
      case "backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (((t = n.alternate), t !== null && Tu(t) === null)) {
            e.child = n;
            break;
          }
          (t = n.sibling), (n.sibling = l), (l = n), (n = t);
        }
        _c(e, !0, l, null, u);
        break;
      case "together":
        _c(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Xe(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (hl |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if (($a(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(f(153));
    if (e.child !== null) {
      for (
        t = e.child, l = qe(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (l = l.sibling = qe(t, t.pendingProps)),
          (l.return = e);
      l.sibling = null;
    }
    return e.child;
  }
  function xc(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && iu(t)));
  }
  function $m(t, e, l) {
    switch (e.tag) {
      case 3:
        Et(e, e.stateNode.containerInfo),
          ll(e, Ct, t.memoizedState.cache),
          Ja();
        break;
      case 27:
      case 5:
        ui(e);
        break;
      case 4:
        Et(e, e.stateNode.containerInfo);
        break;
      case 10:
        ll(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (cl(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
            ? co(t, e, l)
            : (cl(e), (t = Xe(t, e, l)), t !== null ? t.sibling : null);
        cl(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (
          ((a = (l & e.childLanes) !== 0),
          a || ($a(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          n)
        ) {
          if (a) return ro(t, e, l);
          e.flags |= 128;
        }
        if (
          ((n = e.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          j(qt, qt.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), lo(t, e, l);
      case 24:
        ll(e, Ct, t.memoizedState.cache);
    }
    return Xe(t, e, l);
  }
  function so(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Bt = !0;
      else {
        if (!xc(t, l) && (e.flags & 128) === 0) return (Bt = !1), $m(t, e, l);
        Bt = (t.flags & 131072) !== 0;
      }
    else (Bt = !1), ot && (e.flags & 1048576) !== 0 && Lr(e, uu, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var a = e.elementType,
            n = a._init;
          if (((a = n(a._payload)), (e.type = a), typeof a == "function"))
            Yi(a)
              ? ((t = Ll(a, t)), (e.tag = 1), (e = uo(null, e, a, t, l)))
              : ((e.tag = 0), (e = Ac(null, e, a, t, l)));
          else {
            if (a != null) {
              if (((n = a.$$typeof), n === ft)) {
                (e.tag = 11), (e = Fs(null, e, a, t, l));
                break t;
              } else if (n === zt) {
                (e.tag = 14), (e = to(null, e, a, t, l));
                break t;
              }
            }
            throw ((e = zl(a) || a), Error(f(306, e, "")));
          }
        }
        return e;
      case 0:
        return Ac(t, e, e.type, e.pendingProps, l);
      case 1:
        return (a = e.type), (n = Ll(a, e.pendingProps)), uo(t, e, a, n, l);
      case 3:
        t: {
          if ((Et(e, e.stateNode.containerInfo), t === null))
            throw Error(f(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          (n = u.element), Fi(t, e), ln(e, a, null, l);
          var c = e.memoizedState;
          if (
            ((a = c.cache),
            ll(e, Ct, a),
            a !== u.cache && Ji(e, [Ct], l, !0),
            en(),
            (a = c.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: c.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = io(t, e, a, l);
              break t;
            } else if (a !== n) {
              (n = ye(Error(f(424)), e)), ka(n), (e = io(t, e, a, l));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Mt = Re(t.firstChild),
                  Wt = e,
                  ot = !0,
                  Cl = null,
                  De = !0,
                  l = Xs(e, null, a, l),
                  e.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((Ja(), a === n)) {
              e = Xe(t, e, l);
              break t;
            }
            Gt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          zu(t, e),
          t === null
            ? (l = yd(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : ot ||
                ((l = e.type),
                (t = e.pendingProps),
                (a = Lu(et.current).createElement(l)),
                (a[Kt] = e),
                (a[It] = t),
                Qt(a, l, t),
                wt(a),
                (e.stateNode = a))
            : (e.memoizedState = yd(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          ui(e),
          t === null &&
            ot &&
            ((a = e.stateNode = dd(e.type, e.pendingProps, et.current)),
            (Wt = e),
            (De = !0),
            (n = Mt),
            pl(e.type) ? ((of = n), (Mt = Re(a.firstChild))) : (Mt = n)),
          Gt(t, e, e.pendingProps.children, l),
          zu(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            ot &&
            ((n = a = Mt) &&
              ((a = Ay(a, e.type, e.pendingProps, De)),
              a !== null
                ? ((e.stateNode = a),
                  (Wt = e),
                  (Mt = Re(a.firstChild)),
                  (De = !1),
                  (n = !0))
                : (n = !1)),
            n || ql(e)),
          ui(e),
          (n = e.type),
          (u = e.pendingProps),
          (c = t !== null ? t.memoizedProps : null),
          (a = u.children),
          cf(n, u) ? (a = null) : c !== null && cf(n, c) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((n = uc(t, e, Gm, null, null, l)), (zn._currentValue = n)),
          zu(t, e),
          Gt(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            ot &&
            ((t = l = Mt) &&
              ((l = Ry(l, e.pendingProps, De)),
              l !== null
                ? ((e.stateNode = l), (Wt = e), (Mt = null), (t = !0))
                : (t = !1)),
            t || ql(e)),
          null
        );
      case 13:
        return co(t, e, l);
      case 4:
        return (
          Et(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = va(e, null, a, l)) : Gt(t, e, a, l),
          e.child
        );
      case 11:
        return Fs(t, e, e.type, e.pendingProps, l);
      case 7:
        return Gt(t, e, e.pendingProps, l), e.child;
      case 8:
        return Gt(t, e, e.pendingProps.children, l), e.child;
      case 12:
        return Gt(t, e, e.pendingProps.children, l), e.child;
      case 10:
        return (
          (a = e.pendingProps),
          ll(e, e.type, a.value),
          Gt(t, e, a.children, l),
          e.child
        );
      case 9:
        return (
          (n = e.type._context),
          (a = e.pendingProps.children),
          Bl(e),
          (n = Jt(n)),
          (a = a(n)),
          (e.flags |= 1),
          Gt(t, e, a, l),
          e.child
        );
      case 14:
        return to(t, e, e.type, e.pendingProps, l);
      case 15:
        return eo(t, e, e.type, e.pendingProps, l);
      case 19:
        return ro(t, e, l);
      case 31:
        return (
          (a = e.pendingProps),
          (l = e.mode),
          (a = { mode: a.mode, children: a.children }),
          t === null
            ? ((l = Mu(a, l)),
              (l.ref = e.ref),
              (e.child = l),
              (l.return = e),
              (e = l))
            : ((l = qe(t.child, a)),
              (l.ref = e.ref),
              (e.child = l),
              (l.return = e),
              (e = l)),
          e
        );
      case 22:
        return lo(t, e, l);
      case 24:
        return (
          Bl(e),
          (a = Jt(Ct)),
          t === null
            ? ((n = Wi()),
              n === null &&
                ((n = St),
                (u = ki()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (e.memoizedState = { parent: a, cache: n }),
              Pi(e),
              ll(e, Ct, n))
            : ((t.lanes & l) !== 0 && (Fi(t, e), ln(e, null, null, l), en()),
              (n = t.memoizedState),
              (u = e.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (e.memoizedState = n),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = n),
                  ll(e, Ct, a))
                : ((a = u.cache),
                  ll(e, Ct, a),
                  a !== n.cache && Ji(e, [Ct], l, !0))),
          Gt(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  function Qe(t) {
    t.flags |= 4;
  }
  function oo(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !bd(e))) {
      if (
        ((e = Se.current),
        e !== null &&
          ((ct & 4194048) === ct
            ? Oe !== null
            : ((ct & 62914560) !== ct && (ct & 536870912) === 0) || e !== Oe))
      )
        throw ((Fa = Ii), kr);
      t.flags |= 8192;
    }
  }
  function Du(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Qf() : 536870912), (t.lanes |= e), (ba |= e));
  }
  function sn(t, e) {
    if (!ot)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), (e = e.sibling);
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function At(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = t),
          (n = n.sibling);
    else
      for (n = t.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = t),
          (n = n.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = l), e;
  }
  function Wm(t, e, l) {
    var a = e.pendingProps;
    switch ((Qi(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return At(e), null;
      case 1:
        return At(e), null;
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Ye(Ct),
          Pe(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ka(e)
              ? Qe(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Qr())),
          At(e),
          null
        );
      case 26:
        return (
          (l = e.memoizedState),
          t === null
            ? (Qe(e),
              l !== null ? (At(e), oo(e, l)) : (At(e), (e.flags &= -16777217)))
            : l
            ? l !== t.memoizedState
              ? (Qe(e), At(e), oo(e, l))
              : (At(e), (e.flags &= -16777217))
            : (t.memoizedProps !== a && Qe(e), At(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        jn(e), (l = et.current);
        var n = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== a && Qe(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return At(e), null;
          }
          (t = J.current),
            Ka(e) ? Gr(e) : ((t = dd(n, a, l)), (e.stateNode = t), Qe(e));
        }
        return At(e), null;
      case 5:
        if ((jn(e), (l = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && Qe(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return At(e), null;
          }
          if (((t = J.current), Ka(e))) Gr(e);
          else {
            switch (((n = Lu(et.current)), t)) {
              case 1:
                t = n.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                t = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    t = n.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    t = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    (t = n.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof a.is == "string"
                        ? n.createElement("select", { is: a.is })
                        : n.createElement("select")),
                      a.multiple
                        ? (t.multiple = !0)
                        : a.size && (t.size = a.size);
                    break;
                  default:
                    t =
                      typeof a.is == "string"
                        ? n.createElement(l, { is: a.is })
                        : n.createElement(l);
                }
            }
            (t[Kt] = e), (t[It] = a);
            t: for (n = e.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                (n.child.return = n), (n = n.child);
                continue;
              }
              if (n === e) break t;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === e) break t;
                n = n.return;
              }
              (n.sibling.return = n.return), (n = n.sibling);
            }
            e.stateNode = t;
            t: switch ((Qt(t, l, a), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Qe(e);
          }
        }
        return At(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && Qe(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(f(166));
          if (((t = et.current), Ka(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (a = null),
              (n = Wt),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            (t[Kt] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                ud(t.nodeValue, l)
              )),
              t || ql(e);
          } else (t = Lu(t).createTextNode(a)), (t[Kt] = e), (e.stateNode = t);
        }
        return At(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((n = Ka(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!n) throw Error(f(318));
              if (
                ((n = e.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(f(317));
              n[Kt] = e;
            } else
              Ja(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            At(e), (n = !1);
          } else
            (n = Qr()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (n = !0);
          if (!n) return e.flags & 256 ? (Ge(e), e) : (Ge(e), null);
        }
        if ((Ge(e), (e.flags & 128) !== 0)) return (e.lanes = l), e;
        if (
          ((l = a !== null), (t = t !== null && t.memoizedState !== null), l)
        ) {
          (a = e.child),
            (n = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (n = a.alternate.memoizedState.cachePool.pool);
          var u = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (u = a.memoizedState.cachePool.pool),
            u !== n && (a.flags |= 2048);
        }
        return (
          l !== t && l && (e.child.flags |= 8192),
          Du(e, e.updateQueue),
          At(e),
          null
        );
      case 4:
        return Pe(), t === null && ef(e.stateNode.containerInfo), At(e), null;
      case 10:
        return Ye(e.type), At(e), null;
      case 19:
        if ((X(qt), (n = e.memoizedState), n === null)) return At(e), null;
        if (((a = (e.flags & 128) !== 0), (u = n.rendering), u === null))
          if (a) sn(n, !1);
          else {
            if (Dt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = Tu(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      sn(n, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      Du(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;

                  )
                    Yr(l, t), (l = l.sibling);
                  return j(qt, (qt.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            n.tail !== null &&
              Me() > xu &&
              ((e.flags |= 128), (a = !0), sn(n, !1), (e.lanes = 4194304));
          }
        else {
          if (!a)
            if (((t = Tu(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Du(e, t),
                sn(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !u.alternate &&
                  !ot)
              )
                return At(e), null;
            } else
              2 * Me() - n.renderingStartTime > xu &&
                l !== 536870912 &&
                ((e.flags |= 128), (a = !0), sn(n, !1), (e.lanes = 4194304));
          n.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((t = n.last),
              t !== null ? (t.sibling = u) : (e.child = u),
              (n.last = u));
        }
        return n.tail !== null
          ? ((e = n.tail),
            (n.rendering = e),
            (n.tail = e.sibling),
            (n.renderingStartTime = Me()),
            (e.sibling = null),
            (t = qt.current),
            j(qt, a ? (t & 1) | 2 : t & 1),
            e)
          : (At(e), null);
      case 22:
      case 23:
        return (
          Ge(e),
          ac(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (At(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : At(e),
          (l = e.updateQueue),
          l !== null && Du(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && X(jl),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          Ye(Ct),
          At(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function Im(t, e) {
    switch ((Qi(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Ye(Ct),
          Pe(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return jn(e), null;
      case 13:
        if (
          (Ge(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(f(340));
          Ja();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return X(qt), null;
      case 4:
        return Pe(), null;
      case 10:
        return Ye(e.type), null;
      case 22:
      case 23:
        return (
          Ge(e),
          ac(),
          t !== null && X(jl),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return Ye(Ct), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ho(t, e) {
    switch ((Qi(e), e.tag)) {
      case 3:
        Ye(Ct), Pe();
        break;
      case 26:
      case 27:
      case 5:
        jn(e);
        break;
      case 4:
        Pe();
        break;
      case 13:
        Ge(e);
        break;
      case 19:
        X(qt);
        break;
      case 10:
        Ye(e.type);
        break;
      case 22:
      case 23:
        Ge(e), ac(), t !== null && X(jl);
        break;
      case 24:
        Ye(Ct);
    }
  }
  function on(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var u = l.create,
              c = l.inst;
            (a = u()), (c.destroy = a);
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (s) {
      gt(e, e.return, s);
    }
  }
  function rl(t, e, l) {
    try {
      var a = e.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var c = a.inst,
              s = c.destroy;
            if (s !== void 0) {
              (c.destroy = void 0), (n = e);
              var y = l,
                R = s;
              try {
                R();
              } catch (O) {
                gt(n, y, O);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (O) {
      gt(e, e.return, O);
    }
  }
  function mo(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        ts(e, l);
      } catch (a) {
        gt(t, t.return, a);
      }
    }
  }
  function yo(t, e, l) {
    (l.props = Ll(t.type, t.memoizedProps)), (l.state = t.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      gt(t, e, a);
    }
  }
  function dn(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? (t.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      gt(t, e, n);
    }
  }
  function _e(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          gt(t, e, n);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          gt(t, e, n);
        }
      else l.current = null;
  }
  function vo(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      gt(t, t.return, n);
    }
  }
  function Uc(t, e, l) {
    try {
      var a = t.stateNode;
      gy(a, t.type, l, e), (a[It] = e);
    } catch (n) {
      gt(t, t.return, n);
    }
  }
  function po(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && pl(t.type)) ||
      t.tag === 4
    );
  }
  function Nc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || po(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && pl(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Hc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
              ? l.ownerDocument.body
              : l
            ).insertBefore(t, e)
          : ((e =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = Yu));
    else if (
      a !== 4 &&
      (a === 27 && pl(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Hc(t, e, l), t = t.sibling; t !== null; )
        Hc(t, e, l), (t = t.sibling);
  }
  function Ou(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && pl(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (Ou(t, e, l), t = t.sibling; t !== null; )
        Ou(t, e, l), (t = t.sibling);
  }
  function go(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      Qt(e, a, l), (e[Kt] = t), (e[It] = l);
    } catch (u) {
      gt(t, t.return, u);
    }
  }
  var Ze = !1,
    xt = !1,
    Cc = !1,
    So = typeof WeakSet == "function" ? WeakSet : Set,
    jt = null;
  function Pm(t, e) {
    if (((t = t.containerInfo), (nf = Ku), (t = _r(t)), Ni(t))) {
      if ("selectionStart" in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break t;
            }
            var c = 0,
              s = -1,
              y = -1,
              R = 0,
              O = 0,
              U = t,
              z = null;
            e: for (;;) {
              for (
                var M;
                U !== l || (n !== 0 && U.nodeType !== 3) || (s = c + n),
                  U !== u || (a !== 0 && U.nodeType !== 3) || (y = c + a),
                  U.nodeType === 3 && (c += U.nodeValue.length),
                  (M = U.firstChild) !== null;

              )
                (z = U), (U = M);
              for (;;) {
                if (U === t) break e;
                if (
                  (z === l && ++R === n && (s = c),
                  z === u && ++O === a && (y = c),
                  (M = U.nextSibling) !== null)
                )
                  break;
                (U = z), (z = U.parentNode);
              }
              U = M;
            }
            l = s === -1 || y === -1 ? null : { start: s, end: y };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      uf = { focusedElem: t, selectionRange: l }, Ku = !1, jt = e;
      jt !== null;

    )
      if (
        ((e = jt), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (jt = t);
      else
        for (; jt !== null; ) {
          switch (((e = jt), (u = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                (t = void 0),
                  (l = e),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = l.stateNode);
                try {
                  var I = Ll(l.type, n, l.elementType === l.type);
                  (t = a.getSnapshotBeforeUpdate(I, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (k) {
                  gt(l, l.return, k);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  rf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      rf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(f(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (jt = t);
            break;
          }
          jt = e.return;
        }
  }
  function bo(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        sl(t, l), a & 4 && on(5, l);
        break;
      case 1:
        if ((sl(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (c) {
              gt(l, l.return, c);
            }
          else {
            var n = Ll(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              gt(l, l.return, c);
            }
          }
        a & 64 && mo(l), a & 512 && dn(l, l.return);
        break;
      case 3:
        if ((sl(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            ts(t, e);
          } catch (c) {
            gt(l, l.return, c);
          }
        }
        break;
      case 27:
        e === null && a & 4 && go(l);
      case 26:
      case 5:
        sl(t, l), e === null && a & 4 && vo(l), a & 512 && dn(l, l.return);
        break;
      case 12:
        sl(t, l);
        break;
      case 13:
        sl(t, l),
          a & 4 && Ao(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = cy.bind(null, l)), zy(t, l))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || Ze), !a)) {
          (e = (e !== null && e.memoizedState !== null) || xt), (n = Ze);
          var u = xt;
          (Ze = a),
            (xt = e) && !u ? ol(t, l, (l.subtreeFlags & 8772) !== 0) : sl(t, l),
            (Ze = n),
            (xt = u);
        }
        break;
      case 30:
        break;
      default:
        sl(t, l);
    }
  }
  function Eo(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Eo(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && hi(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Tt = null,
    te = !1;
  function Ve(t, e, l) {
    for (l = l.child; l !== null; ) To(t, e, l), (l = l.sibling);
  }
  function To(t, e, l) {
    if (ae && typeof ae.onCommitFiberUnmount == "function")
      try {
        ae.onCommitFiberUnmount(Na, l);
      } catch {}
    switch (l.tag) {
      case 26:
        xt || _e(l, e),
          Ve(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        xt || _e(l, e);
        var a = Tt,
          n = te;
        pl(l.type) && ((Tt = l.stateNode), (te = !1)),
          Ve(t, e, l),
          En(l.stateNode),
          (Tt = a),
          (te = n);
        break;
      case 5:
        xt || _e(l, e);
      case 6:
        if (
          ((a = Tt),
          (n = te),
          (Tt = null),
          Ve(t, e, l),
          (Tt = a),
          (te = n),
          Tt !== null)
        )
          if (te)
            try {
              (Tt.nodeType === 9
                ? Tt.body
                : Tt.nodeName === "HTML"
                ? Tt.ownerDocument.body
                : Tt
              ).removeChild(l.stateNode);
            } catch (u) {
              gt(l, e, u);
            }
          else
            try {
              Tt.removeChild(l.stateNode);
            } catch (u) {
              gt(l, e, u);
            }
        break;
      case 18:
        Tt !== null &&
          (te
            ? ((t = Tt),
              sd(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                l.stateNode
              ),
              _n(t))
            : sd(Tt, l.stateNode));
        break;
      case 4:
        (a = Tt),
          (n = te),
          (Tt = l.stateNode.containerInfo),
          (te = !0),
          Ve(t, e, l),
          (Tt = a),
          (te = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        xt || rl(2, l, e), xt || rl(4, l, e), Ve(t, e, l);
        break;
      case 1:
        xt ||
          (_e(l, e),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && yo(l, e, a)),
          Ve(t, e, l);
        break;
      case 21:
        Ve(t, e, l);
        break;
      case 22:
        (xt = (a = xt) || l.memoizedState !== null), Ve(t, e, l), (xt = a);
        break;
      default:
        Ve(t, e, l);
    }
  }
  function Ao(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        _n(t);
      } catch (l) {
        gt(e, e.return, l);
      }
  }
  function Fm(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new So()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new So()),
          e
        );
      default:
        throw Error(f(435, t.tag));
    }
  }
  function qc(t, e) {
    var l = Fm(t);
    e.forEach(function (a) {
      var n = fy.bind(null, t, a);
      l.has(a) || (l.add(a), a.then(n, n));
    });
  }
  function ce(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = t,
          c = e,
          s = c;
        t: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (pl(s.type)) {
                (Tt = s.stateNode), (te = !1);
                break t;
              }
              break;
            case 5:
              (Tt = s.stateNode), (te = !1);
              break t;
            case 3:
            case 4:
              (Tt = s.stateNode.containerInfo), (te = !0);
              break t;
          }
          s = s.return;
        }
        if (Tt === null) throw Error(f(160));
        To(u, c, n),
          (Tt = null),
          (te = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) Ro(e, t), (e = e.sibling);
  }
  var Ae = null;
  function Ro(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ce(e, t),
          fe(t),
          a & 4 && (rl(3, t, t.return), on(3, t), rl(5, t, t.return));
        break;
      case 1:
        ce(e, t),
          fe(t),
          a & 512 && (xt || l === null || _e(l, l.return)),
          a & 64 &&
            Ze &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var n = Ae;
        if (
          (ce(e, t),
          fe(t),
          a & 512 && (xt || l === null || _e(l, l.return)),
          a & 4)
        ) {
          var u = l !== null ? l.memoizedState : null;
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (l = t.memoizedProps),
                    (n = n.ownerDocument || n);
                  e: switch (a) {
                    case "title":
                      (u = n.getElementsByTagName("title")[0]),
                        (!u ||
                          u[qa] ||
                          u[Kt] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector("head > title")
                          )),
                        Qt(u, a, l),
                        (u[Kt] = t),
                        wt(u),
                        (a = u);
                      break t;
                    case "link":
                      var c = gd("link", "href", n).get(a + (l.href || ""));
                      if (c) {
                        for (var s = 0; s < c.length; s++)
                          if (
                            ((u = c[s]),
                            u.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              u.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              u.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              u.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            c.splice(s, 1);
                            break e;
                          }
                      }
                      (u = n.createElement(a)),
                        Qt(u, a, l),
                        n.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (c = gd("meta", "content", n).get(
                          a + (l.content || "")
                        ))
                      ) {
                        for (s = 0; s < c.length; s++)
                          if (
                            ((u = c[s]),
                            u.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              u.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              u.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              u.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            c.splice(s, 1);
                            break e;
                          }
                      }
                      (u = n.createElement(a)),
                        Qt(u, a, l),
                        n.head.appendChild(u);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  (u[Kt] = t), wt(u), (a = u);
                }
                t.stateNode = a;
              } else Sd(n, t.type, t.stateNode);
            else t.stateNode = pd(n, a, t.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                a === null
                  ? Sd(n, t.type, t.stateNode)
                  : pd(n, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                Uc(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        ce(e, t),
          fe(t),
          a & 512 && (xt || l === null || _e(l, l.return)),
          l !== null && a & 4 && Uc(t, t.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (ce(e, t),
          fe(t),
          a & 512 && (xt || l === null || _e(l, l.return)),
          t.flags & 32)
        ) {
          n = t.stateNode;
          try {
            Pl(n, "");
          } catch (M) {
            gt(t, t.return, M);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((n = t.memoizedProps), Uc(t, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (Cc = !0);
        break;
      case 6:
        if ((ce(e, t), fe(t), a & 4)) {
          if (t.stateNode === null) throw Error(f(162));
          (a = t.memoizedProps), (l = t.stateNode);
          try {
            l.nodeValue = a;
          } catch (M) {
            gt(t, t.return, M);
          }
        }
        break;
      case 3:
        if (
          ((Qu = null),
          (n = Ae),
          (Ae = Gu(e.containerInfo)),
          ce(e, t),
          (Ae = n),
          fe(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            _n(e.containerInfo);
          } catch (M) {
            gt(t, t.return, M);
          }
        Cc && ((Cc = !1), zo(t));
        break;
      case 4:
        (a = Ae),
          (Ae = Gu(t.stateNode.containerInfo)),
          ce(e, t),
          fe(t),
          (Ae = a);
        break;
      case 12:
        ce(e, t), fe(t);
        break;
      case 13:
        ce(e, t),
          fe(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Gc = Me()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), qc(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var y = l !== null && l.memoizedState !== null,
          R = Ze,
          O = xt;
        if (
          ((Ze = R || n),
          (xt = O || y),
          ce(e, t),
          (xt = O),
          (Ze = R),
          fe(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = n ? e._visibility & -2 : e._visibility | 1,
              n && (l === null || y || Ze || xt || Gl(t)),
              l = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                y = l = e;
                try {
                  if (((u = y.stateNode), n))
                    (c = u.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none");
                  else {
                    s = y.stateNode;
                    var U = y.memoizedProps.style,
                      z =
                        U != null && U.hasOwnProperty("display")
                          ? U.display
                          : null;
                    s.style.display =
                      z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (M) {
                  gt(y, y.return, M);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                y = e;
                try {
                  y.stateNode.nodeValue = n ? "" : y.memoizedProps;
                } catch (M) {
                  gt(y, y.return, M);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), (e = e.return);
            }
            l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), qc(t, l))));
        break;
      case 19:
        ce(e, t),
          fe(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), qc(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ce(e, t), fe(t);
    }
  }
  function fe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (po(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = Nc(t);
            Ou(t, u, n);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (Pl(c, ""), (l.flags &= -33));
            var s = Nc(t);
            Ou(t, s, c);
            break;
          case 3:
          case 4:
            var y = l.stateNode.containerInfo,
              R = Nc(t);
            Hc(t, R, y);
            break;
          default:
            throw Error(f(161));
        }
      } catch (O) {
        gt(t, t.return, O);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function zo(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        zo(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function sl(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) bo(t, e.alternate, e), (e = e.sibling);
  }
  function Gl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          rl(4, e, e.return), Gl(e);
          break;
        case 1:
          _e(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && yo(e, e.return, l),
            Gl(e);
          break;
        case 27:
          En(e.stateNode);
        case 26:
        case 5:
          _e(e, e.return), Gl(e);
          break;
        case 22:
          e.memoizedState === null && Gl(e);
          break;
        case 30:
          Gl(e);
          break;
        default:
          Gl(e);
      }
      t = t.sibling;
    }
  }
  function ol(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        n = t,
        u = e,
        c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ol(n, u, l), on(4, u);
          break;
        case 1:
          if (
            (ol(n, u, l),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (R) {
              gt(a, a.return, R);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var s = a.stateNode;
            try {
              var y = n.shared.hiddenCallbacks;
              if (y !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < y.length; n++)
                  Fr(y[n], s);
            } catch (R) {
              gt(a, a.return, R);
            }
          }
          l && c & 64 && mo(u), dn(u, u.return);
          break;
        case 27:
          go(u);
        case 26:
        case 5:
          ol(n, u, l), l && a === null && c & 4 && vo(u), dn(u, u.return);
          break;
        case 12:
          ol(n, u, l);
          break;
        case 13:
          ol(n, u, l), l && c & 4 && Ao(n, u);
          break;
        case 22:
          u.memoizedState === null && ol(n, u, l), dn(u, u.return);
          break;
        case 30:
          break;
        default:
          ol(n, u, l);
      }
      e = e.sibling;
    }
  }
  function wc(t, e) {
    var l = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && Wa(l));
  }
  function Bc(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Wa(t));
  }
  function xe(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Mo(t, e, l, a), (e = e.sibling);
  }
  function Mo(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        xe(t, e, l, a), n & 2048 && on(9, e);
        break;
      case 1:
        xe(t, e, l, a);
        break;
      case 3:
        xe(t, e, l, a),
          n & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Wa(t)));
        break;
      case 12:
        if (n & 2048) {
          xe(t, e, l, a), (t = e.stateNode);
          try {
            var u = e.memoizedProps,
              c = u.id,
              s = u.onPostCommit;
            typeof s == "function" &&
              s(
                c,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (y) {
            gt(e, e.return, y);
          }
        } else xe(t, e, l, a);
        break;
      case 13:
        xe(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        (u = e.stateNode),
          (c = e.alternate),
          e.memoizedState !== null
            ? u._visibility & 2
              ? xe(t, e, l, a)
              : hn(t, e)
            : u._visibility & 2
            ? xe(t, e, l, a)
            : ((u._visibility |= 2),
              pa(t, e, l, a, (e.subtreeFlags & 10256) !== 0)),
          n & 2048 && wc(c, e);
        break;
      case 24:
        xe(t, e, l, a), n & 2048 && Bc(e.alternate, e);
        break;
      default:
        xe(t, e, l, a);
    }
  }
  function pa(t, e, l, a, n) {
    for (n = n && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var u = t,
        c = e,
        s = l,
        y = a,
        R = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          pa(u, c, s, y, n), on(8, c);
          break;
        case 23:
          break;
        case 22:
          var O = c.stateNode;
          c.memoizedState !== null
            ? O._visibility & 2
              ? pa(u, c, s, y, n)
              : hn(u, c)
            : ((O._visibility |= 2), pa(u, c, s, y, n)),
            n && R & 2048 && wc(c.alternate, c);
          break;
        case 24:
          pa(u, c, s, y, n), n && R & 2048 && Bc(c.alternate, c);
          break;
        default:
          pa(u, c, s, y, n);
      }
      e = e.sibling;
    }
  }
  function hn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          n = a.flags;
        switch (a.tag) {
          case 22:
            hn(l, a), n & 2048 && wc(a.alternate, a);
            break;
          case 24:
            hn(l, a), n & 2048 && Bc(a.alternate, a);
            break;
          default:
            hn(l, a);
        }
        e = e.sibling;
      }
  }
  var mn = 8192;
  function ga(t) {
    if (t.subtreeFlags & mn)
      for (t = t.child; t !== null; ) Do(t), (t = t.sibling);
  }
  function Do(t) {
    switch (t.tag) {
      case 26:
        ga(t),
          t.flags & mn &&
            t.memoizedState !== null &&
            jy(Ae, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        ga(t);
        break;
      case 3:
      case 4:
        var e = Ae;
        (Ae = Gu(t.stateNode.containerInfo)), ga(t), (Ae = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = mn), (mn = 16777216), ga(t), (mn = e))
            : ga(t));
        break;
      default:
        ga(t);
    }
  }
  function Oo(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function yn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (jt = a), xo(a, t);
        }
      Oo(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) _o(t), (t = t.sibling);
  }
  function _o(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        yn(t), t.flags & 2048 && rl(9, t, t.return);
        break;
      case 3:
        yn(t);
        break;
      case 12:
        yn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), _u(t))
          : yn(t);
        break;
      default:
        yn(t);
    }
  }
  function _u(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (jt = a), xo(a, t);
        }
      Oo(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          rl(8, e, e.return), _u(e);
          break;
        case 22:
          (l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), _u(e));
          break;
        default:
          _u(e);
      }
      t = t.sibling;
    }
  }
  function xo(t, e) {
    for (; jt !== null; ) {
      var l = jt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          rl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Wa(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (jt = a);
      else
        t: for (l = t; jt !== null; ) {
          a = jt;
          var n = a.sibling,
            u = a.return;
          if ((Eo(a), a === l)) {
            jt = null;
            break t;
          }
          if (n !== null) {
            (n.return = u), (jt = n);
            break t;
          }
          jt = u;
        }
    }
  }
  var ty = {
      getCacheForType: function (t) {
        var e = Jt(Ct),
          l = e.data.get(t);
        return l === void 0 && ((l = t()), e.data.set(t, l)), l;
      },
    },
    ey = typeof WeakMap == "function" ? WeakMap : Map,
    dt = 0,
    St = null,
    ut = null,
    ct = 0,
    ht = 0,
    re = null,
    dl = !1,
    Sa = !1,
    jc = !1,
    Ke = 0,
    Dt = 0,
    hl = 0,
    Xl = 0,
    Yc = 0,
    be = 0,
    ba = 0,
    vn = null,
    ee = null,
    Lc = !1,
    Gc = 0,
    xu = 1 / 0,
    Uu = null,
    ml = null,
    Xt = 0,
    yl = null,
    Ea = null,
    Ta = 0,
    Xc = 0,
    Qc = null,
    Uo = null,
    pn = 0,
    Zc = null;
  function se() {
    if ((dt & 2) !== 0 && ct !== 0) return ct & -ct;
    if (_.T !== null) {
      var t = ra;
      return t !== 0 ? t : Ic();
    }
    return Kf();
  }
  function No() {
    be === 0 && (be = (ct & 536870912) === 0 || ot ? Xf() : 536870912);
    var t = Se.current;
    return t !== null && (t.flags |= 32), be;
  }
  function oe(t, e, l) {
    ((t === St && (ht === 2 || ht === 9)) || t.cancelPendingCommit !== null) &&
      (Aa(t, 0), vl(t, ct, be, !1)),
      Ca(t, l),
      ((dt & 2) === 0 || t !== St) &&
        (t === St &&
          ((dt & 2) === 0 && (Xl |= l), Dt === 4 && vl(t, ct, be, !1)),
        Ue(t));
  }
  function Ho(t, e, l) {
    if ((dt & 6) !== 0) throw Error(f(327));
    var a = (!l && (e & 124) === 0 && (e & t.expiredLanes) === 0) || Ha(t, e),
      n = a ? ny(t, e) : Jc(t, e, !0),
      u = a;
    do {
      if (n === 0) {
        Sa && !a && vl(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), u && !ly(l))) {
          (n = Jc(t, e, !1)), (u = !1);
          continue;
        }
        if (n === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var c = 0;
          else
            (c = t.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            e = c;
            t: {
              var s = t;
              n = vn;
              var y = s.current.memoizedState.isDehydrated;
              if ((y && (Aa(s, c).flags |= 256), (c = Jc(s, c, !1)), c !== 2)) {
                if (jc && !y) {
                  (s.errorRecoveryDisabledLanes |= u), (Xl |= u), (n = 4);
                  break t;
                }
                (u = ee),
                  (ee = n),
                  u !== null && (ee === null ? (ee = u) : ee.push.apply(ee, u));
              }
              n = c;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          Aa(t, 0), vl(t, e, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (u = n), u)) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              vl(a, e, be, !dl);
              break t;
            case 2:
              ee = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && ((n = Gc + 300 - Me()), 10 < n)) {
            if ((vl(a, e, be, !dl), Xn(a, 0, !0) !== 0)) break t;
            a.timeoutHandle = fd(
              Co.bind(null, a, l, ee, Uu, Lc, e, be, Xl, ba, dl, u, 2, -0, 0),
              n
            );
            break t;
          }
          Co(a, l, ee, Uu, Lc, e, be, Xl, ba, dl, u, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Ue(t);
  }
  function Co(t, e, l, a, n, u, c, s, y, R, O, U, z, M) {
    if (
      ((t.timeoutHandle = -1),
      (U = e.subtreeFlags),
      (U & 8192 || (U & 16785408) === 16785408) &&
        ((Rn = { stylesheets: null, count: 0, unsuspend: By }),
        Do(e),
        (U = Yy()),
        U !== null))
    ) {
      (t.cancelPendingCommit = U(
        Go.bind(null, t, e, u, l, a, n, c, s, y, O, 1, z, M)
      )),
        vl(t, u, c, !R);
      return;
    }
    Go(t, e, u, l, a, n, c, s, y);
  }
  function ly(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!ue(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        (l.return = e), (e = l);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function vl(t, e, l, a) {
    (e &= ~Yc),
      (e &= ~Xl),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes);
    for (var n = e; 0 < n; ) {
      var u = 31 - ne(n),
        c = 1 << u;
      (a[u] = -1), (n &= ~c);
    }
    l !== 0 && Zf(t, l, e);
  }
  function Nu() {
    return (dt & 6) === 0 ? (gn(0), !1) : !0;
  }
  function Vc() {
    if (ut !== null) {
      if (ht === 0) var t = ut.return;
      else (t = ut), (je = wl = null), fc(t), (ya = null), (fn = 0), (t = ut);
      for (; t !== null; ) ho(t.alternate, t), (t = t.return);
      ut = null;
    }
  }
  function Aa(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && ((t.timeoutHandle = -1), by(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      Vc(),
      (St = t),
      (ut = l = qe(t.current, null)),
      (ct = e),
      (ht = 0),
      (re = null),
      (dl = !1),
      (Sa = Ha(t, e)),
      (jc = !1),
      (ba = be = Yc = Xl = hl = Dt = 0),
      (ee = vn = null),
      (Lc = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - ne(a),
          u = 1 << n;
        (e |= t[n]), (a &= ~u);
      }
    return (Ke = e), tu(), l;
  }
  function qo(t, e) {
    (at = null),
      (_.H = Su),
      e === Pa || e === ru
        ? ((e = Ir()), (ht = 3))
        : e === kr
        ? ((e = Ir()), (ht = 4))
        : (ht =
            e === Ps
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (re = e),
      ut === null && ((Dt = 1), Ru(t, ye(e, t.current)));
  }
  function wo() {
    var t = _.H;
    return (_.H = Su), t === null ? Su : t;
  }
  function Bo() {
    var t = _.A;
    return (_.A = ty), t;
  }
  function Kc() {
    (Dt = 4),
      dl || ((ct & 4194048) !== ct && Se.current !== null) || (Sa = !0),
      ((hl & 134217727) === 0 && (Xl & 134217727) === 0) ||
        St === null ||
        vl(St, ct, be, !1);
  }
  function Jc(t, e, l) {
    var a = dt;
    dt |= 2;
    var n = wo(),
      u = Bo();
    (St !== t || ct !== e) && ((Uu = null), Aa(t, e)), (e = !1);
    var c = Dt;
    t: do
      try {
        if (ht !== 0 && ut !== null) {
          var s = ut,
            y = re;
          switch (ht) {
            case 8:
              Vc(), (c = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Se.current === null && (e = !0);
              var R = ht;
              if (((ht = 0), (re = null), Ra(t, s, y, R), l && Sa)) {
                c = 0;
                break t;
              }
              break;
            default:
              (R = ht), (ht = 0), (re = null), Ra(t, s, y, R);
          }
        }
        ay(), (c = Dt);
        break;
      } catch (O) {
        qo(t, O);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (je = wl = null),
      (dt = a),
      (_.H = n),
      (_.A = u),
      ut === null && ((St = null), (ct = 0), tu()),
      c
    );
  }
  function ay() {
    for (; ut !== null; ) jo(ut);
  }
  function ny(t, e) {
    var l = dt;
    dt |= 2;
    var a = wo(),
      n = Bo();
    St !== t || ct !== e
      ? ((Uu = null), (xu = Me() + 500), Aa(t, e))
      : (Sa = Ha(t, e));
    t: do
      try {
        if (ht !== 0 && ut !== null) {
          e = ut;
          var u = re;
          e: switch (ht) {
            case 1:
              (ht = 0), (re = null), Ra(t, e, u, 1);
              break;
            case 2:
            case 9:
              if ($r(u)) {
                (ht = 0), (re = null), Yo(e);
                break;
              }
              (e = function () {
                (ht !== 2 && ht !== 9) || St !== t || (ht = 7), Ue(t);
              }),
                u.then(e, e);
              break t;
            case 3:
              ht = 7;
              break t;
            case 4:
              ht = 5;
              break t;
            case 7:
              $r(u)
                ? ((ht = 0), (re = null), Yo(e))
                : ((ht = 0), (re = null), Ra(t, e, u, 7));
              break;
            case 5:
              var c = null;
              switch (ut.tag) {
                case 26:
                  c = ut.memoizedState;
                case 5:
                case 27:
                  var s = ut;
                  if (!c || bd(c)) {
                    (ht = 0), (re = null);
                    var y = s.sibling;
                    if (y !== null) ut = y;
                    else {
                      var R = s.return;
                      R !== null ? ((ut = R), Hu(R)) : (ut = null);
                    }
                    break e;
                  }
              }
              (ht = 0), (re = null), Ra(t, e, u, 5);
              break;
            case 6:
              (ht = 0), (re = null), Ra(t, e, u, 6);
              break;
            case 8:
              Vc(), (Dt = 6);
              break t;
            default:
              throw Error(f(462));
          }
        }
        uy();
        break;
      } catch (O) {
        qo(t, O);
      }
    while (!0);
    return (
      (je = wl = null),
      (_.H = a),
      (_.A = n),
      (dt = l),
      ut !== null ? 0 : ((St = null), (ct = 0), tu(), Dt)
    );
  }
  function uy() {
    for (; ut !== null && !Dh(); ) jo(ut);
  }
  function jo(t) {
    var e = so(t.alternate, t, Ke);
    (t.memoizedProps = t.pendingProps), e === null ? Hu(t) : (ut = e);
  }
  function Yo(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = no(l, e, e.pendingProps, e.type, void 0, ct);
        break;
      case 11:
        e = no(l, e, e.pendingProps, e.type.render, e.ref, ct);
        break;
      case 5:
        fc(e);
      default:
        ho(l, e), (e = ut = Yr(e, Ke)), (e = so(l, e, Ke));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Hu(t) : (ut = e);
  }
  function Ra(t, e, l, a) {
    (je = wl = null), fc(e), (ya = null), (fn = 0);
    var n = e.return;
    try {
      if (km(t, n, e, l, ct)) {
        (Dt = 1), Ru(t, ye(l, t.current)), (ut = null);
        return;
      }
    } catch (u) {
      if (n !== null) throw ((ut = n), u);
      (Dt = 1), Ru(t, ye(l, t.current)), (ut = null);
      return;
    }
    e.flags & 32768
      ? (ot || a === 1
          ? (t = !0)
          : Sa || (ct & 536870912) !== 0
          ? (t = !1)
          : ((dl = t = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = Se.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        Lo(e, t))
      : Hu(e);
  }
  function Hu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Lo(e, dl);
        return;
      }
      t = e.return;
      var l = Wm(e.alternate, e, Ke);
      if (l !== null) {
        ut = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ut = e;
        return;
      }
      ut = e = t;
    } while (e !== null);
    Dt === 0 && (Dt = 5);
  }
  function Lo(t, e) {
    do {
      var l = Im(t.alternate, t);
      if (l !== null) {
        (l.flags &= 32767), (ut = l);
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ut = t;
        return;
      }
      ut = t = l;
    } while (t !== null);
    (Dt = 6), (ut = null);
  }
  function Go(t, e, l, a, n, u, c, s, y) {
    t.cancelPendingCommit = null;
    do Cu();
    while (Xt !== 0);
    if ((dt & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= Bi),
        Bh(t, l, u, c, s, y),
        t === St && ((ut = St = null), (ct = 0)),
        (Ea = e),
        (yl = t),
        (Ta = l),
        (Xc = u),
        (Qc = n),
        (Uo = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            ry(Yn, function () {
              return Ko(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = _.T), (_.T = null), (n = Y.p), (Y.p = 2), (c = dt), (dt |= 4);
        try {
          Pm(t, e, l);
        } finally {
          (dt = c), (Y.p = n), (_.T = a);
        }
      }
      (Xt = 1), Xo(), Qo(), Zo();
    }
  }
  function Xo() {
    if (Xt === 1) {
      Xt = 0;
      var t = yl,
        e = Ea,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        (l = _.T), (_.T = null);
        var a = Y.p;
        Y.p = 2;
        var n = dt;
        dt |= 4;
        try {
          Ro(e, t);
          var u = uf,
            c = _r(t.containerInfo),
            s = u.focusedElem,
            y = u.selectionRange;
          if (
            c !== s &&
            s &&
            s.ownerDocument &&
            Or(s.ownerDocument.documentElement, s)
          ) {
            if (y !== null && Ni(s)) {
              var R = y.start,
                O = y.end;
              if ((O === void 0 && (O = R), "selectionStart" in s))
                (s.selectionStart = R),
                  (s.selectionEnd = Math.min(O, s.value.length));
              else {
                var U = s.ownerDocument || document,
                  z = (U && U.defaultView) || window;
                if (z.getSelection) {
                  var M = z.getSelection(),
                    I = s.textContent.length,
                    k = Math.min(y.start, I),
                    vt = y.end === void 0 ? k : Math.min(y.end, I);
                  !M.extend && k > vt && ((c = vt), (vt = k), (k = c));
                  var b = Dr(s, k),
                    g = Dr(s, vt);
                  if (
                    b &&
                    g &&
                    (M.rangeCount !== 1 ||
                      M.anchorNode !== b.node ||
                      M.anchorOffset !== b.offset ||
                      M.focusNode !== g.node ||
                      M.focusOffset !== g.offset)
                  ) {
                    var T = U.createRange();
                    T.setStart(b.node, b.offset),
                      M.removeAllRanges(),
                      k > vt
                        ? (M.addRange(T), M.extend(g.node, g.offset))
                        : (T.setEnd(g.node, g.offset), M.addRange(T));
                  }
                }
              }
            }
            for (U = [], M = s; (M = M.parentNode); )
              M.nodeType === 1 &&
                U.push({ element: M, left: M.scrollLeft, top: M.scrollTop });
            for (
              typeof s.focus == "function" && s.focus(), s = 0;
              s < U.length;
              s++
            ) {
              var x = U[s];
              (x.element.scrollLeft = x.left), (x.element.scrollTop = x.top);
            }
          }
          (Ku = !!nf), (uf = nf = null);
        } finally {
          (dt = n), (Y.p = a), (_.T = l);
        }
      }
      (t.current = e), (Xt = 2);
    }
  }
  function Qo() {
    if (Xt === 2) {
      Xt = 0;
      var t = yl,
        e = Ea,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        (l = _.T), (_.T = null);
        var a = Y.p;
        Y.p = 2;
        var n = dt;
        dt |= 4;
        try {
          bo(t, e.alternate, e);
        } finally {
          (dt = n), (Y.p = a), (_.T = l);
        }
      }
      Xt = 3;
    }
  }
  function Zo() {
    if (Xt === 4 || Xt === 3) {
      (Xt = 0), Oh();
      var t = yl,
        e = Ea,
        l = Ta,
        a = Uo;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Xt = 5)
        : ((Xt = 0), (Ea = yl = null), Vo(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (
        (n === 0 && (ml = null),
        oi(l),
        (e = e.stateNode),
        ae && typeof ae.onCommitFiberRoot == "function")
      )
        try {
          ae.onCommitFiberRoot(Na, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (e = _.T), (n = Y.p), (Y.p = 2), (_.T = null);
        try {
          for (var u = t.onRecoverableError, c = 0; c < a.length; c++) {
            var s = a[c];
            u(s.value, { componentStack: s.stack });
          }
        } finally {
          (_.T = e), (Y.p = n);
        }
      }
      (Ta & 3) !== 0 && Cu(),
        Ue(t),
        (n = t.pendingLanes),
        (l & 4194090) !== 0 && (n & 42) !== 0
          ? t === Zc
            ? pn++
            : ((pn = 0), (Zc = t))
          : (pn = 0),
        gn(0);
    }
  }
  function Vo(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Wa(e)));
  }
  function Cu(t) {
    return Xo(), Qo(), Zo(), Ko();
  }
  function Ko() {
    if (Xt !== 5) return !1;
    var t = yl,
      e = Xc;
    Xc = 0;
    var l = oi(Ta),
      a = _.T,
      n = Y.p;
    try {
      (Y.p = 32 > l ? 32 : l), (_.T = null), (l = Qc), (Qc = null);
      var u = yl,
        c = Ta;
      if (((Xt = 0), (Ea = yl = null), (Ta = 0), (dt & 6) !== 0))
        throw Error(f(331));
      var s = dt;
      if (
        ((dt |= 4),
        _o(u.current),
        Mo(u, u.current, c, l),
        (dt = s),
        gn(0, !1),
        ae && typeof ae.onPostCommitFiberRoot == "function")
      )
        try {
          ae.onPostCommitFiberRoot(Na, u);
        } catch {}
      return !0;
    } finally {
      (Y.p = n), (_.T = a), Vo(t, e);
    }
  }
  function Jo(t, e, l) {
    (e = ye(l, e)),
      (e = Tc(t.stateNode, e, 2)),
      (t = ul(t, e, 2)),
      t !== null && (Ca(t, 2), Ue(t));
  }
  function gt(t, e, l) {
    if (t.tag === 3) Jo(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Jo(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (ml === null || !ml.has(a)))
          ) {
            (t = ye(l, t)),
              (l = Ws(2)),
              (a = ul(e, l, 2)),
              a !== null && (Is(l, a, e, t), Ca(a, 2), Ue(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function kc(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new ey();
      var n = new Set();
      a.set(e, n);
    } else (n = a.get(e)), n === void 0 && ((n = new Set()), a.set(e, n));
    n.has(l) ||
      ((jc = !0), n.add(l), (t = iy.bind(null, t, e, l)), e.then(t, t));
  }
  function iy(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      St === t &&
        (ct & l) === l &&
        (Dt === 4 || (Dt === 3 && (ct & 62914560) === ct && 300 > Me() - Gc)
          ? (dt & 2) === 0 && Aa(t, 0)
          : (Yc |= l),
        ba === ct && (ba = 0)),
      Ue(t);
  }
  function ko(t, e) {
    e === 0 && (e = Qf()), (t = ua(t, e)), t !== null && (Ca(t, e), Ue(t));
  }
  function cy(t) {
    var e = t.memoizedState,
      l = 0;
    e !== null && (l = e.retryLane), ko(t, l);
  }
  function fy(t, e) {
    var l = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    a !== null && a.delete(e), ko(t, l);
  }
  function ry(t, e) {
    return ci(t, e);
  }
  var qu = null,
    za = null,
    $c = !1,
    wu = !1,
    Wc = !1,
    Ql = 0;
  function Ue(t) {
    t !== za &&
      t.next === null &&
      (za === null ? (qu = za = t) : (za = za.next = t)),
      (wu = !0),
      $c || (($c = !0), oy());
  }
  function gn(t, e) {
    if (!Wc && wu) {
      Wc = !0;
      do
        for (var l = !1, a = qu; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var c = a.suspendedLanes,
                s = a.pingedLanes;
              (u = (1 << (31 - ne(42 | t) + 1)) - 1),
                (u &= n & ~(c & ~s)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((l = !0), Po(a, u));
          } else
            (u = ct),
              (u = Xn(
                a,
                a === St ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || Ha(a, u) || ((l = !0), Po(a, u));
          a = a.next;
        }
      while (l);
      Wc = !1;
    }
  }
  function sy() {
    $o();
  }
  function $o() {
    wu = $c = !1;
    var t = 0;
    Ql !== 0 && (Sy() && (t = Ql), (Ql = 0));
    for (var e = Me(), l = null, a = qu; a !== null; ) {
      var n = a.next,
        u = Wo(a, e);
      u === 0
        ? ((a.next = null),
          l === null ? (qu = n) : (l.next = n),
          n === null && (za = l))
        : ((l = a), (t !== 0 || (u & 3) !== 0) && (wu = !0)),
        (a = n);
    }
    gn(t);
  }
  function Wo(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        n = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;

    ) {
      var c = 31 - ne(u),
        s = 1 << c,
        y = n[c];
      y === -1
        ? ((s & l) === 0 || (s & a) !== 0) && (n[c] = wh(s, e))
        : y <= e && (t.expiredLanes |= s),
        (u &= ~s);
    }
    if (
      ((e = St),
      (l = ct),
      (l = Xn(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (a = t.callbackNode),
      l === 0 ||
        (t === e && (ht === 2 || ht === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && fi(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Ha(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && fi(a), oi(l))) {
        case 2:
        case 8:
          l = Lf;
          break;
        case 32:
          l = Yn;
          break;
        case 268435456:
          l = Gf;
          break;
        default:
          l = Yn;
      }
      return (
        (a = Io.bind(null, t)),
        (l = ci(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      a !== null && a !== null && fi(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Io(t, e) {
    if (Xt !== 0 && Xt !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var l = t.callbackNode;
    if (Cu() && t.callbackNode !== l) return null;
    var a = ct;
    return (
      (a = Xn(
        t,
        t === St ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (Ho(t, a, e),
          Wo(t, Me()),
          t.callbackNode != null && t.callbackNode === l
            ? Io.bind(null, t)
            : null)
    );
  }
  function Po(t, e) {
    if (Cu()) return null;
    Ho(t, e, !0);
  }
  function oy() {
    Ey(function () {
      (dt & 6) !== 0 ? ci(Yf, sy) : $o();
    });
  }
  function Ic() {
    return Ql === 0 && (Ql = Xf()), Ql;
  }
  function Fo(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Jn("" + t);
  }
  function td(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function dy(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var u = Fo((n[It] || null).action),
        c = a.submitter;
      c &&
        ((e = (e = c[It] || null)
          ? Fo(e.formAction)
          : c.getAttribute("formAction")),
        e !== null && ((u = e), (c = null)));
      var s = new In("action", "action", null, a, n);
      t.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Ql !== 0) {
                  var y = c ? td(n, c) : new FormData(n);
                  pc(
                    l,
                    { pending: !0, data: y, method: n.method, action: u },
                    null,
                    y
                  );
                }
              } else
                typeof u == "function" &&
                  (s.preventDefault(),
                  (y = c ? td(n, c) : new FormData(n)),
                  pc(
                    l,
                    { pending: !0, data: y, method: n.method, action: u },
                    u,
                    y
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var Pc = 0; Pc < wi.length; Pc++) {
    var Fc = wi[Pc],
      hy = Fc.toLowerCase(),
      my = Fc[0].toUpperCase() + Fc.slice(1);
    Te(hy, "on" + my);
  }
  Te(Nr, "onAnimationEnd"),
    Te(Hr, "onAnimationIteration"),
    Te(Cr, "onAnimationStart"),
    Te("dblclick", "onDoubleClick"),
    Te("focusin", "onFocus"),
    Te("focusout", "onBlur"),
    Te(Um, "onTransitionRun"),
    Te(Nm, "onTransitionStart"),
    Te(Hm, "onTransitionCancel"),
    Te(qr, "onTransitionEnd"),
    $l("onMouseEnter", ["mouseout", "mouseover"]),
    $l("onMouseLeave", ["mouseout", "mouseover"]),
    $l("onPointerEnter", ["pointerout", "pointerover"]),
    $l("onPointerLeave", ["pointerout", "pointerover"]),
    Dl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Dl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Dl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Dl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Dl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Dl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Sn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    yy = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Sn)
    );
  function ed(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var c = a.length - 1; 0 <= c; c--) {
            var s = a[c],
              y = s.instance,
              R = s.currentTarget;
            if (((s = s.listener), y !== u && n.isPropagationStopped()))
              break t;
            (u = s), (n.currentTarget = R);
            try {
              u(n);
            } catch (O) {
              Au(O);
            }
            (n.currentTarget = null), (u = y);
          }
        else
          for (c = 0; c < a.length; c++) {
            if (
              ((s = a[c]),
              (y = s.instance),
              (R = s.currentTarget),
              (s = s.listener),
              y !== u && n.isPropagationStopped())
            )
              break t;
            (u = s), (n.currentTarget = R);
            try {
              u(n);
            } catch (O) {
              Au(O);
            }
            (n.currentTarget = null), (u = y);
          }
      }
    }
  }
  function it(t, e) {
    var l = e[di];
    l === void 0 && (l = e[di] = new Set());
    var a = t + "__bubble";
    l.has(a) || (ld(e, t, 2, !1), l.add(a));
  }
  function tf(t, e, l) {
    var a = 0;
    e && (a |= 4), ld(l, t, a, e);
  }
  var Bu = "_reactListening" + Math.random().toString(36).slice(2);
  function ef(t) {
    if (!t[Bu]) {
      (t[Bu] = !0),
        kf.forEach(function (l) {
          l !== "selectionchange" && (yy.has(l) || tf(l, !1, t), tf(l, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Bu] || ((e[Bu] = !0), tf("selectionchange", !1, e));
    }
  }
  function ld(t, e, l, a) {
    switch (Md(e)) {
      case 2:
        var n = Xy;
        break;
      case 8:
        n = Qy;
        break;
      default:
        n = vf;
    }
    (l = n.bind(null, e, l, t)),
      (n = void 0),
      !Ai ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: n })
          : t.addEventListener(e, l, !0)
        : n !== void 0
        ? t.addEventListener(e, l, { passive: n })
        : t.addEventListener(e, l, !1);
  }
  function lf(t, e, l, a, n) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var y = c.tag;
              if ((y === 3 || y === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; s !== null; ) {
            if (((c = Kl(s)), c === null)) return;
            if (((y = c.tag), y === 5 || y === 6 || y === 26 || y === 27)) {
              a = u = c;
              continue t;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    fr(function () {
      var R = u,
        O = Ei(l),
        U = [];
      t: {
        var z = wr.get(t);
        if (z !== void 0) {
          var M = In,
            I = t;
          switch (t) {
            case "keypress":
              if ($n(l) === 0) break t;
            case "keydown":
            case "keyup":
              M = rm;
              break;
            case "focusin":
              (I = "focus"), (M = Di);
              break;
            case "focusout":
              (I = "blur"), (M = Di);
              break;
            case "beforeblur":
            case "afterblur":
              M = Di;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              M = or;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = Ih;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = dm;
              break;
            case Nr:
            case Hr:
            case Cr:
              M = tm;
              break;
            case qr:
              M = mm;
              break;
            case "scroll":
            case "scrollend":
              M = $h;
              break;
            case "wheel":
              M = vm;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = lm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = hr;
              break;
            case "toggle":
            case "beforetoggle":
              M = gm;
          }
          var k = (e & 4) !== 0,
            vt = !k && (t === "scroll" || t === "scrollend"),
            b = k ? (z !== null ? z + "Capture" : null) : z;
          k = [];
          for (var g = R, T; g !== null; ) {
            var x = g;
            if (
              ((T = x.stateNode),
              (x = x.tag),
              (x !== 5 && x !== 26 && x !== 27) ||
                T === null ||
                b === null ||
                ((x = Ba(g, b)), x != null && k.push(bn(g, x, T))),
              vt)
            )
              break;
            g = g.return;
          }
          0 < k.length &&
            ((z = new M(z, I, null, l, O)), U.push({ event: z, listeners: k }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((z = t === "mouseover" || t === "pointerover"),
            (M = t === "mouseout" || t === "pointerout"),
            z &&
              l !== bi &&
              (I = l.relatedTarget || l.fromElement) &&
              (Kl(I) || I[Vl]))
          )
            break t;
          if (
            (M || z) &&
            ((z =
              O.window === O
                ? O
                : (z = O.ownerDocument)
                ? z.defaultView || z.parentWindow
                : window),
            M
              ? ((I = l.relatedTarget || l.toElement),
                (M = R),
                (I = I ? Kl(I) : null),
                I !== null &&
                  ((vt = h(I)),
                  (k = I.tag),
                  I !== vt || (k !== 5 && k !== 27 && k !== 6)) &&
                  (I = null))
              : ((M = null), (I = R)),
            M !== I)
          ) {
            if (
              ((k = or),
              (x = "onMouseLeave"),
              (b = "onMouseEnter"),
              (g = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((k = hr),
                (x = "onPointerLeave"),
                (b = "onPointerEnter"),
                (g = "pointer")),
              (vt = M == null ? z : wa(M)),
              (T = I == null ? z : wa(I)),
              (z = new k(x, g + "leave", M, l, O)),
              (z.target = vt),
              (z.relatedTarget = T),
              (x = null),
              Kl(O) === R &&
                ((k = new k(b, g + "enter", I, l, O)),
                (k.target = T),
                (k.relatedTarget = vt),
                (x = k)),
              (vt = x),
              M && I)
            )
              e: {
                for (k = M, b = I, g = 0, T = k; T; T = Ma(T)) g++;
                for (T = 0, x = b; x; x = Ma(x)) T++;
                for (; 0 < g - T; ) (k = Ma(k)), g--;
                for (; 0 < T - g; ) (b = Ma(b)), T--;
                for (; g--; ) {
                  if (k === b || (b !== null && k === b.alternate)) break e;
                  (k = Ma(k)), (b = Ma(b));
                }
                k = null;
              }
            else k = null;
            M !== null && ad(U, z, M, k, !1),
              I !== null && vt !== null && ad(U, vt, I, k, !0);
          }
        }
        t: {
          if (
            ((z = R ? wa(R) : window),
            (M = z.nodeName && z.nodeName.toLowerCase()),
            M === "select" || (M === "input" && z.type === "file"))
          )
            var Q = Er;
          else if (Sr(z))
            if (Tr) Q = Om;
            else {
              Q = Mm;
              var nt = zm;
            }
          else
            (M = z.nodeName),
              !M ||
              M.toLowerCase() !== "input" ||
              (z.type !== "checkbox" && z.type !== "radio")
                ? R && Si(R.elementType) && (Q = Er)
                : (Q = Dm);
          if (Q && (Q = Q(t, R))) {
            br(U, Q, l, O);
            break t;
          }
          nt && nt(t, z, R),
            t === "focusout" &&
              R &&
              z.type === "number" &&
              R.memoizedProps.value != null &&
              gi(z, "number", z.value);
        }
        switch (((nt = R ? wa(R) : window), t)) {
          case "focusin":
            (Sr(nt) || nt.contentEditable === "true") &&
              ((la = nt), (Hi = R), (Va = null));
            break;
          case "focusout":
            Va = Hi = la = null;
            break;
          case "mousedown":
            Ci = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Ci = !1), xr(U, l, O);
            break;
          case "selectionchange":
            if (xm) break;
          case "keydown":
          case "keyup":
            xr(U, l, O);
        }
        var K;
        if (_i)
          t: {
            switch (t) {
              case "compositionstart":
                var $ = "onCompositionStart";
                break t;
              case "compositionend":
                $ = "onCompositionEnd";
                break t;
              case "compositionupdate":
                $ = "onCompositionUpdate";
                break t;
            }
            $ = void 0;
          }
        else
          ea
            ? pr(t, l) && ($ = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              ($ = "onCompositionStart");
        $ &&
          (mr &&
            l.locale !== "ko" &&
            (ea || $ !== "onCompositionStart"
              ? $ === "onCompositionEnd" && ea && (K = rr())
              : ((el = O),
                (Ri = "value" in el ? el.value : el.textContent),
                (ea = !0))),
          (nt = ju(R, $)),
          0 < nt.length &&
            (($ = new dr($, t, null, l, O)),
            U.push({ event: $, listeners: nt }),
            K ? ($.data = K) : ((K = gr(l)), K !== null && ($.data = K)))),
          (K = bm ? Em(t, l) : Tm(t, l)) &&
            (($ = ju(R, "onBeforeInput")),
            0 < $.length &&
              ((nt = new dr("onBeforeInput", "beforeinput", null, l, O)),
              U.push({ event: nt, listeners: $ }),
              (nt.data = K))),
          dy(U, t, R, l, O);
      }
      ed(U, e);
    });
  }
  function bn(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function ju(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = Ba(t, l)),
          n != null && a.unshift(bn(t, n, u)),
          (n = Ba(t, e)),
          n != null && a.push(bn(t, n, u))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function Ma(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function ad(t, e, l, a, n) {
    for (var u = e._reactName, c = []; l !== null && l !== a; ) {
      var s = l,
        y = s.alternate,
        R = s.stateNode;
      if (((s = s.tag), y !== null && y === a)) break;
      (s !== 5 && s !== 26 && s !== 27) ||
        R === null ||
        ((y = R),
        n
          ? ((R = Ba(l, u)), R != null && c.unshift(bn(l, R, y)))
          : n || ((R = Ba(l, u)), R != null && c.push(bn(l, R, y)))),
        (l = l.return);
    }
    c.length !== 0 && t.push({ event: e, listeners: c });
  }
  var vy = /\r\n?/g,
    py = /\u0000|\uFFFD/g;
  function nd(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        vy,
        `
`
      )
      .replace(py, "");
  }
  function ud(t, e) {
    return (e = nd(e)), nd(t) === e;
  }
  function Yu() {}
  function yt(t, e, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || Pl(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            Pl(t, "" + a);
        break;
      case "className":
        Zn(t, "class", a);
        break;
      case "tabIndex":
        Zn(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Zn(t, l, a);
        break;
      case "style":
        ir(t, a, u);
        break;
      case "data":
        if (e !== "object") {
          Zn(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        (a = Jn("" + a)), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" &&
            (l === "formAction"
              ? (e !== "input" && yt(t, e, "name", n.name, n, null),
                yt(t, e, "formEncType", n.formEncType, n, null),
                yt(t, e, "formMethod", n.formMethod, n, null),
                yt(t, e, "formTarget", n.formTarget, n, null))
              : (yt(t, e, "encType", n.encType, n, null),
                yt(t, e, "method", n.method, n, null),
                yt(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        (a = Jn("" + a)), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = Yu);
        break;
      case "onScroll":
        a != null && it("scroll", t);
        break;
      case "onScrollEnd":
        a != null && it("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (l = Jn("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "" + a)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(l, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(l)
          : t.setAttribute(l, a);
        break;
      case "popover":
        it("beforetoggle", t), it("toggle", t), Qn(t, "popover", a);
        break;
      case "xlinkActuate":
        He(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        He(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        He(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        He(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        He(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        He(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        He(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        He(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        He(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Qn(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Jh.get(l) || l), Qn(t, l, a));
    }
  }
  function af(t, e, l, a, n, u) {
    switch (l) {
      case "style":
        ir(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Pl(t, a)
          : (typeof a == "number" || typeof a == "bigint") && Pl(t, "" + a);
        break;
      case "onScroll":
        a != null && it("scroll", t);
        break;
      case "onScrollEnd":
        a != null && it("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Yu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!$f.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (e = l.slice(2, n ? l.length - 7 : void 0)),
              (u = t[It] || null),
              (u = u != null ? u[l] : null),
              typeof u == "function" && t.removeEventListener(e, u, n),
              typeof a == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, n);
              break t;
            }
            l in t
              ? (t[l] = a)
              : a === !0
              ? t.setAttribute(l, "")
              : Qn(t, l, a);
          }
    }
  }
  function Qt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        it("error", t), it("load", t);
        var a = !1,
          n = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var c = l[u];
            if (c != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, e));
                default:
                  yt(t, e, u, c, l, null);
              }
          }
        n && yt(t, e, "srcSet", l.srcSet, l, null),
          a && yt(t, e, "src", l.src, l, null);
        return;
      case "input":
        it("invalid", t);
        var s = (u = c = n = null),
          y = null,
          R = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var O = l[a];
            if (O != null)
              switch (a) {
                case "name":
                  n = O;
                  break;
                case "type":
                  c = O;
                  break;
                case "checked":
                  y = O;
                  break;
                case "defaultChecked":
                  R = O;
                  break;
                case "value":
                  u = O;
                  break;
                case "defaultValue":
                  s = O;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (O != null) throw Error(f(137, e));
                  break;
                default:
                  yt(t, e, a, O, l, null);
              }
          }
        lr(t, u, s, y, R, c, n, !1), Vn(t);
        return;
      case "select":
        it("invalid", t), (a = c = u = null);
        for (n in l)
          if (l.hasOwnProperty(n) && ((s = l[n]), s != null))
            switch (n) {
              case "value":
                u = s;
                break;
              case "defaultValue":
                c = s;
                break;
              case "multiple":
                a = s;
              default:
                yt(t, e, n, s, l, null);
            }
        (e = u),
          (l = c),
          (t.multiple = !!a),
          e != null ? Il(t, !!a, e, !1) : l != null && Il(t, !!a, l, !0);
        return;
      case "textarea":
        it("invalid", t), (u = n = a = null);
        for (c in l)
          if (l.hasOwnProperty(c) && ((s = l[c]), s != null))
            switch (c) {
              case "value":
                a = s;
                break;
              case "defaultValue":
                n = s;
                break;
              case "children":
                u = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(f(91));
                break;
              default:
                yt(t, e, c, s, l, null);
            }
        nr(t, a, n, u), Vn(t);
        return;
      case "option":
        for (y in l)
          if (l.hasOwnProperty(y) && ((a = l[y]), a != null))
            switch (y) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                yt(t, e, y, a, l, null);
            }
        return;
      case "dialog":
        it("beforetoggle", t), it("toggle", t), it("cancel", t), it("close", t);
        break;
      case "iframe":
      case "object":
        it("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Sn.length; a++) it(Sn[a], t);
        break;
      case "image":
        it("error", t), it("load", t);
        break;
      case "details":
        it("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        it("error", t), it("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (R in l)
          if (l.hasOwnProperty(R) && ((a = l[R]), a != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, e));
              default:
                yt(t, e, R, a, l, null);
            }
        return;
      default:
        if (Si(e)) {
          for (O in l)
            l.hasOwnProperty(O) &&
              ((a = l[O]), a !== void 0 && af(t, e, O, a, l, void 0));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && ((a = l[s]), a != null && yt(t, e, s, a, l, null));
  }
  function gy(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          c = null,
          s = null,
          y = null,
          R = null,
          O = null;
        for (M in l) {
          var U = l[M];
          if (l.hasOwnProperty(M) && U != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                y = U;
              default:
                a.hasOwnProperty(M) || yt(t, e, M, null, a, U);
            }
        }
        for (var z in a) {
          var M = a[z];
          if (((U = l[z]), a.hasOwnProperty(z) && (M != null || U != null)))
            switch (z) {
              case "type":
                u = M;
                break;
              case "name":
                n = M;
                break;
              case "checked":
                R = M;
                break;
              case "defaultChecked":
                O = M;
                break;
              case "value":
                c = M;
                break;
              case "defaultValue":
                s = M;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null) throw Error(f(137, e));
                break;
              default:
                M !== U && yt(t, e, z, M, a, U);
            }
        }
        pi(t, c, s, y, R, O, u, n);
        return;
      case "select":
        M = c = s = z = null;
        for (u in l)
          if (((y = l[u]), l.hasOwnProperty(u) && y != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                M = y;
              default:
                a.hasOwnProperty(u) || yt(t, e, u, null, a, y);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (y = l[n]),
            a.hasOwnProperty(n) && (u != null || y != null))
          )
            switch (n) {
              case "value":
                z = u;
                break;
              case "defaultValue":
                s = u;
                break;
              case "multiple":
                c = u;
              default:
                u !== y && yt(t, e, n, u, a, y);
            }
        (e = s),
          (l = c),
          (a = M),
          z != null
            ? Il(t, !!l, z, !1)
            : !!a != !!l &&
              (e != null ? Il(t, !!l, e, !0) : Il(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        M = z = null;
        for (s in l)
          if (
            ((n = l[s]),
            l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
          )
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                yt(t, e, s, null, a, n);
            }
        for (c in a)
          if (
            ((n = a[c]),
            (u = l[c]),
            a.hasOwnProperty(c) && (n != null || u != null))
          )
            switch (c) {
              case "value":
                z = n;
                break;
              case "defaultValue":
                M = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== u && yt(t, e, c, n, a, u);
            }
        ar(t, z, M);
        return;
      case "option":
        for (var I in l)
          if (
            ((z = l[I]),
            l.hasOwnProperty(I) && z != null && !a.hasOwnProperty(I))
          )
            switch (I) {
              case "selected":
                t.selected = !1;
                break;
              default:
                yt(t, e, I, null, a, z);
            }
        for (y in a)
          if (
            ((z = a[y]),
            (M = l[y]),
            a.hasOwnProperty(y) && z !== M && (z != null || M != null))
          )
            switch (y) {
              case "selected":
                t.selected =
                  z && typeof z != "function" && typeof z != "symbol";
                break;
              default:
                yt(t, e, y, z, a, M);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var k in l)
          (z = l[k]),
            l.hasOwnProperty(k) &&
              z != null &&
              !a.hasOwnProperty(k) &&
              yt(t, e, k, null, a, z);
        for (R in a)
          if (
            ((z = a[R]),
            (M = l[R]),
            a.hasOwnProperty(R) && z !== M && (z != null || M != null))
          )
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(f(137, e));
                break;
              default:
                yt(t, e, R, z, a, M);
            }
        return;
      default:
        if (Si(e)) {
          for (var vt in l)
            (z = l[vt]),
              l.hasOwnProperty(vt) &&
                z !== void 0 &&
                !a.hasOwnProperty(vt) &&
                af(t, e, vt, void 0, a, z);
          for (O in a)
            (z = a[O]),
              (M = l[O]),
              !a.hasOwnProperty(O) ||
                z === M ||
                (z === void 0 && M === void 0) ||
                af(t, e, O, z, a, M);
          return;
        }
    }
    for (var b in l)
      (z = l[b]),
        l.hasOwnProperty(b) &&
          z != null &&
          !a.hasOwnProperty(b) &&
          yt(t, e, b, null, a, z);
    for (U in a)
      (z = a[U]),
        (M = l[U]),
        !a.hasOwnProperty(U) ||
          z === M ||
          (z == null && M == null) ||
          yt(t, e, U, z, a, M);
  }
  var nf = null,
    uf = null;
  function Lu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function id(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function cd(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function cf(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ff = null;
  function Sy() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === ff
        ? !1
        : ((ff = t), !0)
      : ((ff = null), !1);
  }
  var fd = typeof setTimeout == "function" ? setTimeout : void 0,
    by = typeof clearTimeout == "function" ? clearTimeout : void 0,
    rd = typeof Promise == "function" ? Promise : void 0,
    Ey =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof rd < "u"
        ? function (t) {
            return rd.resolve(null).then(t).catch(Ty);
          }
        : fd;
  function Ty(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function pl(t) {
    return t === "head";
  }
  function sd(t, e) {
    var l = e,
      a = 0,
      n = 0;
    do {
      var u = l.nextSibling;
      if ((t.removeChild(l), u && u.nodeType === 8))
        if (((l = u.data), l === "/$")) {
          if (0 < a && 8 > a) {
            l = a;
            var c = t.ownerDocument;
            if ((l & 1 && En(c.documentElement), l & 2 && En(c.body), l & 4))
              for (l = c.head, En(l), c = l.firstChild; c; ) {
                var s = c.nextSibling,
                  y = c.nodeName;
                c[qa] ||
                  y === "SCRIPT" ||
                  y === "STYLE" ||
                  (y === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
                  l.removeChild(c),
                  (c = s);
              }
          }
          if (n === 0) {
            t.removeChild(u), _n(e);
            return;
          }
          n--;
        } else
          l === "$" || l === "$?" || l === "$!"
            ? n++
            : (a = l.charCodeAt(0) - 48);
      else a = 0;
      l = u;
    } while (l);
    _n(e);
  }
  function rf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          rf(l), hi(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function Ay(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[qa])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((u = t.getAttribute("rel")),
                u === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                t.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                t.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                t.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((u = t.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  t.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  t.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (((t = Re(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Ry(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = Re(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function sf(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function zy(t, e) {
    var l = t.ownerDocument;
    if (t.data !== "$?" || l.readyState === "complete") e();
    else {
      var a = function () {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function Re(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var of = null;
  function od(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (e === 0) return t;
          e--;
        } else l === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function dd(t, e, l) {
    switch (((e = Lu(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(f(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(f(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  function En(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    hi(t);
  }
  var Ee = new Map(),
    hd = new Set();
  function Gu(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var Je = Y.d;
  Y.d = { f: My, r: Dy, D: Oy, C: _y, L: xy, m: Uy, X: Hy, S: Ny, M: Cy };
  function My() {
    var t = Je.f(),
      e = Nu();
    return t || e;
  }
  function Dy(t) {
    var e = Jl(t);
    e !== null && e.tag === 5 && e.type === "form" ? Ns(e) : Je.r(t);
  }
  var Da = typeof document > "u" ? null : document;
  function md(t, e, l) {
    var a = Da;
    if (a && typeof e == "string" && e) {
      var n = me(e);
      (n = 'link[rel="' + t + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        hd.has(n) ||
          (hd.add(n),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(n) === null &&
            ((e = a.createElement("link")),
            Qt(e, "link", t),
            wt(e),
            a.head.appendChild(e)));
    }
  }
  function Oy(t) {
    Je.D(t), md("dns-prefetch", t, null);
  }
  function _y(t, e) {
    Je.C(t, e), md("preconnect", t, e);
  }
  function xy(t, e, l) {
    Je.L(t, e, l);
    var a = Da;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + me(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + me(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + me(l.imageSizes) + '"]'))
        : (n += '[href="' + me(t) + '"]');
      var u = n;
      switch (e) {
        case "style":
          u = Oa(t);
          break;
        case "script":
          u = _a(t);
      }
      Ee.has(u) ||
        ((t = A(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l
        )),
        Ee.set(u, t),
        a.querySelector(n) !== null ||
          (e === "style" && a.querySelector(Tn(u))) ||
          (e === "script" && a.querySelector(An(u))) ||
          ((e = a.createElement("link")),
          Qt(e, "link", t),
          wt(e),
          a.head.appendChild(e)));
    }
  }
  function Uy(t, e) {
    Je.m(t, e);
    var l = Da;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        n =
          'link[rel="modulepreload"][as="' + me(a) + '"][href="' + me(t) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = _a(t);
      }
      if (
        !Ee.has(u) &&
        ((t = A({ rel: "modulepreload", href: t }, e)),
        Ee.set(u, t),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(An(u))) return;
        }
        (a = l.createElement("link")),
          Qt(a, "link", t),
          wt(a),
          l.head.appendChild(a);
      }
    }
  }
  function Ny(t, e, l) {
    Je.S(t, e, l);
    var a = Da;
    if (a && t) {
      var n = kl(a).hoistableStyles,
        u = Oa(t);
      e = e || "default";
      var c = n.get(u);
      if (!c) {
        var s = { loading: 0, preload: null };
        if ((c = a.querySelector(Tn(u)))) s.loading = 5;
        else {
          (t = A({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = Ee.get(u)) && df(t, l);
          var y = (c = a.createElement("link"));
          wt(y),
            Qt(y, "link", t),
            (y._p = new Promise(function (R, O) {
              (y.onload = R), (y.onerror = O);
            })),
            y.addEventListener("load", function () {
              s.loading |= 1;
            }),
            y.addEventListener("error", function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            Xu(c, e, a);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: s }),
          n.set(u, c);
      }
    }
  }
  function Hy(t, e) {
    Je.X(t, e);
    var l = Da;
    if (l && t) {
      var a = kl(l).hoistableScripts,
        n = _a(t),
        u = a.get(n);
      u ||
        ((u = l.querySelector(An(n))),
        u ||
          ((t = A({ src: t, async: !0 }, e)),
          (e = Ee.get(n)) && hf(t, e),
          (u = l.createElement("script")),
          wt(u),
          Qt(u, "link", t),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Cy(t, e) {
    Je.M(t, e);
    var l = Da;
    if (l && t) {
      var a = kl(l).hoistableScripts,
        n = _a(t),
        u = a.get(n);
      u ||
        ((u = l.querySelector(An(n))),
        u ||
          ((t = A({ src: t, async: !0, type: "module" }, e)),
          (e = Ee.get(n)) && hf(t, e),
          (u = l.createElement("script")),
          wt(u),
          Qt(u, "link", t),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function yd(t, e, l, a) {
    var n = (n = et.current) ? Gu(n) : null;
    if (!n) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = Oa(l.href)),
            (l = kl(n).hoistableStyles),
            (a = l.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = Oa(l.href);
          var u = kl(n).hoistableStyles,
            c = u.get(t);
          if (
            (c ||
              ((n = n.ownerDocument || n),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, c),
              (u = n.querySelector(Tn(t))) &&
                !u._p &&
                ((c.instance = u), (c.state.loading = 5)),
              Ee.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Ee.set(t, l),
                u || qy(n, t, l, c.state))),
            e && a === null)
          )
            throw Error(f(528, ""));
          return c;
        }
        if (e && a !== null) throw Error(f(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = _a(l)),
              (l = kl(n).hoistableScripts),
              (a = l.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(f(444, t));
    }
  }
  function Oa(t) {
    return 'href="' + me(t) + '"';
  }
  function Tn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function vd(t) {
    return A({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function qy(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Qt(e, "link", l),
        wt(e),
        t.head.appendChild(e));
  }
  function _a(t) {
    return '[src="' + me(t) + '"]';
  }
  function An(t) {
    return "script[async]" + t;
  }
  function pd(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + me(l.href) + '"]');
          if (a) return (e.instance = a), wt(a), a;
          var n = A({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            wt(a),
            Qt(a, "style", n),
            Xu(a, l.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          n = Oa(l.href);
          var u = t.querySelector(Tn(n));
          if (u) return (e.state.loading |= 4), (e.instance = u), wt(u), u;
          (a = vd(l)),
            (n = Ee.get(n)) && df(a, n),
            (u = (t.ownerDocument || t).createElement("link")),
            wt(u);
          var c = u;
          return (
            (c._p = new Promise(function (s, y) {
              (c.onload = s), (c.onerror = y);
            })),
            Qt(u, "link", a),
            (e.state.loading |= 4),
            Xu(u, l.precedence, t),
            (e.instance = u)
          );
        case "script":
          return (
            (u = _a(l.src)),
            (n = t.querySelector(An(u)))
              ? ((e.instance = n), wt(n), n)
              : ((a = l),
                (n = Ee.get(u)) && ((a = A({}, l)), hf(a, n)),
                (t = t.ownerDocument || t),
                (n = t.createElement("script")),
                wt(n),
                Qt(n, "link", a),
                t.head.appendChild(n),
                (e.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), Xu(a, l.precedence, t));
    return e.instance;
  }
  function Xu(t, e, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        c = 0;
      c < a.length;
      c++
    ) {
      var s = a[c];
      if (s.dataset.precedence === e) u = s;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(t, u.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function df(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function hf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Qu = null;
  function gd(t, e, l) {
    if (Qu === null) {
      var a = new Map(),
        n = (Qu = new Map());
      n.set(l, a);
    } else (n = Qu), (a = n.get(l)), a || ((a = new Map()), n.set(l, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), l = l.getElementsByTagName(t), n = 0;
      n < l.length;
      n++
    ) {
      var u = l[n];
      if (
        !(
          u[qa] ||
          u[Kt] ||
          (t === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = u.getAttribute(e) || "";
        c = t + c;
        var s = a.get(c);
        s ? s.push(u) : a.set(c, [u]);
      }
    }
    return a;
  }
  function Sd(t, e, l) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function wy(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function bd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Rn = null;
  function By() {}
  function jy(t, e, l) {
    if (Rn === null) throw Error(f(475));
    var a = Rn;
    if (
      e.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var n = Oa(l.href),
          u = t.querySelector(Tn(n));
        if (u) {
          (t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (a.count++, (a = Zu.bind(a)), t.then(a, a)),
            (e.state.loading |= 4),
            (e.instance = u),
            wt(u);
          return;
        }
        (u = t.ownerDocument || t),
          (l = vd(l)),
          (n = Ee.get(n)) && df(l, n),
          (u = u.createElement("link")),
          wt(u);
        var c = u;
        (c._p = new Promise(function (s, y) {
          (c.onload = s), (c.onerror = y);
        })),
          Qt(u, "link", l),
          (e.instance = u);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (a.count++,
          (e = Zu.bind(a)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function Yy() {
    if (Rn === null) throw Error(f(475));
    var t = Rn;
    return (
      t.stylesheets && t.count === 0 && mf(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var l = setTimeout(function () {
              if ((t.stylesheets && mf(t, t.stylesheets), t.unsuspend)) {
                var a = t.unsuspend;
                (t.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(l);
              }
            );
          }
        : null
    );
  }
  function Zu() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) mf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Vu = null;
  function mf(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Vu = new Map()),
        e.forEach(Ly, t),
        (Vu = null),
        Zu.call(t));
  }
  function Ly(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Vu.get(t);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), Vu.set(t, l);
        for (
          var n = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var c = n[u];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (l.set(c.dataset.precedence, c), (a = c));
        }
        a && l.set(null, a);
      }
      (n = e.instance),
        (c = n.getAttribute("data-precedence")),
        (u = l.get(c) || a),
        u === a && l.set(null, n),
        l.set(c, n),
        this.count++,
        (a = Zu.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(n, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var zn = {
    $$typeof: G,
    Provider: null,
    Consumer: null,
    _currentValue: W,
    _currentValue2: W,
    _threadCount: 0,
  };
  function Gy(t, e, l, a, n, u, c, s) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ri(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ri(0)),
      (this.hiddenUpdates = ri(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = s),
      (this.incompleteTransitions = new Map());
  }
  function Ed(t, e, l, a, n, u, c, s, y, R, O, U) {
    return (
      (t = new Gy(t, e, l, c, s, y, R, U)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = ie(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = ki()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: e }),
      Pi(u),
      t
    );
  }
  function Td(t) {
    return t ? ((t = ia), t) : ia;
  }
  function Ad(t, e, l, a, n, u) {
    (n = Td(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = nl(e)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = ul(t, a, e)),
      l !== null && (oe(l, t, e), tn(l, t, e));
  }
  function Rd(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function yf(t, e) {
    Rd(t, e), (t = t.alternate) && Rd(t, e);
  }
  function zd(t) {
    if (t.tag === 13) {
      var e = ua(t, 67108864);
      e !== null && oe(e, t, 67108864), yf(t, 67108864);
    }
  }
  var Ku = !0;
  function Xy(t, e, l, a) {
    var n = _.T;
    _.T = null;
    var u = Y.p;
    try {
      (Y.p = 2), vf(t, e, l, a);
    } finally {
      (Y.p = u), (_.T = n);
    }
  }
  function Qy(t, e, l, a) {
    var n = _.T;
    _.T = null;
    var u = Y.p;
    try {
      (Y.p = 8), vf(t, e, l, a);
    } finally {
      (Y.p = u), (_.T = n);
    }
  }
  function vf(t, e, l, a) {
    if (Ku) {
      var n = pf(a);
      if (n === null) lf(t, e, a, Ju, l), Dd(t, a);
      else if (Vy(n, t, e, l, a)) a.stopPropagation();
      else if ((Dd(t, a), e & 4 && -1 < Zy.indexOf(t))) {
        for (; n !== null; ) {
          var u = Jl(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var c = Ml(u.pendingLanes);
                  if (c !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; c; ) {
                      var y = 1 << (31 - ne(c));
                      (s.entanglements[1] |= y), (c &= ~y);
                    }
                    Ue(u), (dt & 6) === 0 && ((xu = Me() + 500), gn(0));
                  }
                }
                break;
              case 13:
                (s = ua(u, 2)), s !== null && oe(s, u, 2), Nu(), yf(u, 2);
            }
          if (((u = pf(a)), u === null && lf(t, e, a, Ju, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else lf(t, e, a, null, l);
    }
  }
  function pf(t) {
    return (t = Ei(t)), gf(t);
  }
  var Ju = null;
  function gf(t) {
    if (((Ju = null), (t = Kl(t)), t !== null)) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = S(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Ju = t), null;
  }
  function Md(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (_h()) {
          case Yf:
            return 2;
          case Lf:
            return 8;
          case Yn:
          case xh:
            return 32;
          case Gf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Sf = !1,
    gl = null,
    Sl = null,
    bl = null,
    Mn = new Map(),
    Dn = new Map(),
    El = [],
    Zy =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Dd(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        gl = null;
        break;
      case "dragenter":
      case "dragleave":
        Sl = null;
        break;
      case "mouseover":
      case "mouseout":
        bl = null;
        break;
      case "pointerover":
      case "pointerout":
        Mn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Dn.delete(e.pointerId);
    }
  }
  function On(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        e !== null && ((e = Jl(e)), e !== null && zd(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        n !== null && e.indexOf(n) === -1 && e.push(n),
        t);
  }
  function Vy(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return (gl = On(gl, t, e, l, a, n)), !0;
      case "dragenter":
        return (Sl = On(Sl, t, e, l, a, n)), !0;
      case "mouseover":
        return (bl = On(bl, t, e, l, a, n)), !0;
      case "pointerover":
        var u = n.pointerId;
        return Mn.set(u, On(Mn.get(u) || null, t, e, l, a, n)), !0;
      case "gotpointercapture":
        return (
          (u = n.pointerId), Dn.set(u, On(Dn.get(u) || null, t, e, l, a, n)), !0
        );
    }
    return !1;
  }
  function Od(t) {
    var e = Kl(t.target);
    if (e !== null) {
      var l = h(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = S(l)), e !== null)) {
            (t.blockedOn = e),
              jh(t.priority, function () {
                if (l.tag === 13) {
                  var a = se();
                  a = si(a);
                  var n = ua(l, a);
                  n !== null && oe(n, l, a), yf(l, a);
                }
              });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function ku(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = pf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        (bi = a), l.target.dispatchEvent(a), (bi = null);
      } else return (e = Jl(l)), e !== null && zd(e), (t.blockedOn = l), !1;
      e.shift();
    }
    return !0;
  }
  function _d(t, e, l) {
    ku(t) && l.delete(e);
  }
  function Ky() {
    (Sf = !1),
      gl !== null && ku(gl) && (gl = null),
      Sl !== null && ku(Sl) && (Sl = null),
      bl !== null && ku(bl) && (bl = null),
      Mn.forEach(_d),
      Dn.forEach(_d);
  }
  function $u(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Sf ||
        ((Sf = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, Ky)));
  }
  var Wu = null;
  function xd(t) {
    Wu !== t &&
      ((Wu = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        Wu === t && (Wu = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            n = t[e + 2];
          if (typeof a != "function") {
            if (gf(a || l) === null) continue;
            break;
          }
          var u = Jl(l);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            pc(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function _n(t) {
    function e(y) {
      return $u(y, t);
    }
    gl !== null && $u(gl, t),
      Sl !== null && $u(Sl, t),
      bl !== null && $u(bl, t),
      Mn.forEach(e),
      Dn.forEach(e);
    for (var l = 0; l < El.length; l++) {
      var a = El[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < El.length && ((l = El[0]), l.blockedOn === null); )
      Od(l), l.blockedOn === null && El.shift();
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          c = n[It] || null;
        if (typeof u == "function") c || xd(l);
        else if (c) {
          var s = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (c = u[It] || null))) s = c.formAction;
            else if (gf(n) !== null) continue;
          } else s = c.action;
          typeof s == "function" ? (l[a + 1] = s) : (l.splice(a, 3), (a -= 3)),
            xd(l);
        }
      }
  }
  function bf(t) {
    this._internalRoot = t;
  }
  (Iu.prototype.render = bf.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(f(409));
      var l = e.current,
        a = se();
      Ad(l, a, t, e, null, null);
    }),
    (Iu.prototype.unmount = bf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          Ad(t.current, 2, null, t, null, null), Nu(), (e[Vl] = null);
        }
      });
  function Iu(t) {
    this._internalRoot = t;
  }
  Iu.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Kf();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < El.length && e !== 0 && e < El[l].priority; l++);
      El.splice(l, 0, t), l === 0 && Od(t);
    }
  };
  var Ud = r.version;
  if (Ud !== "19.1.0") throw Error(f(527, Ud, "19.1.0"));
  Y.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(f(188))
        : ((t = Object.keys(t).join(",")), Error(f(268, t)));
    return (
      (t = v(e)),
      (t = t !== null ? m(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Jy = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pu.isDisabled && Pu.supportsFiber)
      try {
        (Na = Pu.inject(Jy)), (ae = Pu);
      } catch {}
  }
  return (
    (Un.createRoot = function (t, e) {
      if (!d(t)) throw Error(f(299));
      var l = !1,
        a = "",
        n = Ks,
        u = Js,
        c = ks,
        s = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (s = e.unstable_transitionCallbacks)),
        (e = Ed(t, 1, !1, null, null, l, a, n, u, c, s, null)),
        (t[Vl] = e.current),
        ef(t),
        new bf(e)
      );
    }),
    (Un.hydrateRoot = function (t, e, l) {
      if (!d(t)) throw Error(f(299));
      var a = !1,
        n = "",
        u = Ks,
        c = Js,
        s = ks,
        y = null,
        R = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (c = l.onCaughtError),
          l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (y = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (R = l.formState)),
        (e = Ed(t, 1, !0, e, l ?? null, a, n, u, c, s, y, R)),
        (e.context = Td(null)),
        (l = e.current),
        (a = se()),
        (a = si(a)),
        (n = nl(a)),
        (n.callback = null),
        ul(l, n, a),
        (l = a),
        (e.current.lanes = l),
        Ca(e, l),
        Ue(e),
        (t[Vl] = e.current),
        ef(t),
        new Iu(e)
      );
    }),
    (Un.version = "19.1.0"),
    Un
  );
}
var Gd;
function u0() {
  if (Gd) return Af.exports;
  Gd = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), (Af.exports = n0()), Af.exports;
}
var i0 = u0(),
  Nn = {},
  Xd;
function c0() {
  if (Xd) return Nn;
  (Xd = 1),
    Object.defineProperty(Nn, "__esModule", { value: !0 }),
    (Nn.parse = S),
    (Nn.serialize = m);
  const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    r = /^[\u0021-\u003A\u003C-\u007E]*$/,
    o =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    f = /^[\u0020-\u003A\u003D-\u007E]*$/,
    d = Object.prototype.toString,
    h = (() => {
      const q = function () {};
      return (q.prototype = Object.create(null)), q;
    })();
  function S(q, B) {
    const N = new h(),
      V = q.length;
    if (V < 2) return N;
    const L = (B == null ? void 0 : B.decode) || A;
    let w = 0;
    do {
      const F = q.indexOf("=", w);
      if (F === -1) break;
      const G = q.indexOf(";", w),
        ft = G === -1 ? V : G;
      if (F > ft) {
        w = q.lastIndexOf(";", F - 1) + 1;
        continue;
      }
      const P = E(q, w, F),
        Ut = v(q, F, P),
        zt = q.slice(P, Ut);
      if (N[zt] === void 0) {
        let Ot = E(q, F + 1, ft),
          bt = v(q, ft, Ot);
        const $t = L(q.slice(Ot, bt));
        N[zt] = $t;
      }
      w = ft + 1;
    } while (w < V);
    return N;
  }
  function E(q, B, N) {
    do {
      const V = q.charCodeAt(B);
      if (V !== 32 && V !== 9) return B;
    } while (++B < N);
    return N;
  }
  function v(q, B, N) {
    for (; B > N; ) {
      const V = q.charCodeAt(--B);
      if (V !== 32 && V !== 9) return B + 1;
    }
    return N;
  }
  function m(q, B, N) {
    const V = (N == null ? void 0 : N.encode) || encodeURIComponent;
    if (!i.test(q)) throw new TypeError(`argument name is invalid: ${q}`);
    const L = V(B);
    if (!r.test(L)) throw new TypeError(`argument val is invalid: ${B}`);
    let w = q + "=" + L;
    if (!N) return w;
    if (N.maxAge !== void 0) {
      if (!Number.isInteger(N.maxAge))
        throw new TypeError(`option maxAge is invalid: ${N.maxAge}`);
      w += "; Max-Age=" + N.maxAge;
    }
    if (N.domain) {
      if (!o.test(N.domain))
        throw new TypeError(`option domain is invalid: ${N.domain}`);
      w += "; Domain=" + N.domain;
    }
    if (N.path) {
      if (!f.test(N.path))
        throw new TypeError(`option path is invalid: ${N.path}`);
      w += "; Path=" + N.path;
    }
    if (N.expires) {
      if (!C(N.expires) || !Number.isFinite(N.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${N.expires}`);
      w += "; Expires=" + N.expires.toUTCString();
    }
    if (
      (N.httpOnly && (w += "; HttpOnly"),
      N.secure && (w += "; Secure"),
      N.partitioned && (w += "; Partitioned"),
      N.priority)
    )
      switch (
        typeof N.priority == "string" ? N.priority.toLowerCase() : void 0
      ) {
        case "low":
          w += "; Priority=Low";
          break;
        case "medium":
          w += "; Priority=Medium";
          break;
        case "high":
          w += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${N.priority}`);
      }
    if (N.sameSite)
      switch (
        typeof N.sameSite == "string" ? N.sameSite.toLowerCase() : N.sameSite
      ) {
        case !0:
        case "strict":
          w += "; SameSite=Strict";
          break;
        case "lax":
          w += "; SameSite=Lax";
          break;
        case "none":
          w += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${N.sameSite}`);
      }
    return w;
  }
  function A(q) {
    if (q.indexOf("%") === -1) return q;
    try {
      return decodeURIComponent(q);
    } catch {
      return q;
    }
  }
  function C(q) {
    return d.call(q) === "[object Date]";
  }
  return Nn;
}
c0();
var Qd = "popstate";
function f0(i = {}) {
  function r(d, h) {
    let {
      pathname: S = "/",
      search: E = "",
      hash: v = "",
    } = Zl(d.location.hash.substring(1));
    return (
      !S.startsWith("/") && !S.startsWith(".") && (S = "/" + S),
      xf(
        "",
        { pathname: S, search: E, hash: v },
        (h.state && h.state.usr) || null,
        (h.state && h.state.key) || "default"
      )
    );
  }
  function o(d, h) {
    let S = d.document.querySelector("base"),
      E = "";
    if (S && S.getAttribute("href")) {
      let v = d.location.href,
        m = v.indexOf("#");
      E = m === -1 ? v : v.slice(0, m);
    }
    return E + "#" + (typeof h == "string" ? h : Cn(h));
  }
  function f(d, h) {
    ze(
      d.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        h
      )})`
    );
  }
  return s0(r, o, f, i);
}
function Rt(i, r) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(r);
}
function ze(i, r) {
  if (!i) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function r0() {
  return Math.random().toString(36).substring(2, 10);
}
function Zd(i, r) {
  return { usr: i.state, key: i.key, idx: r };
}
function xf(i, r, o = null, f) {
  return {
    pathname: typeof i == "string" ? i : i.pathname,
    search: "",
    hash: "",
    ...(typeof r == "string" ? Zl(r) : r),
    state: o,
    key: (r && r.key) || f || r0(),
  };
}
function Cn({ pathname: i = "/", search: r = "", hash: o = "" }) {
  return (
    r && r !== "?" && (i += r.charAt(0) === "?" ? r : "?" + r),
    o && o !== "#" && (i += o.charAt(0) === "#" ? o : "#" + o),
    i
  );
}
function Zl(i) {
  let r = {};
  if (i) {
    let o = i.indexOf("#");
    o >= 0 && ((r.hash = i.substring(o)), (i = i.substring(0, o)));
    let f = i.indexOf("?");
    f >= 0 && ((r.search = i.substring(f)), (i = i.substring(0, f))),
      i && (r.pathname = i);
  }
  return r;
}
function s0(i, r, o, f = {}) {
  let { window: d = document.defaultView, v5Compat: h = !1 } = f,
    S = d.history,
    E = "POP",
    v = null,
    m = A();
  m == null && ((m = 0), S.replaceState({ ...S.state, idx: m }, ""));
  function A() {
    return (S.state || { idx: null }).idx;
  }
  function C() {
    E = "POP";
    let L = A(),
      w = L == null ? null : L - m;
    (m = L), v && v({ action: E, location: V.location, delta: w });
  }
  function q(L, w) {
    E = "PUSH";
    let F = xf(V.location, L, w);
    o && o(F, L), (m = A() + 1);
    let G = Zd(F, m),
      ft = V.createHref(F);
    try {
      S.pushState(G, "", ft);
    } catch (P) {
      if (P instanceof DOMException && P.name === "DataCloneError") throw P;
      d.location.assign(ft);
    }
    h && v && v({ action: E, location: V.location, delta: 1 });
  }
  function B(L, w) {
    E = "REPLACE";
    let F = xf(V.location, L, w);
    o && o(F, L), (m = A());
    let G = Zd(F, m),
      ft = V.createHref(F);
    S.replaceState(G, "", ft),
      h && v && v({ action: E, location: V.location, delta: 0 });
  }
  function N(L) {
    return o0(L);
  }
  let V = {
    get action() {
      return E;
    },
    get location() {
      return i(d, S);
    },
    listen(L) {
      if (v) throw new Error("A history only accepts one active listener");
      return (
        d.addEventListener(Qd, C),
        (v = L),
        () => {
          d.removeEventListener(Qd, C), (v = null);
        }
      );
    },
    createHref(L) {
      return r(d, L);
    },
    createURL: N,
    encodeLocation(L) {
      let w = N(L);
      return { pathname: w.pathname, search: w.search, hash: w.hash };
    },
    push: q,
    replace: B,
    go(L) {
      return S.go(L);
    },
  };
  return V;
}
function o0(i, r = !1) {
  let o = "http://localhost";
  typeof window < "u" &&
    (o =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Rt(o, "No window.location.(origin|href) available to create URL");
  let f = typeof i == "string" ? i : Cn(i);
  return (
    (f = f.replace(/ $/, "%20")),
    !r && f.startsWith("//") && (f = o + f),
    new URL(f, o)
  );
}
function uh(i, r, o = "/") {
  return d0(i, r, o, !1);
}
function d0(i, r, o, f) {
  let d = typeof r == "string" ? Zl(r) : r,
    h = We(d.pathname || "/", o);
  if (h == null) return null;
  let S = ih(i);
  h0(S);
  let E = null;
  for (let v = 0; E == null && v < S.length; ++v) {
    let m = R0(h);
    E = T0(S[v], m, f);
  }
  return E;
}
function ih(i, r = [], o = [], f = "") {
  let d = (h, S, E) => {
    let v = {
      relativePath: E === void 0 ? h.path || "" : E,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: S,
      route: h,
    };
    v.relativePath.startsWith("/") &&
      (Rt(
        v.relativePath.startsWith(f),
        `Absolute route path "${v.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (v.relativePath = v.relativePath.slice(f.length)));
    let m = $e([f, v.relativePath]),
      A = o.concat(v);
    h.children &&
      h.children.length > 0 &&
      (Rt(
        h.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
      ),
      ih(h.children, r, A, m)),
      !(h.path == null && !h.index) &&
        r.push({ path: m, score: b0(m, h.index), routesMeta: A });
  };
  return (
    i.forEach((h, S) => {
      var E;
      if (h.path === "" || !((E = h.path) != null && E.includes("?"))) d(h, S);
      else for (let v of ch(h.path)) d(h, S, v);
    }),
    r
  );
}
function ch(i) {
  let r = i.split("/");
  if (r.length === 0) return [];
  let [o, ...f] = r,
    d = o.endsWith("?"),
    h = o.replace(/\?$/, "");
  if (f.length === 0) return d ? [h, ""] : [h];
  let S = ch(f.join("/")),
    E = [];
  return (
    E.push(...S.map((v) => (v === "" ? h : [h, v].join("/")))),
    d && E.push(...S),
    E.map((v) => (i.startsWith("/") && v === "" ? "/" : v))
  );
}
function h0(i) {
  i.sort((r, o) =>
    r.score !== o.score
      ? o.score - r.score
      : E0(
          r.routesMeta.map((f) => f.childrenIndex),
          o.routesMeta.map((f) => f.childrenIndex)
        )
  );
}
var m0 = /^:[\w-]+$/,
  y0 = 3,
  v0 = 2,
  p0 = 1,
  g0 = 10,
  S0 = -2,
  Vd = (i) => i === "*";
function b0(i, r) {
  let o = i.split("/"),
    f = o.length;
  return (
    o.some(Vd) && (f += S0),
    r && (f += v0),
    o
      .filter((d) => !Vd(d))
      .reduce((d, h) => d + (m0.test(h) ? y0 : h === "" ? p0 : g0), f)
  );
}
function E0(i, r) {
  return i.length === r.length && i.slice(0, -1).every((f, d) => f === r[d])
    ? i[i.length - 1] - r[r.length - 1]
    : 0;
}
function T0(i, r, o = !1) {
  let { routesMeta: f } = i,
    d = {},
    h = "/",
    S = [];
  for (let E = 0; E < f.length; ++E) {
    let v = f[E],
      m = E === f.length - 1,
      A = h === "/" ? r : r.slice(h.length) || "/",
      C = li(
        { path: v.relativePath, caseSensitive: v.caseSensitive, end: m },
        A
      ),
      q = v.route;
    if (
      (!C &&
        m &&
        o &&
        !f[f.length - 1].route.index &&
        (C = li(
          { path: v.relativePath, caseSensitive: v.caseSensitive, end: !1 },
          A
        )),
      !C)
    )
      return null;
    Object.assign(d, C.params),
      S.push({
        params: d,
        pathname: $e([h, C.pathname]),
        pathnameBase: O0($e([h, C.pathnameBase])),
        route: q,
      }),
      C.pathnameBase !== "/" && (h = $e([h, C.pathnameBase]));
  }
  return S;
}
function li(i, r) {
  typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
  let [o, f] = A0(i.path, i.caseSensitive, i.end),
    d = r.match(o);
  if (!d) return null;
  let h = d[0],
    S = h.replace(/(.)\/+$/, "$1"),
    E = d.slice(1);
  return {
    params: f.reduce((m, { paramName: A, isOptional: C }, q) => {
      if (A === "*") {
        let N = E[q] || "";
        S = h.slice(0, h.length - N.length).replace(/(.)\/+$/, "$1");
      }
      const B = E[q];
      return (
        C && !B ? (m[A] = void 0) : (m[A] = (B || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: h,
    pathnameBase: S,
    pattern: i,
  };
}
function A0(i, r = !1, o = !0) {
  ze(
    i === "*" || !i.endsWith("*") || i.endsWith("/*"),
    `Route path "${i}" will be treated as if it were "${i.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let f = [],
    d =
      "^" +
      i
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (S, E, v) => (
            f.push({ paramName: E, isOptional: v != null }),
            v ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    i.endsWith("*")
      ? (f.push({ paramName: "*" }),
        (d += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : o
      ? (d += "\\/*$")
      : i !== "" && i !== "/" && (d += "(?:(?=\\/|$))"),
    [new RegExp(d, r ? void 0 : "i"), f]
  );
}
function R0(i) {
  try {
    return i
      .split("/")
      .map((r) => decodeURIComponent(r).replace(/\//g, "%2F"))
      .join("/");
  } catch (r) {
    return (
      ze(
        !1,
        `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
      ),
      i
    );
  }
}
function We(i, r) {
  if (r === "/") return i;
  if (!i.toLowerCase().startsWith(r.toLowerCase())) return null;
  let o = r.endsWith("/") ? r.length - 1 : r.length,
    f = i.charAt(o);
  return f && f !== "/" ? null : i.slice(o) || "/";
}
function z0(i, r = "/") {
  let {
    pathname: o,
    search: f = "",
    hash: d = "",
  } = typeof i == "string" ? Zl(i) : i;
  return {
    pathname: o ? (o.startsWith("/") ? o : M0(o, r)) : r,
    search: _0(f),
    hash: x0(d),
  };
}
function M0(i, r) {
  let o = r.replace(/\/+$/, "").split("/");
  return (
    i.split("/").forEach((d) => {
      d === ".." ? o.length > 1 && o.pop() : d !== "." && o.push(d);
    }),
    o.length > 1 ? o.join("/") : "/"
  );
}
function Df(i, r, o, f) {
  return `Cannot include a '${i}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    f
  )}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function D0(i) {
  return i.filter(
    (r, o) => o === 0 || (r.route.path && r.route.path.length > 0)
  );
}
function fh(i) {
  let r = D0(i);
  return r.map((o, f) => (f === r.length - 1 ? o.pathname : o.pathnameBase));
}
function rh(i, r, o, f = !1) {
  let d;
  typeof i == "string"
    ? (d = Zl(i))
    : ((d = { ...i }),
      Rt(
        !d.pathname || !d.pathname.includes("?"),
        Df("?", "pathname", "search", d)
      ),
      Rt(
        !d.pathname || !d.pathname.includes("#"),
        Df("#", "pathname", "hash", d)
      ),
      Rt(!d.search || !d.search.includes("#"), Df("#", "search", "hash", d)));
  let h = i === "" || d.pathname === "",
    S = h ? "/" : d.pathname,
    E;
  if (S == null) E = o;
  else {
    let C = r.length - 1;
    if (!f && S.startsWith("..")) {
      let q = S.split("/");
      for (; q[0] === ".."; ) q.shift(), (C -= 1);
      d.pathname = q.join("/");
    }
    E = C >= 0 ? r[C] : "/";
  }
  let v = z0(d, E),
    m = S && S !== "/" && S.endsWith("/"),
    A = (h || S === ".") && o.endsWith("/");
  return !v.pathname.endsWith("/") && (m || A) && (v.pathname += "/"), v;
}
var $e = (i) => i.join("/").replace(/\/\/+/g, "/"),
  O0 = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
  _0 = (i) => (!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i),
  x0 = (i) => (!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i);
function U0(i) {
  return (
    i != null &&
    typeof i.status == "number" &&
    typeof i.statusText == "string" &&
    typeof i.internal == "boolean" &&
    "data" in i
  );
}
var sh = ["POST", "PUT", "PATCH", "DELETE"];
new Set(sh);
var N0 = ["GET", ...sh];
new Set(N0);
var Ua = D.createContext(null);
Ua.displayName = "DataRouter";
var ai = D.createContext(null);
ai.displayName = "DataRouterState";
var oh = D.createContext({ isTransitioning: !1 });
oh.displayName = "ViewTransition";
var H0 = D.createContext(new Map());
H0.displayName = "Fetchers";
var C0 = D.createContext(null);
C0.displayName = "Await";
var Ne = D.createContext(null);
Ne.displayName = "Navigation";
var qn = D.createContext(null);
qn.displayName = "Location";
var Ie = D.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ie.displayName = "Route";
var Cf = D.createContext(null);
Cf.displayName = "RouteError";
function q0(i, { relative: r } = {}) {
  Rt(
    wn(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: o, navigator: f } = D.useContext(Ne),
    { hash: d, pathname: h, search: S } = Bn(i, { relative: r }),
    E = h;
  return (
    o !== "/" && (E = h === "/" ? o : $e([o, h])),
    f.createHref({ pathname: E, search: S, hash: d })
  );
}
function wn() {
  return D.useContext(qn) != null;
}
function Al() {
  return (
    Rt(
      wn(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    D.useContext(qn).location
  );
}
var dh =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function hh(i) {
  D.useContext(Ne).static || D.useLayoutEffect(i);
}
function mh() {
  let { isDataRoute: i } = D.useContext(Ie);
  return i ? k0() : w0();
}
function w0() {
  Rt(
    wn(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let i = D.useContext(Ua),
    { basename: r, navigator: o } = D.useContext(Ne),
    { matches: f } = D.useContext(Ie),
    { pathname: d } = Al(),
    h = JSON.stringify(fh(f)),
    S = D.useRef(!1);
  return (
    hh(() => {
      S.current = !0;
    }),
    D.useCallback(
      (v, m = {}) => {
        if ((ze(S.current, dh), !S.current)) return;
        if (typeof v == "number") {
          o.go(v);
          return;
        }
        let A = rh(v, JSON.parse(h), d, m.relative === "path");
        i == null &&
          r !== "/" &&
          (A.pathname = A.pathname === "/" ? r : $e([r, A.pathname])),
          (m.replace ? o.replace : o.push)(A, m.state, m);
      },
      [r, o, h, d, i]
    )
  );
}
D.createContext(null);
function Bn(i, { relative: r } = {}) {
  let { matches: o } = D.useContext(Ie),
    { pathname: f } = Al(),
    d = JSON.stringify(fh(o));
  return D.useMemo(() => rh(i, JSON.parse(d), f, r === "path"), [i, d, f, r]);
}
function B0(i, r) {
  return yh(i, r);
}
function yh(i, r, o, f) {
  var F;
  Rt(
    wn(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d, static: h } = D.useContext(Ne),
    { matches: S } = D.useContext(Ie),
    E = S[S.length - 1],
    v = E ? E.params : {},
    m = E ? E.pathname : "/",
    A = E ? E.pathnameBase : "/",
    C = E && E.route;
  {
    let G = (C && C.path) || "";
    vh(
      m,
      !C || G.endsWith("*") || G.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${
        G === "/" ? "*" : `${G}/*`
      }">.`
    );
  }
  let q = Al(),
    B;
  if (r) {
    let G = typeof r == "string" ? Zl(r) : r;
    Rt(
      A === "/" || ((F = G.pathname) == null ? void 0 : F.startsWith(A)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${A}" but pathname "${G.pathname}" was given in the \`location\` prop.`
    ),
      (B = G);
  } else B = q;
  let N = B.pathname || "/",
    V = N;
  if (A !== "/") {
    let G = A.replace(/^\//, "").split("/");
    V = "/" + N.replace(/^\//, "").split("/").slice(G.length).join("/");
  }
  let L =
    !h && o && o.matches && o.matches.length > 0
      ? o.matches
      : uh(i, { pathname: V });
  ze(
    C || L != null,
    `No routes matched location "${B.pathname}${B.search}${B.hash}" `
  ),
    ze(
      L == null ||
        L[L.length - 1].route.element !== void 0 ||
        L[L.length - 1].route.Component !== void 0 ||
        L[L.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${B.pathname}${B.search}${B.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let w = X0(
    L &&
      L.map((G) =>
        Object.assign({}, G, {
          params: Object.assign({}, v, G.params),
          pathname: $e([
            A,
            d.encodeLocation
              ? d.encodeLocation(G.pathname).pathname
              : G.pathname,
          ]),
          pathnameBase:
            G.pathnameBase === "/"
              ? A
              : $e([
                  A,
                  d.encodeLocation
                    ? d.encodeLocation(G.pathnameBase).pathname
                    : G.pathnameBase,
                ]),
        })
      ),
    S,
    o,
    f
  );
  return r && w
    ? D.createElement(
        qn.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...B,
            },
            navigationType: "POP",
          },
        },
        w
      )
    : w;
}
function j0() {
  let i = J0(),
    r = U0(i)
      ? `${i.status} ${i.statusText}`
      : i instanceof Error
      ? i.message
      : JSON.stringify(i),
    o = i instanceof Error ? i.stack : null,
    f = "rgba(200,200,200, 0.5)",
    d = { padding: "0.5rem", backgroundColor: f },
    h = { padding: "2px 4px", backgroundColor: f },
    S = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", i),
    (S = D.createElement(
      D.Fragment,
      null,
      D.createElement("p", null, "💿 Hey developer 👋"),
      D.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        D.createElement("code", { style: h }, "ErrorBoundary"),
        " or",
        " ",
        D.createElement("code", { style: h }, "errorElement"),
        " prop on your route."
      )
    )),
    D.createElement(
      D.Fragment,
      null,
      D.createElement("h2", null, "Unexpected Application Error!"),
      D.createElement("h3", { style: { fontStyle: "italic" } }, r),
      o ? D.createElement("pre", { style: d }, o) : null,
      S
    )
  );
}
var Y0 = D.createElement(j0, null),
  L0 = class extends D.Component {
    constructor(i) {
      super(i),
        (this.state = {
          location: i.location,
          revalidation: i.revalidation,
          error: i.error,
        });
    }
    static getDerivedStateFromError(i) {
      return { error: i };
    }
    static getDerivedStateFromProps(i, r) {
      return r.location !== i.location ||
        (r.revalidation !== "idle" && i.revalidation === "idle")
        ? { error: i.error, location: i.location, revalidation: i.revalidation }
        : {
            error: i.error !== void 0 ? i.error : r.error,
            location: r.location,
            revalidation: i.revalidation || r.revalidation,
          };
    }
    componentDidCatch(i, r) {
      console.error(
        "React Router caught the following error during render",
        i,
        r
      );
    }
    render() {
      return this.state.error !== void 0
        ? D.createElement(
            Ie.Provider,
            { value: this.props.routeContext },
            D.createElement(Cf.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function G0({ routeContext: i, match: r, children: o }) {
  let f = D.useContext(Ua);
  return (
    f &&
      f.static &&
      f.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (f.staticContext._deepestRenderedBoundaryId = r.route.id),
    D.createElement(Ie.Provider, { value: i }, o)
  );
}
function X0(i, r = [], o = null, f = null) {
  if (i == null) {
    if (!o) return null;
    if (o.errors) i = o.matches;
    else if (r.length === 0 && !o.initialized && o.matches.length > 0)
      i = o.matches;
    else return null;
  }
  let d = i,
    h = o == null ? void 0 : o.errors;
  if (h != null) {
    let v = d.findIndex(
      (m) => m.route.id && (h == null ? void 0 : h[m.route.id]) !== void 0
    );
    Rt(
      v >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        h
      ).join(",")}`
    ),
      (d = d.slice(0, Math.min(d.length, v + 1)));
  }
  let S = !1,
    E = -1;
  if (o)
    for (let v = 0; v < d.length; v++) {
      let m = d[v];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (E = v),
        m.route.id)
      ) {
        let { loaderData: A, errors: C } = o,
          q =
            m.route.loader &&
            !A.hasOwnProperty(m.route.id) &&
            (!C || C[m.route.id] === void 0);
        if (m.route.lazy || q) {
          (S = !0), E >= 0 ? (d = d.slice(0, E + 1)) : (d = [d[0]]);
          break;
        }
      }
    }
  return d.reduceRight((v, m, A) => {
    let C,
      q = !1,
      B = null,
      N = null;
    o &&
      ((C = h && m.route.id ? h[m.route.id] : void 0),
      (B = m.route.errorElement || Y0),
      S &&
        (E < 0 && A === 0
          ? (vh(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (q = !0),
            (N = null))
          : E === A &&
            ((q = !0), (N = m.route.hydrateFallbackElement || null))));
    let V = r.concat(d.slice(0, A + 1)),
      L = () => {
        let w;
        return (
          C
            ? (w = B)
            : q
            ? (w = N)
            : m.route.Component
            ? (w = D.createElement(m.route.Component, null))
            : m.route.element
            ? (w = m.route.element)
            : (w = v),
          D.createElement(G0, {
            match: m,
            routeContext: { outlet: v, matches: V, isDataRoute: o != null },
            children: w,
          })
        );
      };
    return o && (m.route.ErrorBoundary || m.route.errorElement || A === 0)
      ? D.createElement(L0, {
          location: o.location,
          revalidation: o.revalidation,
          component: B,
          error: C,
          children: L(),
          routeContext: { outlet: null, matches: V, isDataRoute: !0 },
        })
      : L();
  }, null);
}
function qf(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Q0(i) {
  let r = D.useContext(Ua);
  return Rt(r, qf(i)), r;
}
function Z0(i) {
  let r = D.useContext(ai);
  return Rt(r, qf(i)), r;
}
function V0(i) {
  let r = D.useContext(Ie);
  return Rt(r, qf(i)), r;
}
function wf(i) {
  let r = V0(i),
    o = r.matches[r.matches.length - 1];
  return (
    Rt(
      o.route.id,
      `${i} can only be used on routes that contain a unique "id"`
    ),
    o.route.id
  );
}
function K0() {
  return wf("useRouteId");
}
function J0() {
  var f;
  let i = D.useContext(Cf),
    r = Z0("useRouteError"),
    o = wf("useRouteError");
  return i !== void 0 ? i : (f = r.errors) == null ? void 0 : f[o];
}
function k0() {
  let { router: i } = Q0("useNavigate"),
    r = wf("useNavigate"),
    o = D.useRef(!1);
  return (
    hh(() => {
      o.current = !0;
    }),
    D.useCallback(
      async (d, h = {}) => {
        ze(o.current, dh),
          o.current &&
            (typeof d == "number"
              ? i.navigate(d)
              : await i.navigate(d, { fromRouteId: r, ...h }));
      },
      [i, r]
    )
  );
}
var Kd = {};
function vh(i, r, o) {
  !r && !Kd[i] && ((Kd[i] = !0), ze(!1, o));
}
D.memo($0);
function $0({ routes: i, future: r, state: o }) {
  return yh(i, void 0, o, r);
}
function Uf(i) {
  Rt(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function W0({
  basename: i = "/",
  children: r = null,
  location: o,
  navigationType: f = "POP",
  navigator: d,
  static: h = !1,
}) {
  Rt(
    !wn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let S = i.replace(/^\/*/, "/"),
    E = D.useMemo(
      () => ({ basename: S, navigator: d, static: h, future: {} }),
      [S, d, h]
    );
  typeof o == "string" && (o = Zl(o));
  let {
      pathname: v = "/",
      search: m = "",
      hash: A = "",
      state: C = null,
      key: q = "default",
    } = o,
    B = D.useMemo(() => {
      let N = We(v, S);
      return N == null
        ? null
        : {
            location: { pathname: N, search: m, hash: A, state: C, key: q },
            navigationType: f,
          };
    }, [S, v, m, A, C, q, f]);
  return (
    ze(
      B != null,
      `<Router basename="${S}"> is not able to match the URL "${v}${m}${A}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    B == null
      ? null
      : D.createElement(
          Ne.Provider,
          { value: E },
          D.createElement(qn.Provider, { children: r, value: B })
        )
  );
}
function I0({ children: i, location: r }) {
  return B0(Nf(i), r);
}
function Nf(i, r = []) {
  let o = [];
  return (
    D.Children.forEach(i, (f, d) => {
      if (!D.isValidElement(f)) return;
      let h = [...r, d];
      if (f.type === D.Fragment) {
        o.push.apply(o, Nf(f.props.children, h));
        return;
      }
      Rt(
        f.type === Uf,
        `[${
          typeof f.type == "string" ? f.type : f.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Rt(
          !f.props.index || !f.props.children,
          "An index route cannot have child routes."
        );
      let S = {
        id: f.props.id || h.join("-"),
        caseSensitive: f.props.caseSensitive,
        element: f.props.element,
        Component: f.props.Component,
        index: f.props.index,
        path: f.props.path,
        loader: f.props.loader,
        action: f.props.action,
        hydrateFallbackElement: f.props.hydrateFallbackElement,
        HydrateFallback: f.props.HydrateFallback,
        errorElement: f.props.errorElement,
        ErrorBoundary: f.props.ErrorBoundary,
        hasErrorBoundary:
          f.props.hasErrorBoundary === !0 ||
          f.props.ErrorBoundary != null ||
          f.props.errorElement != null,
        shouldRevalidate: f.props.shouldRevalidate,
        handle: f.props.handle,
        lazy: f.props.lazy,
      };
      f.props.children && (S.children = Nf(f.props.children, h)), o.push(S);
    }),
    o
  );
}
var ti = "get",
  ei = "application/x-www-form-urlencoded";
function ni(i) {
  return i != null && typeof i.tagName == "string";
}
function P0(i) {
  return ni(i) && i.tagName.toLowerCase() === "button";
}
function F0(i) {
  return ni(i) && i.tagName.toLowerCase() === "form";
}
function tv(i) {
  return ni(i) && i.tagName.toLowerCase() === "input";
}
function ev(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function lv(i, r) {
  return i.button === 0 && (!r || r === "_self") && !ev(i);
}
var Fu = null;
function av() {
  if (Fu === null)
    try {
      new FormData(document.createElement("form"), 0), (Fu = !1);
    } catch {
      Fu = !0;
    }
  return Fu;
}
var nv = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Of(i) {
  return i != null && !nv.has(i)
    ? (ze(
        !1,
        `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ei}"`
      ),
      null)
    : i;
}
function uv(i, r) {
  let o, f, d, h, S;
  if (F0(i)) {
    let E = i.getAttribute("action");
    (f = E ? We(E, r) : null),
      (o = i.getAttribute("method") || ti),
      (d = Of(i.getAttribute("enctype")) || ei),
      (h = new FormData(i));
  } else if (P0(i) || (tv(i) && (i.type === "submit" || i.type === "image"))) {
    let E = i.form;
    if (E == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let v = i.getAttribute("formaction") || E.getAttribute("action");
    if (
      ((f = v ? We(v, r) : null),
      (o = i.getAttribute("formmethod") || E.getAttribute("method") || ti),
      (d =
        Of(i.getAttribute("formenctype")) ||
        Of(E.getAttribute("enctype")) ||
        ei),
      (h = new FormData(E, i)),
      !av())
    ) {
      let { name: m, type: A, value: C } = i;
      if (A === "image") {
        let q = m ? `${m}.` : "";
        h.append(`${q}x`, "0"), h.append(`${q}y`, "0");
      } else m && h.append(m, C);
    }
  } else {
    if (ni(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (o = ti), (f = null), (d = ei), (S = i);
  }
  return (
    h && d === "text/plain" && ((S = h), (h = void 0)),
    { action: f, method: o.toLowerCase(), encType: d, formData: h, body: S }
  );
}
function Bf(i, r) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(r);
}
async function iv(i, r) {
  if (i.id in r) return r[i.id];
  try {
    let o = await import(i.module);
    return (r[i.id] = o), o;
  } catch (o) {
    return (
      console.error(
        `Error loading route module \`${i.module}\`, reloading page...`
      ),
      console.error(o),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function cv(i) {
  return i == null
    ? !1
    : i.href == null
    ? i.rel === "preload" &&
      typeof i.imageSrcSet == "string" &&
      typeof i.imageSizes == "string"
    : typeof i.rel == "string" && typeof i.href == "string";
}
async function fv(i, r, o) {
  let f = await Promise.all(
    i.map(async (d) => {
      let h = r.routes[d.route.id];
      if (h) {
        let S = await iv(h, o);
        return S.links ? S.links() : [];
      }
      return [];
    })
  );
  return dv(
    f
      .flat(1)
      .filter(cv)
      .filter((d) => d.rel === "stylesheet" || d.rel === "preload")
      .map((d) =>
        d.rel === "stylesheet"
          ? { ...d, rel: "prefetch", as: "style" }
          : { ...d, rel: "prefetch" }
      )
  );
}
function Jd(i, r, o, f, d, h) {
  let S = (v, m) => (o[m] ? v.route.id !== o[m].route.id : !0),
    E = (v, m) => {
      var A;
      return (
        o[m].pathname !== v.pathname ||
        (((A = o[m].route.path) == null ? void 0 : A.endsWith("*")) &&
          o[m].params["*"] !== v.params["*"])
      );
    };
  return h === "assets"
    ? r.filter((v, m) => S(v, m) || E(v, m))
    : h === "data"
    ? r.filter((v, m) => {
        var C;
        let A = f.routes[v.route.id];
        if (!A || !A.hasLoader) return !1;
        if (S(v, m) || E(v, m)) return !0;
        if (v.route.shouldRevalidate) {
          let q = v.route.shouldRevalidate({
            currentUrl: new URL(d.pathname + d.search + d.hash, window.origin),
            currentParams: ((C = o[0]) == null ? void 0 : C.params) || {},
            nextUrl: new URL(i, window.origin),
            nextParams: v.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof q == "boolean") return q;
        }
        return !0;
      })
    : [];
}
function rv(i, r, { includeHydrateFallback: o } = {}) {
  return sv(
    i
      .map((f) => {
        let d = r.routes[f.route.id];
        if (!d) return [];
        let h = [d.module];
        return (
          d.clientActionModule && (h = h.concat(d.clientActionModule)),
          d.clientLoaderModule && (h = h.concat(d.clientLoaderModule)),
          o &&
            d.hydrateFallbackModule &&
            (h = h.concat(d.hydrateFallbackModule)),
          d.imports && (h = h.concat(d.imports)),
          h
        );
      })
      .flat(1)
  );
}
function sv(i) {
  return [...new Set(i)];
}
function ov(i) {
  let r = {},
    o = Object.keys(i).sort();
  for (let f of o) r[f] = i[f];
  return r;
}
function dv(i, r) {
  let o = new Set();
  return (
    new Set(r),
    i.reduce((f, d) => {
      let h = JSON.stringify(ov(d));
      return o.has(h) || (o.add(h), f.push({ key: h, link: d })), f;
    }, [])
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var hv = new Set([100, 101, 204, 205]);
function mv(i, r) {
  let o =
    typeof i == "string"
      ? new URL(
          i,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : i;
  return (
    o.pathname === "/"
      ? (o.pathname = "_root.data")
      : r && We(o.pathname, r) === "/"
      ? (o.pathname = `${r.replace(/\/$/, "")}/_root.data`)
      : (o.pathname = `${o.pathname.replace(/\/$/, "")}.data`),
    o
  );
}
function ph() {
  let i = D.useContext(Ua);
  return (
    Bf(
      i,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    i
  );
}
function yv() {
  let i = D.useContext(ai);
  return (
    Bf(
      i,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    i
  );
}
var jf = D.createContext(void 0);
jf.displayName = "FrameworkContext";
function gh() {
  let i = D.useContext(jf);
  return (
    Bf(i, "You must render this element inside a <HydratedRouter> element"), i
  );
}
function vv(i, r) {
  let o = D.useContext(jf),
    [f, d] = D.useState(!1),
    [h, S] = D.useState(!1),
    {
      onFocus: E,
      onBlur: v,
      onMouseEnter: m,
      onMouseLeave: A,
      onTouchStart: C,
    } = r,
    q = D.useRef(null);
  D.useEffect(() => {
    if ((i === "render" && S(!0), i === "viewport")) {
      let V = (w) => {
          w.forEach((F) => {
            S(F.isIntersecting);
          });
        },
        L = new IntersectionObserver(V, { threshold: 0.5 });
      return (
        q.current && L.observe(q.current),
        () => {
          L.disconnect();
        }
      );
    }
  }, [i]),
    D.useEffect(() => {
      if (f) {
        let V = setTimeout(() => {
          S(!0);
        }, 100);
        return () => {
          clearTimeout(V);
        };
      }
    }, [f]);
  let B = () => {
      d(!0);
    },
    N = () => {
      d(!1), S(!1);
    };
  return o
    ? i !== "intent"
      ? [h, q, {}]
      : [
          h,
          q,
          {
            onFocus: Hn(E, B),
            onBlur: Hn(v, N),
            onMouseEnter: Hn(m, B),
            onMouseLeave: Hn(A, N),
            onTouchStart: Hn(C, B),
          },
        ]
    : [!1, q, {}];
}
function Hn(i, r) {
  return (o) => {
    i && i(o), o.defaultPrevented || r(o);
  };
}
function pv({ page: i, ...r }) {
  let { router: o } = ph(),
    f = D.useMemo(() => uh(o.routes, i, o.basename), [o.routes, i, o.basename]);
  return f ? D.createElement(Sv, { page: i, matches: f, ...r }) : null;
}
function gv(i) {
  let { manifest: r, routeModules: o } = gh(),
    [f, d] = D.useState([]);
  return (
    D.useEffect(() => {
      let h = !1;
      return (
        fv(i, r, o).then((S) => {
          h || d(S);
        }),
        () => {
          h = !0;
        }
      );
    }, [i, r, o]),
    f
  );
}
function Sv({ page: i, matches: r, ...o }) {
  let f = Al(),
    { manifest: d, routeModules: h } = gh(),
    { basename: S } = ph(),
    { loaderData: E, matches: v } = yv(),
    m = D.useMemo(() => Jd(i, r, v, d, f, "data"), [i, r, v, d, f]),
    A = D.useMemo(() => Jd(i, r, v, d, f, "assets"), [i, r, v, d, f]),
    C = D.useMemo(() => {
      if (i === f.pathname + f.search + f.hash) return [];
      let N = new Set(),
        V = !1;
      if (
        (r.forEach((w) => {
          var G;
          let F = d.routes[w.route.id];
          !F ||
            !F.hasLoader ||
            ((!m.some((ft) => ft.route.id === w.route.id) &&
              w.route.id in E &&
              (G = h[w.route.id]) != null &&
              G.shouldRevalidate) ||
            F.hasClientLoader
              ? (V = !0)
              : N.add(w.route.id));
        }),
        N.size === 0)
      )
        return [];
      let L = mv(i, S);
      return (
        V &&
          N.size > 0 &&
          L.searchParams.set(
            "_routes",
            r
              .filter((w) => N.has(w.route.id))
              .map((w) => w.route.id)
              .join(",")
          ),
        [L.pathname + L.search]
      );
    }, [S, E, f, d, m, r, i, h]),
    q = D.useMemo(() => rv(A, d), [A, d]),
    B = gv(A);
  return D.createElement(
    D.Fragment,
    null,
    C.map((N) =>
      D.createElement("link", {
        key: N,
        rel: "prefetch",
        as: "fetch",
        href: N,
        ...o,
      })
    ),
    q.map((N) =>
      D.createElement("link", { key: N, rel: "modulepreload", href: N, ...o })
    ),
    B.map(({ key: N, link: V }) => D.createElement("link", { key: N, ...V }))
  );
}
function bv(...i) {
  return (r) => {
    i.forEach((o) => {
      typeof o == "function" ? o(r) : o != null && (o.current = r);
    });
  };
}
var Sh =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Sh && (window.__reactRouterVersion = "7.6.0");
} catch {}
function Ev({ basename: i, children: r, window: o }) {
  let f = D.useRef();
  f.current == null && (f.current = f0({ window: o, v5Compat: !0 }));
  let d = f.current,
    [h, S] = D.useState({ action: d.action, location: d.location }),
    E = D.useCallback(
      (v) => {
        D.startTransition(() => S(v));
      },
      [S]
    );
  return (
    D.useLayoutEffect(() => d.listen(E), [d, E]),
    D.createElement(W0, {
      basename: i,
      children: r,
      location: h.location,
      navigationType: h.action,
      navigator: d,
    })
  );
}
var bh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Eh = D.forwardRef(function (
    {
      onClick: r,
      discover: o = "render",
      prefetch: f = "none",
      relative: d,
      reloadDocument: h,
      replace: S,
      state: E,
      target: v,
      to: m,
      preventScrollReset: A,
      viewTransition: C,
      ...q
    },
    B
  ) {
    let { basename: N } = D.useContext(Ne),
      V = typeof m == "string" && bh.test(m),
      L,
      w = !1;
    if (typeof m == "string" && V && ((L = m), Sh))
      try {
        let bt = new URL(window.location.href),
          $t = m.startsWith("//") ? new URL(bt.protocol + m) : new URL(m),
          de = We($t.pathname, N);
        $t.origin === bt.origin && de != null
          ? (m = de + $t.search + $t.hash)
          : (w = !0);
      } catch {
        ze(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let F = q0(m, { relative: d }),
      [G, ft, P] = vv(f, q),
      Ut = zv(m, {
        replace: S,
        state: E,
        target: v,
        preventScrollReset: A,
        relative: d,
        viewTransition: C,
      });
    function zt(bt) {
      r && r(bt), bt.defaultPrevented || Ut(bt);
    }
    let Ot = D.createElement("a", {
      ...q,
      ...P,
      href: L || F,
      onClick: w || h ? r : zt,
      ref: bv(B, ft),
      target: v,
      "data-discover": !V && o === "render" ? "true" : void 0,
    });
    return G && !V
      ? D.createElement(D.Fragment, null, Ot, D.createElement(pv, { page: F }))
      : Ot;
  });
Eh.displayName = "Link";
var Tv = D.forwardRef(function (
  {
    "aria-current": r = "page",
    caseSensitive: o = !1,
    className: f = "",
    end: d = !1,
    style: h,
    to: S,
    viewTransition: E,
    children: v,
    ...m
  },
  A
) {
  let C = Bn(S, { relative: m.relative }),
    q = Al(),
    B = D.useContext(ai),
    { navigator: N, basename: V } = D.useContext(Ne),
    L = B != null && xv(C) && E === !0,
    w = N.encodeLocation ? N.encodeLocation(C).pathname : C.pathname,
    F = q.pathname,
    G =
      B && B.navigation && B.navigation.location
        ? B.navigation.location.pathname
        : null;
  o ||
    ((F = F.toLowerCase()),
    (G = G ? G.toLowerCase() : null),
    (w = w.toLowerCase())),
    G && V && (G = We(G, V) || G);
  const ft = w !== "/" && w.endsWith("/") ? w.length - 1 : w.length;
  let P = F === w || (!d && F.startsWith(w) && F.charAt(ft) === "/"),
    Ut =
      G != null &&
      (G === w || (!d && G.startsWith(w) && G.charAt(w.length) === "/")),
    zt = { isActive: P, isPending: Ut, isTransitioning: L },
    Ot = P ? r : void 0,
    bt;
  typeof f == "function"
    ? (bt = f(zt))
    : (bt = [
        f,
        P ? "active" : null,
        Ut ? "pending" : null,
        L ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let $t = typeof h == "function" ? h(zt) : h;
  return D.createElement(
    Eh,
    {
      ...m,
      "aria-current": Ot,
      className: bt,
      ref: A,
      style: $t,
      to: S,
      viewTransition: E,
    },
    typeof v == "function" ? v(zt) : v
  );
});
Tv.displayName = "NavLink";
var Av = D.forwardRef(
  (
    {
      discover: i = "render",
      fetcherKey: r,
      navigate: o,
      reloadDocument: f,
      replace: d,
      state: h,
      method: S = ti,
      action: E,
      onSubmit: v,
      relative: m,
      preventScrollReset: A,
      viewTransition: C,
      ...q
    },
    B
  ) => {
    let N = Ov(),
      V = _v(E, { relative: m }),
      L = S.toLowerCase() === "get" ? "get" : "post",
      w = typeof E == "string" && bh.test(E),
      F = (G) => {
        if ((v && v(G), G.defaultPrevented)) return;
        G.preventDefault();
        let ft = G.nativeEvent.submitter,
          P = (ft == null ? void 0 : ft.getAttribute("formmethod")) || S;
        N(ft || G.currentTarget, {
          fetcherKey: r,
          method: P,
          navigate: o,
          replace: d,
          state: h,
          relative: m,
          preventScrollReset: A,
          viewTransition: C,
        });
      };
    return D.createElement("form", {
      ref: B,
      method: L,
      action: V,
      onSubmit: f ? v : F,
      ...q,
      "data-discover": !w && i === "render" ? "true" : void 0,
    });
  }
);
Av.displayName = "Form";
function Rv(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Th(i) {
  let r = D.useContext(Ua);
  return Rt(r, Rv(i)), r;
}
function zv(
  i,
  {
    target: r,
    replace: o,
    state: f,
    preventScrollReset: d,
    relative: h,
    viewTransition: S,
  } = {}
) {
  let E = mh(),
    v = Al(),
    m = Bn(i, { relative: h });
  return D.useCallback(
    (A) => {
      if (lv(A, r)) {
        A.preventDefault();
        let C = o !== void 0 ? o : Cn(v) === Cn(m);
        E(i, {
          replace: C,
          state: f,
          preventScrollReset: d,
          relative: h,
          viewTransition: S,
        });
      }
    },
    [v, E, m, o, f, r, i, d, h, S]
  );
}
var Mv = 0,
  Dv = () => `__${String(++Mv)}__`;
function Ov() {
  let { router: i } = Th("useSubmit"),
    { basename: r } = D.useContext(Ne),
    o = K0();
  return D.useCallback(
    async (f, d = {}) => {
      let { action: h, method: S, encType: E, formData: v, body: m } = uv(f, r);
      if (d.navigate === !1) {
        let A = d.fetcherKey || Dv();
        await i.fetch(A, o, d.action || h, {
          preventScrollReset: d.preventScrollReset,
          formData: v,
          body: m,
          formMethod: d.method || S,
          formEncType: d.encType || E,
          flushSync: d.flushSync,
        });
      } else
        await i.navigate(d.action || h, {
          preventScrollReset: d.preventScrollReset,
          formData: v,
          body: m,
          formMethod: d.method || S,
          formEncType: d.encType || E,
          replace: d.replace,
          state: d.state,
          fromRouteId: o,
          flushSync: d.flushSync,
          viewTransition: d.viewTransition,
        });
    },
    [i, r, o]
  );
}
function _v(i, { relative: r } = {}) {
  let { basename: o } = D.useContext(Ne),
    f = D.useContext(Ie);
  Rt(f, "useFormAction must be used inside a RouteContext");
  let [d] = f.matches.slice(-1),
    h = { ...Bn(i || ".", { relative: r }) },
    S = Al();
  if (i == null) {
    h.search = S.search;
    let E = new URLSearchParams(h.search),
      v = E.getAll("index");
    if (v.some((A) => A === "")) {
      E.delete("index"),
        v.filter((C) => C).forEach((C) => E.append("index", C));
      let A = E.toString();
      h.search = A ? `?${A}` : "";
    }
  }
  return (
    (!i || i === ".") &&
      d.route.index &&
      (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"),
    o !== "/" && (h.pathname = h.pathname === "/" ? o : $e([o, h.pathname])),
    Cn(h)
  );
}
function xv(i, r = {}) {
  let o = D.useContext(oh);
  Rt(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: f } = Th("useViewTransitionState"),
    d = Bn(i, { relative: r.relative });
  if (!o.isTransitioning) return !1;
  let h = We(o.currentLocation.pathname, f) || o.currentLocation.pathname,
    S = We(o.nextLocation.pathname, f) || o.nextLocation.pathname;
  return li(d.pathname, S) != null || li(d.pathname, h) != null;
}
[...hv];
const Ah = "./assets/cft-rO9Z8ZfA.gif",
  xa = ({ children: i, delay: r = 0, style: o = {} }) => {
    const [f, d] = D.useState(!1);
    D.useEffect(() => {
      const S = setTimeout(() => d(!0), r);
      return () => clearTimeout(S);
    }, [r]);
    const h = {
      position: "relative",
      opacity: f ? 1 : 0,
      top: f ? 0 : 100,
      transition: `opacity 0.5s ease-out ${r}ms, top 0.5s ease-out ${r}ms`,
      ...o,
    };
    return Z.jsx("div", { style: h, children: i });
  },
  kd = "./assets/an-b_N5plt4.png",
  $d = "./assets/1-D1hEkndi.png";
function _f(i, r, o, f) {
  function d(h) {
    return h instanceof o
      ? h
      : new o(function (S) {
          S(h);
        });
  }
  return new (o || (o = Promise))(function (h, S) {
    function E(A) {
      try {
        m(f.next(A));
      } catch (C) {
        S(C);
      }
    }
    function v(A) {
      try {
        m(f.throw(A));
      } catch (C) {
        S(C);
      }
    }
    function m(A) {
      A.done ? h(A.value) : d(A.value).then(E, v);
    }
    m((f = f.apply(i, [])).next());
  });
}
class tt {
  constructor(r, o, f) {
    (this.method = r),
      (this.attribute = o),
      f !== void 0 &&
        (Array.isArray(f) ? (this.values = f) : (this.values = [f]));
  }
  toString() {
    return JSON.stringify({
      method: this.method,
      attribute: this.attribute,
      values: this.values,
    });
  }
}
tt.equal = (i, r) => new tt("equal", i, r).toString();
tt.notEqual = (i, r) => new tt("notEqual", i, r).toString();
tt.lessThan = (i, r) => new tt("lessThan", i, r).toString();
tt.lessThanEqual = (i, r) => new tt("lessThanEqual", i, r).toString();
tt.greaterThan = (i, r) => new tt("greaterThan", i, r).toString();
tt.greaterThanEqual = (i, r) => new tt("greaterThanEqual", i, r).toString();
tt.isNull = (i) => new tt("isNull", i).toString();
tt.isNotNull = (i) => new tt("isNotNull", i).toString();
tt.between = (i, r, o) => new tt("between", i, [r, o]).toString();
tt.startsWith = (i, r) => new tt("startsWith", i, r).toString();
tt.endsWith = (i, r) => new tt("endsWith", i, r).toString();
tt.select = (i) => new tt("select", void 0, i).toString();
tt.search = (i, r) => new tt("search", i, r).toString();
tt.orderDesc = (i) => new tt("orderDesc", i).toString();
tt.orderAsc = (i) => new tt("orderAsc", i).toString();
tt.cursorAfter = (i) => new tt("cursorAfter", void 0, i).toString();
tt.cursorBefore = (i) => new tt("cursorBefore", void 0, i).toString();
tt.limit = (i) => new tt("limit", void 0, i).toString();
tt.offset = (i) => new tt("offset", void 0, i).toString();
tt.contains = (i, r) => new tt("contains", i, r).toString();
tt.or = (i) =>
  new tt(
    "or",
    void 0,
    i.map((r) => JSON.parse(r))
  ).toString();
tt.and = (i) =>
  new tt(
    "and",
    void 0,
    i.map((r) => JSON.parse(r))
  ).toString();
class Lt extends Error {
  constructor(r, o = 0, f = "", d = "") {
    super(r),
      (this.name = "AppwriteException"),
      (this.message = r),
      (this.code = o),
      (this.type = f),
      (this.response = d);
  }
}
class ke {
  constructor() {
    (this.config = {
      endpoint: "https://cloud.appwrite.io/v1",
      endpointRealtime: "",
      project: "",
      jwt: "",
      locale: "",
      session: "",
    }),
      (this.headers = {
        "x-sdk-name": "Web",
        "x-sdk-platform": "client",
        "x-sdk-language": "web",
        "x-sdk-version": "17.0.2",
        "X-Appwrite-Response-Format": "1.6.0",
      }),
      (this.realtime = {
        socket: void 0,
        timeout: void 0,
        heartbeat: void 0,
        url: "",
        channels: new Set(),
        subscriptions: new Map(),
        subscriptionsCounter: 0,
        reconnect: !0,
        reconnectAttempts: 0,
        lastMessage: void 0,
        connect: () => {
          clearTimeout(this.realtime.timeout),
            (this.realtime.timeout =
              window == null
                ? void 0
                : window.setTimeout(() => {
                    this.realtime.createSocket();
                  }, 50));
        },
        getTimeout: () => {
          switch (!0) {
            case this.realtime.reconnectAttempts < 5:
              return 1e3;
            case this.realtime.reconnectAttempts < 15:
              return 5e3;
            case this.realtime.reconnectAttempts < 100:
              return 1e4;
            default:
              return 6e4;
          }
        },
        createHeartbeat: () => {
          this.realtime.heartbeat && clearTimeout(this.realtime.heartbeat),
            (this.realtime.heartbeat =
              window == null
                ? void 0
                : window.setInterval(() => {
                    var r;
                    (r = this.realtime.socket) === null ||
                      r === void 0 ||
                      r.send(JSON.stringify({ type: "ping" }));
                  }, 2e4));
        },
        createSocket: () => {
          var r, o, f;
          if (this.realtime.channels.size < 1) {
            (this.realtime.reconnect = !1),
              (r = this.realtime.socket) === null || r === void 0 || r.close();
            return;
          }
          const d = new URLSearchParams();
          d.set("project", this.config.project),
            this.realtime.channels.forEach((S) => {
              d.append("channels[]", S);
            });
          const h = this.config.endpointRealtime + "/realtime?" + d.toString();
          (h !== this.realtime.url ||
            !this.realtime.socket ||
            ((o = this.realtime.socket) === null || o === void 0
              ? void 0
              : o.readyState) > WebSocket.OPEN) &&
            (this.realtime.socket &&
              ((f = this.realtime.socket) === null || f === void 0
                ? void 0
                : f.readyState) < WebSocket.CLOSING &&
              ((this.realtime.reconnect = !1), this.realtime.socket.close()),
            (this.realtime.url = h),
            (this.realtime.socket = new WebSocket(h)),
            this.realtime.socket.addEventListener(
              "message",
              this.realtime.onMessage
            ),
            this.realtime.socket.addEventListener("open", (S) => {
              (this.realtime.reconnectAttempts = 0),
                this.realtime.createHeartbeat();
            }),
            this.realtime.socket.addEventListener("close", (S) => {
              var E, v, m;
              if (
                !this.realtime.reconnect ||
                (((v =
                  (E = this.realtime) === null || E === void 0
                    ? void 0
                    : E.lastMessage) === null || v === void 0
                  ? void 0
                  : v.type) === "error" &&
                  ((m = this.realtime) === null || m === void 0
                    ? void 0
                    : m.lastMessage.data
                  ).code === 1008)
              ) {
                this.realtime.reconnect = !0;
                return;
              }
              const A = this.realtime.getTimeout();
              console.error(
                `Realtime got disconnected. Reconnect will be attempted in ${
                  A / 1e3
                } seconds.`,
                S.reason
              ),
                setTimeout(() => {
                  this.realtime.reconnectAttempts++,
                    this.realtime.createSocket();
                }, A);
            }));
        },
        onMessage: (r) => {
          var o, f;
          try {
            const d = JSON.parse(r.data);
            switch (((this.realtime.lastMessage = d), d.type)) {
              case "connected":
                const h = JSON.parse(
                    (o = window.localStorage.getItem("cookieFallback")) !==
                      null && o !== void 0
                      ? o
                      : "{}"
                  ),
                  S =
                    h == null ? void 0 : h[`a_session_${this.config.project}`],
                  E = d.data;
                S &&
                  !E.user &&
                  ((f = this.realtime.socket) === null ||
                    f === void 0 ||
                    f.send(
                      JSON.stringify({
                        type: "authentication",
                        data: { session: S },
                      })
                    ));
                break;
              case "event":
                let v = d.data;
                if (v != null && v.channels) {
                  if (!v.channels.some((A) => this.realtime.channels.has(A)))
                    return;
                  this.realtime.subscriptions.forEach((A) => {
                    v.channels.some((C) => A.channels.includes(C)) &&
                      setTimeout(() => A.callback(v));
                  });
                }
                break;
              case "pong":
                break;
              case "error":
                throw d.data;
              default:
                break;
            }
          } catch (d) {
            console.error(d);
          }
        },
        cleanUp: (r) => {
          this.realtime.channels.forEach((o) => {
            r.includes(o) &&
              (Array.from(this.realtime.subscriptions).some(([d, h]) =>
                h.channels.includes(o)
              ) ||
                this.realtime.channels.delete(o));
          });
        },
      });
  }
  setEndpoint(r) {
    if (!r.startsWith("http://") && !r.startsWith("https://"))
      throw new Lt("Invalid endpoint URL: " + r);
    return (
      (this.config.endpoint = r),
      (this.config.endpointRealtime = r
        .replace("https://", "wss://")
        .replace("http://", "ws://")),
      this
    );
  }
  setEndpointRealtime(r) {
    if (!r.startsWith("ws://") && !r.startsWith("wss://"))
      throw new Lt("Invalid realtime endpoint URL: " + r);
    return (this.config.endpointRealtime = r), this;
  }
  setProject(r) {
    return (
      (this.headers["X-Appwrite-Project"] = r), (this.config.project = r), this
    );
  }
  setJWT(r) {
    return (this.headers["X-Appwrite-JWT"] = r), (this.config.jwt = r), this;
  }
  setLocale(r) {
    return (
      (this.headers["X-Appwrite-Locale"] = r), (this.config.locale = r), this
    );
  }
  setSession(r) {
    return (
      (this.headers["X-Appwrite-Session"] = r), (this.config.session = r), this
    );
  }
  subscribe(r, o) {
    let f = typeof r == "string" ? [r] : r;
    f.forEach((h) => this.realtime.channels.add(h));
    const d = this.realtime.subscriptionsCounter++;
    return (
      this.realtime.subscriptions.set(d, { channels: f, callback: o }),
      this.realtime.connect(),
      () => {
        this.realtime.subscriptions.delete(d),
          this.realtime.cleanUp(f),
          this.realtime.connect();
      }
    );
  }
  prepareRequest(r, o, f = {}, d = {}) {
    if (
      ((r = r.toUpperCase()),
      (f = Object.assign({}, this.headers, f)),
      typeof window < "u" && window.localStorage)
    ) {
      const S = window.localStorage.getItem("cookieFallback");
      S && (f["X-Fallback-Cookies"] = S);
    }
    let h = { method: r, headers: f, credentials: "include" };
    if (r === "GET")
      for (const [S, E] of Object.entries(ke.flatten(d)))
        o.searchParams.append(S, E);
    else
      switch (f["content-type"]) {
        case "application/json":
          h.body = JSON.stringify(d);
          break;
        case "multipart/form-data":
          const S = new FormData();
          for (const [E, v] of Object.entries(d))
            if (v instanceof File) S.append(E, v, v.name);
            else if (Array.isArray(v)) for (const m of v) S.append(`${E}[]`, m);
            else S.append(E, v);
          (h.body = S), delete f["content-type"];
          break;
      }
    return { uri: o.toString(), options: h };
  }
  chunkedUpload(r, o, f = {}, d = {}, h) {
    return _f(this, void 0, void 0, function* () {
      const S = Object.values(d).find((m) => m instanceof File);
      if (!S) throw new Error("File not found in payload");
      if (S.size <= ke.CHUNK_SIZE) return yield this.call(r, o, f, d);
      let E = 0,
        v = null;
      for (; E < S.size; ) {
        let m = E + ke.CHUNK_SIZE;
        m >= S.size && (m = S.size),
          (f["content-range"] = `bytes ${E}-${m - 1}/${S.size}`);
        const A = S.slice(E, m);
        let C = Object.assign(Object.assign({}, d), {
          file: new File([A], S.name),
        });
        (v = yield this.call(r, o, f, C)),
          h &&
            typeof h == "function" &&
            h({
              $id: v.$id,
              progress: Math.round((m / S.size) * 100),
              sizeUploaded: m,
              chunksTotal: Math.ceil(S.size / ke.CHUNK_SIZE),
              chunksUploaded: Math.ceil(m / ke.CHUNK_SIZE),
            }),
          v && v.$id && (f["x-appwrite-id"] = v.$id),
          (E = m);
      }
      return v;
    });
  }
  ping() {
    return _f(this, void 0, void 0, function* () {
      return this.call("GET", new URL(this.config.endpoint + "/ping"));
    });
  }
  call(r, o, f = {}, d = {}, h = "json") {
    var S, E;
    return _f(this, void 0, void 0, function* () {
      const { uri: v, options: m } = this.prepareRequest(r, o, f, d);
      let A = null;
      const C = yield fetch(v, m),
        q = C.headers.get("x-appwrite-warning");
      if (
        (q && q.split(";").forEach((N) => console.warn("Warning: " + N)),
        !((S = C.headers.get("content-type")) === null || S === void 0) &&
        S.includes("application/json")
          ? (A = yield C.json())
          : h === "arrayBuffer"
          ? (A = yield C.arrayBuffer())
          : (A = { message: yield C.text() }),
        400 <= C.status)
      ) {
        let N = "";
        throw (
          ((!((E = C.headers.get("content-type")) === null || E === void 0) &&
            E.includes("application/json")) ||
          h === "arrayBuffer"
            ? (N = JSON.stringify(A))
            : (N = A == null ? void 0 : A.message),
          new Lt(
            A == null ? void 0 : A.message,
            C.status,
            A == null ? void 0 : A.type,
            N
          ))
        );
      }
      const B = C.headers.get("X-Fallback-Cookies");
      return (
        typeof window < "u" &&
          window.localStorage &&
          B &&
          (window.console.warn(
            "Appwrite is using localStorage for session management. Increase your security by adding a custom domain as your API endpoint."
          ),
          window.localStorage.setItem("cookieFallback", B)),
        A
      );
    });
  }
  static flatten(r, o = "") {
    let f = {};
    for (const [d, h] of Object.entries(r)) {
      let S = o ? o + "[" + d + "]" : d;
      Array.isArray(h)
        ? (f = Object.assign(Object.assign({}, f), ke.flatten(h, S)))
        : (f[S] = h);
    }
    return f;
  }
}
ke.CHUNK_SIZE = 1024 * 1024 * 5;
class Uv {
  constructor(r) {
    this.client = r;
  }
  listDocuments(r, o, f) {
    if (typeof r > "u")
      throw new Lt('Missing required parameter: "databaseId"');
    if (typeof o > "u")
      throw new Lt('Missing required parameter: "collectionId"');
    const d = "/databases/{databaseId}/collections/{collectionId}/documents"
        .replace("{databaseId}", r)
        .replace("{collectionId}", o),
      h = {};
    typeof f < "u" && (h.queries = f);
    const S = new URL(this.client.config.endpoint + d),
      E = {};
    return this.client.call("get", S, E, h);
  }
  createDocument(r, o, f, d, h) {
    if (typeof r > "u")
      throw new Lt('Missing required parameter: "databaseId"');
    if (typeof o > "u")
      throw new Lt('Missing required parameter: "collectionId"');
    if (typeof f > "u")
      throw new Lt('Missing required parameter: "documentId"');
    if (typeof d > "u") throw new Lt('Missing required parameter: "data"');
    const S = "/databases/{databaseId}/collections/{collectionId}/documents"
        .replace("{databaseId}", r)
        .replace("{collectionId}", o),
      E = {};
    typeof f < "u" && (E.documentId = f),
      typeof d < "u" && (E.data = d),
      typeof h < "u" && (E.permissions = h);
    const v = new URL(this.client.config.endpoint + S),
      m = { "content-type": "application/json" };
    return this.client.call("post", v, m, E);
  }
  getDocument(r, o, f, d) {
    if (typeof r > "u")
      throw new Lt('Missing required parameter: "databaseId"');
    if (typeof o > "u")
      throw new Lt('Missing required parameter: "collectionId"');
    if (typeof f > "u")
      throw new Lt('Missing required parameter: "documentId"');
    const h =
        "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}"
          .replace("{databaseId}", r)
          .replace("{collectionId}", o)
          .replace("{documentId}", f),
      S = {};
    typeof d < "u" && (S.queries = d);
    const E = new URL(this.client.config.endpoint + h),
      v = {};
    return this.client.call("get", E, v, S);
  }
  updateDocument(r, o, f, d, h) {
    if (typeof r > "u")
      throw new Lt('Missing required parameter: "databaseId"');
    if (typeof o > "u")
      throw new Lt('Missing required parameter: "collectionId"');
    if (typeof f > "u")
      throw new Lt('Missing required parameter: "documentId"');
    const S =
        "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}"
          .replace("{databaseId}", r)
          .replace("{collectionId}", o)
          .replace("{documentId}", f),
      E = {};
    typeof d < "u" && (E.data = d), typeof h < "u" && (E.permissions = h);
    const v = new URL(this.client.config.endpoint + S),
      m = { "content-type": "application/json" };
    return this.client.call("patch", v, m, E);
  }
  deleteDocument(r, o, f) {
    if (typeof r > "u")
      throw new Lt('Missing required parameter: "databaseId"');
    if (typeof o > "u")
      throw new Lt('Missing required parameter: "collectionId"');
    if (typeof f > "u")
      throw new Lt('Missing required parameter: "documentId"');
    const d =
        "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}"
          .replace("{databaseId}", r)
          .replace("{collectionId}", o)
          .replace("{documentId}", f),
      h = {},
      S = new URL(this.client.config.endpoint + d),
      E = { "content-type": "application/json" };
    return this.client.call("delete", S, E, h);
  }
}
var Wd;
(function (i) {
  i.Totp = "totp";
})(Wd || (Wd = {}));
var Id;
(function (i) {
  (i.Email = "email"),
    (i.Phone = "phone"),
    (i.Totp = "totp"),
    (i.Recoverycode = "recoverycode");
})(Id || (Id = {}));
var Pd;
(function (i) {
  (i.Amazon = "amazon"),
    (i.Apple = "apple"),
    (i.Auth0 = "auth0"),
    (i.Authentik = "authentik"),
    (i.Autodesk = "autodesk"),
    (i.Bitbucket = "bitbucket"),
    (i.Bitly = "bitly"),
    (i.Box = "box"),
    (i.Dailymotion = "dailymotion"),
    (i.Discord = "discord"),
    (i.Disqus = "disqus"),
    (i.Dropbox = "dropbox"),
    (i.Etsy = "etsy"),
    (i.Facebook = "facebook"),
    (i.Figma = "figma"),
    (i.Github = "github"),
    (i.Gitlab = "gitlab"),
    (i.Google = "google"),
    (i.Linkedin = "linkedin"),
    (i.Microsoft = "microsoft"),
    (i.Notion = "notion"),
    (i.Oidc = "oidc"),
    (i.Okta = "okta"),
    (i.Paypal = "paypal"),
    (i.PaypalSandbox = "paypalSandbox"),
    (i.Podio = "podio"),
    (i.Salesforce = "salesforce"),
    (i.Slack = "slack"),
    (i.Spotify = "spotify"),
    (i.Stripe = "stripe"),
    (i.Tradeshift = "tradeshift"),
    (i.TradeshiftBox = "tradeshiftBox"),
    (i.Twitch = "twitch"),
    (i.Wordpress = "wordpress"),
    (i.Yahoo = "yahoo"),
    (i.Yammer = "yammer"),
    (i.Yandex = "yandex"),
    (i.Zoho = "zoho"),
    (i.Zoom = "zoom"),
    (i.Mock = "mock");
})(Pd || (Pd = {}));
var Fd;
(function (i) {
  (i.AvantBrowser = "aa"),
    (i.AndroidWebViewBeta = "an"),
    (i.GoogleChrome = "ch"),
    (i.GoogleChromeIOS = "ci"),
    (i.GoogleChromeMobile = "cm"),
    (i.Chromium = "cr"),
    (i.MozillaFirefox = "ff"),
    (i.Safari = "sf"),
    (i.MobileSafari = "mf"),
    (i.MicrosoftEdge = "ps"),
    (i.MicrosoftEdgeIOS = "oi"),
    (i.OperaMini = "om"),
    (i.Opera = "op"),
    (i.OperaNext = "on");
})(Fd || (Fd = {}));
var th;
(function (i) {
  (i.AmericanExpress = "amex"),
    (i.Argencard = "argencard"),
    (i.Cabal = "cabal"),
    (i.Cencosud = "cencosud"),
    (i.DinersClub = "diners"),
    (i.Discover = "discover"),
    (i.Elo = "elo"),
    (i.Hipercard = "hipercard"),
    (i.JCB = "jcb"),
    (i.Mastercard = "mastercard"),
    (i.Naranja = "naranja"),
    (i.TarjetaShopping = "targeta-shopping"),
    (i.UnionChinaPay = "union-china-pay"),
    (i.Visa = "visa"),
    (i.MIR = "mir"),
    (i.Maestro = "maestro"),
    (i.Rupay = "rupay");
})(th || (th = {}));
var eh;
(function (i) {
  (i.Afghanistan = "af"),
    (i.Angola = "ao"),
    (i.Albania = "al"),
    (i.Andorra = "ad"),
    (i.UnitedArabEmirates = "ae"),
    (i.Argentina = "ar"),
    (i.Armenia = "am"),
    (i.AntiguaAndBarbuda = "ag"),
    (i.Australia = "au"),
    (i.Austria = "at"),
    (i.Azerbaijan = "az"),
    (i.Burundi = "bi"),
    (i.Belgium = "be"),
    (i.Benin = "bj"),
    (i.BurkinaFaso = "bf"),
    (i.Bangladesh = "bd"),
    (i.Bulgaria = "bg"),
    (i.Bahrain = "bh"),
    (i.Bahamas = "bs"),
    (i.BosniaAndHerzegovina = "ba"),
    (i.Belarus = "by"),
    (i.Belize = "bz"),
    (i.Bolivia = "bo"),
    (i.Brazil = "br"),
    (i.Barbados = "bb"),
    (i.BruneiDarussalam = "bn"),
    (i.Bhutan = "bt"),
    (i.Botswana = "bw"),
    (i.CentralAfricanRepublic = "cf"),
    (i.Canada = "ca"),
    (i.Switzerland = "ch"),
    (i.Chile = "cl"),
    (i.China = "cn"),
    (i.CoteDIvoire = "ci"),
    (i.Cameroon = "cm"),
    (i.DemocraticRepublicOfTheCongo = "cd"),
    (i.RepublicOfTheCongo = "cg"),
    (i.Colombia = "co"),
    (i.Comoros = "km"),
    (i.CapeVerde = "cv"),
    (i.CostaRica = "cr"),
    (i.Cuba = "cu"),
    (i.Cyprus = "cy"),
    (i.CzechRepublic = "cz"),
    (i.Germany = "de"),
    (i.Djibouti = "dj"),
    (i.Dominica = "dm"),
    (i.Denmark = "dk"),
    (i.DominicanRepublic = "do"),
    (i.Algeria = "dz"),
    (i.Ecuador = "ec"),
    (i.Egypt = "eg"),
    (i.Eritrea = "er"),
    (i.Spain = "es"),
    (i.Estonia = "ee"),
    (i.Ethiopia = "et"),
    (i.Finland = "fi"),
    (i.Fiji = "fj"),
    (i.France = "fr"),
    (i.MicronesiaFederatedStatesOf = "fm"),
    (i.Gabon = "ga"),
    (i.UnitedKingdom = "gb"),
    (i.Georgia = "ge"),
    (i.Ghana = "gh"),
    (i.Guinea = "gn"),
    (i.Gambia = "gm"),
    (i.GuineaBissau = "gw"),
    (i.EquatorialGuinea = "gq"),
    (i.Greece = "gr"),
    (i.Grenada = "gd"),
    (i.Guatemala = "gt"),
    (i.Guyana = "gy"),
    (i.Honduras = "hn"),
    (i.Croatia = "hr"),
    (i.Haiti = "ht"),
    (i.Hungary = "hu"),
    (i.Indonesia = "id"),
    (i.India = "in"),
    (i.Ireland = "ie"),
    (i.IranIslamicRepublicOf = "ir"),
    (i.Iraq = "iq"),
    (i.Iceland = "is"),
    (i.Israel = "il"),
    (i.Italy = "it"),
    (i.Jamaica = "jm"),
    (i.Jordan = "jo"),
    (i.Japan = "jp"),
    (i.Kazakhstan = "kz"),
    (i.Kenya = "ke"),
    (i.Kyrgyzstan = "kg"),
    (i.Cambodia = "kh"),
    (i.Kiribati = "ki"),
    (i.SaintKittsAndNevis = "kn"),
    (i.SouthKorea = "kr"),
    (i.Kuwait = "kw"),
    (i.LaoPeopleSDemocraticRepublic = "la"),
    (i.Lebanon = "lb"),
    (i.Liberia = "lr"),
    (i.Libya = "ly"),
    (i.SaintLucia = "lc"),
    (i.Liechtenstein = "li"),
    (i.SriLanka = "lk"),
    (i.Lesotho = "ls"),
    (i.Lithuania = "lt"),
    (i.Luxembourg = "lu"),
    (i.Latvia = "lv"),
    (i.Morocco = "ma"),
    (i.Monaco = "mc"),
    (i.Moldova = "md"),
    (i.Madagascar = "mg"),
    (i.Maldives = "mv"),
    (i.Mexico = "mx"),
    (i.MarshallIslands = "mh"),
    (i.NorthMacedonia = "mk"),
    (i.Mali = "ml"),
    (i.Malta = "mt"),
    (i.Myanmar = "mm"),
    (i.Montenegro = "me"),
    (i.Mongolia = "mn"),
    (i.Mozambique = "mz"),
    (i.Mauritania = "mr"),
    (i.Mauritius = "mu"),
    (i.Malawi = "mw"),
    (i.Malaysia = "my"),
    (i.Namibia = "na"),
    (i.Niger = "ne"),
    (i.Nigeria = "ng"),
    (i.Nicaragua = "ni"),
    (i.Netherlands = "nl"),
    (i.Norway = "no"),
    (i.Nepal = "np"),
    (i.Nauru = "nr"),
    (i.NewZealand = "nz"),
    (i.Oman = "om"),
    (i.Pakistan = "pk"),
    (i.Panama = "pa"),
    (i.Peru = "pe"),
    (i.Philippines = "ph"),
    (i.Palau = "pw"),
    (i.PapuaNewGuinea = "pg"),
    (i.Poland = "pl"),
    (i.FrenchPolynesia = "pf"),
    (i.NorthKorea = "kp"),
    (i.Portugal = "pt"),
    (i.Paraguay = "py"),
    (i.Qatar = "qa"),
    (i.Romania = "ro"),
    (i.Russia = "ru"),
    (i.Rwanda = "rw"),
    (i.SaudiArabia = "sa"),
    (i.Sudan = "sd"),
    (i.Senegal = "sn"),
    (i.Singapore = "sg"),
    (i.SolomonIslands = "sb"),
    (i.SierraLeone = "sl"),
    (i.ElSalvador = "sv"),
    (i.SanMarino = "sm"),
    (i.Somalia = "so"),
    (i.Serbia = "rs"),
    (i.SouthSudan = "ss"),
    (i.SaoTomeAndPrincipe = "st"),
    (i.Suriname = "sr"),
    (i.Slovakia = "sk"),
    (i.Slovenia = "si"),
    (i.Sweden = "se"),
    (i.Eswatini = "sz"),
    (i.Seychelles = "sc"),
    (i.Syria = "sy"),
    (i.Chad = "td"),
    (i.Togo = "tg"),
    (i.Thailand = "th"),
    (i.Tajikistan = "tj"),
    (i.Turkmenistan = "tm"),
    (i.TimorLeste = "tl"),
    (i.Tonga = "to"),
    (i.TrinidadAndTobago = "tt"),
    (i.Tunisia = "tn"),
    (i.Turkey = "tr"),
    (i.Tuvalu = "tv"),
    (i.Tanzania = "tz"),
    (i.Uganda = "ug"),
    (i.Ukraine = "ua"),
    (i.Uruguay = "uy"),
    (i.UnitedStates = "us"),
    (i.Uzbekistan = "uz"),
    (i.VaticanCity = "va"),
    (i.SaintVincentAndTheGrenadines = "vc"),
    (i.Venezuela = "ve"),
    (i.Vietnam = "vn"),
    (i.Vanuatu = "vu"),
    (i.Samoa = "ws"),
    (i.Yemen = "ye"),
    (i.SouthAfrica = "za"),
    (i.Zambia = "zm"),
    (i.Zimbabwe = "zw");
})(eh || (eh = {}));
var lh;
(function (i) {
  (i.GET = "GET"),
    (i.POST = "POST"),
    (i.PUT = "PUT"),
    (i.PATCH = "PATCH"),
    (i.DELETE = "DELETE"),
    (i.OPTIONS = "OPTIONS");
})(lh || (lh = {}));
var ah;
(function (i) {
  (i.Center = "center"),
    (i.Topleft = "top-left"),
    (i.Top = "top"),
    (i.Topright = "top-right"),
    (i.Left = "left"),
    (i.Right = "right"),
    (i.Bottomleft = "bottom-left"),
    (i.Bottom = "bottom"),
    (i.Bottomright = "bottom-right");
})(ah || (ah = {}));
var nh;
(function (i) {
  (i.Jpg = "jpg"),
    (i.Jpeg = "jpeg"),
    (i.Gif = "gif"),
    (i.Png = "png"),
    (i.Webp = "webp"),
    (i.Heic = "heic"),
    (i.Avif = "avif");
})(nh || (nh = {}));
const Rh = new ke();
Rh.setEndpoint("https://cloud.appwrite.io/v1").setProject(
  "682ed327001560d520bd"
);
const Nv = new Uv(Rh),
  zh = D.createContext(),
  Hv = "682ed34900397eda467b",
  Cv = "682ed356002745d057e3",
  qv = ({ children: i }) => {
    const [r, o] = D.useState([]),
      [f, d] = D.useState(!0),
      h = async () => {
        try {
          const v = await Nv.listDocuments(Hv, Cv, [
            tt.orderDesc("$createdAt"),
          ]);
          o(v.documents);
        } catch (v) {
          console.error("Error loading wishes:", v);
        } finally {
          d(!1);
        }
      };
    D.useEffect(() => {
      h();
    }, []);
    const S = r.filter((v) => v.relationship === "friend"),
      E = r.filter((v) => v.relationship === "family");
    return Z.jsx(zh.Provider, {
      value: {
        wishes: r,
        friendWishes: S,
        familyWishes: E,
        loading: f,
        fetchWishes: h,
      },
      children: i,
    });
  },
  Mh = () => D.useContext(zh),
  wv = () => {
    const { friendWishes: i, familyWishes: r, loading: o } = Mh(),
      f = mh();
    return o
      ? Z.jsx("div", {
          className: "log",
          children: Z.jsx("p", { children: "Loading..." }),
        })
      : (console.log(i),
        console.log(r),
        Z.jsxs("div", {
          className: "mc",
          children: [
            Z.jsx("img", { src: Ah, alt: "", className: "bg" }),
            Z.jsxs("div", {
              className: "contentt",
              children: [
                Z.jsx("div", {
                  className: "position",
                  children: Z.jsx("img", { src: kd, alt: "" }),
                }),
                Z.jsx("div", {
                  className: "butposition",
                  children: Z.jsx("img", { src: kd, alt: "" }),
                }),
                Z.jsx(xa, {
                  delay: 0,
                  style: { color: "aqua" },
                  children: Z.jsx("h1", { children: "Happy Birthday" }),
                }),
                Z.jsx(xa, {
                  delay: 100,
                  style: { color: "aqua" },
                  children: Z.jsx("h1", {
                    className: "kkk",
                    children: "Godswil Badaki",
                  }),
                }),
                Z.jsx(xa, {
                  delay: 200,
                  style: { color: "aqua" },
                  children: Z.jsx("p", {
                    className: "padd",
                    children: "Mush love from your Big Bro Emmanuel",
                  }),
                }),
                Z.jsxs("div", {
                  className: "butcon",
                  children: [
                    Z.jsx(xa, {
                      delay: 300,
                      style: { color: "aqua" },
                      children: Z.jsxs("div", {
                        className: "butitem",
                        onClick: () => f("/wishes?type=family"),
                        children: [
                          Z.jsx("img", { src: $d, alt: "", className: "imgg" }),
                          Z.jsx("h1", { children: "Families Wishes" }),
                        ],
                      }),
                    }),
                    Z.jsx(xa, {
                      delay: 400,
                      style: { color: "aqua" },
                      children: Z.jsxs("div", {
                        className: "butitem",
                        onClick: () => f("/wishes?type=friend"),
                        children: [
                          Z.jsx("img", { src: $d, alt: "", className: "imgg" }),
                          Z.jsx("h1", { children: "Friends Wishes" }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }));
  },
  Bv = ({
    children: i,
    delayIncrement: r = 200,
    style: o = {},
    containerStyle: f = {},
  }) => {
    const [d, h] = D.useState(!1);
    return (
      D.useEffect(() => {
        const S = setTimeout(() => h(!0), 0);
        return () => clearTimeout(S);
      }, []),
      Z.jsx("div", {
        style: f,
        children: Fy.Children.map(i, (S, E) =>
          Z.jsx("div", {
            style: {
              position: "relative",
              opacity: d ? 1 : 0,
              top: d ? 0 : 100,
              transition: `opacity 0.5s ease-out ${
                E * r
              }ms, top 0.5s ease-out ${E * r}ms`,
              ...o,
            },
            children: S,
          })
        ),
      })
    );
  },
  jv = "./assets/44-DXGIipBV.png",
  Yv = "./assets/qq-Cvpr34cb.png",
  Lv = ({ item: i }) => {
    const [r, o] = D.useState(!1);
    return (
      console.log(i),
      Z.jsxs("div", {
        className: "items",
        children: [
          r &&
            Z.jsxs("div", {
              className: "vidplay",
              children: [
                Z.jsx("div", {
                  className: "x",
                  onClick: () => o(!1),
                  children: "x",
                }),
                Z.jsx("video", {
                  controls: !0,
                  autoPlay: !0,
                  src: i.file,
                  className: "bbb",
                  onClick: () => o(!0),
                }),
              ],
            }),
          Z.jsx("img", { src: jv, alt: "", className: "top" }),
          Z.jsxs("h1", { children: ["__ ", i.name] }),
          Z.jsxs("p", { children: ["__ ", i.message] }),
          i.file
            ? i.fileType === "video"
              ? Z.jsxs("div", {
                  className: "media",
                  children: [
                    Z.jsx("div", {
                      className: "icon",
                      children: Z.jsx("h1", { children: "Play" }),
                    }),
                    Z.jsx("video", {
                      src: i.file,
                      className: "mediaa",
                      onClick: () => o(!0),
                    }),
                  ],
                })
              : Z.jsx("img", { src: i.file, alt: "", className: "media" })
            : "",
          Z.jsx("img", { src: Yv, alt: "", className: "buttom" }),
        ],
      })
    );
  },
  Gv = "./assets/3-DS8uzbwC.png",
  Xv = () => {
    const i = Al(),
      o = new URLSearchParams(i.search).get("type"),
      [f, d] = D.useState([]),
      { friendWishes: h, familyWishes: S, loading: E } = Mh();
    return (
      D.useEffect(() => {
        o === "family" ? (d(S), console.log(S)) : (d(h), console.log(h));
      }, [h, S]),
      console.log(o),
      Z.jsxs("div", {
        className: "mc",
        children: [
          Z.jsx("img", { src: Ah, alt: "", className: "bg" }),
          Z.jsx("img", { src: Gv, alt: "", className: "said" }),
          Z.jsxs("div", {
            className: "contentcon",
            children: [
              Z.jsx(xa, {
                delay: 0,
                style: { color: "aqua" },
                children: Z.jsx("h1", {
                  className: "f",
                  children:
                    o === "family" ? "Families Wishes" : "Friends Wishes",
                }),
              }),
              Z.jsx(Bv, {
                containerStyle: {
                  height: 500,
                  margin: 20,
                  gap: 10,
                  color: "aqua",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                },
                children: f.map((v) => Z.jsx(Lv, { item: v })),
              }),
            ],
          }),
        ],
      })
    );
  },
  Qv = () =>
    Z.jsx(Ev, {
      children: Z.jsxs(I0, {
        children: [
          Z.jsx(Uf, { path: "/", element: Z.jsx(wv, {}) }),
          Z.jsx(Uf, { path: "/wishes", element: Z.jsx(Xv, {}) }),
        ],
      }),
    }),
  Zv = D.createContext(),
  Vv = ({ children: i }) => {
    const [r, o] = D.useState({ message: "", type: "info", visible: !1 }),
      f = (d, h = "info") => {
        o({ message: d, type: h, visible: !0 }),
          setTimeout(() => {
            o({ message: "", type: "info", visible: !1 });
          }, 3e3);
      };
    return Z.jsxs(Zv.Provider, {
      value: { showAlert: f },
      children: [
        i,
        r.visible &&
          Z.jsx("div", {
            className: `alert-banner ${r.type}`,
            children: r.message,
          }),
      ],
    });
  };
function Kv() {
  return Z.jsx(Z.Fragment, {
    children: Z.jsx(Vv, { children: Z.jsx(qv, { children: Z.jsx(Qv, {}) }) }),
  });
}
i0.createRoot(document.getElementById("root")).render(
  Z.jsx(D.StrictMode, { children: Z.jsx(Kv, {}) })
);
