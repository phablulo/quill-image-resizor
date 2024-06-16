var O = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
function qt(t, e, r) {
  return e = N(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var i = arguments, s = -1, a = N(i.length - e, 0), n = Array(a); ++s < a; )
      n[s] = i[e + s];
    s = -1;
    for (var o = Array(e + 1); ++s < e; )
      o[s] = i[s];
    return o[e] = r(n), Ut(t, this, o);
  };
}
var zt = qt;
function Ft(t) {
  return function() {
    return t;
  };
}
var Rt = Ft, Gt = typeof O == "object" && O && O.Object === Object && O, pt = Gt, Nt = pt, kt = typeof self == "object" && self && self.Object === Object && self, Kt = Nt || kt || Function("return this")(), v = Kt, Wt = v, Zt = Wt.Symbol, ft = Zt, k = ft, gt = Object.prototype, Vt = gt.hasOwnProperty, Xt = gt.toString, $ = k ? k.toStringTag : void 0;
function Yt(t) {
  var e = Vt.call(t, $), r = t[$];
  try {
    t[$] = void 0;
    var i = !0;
  } catch {
  }
  var s = Xt.call(t);
  return i && (e ? t[$] = r : delete t[$]), s;
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
var L = ge, ve = v, ye = ve["__core-js_shared__"], be = ye, H = be, Z = function() {
  var t = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function _e(t) {
  return !!Z && Z in t;
}
var me = _e, $e = Function.prototype, xe = $e.toString;
function Ae(t) {
  if (t != null) {
    try {
      return xe.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Oe = Ae, we = L, Ce = me, Se = p, je = Oe, Te = /[\\^$.*+?()[\]{}|]/g, Me = /^\[object .+?Constructor\]$/, Ie = Function.prototype, De = Object.prototype, Pe = Ie.toString, Ee = De.hasOwnProperty, Be = RegExp(
  "^" + Pe.call(Ee).replace(Te, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function He(t) {
  if (!Se(t) || Ce(t))
    return !1;
  var e = we(t) ? Be : Me;
  return e.test(je(t));
}
var Le = He;
function Ue(t, e) {
  return t == null ? void 0 : t[e];
}
var qe = Ue, ze = Le, Fe = qe;
function Re(t, e) {
  var r = Fe(t, e);
  return ze(r) ? r : void 0;
}
var U = Re, Ge = U, Ne = function() {
  try {
    var t = Ge(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), vt = Ne, ke = Rt, V = vt, Ke = dt, We = V ? function(t, e) {
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
function xr(t) {
  return $r(this.__data__, t) > -1;
}
var Ar = xr, Or = I;
function wr(t, e) {
  var r = this.__data__, i = Or(r, t);
  return i < 0 ? (++this.size, r.push([t, e])) : r[i][1] = e, this;
}
var Cr = wr, Sr = hr, jr = yr, Tr = mr, Mr = Ar, Ir = Cr;
function y(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
y.prototype.clear = Sr;
y.prototype.delete = jr;
y.prototype.get = Tr;
y.prototype.has = Mr;
y.prototype.set = Ir;
var D = y, Dr = D;
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
function qr(t) {
  return this.__data__.has(t);
}
var zr = qr, Fr = U, Rr = v, Gr = Fr(Rr, "Map"), bt = Gr, Nr = U, kr = Nr(Object, "create"), P = kr, X = P;
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
function b(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
b.prototype.clear = ui;
b.prototype.delete = di;
b.prototype.get = pi;
b.prototype.has = fi;
b.prototype.set = gi;
var vi = b, Y = vi, yi = D, bi = bt;
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
var xi = $i, Ai = xi;
function Oi(t, e) {
  var r = t.__data__;
  return Ai(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
var E = Oi, wi = E;
function Ci(t) {
  var e = wi(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
var Si = Ci, ji = E;
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
var Hi = Bi, Li = mi, Ui = Si, qi = Mi, zi = Pi, Fi = Hi;
function _(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
_.prototype.clear = Li;
_.prototype.delete = Ui;
_.prototype.get = qi;
_.prototype.has = zi;
_.prototype.set = Fi;
var Ri = _, Gi = D, Ni = bt, ki = Ri, Ki = 200;
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
function m(t) {
  var e = this.__data__ = new Vi(t);
  this.size = e.size;
}
m.prototype.clear = Xi;
m.prototype.delete = Yi;
m.prototype.get = Qi;
m.prototype.has = Ji;
m.prototype.set = ta;
var ea = m, Q = vt;
function ra(t, e, r) {
  e == "__proto__" && Q ? Q(t, e, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[e] = r;
}
var q = ra, ia = q, aa = M;
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
var oa = na, la = oa, ha = la(), ca = ha, C = { exports: {} };
C.exports;
(function(t, e) {
  var r = v, i = e && !e.nodeType && e, s = i && !0 && t && !t.nodeType && t, a = s && s.exports === i, n = a ? r.Buffer : void 0, o = n ? n.allocUnsafe : void 0;
  function l(c, u) {
    if (u)
      return c.slice();
    var d = c.length, f = o ? o(d) : new c.constructor(d);
    return c.copy(f), f;
  }
  t.exports = l;
})(C, C.exports);
var ua = C.exports, da = v, pa = da.Uint8Array, fa = pa, J = fa;
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
var $a = ma, xa = p, tt = Object.create, Aa = /* @__PURE__ */ function() {
  function t() {
  }
  return function(e) {
    if (!xa(e))
      return {};
    if (tt)
      return tt(e);
    t.prototype = e;
    var r = new t();
    return t.prototype = void 0, r;
  };
}(), Oa = Aa;
function wa(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var Ca = wa, Sa = Ca, ja = Sa(Object.getPrototypeOf, Object), mt = ja, Ta = Object.prototype;
function Ma(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || Ta;
  return t === r;
}
var $t = Ma, Ia = Oa, Da = mt, Pa = $t;
function Ea(t) {
  return typeof t.constructor == "function" && !Pa(t) ? Ia(Da(t)) : {};
}
var Ba = Ea;
function Ha(t) {
  return t != null && typeof t == "object";
}
var A = Ha, La = T, Ua = A, qa = "[object Arguments]";
function za(t) {
  return Ua(t) && La(t) == qa;
}
var Fa = za, et = Fa, Ra = A, xt = Object.prototype, Ga = xt.hasOwnProperty, Na = xt.propertyIsEnumerable, ka = et(/* @__PURE__ */ function() {
  return arguments;
}()) ? et : function(t) {
  return Ra(t) && Ga.call(t, "callee") && !Na.call(t, "callee");
}, At = ka, Ka = Array.isArray, Ot = Ka, Wa = 9007199254740991;
function Za(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Wa;
}
var wt = Za, Va = L, Xa = wt;
function Ya(t) {
  return t != null && Xa(t.length) && !Va(t);
}
var z = Ya, Qa = z, Ja = A;
function ts(t) {
  return Ja(t) && Qa(t);
}
var es = ts, S = { exports: {} };
function rs() {
  return !1;
}
var is = rs;
S.exports;
(function(t, e) {
  var r = v, i = is, s = e && !e.nodeType && e, a = s && !0 && t && !t.nodeType && t, n = a && a.exports === s, o = n ? r.Buffer : void 0, l = o ? o.isBuffer : void 0, c = l || i;
  t.exports = c;
})(S, S.exports);
var Ct = S.exports, as = T, ss = mt, ns = A, os = "[object Object]", ls = Function.prototype, hs = Object.prototype, St = ls.toString, cs = hs.hasOwnProperty, us = St.call(Object);
function ds(t) {
  if (!ns(t) || as(t) != os)
    return !1;
  var e = ss(t);
  if (e === null)
    return !0;
  var r = cs.call(e, "constructor") && e.constructor;
  return typeof r == "function" && r instanceof r && St.call(r) == us;
}
var ps = ds, fs = T, gs = wt, vs = A, ys = "[object Arguments]", bs = "[object Array]", _s = "[object Boolean]", ms = "[object Date]", $s = "[object Error]", xs = "[object Function]", As = "[object Map]", Os = "[object Number]", ws = "[object Object]", Cs = "[object RegExp]", Ss = "[object Set]", js = "[object String]", Ts = "[object WeakMap]", Ms = "[object ArrayBuffer]", Is = "[object DataView]", Ds = "[object Float32Array]", Ps = "[object Float64Array]", Es = "[object Int8Array]", Bs = "[object Int16Array]", Hs = "[object Int32Array]", Ls = "[object Uint8Array]", Us = "[object Uint8ClampedArray]", qs = "[object Uint16Array]", zs = "[object Uint32Array]", h = {};
h[Ds] = h[Ps] = h[Es] = h[Bs] = h[Hs] = h[Ls] = h[Us] = h[qs] = h[zs] = !0;
h[ys] = h[bs] = h[Ms] = h[_s] = h[Is] = h[ms] = h[$s] = h[xs] = h[As] = h[Os] = h[ws] = h[Cs] = h[Ss] = h[js] = h[Ts] = !1;
function Fs(t) {
  return vs(t) && gs(t.length) && !!h[fs(t)];
}
var Rs = Fs;
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
var ks = j.exports, Ks = Rs, Ws = Ns, rt = ks, it = rt && rt.isTypedArray, Zs = it ? Ws(it) : Ks, jt = Zs;
function Vs(t, e) {
  if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
    return t[e];
}
var Tt = Vs, Xs = q, Ys = M, Qs = Object.prototype, Js = Qs.hasOwnProperty;
function tn(t, e, r) {
  var i = t[e];
  (!(Js.call(t, e) && Ys(i, r)) || r === void 0 && !(e in t)) && Xs(t, e, r);
}
var en = tn, rn = en, an = q;
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
var Mt = un, dn = ln, pn = At, fn = Ot, gn = Ct, vn = Mt, yn = jt, bn = Object.prototype, _n = bn.hasOwnProperty;
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
function xn(t) {
  var e = [];
  if (t != null)
    for (var r in Object(t))
      e.push(r);
  return e;
}
var An = xn, On = p, wn = $t, Cn = An, Sn = Object.prototype, jn = Sn.hasOwnProperty;
function Tn(t) {
  if (!On(t))
    return Cn(t);
  var e = wn(t), r = [];
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
var Un = Ln, at = _t, qn = ua, zn = _a, Fn = $a, Rn = Ba, st = At, nt = Ot, Gn = es, Nn = Ct, kn = L, Kn = p, Wn = ps, Zn = jt, ot = Tt, Vn = Un;
function Xn(t, e, r, i, s, a, n) {
  var o = ot(t, r), l = ot(e, r), c = n.get(l);
  if (c) {
    at(t, r, c);
    return;
  }
  var u = a ? a(o, l, r + "", t, e, n) : void 0, d = u === void 0;
  if (d) {
    var f = nt(l), B = !f && Nn(l), G = !f && !B && Zn(l);
    u = l, f || B || G ? nt(o) ? u = o : Gn(o) ? u = Fn(o) : B ? (d = !1, u = qn(l, !0)) : G ? (d = !1, u = zn(l, !0)) : u = [] : Wn(l) || st(l) ? (u = o, st(o) ? u = Vn(o) : (!Kn(o) || kn(o)) && (u = Rn(l))) : d = !1;
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
}), $o = mo, xo = ut, Ao = yt, Oo = no, wo = $o, Co = Ao(function(t) {
  return t.push(void 0, Oo), xo(wo, void 0, t);
}), So = Co;
const jo = /* @__PURE__ */ Bt(So), To = {
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
class F {
  constructor(e) {
    this.onCreate = () => {
    }, this.onDestroy = () => {
    }, this.onUpdate = () => {
    }, this.overlay = e.overlay, this.img = e.img, this.options = e.options, this.requestUpdate = e.onUpdate;
  }
}
class Mo extends F {
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
</svg>`, Eo = `<svg class="" viewbox="0 0 18 18">
  <line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"></line>
  <line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"></line>
  <line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"></line>
  <line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"></line>
  <rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"></rect>
</svg>`, Bo = window.Quill.import("formats/image"), ht = ["alt", "height", "width", "style"];
class Ho extends Bo {
  static formats(e) {
    return ht.reduce(function(r, i) {
      return e.hasAttribute(i) && (r[i] = e.getAttribute(i)), r;
    }, {});
  }
  format(e, r) {
    ht.indexOf(e) > -1 ? r ? this.domNode.setAttribute(e, r) : this.domNode.removeAttribute(e) : super.format(e, r);
  }
}
window.Quill.register(Ho, !0);
const R = window.Quill.imports.parchment, g = new R.StyleAttributor("float", "float"), x = new R.StyleAttributor("margin", "margin"), w = new R.StyleAttributor("display", "display");
class Lo extends F {
  constructor(e) {
    super(e), this.alignments = [], this.onCreate = () => {
      var r;
      this.toolbar = document.createElement("div"), Object.assign(this.toolbar.style, this.options.toolbarStyles), (r = this.overlay) == null || r.appendChild(this.toolbar), this._defineAlignments(), this._addToolbarButtons();
    }, this.onDestroy = () => {
    }, this.onUpdate = () => {
    }, this._defineAlignments = () => {
      this.alignments = [
        {
          icon: Io,
          apply: () => {
            w.add(this.img, "inline"), g.add(this.img, "left"), x.add(this.img, "0 1em 1em 0");
          },
          isApplied: () => g.value(this.img) === "left"
        },
        {
          icon: Do,
          apply: () => {
            w.add(this.img, "block"), g.remove(this.img), x.add(this.img, "auto");
          },
          isApplied: () => x.value(this.img) === "auto"
        },
        {
          icon: Po,
          apply: () => {
            w.add(this.img, "inline"), g.add(this.img, "right"), x.add(this.img, "0 0 1em 1em");
          },
          isApplied: () => g.value(this.img) === "right"
        },
        {
          icon: Eo,
          apply: () => {
            this.img && (this.img.removeAttribute("width"), this.img.removeAttribute("height"));
          },
          isApplied: () => !1
        }
      ];
    }, this._addToolbarButtons = () => {
      const r = [];
      this.alignments.forEach((i, s) => {
        var n;
        const a = document.createElement("span");
        r.push(a), a.innerHTML = i.icon, a.addEventListener("click", () => {
          r.forEach((o) => o.style.filter = ""), i.isApplied() ? (g.remove(this.img), x.remove(this.img), w.remove(this.img)) : (this._selectButton(a), i.apply()), this.requestUpdate();
        }), Object.assign(a.style, this.options.toolbarButtonStyles), s > 0 && (a.style.borderLeftWidth = "0"), Object.assign(a.children[0].style, this.options.toolbarButtonSvgStyles), i.isApplied() && this._selectButton(a), (n = this.toolbar) == null || n.appendChild(a);
      });
    }, this._selectButton = (r) => {
      r.style.filter = "invert(20%)";
    };
  }
}
class Uo extends F {
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
const qo = Object.freeze(["userSelect", "mozUserSelect", "webkitUserSelect", "msUserSelect"]), zo = { DisplaySize: Mo, Toolbar: Lo, Resize: Uo };
class Fo {
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
      qo.forEach((n) => {
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
    this.removeModules(), this.modules = ((e = this.moduleClasses) == null ? void 0 : e.map((r) => new (zo[r] || r)(this))) || [], this.modules.forEach((r) => {
      r.onCreate();
    }), this.onUpdate();
  }
}
var ct;
(ct = window.Quill) == null || ct.register("modules/imageResizor", Fo);
export {
  Fo as default
};
