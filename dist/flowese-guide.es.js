import * as re from "react/jsx-runtime";
import * as V from "react";
import At, { forwardRef as Ft, useContext as et, useState as H, useRef as tt, useEffect as te, createContext as It, useCallback as B } from "react";
import { createPortal as ee } from "react-dom";
function _t(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function zt(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Mt = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(i) {
      var s;
      r.tags.length === 0 ? r.insertionPoint ? s = r.insertionPoint.nextSibling : r.prepend ? s = r.container.firstChild : s = r.before : s = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(i, s), r.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(zt(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = _t(i);
      try {
        s.insertRule(r, s.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var i;
      return (i = r.parentNode) == null ? void 0 : i.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), O = "-ms-", ye = "-moz-", v = "-webkit-", rt = "comm", _e = "rule", ze = "decl", Ot = "@import", nt = "@keyframes", Lt = "@layer", Wt = Math.abs, we = String.fromCharCode, Nt = Object.assign;
function Bt(e, t) {
  return M(e, 0) ^ 45 ? (((t << 2 ^ M(e, 0)) << 2 ^ M(e, 1)) << 2 ^ M(e, 2)) << 2 ^ M(e, 3) : 0;
}
function ot(e) {
  return e.trim();
}
function Vt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function S(e, t, n) {
  return e.replace(t, n);
}
function Pe(e, t) {
  return e.indexOf(t);
}
function M(e, t) {
  return e.charCodeAt(t) | 0;
}
function ne(e, t, n) {
  return e.slice(t, n);
}
function Y(e) {
  return e.length;
}
function Me(e) {
  return e.length;
}
function pe(e, t) {
  return t.push(e), e;
}
function Yt(e, t) {
  return e.map(t).join("");
}
var ve = 1, K = 1, it = 0, W = 0, F = 0, J = "";
function Se(e, t, n, r, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: i, children: s, line: ve, column: K, length: a, return: "" };
}
function Z(e, t) {
  return Nt(Se("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Dt() {
  return F;
}
function Ht() {
  return F = W > 0 ? M(J, --W) : 0, K--, F === 10 && (K = 1, ve--), F;
}
function N() {
  return F = W < it ? M(J, W++) : 0, K++, F === 10 && (K = 1, ve++), F;
}
function U() {
  return M(J, W);
}
function he() {
  return W;
}
function se(e, t) {
  return ne(J, e, t);
}
function oe(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function st(e) {
  return ve = K = 1, it = Y(J = e), W = 0, [];
}
function at(e) {
  return J = "", e;
}
function ge(e) {
  return ot(se(W - 1, Ae(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ut(e) {
  for (; (F = U()) && F < 33; )
    N();
  return oe(e) > 2 || oe(F) > 3 ? "" : " ";
}
function Gt(e, t) {
  for (; --t && N() && !(F < 48 || F > 102 || F > 57 && F < 65 || F > 70 && F < 97); )
    ;
  return se(e, he() + (t < 6 && U() == 32 && N() == 32));
}
function Ae(e) {
  for (; N(); )
    switch (F) {
      case e:
        return W;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ae(F);
        break;
      case 40:
        e === 41 && Ae(e);
        break;
      case 92:
        N();
        break;
    }
  return W;
}
function jt(e, t) {
  for (; N() && e + F !== 57; )
    if (e + F === 84 && U() === 47)
      break;
  return "/*" + se(t, W - 1) + "*" + we(e === 47 ? e : N());
}
function Xt(e) {
  for (; !oe(U()); )
    N();
  return se(e, W);
}
function Qt(e) {
  return at(me("", null, null, null, [""], e = st(e), 0, [0], e));
}
function me(e, t, n, r, i, s, a, f, l) {
  for (var u = 0, h = 0, y = a, R = 0, $ = 0, g = 0, m = 1, b = 1, x = 1, T = 0, P = "", A = i, d = s, I = r, C = P; b; )
    switch (g = T, T = N()) {
      case 40:
        if (g != 108 && M(C, y - 1) == 58) {
          Pe(C += S(ge(T), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += ge(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += Ut(g);
        break;
      case 92:
        C += Gt(he() - 1, 7);
        continue;
      case 47:
        switch (U()) {
          case 42:
          case 47:
            pe(qt(jt(N(), he()), t, n), l);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * m:
        f[u++] = Y(C) * x;
      case 125 * m:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            b = 0;
          case 59 + h:
            x == -1 && (C = S(C, /\f/g, "")), $ > 0 && Y(C) - y && pe($ > 32 ? De(C + ";", r, n, y - 1) : De(S(C, " ", "") + ";", r, n, y - 2), l);
            break;
          case 59:
            C += ";";
          default:
            if (pe(I = Ye(C, t, n, u, h, i, f, P, A = [], d = [], y), s), T === 123)
              if (h === 0)
                me(C, t, I, I, A, s, y, f, d);
              else
                switch (R === 99 && M(C, 3) === 110 ? 100 : R) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    me(e, I, I, r && pe(Ye(e, I, I, 0, 0, i, f, P, i, A = [], y), d), i, d, y, f, r ? A : d);
                    break;
                  default:
                    me(C, I, I, I, [""], d, 0, f, d);
                }
        }
        u = h = $ = 0, m = x = 1, P = C = "", y = a;
        break;
      case 58:
        y = 1 + Y(C), $ = g;
      default:
        if (m < 1) {
          if (T == 123)
            --m;
          else if (T == 125 && m++ == 0 && Ht() == 125)
            continue;
        }
        switch (C += we(T), T * m) {
          case 38:
            x = h > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            f[u++] = (Y(C) - 1) * x, x = 1;
            break;
          case 64:
            U() === 45 && (C += ge(N())), R = U(), h = y = Y(P = C += Xt(he())), T++;
            break;
          case 45:
            g === 45 && Y(C) == 2 && (m = 0);
        }
    }
  return s;
}
function Ye(e, t, n, r, i, s, a, f, l, u, h) {
  for (var y = i - 1, R = i === 0 ? s : [""], $ = Me(R), g = 0, m = 0, b = 0; g < r; ++g)
    for (var x = 0, T = ne(e, y + 1, y = Wt(m = a[g])), P = e; x < $; ++x)
      (P = ot(m > 0 ? R[x] + " " + T : S(T, /&\f/g, R[x]))) && (l[b++] = P);
  return Se(e, t, n, i === 0 ? _e : f, l, u, h);
}
function qt(e, t, n) {
  return Se(e, t, n, rt, we(Dt()), ne(e, 2, -2), 0);
}
function De(e, t, n, r) {
  return Se(e, t, n, ze, ne(e, 0, r), ne(e, r + 1, -1), r);
}
function q(e, t) {
  for (var n = "", r = Me(e), i = 0; i < r; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function Kt(e, t, n, r) {
  switch (e.type) {
    case Lt:
      if (e.children.length) break;
    case Ot:
    case ze:
      return e.return = e.return || e.value;
    case rt:
      return "";
    case nt:
      return e.return = e.value + "{" + q(e.children, r) + "}";
    case _e:
      e.value = e.props.join(",");
  }
  return Y(n = q(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Jt(e) {
  var t = Me(e);
  return function(n, r, i, s) {
    for (var a = "", f = 0; f < t; f++)
      a += e[f](n, r, i, s) || "";
    return a;
  };
}
function Zt(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function er(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var tr = function(t, n, r) {
  for (var i = 0, s = 0; i = s, s = U(), i === 38 && s === 12 && (n[r] = 1), !oe(s); )
    N();
  return se(t, W);
}, rr = function(t, n) {
  var r = -1, i = 44;
  do
    switch (oe(i)) {
      case 0:
        i === 38 && U() === 12 && (n[r] = 1), t[r] += tr(W - 1, n, r);
        break;
      case 2:
        t[r] += ge(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = U() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += we(i);
    }
  while (i = N());
  return t;
}, nr = function(t, n) {
  return at(rr(st(t), n));
}, He = /* @__PURE__ */ new WeakMap(), or = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !He.get(r)) && !i) {
      He.set(t, !0);
      for (var s = [], a = nr(n, s), f = r.props, l = 0, u = 0; l < a.length; l++)
        for (var h = 0; h < f.length; h++, u++)
          t.props[u] = s[l] ? a[l].replace(/&\f/g, f[h]) : f[h] + " " + a[l];
    }
  }
}, ir = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function ct(e, t) {
  switch (Bt(e, t)) {
    case 5103:
      return v + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return v + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return v + e + ye + e + O + e + e;
    case 6828:
    case 4268:
      return v + e + O + e + e;
    case 6165:
      return v + e + O + "flex-" + e + e;
    case 5187:
      return v + e + S(e, /(\w+).+(:[^]+)/, v + "box-$1$2" + O + "flex-$1$2") + e;
    case 5443:
      return v + e + O + "flex-item-" + S(e, /flex-|-self/, "") + e;
    case 4675:
      return v + e + O + "flex-line-pack" + S(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return v + e + O + S(e, "shrink", "negative") + e;
    case 5292:
      return v + e + O + S(e, "basis", "preferred-size") + e;
    case 6060:
      return v + "box-" + S(e, "-grow", "") + v + e + O + S(e, "grow", "positive") + e;
    case 4554:
      return v + S(e, /([^-])(transform)/g, "$1" + v + "$2") + e;
    case 6187:
      return S(S(S(e, /(zoom-|grab)/, v + "$1"), /(image-set)/, v + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return S(e, /(image-set\([^]*)/, v + "$1$`$1");
    case 4968:
      return S(S(e, /(.+:)(flex-)?(.*)/, v + "box-pack:$3" + O + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + v + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return S(e, /(.+)-inline(.+)/, v + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Y(e) - 1 - t > 6) switch (M(e, t + 1)) {
        case 109:
          if (M(e, t + 4) !== 45) break;
        case 102:
          return S(e, /(.+:)(.+)-([^]+)/, "$1" + v + "$2-$3$1" + ye + (M(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Pe(e, "stretch") ? ct(S(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (M(e, t + 1) !== 115) break;
    case 6444:
      switch (M(e, Y(e) - 3 - (~Pe(e, "!important") && 10))) {
        case 107:
          return S(e, ":", ":" + v) + e;
        case 101:
          return S(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + v + (M(e, 14) === 45 ? "inline-" : "") + "box$3$1" + v + "$2$3$1" + O + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (M(e, t + 11)) {
        case 114:
          return v + e + O + S(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return v + e + O + S(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return v + e + O + S(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return v + e + O + e + e;
  }
  return e;
}
var sr = function(t, n, r, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case ze:
      t.return = ct(t.value, t.length);
      break;
    case nt:
      return q([Z(t, {
        value: S(t.value, "@", "@" + v)
      })], i);
    case _e:
      if (t.length) return Yt(t.props, function(s) {
        switch (Vt(s, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return q([Z(t, {
              props: [S(s, /:(read-\w+)/, ":" + ye + "$1")]
            })], i);
          case "::placeholder":
            return q([Z(t, {
              props: [S(s, /:(plac\w+)/, ":" + v + "input-$1")]
            }), Z(t, {
              props: [S(s, /:(plac\w+)/, ":" + ye + "$1")]
            }), Z(t, {
              props: [S(s, /:(plac\w+)/, O + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, ar = [sr], cr = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(m) {
      var b = m.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || ar, s = {}, a, f = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(m) {
      for (var b = m.getAttribute("data-emotion").split(" "), x = 1; x < b.length; x++)
        s[b[x]] = !0;
      f.push(m);
    }
  );
  var l, u = [or, ir];
  {
    var h, y = [Kt, Zt(function(m) {
      h.insert(m);
    })], R = Jt(u.concat(i, y)), $ = function(b) {
      return q(Qt(b), R);
    };
    l = function(b, x, T, P) {
      h = T, $(b ? b + "{" + x.styles + "}" : x.styles), P && (g.inserted[x.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new Mt({
      key: n,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: l
  };
  return g.sheet.hydrate(f), g;
}, Fe = { exports: {} }, E = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function lr() {
  if (Ue) return E;
  Ue = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, R = e ? Symbol.for("react.suspense_list") : 60120, $ = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function P(d) {
    if (typeof d == "object" && d !== null) {
      var I = d.$$typeof;
      switch (I) {
        case t:
          switch (d = d.type, d) {
            case l:
            case u:
            case r:
            case s:
            case i:
            case y:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case f:
                case h:
                case g:
                case $:
                case a:
                  return d;
                default:
                  return I;
              }
          }
        case n:
          return I;
      }
    }
  }
  function A(d) {
    return P(d) === u;
  }
  return E.AsyncMode = l, E.ConcurrentMode = u, E.ContextConsumer = f, E.ContextProvider = a, E.Element = t, E.ForwardRef = h, E.Fragment = r, E.Lazy = g, E.Memo = $, E.Portal = n, E.Profiler = s, E.StrictMode = i, E.Suspense = y, E.isAsyncMode = function(d) {
    return A(d) || P(d) === l;
  }, E.isConcurrentMode = A, E.isContextConsumer = function(d) {
    return P(d) === f;
  }, E.isContextProvider = function(d) {
    return P(d) === a;
  }, E.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === t;
  }, E.isForwardRef = function(d) {
    return P(d) === h;
  }, E.isFragment = function(d) {
    return P(d) === r;
  }, E.isLazy = function(d) {
    return P(d) === g;
  }, E.isMemo = function(d) {
    return P(d) === $;
  }, E.isPortal = function(d) {
    return P(d) === n;
  }, E.isProfiler = function(d) {
    return P(d) === s;
  }, E.isStrictMode = function(d) {
    return P(d) === i;
  }, E.isSuspense = function(d) {
    return P(d) === y;
  }, E.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === r || d === u || d === s || d === i || d === y || d === R || typeof d == "object" && d !== null && (d.$$typeof === g || d.$$typeof === $ || d.$$typeof === a || d.$$typeof === f || d.$$typeof === h || d.$$typeof === b || d.$$typeof === x || d.$$typeof === T || d.$$typeof === m);
  }, E.typeOf = P, E;
}
var k = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function dr() {
  return Ge || (Ge = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, R = e ? Symbol.for("react.suspense_list") : 60120, $ = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function P(p) {
      return typeof p == "string" || typeof p == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      p === r || p === u || p === s || p === i || p === y || p === R || typeof p == "object" && p !== null && (p.$$typeof === g || p.$$typeof === $ || p.$$typeof === a || p.$$typeof === f || p.$$typeof === h || p.$$typeof === b || p.$$typeof === x || p.$$typeof === T || p.$$typeof === m);
    }
    function A(p) {
      if (typeof p == "object" && p !== null) {
        var Ee = p.$$typeof;
        switch (Ee) {
          case t:
            var ue = p.type;
            switch (ue) {
              case l:
              case u:
              case r:
              case s:
              case i:
              case y:
                return ue;
              default:
                var Ve = ue && ue.$$typeof;
                switch (Ve) {
                  case f:
                  case h:
                  case g:
                  case $:
                  case a:
                    return Ve;
                  default:
                    return Ee;
                }
            }
          case n:
            return Ee;
        }
      }
    }
    var d = l, I = u, C = f, ce = a, le = t, de = h, j = r, fe = g, Ce = $, z = n, L = s, X = i, Q = y, Ne = !1;
    function bt(p) {
      return Ne || (Ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Be(p) || A(p) === l;
    }
    function Be(p) {
      return A(p) === u;
    }
    function xt(p) {
      return A(p) === f;
    }
    function wt(p) {
      return A(p) === a;
    }
    function vt(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function St(p) {
      return A(p) === h;
    }
    function Ct(p) {
      return A(p) === r;
    }
    function Et(p) {
      return A(p) === g;
    }
    function kt(p) {
      return A(p) === $;
    }
    function Rt(p) {
      return A(p) === n;
    }
    function $t(p) {
      return A(p) === s;
    }
    function Tt(p) {
      return A(p) === i;
    }
    function Pt(p) {
      return A(p) === y;
    }
    k.AsyncMode = d, k.ConcurrentMode = I, k.ContextConsumer = C, k.ContextProvider = ce, k.Element = le, k.ForwardRef = de, k.Fragment = j, k.Lazy = fe, k.Memo = Ce, k.Portal = z, k.Profiler = L, k.StrictMode = X, k.Suspense = Q, k.isAsyncMode = bt, k.isConcurrentMode = Be, k.isContextConsumer = xt, k.isContextProvider = wt, k.isElement = vt, k.isForwardRef = St, k.isFragment = Ct, k.isLazy = Et, k.isMemo = kt, k.isPortal = Rt, k.isProfiler = $t, k.isStrictMode = Tt, k.isSuspense = Pt, k.isValidElementType = P, k.typeOf = A;
  }()), k;
}
process.env.NODE_ENV === "production" ? Fe.exports = lr() : Fe.exports = dr();
var fr = Fe.exports, lt = fr, ur = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, pr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, dt = {};
dt[lt.ForwardRef] = ur;
dt[lt.Memo] = pr;
var hr = !0;
function gr(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (r += i + " ");
  }), r;
}
var ft = function(t, n, r) {
  var i = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  hr === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, mr = function(t, n, r) {
  ft(t, n, r);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var s = n;
    do
      t.insert(n === s ? "." + i : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function yr(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var br = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, xr = /[A-Z]|^ms/g, wr = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ut = function(t) {
  return t.charCodeAt(1) === 45;
}, je = function(t) {
  return t != null && typeof t != "boolean";
}, ke = /* @__PURE__ */ er(function(e) {
  return ut(e) ? e : e.replace(xr, "-$&").toLowerCase();
}), Xe = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(wr, function(r, i, s) {
          return D = {
            name: i,
            styles: s,
            next: D
          }, i;
        });
  }
  return br[t] !== 1 && !ut(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function ie(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var i = n;
      if (i.anim === 1)
        return D = {
          name: i.name,
          styles: i.styles,
          next: D
        }, i.name;
      var s = n;
      if (s.styles !== void 0) {
        var a = s.next;
        if (a !== void 0)
          for (; a !== void 0; )
            D = {
              name: a.name,
              styles: a.styles,
              next: D
            }, a = a.next;
        var f = s.styles + ";";
        return f;
      }
      return vr(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = D, u = n(e);
        return D = l, ie(e, t, u);
      }
      break;
    }
  }
  var h = n;
  return h;
}
function vr(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += ie(e, t, n[i]) + ";";
  else
    for (var s in n) {
      var a = n[s];
      if (typeof a != "object") {
        var f = a;
        je(f) && (r += ke(s) + ":" + Xe(s, f) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && t == null)
        for (var l = 0; l < a.length; l++)
          je(a[l]) && (r += ke(s) + ":" + Xe(s, a[l]) + ";");
      else {
        var u = ie(e, t, a);
        switch (s) {
          case "animation":
          case "animationName": {
            r += ke(s) + ":" + u + ";";
            break;
          }
          default:
            r += s + "{" + u + "}";
        }
      }
    }
  return r;
}
var Qe = /label:\s*([^\s;{]+)\s*(;|$)/g, D;
function pt(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  D = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    r = !1, i += ie(n, t, s);
  else {
    var a = s;
    i += a[0];
  }
  for (var f = 1; f < e.length; f++)
    if (i += ie(n, t, e[f]), r) {
      var l = s;
      i += l[f];
    }
  Qe.lastIndex = 0;
  for (var u = "", h; (h = Qe.exec(i)) !== null; )
    u += "-" + h[1];
  var y = yr(i) + u;
  return {
    name: y,
    styles: i,
    next: D
  };
}
var Sr = function(t) {
  return t();
}, Cr = V.useInsertionEffect ? V.useInsertionEffect : !1, Er = Cr || Sr, ht = /* @__PURE__ */ V.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ cr({
    key: "css"
  }) : null
);
ht.Provider;
var kr = function(t) {
  return /* @__PURE__ */ Ft(function(n, r) {
    var i = et(ht);
    return t(n, i, r);
  });
}, Rr = /* @__PURE__ */ V.createContext({}), ae = {}.hasOwnProperty, Ie = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Oe = function(t, n) {
  var r = {};
  for (var i in n)
    ae.call(n, i) && (r[i] = n[i]);
  return r[Ie] = t, r;
}, $r = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return ft(n, r, i), Er(function() {
    return mr(n, r, i);
  }), null;
}, Tr = /* @__PURE__ */ kr(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var i = e[Ie], s = [r], a = "";
  typeof e.className == "string" ? a = gr(t.registered, s, e.className) : e.className != null && (a = e.className + " ");
  var f = pt(s, void 0, V.useContext(Rr));
  a += t.key + "-" + f.name;
  var l = {};
  for (var u in e)
    ae.call(e, u) && u !== "css" && u !== Ie && (l[u] = e[u]);
  return l.className = a, n && (l.ref = n), /* @__PURE__ */ V.createElement(V.Fragment, null, /* @__PURE__ */ V.createElement($r, {
    cache: t,
    serialized: f,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ V.createElement(i, l));
}), Le = Tr, be = re.Fragment, c = function(t, n, r) {
  return ae.call(n, "css") ? re.jsx(Le, Oe(t, n), r) : re.jsx(t, n, r);
}, w = function(t, n, r) {
  return ae.call(n, "css") ? re.jsxs(Le, Oe(t, n), r) : re.jsxs(t, n, r);
}, qe = function(t, n) {
  var r = arguments;
  if (n == null || !ae.call(n, "css"))
    return V.createElement.apply(void 0, r);
  var i = r.length, s = new Array(i);
  s[0] = Le, s[1] = Oe(t, n);
  for (var a = 2; a < i; a++)
    s[a] = r[a];
  return V.createElement.apply(null, s);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(qe || (qe = {}));
function _() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return pt(t);
}
const Ke = {
  onboarding: 0,
  feature_tour: 1,
  training: 2,
  nudge: 3
};
function Pr(e, t) {
  const n = [], r = [];
  e.forEach((a) => {
    var l;
    ((l = a.triggerUrls) == null ? void 0 : l.some(
      (u) => t === u || t.startsWith(u)
    )) ? n.push(a) : r.push(a);
  });
  const i = (a, f) => {
    const l = Ke[a.type] ?? 99, u = Ke[f.type] ?? 99;
    return l - u;
  };
  return n.sort(i), r.sort(i), [...n, ...r].map((a, f) => ({
    flow: a,
    priority: f < n.length ? "page-matched" : "other",
    isRecommended: f === 0
    // First flow is always recommended
  }));
}
function Ar(e, t) {
  if (!t.trim())
    return e;
  const n = t.toLowerCase().trim();
  return e.filter((i) => {
    var h, y;
    const s = i.flow, a = s.name.toLowerCase().includes(n), f = (h = s.description) == null ? void 0 : h.toLowerCase().includes(n), l = (y = s.context) == null ? void 0 : y.toLowerCase().includes(n), u = s.type.toLowerCase().includes(n);
    return a || f || l || u;
  });
}
const Re = {};
function gt() {
  return typeof window < "u" && window.location.hostname === "localhost" ? window.location.origin : (Re == null ? void 0 : Re.VITE_FLOWESE_API_URL) || "http://app.flowese.io";
}
async function Fr(e) {
  try {
    const t = gt(), n = await fetch(
      `${t}/api/flows?applicationId=${e}`
    );
    if (!n.ok)
      throw new Error(`HTTP error! status: ${n.status}`);
    const r = await n.json();
    if (r.success && r.flows)
      return r.flows.filter((i) => i.status === "active");
    throw new Error(r.error || "Failed to fetch flows");
  } catch (t) {
    throw console.error("Error fetching flows:", t), t;
  }
}
function Ir(e) {
  const t = e.getBoundingClientRect();
  return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth);
}
function $e(e, t = 300, n = 200) {
  const r = e.getBoundingClientRect(), i = window.innerHeight - r.bottom, s = r.top, a = window.innerWidth - r.left;
  return i >= n + 20 ? {
    top: r.bottom + 10,
    left: r.left + r.width / 2 - t / 2,
    placement: "bottom"
  } : s >= n + 20 ? {
    top: r.top - n - 10,
    left: r.left + r.width / 2 - t / 2,
    placement: "top"
  } : a >= t + 20 ? {
    top: r.top + r.height / 2 - n / 2,
    left: r.right + 10,
    placement: "right"
  } : {
    top: r.top + r.height / 2 - n / 2,
    left: r.left - t - 10,
    placement: "left"
  };
}
const o = {
  colors: {
    // Primary colors (brand colors)
    primary: "#2563eb",
    onPrimary: "#ffffff",
    primaryContainer: "#dbeafe",
    onPrimaryContainer: "#1e40af",
    // Secondary colors
    secondary: "#64748b",
    onSecondary: "#ffffff",
    // Tertiary colors
    tertiary: "#7c3aed",
    // Surface colors
    surface: "#ffffff",
    onSurface: "#111827",
    surfaceVariant: "#f9fafb",
    onSurfaceVariant: "#6b7280",
    // Outline colors
    outline: "#e5e7eb",
    outlineVariant: "#d1d5db",
    // Shadow colors
    shadow: "rgba(0, 0, 0, 0.1)",
    scrim: "rgba(0, 0, 0, 0.8)"
  },
  // Spacing scale (4px base unit following Material Design)
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32
  },
  // Border radius
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999
  },
  // Typography scale
  typography: {
    fontSize: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      "2xl": 24
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5
    }
  },
  // Elevation (box-shadow)
  elevation: {
    md: "0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.06)",
    "2xl": "0 25px 50px rgba(0, 0, 0, 0.25)"
  },
  // Animation
  animation: {
    duration: {
      normal: "200ms"
    },
    easing: {
      standard: "cubic-bezier(0.2, 0, 0, 1)"
    }
  },
  // Z-index scale
  zIndex: {
    modal: 1040,
    tooltip: 1060,
    overlay: 999999
  }
}, _r = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  whiteSpace: "nowrap",
  borderRadius: o.borderRadius.md,
  fontSize: o.typography.fontSize.sm,
  fontWeight: o.typography.fontWeight.medium,
  transition: `all ${o.animation.duration.normal} ${o.animation.easing.standard}`,
  cursor: "pointer",
  border: "none",
  outline: "none",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
  "&:focus-visible": {
    outline: `2px solid ${o.colors.primary}`,
    outlineOffset: 2
  },
  "&:disabled": {
    pointerEvents: "none",
    opacity: 0.5
  }
}, zr = {
  primary: {
    background: o.colors.primary,
    color: o.colors.onPrimary,
    "&:hover:not(:disabled)": {
      background: o.colors.onPrimaryContainer
    }
  },
  outline: {
    background: "transparent",
    border: `1px solid ${o.colors.outline}`,
    color: o.colors.onSurface,
    "&:hover:not(:disabled)": {
      background: o.colors.surfaceVariant,
      borderColor: o.colors.outlineVariant
    }
  },
  ghost: {
    background: "transparent",
    color: o.colors.onSurface,
    "&:hover:not(:disabled)": {
      background: o.colors.surfaceVariant
    }
  }
}, Mr = {
  sm: {
    height: 32,
    padding: `0 ${o.spacing.md}px`,
    fontSize: o.typography.fontSize.xs
  },
  default: {
    height: 40,
    padding: `0 ${o.spacing.lg}px`
  }
}, Or = {
  display: "inline-flex",
  alignItems: "center",
  borderRadius: o.borderRadius.full,
  padding: `${o.spacing.xs / 2}px ${o.spacing.sm}px`,
  fontSize: o.typography.fontSize.xs,
  fontWeight: o.typography.fontWeight.medium,
  transition: `all ${o.animation.duration.normal}`,
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
}, Lr = {
  outline: {
    background: "transparent",
    border: `1px solid ${o.colors.outline}`,
    color: o.colors.onSurface
  }
}, Wr = {
  position: "fixed",
  inset: 0,
  zIndex: o.zIndex.modal,
  background: o.colors.scrim,
  backdropFilter: "blur(8px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: o.spacing.md
}, Nr = {
  position: "relative",
  background: `linear-gradient(135deg, ${o.colors.surface} 0%, ${o.colors.surfaceVariant} 100%)`,
  borderRadius: o.borderRadius.xl,
  boxShadow: o.elevation["2xl"],
  width: "100%",
  maxHeight: "85vh",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  backdropFilter: "blur(20px)",
  border: `1px solid ${o.colors.outline}`
}, Br = {
  padding: `${o.spacing.xl}px ${o.spacing.xl}px ${o.spacing.lg}px`,
  flexShrink: 0,
  background: `linear-gradient(135deg, ${o.colors.primary} 0%, ${o.colors.tertiary} 100%)`,
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='12' cy='12' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat`,
    opacity: 0.3
  }
}, Vr = {
  fontSize: o.typography.fontSize["2xl"],
  fontWeight: o.typography.fontWeight.bold,
  lineHeight: o.typography.lineHeight.tight,
  color: o.colors.onPrimary,
  margin: `0 0 ${o.spacing.md}px 0`,
  display: "flex",
  alignItems: "center",
  gap: o.spacing.md,
  position: "relative",
  zIndex: 1,
  textShadow: `0 2px 4px ${o.colors.shadow}`,
  svg: {
    width: 28,
    height: 28,
    filter: `drop-shadow(0 2px 4px ${o.colors.shadow})`
  }
}, Yr = {
  fontSize: o.typography.fontSize.base,
  color: o.colors.onPrimary,
  opacity: 0.9,
  margin: 0,
  lineHeight: o.typography.lineHeight.normal,
  position: "relative",
  zIndex: 1,
  textShadow: `0 1px 2px ${o.colors.shadow}`
}, Te = {
  background: `linear-gradient(90deg, ${o.colors.surfaceVariant} 25%, ${o.colors.outline} 50%, ${o.colors.surfaceVariant} 75%)`,
  backgroundSize: "200% 100%",
  animation: "loading 1.5s infinite",
  borderRadius: o.borderRadius.sm,
  "@keyframes loading": {
    "0%": {
      backgroundPosition: "200% 0"
    },
    "100%": {
      backgroundPosition: "-200% 0"
    }
  }
}, We = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
}, G = At.forwardRef(
  ({ variant: e = "primary", size: t = "default", children: n, ...r }, i) => /* @__PURE__ */ c(
    "button",
    {
      ref: i,
      css: [_r, zr[e], Mr[t]],
      ...r,
      children: n
    }
  )
);
G.displayName = "Button";
const mt = ({
  recommendations: e,
  onFlowSelect: t
}) => {
  const n = ({ flow: r, isRecommended: i = !1, priority: s = "other" }) => /* @__PURE__ */ w(
    "div",
    {
      css: {
        display: "flex",
        alignItems: "center",
        padding: o.spacing.lg,
        backgroundColor: o.colors.surface,
        border: `1px solid ${o.colors.outline}`,
        borderRadius: o.borderRadius.lg,
        cursor: "pointer",
        transition: `all ${o.animation.duration.normal}`,
        "&:hover": {
          backgroundColor: o.colors.surfaceVariant,
          borderColor: o.colors.primary,
          transform: "translateY(-1px)",
          boxShadow: o.elevation.md
        }
      },
      onClick: () => t(r),
      children: [
        /* @__PURE__ */ w("div", { css: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ w(
            "div",
            {
              css: {
                display: "flex",
                alignItems: "center",
                gap: o.spacing.sm,
                marginBottom: o.spacing.xs
              },
              children: [
                /* @__PURE__ */ c(
                  "h3",
                  {
                    css: {
                      fontSize: o.typography.fontSize.lg,
                      fontWeight: o.typography.fontWeight.semibold,
                      color: o.colors.onSurface,
                      margin: 0
                    },
                    children: r.name
                  }
                ),
                i && /* @__PURE__ */ c(
                  "span",
                  {
                    css: {
                      backgroundColor: o.colors.primary,
                      color: o.colors.onPrimary,
                      fontSize: o.typography.fontSize.xs,
                      fontWeight: o.typography.fontWeight.medium,
                      padding: "2px 8px",
                      borderRadius: o.borderRadius.full
                    },
                    children: "Recommended"
                  }
                ),
                s === "page-matched" && !i && /* @__PURE__ */ c(
                  "span",
                  {
                    css: {
                      backgroundColor: o.colors.secondary,
                      color: o.colors.onSecondary,
                      fontSize: o.typography.fontSize.xs,
                      fontWeight: o.typography.fontWeight.medium,
                      padding: "2px 8px",
                      borderRadius: o.borderRadius.full
                    },
                    children: "Page Relevant"
                  }
                )
              ]
            }
          ),
          r.description && /* @__PURE__ */ c(
            "p",
            {
              css: {
                fontSize: o.typography.fontSize.sm,
                color: o.colors.onSurfaceVariant,
                lineHeight: o.typography.lineHeight.normal,
                margin: `0 0 ${o.spacing.sm}px 0`,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
              },
              children: r.description
            }
          ),
          /* @__PURE__ */ w(
            "div",
            {
              css: {
                display: "flex",
                alignItems: "center",
                gap: o.spacing.md,
                fontSize: o.typography.fontSize.xs,
                color: o.colors.onSurfaceVariant
              },
              children: [
                /* @__PURE__ */ w(
                  "span",
                  {
                    css: {
                      display: "flex",
                      alignItems: "center",
                      gap: o.spacing.xs
                    },
                    children: [
                      /* @__PURE__ */ w(
                        "svg",
                        {
                          width: "12",
                          height: "12",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          children: [
                            /* @__PURE__ */ c("circle", { cx: "12", cy: "12", r: "10" }),
                            /* @__PURE__ */ c("polyline", { points: "12,6 12,12 16,14" })
                          ]
                        }
                      ),
                      r.estimatedDurationMinutes || 2,
                      " minute",
                      (r.estimatedDurationMinutes || 2) !== 1 ? "s" : ""
                    ]
                  }
                ),
                Array.isArray(r.steps) && r.steps.length > 0 && /* @__PURE__ */ w(
                  "span",
                  {
                    css: {
                      display: "flex",
                      alignItems: "center",
                      gap: o.spacing.xs
                    },
                    children: [
                      /* @__PURE__ */ w(
                        "svg",
                        {
                          width: "12",
                          height: "12",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          children: [
                            /* @__PURE__ */ c("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
                            /* @__PURE__ */ c("polyline", { points: "9,9 9,15 15,15" })
                          ]
                        }
                      ),
                      r.steps.length,
                      " step",
                      r.steps.length !== 1 ? "s" : ""
                    ]
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ c(
          G,
          {
            variant: i ? "primary" : "outline",
            size: "sm",
            css: {
              marginLeft: o.spacing.lg,
              flexShrink: 0
            },
            onClick: (a) => {
              a.stopPropagation(), t(r);
            },
            children: "Start"
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ c(
    "div",
    {
      css: {
        display: "flex",
        flexDirection: "column",
        gap: o.spacing.lg,
        height: "100%",
        // Fill available space
        overflow: "auto",
        "&::-webkit-scrollbar": {
          width: 6
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent"
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(0, 0, 0, 0.1)",
          borderRadius: 3
        }
      },
      children: e == null ? void 0 : e.map((r) => /* @__PURE__ */ c(
        n,
        {
          flow: r.flow,
          isRecommended: r.isRecommended,
          priority: r.priority
        },
        r.flow.id
      ))
    }
  );
};
mt.displayName = "FlowList";
const Dr = ({ size: e = 20, className: t }) => /* @__PURE__ */ w(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    className: t,
    children: [
      /* @__PURE__ */ c("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ c("path", { d: "m21 21-4.35-4.35" })
    ]
  }
), xe = ({ size: e = 20, className: t }) => /* @__PURE__ */ w(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    className: t,
    children: [
      /* @__PURE__ */ c("path", { d: "M12 8V4H8" }),
      /* @__PURE__ */ c("rect", { width: "16", height: "12", x: "4", y: "8", rx: "2" }),
      /* @__PURE__ */ c("path", { d: "m9 16 0 0" }),
      /* @__PURE__ */ c("path", { d: "m15 16 0 0" })
    ]
  }
), yt = ({ size: e = 20, className: t }) => /* @__PURE__ */ w(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    className: t,
    children: [
      /* @__PURE__ */ c("path", { d: "m18 6-12 12" }),
      /* @__PURE__ */ c("path", { d: "m6 6 12 12" })
    ]
  }
), Hr = ({ size: e = 20, className: t }) => /* @__PURE__ */ c(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    className: t,
    children: /* @__PURE__ */ c("path", { d: "m15 18-6-6 6-6" })
  }
), Ur = ({ size: e = 20, className: t }) => /* @__PURE__ */ c(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    className: t,
    children: /* @__PURE__ */ c("path", { d: "m9 18 6-6-6-6" })
  }
), Gr = ({ size: e = 20, className: t }) => /* @__PURE__ */ w(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    className: t,
    children: [
      /* @__PURE__ */ c("path", { d: "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" }),
      /* @__PURE__ */ c("path", { d: "m13 13 6 6" })
    ]
  }
), jr = ({ size: e = 20, className: t }) => /* @__PURE__ */ c(
  "svg",
  {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    className: t,
    children: /* @__PURE__ */ c("path", { d: "M13 7l5 5m0 0l-5 5m5-5H6" })
  }
), Xr = {
  position: "relative",
  width: "100%"
}, Qr = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: 56,
  // MD3 standard height
  backgroundColor: o.colors.surfaceVariant,
  borderRadius: o.borderRadius.full,
  // MD3 search bars are fully rounded
  border: "none",
  overflow: "hidden",
  transition: `all ${o.animation.duration.normal}`,
  "&:focus-within": {
    backgroundColor: o.colors.surface,
    boxShadow: o.elevation.md
  }
}, qr = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 48,
  height: 48,
  margin: `0 ${o.spacing.xs}px`,
  color: o.colors.onSurfaceVariant,
  flexShrink: 0
}, Kr = {
  flex: 1,
  height: "100%",
  padding: `0 ${o.spacing.md}px`,
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
  fontSize: o.typography.fontSize.base,
  fontWeight: o.typography.fontWeight.normal,
  color: o.colors.onSurface,
  "&::placeholder": {
    color: o.colors.onSurfaceVariant,
    fontWeight: o.typography.fontWeight.normal
  }
}, Jr = {
  display: "flex",
  flexDirection: "column",
  gap: o.spacing.xs,
  marginTop: o.spacing.sm
}, Zr = {
  display: "flex",
  flexWrap: "wrap",
  gap: o.spacing.xs
}, en = {
  display: "flex",
  alignItems: "center",
  padding: `${o.spacing.xs}px ${o.spacing.sm}px`,
  backgroundColor: o.colors.surfaceVariant,
  border: `1px solid ${o.colors.outline}`,
  borderRadius: o.borderRadius.full,
  fontSize: o.typography.fontSize.xs,
  fontWeight: o.typography.fontWeight.medium,
  color: o.colors.onSurfaceVariant,
  cursor: "pointer",
  transition: `all ${o.animation.duration.normal}`,
  whiteSpace: "nowrap",
  "&:hover": {
    backgroundColor: o.colors.surface,
    borderColor: o.colors.primary,
    color: o.colors.onSurface,
    transform: "scale(1.02)"
  },
  "&:focus-visible": {
    outline: `2px solid ${o.colors.primary}`,
    outlineOffset: 2
  }
}, tn = {
  flex: 1,
  overflowY: "auto",
  overflowX: "hidden",
  paddingRight: o.spacing.xs,
  // Space for scrollbar
  // Custom scrollbar styling
  "&::-webkit-scrollbar": {
    width: 8
  },
  "&::-webkit-scrollbar-track": {
    background: o.colors.surfaceVariant,
    borderRadius: o.borderRadius.full
  },
  "&::-webkit-scrollbar-thumb": {
    background: o.colors.outline,
    borderRadius: o.borderRadius.full,
    "&:hover": {
      background: o.colors.outlineVariant
    }
  }
}, rn = {
  display: "flex",
  flexDirection: "column",
  gap: 0,
  marginTop: o.spacing.md,
  marginBottom: o.spacing.md
}, nn = _`
  padding: 16px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
  margin-bottom: 16px;
`, on = _`
  font-size: 14px;
  color: #dc2626;
`, sn = _`
  display: flex;
  flex-direction: column;
  gap: 16px;
`, an = _`
  text-align: center;
  padding: 48px 0;
`, cn = _`
  width: 48px;
  height: 48px;
  color: #9ca3af;
  margin: 0 auto 16px;
`, ln = _`
  font-size: 18px;
  font-weight: 500;
  color: #111827;
  margin-bottom: 8px;
`, dn = _`
  color: #6b7280;
  margin-bottom: 16px;
`, fn = {
  borderRadius: o.borderRadius.lg,
  border: `1px solid ${o.colors.outline}`,
  background: o.colors.surface,
  textAlign: "left"
}, un = {
  padding: o.spacing.lg,
  borderBottom: `1px solid ${o.colors.outline}`,
  background: o.colors.surfaceVariant
}, pn = {
  padding: o.spacing.lg
}, hn = _`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
function Je({
  isOpen: e,
  onClose: t,
  recommendations: n,
  onFlowSelect: r,
  isLoading: i
}) {
  const [s, a] = H(""), [f, l] = H(null), u = (n == null ? void 0 : n.slice(0, 3).map((g) => g.flow)) || [], h = Ar(n || [], s), y = (g) => {
    a(g);
  }, R = async (g) => {
    try {
      l(null);
      const m = gt(), x = await (await fetch(`${m}/api/flows/${g.id}`)).json();
      if (x.error) {
        console.error("Failed to load flow details:", x.error), l(x.error);
        return;
      }
      r(x.flow), t();
    } catch (m) {
      console.error("Failed to load flow details:", m), l("Failed to load flow details");
    }
  };
  if (!e) return null;
  const $ = () => /* @__PURE__ */ w("div", { css: fn, children: [
    /* @__PURE__ */ w("div", { css: un, children: [
      /* @__PURE__ */ c(
        "div",
        {
          css: [
            Te,
            {
              height: 16,
              width: "75%",
              marginBottom: 8
            }
          ]
        }
      ),
      /* @__PURE__ */ c(
        "div",
        {
          css: [
            Te,
            {
              height: 12,
              width: "50%"
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ c("div", { css: pn, children: /* @__PURE__ */ c(
      "div",
      {
        css: [
          Te,
          {
            height: 64,
            width: "100%"
          }
        ]
      }
    ) })
  ] });
  return ee(
    /* @__PURE__ */ c("div", { css: Wr, onClick: t, children: /* @__PURE__ */ w(
      "div",
      {
        css: [
          Nr,
          {
            maxWidth: 700,
            width: "85vw"
          }
        ],
        onClick: (g) => g.stopPropagation(),
        children: [
          /* @__PURE__ */ w("div", { css: Br, children: [
            /* @__PURE__ */ c(
              G,
              {
                css: hn,
                onClick: t,
                "aria-label": "Close modal",
                children: /* @__PURE__ */ c(yt, { size: 20 })
              }
            ),
            /* @__PURE__ */ w("h2", { css: Vr, children: [
              /* @__PURE__ */ c(xe, { size: 20 }),
              "Let's get you started!"
            ] }),
            /* @__PURE__ */ c("p", { css: Yr, children: "Choose a guided tour below to learn the features that matter most to you." })
          ] }),
          /* @__PURE__ */ w(
            "div",
            {
              css: {
                padding: "0 32px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                height: 500,
                // Fixed height to prevent modal from changing size
                overflow: "hidden",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E") repeat`,
                  opacity: 0.5,
                  zIndex: 0
                },
                "> *": {
                  position: "relative",
                  zIndex: 1
                }
              },
              children: [
                /* @__PURE__ */ w("div", { css: rn, children: [
                  /* @__PURE__ */ c("div", { css: Xr, children: /* @__PURE__ */ w("div", { css: Qr, children: [
                    /* @__PURE__ */ c("div", { css: qr, children: /* @__PURE__ */ c(Dr, { size: 20 }) }),
                    /* @__PURE__ */ c(
                      "input",
                      {
                        css: Kr,
                        placeholder: "Search flows or try a suggestion below…",
                        value: s,
                        onChange: (g) => a(g.target.value),
                        type: "text"
                      }
                    )
                  ] }) }),
                  u.length > 0 && /* @__PURE__ */ c("div", { css: Jr, children: /* @__PURE__ */ c("div", { css: Zr, children: u.map((g) => /* @__PURE__ */ c(
                    "button",
                    {
                      css: en,
                      onClick: () => y(g.name),
                      type: "button",
                      title: `Search for "${g.name}"`,
                      children: g.name
                    },
                    g.id
                  )) }) })
                ] }),
                /* @__PURE__ */ w("div", { css: tn, children: [
                  f && /* @__PURE__ */ c("div", { css: nn, children: /* @__PURE__ */ c("p", { css: on, children: f }) }),
                  i && /* @__PURE__ */ c("div", { css: sn, children: Array.from({ length: 6 }, (g, m) => /* @__PURE__ */ c($, {}, m)) }),
                  !i && h.length > 0 && /* @__PURE__ */ c(
                    mt,
                    {
                      recommendations: h,
                      onFlowSelect: R
                    }
                  ),
                  !i && h.length === 0 && !f && /* @__PURE__ */ w("div", { css: an, children: [
                    /* @__PURE__ */ c("div", { css: cn, children: /* @__PURE__ */ c(xe, { size: 20 }) }),
                    /* @__PURE__ */ c("h3", { css: ln, children: "No flows found" }),
                    /* @__PURE__ */ c("p", { css: dn, children: s ? "No flows match your search criteria." : "No active onboarding flows are available at the moment." }),
                    s && /* @__PURE__ */ c(
                      G,
                      {
                        variant: "outline",
                        size: "sm",
                        onClick: () => {
                          a("");
                        },
                        children: "Clear search"
                      }
                    )
                  ] })
                ] })
              ]
            }
          )
        ]
      }
    ) }),
    document.body
  );
}
const gn = {
  position: "fixed",
  inset: 0,
  background: "rgba(0, 0, 0, 0.2)",
  zIndex: 999999
}, mn = {
  position: "fixed",
  background: o.colors.surface,
  border: `1px solid ${o.colors.outline}`,
  borderRadius: o.borderRadius.lg,
  boxShadow: o.elevation["2xl"],
  maxWidth: 320,
  zIndex: o.zIndex.tooltip,
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
}, yn = {
  ...We,
  padding: o.spacing.md,
  borderBottom: `1px solid ${o.colors.outline}`
}, bn = {
  display: "flex",
  alignItems: "center",
  gap: o.spacing.sm,
  fontWeight: o.typography.fontWeight.medium,
  fontSize: o.typography.fontSize.sm,
  color: o.colors.onSurface
}, Ze = {
  padding: o.spacing.xs,
  background: o.colors.primaryContainer,
  borderRadius: o.borderRadius.sm,
  color: o.colors.primary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}, xn = {
  padding: o.spacing.md
}, wn = _`
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 12px;
`, vn = _`
  margin-bottom: 12px;
  padding: 12px;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 6px;
`, Sn = _`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`, Cn = _`
  font-size: 12px;
  font-weight: 500;
  color: #1e40af;
`, En = _`
  font-size: 12px;
  color: #1e40af;
`, kn = {
  ...We,
  marginBottom: o.spacing.md
}, Rn = {
  display: "flex",
  gap: o.spacing.xs
}, $n = {
  width: o.spacing.sm,
  height: o.spacing.sm,
  borderRadius: "50%"
}, Tn = {
  ...We
}, Pn = _`
  position: absolute;
  width: 0;
  height: 0;
  border: 8px solid transparent;
`, An = {
  bottom: _`
    border-top: 8px solid white;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
  `,
  top: _`
    border-bottom: 8px solid white;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
  `,
  right: _`
    border-left: 8px solid white;
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
  `,
  left: _`
    border-right: 8px solid white;
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
  `
}, Fn = {
  position: "fixed",
  border: `2px solid ${o.colors.primary}`,
  background: o.colors.primaryContainer,
  borderRadius: o.borderRadius.sm,
  pointerEvents: "none",
  zIndex: o.zIndex.overlay,
  boxShadow: `0 0 0 4px ${o.colors.primaryContainer}, 0 10px 25px ${o.colors.shadow}`
};
function In({
  step: e,
  onNext: t,
  onPrevious: n,
  onDismiss: r,
  canGoNext: i,
  canGoPrevious: s,
  currentStepIndex: a,
  totalSteps: f
}) {
  const [l, u] = H(null), [h, y] = H(!1), [R, $] = H(null), g = tt(null);
  if (te(() => {
    if (!document)
      return;
    if (!e.targetElement) {
      u(null), y(!0);
      return;
    }
    const b = document.querySelector(e.targetElement);
    if (!b) {
      console.warn(`Target element not found: ${e.targetElement}`), u(null), y(!0);
      return;
    }
    if (!Ir(b))
      b.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      }), setTimeout(() => {
        u(b), y(!1);
        const x = $e(b);
        $(x);
      }, 500);
    else {
      u(b), y(!1);
      const x = $e(b);
      $(x);
    }
    return b.classList.add("flowese-highlight"), () => {
      b.classList.remove("flowese-highlight");
    };
  }, [e.targetElement]), te(() => {
    const b = () => {
      if (l && R) {
        const x = $e(l);
        $(x);
      }
    };
    return window.addEventListener("resize", b), () => window.removeEventListener("resize", b);
  }, [l, R]), !(document != null && document.body))
    return null;
  const m = ({ centered: b = !1 }) => /* @__PURE__ */ w(
    "div",
    {
      ref: g,
      css: mn,
      "data-testid": "flowese-tooltip",
      style: b ? {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      } : R ? {
        top: R.top,
        left: R.left
      } : void 0,
      children: [
        !b && R && /* @__PURE__ */ c("div", { css: [Pn, An[R.placement]] }),
        /* @__PURE__ */ w("div", { css: yn, children: [
          /* @__PURE__ */ w("div", { css: bn, children: [
            /* @__PURE__ */ c("div", { css: Ze, children: /* @__PURE__ */ c(Gr, { size: 16 }) }),
            /* @__PURE__ */ c("span", { children: e.title })
          ] }),
          /* @__PURE__ */ c(
            G,
            {
              variant: "ghost",
              css: { height: 24, width: 24, padding: 0 },
              onClick: r,
              children: /* @__PURE__ */ c(yt, { size: 12 })
            }
          )
        ] }),
        /* @__PURE__ */ w("div", { css: xn, children: [
          e.content && /* @__PURE__ */ c("p", { css: wn, children: e.content }),
          e.navigationHint && /* @__PURE__ */ w("div", { css: vn, children: [
            /* @__PURE__ */ w("div", { css: Sn, children: [
              /* @__PURE__ */ c("div", { css: [Ze, { background: o.colors.primaryContainer, color: o.colors.onPrimaryContainer }], children: /* @__PURE__ */ c(jr, { size: 12 }) }),
              /* @__PURE__ */ c("p", { css: Cn, children: "Navigation Required" })
            ] }),
            /* @__PURE__ */ c("p", { css: En, children: e.navigationHint })
          ] }),
          /* @__PURE__ */ w("div", { css: kn, children: [
            /* @__PURE__ */ w("div", { css: [Or, Lr.outline], children: [
              "Step ",
              a + 1,
              " of ",
              f
            ] }),
            /* @__PURE__ */ c("div", { css: Rn, children: Array.from({ length: f }, (x, T) => /* @__PURE__ */ c(
              "div",
              {
                css: [
                  $n,
                  {
                    background: T === a ? o.colors.primary : T < a ? o.colors.primaryContainer : o.colors.outline
                  }
                ]
              },
              T
            )) })
          ] }),
          /* @__PURE__ */ w("div", { css: Tn, children: [
            /* @__PURE__ */ w(
              G,
              {
                variant: "outline",
                size: "sm",
                css: { gap: 4 },
                onClick: n,
                disabled: !s,
                children: [
                  /* @__PURE__ */ c(Hr, { size: 12 }),
                  "Previous"
                ]
              }
            ),
            /* @__PURE__ */ c(
              G,
              {
                variant: "primary",
                size: "sm",
                css: { gap: 4 },
                onClick: t,
                disabled: !i && a >= f - 1,
                children: i ? /* @__PURE__ */ w(be, { children: [
                  "Next",
                  /* @__PURE__ */ c(Ur, { size: 12 })
                ] }) : "Finish"
              }
            )
          ] })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ w(be, { children: [
    ee(
      /* @__PURE__ */ c(
        "div",
        {
          css: gn,
          onClick: r,
          onKeyDown: (b) => {
            b.key === "Escape" && r();
          },
          role: "button",
          tabIndex: 0
        }
      ),
      document.body
    ),
    h && ee(/* @__PURE__ */ c(m, { centered: !0 }), document.body),
    l && R && ee(/* @__PURE__ */ c(m, {}), document.body),
    l && ee(
      /* @__PURE__ */ c(
        "div",
        {
          css: Fn,
          style: {
            top: l.getBoundingClientRect().top - 8,
            left: l.getBoundingClientRect().left - 8,
            width: l.getBoundingClientRect().width + 16,
            height: l.getBoundingClientRect().height + 16
          }
        }
      ),
      document.body
    )
  ] });
}
function Ln({
  applicationId: e,
  baseUrl: t,
  onFlowComplete: n,
  onStepComplete: r
}) {
  const [i, s] = H(!1), [a, f] = H(
    []
  ), [l, u] = H(null), [h, y] = H(0), [R, $] = H(!1), g = tt(null);
  te(() => {
    (async () => {
      if (e) {
        $(!0);
        try {
          const L = await Fr(e), X = window.location.pathname, Q = Pr(L, X);
          f(Q);
        } catch (L) {
          console.error("Failed to fetch flows:", L);
        } finally {
          $(!1);
        }
      }
    })();
  }, [e]);
  const m = () => !l || !Array.isArray(l.steps) ? null : l.steps[h], b = () => !l || !Array.isArray(l.steps) ? 0 : l.steps.length, x = () => !l || !Array.isArray(l.steps) ? !1 : h < l.steps.length - 1, T = () => h > 0, P = () => {
    x() && y((z) => z + 1);
  }, A = () => {
    T() && y((z) => z - 1);
  }, d = () => {
    u(null), y(0);
  };
  te(() => {
    const z = (L) => {
      if (l && !((L.metaKey || L.ctrlKey) && (L.key === "c" || L.key === "v" || L.key === "x")))
        switch (L.key) {
          case "Escape":
            j();
            break;
          case "ArrowRight":
            x() && le();
            break;
          case "ArrowLeft":
            T() && de();
            break;
        }
    };
    return l ? (document.addEventListener("keydown", z), document.body.style.overflow = "hidden") : document.body.style.overflow = "", () => {
      document.removeEventListener("keydown", z), document.body.style.overflow = "";
    };
  }, [l, h]), te(() => {
    const z = (L) => {
      if (l && g.current) {
        const X = L.target;
        if (!g.current.contains(X)) {
          const Q = document.querySelector(
            "[data-testid='flowese-tooltip']"
          );
          if (Q && Q.contains(X))
            return;
          j();
        }
      }
    };
    return l && document.addEventListener("mousedown", z), () => {
      document.removeEventListener("mousedown", z);
    };
  }, [l]);
  const I = () => {
    s(!0);
  }, C = () => {
    s(!1);
  }, ce = (z) => {
    u(z), y(0), s(!1);
  }, le = () => {
    const z = m();
    z && (r == null || r(z.id)), x() ? P() : (l && (n == null || n(l.id)), j());
  }, de = () => {
    A();
  }, j = () => {
    d();
  }, fe = m(), Ce = b();
  return fe ? /* @__PURE__ */ w(be, { children: [
    /* @__PURE__ */ w(
      G,
      {
        ref: g,
        variant: "outline",
        size: "sm",
        css: { gap: 8 },
        onClick: I,
        children: [
          /* @__PURE__ */ c(xe, { size: 16 }),
          "Guide"
        ]
      }
    ),
    /* @__PURE__ */ c(
      Je,
      {
        isOpen: i,
        onClose: C,
        recommendations: a,
        onFlowSelect: ce,
        isLoading: R
      }
    ),
    /* @__PURE__ */ c(
      In,
      {
        step: fe,
        onNext: le,
        onPrevious: de,
        onDismiss: j,
        canGoNext: x(),
        canGoPrevious: T(),
        currentStepIndex: h,
        totalSteps: Ce
      }
    )
  ] }) : /* @__PURE__ */ w(be, { children: [
    /* @__PURE__ */ w(
      G,
      {
        ref: g,
        variant: "outline",
        size: "sm",
        css: { gap: 8 },
        onClick: I,
        children: [
          /* @__PURE__ */ c(xe, { size: 16 }),
          "Guide"
        ]
      }
    ),
    /* @__PURE__ */ c(
      Je,
      {
        isOpen: i,
        onClose: C,
        recommendations: a,
        onFlowSelect: ce,
        isLoading: R
      }
    )
  ] });
}
const _n = It(null);
function zn() {
  const e = et(_n);
  if (!e)
    throw new Error("useFlow must be used within a FlowProvider");
  return e;
}
function Wn() {
  const { state: e, dispatch: t, config: n } = zn(), r = B(() => {
    t({ type: "SET_VISIBLE", payload: !0 });
  }, [t]), i = B(() => {
    t({ type: "SET_VISIBLE", payload: !1 });
  }, [t]), s = B(
    (m) => {
      t({ type: "SELECT_FLOW", payload: m });
    },
    [t]
  ), a = B(() => {
    t({ type: "NEXT_STEP" });
  }, [t]), f = B(() => {
    t({ type: "PREVIOUS_STEP" });
  }, [t]), l = B(
    (m) => {
      t({ type: "SET_CURRENT_STEP", payload: m });
    },
    [t]
  ), u = B(() => {
    t({ type: "RESET" });
  }, [t]), h = B(
    (m) => {
      t({ type: "SET_SEARCH_QUERY", payload: m });
    },
    [t]
  ), y = B(() => e.searchQuery ? e.flows.filter(
    (m) => {
      var b;
      return m.name.toLowerCase().includes(e.searchQuery.toLowerCase()) || ((b = m.description) == null ? void 0 : b.toLowerCase().includes(e.searchQuery.toLowerCase()));
    }
  ) : e.flows, [e.flows, e.searchQuery]), R = B(() => !e.selectedFlow || !Array.isArray(e.selectedFlow.steps) ? !1 : e.currentStepIndex < e.selectedFlow.steps.length - 1, [e.selectedFlow, e.currentStepIndex]), $ = B(() => e.currentStepIndex > 0, [e.currentStepIndex]), g = B(() => !e.selectedFlow || !Array.isArray(e.selectedFlow.steps) ? !1 : e.currentStepIndex >= e.selectedFlow.steps.length - 1, [e.selectedFlow, e.currentStepIndex]);
  return {
    // State
    ...e,
    // Configuration
    config: n,
    // Actions
    showFlowSelection: r,
    hideFlowSelection: i,
    selectFlow: s,
    nextStep: a,
    previousStep: f,
    setCurrentStep: l,
    dismissOnboarding: u,
    setSearchQuery: h,
    // Computed values
    filteredFlows: y(),
    canGoNext: R(),
    canGoPrevious: $(),
    isFlowCompleted: g(),
    // Helper functions
    getCurrentStep: () => !e.selectedFlow || !Array.isArray(e.selectedFlow.steps) ? null : e.selectedFlow.steps[e.currentStepIndex],
    getTotalSteps: () => !e.selectedFlow || !Array.isArray(e.selectedFlow.steps) ? 0 : e.selectedFlow.steps.length
  };
}
export {
  Ln as FlowProvider,
  Je as FlowSelector,
  In as Tooltip,
  $e as calculateTooltipPosition,
  Ln as default,
  Fr as fetchFlows,
  gt as getApiBaseUrl,
  Ir as isElementInViewport,
  zn as useFlow,
  Wn as useFlowGuide
};
//# sourceMappingURL=flowese-guide.es.js.map
