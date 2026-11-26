/* Assistant IA de nicmada.com — fenêtre de discussion (aucune clé ici : tout passe par la fonction Supabase) */
(function () {
  "use strict";
  var API = "https://pisjdbpfsxidagjnfxxm.supabase.co/functions/v1/assistant";
  var KEY = "sb_publishable_EaXO2yUXd88X2sjI7MaTEg_IWaOnEml";
  var WA = "https://wa.me/261320236702";

  var TXT = {
    fr: { title: "Assistant N.I.C Mada", status: "En ligne · répond en quelques secondes", hello: "Bonjour 👋 Je suis l'assistant virtuel de N.I.C Mada. Posez-moi vos questions sur nos services, nos ordinateurs ou nos logiciels.", ph: "Écrivez votre message…", send: "Envoyer", open: "Discuter avec notre assistant", close: "Fermer", wa: "Parler à un technicien sur WhatsApp", err: "Désolé, l'assistant est momentanément indisponible. Contactez-nous sur WhatsApp ou au 034 20 367 02.", limit: "Vous avez envoyé beaucoup de messages. Pour continuer, écrivez-nous sur WhatsApp.", note: "Assistant automatique : il peut se tromper. Ne partagez pas d'informations personnelles.", s: ["Mon ordinateur est lent", "Quels logiciels proposez-vous ?", "Je veux un devis", "Comment s'inscrire à une formation ?"] },
    mg: { title: "Mpanampy N.I.C Mada", status: "Mandeha · mamaly ao anatin'ny segondra vitsy", hello: "Manao ahoana 👋 Izaho no mpanampy virtoaly an'ny N.I.C Mada. Mametraha fanontaniana momba ny tolotray, ny solosaina na ny rindranasa.", ph: "Soraty eto ny hafatrao…", send: "Alefa", open: "Hiresaka amin'ny mpanampy", close: "Hidiana", wa: "Hiresaka amin'ny teknisianina amin'ny WhatsApp", err: "Miala tsiny, tsy misy ny mpanampy amin'izao fotoana izao. Antsoy amin'ny WhatsApp na amin'ny 034 20 367 02.", limit: "Betsaka loatra ny hafatra nalefanao. Raha hanohy dia soraty aminay amin'ny WhatsApp.", note: "Mpanampy mandeha ho azy : mety hadiso izy. Aza mizara fampahalalana manokana.", s: ["Miadana ny solosaiko", "Inona avy ny rindranasa atolotrareo ?", "Mila tombana vidiny aho", "Ahoana no hisoratana amin'ny fiofanana ?"] },
    en: { title: "N.I.C Mada Assistant", status: "Online · replies in seconds", hello: "Hello 👋 I'm N.I.C Mada's virtual assistant. Ask me about our services, computers or software.", ph: "Type your message…", send: "Send", open: "Chat with our assistant", close: "Close", wa: "Talk to a technician on WhatsApp", err: "Sorry, the assistant is temporarily unavailable. Contact us on WhatsApp or at +261 34 20 367 02.", limit: "You've sent a lot of messages. To continue, write to us on WhatsApp.", note: "Automated assistant: it can make mistakes. Don't share personal information.", s: ["My computer is slow", "Which software do you offer?", "I'd like a quote", "How do I sign up for a training?"] }
  };
  function L() { var l = (document.documentElement.lang || "fr").slice(0, 2); return TXT[l] ? l : "fr"; }
  function t(k) { return TXT[L()][k]; }

  var css = "" +
    ".nia-btn{position:fixed;right:20px;bottom:20px;z-index:61;width:60px;height:60px;border-radius:50%;border:0;cursor:pointer;display:grid;place-items:center;background:radial-gradient(circle at 30% 25%,#2a52d6,#0f2a78 70%);box-shadow:0 10px 26px rgba(15,42,120,.45),0 0 0 3px rgba(232,176,42,.55);transition:transform .2s}" +
    ".nia-btn:hover{transform:scale(1.08)}.nia-btn svg{width:30px;height:30px}" +
    ".nia-btn::after{content:'';position:absolute;top:4px;right:4px;width:12px;height:12px;border-radius:50%;background:#22c55e;border:2px solid #fff}" +
    ".nia-tip{position:fixed;right:90px;bottom:32px;z-index:61;background:#0f2a78;color:#fff;font:600 14px/1.3 'Segoe UI',system-ui,sans-serif;padding:9px 14px;border-radius:12px 12px 2px 12px;box-shadow:0 8px 22px rgba(15,42,120,.3);cursor:pointer;animation:niaIn .4s ease}" +
    ".nia-panel{position:fixed;right:20px;bottom:20px;z-index:70;width:min(380px,calc(100vw - 24px));height:min(560px,calc(100vh - 120px));display:none;flex-direction:column;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 30px 70px rgba(12,22,51,.35);border:1px solid rgba(31,63,174,.15);font-family:'Segoe UI',system-ui,-apple-system,Roboto,Arial,sans-serif;animation:niaIn .25s ease}" +
    ".nia-panel.open{display:flex}@keyframes niaIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}" +
    ".nia-head{display:flex;align-items:center;gap:12px;padding:14px 16px;color:#fff;background:radial-gradient(400px 160px at 100% 0,rgba(232,176,42,.25),transparent 60%),linear-gradient(135deg,#0a1d57,#0f2a78 60%,#1a3aa0)}" +
    ".nia-av{width:40px;height:40px;border-radius:12px;background:#fff url(img/logo-192.webp) center/80% no-repeat;flex:none;box-shadow:0 0 0 2px rgba(232,176,42,.6)}" +
    ".nia-head b{display:block;font-size:15.5px}.nia-head small{font-size:12px;opacity:.85}.nia-head small::before{content:'';display:inline-block;width:7px;height:7px;border-radius:50%;background:#22c55e;margin-right:6px}" +
    ".nia-x{margin-left:auto;background:rgba(255,255,255,.12);border:0;color:#fff;width:34px;height:34px;border-radius:10px;font-size:20px;cursor:pointer}" +
    ".nia-log{flex:1;overflow-y:auto;padding:16px;background:#f4f7ff;background-image:linear-gradient(rgba(31,63,174,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(31,63,174,.05) 1px,transparent 1px);background-size:28px 28px}" +
    ".nia-m{max-width:85%;padding:10px 13px;border-radius:16px;margin:0 0 10px;font-size:14.5px;line-height:1.5;white-space:pre-wrap;word-wrap:break-word}" +
    ".nia-m a{color:inherit;font-weight:700}" +
    ".nia-bot{background:#fff;color:#0c1633;border:1px solid rgba(31,63,174,.12);border-bottom-left-radius:4px;box-shadow:0 2px 8px rgba(12,22,51,.05)}" +
    ".nia-me{background:linear-gradient(135deg,#1f3fae,#0f2a78);color:#fff;margin-left:auto;border-bottom-right-radius:4px}" +
    ".nia-dots span{display:inline-block;width:7px;height:7px;border-radius:50%;background:#1f3fae;margin:0 2px;animation:niaB 1s infinite}.nia-dots span:nth-child(2){animation-delay:.15s}.nia-dots span:nth-child(3){animation-delay:.3s}@keyframes niaB{0%,80%,100%{opacity:.25}40%{opacity:1}}" +
    ".nia-sug{display:flex;flex-wrap:wrap;gap:6px;margin:4px 0 8px}.nia-sug button{border:1px solid rgba(31,63,174,.25);background:#fff;color:#1f3fae;border-radius:999px;padding:6px 11px;font:600 12.5px/1.2 inherit;cursor:pointer}.nia-sug button:hover{background:#1f3fae;color:#fff}" +
    ".nia-wa{display:flex;align-items:center;justify-content:center;gap:8px;margin:0 12px 8px;padding:8px;border-radius:10px;background:#e9fbef;color:#0f7a3a;font-size:13px;font-weight:700;text-decoration:none}" +
    ".nia-panel form.nia-form{display:flex;gap:8px;padding:10px 12px 6px;margin:0;border:0;border-top:1px solid #e2e7f3;border-radius:0;box-shadow:none;background:#fff;position:static}.nia-panel form.nia-form::before{display:none}" +
    ".nia-panel .nia-form textarea{flex:1;resize:none;height:44px;min-height:0;max-height:110px;padding:11px 13px;border:1px solid rgba(31,63,174,.2);border-radius:12px;font:inherit;font-size:14.5px;background:#f7f9fe;margin:0}" +
    ".nia-panel .nia-form textarea:focus{outline:none;border-color:#1f3fae;background:#fff;box-shadow:0 0 0 3px rgba(31,63,174,.12)}" +
    ".nia-panel .nia-form button{width:44px;height:44px;flex:none;border:0;border-radius:12px;background:#e8b02a;color:#0f2a78;cursor:pointer;display:grid;place-items:center}.nia-panel .nia-form button:disabled{opacity:.5;cursor:default}" +
    ".nia-note{font-size:11px;color:#55607a;text-align:center;padding:0 12px 10px;background:#fff}" +
    "@media (max-width:520px){.nia-panel{right:12px;left:12px;width:auto;bottom:12px;height:calc(100vh - 24px)}.nia-tip{display:none}}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="#e8b02a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M8.5 11h.01M12 11h.01M15.5 11h.01" stroke-width="3"/></svg>';
  var SEND = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3.4 20.4 21 12 3.4 3.6 3.4 10l12 2-12 2z"/></svg>';

  var btn = document.createElement("button"); btn.className = "nia-btn"; btn.innerHTML = ICON; btn.type = "button";
  var tip = document.createElement("div"); tip.className = "nia-tip";
  var panel = document.createElement("div"); panel.className = "nia-panel"; panel.setAttribute("role", "dialog");
  panel.innerHTML = '<div class="nia-head"><div class="nia-av"></div><div><b class="nia-t"></b><small class="nia-s"></small></div><button class="nia-x" type="button">×</button></div>' +
    '<div class="nia-log" aria-live="polite"></div><a class="nia-wa" target="_blank" rel="noopener"></a>' +
    '<form class="nia-form"><textarea rows="1" maxlength="1000"></textarea><button type="submit">' + SEND + '</button></form><div class="nia-note"></div>';
  document.body.appendChild(btn); document.body.appendChild(panel);

  var log = panel.querySelector(".nia-log"), form = panel.querySelector("form"), ta = panel.querySelector("textarea"), sendBtn = form.querySelector("button");
  var hist = []; var busy = false; var started = false;

  function esc(s) { return s.replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function fmt(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
      .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      .replace(/(^|[\s(])(https?:\/\/[^\s<)]+)/g, '$1<a href="$2" target="_blank" rel="noopener">$2</a>')
      .replace(/(^|[\s(])([\w.+-]+@nicmada\.com)/g, '$1<a href="mailto:$2">$2</a>')
      .replace(/^[ \t]*#{1,4}[ \t]+(.+)$/gm, "<b>$1</b>")
      .replace(/^([ \t]*)[-*]\s+/gm, "$1• ")
      .replace(/(^|[\s(«"])\*([^*\s][^*\n]*?)\*(?=[\s.,;:!?)»]|$)/gm, "$1<i>$2</i>");
  }
  function add(text, who) {
    var d = document.createElement("div"); d.className = "nia-m " + (who === "user" ? "nia-me" : "nia-bot");
    d.innerHTML = who === "user" ? esc(text) : fmt(text); log.appendChild(d); log.scrollTop = log.scrollHeight; return d;
  }
  function labels() {
    btn.setAttribute("aria-label", t("open")); btn.title = t("open"); tip.textContent = t("open");
    panel.querySelector(".nia-t").textContent = t("title"); panel.querySelector(".nia-s").textContent = t("status");
    panel.querySelector(".nia-x").setAttribute("aria-label", t("close")); panel.setAttribute("aria-label", t("title"));
    var wa = panel.querySelector(".nia-wa"); wa.href = WA; wa.textContent = "💬 " + t("wa");
    ta.placeholder = t("ph"); sendBtn.setAttribute("aria-label", t("send")); panel.querySelector(".nia-note").textContent = t("note");
  }
  function sugg() {
    var box = document.createElement("div"); box.className = "nia-sug";
    t("s").forEach(function (q) { var b = document.createElement("button"); b.type = "button"; b.textContent = q; b.onclick = function () { box.remove(); ask(q); }; box.appendChild(b); });
    log.appendChild(box);
  }
  function open() {
    tip.remove(); panel.classList.add("open"); btn.style.display = "none"; labels();
    if (!started) { started = true; add(t("hello"), "bot"); sugg(); }
    setTimeout(function () { ta.focus(); }, 50);
  }
  function close() { panel.classList.remove("open"); btn.style.display = ""; }

  function ask(q) {
    q = q.trim(); if (!q || busy) return;
    var s = log.querySelector(".nia-sug"); if (s) s.remove();
    add(q, "user"); hist.push({ role: "user", text: q }); ta.value = ""; ta.style.height = "";
    busy = true; sendBtn.disabled = true;
    var wait = add("", "bot"); wait.innerHTML = '<span class="nia-dots"><span></span><span></span><span></span></span>';
    fetch(API, { method: "POST", headers: { "Content-Type": "application/json", apikey: KEY }, body: JSON.stringify({ messages: hist.slice(-12), lang: L() }) })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, status: r.status, j: j }; }); })
      .then(function (res) {
        if (res.ok && res.j.reply) { wait.innerHTML = fmt(res.j.reply); hist.push({ role: "model", text: res.j.reply }); }
        else { wait.textContent = res.status === 429 ? t("limit") : t("err"); hist.pop(); }
      })
      .catch(function () { wait.textContent = t("err"); hist.pop(); })
      .then(function () { busy = false; sendBtn.disabled = false; log.scrollTop = log.scrollHeight; });
  }

  btn.onclick = open; tip.onclick = open; panel.querySelector(".nia-x").onclick = close;
  form.onsubmit = function (e) { e.preventDefault(); ask(ta.value); };
  ta.addEventListener("keydown", function (e) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); ask(ta.value); } });
  ta.addEventListener("input", function () { ta.style.height = "auto"; ta.style.height = Math.min(ta.scrollHeight, 110) + "px"; });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && panel.classList.contains("open")) close(); });
  document.querySelectorAll(".lang button").forEach(function (b) { b.addEventListener("click", function () { setTimeout(labels, 0); }); });

  labels();
  setTimeout(function () { if (!started) document.body.appendChild(tip); setTimeout(function () { tip.remove(); }, 9000); }, 6000);
})();
