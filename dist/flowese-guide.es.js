import * as ee from "react/jsx-runtime";
import * as D from "react";
import At, { forwardRef as Ft, useContext as et, useState as V, useRef as tt, useEffect as Z, createContext as Pt, useCallback as N } from "react";
import { createPortal as J } from "react-dom";
function It(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function _t(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var zt = /* @__PURE__ */ function() {
  function e(r) {
    var o = this;
    this._insertTag = function(i) {
      var s;
      o.tags.length === 0 ? o.insertionPoint ? s = o.insertionPoint.nextSibling : o.prepend ? s = o.container.firstChild : s = o.before : s = o.tags[o.tags.length - 1].nextSibling, o.container.insertBefore(i, s), o.tags.push(i);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(o) {
    o.forEach(this._insertTag);
  }, t.insert = function(o) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(_t(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = It(i);
      try {
        s.insertRule(o, s.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(o));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(o) {
      var i;
      return (i = o.parentNode) == null ? void 0 : i.removeChild(o);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), W = "-ms-", ye = "-moz-", k = "-webkit-", rt = "comm", Ie = "rule", _e = "decl", Mt = "@import", nt = "@keyframes", Wt = "@layer", Bt = Math.abs, xe = String.fromCharCode, Ot = Object.assign;
function Lt(e, t) {
  return M(e, 0) ^ 45 ? (((t << 2 ^ M(e, 0)) << 2 ^ M(e, 1)) << 2 ^ M(e, 2)) << 2 ^ M(e, 3) : 0;
}
function ot(e) {
  return e.trim();
}
function Nt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function R(e, t, r) {
  return e.replace(t, r);
}
function Te(e, t) {
  return e.indexOf(t);
}
function M(e, t) {
  return e.charCodeAt(t) | 0;
}
function te(e, t, r) {
  return e.slice(t, r);
}
function H(e) {
  return e.length;
}
function ze(e) {
  return e.length;
}
function pe(e, t) {
  return t.push(e), e;
}
function Vt(e, t) {
  return e.map(t).join("");
}
var we = 1, Q = 1, it = 0, O = 0, P = 0, K = "";
function ve(e, t, r, o, i, s, d) {
  return { value: e, root: t, parent: r, type: o, props: i, children: s, line: we, column: Q, length: d, return: "" };
}
function X(e, t) {
  return Ot(ve("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Dt() {
  return P;
}
function Ht() {
  return P = O > 0 ? M(K, --O) : 0, Q--, P === 10 && (Q = 1, we--), P;
}
function L() {
  return P = O < it ? M(K, O++) : 0, Q++, P === 10 && (Q = 1, we++), P;
}
function j() {
  return M(K, O);
}
function he() {
  return O;
}
function oe(e, t) {
  return te(K, e, t);
}
function re(e) {
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
  return we = Q = 1, it = H(K = e), O = 0, [];
}
function at(e) {
  return K = "", e;
}
function ge(e) {
  return ot(oe(O - 1, Ae(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Yt(e) {
  for (; (P = j()) && P < 33; )
    L();
  return re(e) > 2 || re(P) > 3 ? "" : " ";
}
function jt(e, t) {
  for (; --t && L() && !(P < 48 || P > 102 || P > 57 && P < 65 || P > 70 && P < 97); )
    ;
  return oe(e, he() + (t < 6 && j() == 32 && L() == 32));
}
function Ae(e) {
  for (; L(); )
    switch (P) {
      case e:
        return O;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ae(P);
        break;
      case 40:
        e === 41 && Ae(e);
        break;
      case 92:
        L();
        break;
    }
  return O;
}
function Ut(e, t) {
  for (; L() && e + P !== 57; )
    if (e + P === 84 && j() === 47)
      break;
  return "/*" + oe(t, O - 1) + "*" + xe(e === 47 ? e : L());
}
function Gt(e) {
  for (; !re(j()); )
    L();
  return oe(e, O);
}
function qt(e) {
  return at(me("", null, null, null, [""], e = st(e), 0, [0], e));
}
function me(e, t, r, o, i, s, d, p, f) {
  for (var g = 0, c = 0, u = d, m = 0, E = 0, C = 0, w = 1, x = 1, v = 1, y = 0, S = "", F = i, l = s, I = o, $ = S; x; )
    switch (C = y, y = L()) {
      case 40:
        if (C != 108 && M($, u - 1) == 58) {
          Te($ += R(ge(y), "&", "&\f"), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        $ += ge(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        $ += Yt(C);
        break;
      case 92:
        $ += jt(he() - 1, 7);
        continue;
      case 47:
        switch (j()) {
          case 42:
          case 47:
            pe(Qt(Ut(L(), he()), t, r), f);
            break;
          default:
            $ += "/";
        }
        break;
      case 123 * w:
        p[g++] = H($) * v;
      case 125 * w:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            x = 0;
          case 59 + c:
            v == -1 && ($ = R($, /\f/g, "")), E > 0 && H($) - u && pe(E > 32 ? De($ + ";", o, r, u - 1) : De(R($, " ", "") + ";", o, r, u - 2), f);
            break;
          case 59:
            $ += ";";
          default:
            if (pe(I = Ve($, t, r, g, c, i, p, S, F = [], l = [], u), s), y === 123)
              if (c === 0)
                me($, t, I, I, F, s, u, p, l);
              else
                switch (m === 99 && M($, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    me(e, I, I, o && pe(Ve(e, I, I, 0, 0, i, p, S, i, F = [], u), l), i, l, u, p, o ? F : l);
                    break;
                  default:
                    me($, I, I, I, [""], l, 0, p, l);
                }
        }
        g = c = E = 0, w = v = 1, S = $ = "", u = d;
        break;
      case 58:
        u = 1 + H($), E = C;
      default:
        if (w < 1) {
          if (y == 123)
            --w;
          else if (y == 125 && w++ == 0 && Ht() == 125)
            continue;
        }
        switch ($ += xe(y), y * w) {
          case 38:
            v = c > 0 ? 1 : ($ += "\f", -1);
            break;
          case 44:
            p[g++] = (H($) - 1) * v, v = 1;
            break;
          case 64:
            j() === 45 && ($ += ge(L())), m = j(), c = u = H(S = $ += Gt(he())), y++;
            break;
          case 45:
            C === 45 && H($) == 2 && (w = 0);
        }
    }
  return s;
}
function Ve(e, t, r, o, i, s, d, p, f, g, c) {
  for (var u = i - 1, m = i === 0 ? s : [""], E = ze(m), C = 0, w = 0, x = 0; C < o; ++C)
    for (var v = 0, y = te(e, u + 1, u = Bt(w = d[C])), S = e; v < E; ++v)
      (S = ot(w > 0 ? m[v] + " " + y : R(y, /&\f/g, m[v]))) && (f[x++] = S);
  return ve(e, t, r, i === 0 ? Ie : p, f, g, c);
}
function Qt(e, t, r) {
  return ve(e, t, r, rt, xe(Dt()), te(e, 2, -2), 0);
}
function De(e, t, r, o) {
  return ve(e, t, r, _e, te(e, 0, o), te(e, o + 1, -1), o);
}
function q(e, t) {
  for (var r = "", o = ze(e), i = 0; i < o; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function Kt(e, t, r, o) {
  switch (e.type) {
    case Wt:
      if (e.children.length) break;
    case Mt:
    case _e:
      return e.return = e.return || e.value;
    case rt:
      return "";
    case nt:
      return e.return = e.value + "{" + q(e.children, o) + "}";
    case Ie:
      e.value = e.props.join(",");
  }
  return H(r = q(e.children, o)) ? e.return = e.value + "{" + r + "}" : "";
}
function Xt(e) {
  var t = ze(e);
  return function(r, o, i, s) {
    for (var d = "", p = 0; p < t; p++)
      d += e[p](r, o, i, s) || "";
    return d;
  };
}
function Jt(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Zt(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var er = function(t, r, o) {
  for (var i = 0, s = 0; i = s, s = j(), i === 38 && s === 12 && (r[o] = 1), !re(s); )
    L();
  return oe(t, O);
}, tr = function(t, r) {
  var o = -1, i = 44;
  do
    switch (re(i)) {
      case 0:
        i === 38 && j() === 12 && (r[o] = 1), t[o] += er(O - 1, r, o);
        break;
      case 2:
        t[o] += ge(i);
        break;
      case 4:
        if (i === 44) {
          t[++o] = j() === 58 ? "&\f" : "", r[o] = t[o].length;
          break;
        }
      default:
        t[o] += xe(i);
    }
  while (i = L());
  return t;
}, rr = function(t, r) {
  return at(tr(st(t), r));
}, He = /* @__PURE__ */ new WeakMap(), nr = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, o = t.parent, i = t.column === o.column && t.line === o.line; o.type !== "rule"; )
      if (o = o.parent, !o) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !He.get(o)) && !i) {
      He.set(t, !0);
      for (var s = [], d = rr(r, s), p = o.props, f = 0, g = 0; f < d.length; f++)
        for (var c = 0; c < p.length; c++, g++)
          t.props[g] = s[f] ? d[f].replace(/&\f/g, p[c]) : p[c] + " " + d[f];
    }
  }
}, or = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function ct(e, t) {
  switch (Lt(e, t)) {
    case 5103:
      return k + "print-" + e + e;
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
      return k + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return k + e + ye + e + W + e + e;
    case 6828:
    case 4268:
      return k + e + W + e + e;
    case 6165:
      return k + e + W + "flex-" + e + e;
    case 5187:
      return k + e + R(e, /(\w+).+(:[^]+)/, k + "box-$1$2" + W + "flex-$1$2") + e;
    case 5443:
      return k + e + W + "flex-item-" + R(e, /flex-|-self/, "") + e;
    case 4675:
      return k + e + W + "flex-line-pack" + R(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return k + e + W + R(e, "shrink", "negative") + e;
    case 5292:
      return k + e + W + R(e, "basis", "preferred-size") + e;
    case 6060:
      return k + "box-" + R(e, "-grow", "") + k + e + W + R(e, "grow", "positive") + e;
    case 4554:
      return k + R(e, /([^-])(transform)/g, "$1" + k + "$2") + e;
    case 6187:
      return R(R(R(e, /(zoom-|grab)/, k + "$1"), /(image-set)/, k + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return R(e, /(image-set\([^]*)/, k + "$1$`$1");
    case 4968:
      return R(R(e, /(.+:)(flex-)?(.*)/, k + "box-pack:$3" + W + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + k + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return R(e, /(.+)-inline(.+)/, k + "$1$2") + e;
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
      if (H(e) - 1 - t > 6) switch (M(e, t + 1)) {
        case 109:
          if (M(e, t + 4) !== 45) break;
        case 102:
          return R(e, /(.+:)(.+)-([^]+)/, "$1" + k + "$2-$3$1" + ye + (M(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Te(e, "stretch") ? ct(R(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (M(e, t + 1) !== 115) break;
    case 6444:
      switch (M(e, H(e) - 3 - (~Te(e, "!important") && 10))) {
        case 107:
          return R(e, ":", ":" + k) + e;
        case 101:
          return R(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + k + (M(e, 14) === 45 ? "inline-" : "") + "box$3$1" + k + "$2$3$1" + W + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (M(e, t + 11)) {
        case 114:
          return k + e + W + R(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return k + e + W + R(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return k + e + W + R(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return k + e + W + e + e;
  }
  return e;
}
var ir = function(t, r, o, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case _e:
      t.return = ct(t.value, t.length);
      break;
    case nt:
      return q([X(t, {
        value: R(t.value, "@", "@" + k)
      })], i);
    case Ie:
      if (t.length) return Vt(t.props, function(s) {
        switch (Nt(s, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return q([X(t, {
              props: [R(s, /:(read-\w+)/, ":" + ye + "$1")]
            })], i);
          case "::placeholder":
            return q([X(t, {
              props: [R(s, /:(plac\w+)/, ":" + k + "input-$1")]
            }), X(t, {
              props: [R(s, /:(plac\w+)/, ":" + ye + "$1")]
            }), X(t, {
              props: [R(s, /:(plac\w+)/, W + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, sr = [ir], ar = function(t) {
  var r = t.key;
  if (r === "css") {
    var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(o, function(w) {
      var x = w.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(w), w.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || sr, s = {}, d, p = [];
  d = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(w) {
      for (var x = w.getAttribute("data-emotion").split(" "), v = 1; v < x.length; v++)
        s[x[v]] = !0;
      p.push(w);
    }
  );
  var f, g = [nr, or];
  {
    var c, u = [Kt, Jt(function(w) {
      c.insert(w);
    })], m = Xt(g.concat(i, u)), E = function(x) {
      return q(qt(x), m);
    };
    f = function(x, v, y, S) {
      c = y, E(x ? x + "{" + v.styles + "}" : v.styles), S && (C.inserted[v.name] = !0);
    };
  }
  var C = {
    key: r,
    sheet: new zt({
      key: r,
      container: d,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: f
  };
  return C.sheet.hydrate(p), C;
}, Fe = { exports: {} }, T = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function cr() {
  if (Ye) return T;
  Ye = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, p = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function S(l) {
    if (typeof l == "object" && l !== null) {
      var I = l.$$typeof;
      switch (I) {
        case t:
          switch (l = l.type, l) {
            case f:
            case g:
            case o:
            case s:
            case i:
            case u:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case p:
                case c:
                case C:
                case E:
                case d:
                  return l;
                default:
                  return I;
              }
          }
        case r:
          return I;
      }
    }
  }
  function F(l) {
    return S(l) === g;
  }
  return T.AsyncMode = f, T.ConcurrentMode = g, T.ContextConsumer = p, T.ContextProvider = d, T.Element = t, T.ForwardRef = c, T.Fragment = o, T.Lazy = C, T.Memo = E, T.Portal = r, T.Profiler = s, T.StrictMode = i, T.Suspense = u, T.isAsyncMode = function(l) {
    return F(l) || S(l) === f;
  }, T.isConcurrentMode = F, T.isContextConsumer = function(l) {
    return S(l) === p;
  }, T.isContextProvider = function(l) {
    return S(l) === d;
  }, T.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === t;
  }, T.isForwardRef = function(l) {
    return S(l) === c;
  }, T.isFragment = function(l) {
    return S(l) === o;
  }, T.isLazy = function(l) {
    return S(l) === C;
  }, T.isMemo = function(l) {
    return S(l) === E;
  }, T.isPortal = function(l) {
    return S(l) === r;
  }, T.isProfiler = function(l) {
    return S(l) === s;
  }, T.isStrictMode = function(l) {
    return S(l) === i;
  }, T.isSuspense = function(l) {
    return S(l) === u;
  }, T.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === o || l === g || l === s || l === i || l === u || l === m || typeof l == "object" && l !== null && (l.$$typeof === C || l.$$typeof === E || l.$$typeof === d || l.$$typeof === p || l.$$typeof === c || l.$$typeof === x || l.$$typeof === v || l.$$typeof === y || l.$$typeof === w);
  }, T.typeOf = S, T;
}
var A = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function lr() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, p = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function S(h) {
      return typeof h == "string" || typeof h == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      h === o || h === g || h === s || h === i || h === u || h === m || typeof h == "object" && h !== null && (h.$$typeof === C || h.$$typeof === E || h.$$typeof === d || h.$$typeof === p || h.$$typeof === c || h.$$typeof === x || h.$$typeof === v || h.$$typeof === y || h.$$typeof === w);
    }
    function F(h) {
      if (typeof h == "object" && h !== null) {
        var Ce = h.$$typeof;
        switch (Ce) {
          case t:
            var ue = h.type;
            switch (ue) {
              case f:
              case g:
              case o:
              case s:
              case i:
              case u:
                return ue;
              default:
                var Ne = ue && ue.$$typeof;
                switch (Ne) {
                  case p:
                  case c:
                  case C:
                  case E:
                  case d:
                    return Ne;
                  default:
                    return Ce;
                }
            }
          case r:
            return Ce;
        }
      }
    }
    var l = f, I = g, $ = p, se = d, ae = t, ce = c, G = o, le = C, Se = E, z = r, B = s, de = i, fe = u, Oe = !1;
    function yt(h) {
      return Oe || (Oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Le(h) || F(h) === f;
    }
    function Le(h) {
      return F(h) === g;
    }
    function bt(h) {
      return F(h) === p;
    }
    function xt(h) {
      return F(h) === d;
    }
    function wt(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function vt(h) {
      return F(h) === c;
    }
    function St(h) {
      return F(h) === o;
    }
    function Ct(h) {
      return F(h) === C;
    }
    function Et(h) {
      return F(h) === E;
    }
    function kt(h) {
      return F(h) === r;
    }
    function Rt(h) {
      return F(h) === s;
    }
    function $t(h) {
      return F(h) === i;
    }
    function Tt(h) {
      return F(h) === u;
    }
    A.AsyncMode = l, A.ConcurrentMode = I, A.ContextConsumer = $, A.ContextProvider = se, A.Element = ae, A.ForwardRef = ce, A.Fragment = G, A.Lazy = le, A.Memo = Se, A.Portal = z, A.Profiler = B, A.StrictMode = de, A.Suspense = fe, A.isAsyncMode = yt, A.isConcurrentMode = Le, A.isContextConsumer = bt, A.isContextProvider = xt, A.isElement = wt, A.isForwardRef = vt, A.isFragment = St, A.isLazy = Ct, A.isMemo = Et, A.isPortal = kt, A.isProfiler = Rt, A.isStrictMode = $t, A.isSuspense = Tt, A.isValidElementType = S, A.typeOf = F;
  }()), A;
}
process.env.NODE_ENV === "production" ? Fe.exports = cr() : Fe.exports = lr();
var dr = Fe.exports, lt = dr, fr = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ur = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, dt = {};
dt[lt.ForwardRef] = fr;
dt[lt.Memo] = ur;
var pr = !0;
function hr(e, t, r) {
  var o = "";
  return r.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (o += i + " ");
  }), o;
}
var ft = function(t, r, o) {
  var i = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (o === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  pr === !1) && t.registered[i] === void 0 && (t.registered[i] = r.styles);
}, gr = function(t, r, o) {
  ft(t, r, o);
  var i = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var s = r;
    do
      t.insert(r === s ? "." + i : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function mr(e) {
  for (var t = 0, r, o = 0, i = e.length; i >= 4; ++o, i -= 4)
    r = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(o) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var yr = {
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
}, br = /[A-Z]|^ms/g, xr = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ut = function(t) {
  return t.charCodeAt(1) === 45;
}, Ue = function(t) {
  return t != null && typeof t != "boolean";
}, Ee = /* @__PURE__ */ Zt(function(e) {
  return ut(e) ? e : e.replace(br, "-$&").toLowerCase();
}), Ge = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(xr, function(o, i, s) {
          return Y = {
            name: i,
            styles: s,
            next: Y
          }, i;
        });
  }
  return yr[t] !== 1 && !ut(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function ne(e, t, r) {
  if (r == null)
    return "";
  var o = r;
  if (o.__emotion_styles !== void 0)
    return o;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var i = r;
      if (i.anim === 1)
        return Y = {
          name: i.name,
          styles: i.styles,
          next: Y
        }, i.name;
      var s = r;
      if (s.styles !== void 0) {
        var d = s.next;
        if (d !== void 0)
          for (; d !== void 0; )
            Y = {
              name: d.name,
              styles: d.styles,
              next: Y
            }, d = d.next;
        var p = s.styles + ";";
        return p;
      }
      return wr(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var f = Y, g = r(e);
        return Y = f, ne(e, t, g);
      }
      break;
    }
  }
  var c = r;
  return c;
}
function wr(e, t, r) {
  var o = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++)
      o += ne(e, t, r[i]) + ";";
  else
    for (var s in r) {
      var d = r[s];
      if (typeof d != "object") {
        var p = d;
        Ue(p) && (o += Ee(s) + ":" + Ge(s, p) + ";");
      } else if (Array.isArray(d) && typeof d[0] == "string" && t == null)
        for (var f = 0; f < d.length; f++)
          Ue(d[f]) && (o += Ee(s) + ":" + Ge(s, d[f]) + ";");
      else {
        var g = ne(e, t, d);
        switch (s) {
          case "animation":
          case "animationName": {
            o += Ee(s) + ":" + g + ";";
            break;
          }
          default:
            o += s + "{" + g + "}";
        }
      }
    }
  return o;
}
var qe = /label:\s*([^\s;{]+)\s*(;|$)/g, Y;
function pt(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var o = !0, i = "";
  Y = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    o = !1, i += ne(r, t, s);
  else {
    var d = s;
    i += d[0];
  }
  for (var p = 1; p < e.length; p++)
    if (i += ne(r, t, e[p]), o) {
      var f = s;
      i += f[p];
    }
  qe.lastIndex = 0;
  for (var g = "", c; (c = qe.exec(i)) !== null; )
    g += "-" + c[1];
  var u = mr(i) + g;
  return {
    name: u,
    styles: i,
    next: Y
  };
}
var vr = function(t) {
  return t();
}, Sr = D.useInsertionEffect ? D.useInsertionEffect : !1, Cr = Sr || vr, ht = /* @__PURE__ */ D.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ar({
    key: "css"
  }) : null
);
ht.Provider;
var Er = function(t) {
  return /* @__PURE__ */ Ft(function(r, o) {
    var i = et(ht);
    return t(r, i, o);
  });
}, kr = /* @__PURE__ */ D.createContext({}), ie = {}.hasOwnProperty, Pe = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Me = function(t, r) {
  var o = {};
  for (var i in r)
    ie.call(r, i) && (o[i] = r[i]);
  return o[Pe] = t, o;
}, Rr = function(t) {
  var r = t.cache, o = t.serialized, i = t.isStringTag;
  return ft(r, o, i), Cr(function() {
    return gr(r, o, i);
  }), null;
}, $r = /* @__PURE__ */ Er(function(e, t, r) {
  var o = e.css;
  typeof o == "string" && t.registered[o] !== void 0 && (o = t.registered[o]);
  var i = e[Pe], s = [o], d = "";
  typeof e.className == "string" ? d = hr(t.registered, s, e.className) : e.className != null && (d = e.className + " ");
  var p = pt(s, void 0, D.useContext(kr));
  d += t.key + "-" + p.name;
  var f = {};
  for (var g in e)
    ie.call(e, g) && g !== "css" && g !== Pe && (f[g] = e[g]);
  return f.className = d, r && (f.ref = r), /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(Rr, {
    cache: t,
    serialized: p,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ D.createElement(i, f));
}), We = $r, be = ee.Fragment, a = function(t, r, o) {
  return ie.call(r, "css") ? ee.jsx(We, Me(t, r), o) : ee.jsx(t, r, o);
}, b = function(t, r, o) {
  return ie.call(r, "css") ? ee.jsxs(We, Me(t, r), o) : ee.jsxs(t, r, o);
}, Qe = function(t, r) {
  var o = arguments;
  if (r == null || !ie.call(r, "css"))
    return D.createElement.apply(void 0, o);
  var i = o.length, s = new Array(i);
  s[0] = We, s[1] = Me(t, r);
  for (var d = 2; d < i; d++)
    s[d] = o[d];
  return D.createElement.apply(null, s);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Qe || (Qe = {}));
function _() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return pt(t);
}
const ke = {};
function gt() {
  return typeof window < "u" && window.location.hostname === "localhost" ? window.location.origin : (ke == null ? void 0 : ke.VITE_FLOWESE_API_URL) || "http://app.flowese.io";
}
async function Tr(e) {
  try {
    const t = gt(), r = await fetch(
      `${t}/api/flows?applicationId=${e}`
    );
    if (!r.ok)
      throw new Error(`HTTP error! status: ${r.status}`);
    const o = await r.json();
    if (o.success && o.flows)
      return o.flows.filter((i) => i.status === "active");
    throw new Error(o.error || "Failed to fetch flows");
  } catch (t) {
    throw console.error("Error fetching flows:", t), t;
  }
}
function Ar(e) {
  const t = e.getBoundingClientRect();
  return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth);
}
function Re(e, t = 300, r = 200) {
  const o = e.getBoundingClientRect(), i = window.innerHeight - o.bottom, s = o.top, d = window.innerWidth - o.left;
  return i >= r + 20 ? {
    top: o.bottom + 10,
    left: o.left + o.width / 2 - t / 2,
    placement: "bottom"
  } : s >= r + 20 ? {
    top: o.top - r - 10,
    left: o.left + o.width / 2 - t / 2,
    placement: "top"
  } : d >= t + 20 ? {
    top: o.top + o.height / 2 - r / 2,
    left: o.right + 10,
    placement: "right"
  } : {
    top: o.top + o.height / 2 - r / 2,
    left: o.left - t - 10,
    placement: "left"
  };
}
function Yn(e) {
  return !Array.isArray(e.steps) || e.steps.length === 0 ? null : e.steps[0];
}
function jn(e) {
  return Array.isArray(e.steps) ? e.steps.length : 0;
}
function Un(e, t) {
  return e.filter((r) => r.type === t);
}
function Gn(e, t = !1) {
  return [...e].sort((r, o) => {
    const i = new Date(r.createdAt).getTime(), s = new Date(o.createdAt).getTime();
    return t ? i - s : s - i;
  });
}
const n = {
  colors: {
    // Primary colors (brand colors)
    primary: "#2563eb",
    onPrimary: "#ffffff",
    primaryContainer: "#dbeafe",
    onPrimaryContainer: "#1e40af",
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
    // Disabled colors
    disabled: "#d1d5db",
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
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
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
}, Fr = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  whiteSpace: "nowrap",
  borderRadius: n.borderRadius.md,
  fontSize: n.typography.fontSize.sm,
  fontWeight: n.typography.fontWeight.medium,
  transition: `all ${n.animation.duration.normal} ${n.animation.easing.standard}`,
  cursor: "pointer",
  border: "none",
  outline: "none",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
  "&:focus-visible": {
    outline: `2px solid ${n.colors.primary}`,
    outlineOffset: 2
  },
  "&:disabled": {
    pointerEvents: "none",
    opacity: 0.5
  }
}, Pr = {
  primary: {
    background: n.colors.primary,
    color: n.colors.onPrimary,
    "&:hover:not(:disabled)": {
      background: n.colors.onPrimaryContainer
    }
  },
  outline: {
    background: "transparent",
    border: `1px solid ${n.colors.outline}`,
    color: n.colors.onSurface,
    "&:hover:not(:disabled)": {
      background: n.colors.surfaceVariant,
      borderColor: n.colors.outlineVariant
    }
  },
  ghost: {
    background: "transparent",
    color: n.colors.onSurface,
    "&:hover:not(:disabled)": {
      background: n.colors.surfaceVariant
    }
  }
}, Ir = {
  sm: {
    height: 32,
    padding: `0 ${n.spacing.md}px`,
    fontSize: n.typography.fontSize.xs
  },
  default: {
    height: 40,
    padding: `0 ${n.spacing.lg}px`
  }
}, _r = {
  borderRadius: n.borderRadius.lg,
  border: `1px solid ${n.colors.outline}`,
  background: n.colors.surface,
  textAlign: "left"
}, zr = {
  padding: `${n.spacing.lg}px ${n.spacing.lg}px 0`
}, Mr = {
  padding: n.spacing.lg,
  paddingTop: 0
}, Wr = {
  display: "inline-flex",
  alignItems: "center",
  borderRadius: n.borderRadius.full,
  padding: `${n.spacing.xs / 2}px ${n.spacing.sm}px`,
  fontSize: n.typography.fontSize.xs,
  fontWeight: n.typography.fontWeight.medium,
  transition: `all ${n.animation.duration.normal}`,
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
}, Br = {
  outline: {
    background: "transparent",
    border: `1px solid ${n.colors.outline}`,
    color: n.colors.onSurface
  }
}, Or = {
  position: "fixed",
  inset: 0,
  zIndex: n.zIndex.modal,
  background: n.colors.scrim,
  backdropFilter: "blur(8px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: n.spacing.md
}, Lr = {
  position: "relative",
  background: `linear-gradient(135deg, ${n.colors.surface} 0%, ${n.colors.surfaceVariant} 100%)`,
  borderRadius: n.borderRadius.xl,
  boxShadow: n.elevation["2xl"],
  width: "100%",
  maxHeight: "85vh",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  backdropFilter: "blur(20px)",
  border: `1px solid ${n.colors.outline}`
}, Nr = {
  padding: `${n.spacing.xl}px ${n.spacing.xl}px ${n.spacing.lg}px`,
  flexShrink: 0,
  background: `linear-gradient(135deg, ${n.colors.primary} 0%, ${n.colors.tertiary} 100%)`,
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
  fontSize: n.typography.fontSize["2xl"],
  fontWeight: n.typography.fontWeight.bold,
  lineHeight: n.typography.lineHeight.tight,
  color: n.colors.onPrimary,
  margin: `0 0 ${n.spacing.md}px 0`,
  display: "flex",
  alignItems: "center",
  gap: n.spacing.md,
  position: "relative",
  zIndex: 1,
  textShadow: `0 2px 4px ${n.colors.shadow}`,
  svg: {
    width: 28,
    height: 28,
    filter: `drop-shadow(0 2px 4px ${n.colors.shadow})`
  }
}, Dr = {
  fontSize: n.typography.fontSize.base,
  color: n.colors.onPrimary,
  opacity: 0.9,
  margin: 0,
  lineHeight: n.typography.lineHeight.normal,
  position: "relative",
  zIndex: 1,
  textShadow: `0 1px 2px ${n.colors.shadow}`
}, $e = {
  background: `linear-gradient(90deg, ${n.colors.surfaceVariant} 25%, ${n.colors.outline} 50%, ${n.colors.surfaceVariant} 75%)`,
  backgroundSize: "200% 100%",
  animation: "loading 1.5s infinite",
  borderRadius: n.borderRadius.sm,
  "@keyframes loading": {
    "0%": {
      backgroundPosition: "200% 0"
    },
    "100%": {
      backgroundPosition: "-200% 0"
    }
  }
}, Be = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
}, U = At.forwardRef(
  ({ variant: e = "primary", size: t = "default", children: r, ...o }, i) => /* @__PURE__ */ a(
    "button",
    {
      ref: i,
      css: [Fr, Pr[e], Ir[t]],
      ...o,
      children: r
    }
  )
);
U.displayName = "Button";
const Hr = () => /* @__PURE__ */ b("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
  /* @__PURE__ */ a("path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" }),
  /* @__PURE__ */ a("path", { d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" }),
  /* @__PURE__ */ a("path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }),
  /* @__PURE__ */ a("path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" })
] }), Yr = () => /* @__PURE__ */ b("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
  /* @__PURE__ */ a("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
  /* @__PURE__ */ a("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })
] }), jr = () => /* @__PURE__ */ a("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ a("polygon", { points: "13,2 3,14 12,14 11,22 21,10 12,10" }) }), Ur = () => /* @__PURE__ */ b("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
  /* @__PURE__ */ a("path", { d: "M9 21h6" }),
  /* @__PURE__ */ a("path", { d: "M12 3C8.5 3 5.7 5.6 5.7 9c0 2.4 1.4 4.5 3.4 5.5.4.2.9.5.9 1.5 0 .6.4 1 1 1h2c.6 0 1-.4 1-1 0-1-.5-1.3-.9-1.5-2-1-3.4-3.1-3.4-5.5C18.3 5.6 15.5 3 12 3z" })
] }), mt = ({ flows: e, onFlowSelect: t }) => {
  const [r, o] = V(/* @__PURE__ */ new Set(["getting-started"])), i = (c) => {
    const u = new Set(r);
    u.has(c) ? u.delete(c) : u.add(c), o(u);
  }, d = ((c) => [
    {
      id: "getting-started",
      title: "Getting Started",
      description: "Perfect for new users",
      icon: /* @__PURE__ */ a(Hr, {}),
      flows: c.filter((m) => m.type === "onboarding"),
      priority: 1
    },
    {
      id: "key-features",
      title: "Learn Key Features",
      description: "Master important capabilities",
      icon: /* @__PURE__ */ a(jr, {}),
      flows: c.filter((m) => m.type === "feature_tour"),
      priority: 2
    },
    {
      id: "training",
      title: "Advanced Training",
      description: "Become a power user",
      icon: /* @__PURE__ */ a(Yr, {}),
      flows: c.filter((m) => m.type === "training"),
      priority: 3
    },
    {
      id: "quick-wins",
      title: "Quick Improvements",
      description: "Small changes, big impact",
      icon: /* @__PURE__ */ a(Ur, {}),
      flows: c.filter((m) => m.type === "nudge"),
      priority: 4
    }
  ].filter((m) => m.flows.length > 0).sort((m, E) => m.priority - E.priority))(e), f = (() => {
    const c = e.filter((m) => m.type === "onboarding");
    if (c.length > 0) return c[0];
    const u = e.filter((m) => m.type === "feature_tour");
    return u.length > 0 ? u[0] : e.length > 0 ? e[0] : null;
  })(), g = ({ flow: c, isRecommended: u = !1 }) => /* @__PURE__ */ b(
    "div",
    {
      css: {
        display: "flex",
        alignItems: "center",
        padding: n.spacing.lg,
        backgroundColor: n.colors.surface,
        border: `1px solid ${n.colors.outline}`,
        borderRadius: n.borderRadius.lg,
        cursor: "pointer",
        transition: `all ${n.animation.duration.normal}`,
        "&:hover": {
          backgroundColor: n.colors.surfaceVariant,
          borderColor: n.colors.primary,
          transform: "translateY(-1px)",
          boxShadow: n.elevation.md
        }
      },
      onClick: () => t(c),
      children: [
        /* @__PURE__ */ b("div", { css: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ b("div", { css: {
            display: "flex",
            alignItems: "center",
            gap: n.spacing.sm,
            marginBottom: n.spacing.xs
          }, children: [
            /* @__PURE__ */ a("h3", { css: {
              fontSize: n.typography.fontSize.lg,
              fontWeight: n.typography.fontWeight.semibold,
              color: n.colors.onSurface,
              margin: 0
            }, children: c.name }),
            u && /* @__PURE__ */ a("span", { css: {
              backgroundColor: n.colors.primary,
              color: n.colors.onPrimary,
              fontSize: n.typography.fontSize.xs,
              fontWeight: n.typography.fontWeight.medium,
              padding: "2px 8px",
              borderRadius: n.borderRadius.full
            }, children: "Recommended" })
          ] }),
          c.description && /* @__PURE__ */ a("p", { css: {
            fontSize: n.typography.fontSize.sm,
            color: n.colors.onSurfaceVariant,
            lineHeight: n.typography.lineHeight.normal,
            margin: `0 0 ${n.spacing.sm}px 0`,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }, children: c.description }),
          /* @__PURE__ */ b("div", { css: {
            display: "flex",
            alignItems: "center",
            gap: n.spacing.md,
            fontSize: n.typography.fontSize.xs,
            color: n.colors.onSurfaceVariant
          }, children: [
            /* @__PURE__ */ b("span", { css: { display: "flex", alignItems: "center", gap: n.spacing.xs }, children: [
              /* @__PURE__ */ b("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                /* @__PURE__ */ a("circle", { cx: "12", cy: "12", r: "10" }),
                /* @__PURE__ */ a("polyline", { points: "12,6 12,12 16,14" })
              ] }),
              c.estimatedDurationMinutes || 2,
              " minute",
              (c.estimatedDurationMinutes || 2) !== 1 ? "s" : ""
            ] }),
            Array.isArray(c.steps) && c.steps.length > 0 && /* @__PURE__ */ b("span", { css: { display: "flex", alignItems: "center", gap: n.spacing.xs }, children: [
              /* @__PURE__ */ b("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                /* @__PURE__ */ a("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
                /* @__PURE__ */ a("polyline", { points: "9,9 9,15 15,15" })
              ] }),
              c.steps.length,
              " step",
              c.steps.length !== 1 ? "s" : ""
            ] })
          ] })
        ] }),
        /* @__PURE__ */ a(
          U,
          {
            variant: u ? "primary" : "outline",
            size: "sm",
            css: {
              marginLeft: n.spacing.lg,
              flexShrink: 0
            },
            onClick: (m) => {
              m.stopPropagation(), t(c);
            },
            children: "Start"
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ b("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: n.spacing.lg,
    maxHeight: 500,
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
  }, children: [
    f && /* @__PURE__ */ a(g, { flow: f, isRecommended: !0 }),
    d.map((c) => /* @__PURE__ */ b("div", { children: [
      /* @__PURE__ */ b(
        "button",
        {
          css: {
            display: "flex",
            alignItems: "center",
            gap: n.spacing.sm,
            width: "100%",
            padding: `${n.spacing.sm}px 0`,
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            marginBottom: n.spacing.sm,
            "&:hover": {
              "& h3": {
                color: n.colors.primary
              }
            }
          },
          onClick: () => i(c.id),
          children: [
            /* @__PURE__ */ a("div", { css: {
              padding: n.spacing.xs,
              backgroundColor: n.colors.surfaceVariant,
              borderRadius: n.borderRadius.sm,
              color: n.colors.onSurfaceVariant
            }, children: c.icon }),
            /* @__PURE__ */ b("div", { css: { flex: 1, textAlign: "left" }, children: [
              /* @__PURE__ */ a("h3", { css: {
                fontSize: n.typography.fontSize.base,
                fontWeight: n.typography.fontWeight.medium,
                color: n.colors.onSurface,
                margin: 0,
                transition: `color ${n.animation.duration.normal}`
              }, children: c.title }),
              /* @__PURE__ */ a("p", { css: {
                fontSize: n.typography.fontSize.sm,
                color: n.colors.onSurfaceVariant,
                margin: 0
              }, children: c.description })
            ] }),
            /* @__PURE__ */ a(
              "svg",
              {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                css: {
                  color: n.colors.onSurfaceVariant,
                  transition: `transform ${n.animation.duration.normal}`,
                  transform: r.has(c.id) ? "rotate(180deg)" : "rotate(0deg)"
                },
                children: /* @__PURE__ */ a("polyline", { points: "6,9 12,15 18,9" })
              }
            )
          ]
        }
      ),
      r.has(c.id) && /* @__PURE__ */ a("div", { css: {
        display: "flex",
        flexDirection: "column",
        gap: n.spacing.md
      }, children: c.flows.map((u) => /* @__PURE__ */ a(
        g,
        {
          flow: u,
          isRecommended: !1
        },
        u.id
      )) })
    ] }, c.id))
  ] });
};
mt.displayName = "FlowList";
const Gr = () => /* @__PURE__ */ b(
  "svg",
  {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [
      /* @__PURE__ */ a("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ a("path", { d: "m21 21-4.35-4.35" })
    ]
  }
), qr = () => /* @__PURE__ */ b(
  "svg",
  {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [
      /* @__PURE__ */ a("path", { d: "m22 2-7 20-4-9-9-4Z" }),
      /* @__PURE__ */ a("path", { d: "M22 2 11 13" })
    ]
  }
), Ke = () => /* @__PURE__ */ b(
  "svg",
  {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [
      /* @__PURE__ */ a("path", { d: "M12 8V4H8" }),
      /* @__PURE__ */ a("rect", { width: "16", height: "12", x: "4", y: "8", rx: "2" }),
      /* @__PURE__ */ a("path", { d: "m9 16 0 0" }),
      /* @__PURE__ */ a("path", { d: "m15 16 0 0" })
    ]
  }
), Qr = () => /* @__PURE__ */ b(
  "svg",
  {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [
      /* @__PURE__ */ a("path", { d: "m18 6-12 12" }),
      /* @__PURE__ */ a("path", { d: "m6 6 12 12" })
    ]
  }
), Kr = (e) => {
  const t = e.filter((s) => s.type === "onboarding"), r = e.filter((s) => s.type === "feature_tour"), o = e.filter((s) => s.type !== "onboarding" && s.type !== "feature_tour"), i = [];
  return i.push(...t.slice(0, 2)), i.length < 3 && i.push(...r.slice(0, 3 - i.length)), i.length < 3 && i.push(...o.slice(0, 3 - i.length)), i.slice(0, 3);
}, Xr = {
  position: "relative",
  width: "100%"
}, Jr = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: 56,
  // MD3 standard height
  backgroundColor: n.colors.surfaceVariant,
  borderRadius: n.borderRadius.full,
  // MD3 search bars are fully rounded
  border: "none",
  overflow: "hidden",
  transition: `all ${n.animation.duration.normal}`,
  "&:focus-within": {
    backgroundColor: n.colors.surface,
    boxShadow: n.elevation.md
  }
}, Zr = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 48,
  height: 48,
  margin: `0 ${n.spacing.xs}px`,
  color: n.colors.onSurfaceVariant,
  flexShrink: 0
}, en = {
  flex: 1,
  height: "100%",
  padding: `0 ${n.spacing.md}px`,
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
  fontSize: n.typography.fontSize.base,
  fontWeight: n.typography.fontWeight.normal,
  color: n.colors.onSurface,
  "&::placeholder": {
    color: n.colors.onSurfaceVariant,
    fontWeight: n.typography.fontWeight.normal
  }
}, tn = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  margin: `0 ${n.spacing.xs}px`,
  padding: 0,
  borderRadius: n.borderRadius.full,
  background: n.colors.primary,
  color: n.colors.onPrimary,
  border: "none",
  cursor: "pointer",
  transition: `all ${n.animation.duration.normal}`,
  flexShrink: 0,
  "&:hover:not(:disabled)": {
    background: n.colors.primary,
    boxShadow: n.elevation.sm,
    filter: "brightness(1.1)"
  },
  "&:disabled": {
    background: n.colors.disabled,
    cursor: "not-allowed",
    opacity: 0.6
  }
}, rn = {
  display: "flex",
  flexWrap: "wrap",
  gap: n.spacing.xs,
  // Tighter gap for MD3 chips
  marginTop: n.spacing.sm,
  justifyContent: "flex-start",
  // Left align for better readability
  alignItems: "center"
}, nn = {
  height: 32,
  padding: `0 ${n.spacing.md}px`,
  borderRadius: n.borderRadius.sm,
  // MD3 uses smaller border radius for chips
  background: n.colors.surface,
  border: `1px solid ${n.colors.outline}`,
  color: n.colors.onSurfaceVariant,
  fontSize: n.typography.fontSize.sm,
  fontWeight: n.typography.fontWeight.medium,
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
  cursor: "pointer",
  transition: `all ${n.animation.duration.normal}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  whiteSpace: "nowrap",
  userSelect: "none",
  // MD3 interaction states
  "&:hover": {
    background: n.colors.surfaceVariant,
    borderColor: n.colors.outline,
    boxShadow: n.elevation.sm
  },
  "&:focus": {
    outline: `2px solid ${n.colors.primary}`,
    outlineOffset: 2
  },
  "&:active": {
    background: n.colors.surfaceVariant,
    transform: "scale(0.98)"
  }
}, on = {
  display: "flex",
  flexDirection: "column",
  gap: 0,
  marginTop: n.spacing.md,
  marginBottom: n.spacing.md
}, sn = _`
  padding: 16px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
  margin-bottom: 16px;
`, an = _`
  font-size: 14px;
  color: #dc2626;
`, cn = _`
  display: flex;
  flex-direction: column;
  gap: 16px;
`, ln = _`
  text-align: center;
  padding: 48px 0;
`, dn = _`
  width: 48px;
  height: 48px;
  color: #9ca3af;
  margin: 0 auto 16px;
`, fn = _`
  font-size: 18px;
  font-weight: 500;
  color: #111827;
  margin-bottom: 8px;
`, un = _`
  color: #6b7280;
  margin-bottom: 16px;
`, pn = {
  ..._r
}, hn = {
  ...zr
}, gn = {
  ...Mr
}, mn = _`
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
function Xe({
  isOpen: e,
  onClose: t,
  flows: r,
  onFlowSelect: o,
  isLoading: i
}) {
  const [s, d] = V(""), [p, f] = V(""), [g, c] = V(null), u = Kr(r), m = r.filter((y) => {
    var F;
    if (!s.trim()) return !0;
    const S = s.toLowerCase();
    return y.name.toLowerCase().includes(S) || ((F = y.description) == null ? void 0 : F.toLowerCase().includes(S)) || y.type.toLowerCase().includes(S);
  }), E = () => {
    d(p);
  }, C = (y) => {
    x(y);
  }, w = (y) => {
    y.key === "Enter" && E();
  }, x = async (y) => {
    try {
      c(null);
      const S = gt(), l = await (await fetch(`${S}/api/flows/${y.id}`)).json();
      if (l.error) {
        console.error("Failed to load flow details:", l.error), c(l.error);
        return;
      }
      o(l.flow), t();
    } catch (S) {
      console.error("Failed to load flow details:", S), c("Failed to load flow details");
    }
  };
  if (!e) return null;
  const v = () => /* @__PURE__ */ b("div", { css: pn, children: [
    /* @__PURE__ */ b("div", { css: hn, children: [
      /* @__PURE__ */ a(
        "div",
        {
          css: [
            $e,
            {
              height: 16,
              width: "75%",
              marginBottom: 8
            }
          ]
        }
      ),
      /* @__PURE__ */ a(
        "div",
        {
          css: [
            $e,
            {
              height: 12,
              width: "50%"
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { css: gn, children: /* @__PURE__ */ a(
      "div",
      {
        css: [
          $e,
          {
            height: 64,
            width: "100%"
          }
        ]
      }
    ) })
  ] });
  return J(
    /* @__PURE__ */ a("div", { css: Or, onClick: t, children: /* @__PURE__ */ b(
      "div",
      {
        css: [
          Lr,
          {
            maxWidth: 700,
            width: "85vw"
          }
        ],
        onClick: (y) => y.stopPropagation(),
        children: [
          /* @__PURE__ */ b("div", { css: Nr, children: [
            /* @__PURE__ */ a(
              U,
              {
                css: mn,
                onClick: t,
                "aria-label": "Close modal",
                children: /* @__PURE__ */ a(Qr, {})
              }
            ),
            /* @__PURE__ */ b("h2", { css: Vr, children: [
              /* @__PURE__ */ a(Ke, {}),
              "Let's get you started!"
            ] }),
            /* @__PURE__ */ a("p", { css: Dr, children: "Choose a guided tour below to learn the features that matter most to you." })
          ] }),
          /* @__PURE__ */ b(
            "div",
            {
              css: {
                padding: "0 32px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                flex: 1,
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
                /* @__PURE__ */ b("div", { css: on, children: [
                  /* @__PURE__ */ a("div", { css: Xr, children: /* @__PURE__ */ b("div", { css: Jr, children: [
                    /* @__PURE__ */ a("div", { css: Zr, children: /* @__PURE__ */ a(Gr, {}) }),
                    /* @__PURE__ */ a(
                      "input",
                      {
                        css: en,
                        placeholder: "Search flows or try a suggestion below…",
                        value: p,
                        onChange: (y) => f(y.target.value),
                        onKeyPress: w,
                        type: "text"
                      }
                    ),
                    p.trim() && /* @__PURE__ */ a(
                      U,
                      {
                        css: tn,
                        onClick: E,
                        children: /* @__PURE__ */ a(qr, {})
                      }
                    )
                  ] }) }),
                  u.length > 0 && /* @__PURE__ */ a("div", { css: rn, children: u.map((y) => /* @__PURE__ */ a(
                    "button",
                    {
                      css: nn,
                      onClick: () => C(y),
                      type: "button",
                      children: y.name
                    },
                    y.id
                  )) })
                ] }),
                g && /* @__PURE__ */ a("div", { css: sn, children: /* @__PURE__ */ a("p", { css: an, children: g }) }),
                i && /* @__PURE__ */ a("div", { css: cn, children: Array.from({ length: 6 }, (y, S) => /* @__PURE__ */ a(v, {}, S)) }),
                !i && m.length > 0 && /* @__PURE__ */ a(
                  mt,
                  {
                    flows: m,
                    onFlowSelect: x
                  }
                ),
                !i && m.length === 0 && !g && /* @__PURE__ */ b("div", { css: ln, children: [
                  /* @__PURE__ */ a("div", { css: dn, children: /* @__PURE__ */ a(Ke, {}) }),
                  /* @__PURE__ */ a("h3", { css: fn, children: "No flows found" }),
                  /* @__PURE__ */ a("p", { css: un, children: s ? "No flows match your search criteria." : "No active onboarding flows are available at the moment." }),
                  s && /* @__PURE__ */ a(
                    U,
                    {
                      variant: "outline",
                      size: "sm",
                      onClick: () => {
                        d(""), f("");
                      },
                      children: "Clear search"
                    }
                  )
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
const yn = () => /* @__PURE__ */ b("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
  /* @__PURE__ */ a("path", { d: "m18 6-12 12" }),
  /* @__PURE__ */ a("path", { d: "m6 6 12 12" })
] }), bn = () => /* @__PURE__ */ a("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ a("path", { d: "m15 18-6-6 6-6" }) }), xn = () => /* @__PURE__ */ a("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ a("path", { d: "m9 18 6-6-6-6" }) }), wn = () => /* @__PURE__ */ b("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
  /* @__PURE__ */ a("path", { d: "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" }),
  /* @__PURE__ */ a("path", { d: "m13 13 6 6" })
] }), vn = () => /* @__PURE__ */ a("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ a("path", { d: "M13 7l5 5m0 0l-5 5m5-5H6" }) }), Sn = {
  position: "fixed",
  inset: 0,
  background: "rgba(0, 0, 0, 0.2)",
  zIndex: 999999
}, Cn = {
  position: "fixed",
  background: n.colors.surface,
  border: `1px solid ${n.colors.outline}`,
  borderRadius: n.borderRadius.lg,
  boxShadow: n.elevation["2xl"],
  maxWidth: 320,
  zIndex: n.zIndex.tooltip,
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
}, En = {
  ...Be,
  padding: n.spacing.md,
  borderBottom: `1px solid ${n.colors.outline}`
}, kn = {
  display: "flex",
  alignItems: "center",
  gap: n.spacing.sm,
  fontWeight: n.typography.fontWeight.medium,
  fontSize: n.typography.fontSize.sm,
  color: n.colors.onSurface
}, Je = {
  padding: n.spacing.xs,
  background: n.colors.primaryContainer,
  borderRadius: n.borderRadius.sm,
  color: n.colors.primary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}, Rn = {
  padding: n.spacing.md
}, $n = _`
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 12px;
`, Tn = _`
  margin-bottom: 12px;
  padding: 12px;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 6px;
`, An = _`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`, Fn = _`
  font-size: 12px;
  font-weight: 500;
  color: #1e40af;
`, Pn = _`
  font-size: 12px;
  color: #1e40af;
`, In = {
  ...Be,
  marginBottom: n.spacing.md
}, _n = {
  display: "flex",
  gap: n.spacing.xs
}, zn = {
  width: n.spacing.sm,
  height: n.spacing.sm,
  borderRadius: "50%"
}, Mn = {
  ...Be
}, Wn = _`
  position: absolute;
  width: 0;
  height: 0;
  border: 8px solid transparent;
`, Bn = {
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
}, On = {
  position: "fixed",
  border: `2px solid ${n.colors.primary}`,
  background: n.colors.primaryContainer,
  borderRadius: n.borderRadius.sm,
  pointerEvents: "none",
  zIndex: n.zIndex.overlay,
  boxShadow: `0 0 0 4px ${n.colors.primaryContainer}, 0 10px 25px ${n.colors.shadow}`
};
function Ln({
  step: e,
  onNext: t,
  onPrevious: r,
  onDismiss: o,
  canGoNext: i,
  canGoPrevious: s,
  currentStepIndex: d,
  totalSteps: p
}) {
  const [f, g] = V(null), [c, u] = V(!1), [m, E] = V(null), C = tt(null);
  if (Z(() => {
    if (!document)
      return;
    if (!e.targetElement) {
      g(null), u(!0);
      return;
    }
    const x = document.querySelector(e.targetElement);
    if (!x) {
      console.warn(`Target element not found: ${e.targetElement}`), g(null), u(!0);
      return;
    }
    if (!Ar(x))
      x.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      }), setTimeout(() => {
        g(x), u(!1);
        const v = Re(x);
        E(v);
      }, 500);
    else {
      g(x), u(!1);
      const v = Re(x);
      E(v);
    }
    return x.classList.add("flowese-highlight"), () => {
      x.classList.remove("flowese-highlight");
    };
  }, [e.targetElement]), Z(() => {
    const x = () => {
      if (f && m) {
        const v = Re(f);
        E(v);
      }
    };
    return window.addEventListener("resize", x), () => window.removeEventListener("resize", x);
  }, [f, m]), !(document != null && document.body))
    return null;
  const w = ({ centered: x = !1 }) => /* @__PURE__ */ b(
    "div",
    {
      ref: C,
      css: Cn,
      "data-testid": "flowese-tooltip",
      style: x ? {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      } : m ? {
        top: m.top,
        left: m.left
      } : void 0,
      children: [
        !x && m && /* @__PURE__ */ a("div", { css: [Wn, Bn[m.placement]] }),
        /* @__PURE__ */ b("div", { css: En, children: [
          /* @__PURE__ */ b("div", { css: kn, children: [
            /* @__PURE__ */ a("div", { css: Je, children: /* @__PURE__ */ a(wn, {}) }),
            /* @__PURE__ */ a("span", { children: e.title })
          ] }),
          /* @__PURE__ */ a(
            U,
            {
              variant: "ghost",
              css: { height: 24, width: 24, padding: 0 },
              onClick: o,
              children: /* @__PURE__ */ a(yn, {})
            }
          )
        ] }),
        /* @__PURE__ */ b("div", { css: Rn, children: [
          e.content && /* @__PURE__ */ a("p", { css: $n, children: e.content }),
          e.navigationHint && /* @__PURE__ */ b("div", { css: Tn, children: [
            /* @__PURE__ */ b("div", { css: An, children: [
              /* @__PURE__ */ a("div", { css: [Je, { background: n.colors.primaryContainer, color: n.colors.onPrimaryContainer }], children: /* @__PURE__ */ a(vn, {}) }),
              /* @__PURE__ */ a("p", { css: Fn, children: "Navigation Required" })
            ] }),
            /* @__PURE__ */ a("p", { css: Pn, children: e.navigationHint })
          ] }),
          /* @__PURE__ */ b("div", { css: In, children: [
            /* @__PURE__ */ b("div", { css: [Wr, Br.outline], children: [
              "Step ",
              d + 1,
              " of ",
              p
            ] }),
            /* @__PURE__ */ a("div", { css: _n, children: Array.from({ length: p }, (v, y) => /* @__PURE__ */ a(
              "div",
              {
                css: [
                  zn,
                  {
                    background: y === d ? n.colors.primary : y < d ? n.colors.primaryContainer : n.colors.outline
                  }
                ]
              },
              y
            )) })
          ] }),
          /* @__PURE__ */ b("div", { css: Mn, children: [
            /* @__PURE__ */ b(
              U,
              {
                variant: "outline",
                size: "sm",
                css: { gap: 4 },
                onClick: r,
                disabled: !s,
                children: [
                  /* @__PURE__ */ a(bn, {}),
                  "Previous"
                ]
              }
            ),
            /* @__PURE__ */ a(
              U,
              {
                variant: "primary",
                size: "sm",
                css: { gap: 4 },
                onClick: t,
                disabled: !i && d >= p - 1,
                children: i ? /* @__PURE__ */ b(be, { children: [
                  "Next",
                  /* @__PURE__ */ a(xn, {})
                ] }) : "Finish"
              }
            )
          ] })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ b(be, { children: [
    J(
      /* @__PURE__ */ a(
        "div",
        {
          css: Sn,
          onClick: o,
          onKeyDown: (x) => {
            x.key === "Escape" && o();
          },
          role: "button",
          tabIndex: 0
        }
      ),
      document.body
    ),
    c && J(/* @__PURE__ */ a(w, { centered: !0 }), document.body),
    f && m && J(/* @__PURE__ */ a(w, {}), document.body),
    f && J(
      /* @__PURE__ */ a(
        "div",
        {
          css: On,
          style: {
            top: f.getBoundingClientRect().top - 8,
            left: f.getBoundingClientRect().left - 8,
            width: f.getBoundingClientRect().width + 16,
            height: f.getBoundingClientRect().height + 16
          }
        }
      ),
      document.body
    )
  ] });
}
const Ze = () => /* @__PURE__ */ b(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [
      /* @__PURE__ */ a("path", { d: "M12 8V4H8" }),
      /* @__PURE__ */ a("rect", { width: "16", height: "12", x: "4", y: "8", rx: "2" }),
      /* @__PURE__ */ a("path", { d: "m9 16 0 0" }),
      /* @__PURE__ */ a("path", { d: "m15 16 0 0" })
    ]
  }
);
function qn({
  applicationId: e,
  baseUrl: t,
  onFlowComplete: r,
  onStepComplete: o
}) {
  const [i, s] = V(!1), [d, p] = V([]), [f, g] = V(null), [c, u] = V(0), [m, E] = V(!1), C = tt(null);
  Z(() => {
    (async () => {
      if (e) {
        E(!0);
        try {
          const B = await Tr(e);
          p(B);
        } catch (B) {
          console.error("Failed to fetch flows:", B);
        } finally {
          E(!1);
        }
      }
    })();
  }, [e]);
  const w = () => !f || !Array.isArray(f.steps) ? null : f.steps[c], x = () => !f || !Array.isArray(f.steps) ? 0 : f.steps.length, v = () => !f || !Array.isArray(f.steps) ? !1 : c < f.steps.length - 1, y = () => c > 0, S = () => {
    v() && u((z) => z + 1);
  }, F = () => {
    y() && u((z) => z - 1);
  }, l = () => {
    g(null), u(0);
  };
  Z(() => {
    const z = (B) => {
      if (f && !((B.metaKey || B.ctrlKey) && (B.key === "c" || B.key === "v" || B.key === "x")))
        switch (B.key) {
          case "Escape":
            G();
            break;
          case "ArrowRight":
            v() && ae();
            break;
          case "ArrowLeft":
            y() && ce();
            break;
        }
    };
    return f ? (document.addEventListener("keydown", z), document.body.style.overflow = "hidden") : document.body.style.overflow = "", () => {
      document.removeEventListener("keydown", z), document.body.style.overflow = "";
    };
  }, [f, c]), Z(() => {
    const z = (B) => {
      if (f && C.current) {
        const de = B.target;
        if (!C.current.contains(de)) {
          const fe = document.querySelector(
            "[data-testid='flowese-tooltip']"
          );
          if (fe && fe.contains(de))
            return;
          G();
        }
      }
    };
    return f && document.addEventListener("mousedown", z), () => {
      document.removeEventListener("mousedown", z);
    };
  }, [f]);
  const I = () => {
    s(!0);
  }, $ = () => {
    s(!1);
  }, se = (z) => {
    g(z), u(0), s(!1);
  }, ae = () => {
    const z = w();
    z && (o == null || o(z.id)), v() ? S() : (f && (r == null || r(f.id)), G());
  }, ce = () => {
    F();
  }, G = () => {
    l();
  }, le = w(), Se = x();
  return le ? /* @__PURE__ */ b(be, { children: [
    /* @__PURE__ */ b(
      U,
      {
        ref: C,
        variant: "outline",
        size: "sm",
        css: { gap: 8 },
        onClick: I,
        children: [
          /* @__PURE__ */ a(Ze, {}),
          "Guide"
        ]
      }
    ),
    /* @__PURE__ */ a(
      Xe,
      {
        isOpen: i,
        onClose: $,
        flows: d,
        onFlowSelect: se,
        isLoading: m
      }
    ),
    /* @__PURE__ */ a(
      Ln,
      {
        step: le,
        onNext: ae,
        onPrevious: ce,
        onDismiss: G,
        canGoNext: v(),
        canGoPrevious: y(),
        currentStepIndex: c,
        totalSteps: Se
      }
    )
  ] }) : /* @__PURE__ */ b(be, { children: [
    /* @__PURE__ */ b(
      U,
      {
        ref: C,
        variant: "outline",
        size: "sm",
        css: { gap: 8 },
        onClick: I,
        children: [
          /* @__PURE__ */ a(Ze, {}),
          "Guide"
        ]
      }
    ),
    /* @__PURE__ */ a(
      Xe,
      {
        isOpen: i,
        onClose: $,
        flows: d,
        onFlowSelect: se,
        isLoading: m
      }
    )
  ] });
}
const Nn = Pt(null);
function Vn() {
  const e = et(Nn);
  if (!e)
    throw new Error("useFlow must be used within a FlowProvider");
  return e;
}
function Qn() {
  const { state: e, dispatch: t, config: r } = Vn(), o = N(() => {
    t({ type: "SET_VISIBLE", payload: !0 });
  }, [t]), i = N(() => {
    t({ type: "SET_VISIBLE", payload: !1 });
  }, [t]), s = N(
    (w) => {
      t({ type: "SELECT_FLOW", payload: w });
    },
    [t]
  ), d = N(() => {
    t({ type: "NEXT_STEP" });
  }, [t]), p = N(() => {
    t({ type: "PREVIOUS_STEP" });
  }, [t]), f = N(
    (w) => {
      t({ type: "SET_CURRENT_STEP", payload: w });
    },
    [t]
  ), g = N(() => {
    t({ type: "RESET" });
  }, [t]), c = N(
    (w) => {
      t({ type: "SET_SEARCH_QUERY", payload: w });
    },
    [t]
  ), u = N(() => e.searchQuery ? e.flows.filter(
    (w) => {
      var x;
      return w.name.toLowerCase().includes(e.searchQuery.toLowerCase()) || ((x = w.description) == null ? void 0 : x.toLowerCase().includes(e.searchQuery.toLowerCase()));
    }
  ) : e.flows, [e.flows, e.searchQuery]), m = N(() => !e.selectedFlow || !Array.isArray(e.selectedFlow.steps) ? !1 : e.currentStepIndex < e.selectedFlow.steps.length - 1, [e.selectedFlow, e.currentStepIndex]), E = N(() => e.currentStepIndex > 0, [e.currentStepIndex]), C = N(() => !e.selectedFlow || !Array.isArray(e.selectedFlow.steps) ? !1 : e.currentStepIndex >= e.selectedFlow.steps.length - 1, [e.selectedFlow, e.currentStepIndex]);
  return {
    // State
    ...e,
    // Configuration
    config: r,
    // Actions
    showFlowSelection: o,
    hideFlowSelection: i,
    selectFlow: s,
    nextStep: d,
    previousStep: p,
    setCurrentStep: f,
    dismissOnboarding: g,
    setSearchQuery: c,
    // Computed values
    filteredFlows: u(),
    canGoNext: m(),
    canGoPrevious: E(),
    isFlowCompleted: C(),
    // Helper functions
    getCurrentStep: () => !e.selectedFlow || !Array.isArray(e.selectedFlow.steps) ? null : e.selectedFlow.steps[e.currentStepIndex],
    getTotalSteps: () => !e.selectedFlow || !Array.isArray(e.selectedFlow.steps) ? 0 : e.selectedFlow.steps.length
  };
}
export {
  qn as FlowProvider,
  Xe as FlowSelector,
  Ln as Tooltip,
  Re as calculateTooltipPosition,
  qn as default,
  Tr as fetchFlows,
  Un as filterFlowsByType,
  jn as getActionStepsCount,
  gt as getApiBaseUrl,
  Yn as getCurrentActionStep,
  Ar as isElementInViewport,
  Gn as sortFlowsByDate,
  Vn as useFlow,
  Qn as useFlowGuide
};
//# sourceMappingURL=flowese-guide.es.js.map
