/* N.I.C Mada — connexion partagée sur tout le site.
   Lit la session Supabase enregistrée par l'espace client (même site = même session),
   affiche « Bonjour Prénom » dans l'en-tête et un menu (Mon espace, formations, téléchargements, déconnexion). */
(function () {
  "use strict";
  var REF = "pisjdbpfsxidagjnfxxm";
  var KEY_STORE = "sb-" + REF + "-auth-token";
  var URL = "https://" + REF + ".supabase.co";
  var ANON = "sb_publishable_EaXO2yUXd88X2sjI7MaTEg_IWaOnEml";

  var TX = {
    fr: { hi: "Bonjour", space: "Mon espace", forms: "Mes formations", soft: "Mes téléchargements", out: "Se déconnecter", acct: "Mon compte" },
    mg: { hi: "Salama", space: "Ny kaontiko", forms: "Ny fiofanako", soft: "Ny rindranasa nalaiko", out: "Hivoaka", acct: "Ny kaontiko" },
    en: { hi: "Hello", space: "My account", forms: "My trainings", soft: "My downloads", out: "Sign out", acct: "My account" }
  };
  function lang() { var l = (document.documentElement.lang || "fr").slice(0, 2); return TX[l] ? l : "fr"; }
  function t(k) { return TX[lang()][k]; }

  function lireSession() {
    try {
      var raw = localStorage.getItem(KEY_STORE); if (!raw) return null;
      var s = JSON.parse(raw); var s2 = s && (s.currentSession || s);
      if (!s2 || !s2.user || !s2.refresh_token) return null;
      return s2;
    } catch (e) { return null; }
  }
  function prenom(s) {
    var m = (s.user.user_metadata || {});
    var n = (m.nom || m.full_name || m.name || "").trim();
    if (!n) n = (s.user.email || "").split("@")[0];
    n = n.split(/\s+/)[0];
    return n.charAt(0).toUpperCase() + n.slice(1, 18);
  }
  function esc(x) { var d = document.createElement("div"); d.textContent = x; return d.innerHTML; }

  var css = ".nic-user{position:relative}" +
    ".nic-user>button{font:inherit;font-family:var(--brand,inherit);font-weight:700;font-size:14.5px;color:var(--blue,#0f2a78);background:#fff;border:1.5px solid var(--gold,#e8b02a);padding:6px 12px 6px 6px;border-radius:999px;display:flex;align-items:center;gap:8px;cursor:pointer;white-space:nowrap}" +
    ".nic-av{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,#1f3fae,#0f2a78);color:#e8b02a;font-size:13px;font-weight:800}" +
    ".nic-menu{position:absolute;right:0;top:calc(100% + 8px);min-width:230px;background:#fff;border:1px solid rgba(31,63,174,.15);border-radius:14px;box-shadow:0 20px 44px rgba(12,22,51,.18);padding:8px;display:none;z-index:80}" +
    ".nic-user.open .nic-menu{display:block}" +
    ".nic-menu .who{padding:8px 10px 10px;border-bottom:1px solid #e2e7f3;margin-bottom:6px;font-size:12.5px;color:#55607a;word-break:break-all}" +
    ".nic-menu .who b{display:block;color:#0c1633;font-size:14.5px}" +
    ".nic-menu a,.nic-menu button{display:block;width:100%;text-align:left;padding:9px 10px;border-radius:9px;font:600 14px/1.2 'Segoe UI',system-ui,sans-serif;color:#0c1633;text-decoration:none;background:none;border:0;cursor:pointer}" +
    ".nic-menu a:hover,.nic-menu button:hover{background:#f1f4fd;color:#1f3fae}" +
    ".nic-menu .out{color:#b42318}" +
    "@media (max-width:1060px){.nic-user .nic-nm{display:none}.nic-user>button{padding:4px}}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var original = null; // contenu d'origine du lien « Mon compte »

  function rendre() {
    var s = lireSession();
    var acct = document.querySelector(".acct, .nic-user");
    var mob = document.querySelector(".m-acct a");
    if (!acct) {
      // pages sans lien « Mon compte » (mentions légales, 404) : on l'ajoute dans l'en-tête
      var hw = document.querySelector("header .wrap"); if (!hw) return;
      hw.style.display = "flex"; hw.style.alignItems = "center"; hw.style.justifyContent = "space-between";
      acct = document.createElement("a"); acct.className = "acct"; acct.href = "compte.html";
      acct.style.cssText = "font-weight:700;font-size:14px;text-decoration:none;color:#0f2a78;background:#fff;border:1.5px solid #e2e7f3;padding:7px 14px;border-radius:999px";
      acct.innerHTML = "👤 <span class='acct-t'>" + esc(t("acct")) + "</span>"; hw.appendChild(acct);
    }
    if (!s) {
      if (acct.classList.contains("nic-user") && original) { acct.replaceWith(original); }
      if (mob && mob.dataset.orig) { mob.innerHTML = mob.dataset.orig; }
      return;
    }
    var nom = prenom(s), init = esc(nom.charAt(0));
    var box = document.createElement("div"); box.className = "nic-user";
    box.innerHTML = '<button type="button" aria-haspopup="true" aria-expanded="false"><span class="nic-av">' + init + '</span><span class="nic-nm">' + esc(t("hi")) + " " + esc(nom) + ' ▾</span></button>' +
      '<div class="nic-menu" role="menu"><div class="who"><b>' + esc(nom) + "</b>" + esc(s.user.email || "") + "</div>" +
      '<a role="menuitem" href="compte.html">👤 ' + esc(t("space")) + '</a>' +
      '<a role="menuitem" href="compte.html#formations">🎓 ' + esc(t("forms")) + '</a>' +
      '<a role="menuitem" href="compte.html#logiciels">⬇ ' + esc(t("soft")) + '</a>' +
      '<button role="menuitem" type="button" class="out">↩ ' + esc(t("out")) + "</button></div>";
    if (acct.classList.contains("acct")) { original = acct; acct.replaceWith(box); } else { acct.replaceWith(box); }
    var b = box.querySelector("button");
    b.onclick = function (e) { e.stopPropagation(); var o = box.classList.toggle("open"); b.setAttribute("aria-expanded", o); };
    box.querySelector(".out").onclick = deconnexion;
    if (mob) { if (!mob.dataset.orig) mob.dataset.orig = mob.innerHTML; mob.textContent = "👤 " + t("hi") + " " + nom; }
  }
  document.addEventListener("click", function () { var u = document.querySelector(".nic-user.open"); if (u) u.classList.remove("open"); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { var u = document.querySelector(".nic-user.open"); if (u) u.classList.remove("open"); } });

  // Bibliothèque Supabase chargée seulement si quelqu'un est connecté (garde le site léger)
  var client = null;
  function charger(cb) {
    if (client) return cb(client);
    function go() { client = window.supabase.createClient(URL, ANON, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false } }); cb(client); }
    if (window.supabase) return go();
    var sc = document.createElement("script"); sc.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"; sc.onload = go; document.head.appendChild(sc);
  }
  function deconnexion() {
    charger(function (c) {
      c.auth.signOut().catch(function () {}).then(function () {
        try { localStorage.removeItem(KEY_STORE); } catch (e) {}
        rendre();
      });
    });
  }

  rendre();
  // Garde la session à jour (renouvellement automatique du jeton) sans ralentir l'affichage
  if (lireSession()) {
    var idle = window.requestIdleCallback || function (f) { setTimeout(f, 1500); };
    idle(function () { charger(function (c) { c.auth.getSession().then(function () { rendre(); }); c.auth.onAuthStateChange(function () { setTimeout(rendre, 0); }); }); });
  }
  // Connexion / déconnexion dans un autre onglet
  window.addEventListener("storage", function (e) { if (e.key === KEY_STORE) rendre(); });
  // Changement de langue
  new MutationObserver(function () { var u = document.querySelector(".nic-user"); if (u || lireSession()) rendre(); })
    .observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  window.NIC_SESSION = { rendre: rendre, lire: lireSession };
})();
