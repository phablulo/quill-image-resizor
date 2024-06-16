var S = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Ht(t, e, r) {
  switch (r.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, r[0]);
    case 2:
      return t.call(e, r[0], r[1]);
    case 3:
      return t.call(e, r[0], r[1], r[2]);
  }
  return t.apply(e, r);
}
var ut = Ht;
function Lt(t) {
  return t;
}
var dt = Lt, Ut = ut, N = Math.max;
function Ft(t, e, r) {
  return e = N(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var i = arguments, s = -1, a = N(i.length - e, 0), n = Array(a); ++s < a; )
      n[s] = i[e + s];
    s = -1;
    for (var o = Array(e + 1); ++s < e; )
      o[s] = i[s];
    return o[e] = r(n), Ut(t, this, o);
  };
}
var zt = Ft;
function Rt(t) {
  return function() {
    return t;
  };
}
var qt = Rt, Gt = typeof S == "object" && S && S.Object === Object && S, pt = Gt, Nt = pt, kt = typeof self == "object" && self && self.Object === Object && self, Kt = Nt || kt || Function("return this")(), y = Kt, Wt = y, Zt = Wt.Symbol, ft = Zt, k = ft, gt = Object.prototype, Vt = gt.hasOwnProperty, Xt = gt.toString, O = k ? k.toStringTag : void 0;
function Yt(t) {
  var e = Vt.call(t, O), r = t[O];
  try {
    t[O] = void 0;
    var i = !0;
  } catch {
  }
  var s = Xt.call(t);
  return i && (e ? t[O] = r : delete t[O]), s;
}
var Qt = Yt, Jt = Object.prototype, te = Jt.toString;
function ee(t) {
  return te.call(t);
}
var re = ee, K = ft, ie = Qt, ae = re, se = "[object Null]", ne = "[object Undefined]", W = K ? K.toStringTag : void 0;
function oe(t) {
  return t == null ? t === void 0 ? ne : se : W && W in Object(t) ? ie(t) : ae(t);
}
var T = oe;
function le(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var p = le, he = T, ce = p, ue = "[object AsyncFunction]", de = "[object Function]", pe = "[object GeneratorFunction]", fe = "[object Proxy]";
function ge(t) {
  if (!ce(t))
    return !1;
  var e = he(t);
  return e == de || e == pe || e == ue || e == fe;
}
var L = ge, ve = y, ye = ve["__core-js_shared__"], be = ye, H = be, Z = function() {
  var t = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function _e(t) {
  return !!Z && Z in t;
}
var me = _e, $e = Function.prototype, Oe = $e.toString;
function Ae(t) {
  if (t != null) {
    try {
      return Oe.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var xe = Ae, Se = L, we = me, Ce = p, je = xe, Te = /[\\^$.*+?()[\]{}|]/g, Me = /^\[object .+?Constructor\]$/, Ie = Function.prototype, De = Object.prototype, Pe = Ie.toString, Ee = De.hasOwnProperty, Be = RegExp(
  "^" + Pe.call(Ee).replace(Te, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function He(t) {
  if (!Ce(t) || we(t))
    return !1;
  var e = Se(t) ? Be : Me;
  return e.test(je(t));
}
var Le = He;
function Ue(t, e) {
  return t == null ? void 0 : t[e];
}
var Fe = Ue, ze = Le, Re = Fe;
function qe(t, e) {
  var r = Re(t, e);
  return ze(r) ? r : void 0;
}
var U = qe, Ge = U, Ne = function() {
  try {
    var t = Ge(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), vt = Ne, ke = qt, V = vt, Ke = dt, We = V ? function(t, e) {
  return V(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ke(e),
    writable: !0
  });
} : Ke, Ze = We, Ve = 800, Xe = 16, Ye = Date.now;
function Qe(t) {
  var e = 0, r = 0;
  return function() {
    var i = Ye(), s = Xe - (i - r);
    if (r = i, s > 0) {
      if (++e >= Ve)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
var Je = Qe, tr = Ze, er = Je, rr = er(tr), ir = rr, ar = dt, sr = zt, nr = ir;
function or(t, e) {
  return nr(sr(t, e, ar), t + "");
}
var yt = or;
function lr() {
  this.__data__ = [], this.size = 0;
}
var hr = lr;
function cr(t, e) {
  return t === e || t !== t && e !== e;
}
var M = cr, ur = M;
function dr(t, e) {
  for (var r = t.length; r--; )
    if (ur(t[r][0], e))
      return r;
  return -1;
}
var I = dr, pr = I, fr = Array.prototype, gr = fr.splice;
function vr(t) {
  var e = this.__data__, r = pr(e, t);
  if (r < 0)
    return !1;
  var i = e.length - 1;
  return r == i ? e.pop() : gr.call(e, r, 1), --this.size, !0;
}
var yr = vr, br = I;
function _r(t) {
  var e = this.__data__, r = br(e, t);
  return r < 0 ? void 0 : e[r][1];
}
var mr = _r, $r = I;
function Or(t) {
  return $r(this.__data__, t) > -1;
}
var Ar = Or, xr = I;
function Sr(t, e) {
  var r = this.__data__, i = xr(r, t);
  return i < 0 ? (++this.size, r.push([t, e])) : r[i][1] = e, this;
}
var wr = Sr, Cr = hr, jr = yr, Tr = mr, Mr = Ar, Ir = wr;
function b(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
b.prototype.clear = Cr;
b.prototype.delete = jr;
b.prototype.get = Tr;
b.prototype.has = Mr;
b.prototype.set = Ir;
var D = b, Dr = D;
function Pr() {
  this.__data__ = new Dr(), this.size = 0;
}
var Er = Pr;
function Br(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
var Hr = Br;
function Lr(t) {
  return this.__data__.get(t);
}
var Ur = Lr;
function Fr(t) {
  return this.__data__.has(t);
}
var zr = Fr, Rr = U, qr = y, Gr = Rr(qr, "Map"), bt = Gr, Nr = U, kr = Nr(Object, "create"), P = kr, X = P;
function Kr() {
  this.__data__ = X ? X(null) : {}, this.size = 0;
}
var Wr = Kr;
function Zr(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Vr = Zr, Xr = P, Yr = "__lodash_hash_undefined__", Qr = Object.prototype, Jr = Qr.hasOwnProperty;
function ti(t) {
  var e = this.__data__;
  if (Xr) {
    var r = e[t];
    return r === Yr ? void 0 : r;
  }
  return Jr.call(e, t) ? e[t] : void 0;
}
var ei = ti, ri = P, ii = Object.prototype, ai = ii.hasOwnProperty;
function si(t) {
  var e = this.__data__;
  return ri ? e[t] !== void 0 : ai.call(e, t);
}
var ni = si, oi = P, li = "__lodash_hash_undefined__";
function hi(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = oi && e === void 0 ? li : e, this;
}
var ci = hi, ui = Wr, di = Vr, pi = ei, fi = ni, gi = ci;
function _(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
_.prototype.clear = ui;
_.prototype.delete = di;
_.prototype.get = pi;
_.prototype.has = fi;
_.prototype.set = gi;
var vi = _, Y = vi, yi = D, bi = bt;
function _i() {
  this.size = 0, this.__data__ = {
    hash: new Y(),
    map: new (bi || yi)(),
    string: new Y()
  };
}
var mi = _i;
function $i(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
var Oi = $i, Ai = Oi;
function xi(t, e) {
  var r = t.__data__;
  return Ai(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
var E = xi, Si = E;
function wi(t) {
  var e = Si(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
var Ci = wi, ji = E;
function Ti(t) {
  return ji(this, t).get(t);
}
var Mi = Ti, Ii = E;
function Di(t) {
  return Ii(this, t).has(t);
}
var Pi = Di, Ei = E;
function Bi(t, e) {
  var r = Ei(this, t), i = r.size;
  return r.set(t, e), this.size += r.size == i ? 0 : 1, this;
}
var Hi = Bi, Li = mi, Ui = Ci, Fi = Mi, zi = Pi, Ri = Hi;
function m(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
m.prototype.clear = Li;
m.prototype.delete = Ui;
m.prototype.get = Fi;
m.prototype.has = zi;
m.prototype.set = Ri;
var qi = m, Gi = D, Ni = bt, ki = qi, Ki = 200;
function Wi(t, e) {
  var r = this.__data__;
  if (r instanceof Gi) {
    var i = r.__data__;
    if (!Ni || i.length < Ki - 1)
      return i.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new ki(i);
  }
  return r.set(t, e), this.size = r.size, this;
}
var Zi = Wi, Vi = D, Xi = Er, Yi = Hr, Qi = Ur, Ji = zr, ta = Zi;
function $(t) {
  var e = this.__data__ = new Vi(t);
  this.size = e.size;
}
$.prototype.clear = Xi;
$.prototype.delete = Yi;
$.prototype.get = Qi;
$.prototype.has = Ji;
$.prototype.set = ta;
var ea = $, Q = vt;
function ra(t, e, r) {
  e == "__proto__" && Q ? Q(t, e, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[e] = r;
}
var F = ra, ia = F, aa = M;
function sa(t, e, r) {
  (r !== void 0 && !aa(t[e], r) || r === void 0 && !(e in t)) && ia(t, e, r);
}
var _t = sa;
function na(t) {
  return function(e, r, i) {
    for (var s = -1, a = Object(e), n = i(e), o = n.length; o--; ) {
      var l = n[t ? o : ++s];
      if (r(a[l], l, a) === !1)
        break;
    }
    return e;
  };
}
var oa = na, la = oa, ha = la(), ca = ha, w = { exports: {} };
w.exports;
(function(t, e) {
  var r = y, i = e && !e.nodeType && e, s = i && !0 && t && !t.nodeType && t, a = s && s.exports === i, n = a ? r.Buffer : void 0, o = n ? n.allocUnsafe : void 0;
  function l(c, u) {
    if (u)
      return c.slice();
    var d = c.length, g = o ? o(d) : new c.constructor(d);
    return c.copy(g), g;
  }
  t.exports = l;
})(w, w.exports);
var ua = w.exports, da = y, pa = da.Uint8Array, fa = pa, J = fa;
function ga(t) {
  var e = new t.constructor(t.byteLength);
  return new J(e).set(new J(t)), e;
}
var va = ga, ya = va;
function ba(t, e) {
  var r = e ? ya(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.length);
}
var _a = ba;
function ma(t, e) {
  var r = -1, i = t.length;
  for (e || (e = Array(i)); ++r < i; )
    e[r] = t[r];
  return e;
}
var $a = ma, Oa = p, tt = Object.create, Aa = /* @__PURE__ */ function() {
  function t() {
  }
  return function(e) {
    if (!Oa(e))
      return {};
    if (tt)
      return tt(e);
    t.prototype = e;
    var r = new t();
    return t.prototype = void 0, r;
  };
}(), xa = Aa;
function Sa(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var wa = Sa, Ca = wa, ja = Ca(Object.getPrototypeOf, Object), mt = ja, Ta = Object.prototype;
function Ma(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || Ta;
  return t === r;
}
var $t = Ma, Ia = xa, Da = mt, Pa = $t;
function Ea(t) {
  return typeof t.constructor == "function" && !Pa(t) ? Ia(Da(t)) : {};
}
var Ba = Ea;
function Ha(t) {
  return t != null && typeof t == "object";
}
var x = Ha, La = T, Ua = x, Fa = "[object Arguments]";
function za(t) {
  return Ua(t) && La(t) == Fa;
}
var Ra = za, et = Ra, qa = x, Ot = Object.prototype, Ga = Ot.hasOwnProperty, Na = Ot.propertyIsEnumerable, ka = et(/* @__PURE__ */ function() {
  return arguments;
}()) ? et : function(t) {
  return qa(t) && Ga.call(t, "callee") && !Na.call(t, "callee");
}, At = ka, Ka = Array.isArray, xt = Ka, Wa = 9007199254740991;
function Za(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Wa;
}
var St = Za, Va = L, Xa = St;
function Ya(t) {
  return t != null && Xa(t.length) && !Va(t);
}
var z = Ya, Qa = z, Ja = x;
function ts(t) {
  return Ja(t) && Qa(t);
}
var es = ts, C = { exports: {} };
function rs() {
  return !1;
}
var is = rs;
C.exports;
(function(t, e) {
  var r = y, i = is, s = e && !e.nodeType && e, a = s && !0 && t && !t.nodeType && t, n = a && a.exports === s, o = n ? r.Buffer : void 0, l = o ? o.isBuffer : void 0, c = l || i;
  t.exports = c;
})(C, C.exports);
var wt = C.exports, as = T, ss = mt, ns = x, os = "[object Object]", ls = Function.prototype, hs = Object.prototype, Ct = ls.toString, cs = hs.hasOwnProperty, us = Ct.call(Object);
function ds(t) {
  if (!ns(t) || as(t) != os)
    return !1;
  var e = ss(t);
  if (e === null)
    return !0;
  var r = cs.call(e, "constructor") && e.constructor;
  return typeof r == "function" && r instanceof r && Ct.call(r) == us;
}
var ps = ds, fs = T, gs = St, vs = x, ys = "[object Arguments]", bs = "[object Array]", _s = "[object Boolean]", ms = "[object Date]", $s = "[object Error]", Os = "[object Function]", As = "[object Map]", xs = "[object Number]", Ss = "[object Object]", ws = "[object RegExp]", Cs = "[object Set]", js = "[object String]", Ts = "[object WeakMap]", Ms = "[object ArrayBuffer]", Is = "[object DataView]", Ds = "[object Float32Array]", Ps = "[object Float64Array]", Es = "[object Int8Array]", Bs = "[object Int16Array]", Hs = "[object Int32Array]", Ls = "[object Uint8Array]", Us = "[object Uint8ClampedArray]", Fs = "[object Uint16Array]", zs = "[object Uint32Array]", h = {};
h[Ds] = h[Ps] = h[Es] = h[Bs] = h[Hs] = h[Ls] = h[Us] = h[Fs] = h[zs] = !0;
h[ys] = h[bs] = h[Ms] = h[_s] = h[Is] = h[ms] = h[$s] = h[Os] = h[As] = h[xs] = h[Ss] = h[ws] = h[Cs] = h[js] = h[Ts] = !1;
function Rs(t) {
  return vs(t) && gs(t.length) && !!h[fs(t)];
}
var qs = Rs;
function Gs(t) {
  return function(e) {
    return t(e);
  };
}
var Ns = Gs, j = { exports: {} };
j.exports;
(function(t, e) {
  var r = pt, i = e && !e.nodeType && e, s = i && !0 && t && !t.nodeType && t, a = s && s.exports === i, n = a && r.process, o = function() {
    try {
      var l = s && s.require && s.require("util").types;
      return l || n && n.binding && n.binding("util");
    } catch {
    }
  }();
  t.exports = o;
})(j, j.exports);
var ks = j.exports, Ks = qs, Ws = Ns, rt = ks, it = rt && rt.isTypedArray, Zs = it ? Ws(it) : Ks, jt = Zs;
function Vs(t, e) {
  if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
    return t[e];
}
var Tt = Vs, Xs = F, Ys = M, Qs = Object.prototype, Js = Qs.hasOwnProperty;
function tn(t, e, r) {
  var i = t[e];
  (!(Js.call(t, e) && Ys(i, r)) || r === void 0 && !(e in t)) && Xs(t, e, r);
}
var en = tn, rn = en, an = F;
function sn(t, e, r, i) {
  var s = !r;
  r || (r = {});
  for (var a = -1, n = e.length; ++a < n; ) {
    var o = e[a], l = i ? i(r[o], t[o], o, r, t) : void 0;
    l === void 0 && (l = t[o]), s ? an(r, o, l) : rn(r, o, l);
  }
  return r;
}
var nn = sn;
function on(t, e) {
  for (var r = -1, i = Array(t); ++r < t; )
    i[r] = e(r);
  return i;
}
var ln = on, hn = 9007199254740991, cn = /^(?:0|[1-9]\d*)$/;
function un(t, e) {
  var r = typeof t;
  return e = e ?? hn, !!e && (r == "number" || r != "symbol" && cn.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
var Mt = un, dn = ln, pn = At, fn = xt, gn = wt, vn = Mt, yn = jt, bn = Object.prototype, _n = bn.hasOwnProperty;
function mn(t, e) {
  var r = fn(t), i = !r && pn(t), s = !r && !i && gn(t), a = !r && !i && !s && yn(t), n = r || i || s || a, o = n ? dn(t.length, String) : [], l = o.length;
  for (var c in t)
    (e || _n.call(t, c)) && !(n && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    vn(c, l))) && o.push(c);
  return o;
}
var $n = mn;
function On(t) {
  var e = [];
  if (t != null)
    for (var r in Object(t))
      e.push(r);
  return e;
}
var An = On, xn = p, Sn = $t, wn = An, Cn = Object.prototype, jn = Cn.hasOwnProperty;
function Tn(t) {
  if (!xn(t))
    return wn(t);
  var e = Sn(t), r = [];
  for (var i in t)
    i == "constructor" && (e || !jn.call(t, i)) || r.push(i);
  return r;
}
var Mn = Tn, In = $n, Dn = Mn, Pn = z;
function En(t) {
  return Pn(t) ? In(t, !0) : Dn(t);
}
var It = En, Bn = nn, Hn = It;
function Ln(t) {
  return Bn(t, Hn(t));
}
var Un = Ln, at = _t, Fn = ua, zn = _a, Rn = $a, qn = Ba, st = At, nt = xt, Gn = es, Nn = wt, kn = L, Kn = p, Wn = ps, Zn = jt, ot = Tt, Vn = Un;
function Xn(t, e, r, i, s, a, n) {
  var o = ot(t, r), l = ot(e, r), c = n.get(l);
  if (c) {
    at(t, r, c);
    return;
  }
  var u = a ? a(o, l, r + "", t, e, n) : void 0, d = u === void 0;
  if (d) {
    var g = nt(l), B = !g && Nn(l), G = !g && !B && Zn(l);
    u = l, g || B || G ? nt(o) ? u = o : Gn(o) ? u = Rn(o) : B ? (d = !1, u = Fn(l, !0)) : G ? (d = !1, u = zn(l, !0)) : u = [] : Wn(l) || st(l) ? (u = o, st(o) ? u = Vn(o) : (!Kn(o) || kn(o)) && (u = qn(l))) : d = !1;
  }
  d && (n.set(l, u), s(u, l, i, a, n), n.delete(l)), at(t, r, u);
}
var Yn = Xn, Qn = ea, Jn = _t, to = ca, eo = Yn, ro = p, io = It, ao = Tt;
function Dt(t, e, r, i, s) {
  t !== e && to(e, function(a, n) {
    if (s || (s = new Qn()), ro(a))
      eo(t, e, n, r, Dt, i, s);
    else {
      var o = i ? i(ao(t, n), a, n + "", t, e, s) : void 0;
      o === void 0 && (o = a), Jn(t, n, o);
    }
  }, io);
}
var Pt = Dt, so = Pt, lt = p;
function Et(t, e, r, i, s, a) {
  return lt(t) && lt(e) && (a.set(e, t), so(t, e, void 0, Et, a), a.delete(e)), t;
}
var no = Et, oo = M, lo = z, ho = Mt, co = p;
function uo(t, e, r) {
  if (!co(r))
    return !1;
  var i = typeof e;
  return (i == "number" ? lo(r) && ho(e, r.length) : i == "string" && e in r) ? oo(r[e], t) : !1;
}
var po = uo, fo = yt, go = po;
function vo(t) {
  return fo(function(e, r) {
    var i = -1, s = r.length, a = s > 1 ? r[s - 1] : void 0, n = s > 2 ? r[2] : void 0;
    for (a = t.length > 3 && typeof a == "function" ? (s--, a) : void 0, n && go(r[0], r[1], n) && (a = s < 3 ? void 0 : a, s = 1), e = Object(e); ++i < s; ) {
      var o = r[i];
      o && t(e, o, i, a);
    }
    return e;
  });
}
var yo = vo, bo = Pt, _o = yo, mo = _o(function(t, e, r, i) {
  bo(t, e, r, i);
}), $o = mo, Oo = ut, Ao = yt, xo = no, So = $o, wo = Ao(function(t) {
  return t.push(void 0, xo), Oo(So, void 0, t);
}), Co = wo;
const jo = /* @__PURE__ */ Bt(Co), To = {
  modules: ["DisplaySize", "Toolbar", "Resize"],
  overlayStyles: {
    position: "absolute",
    boxSizing: "border-box",
    border: "1px dashed #444"
  },
  handleStyles: {
    position: "absolute",
    height: "12px",
    width: "12px",
    backgroundColor: "white",
    border: "1px solid #777",
    boxSizing: "border-box",
    opacity: "0.80"
  },
  displayStyles: {
    position: "absolute",
    font: "12px/1.0 Arial, Helvetica, sans-serif",
    padding: "4px 8px",
    textAlign: "center",
    backgroundColor: "white",
    color: "#333",
    border: "1px solid #777",
    boxSizing: "border-box",
    opacity: "0.80",
    cursor: "default"
  },
  toolbarStyles: {
    position: "absolute",
    top: "-12px",
    right: "0",
    left: "0",
    height: "0",
    minWidth: "100px",
    font: "12px/1.0 Arial, Helvetica, sans-serif",
    textAlign: "center",
    color: "#333",
    boxSizing: "border-box",
    cursor: "default"
  },
  toolbarButtons: {
    left: !0,
    center: !0,
    right: !0,
    clean: !0
  },
  toolbarButtonStyles: {
    display: "inline-block",
    width: "24px",
    height: "24px",
    background: "white",
    border: "1px solid #999",
    verticalAlign: "middle"
  },
  toolbarButtonSvgStyles: {
    fill: "#444",
    stroke: "#444",
    strokeWidth: "0"
  }
};
class R {
  constructor(e) {
    this.onCreate = () => {
    }, this.onDestroy = () => {
    }, this.onUpdate = () => {
    }, this.overlay = e.overlay, this.img = e.img, this.options = e.options, this.requestUpdate = e.onUpdate, this.img && (this.img.setAttribute("w", this.img.naturalWidth.toString()), this.img.setAttribute("h", this.img.naturalHeight.toString()));
  }
}
class Mo extends R {
  constructor(e) {
    super(e), this.display = null, this.onCreate = () => {
      var r;
      this.display = document.createElement("div"), Object.assign(this.display.style, this.options.displayStyles), (r = this.overlay) == null || r.appendChild(this.display);
    }, this.onDestroy = () => {
    }, this.onUpdate = () => {
      if (!this.display || !this.img)
        return;
      const r = this.getCurrentSize();
      if (this.display.innerHTML = r.join(" &times; "), r[0] > 120 && r[1] > 30)
        Object.assign(this.display.style, {
          right: "4px",
          bottom: "4px",
          left: "auto"
        });
      else if (this.img.style.float == "right") {
        const i = this.display.getBoundingClientRect();
        Object.assign(this.display.style, {
          right: "auto",
          bottom: `-${i.height + 4}px`,
          left: `-${i.width + 4}px`
        });
      } else {
        const i = this.display.getBoundingClientRect();
        Object.assign(this.display.style, {
          right: `-${i.width + 4}px`,
          bottom: `-${i.height + 4}px`,
          left: "auto"
        });
      }
    }, this.getCurrentSize = () => {
      var r, i;
      return [((r = this.img) == null ? void 0 : r.width) || 0, ((i = this.img) == null ? void 0 : i.height) || 0];
    };
  }
}
const Io = `<svg viewbox="0 0 18 18">
  <path class="ql-fill" d="M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z"/>
  <path class="ql-fill" d="M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z"/>
  <path class="ql-fill" d="M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z"/>
  <path class="ql-fill" d="M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z"/>
  <rect class="ql-fill" x="2" y="6" width="8" height="6" rx="1" ry="1"/>
</svg>`, Do = `<svg viewbox="0 0 18 18">
  <path class="ql-fill" d="M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z"/>
  <path class="ql-fill" d="M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z"/>
  <rect class="ql-fill" x="3" y="6" width="12" height="6" rx="1" ry="1"/>
</svg>`, Po = `<svg viewbox="0 0 18 18">
  <path class="ql-fill" d="M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z"/>
  <path class="ql-fill" d="M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z"/>
  <path class="ql-fill" d="M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z"/>
  <path class="ql-fill" d="M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z"/>
  <rect class="ql-fill" x="8" y="6" width="8" height="6" rx="1" ry="1" transform="translate(24 18) rotate(-180)"/>
</svg>`, Eo = window.Quill.import("formats/image"), ht = ["alt", "height", "width", "style", "w", "h"];
class Bo extends Eo {
  static formats(e) {
    return ht.reduce(function(r, i) {
      return e.hasAttribute(i) && (r[i] = e.getAttribute(i)), r;
    }, {});
  }
  format(e, r) {
    ht.indexOf(e) > -1 ? r ? this.domNode.setAttribute(e, r) : this.domNode.removeAttribute(e) : super.format(e, r);
  }
}
window.Quill.register(Bo, !0);
const q = window.Quill.imports.parchment, f = new q.StyleAttributor("float", "float"), v = new q.StyleAttributor("margin", "margin"), A = new q.StyleAttributor("display", "display");
class Ho extends R {
  constructor(e) {
    super(e), this.alignments = [], this.onCreate = () => {
      var r;
      this.toolbar = document.createElement("div"), Object.assign(this.toolbar.style, this.options.toolbarStyles), (r = this.overlay) == null || r.appendChild(this.toolbar), this._defineAlignments(), this._addToolbarButtons();
    }, this.onDestroy = () => {
    }, this.onUpdate = () => {
    }, this._defineAlignments = () => {
      var s, a, n;
      if (this.alignments = [], !this.img)
        return;
      const r = () => {
        f.remove(this.img), v.remove(this.img), A.remove(this.img);
      };
      ((s = this.options.toolbarButtons) == null ? void 0 : s.left) !== !1 && this.alignments.push({
        icon: Io,
        apply: () => {
          A.add(this.img, "inline"), f.add(this.img, "left"), v.add(this.img, "0 1em 1em 0");
        },
        isApplied: () => f.value(this.img) === "left",
        remove: r
      }), ((a = this.options.toolbarButtons) == null ? void 0 : a.center) !== !1 && this.alignments.push({
        icon: Do,
        apply: () => {
          A.add(this.img, "block"), f.remove(this.img), v.add(this.img, "auto");
        },
        isApplied: () => v.value(this.img) === "auto",
        remove: r
      }), ((n = this.options.toolbarButtons) == null ? void 0 : n.right) !== !1 && this.alignments.push({
        icon: Po,
        apply: () => {
          A.add(this.img, "inline"), f.add(this.img, "right"), v.add(this.img, "0 0 1em 1em");
        },
        isApplied: () => f.value(this.img) === "right",
        remove: r
      });
      const i = { ...this.options.toolbarButtons };
      delete i.left, delete i.right, delete i.center;
      for (const o of Object.values(i)) {
        if (!(o instanceof Function))
          continue;
        const l = o(this.img, A, f, v);
        this.alignments.push(l);
      }
    }, this._addToolbarButtons = () => {
      const r = [];
      this.alignments.forEach((i, s) => {
        var n;
        const a = document.createElement("span");
        r.push(a), a.innerHTML = i.icon, a.addEventListener("click", () => {
          r.forEach((o) => o.style.filter = ""), i.isApplied() ? i.remove() : (this._selectButton(a), i.apply()), this.requestUpdate();
        }), Object.assign(a.style, this.options.toolbarButtonStyles), s > 0 && (a.style.borderLeftWidth = "0"), Object.assign(a.children[0].style, this.options.toolbarButtonSvgStyles), i.isApplied() && this._selectButton(a), (n = this.toolbar) == null || n.appendChild(a);
      });
    }, this._selectButton = (r) => {
      r.style.filter = "invert(20%)";
    };
  }
}
class Lo extends R {
  constructor(e) {
    super(e), this.boxes = [], this.dragBox = null, this.dragStartX = 0, this.dragStartY = 0, this.preDragWidth = 0, this.preDragHeight = 0, this.preDragARatio = 0, this.onCreate = () => {
      this.boxes = [], this.addBox("e-resize"), this.addBox("n-resize"), this.addBox("nwse-resize"), this.positionBoxes();
    }, this.onDestroy = () => {
      this.setCursor("");
    }, this.positionBoxes = () => {
      var s, a;
      const r = `${-parseFloat(((s = this.options.handleStyles) == null ? void 0 : s.width.toString()) || "0") / 2}px`, i = `${-parseFloat(((a = this.options.handleStyles) == null ? void 0 : a.height.toString()) || "0") / 2}px`;
      [
        { right: r, top: `calc(50% - ${i.slice(1)})` },
        // right
        { left: `calc(50% - ${r.slice(1)})`, bottom: i },
        // bottom
        { right: r, bottom: i }
        // bottom right
      ].forEach((n, o) => {
        Object.assign(this.boxes[o].style, n);
      });
    }, this.addBox = (r) => {
      var s, a, n;
      const i = document.createElement("div");
      Object.assign(i.style, this.options.handleStyles), i.style.cursor = r, i.style.width = `${((s = this.options.handleStyles) == null ? void 0 : s.width) || 0}px`, i.style.height = `${((a = this.options.handleStyles) == null ? void 0 : a.height) || 0}px`, i.addEventListener("mousedown", this.handleMousedown, !1), (n = this.overlay) == null || n.appendChild(i), this.boxes.push(i);
    }, this.handleMousedown = (r) => {
      var i, s, a, n;
      this.dragBox = r.target, this.dragStartX = r.clientX, this.dragStartY = r.clientY, this.preDragWidth = ((i = this.img) == null ? void 0 : i.width) || ((s = this.img) == null ? void 0 : s.naturalWidth) || 0, this.preDragHeight = ((a = this.img) == null ? void 0 : a.height) || ((n = this.img) == null ? void 0 : n.naturalHeight) || 0, this.preDragARatio = this.preDragHeight / this.preDragWidth, this.setCursor(this.dragBox.style.cursor), document.addEventListener("mousemove", this.handleDrag, !1), document.addEventListener("mouseup", this.handleMouseup, !1);
    }, this.handleMouseup = () => {
      this.setCursor(""), document.removeEventListener("mousemove", this.handleDrag), document.removeEventListener("mouseup", this.handleMouseup);
    }, this.handleDrag = (r) => {
      if (this.img) {
        if (this.dragBox === this.boxes[1]) {
          const i = r.clientY - this.dragStartY;
          this.img.height = Math.round(this.preDragHeight + i);
        } else {
          const i = r.clientX - this.dragStartX;
          if (this.dragBox === this.boxes[0])
            this.img.width = Math.round(this.preDragWidth + i);
          else {
            const s = this.preDragWidth + i;
            this.img.width = Math.round(s), this.img.height = Math.round(s * this.preDragARatio);
          }
        }
        this.requestUpdate();
      }
    }, this.setCursor = (r) => {
      [document.body, this.img].forEach((s) => {
        s && (s.style.cursor = r);
      });
    };
  }
}
const Uo = Object.freeze(["userSelect", "mozUserSelect", "webkitUserSelect", "msUserSelect"]), Fo = { DisplaySize: Mo, Toolbar: Ho, Resize: Lo };
class zo {
  constructor(e, r = {}) {
    var s;
    this.moduleClasses = [], this.modules = [], this.onUpdate = () => {
      this.repositionElements(), this.modules.forEach((a) => {
        a.onUpdate();
      });
    }, this.removeModules = () => {
      this.modules.forEach((a) => {
        a.onDestroy();
      }), this.modules = [];
    }, this.handleClick = (a) => {
      var o;
      const n = a.target;
      if (((o = n == null ? void 0 : n.tagName) == null ? void 0 : o.toUpperCase()) === "IMG") {
        if (this.img === n)
          return;
        this.img && this.hide(), this.show(n);
      } else
        this.img && this.hide();
    }, this.show = (a) => {
      this.img = a, this.showOverlay(), this.initializeModules();
    }, this.showOverlay = () => {
      this.overlay && this.hideOverlay(), this.quill.setSelection(null), this.setUserSelect("none"), document.addEventListener("keyup", this.checkImageKeyUp, !0), this.quill.root.addEventListener("input", this.checkImageInput, !0), this.overlay = document.createElement("div"), Object.assign(this.overlay.style, this.options.overlayStyles), this.quill.root.parentNode.appendChild(this.overlay), this.repositionElements();
    }, this.hideOverlay = () => {
      this.overlay && (this.quill.root.parentNode.removeChild(this.overlay), this.overlay = void 0, document.removeEventListener("keyup", this.checkImageKeyUp), this.quill.root.removeEventListener("input", this.checkImageInput), this.setUserSelect(""));
    }, this.repositionElements = () => {
      if (!this.overlay || !this.img)
        return;
      const a = this.quill.root.parentNode, n = this.img.getBoundingClientRect(), o = a.getBoundingClientRect();
      Object.assign(this.overlay.style, {
        left: `${n.left - o.left - 1 + a.scrollLeft}px`,
        top: `${n.top - o.top + a.scrollTop}px`,
        width: `${n.width}px`,
        height: `${n.height}px`
      });
    }, this.hide = () => {
      this.hideOverlay(), this.removeModules(), this.img = void 0;
    }, this.setUserSelect = (a) => {
      Uo.forEach((n) => {
        this.quill.root.style[n] = a, document.documentElement.style[n] = a;
      });
    }, this.checkImageKeyUp = (a) => {
      var n;
      this.img && (["Backspace", "Delete"].includes(a.code) && ((n = window.Quill) == null || n.find(this.img).deleteAt(0)), this.hide());
    }, this.checkImageInput = (a) => {
      var n;
      this.img && (["deleteContentForward", "deleteContentBackward"].includes(a.inputType) && ((n = window.Quill) == null || n.find(this.img).deleteAt(0)), this.hide());
    }, this.initializeModules = this.initializeModules.bind(this), this.quill = e, this.options = jo({}, r, To), (s = r.modules) != null && s.length && (this.moduleClasses = r.modules.slice()), this.quill.root.addEventListener("click", this.handleClick, !1);
    const i = this.quill.root.parentNode;
    i.style.position = i.style.position || "relative", this.modules = [], this.moduleClasses = this.options.modules || [];
  }
  initializeModules() {
    var e;
    this.removeModules(), this.modules = ((e = this.moduleClasses) == null ? void 0 : e.map((r) => new (Fo[r] || r)(this))) || [], this.modules.forEach((r) => {
      r.onCreate();
    }), this.onUpdate();
  }
}
var ct;
(ct = window.Quill) == null || ct.register("modules/imageResizor", zo);
export {
  zo as default
};
