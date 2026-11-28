/* N.I.C Mada — Partage sur les réseaux sociaux (WhatsApp, Facebook, Telegram, X, LinkedIn, e-mail, lien)
   Utilisation : tout élément avec l'attribut data-share ouvre la fenêtre de partage.
     data-share-url   (facultatif) : lien à partager, par défaut https://nicmada.com/
     data-share-title (facultatif) : titre
     data-share-text  (facultatif) : message d'accompagnement
   Ou en JavaScript : NicPartage.open({ url, title, text }) */
(function () {
  "use strict";
  if (window.NicPartage) return;

  var TXT = {
    fr: { title: "Partager", sub: "Faites connaître N.I.C Mada à vos proches", copy: "Copier le lien", copied: "✓ Lien copié", more: "Autres applications…", mail: "E-mail", close: "Fermer",
      def: "Découvrez N.I.C Mada à Antsiranana : vente et réparation d'ordinateurs, électricité, maintenance biomédicale, mécanique auto, logiciels et formations." },
    mg: { title: "Hizara", sub: "Ampahafantaro ny N.I.C Mada ny namanao", copy: "Adikao ny rohy", copied: "✓ Voadika ny rohy", more: "Rindrambaiko hafa…", mail: "Mailaka", close: "Hidiana",
      def: "Fantaro ny N.I.C Mada any Antsiranana : fivarotana sy fanamboarana solosaina, herinaratra, fitaovana ara-pahasalamana, mekanika fiara, rindrambaiko ary fiofanana." },
    en: { title: "Share", sub: "Tell your friends about N.I.C Mada", copy: "Copy link", copied: "✓ Link copied", more: "More apps…", mail: "Email", close: "Close",
      def: "Discover N.I.C Mada in Antsiranana: computer sales and repair, electrical work, biomedical maintenance, car mechanics, software and training." }
  };
  function L() { var l = (document.documentElement.lang || "fr").slice(0, 2); return TXT[l] ? l : "fr"; }
  function t(k) { return TXT[L()][k]; }
  function enc(s) { return encodeURIComponent(s); }

  var ICO = {
    whatsapp: '<path fill="#fff" d="M12 2.2A9.8 9.8 0 0 0 3.6 17l-1.4 4.9 5-1.3A9.8 9.8 0 1 0 12 2.2z"/><path fill="#25d366" d="M8.4 7.4c.3-.6.6-.6.9-.6h.6c.2 0 .4.1.5.4l.8 1.8c.1.2 0 .5-.1.7l-.6.7c-.1.2-.1.4 0 .6.6 1.1 1.6 2.1 2.8 2.7.2.1.4.1.6 0l.7-.7c.2-.2.5-.2.7-.1l1.8.8c.3.1.4.3.4.5v.6c0 .4-.1.8-.7 1.1-.6.4-1.7.6-3.1.1-2.4-.9-4.3-2.8-5.2-5.2-.5-1.4-.3-2.5.1-3.1z"/>',
    facebook: '<path fill="#fff" d="M14.2 8.2h2.6V4.4h-2.9c-3 0-4.6 1.9-4.6 4.7v2.1H6.8V15h2.5v8h3.9v-8h2.9l.5-3.8h-3.4V9.4c0-.8.3-1.2 1-1.2z"/>',
    telegram: '<path fill="#fff" d="M20.7 4.2 3.2 11c-.9.4-.9 1.5 0 1.8l4.4 1.4 1.7 5.3c.2.7 1 .9 1.5.4l2.5-2.3 4.6 3.4c.6.4 1.3.1 1.5-.6l3-14.3c.2-.9-.6-1.4-1.7-.9zM9.8 14.6l-.5 3.3-1.2-3.9 9-6.3-7.3 6.9z"/>',
    x: '<path fill="#fff" d="M4.5 4h4.3l3.6 5 4.3-5h2.2l-5.5 6.4L19.8 20h-4.3l-3.8-5.4L7 20H4.8l5.9-6.8L4.5 4zm2.6 1.3 9.2 13.4h1.1L8.2 5.3H7.1z"/>',
    linkedin: '<path fill="#fff" d="M5.3 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3.6 9h3.4v11.5H3.6zM9.2 9h3.2v1.6c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.4v6.4h-3.4v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.8H9.2z"/>',
    mail: '<path fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" d="M3.5 6h17v12h-17z"/><path fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" d="m3.5 6.5 8.5 7 8.5-7"/>',
    more: '<circle cx="6" cy="12" r="2" fill="#fff"/><circle cx="12" cy="12" r="2" fill="#fff"/><circle cx="18" cy="12" r="2" fill="#fff"/>'
  };
  var RES = [
    { k: "whatsapp", n: "WhatsApp", c: "#25d366", u: function (d) { return "https://wa.me/?text=" + enc(d.text + "\n" + d.url); } },
    { k: "facebook", n: "Facebook", c: "#1877f2", u: function (d) { return "https://www.facebook.com/sharer/sharer.php?u=" + enc(d.url); } },
    { k: "telegram", n: "Telegram", c: "#229ed9", u: function (d) { return "https://t.me/share/url?url=" + enc(d.url) + "&text=" + enc(d.text); } },
    { k: "x", n: "X", c: "#0f1419", u: function (d) { return "https://twitter.com/intent/tweet?url=" + enc(d.url) + "&text=" + enc(d.text); } },
    { k: "linkedin", n: "LinkedIn", c: "#0a66c2", u: function (d) { return "https://www.linkedin.com/sharing/share-offsite/?url=" + enc(d.url); } },
    { k: "mail", n: null, c: "#55607a", u: function (d) { return "mailto:?subject=" + enc(d.title) + "&body=" + enc(d.text + "\n\n" + d.url); } }
  ];

  var css = "" +
    ".nps-back{position:fixed;inset:0;z-index:90;background:rgba(10,20,50,.55);display:none;align-items:flex-end;justify-content:center;padding:12px}" +
    ".nps-back.open{display:flex}@media (min-width:600px){.nps-back{align-items:center}}" +
    ".nps{width:min(440px,100%);background:#fff;color:#0c1633;border-radius:20px;box-shadow:0 30px 70px rgba(12,22,51,.4);padding:20px 20px 18px;font-family:'Segoe UI',system-ui,-apple-system,Roboto,Arial,sans-serif;animation:npsIn .2s ease}" +
    "@keyframes npsIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}" +
    ".nps-h{display:flex;align-items:flex-start;gap:12px;margin-bottom:14px}.nps-h b{display:block;font-size:19px;color:#0f2a78}.nps-h small{color:#55607a;font-size:13.5px}" +
    ".nps-x{margin-left:auto;flex:none;width:34px;height:34px;border:0;border-radius:10px;background:#eef1f8;color:#55607a;font-size:20px;cursor:pointer}" +
    ".nps-g{display:grid;grid-template-columns:repeat(4,1fr);gap:12px 8px}" +
    ".nps-g a,.nps-g button{display:flex;flex-direction:column;align-items:center;gap:6px;text-decoration:none;color:#0c1633;font-size:12.5px;font-weight:600;background:none;border:0;cursor:pointer;padding:4px 0;font-family:inherit}" +
    ".nps-g i{width:50px;height:50px;border-radius:50%;display:grid;place-items:center;transition:transform .15s}.nps-g a:hover i,.nps-g button:hover i{transform:scale(1.08)}" +
    ".nps-g svg{width:26px;height:26px}" +
    ".nps-u{display:flex;gap:8px;margin-top:16px}.nps-u input{flex:1;min-width:0;padding:10px 12px;border:1px solid #e2e7f3;border-radius:10px;background:#f7f9fe;color:#55607a;font:inherit;font-size:13.5px;margin:0}" +
    ".nps-u button{flex:none;padding:10px 14px;border:0;border-radius:10px;background:#0f2a78;color:#fff;font-weight:700;cursor:pointer;font:inherit;font-size:13.5px;font-weight:700}" +
    ".nps-u button.ok{background:#14804a}" +
    ".nps-btn{display:inline-flex;align-items:center;gap:8px}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var back, box, last, data;
  function svg(k) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICO[k] + "</svg>"; }
  function build() {
    back = document.createElement("div"); back.className = "nps-back";
    back.innerHTML = '<div class="nps" role="dialog" aria-modal="true" aria-labelledby="nps-t"><div class="nps-h"><div><b id="nps-t"></b><small id="nps-s"></small></div>' +
      '<button type="button" class="nps-x" id="nps-x">×</button></div><div class="nps-g" id="nps-g"></div>' +
      '<div class="nps-u"><input id="nps-url" readonly aria-label="Lien"><button type="button" id="nps-copy"></button></div></div>';
    document.body.appendChild(back);
    box = back.querySelector(".nps");
    back.addEventListener("click", function (e) { if (e.target === back) close(); });
    back.querySelector("#nps-x").onclick = close;
    back.querySelector("#nps-copy").onclick = copy;
    back.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { close(); return; }
      if (e.key !== "Tab") return;
      var f = box.querySelectorAll("a,button,input"), a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    });
  }
  function open(d) {
    if (!back) build();
    d = d || {};
    data = { url: d.url || "https://nicmada.com/", title: d.title || "N.I.C Mada", text: d.text || t("def") };
    last = document.activeElement;
    back.querySelector("#nps-t").textContent = t("title");
    back.querySelector("#nps-s").textContent = d.sub || t("sub");
    back.querySelector("#nps-x").setAttribute("aria-label", t("close"));
    back.querySelector("#nps-url").value = data.url;
    var c = back.querySelector("#nps-copy"); c.textContent = t("copy"); c.className = "";
    var g = back.querySelector("#nps-g");
    g.innerHTML = RES.map(function (r) {
      return '<a href="' + r.u(data).replace(/"/g, "&quot;") + '" target="_blank" rel="noopener" data-k="' + r.k + '"><i style="background:' + r.c + '">' + svg(r.k) + "</i>" + (r.n || t("mail")) + "</a>";
    }).join("") +
      (navigator.share ? '<button type="button" id="nps-more"><i style="background:#1f3fae">' + svg("more") + "</i>" + t("more") + "</button>" : "");
    g.querySelector('[data-k="mail"]').removeAttribute("target");
    var m = g.querySelector("#nps-more");
    if (m) m.onclick = function () { navigator.share({ title: data.title, text: data.text, url: data.url }).then(close, function () {}); };
    back.classList.add("open");
    g.querySelector("a").focus();
  }
  function close() { if (!back) return; back.classList.remove("open"); if (last && last.focus) last.focus(); }
  function copy() {
    var ok = function () { var c = back.querySelector("#nps-copy"); c.textContent = t("copied"); c.className = "ok"; };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(data.url).then(ok, fallback); else fallback();
    function fallback() { var i = back.querySelector("#nps-url"); i.focus(); i.select(); try { document.execCommand("copy"); ok(); } catch (e) {} }
  }

  document.addEventListener("click", function (e) {
    var el = e.target.closest && e.target.closest("[data-share]");
    if (!el) return;
    e.preventDefault();
    open({ url: el.getAttribute("data-share-url") || undefined, title: el.getAttribute("data-share-title") || undefined, text: el.getAttribute("data-share-text") || undefined });
  });

  window.NicPartage = { open: open, close: close };
})();
