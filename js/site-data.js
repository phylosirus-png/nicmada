/* N.I.C Mada — contenu géré depuis gestion.nicmada.com (boutique, logiciels, annonce).
   Si la base ne répond pas, le site garde le contenu écrit dans la page. */
(function () {
  "use strict";
  var API = "https://pisjdbpfsxidagjnfxxm.supabase.co/rest/v1/";
  var H = { apikey: "sb_publishable_EaXO2yUXd88X2sjI7MaTEg_IWaOnEml" };
  var DATA = { logiciels: null, annonce: null };
  var CLES = { "phylocompta": "p_phylo", "madmed": "p_madmed", "toakantely": "p_toak", "transporteurs diego-suarez": "p_transp" };

  function get(path) {
    var c = new AbortController(); setTimeout(function () { c.abort(); }, 8000);
    return fetch(API + path, { headers: H, signal: c.signal }).then(function (r) { if (!r.ok) throw r.status; return r.json(); });
  }
  function e(t) { var d = document.createElement("div"); d.textContent = t == null ? "" : String(t); return d.innerHTML; }
  function url(u) { return /^https:\/\//.test(u || "") ? e(u) : ""; }
  function lg() { var l = document.documentElement.lang || "fr"; return T[l] ? l : "fr"; }
  function tr(k) { var l = lg(); return (T[l] && T[l][k]) || T.fr[k] || ""; }

  /* ---- Logiciels ---- */
  function renderLogiciels() {
    var rows = DATA.logiciels; if (!rows || !rows.length) return;
    var grid = document.getElementById("soft-grid"); if (!grid) return;
    var l = lg();
    grid.innerHTML = rows.map(function (s) {
      var cle = CLES[(s.nom || "").toLowerCase()];
      var desc = (l === "mg" && s.description_mg) || (l === "en" && s.description_en) || (l !== "fr" && cle && T[l][cle]) || s.description || "";
      var logo = url(s.logo_url);
      var h = '<div class="card soft"><div class="top">' +
        (logo ? '<img class="slogo' + (/googleusercontent/.test(s.logo_url) ? " round" : "") + '" src="' + logo + '" alt="Logo ' + e(s.nom) + '" width="76" height="76" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">' : "") +
        "<h3>" + e(s.nom) + '</h3></div><div class="plat">' + e(s.plateforme || "Windows") + "</div><p>" + e(desc) + "</p>";
      if (url(s.lien_externe)) {
        h += '<a class="btn btn-gold dlbtn" href="' + url(s.lien_externe) + '" rel="noopener">' + e(tr("dl_now")) + "</a>" +
             '<small class="dlsub">' + e(tr("dl_sub")) + "</small>";
      }
      if (url(s.lien_play)) h += '<a class="more" href="' + url(s.lien_play) + '" target="_blank" rel="noopener">' + e(tr("play")) + "</a>";
      if (url(s.lien_info)) h += '<a class="more" href="' + url(s.lien_info) + '" target="_blank" rel="noopener">' + e(tr("dl")) + "</a>";
      return h + "</div>";
    }).join("");
  }

  /* ---- Annonce (bandeau) ---- */
  var cssA = "#annonce{position:relative;z-index:51;font:600 14px/1.4 'Segoe UI',system-ui,sans-serif;text-align:center;padding:9px 44px}" +
    "#annonce.info{background:linear-gradient(90deg,#0a1d57,#1f3fae);color:#fff}" +
    "#annonce.promo{background:linear-gradient(90deg,#e8b02a,#ffd76a);color:#0f2a78}" +
    "#annonce.alerte{background:#b42318;color:#fff}" +
    "#annonce a{color:inherit;font-weight:800}" +
    "#annonce button{position:absolute;right:10px;top:50%;transform:translateY(-50%);background:rgba(255,255,255,.18);border:0;color:inherit;width:28px;height:28px;border-radius:8px;font-size:18px;cursor:pointer}";
  var st = document.createElement("style"); st.textContent = cssA; document.head.appendChild(st);
  function renderAnnonce() {
    var a = DATA.annonce, box = document.getElementById("annonce");
    if (!a) { if (box) box.remove(); return; }
    try { if (sessionStorage.getItem("annonce_fermee") === String(a.id)) return; } catch (x) {}
    if (!box) { box = document.createElement("div"); box.id = "annonce"; box.setAttribute("role", "status"); document.body.insertBefore(box, document.body.firstChild); }
    var l = lg(), txt = (l === "mg" && a.texte_mg) || (l === "en" && a.texte_en) || a.texte_fr;
    box.className = a.style || "info";
    box.innerHTML = (url(a.lien) ? '<a href="' + url(a.lien) + '">' + e(txt) + " →</a>" : e(txt)) + '<button type="button" aria-label="Fermer">×</button>';
    box.querySelector("button").onclick = function () { try { sessionStorage.setItem("annonce_fermee", String(a.id)); } catch (x) {} box.remove(); };
  }

  /* ---- Langue : on redessine aussi ce qui vient de la base ---- */
  var setLangOrig = window.setLang;
  if (typeof setLangOrig === "function") {
    window.setLang = function (l) { setLangOrig(l); renderLogiciels(); renderAnnonce(); };
    document.querySelectorAll(".lang button").forEach(function (b) { b.onclick = function () { window.setLang(b.dataset.lang); }; });
  }

  /* ---- Chargement ---- */
  get("site_produits?select=nom,details,etat,prix,image_url,icone&publie=eq.true&order=ordre.asc,id.desc").then(function (rows) {
    if (typeof PRODUITS === "undefined") return;
    PRODUITS.splice.apply(PRODUITS, [0, PRODUITS.length].concat(rows.map(function (p) {
      return { nom: p.nom, details: p.details, etat: p.etat, prix: p.prix, image: p.image_url, icone: p.icone };
    })));
    renderBoutique(lg());
  }).catch(function () {});

  get("logiciels?select=nom,description,description_mg,description_en,plateforme,lien_externe,logo_url,lien_info,lien_play&actif=eq.true&order=ordre.asc,id.asc")
    .then(function (rows) { DATA.logiciels = rows; renderLogiciels(); }).catch(function () {});

  get("site_annonces?select=id,texte_fr,texte_mg,texte_en,lien,style&order=id.desc&limit=1")
    .then(function (rows) { DATA.annonce = rows[0] || null; renderAnnonce(); }).catch(function () {});
})();
