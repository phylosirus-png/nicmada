/* N.I.C Mada — « Ma boutique » : espace vendeur dans compte.html
   Utilise les objets globaux de compte.html : sb, state, T, t, esc, msg, errText, LANG. */
(function () {
  "use strict";

  /* ---------------- Textes (FR / MG / EN) ---------------- */
  const TT = {
    fr: {
      tab_shop: "🏪 Ma boutique",
      sh_intro_t: "Vendez votre matériel sur nicmada.com",
      sh_intro_p: "Ouvrez gratuitement votre boutique : ordinateurs, pièces, accessoires, imprimantes, réseau, électricité, énergie, matériel médical… Les acheteurs vous contactent directement par WhatsApp ou par téléphone.",
      sh_intro_l1: "Votre identité est vérifiée par N.I.C Mada avant la mise en ligne : cela rassure les acheteurs.",
      sh_intro_l2: "Particulier : CIN (recto et verso) + une photo de vous tenant votre CIN.",
      sh_intro_l3: "Entreprise : en plus, NIF, STAT et registre du commerce (RCS).",
      sh_intro_l4: "Vos pièces restent privées : seul N.I.C Mada peut les consulter, elles ne sont jamais publiées.",
      sh_open: "Ouvrir ma boutique",
      sh_step: "Étape 1 : enregistrez ces informations. Étape 2 : ajoutez vos pièces justificatives, puis envoyez la boutique pour vérification.",
      sh_type: "Vous êtes", sh_part: "Un particulier", sh_ent: "Une entreprise",
      sh_name: "Nom de la boutique", sh_desc: "Présentation (ce que vous vendez, garantie, livraison…)",
      sh_city: "Ville", sh_tel: "Téléphone", sh_wa: "WhatsApp (pour les acheteurs)",
      sh_resp: "Nom complet du responsable (comme sur la CIN)",
      sh_rs: "Raison sociale", sh_nif: "NIF", sh_stat: "STAT", sh_rcs: "RCS (registre du commerce)",
      sh_logo: "Logo ou photo de la boutique (facultatif)",
      sh_docs_t: "Pièces justificatives", sh_docs_p: "Photo nette et lisible (JPG ou PNG) ou PDF, 6 Mo maximum par pièce.",
      doc_cin_recto: "CIN — recto", doc_cin_verso: "CIN — verso", doc_selfie: "Photo de vous tenant votre CIN",
      doc_nif: "Carte ou attestation NIF", doc_stat: "Carte statistique (STAT)", doc_rcs: "Extrait du registre du commerce (RCS)",
      doc_ok: "✓ Reçue", doc_missing: "À fournir", doc_replace: "Remplacer", doc_send: "Envoyer",
      sh_certify: "Je certifie que ces informations et pièces sont exactes et j'accepte les conditions des vendeurs.",
      sh_terms: "Lire les conditions",
      sh_save: "Enregistrer", sh_submit: "Envoyer pour vérification", sh_saved: "✓ Enregistré.",
      sh_submitted: "✓ Boutique envoyée. N.I.C Mada vérifie vos pièces et vous répond ici, en général sous 48 h.",
      st_brouillon: "Brouillon (pas encore envoyée)", st_en_attente: "En cours de vérification", st_validee: "Validée · visible sur le site",
      st_refusee: "Refusée — à corriger", st_suspendue: "Suspendue",
      sh_wait_p: "Vos pièces sont en cours de vérification. Vous pouvez déjà préparer vos produits : ils apparaîtront dès la validation.",
      sh_ok_p: "Votre boutique est en ligne. Ajoutez et mettez à jour vos produits ci-dessous.",
      sh_ref_p: "Votre boutique n'a pas été validée. Motif :", sh_susp_p: "Votre boutique est suspendue et n'est plus visible. Motif :",
      sh_see: "Voir ma boutique ↗", sh_locked: "Les informations légales ne sont plus modifiables après l'envoi. Contactez N.I.C Mada pour toute correction.",
      sh_need_certify: "Cochez la case de certification avant d'envoyer.",
      sh_need_fields: "Complétez les champs obligatoires (nom de la boutique, responsable, téléphone ou WhatsApp ; pour une entreprise : raison sociale, NIF, STAT, RCS).",
      sh_missing: "Pièces manquantes :",
      sh_file_big: "Fichier trop lourd (6 Mo maximum).", sh_file_type: "Format accepté : JPG, PNG, WebP ou PDF.",
      sh_prods: "Mes produits", sh_add: "＋ Ajouter un produit", sh_noprod: "Aucun produit pour l'instant.",
      sh_edit: "Modifier", sh_del: "Supprimer", sh_del_q: "Supprimer ce produit ?", sh_hidden: "Masqué par N.I.C Mada", sh_off: "Non publié",
      pr_name: "Nom du produit", pr_det: "Caractéristiques", pr_cat: "Catégorie", pr_state: "État", pr_price: "Prix (vide = « Prix sur demande »)",
      pr_pub: "Visible sur ma boutique", pr_photos: "Photos (jusqu'à 3)", pr_photo1: "Photo 1 (principale)", pr_photo: "Photo",
      pr_remove: "Retirer", pr_save: "Enregistrer le produit", pr_cancel: "Annuler", pr_limit: "Limite de 60 produits atteinte.",
      cat_ordinateurs: "Ordinateurs", cat_composants: "Composants & pièces", cat_accessoires: "Accessoires & périphériques", cat_imprimantes: "Imprimantes & consommables",
      cat_reseau: "Réseau & Internet", cat_telephonie: "Téléphonie", cat_electricite: "Électricité", cat_energie: "Énergie (groupes, solaire, onduleurs)",
      cat_medical: "Matériel médical", cat_autre: "Autre matériel technique",
      et_neuf: "Neuf", et_comme_neuf: "Comme neuf", et_reco: "Reconditionné", et_bonne_occasion: "Bonne occasion", et_seconde_main: "2ᵉ main"
    },
    mg: {
      tab_shop: "🏪 Ny fivarotako",
      sh_intro_t: "Amidio eto amin'ny nicmada.com ny fitaovanao",
      sh_intro_p: "Sokafy maimaim-poana ny fivarotanao : solosaina, singa, kojakoja, mpanonta, tambajotra, herinaratra, angovo, fitaovana ara-pahasalamana… Mifandray mivantana aminao amin'ny WhatsApp na antso ny mpividy.",
      sh_intro_l1: "Hamarinin'ny N.I.C Mada aloha ny mombamomba anao vao aseho : mampatoky ny mpividy izany.",
      sh_intro_l2: "Olon-tsotra : CIN (aloha sy aoriana) + sarinao mitazona ny CIN-nao.",
      sh_intro_l3: "Orinasa : ampiana NIF, STAT ary RCS.",
      sh_intro_l4: "Tsiambaratelo ny taratasinao : ny N.I.C Mada ihany no mahita azy, tsy aseho mihitsy.",
      sh_open: "Hanokatra ny fivarotako",
      sh_step: "Dingana 1 : raiketo ireto mombamomba ireto. Dingana 2 : ampidiro ny taratasy fanamarinana, avy eo alefaso hojerena ny fivarotana.",
      sh_type: "Ianao dia", sh_part: "Olon-tsotra", sh_ent: "Orinasa",
      sh_name: "Anaran'ny fivarotana", sh_desc: "Fanazavana (izay amidinao, antoka, fanaterana…)",
      sh_city: "Tanàna", sh_tel: "Finday", sh_wa: "WhatsApp (ho an'ny mpividy)",
      sh_resp: "Anarana feno an'ny tompon'andraikitra (araka ny CIN)",
      sh_rs: "Anaran'ny orinasa", sh_nif: "NIF", sh_stat: "STAT", sh_rcs: "RCS (rejisitry ny varotra)",
      sh_logo: "Logo na sarin'ny fivarotana (tsy voatery)",
      sh_docs_t: "Taratasy fanamarinana", sh_docs_p: "Sary mazava (JPG na PNG) na PDF, 6 Mo farafahabetsany isaky ny taratasy.",
      doc_cin_recto: "CIN — aloha", doc_cin_verso: "CIN — aoriana", doc_selfie: "Sarinao mitazona ny CIN",
      doc_nif: "Karatra na fanamarinana NIF", doc_stat: "Karatra STAT", doc_rcs: "Kopian'ny RCS",
      doc_ok: "✓ Voaray", doc_missing: "Tsy mbola misy", doc_replace: "Ovaina", doc_send: "Alefa",
      sh_certify: "Manamarina aho fa marina ireo mombamomba sy taratasy ireo ary manaiky ny fepetran'ny mpivarotra.",
      sh_terms: "Vakio ny fepetra",
      sh_save: "Raiketina", sh_submit: "Alefa hojerena", sh_saved: "✓ Voaraikitra.",
      sh_submitted: "✓ Lasa ny fivarotanao. Hojeren'ny N.I.C Mada ny taratasinao ary hovaliana eto ianao, matetika ao anatin'ny 48 ora.",
      st_brouillon: "Drafitra (tsy mbola nalefa)", st_en_attente: "Eo am-panamarinana", st_validee: "Ekena · hita ao amin'ny tranonkala",
      st_refusee: "Nolavina — tokony hahitsy", st_suspendue: "Nato",
      sh_wait_p: "Eo am-panamarinana ny taratasinao. Afaka manomana ny entanao ianao : hiseho izy ireo rehefa voamarina.",
      sh_ok_p: "Efa an-tserasera ny fivarotanao. Ampio sy havaozy eto ambany ny entanao.",
      sh_ref_p: "Tsy nekena ny fivarotanao. Antony :", sh_susp_p: "Nato ny fivarotanao ary tsy hita intsony. Antony :",
      sh_see: "Hijery ny fivarotako ↗", sh_locked: "Tsy azo ovaina intsony ny mombamomba ara-dalàna rehefa nalefa. Antsoy ny N.I.C Mada raha misy ahitsy.",
      sh_need_certify: "Kitiho aloha ny fanamarinana vao mandefa.",
      sh_need_fields: "Fenoy ireo saha tsy maintsy misy (anaran'ny fivarotana, tompon'andraikitra, finday na WhatsApp ; ho an'ny orinasa : anarany, NIF, STAT, RCS).",
      sh_missing: "Taratasy tsy ampy :",
      sh_file_big: "Mavesatra loatra ny rakitra (6 Mo farafahabetsany).", sh_file_type: "Endrika ekena : JPG, PNG, WebP na PDF.",
      sh_prods: "Ny entako", sh_add: "＋ Hanampy entana", sh_noprod: "Tsy mbola misy entana.",
      sh_edit: "Ovaina", sh_del: "Fafana", sh_del_q: "Hofafana ity entana ity ?", sh_hidden: "Nafenin'ny N.I.C Mada", sh_off: "Tsy aseho",
      pr_name: "Anaran'ny entana", pr_det: "Toetra", pr_cat: "Sokajy", pr_state: "Toe-javatra", pr_price: "Vidiny (banga = « Anontanio ny vidiny »)",
      pr_pub: "Aseho ao amin'ny fivarotako", pr_photos: "Sary (hatramin'ny 3)", pr_photo1: "Sary 1 (fototra)", pr_photo: "Sary",
      pr_remove: "Esorina", pr_save: "Raiketina ny entana", pr_cancel: "Aoka ihany", pr_limit: "Tratra ny fetra 60 entana.",
      cat_ordinateurs: "Solosaina", cat_composants: "Singa sy pièces", cat_accessoires: "Kojakoja", cat_imprimantes: "Mpanonta sy ranomainty",
      cat_reseau: "Tambajotra sy Internet", cat_telephonie: "Finday", cat_electricite: "Herinaratra", cat_energie: "Angovo (groupe, masoandro, onduleur)",
      cat_medical: "Fitaovana ara-pahasalamana", cat_autre: "Fitaovana teknika hafa",
      et_neuf: "Vaovao", et_comme_neuf: "Toy ny vaovao", et_reco: "Nohavaozina", et_bonne_occasion: "Efa niasa, tsara toetra", et_seconde_main: "Efa niasa"
    },
    en: {
      tab_shop: "🏪 My shop",
      sh_intro_t: "Sell your equipment on nicmada.com",
      sh_intro_p: "Open your shop for free: computers, parts, accessories, printers, networking, electrical, energy, medical equipment… Buyers contact you directly on WhatsApp or by phone.",
      sh_intro_l1: "Your identity is checked by N.I.C Mada before going live: buyers trust verified sellers.",
      sh_intro_l2: "Individual: ID card (front and back) + a photo of you holding your ID card.",
      sh_intro_l3: "Company: in addition, NIF, STAT and trade register (RCS).",
      sh_intro_l4: "Your documents stay private: only N.I.C Mada can see them, they are never published.",
      sh_open: "Open my shop",
      sh_step: "Step 1: save these details. Step 2: upload your supporting documents, then send the shop for verification.",
      sh_type: "You are", sh_part: "An individual", sh_ent: "A company",
      sh_name: "Shop name", sh_desc: "Description (what you sell, warranty, delivery…)",
      sh_city: "City", sh_tel: "Phone", sh_wa: "WhatsApp (for buyers)",
      sh_resp: "Full name of the person in charge (as on the ID card)",
      sh_rs: "Company name", sh_nif: "NIF", sh_stat: "STAT", sh_rcs: "RCS (trade register)",
      sh_logo: "Shop logo or photo (optional)",
      sh_docs_t: "Supporting documents", sh_docs_p: "Clear, readable photo (JPG or PNG) or PDF, 6 MB max per document.",
      doc_cin_recto: "ID card — front", doc_cin_verso: "ID card — back", doc_selfie: "Photo of you holding your ID card",
      doc_nif: "NIF card or certificate", doc_stat: "Statistical card (STAT)", doc_rcs: "Trade register extract (RCS)",
      doc_ok: "✓ Received", doc_missing: "Required", doc_replace: "Replace", doc_send: "Upload",
      sh_certify: "I certify that this information and these documents are accurate and I accept the seller terms.",
      sh_terms: "Read the terms",
      sh_save: "Save", sh_submit: "Send for verification", sh_saved: "✓ Saved.",
      sh_submitted: "✓ Shop sent. N.I.C Mada will check your documents and reply here, usually within 48 h.",
      st_brouillon: "Draft (not sent yet)", st_en_attente: "Being verified", st_validee: "Approved · visible on the site",
      st_refusee: "Rejected — needs correction", st_suspendue: "Suspended",
      sh_wait_p: "Your documents are being checked. You can already prepare your products: they will appear once approved.",
      sh_ok_p: "Your shop is live. Add and update your products below.",
      sh_ref_p: "Your shop was not approved. Reason:", sh_susp_p: "Your shop is suspended and no longer visible. Reason:",
      sh_see: "View my shop ↗", sh_locked: "Legal details can no longer be changed after sending. Contact N.I.C Mada for any correction.",
      sh_need_certify: "Tick the certification box before sending.",
      sh_need_fields: "Fill in the required fields (shop name, person in charge, phone or WhatsApp; for a company: company name, NIF, STAT, RCS).",
      sh_missing: "Missing documents:",
      sh_file_big: "File too large (6 MB max).", sh_file_type: "Accepted formats: JPG, PNG, WebP or PDF.",
      sh_prods: "My products", sh_add: "＋ Add a product", sh_noprod: "No products yet.",
      sh_edit: "Edit", sh_del: "Delete", sh_del_q: "Delete this product?", sh_hidden: "Hidden by N.I.C Mada", sh_off: "Not published",
      pr_name: "Product name", pr_det: "Specifications", pr_cat: "Category", pr_state: "Condition", pr_price: "Price (empty = “Price on request”)",
      pr_pub: "Visible in my shop", pr_photos: "Photos (up to 3)", pr_photo1: "Photo 1 (main)", pr_photo: "Photo",
      pr_remove: "Remove", pr_save: "Save product", pr_cancel: "Cancel", pr_limit: "Limit of 60 products reached.",
      cat_ordinateurs: "Computers", cat_composants: "Components & parts", cat_accessoires: "Accessories & peripherals", cat_imprimantes: "Printers & supplies",
      cat_reseau: "Networking & Internet", cat_telephonie: "Phones", cat_electricite: "Electrical", cat_energie: "Energy (generators, solar, UPS)",
      cat_medical: "Medical equipment", cat_autre: "Other technical equipment",
      et_neuf: "New", et_comme_neuf: "Like new", et_reco: "Refurbished", et_bonne_occasion: "Good condition (used)", et_seconde_main: "Second-hand"
    }
  };
  for (const l in TT) Object.assign(T[l], TT[l]);

  const BUCKET_URL = "https://pisjdbpfsxidagjnfxxm.supabase.co/storage/v1/object/public/vendeurs/";
  const CATS = ["ordinateurs","composants","accessoires","imprimantes","reseau","telephonie","electricite","energie","medical","autre"];
  const ETATS = ["neuf","comme_neuf","reco","bonne_occasion","seconde_main"];
  const DOCS = { particulier: ["cin_recto","cin_verso","selfie"], entreprise: ["cin_recto","cin_verso","selfie","nif","stat","rcs"] };
  const S = { b: null, docs: [], prods: [], open: false, edit: null, loaded: false };
  const $ = id => document.getElementById(id);
  const box = () => $("p-shop");
  const uid = () => state.user && state.user.id;
  const val = id => ($(id) && $(id).value || "").trim();
  const editable = () => !S.b || S.b.statut === "brouillon" || S.b.statut === "refusee";

  /* ---------------- Fichiers ---------------- */
  async function compresser(file, max, type, q){
    const bmp = await createImageBitmap(file);
    const k = Math.min(1, max / Math.max(bmp.width, bmp.height));
    const c = document.createElement("canvas"); c.width = Math.round(bmp.width * k); c.height = Math.round(bmp.height * k);
    c.getContext("2d").drawImage(bmp, 0, 0, c.width, c.height);
    return await new Promise(r => c.toBlob(r, type, q));
  }
  const rnd = () => Date.now() + "-" + Math.random().toString(36).slice(2, 8);
  async function envoyerPublic(file){
    if (!/^image\//.test(file.type)) throw new Error(t("sh_file_type"));
    const blob = await compresser(file, 1000, "image/webp", 0.82);
    const path = `${uid()}/${rnd()}.webp`;
    const { error } = await sb.storage.from("vendeurs").upload(path, blob, { contentType: "image/webp", cacheControl: "31536000" });
    if (error) throw error;
    return BUCKET_URL + path;
  }
  async function retirerPublic(url){
    if (url && url.startsWith(BUCKET_URL)) await sb.storage.from("vendeurs").remove([decodeURIComponent(url.slice(BUCKET_URL.length))]);
  }
  async function envoyerPiece(type, file){
    const pdf = file.type === "application/pdf";
    if (!pdf && !/^image\//.test(file.type)) throw new Error(t("sh_file_type"));
    if (file.size > 12 * 1048576) throw new Error(t("sh_file_big"));
    let blob = file, ext = "pdf", ct = "application/pdf";
    if (!pdf) { blob = await compresser(file, 2000, "image/jpeg", 0.9); ext = "jpg"; ct = "image/jpeg"; }
    if (blob.size > 6 * 1048576) throw new Error(t("sh_file_big"));
    const path = `${uid()}/${type}-${rnd()}.${ext}`;
    const up = await sb.storage.from("kyc").upload(path, blob, { contentType: ct });
    if (up.error) throw up.error;
    const ancien = S.docs.find(d => d.type === type);
    if (ancien) {
      const del = await sb.from("boutique_documents").delete().eq("id", ancien.id);
      if (del.error) { await sb.storage.from("kyc").remove([path]); throw del.error; }
      await sb.storage.from("kyc").remove([ancien.chemin]);
    }
    const ins = await sb.from("boutique_documents").insert({ boutique_id: S.b.id, type, chemin: path }).select("id,type,chemin,cree_le").single();
    if (ins.error) { await sb.storage.from("kyc").remove([path]); throw ins.error; }
    S.docs = S.docs.filter(d => d.type !== type).concat(ins.data);
  }

  /* ---------------- Données ---------------- */
  async function load(){
    if (!uid()) return;
    const r = await sb.from("boutiques").select("*").eq("proprietaire", uid()).maybeSingle();
    if (r.error) { S.loaded = true; render(); return; }
    S.b = r.data; S.docs = []; S.prods = [];
    if (S.b) {
      const [d, p] = await Promise.all([
        sb.from("boutique_documents").select("id,type,chemin,cree_le").eq("boutique_id", S.b.id),
        sb.from("boutique_produits").select("*").eq("boutique_id", S.b.id).order("ordre").order("id", { ascending: false })
      ]);
      S.docs = d.data || []; S.prods = p.data || [];
    }
    S.loaded = true; render();
  }

  function slugify(s){
    const base = (s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 48);
    return base.length >= 2 ? base : "boutique";
  }

  async function enregistrer(){
    const type = (document.querySelector("input[name=sh-type]:checked") || {}).value || (S.b && S.b.type) || "particulier";
    const row = { nom: val("sh-nom"), description: val("sh-desc"), ville: val("sh-ville"), telephone: val("sh-tel"), whatsapp: val("sh-wa") };
    if (editable()) Object.assign(row, { type, responsable: val("sh-resp"), raison_sociale: type === "entreprise" ? val("sh-rs") : "",
      nif: type === "entreprise" ? val("sh-nif") : "", stat: type === "entreprise" ? val("sh-stat") : "", rcs: type === "entreprise" ? val("sh-rcs") : "" });
    if (row.nom.length < 2) throw new Error(t("sh_need_fields"));
    const logo = $("sh-logo") && $("sh-logo").files[0];
    let nouveauLogo = null;
    if (logo) { nouveauLogo = await envoyerPublic(logo); row.logo_url = nouveauLogo; }
    try {
      if (!S.b) {
        let slug = slugify(row.nom), r;
        for (let i = 0; i < 4; i++) {
          r = await sb.from("boutiques").insert(Object.assign({ proprietaire: uid(), slug }, row)).select("*").single();
          if (!r.error || !/slug/.test(r.error.message || "")) break;
          slug = slugify(row.nom).slice(0, 42) + "-" + Math.random().toString(36).slice(2, 6);
        }
        if (r.error) throw r.error;
        S.b = r.data;
      } else {
        const ancienLogo = S.b.logo_url;
        const r = await sb.from("boutiques").update(row).eq("id", S.b.id).select("*").single();
        if (r.error) throw r.error;
        S.b = r.data;
        if (nouveauLogo && ancienLogo) await retirerPublic(ancienLogo);
      }
    } catch (e) { if (nouveauLogo) await retirerPublic(nouveauLogo); throw e; }
  }

  function erreurBoutique(e){
    const m = (e && e.message) || "";
    if (m.startsWith("pieces_manquantes:")) return t("sh_missing") + " " + m.split(":")[1].split(",").map(k => t("doc_" + k)).join(", ") + ".";
    if (m.includes("infos_manquantes")) return t("sh_need_fields");
    if (m.includes("infos_legales_verrouillees")) return t("sh_locked");
    if (m.includes("limite_produits")) return t("pr_limit");
    if (m.includes("exceeded") || m.includes("too large") || m.includes("Payload")) return t("sh_file_big");
    if (m.includes("mime") || m.includes("not supported")) return t("sh_file_type");
    return m && !/^[a-z_]+$/.test(m) ? (typeof errText === "function" ? errText(e) : m) : t("e_generic");
  }

  /* ---------------- Affichage ---------------- */
  const STATUT_PILL = { brouillon: "p-off", en_attente: "p-wait", validee: "p-ok", refusee: "p-full", suspendue: "p-full" };

  function render(){
    const el = box(); if (!el || !state.user) return;
    if (!S.loaded) { el.innerHTML = `<div class="empty">…</div>`; return; }
    const b = S.b;
    if (!b && !S.open) {
      el.innerHTML = `<div class="shop-intro"><h3>${esc(t("sh_intro_t"))}</h3><p>${esc(t("sh_intro_p"))}</p>
        <ul><li>${esc(t("sh_intro_l1"))}</li><li>${esc(t("sh_intro_l2"))}</li><li>${esc(t("sh_intro_l3"))}</li><li>${esc(t("sh_intro_l4"))}</li></ul>
        <button type="button" class="btn btn-gold" id="sh-open">${esc(t("sh_open"))}</button></div>`;
      $("sh-open").onclick = () => { S.open = true; render(); };
      return;
    }
    let h = "";
    if (b) {
      h += `<div class="shop-head"><div><h3>${esc(b.nom)}</h3><span class="pill ${STATUT_PILL[b.statut] || "p-off"}">${esc(t("st_" + b.statut))}</span></div>
        ${b.statut === "validee" ? `<a class="btn btn-line" href="boutiques.html?b=${encodeURIComponent(b.slug)}" target="_blank" rel="noopener">${esc(t("sh_see"))}</a>` : ""}</div>`;
      if (b.statut === "en_attente") h += `<p class="msg info show">${esc(t("sh_wait_p"))}</p>`;
      if (b.statut === "validee") h += `<p class="msg ok show">${esc(t("sh_ok_p"))}</p>`;
      if (b.statut === "refusee") h += `<p class="msg err show">${esc(t("sh_ref_p"))} ${esc(b.motif || "—")}</p>`;
      if (b.statut === "suspendue") h += `<p class="msg err show">${esc(t("sh_susp_p"))} ${esc(b.motif || "—")}</p>`;
    }
    h += `<div id="m-shop" class="msg" role="alert"></div>`;
    if (!b || b.statut !== "suspendue") h += formulaire(b);
    if (b && b.statut !== "suspendue") h += produitsHtml();
    el.innerHTML = h;
    brancher();
  }

  function formulaire(b){
    const ed = editable(), type = b ? b.type : "particulier", dis = ed ? "" : "disabled";
    const v = k => esc(b ? b[k] || "" : "");
    let h = `<form id="f-shop" class="shop-form" novalidate>
      <fieldset class="radios" ${dis}><legend>${esc(t("sh_type"))}</legend>
        <label><input type="radio" name="sh-type" value="particulier" ${type === "particulier" ? "checked" : ""}> ${esc(t("sh_part"))}</label>
        <label><input type="radio" name="sh-type" value="entreprise" ${type === "entreprise" ? "checked" : ""}> ${esc(t("sh_ent"))}</label></fieldset>
      <div class="row2"><div><label for="sh-nom">${esc(t("sh_name"))} *</label><input id="sh-nom" maxlength="80" value="${v("nom")}" required></div>
        <div><label for="sh-resp">${esc(t("sh_resp"))} *</label><input id="sh-resp" maxlength="120" value="${v("responsable")}" ${dis}></div></div>
      <div id="sh-ent" class="${type === "entreprise" ? "" : "hidden"}">
        <div class="row2"><div><label for="sh-rs">${esc(t("sh_rs"))} *</label><input id="sh-rs" maxlength="120" value="${v("raison_sociale")}" ${dis}></div>
          <div><label for="sh-nif">${esc(t("sh_nif"))} *</label><input id="sh-nif" maxlength="40" value="${v("nif")}" ${dis}></div></div>
        <div class="row2"><div><label for="sh-stat">${esc(t("sh_stat"))} *</label><input id="sh-stat" maxlength="40" value="${v("stat")}" ${dis}></div>
          <div><label for="sh-rcs">${esc(t("sh_rcs"))} *</label><input id="sh-rcs" maxlength="60" value="${v("rcs")}" ${dis}></div></div></div>
      ${ed ? "" : `<p class="hint">🔒 ${esc(t("sh_locked"))}</p>`}
      <label for="sh-desc">${esc(t("sh_desc"))}</label><textarea id="sh-desc" maxlength="1000" rows="3">${v("description")}</textarea>
      <div class="row2"><div><label for="sh-wa">${esc(t("sh_wa"))} *</label><input id="sh-wa" type="tel" maxlength="30" value="${v("whatsapp")}"></div>
        <div><label for="sh-tel">${esc(t("sh_tel"))}</label><input id="sh-tel" type="tel" maxlength="30" value="${v("telephone")}"></div></div>
      <div class="row2"><div><label for="sh-ville">${esc(t("sh_city"))}</label><input id="sh-ville" maxlength="80" value="${v("ville")}"></div>
        <div><label for="sh-logo">${esc(t("sh_logo"))}</label>${b && b.logo_url ? `<img class="shop-logo" src="${esc(b.logo_url)}" alt="">` : ""}<input id="sh-logo" type="file" accept="image/*"></div></div>`;
    if (b && ed) {
      const req = DOCS[type];
      h += `<h4 class="shop-sub">${esc(t("sh_docs_t"))}</h4><p class="hint">${esc(t("sh_docs_p"))}</p><div class="docs">` + req.map(k => {
        const d = S.docs.find(x => x.type === k);
        return `<div class="doc"><div><b>${esc(t("doc_" + k))}</b> <span class="pill ${d ? "p-ok" : "p-wait"}">${esc(d ? t("doc_ok") : t("doc_missing"))}</span></div>
          <input type="file" accept="image/*,application/pdf" data-doc="${k}" aria-label="${esc(t("doc_" + k))}"></div>`;
      }).join("") + `</div>
        <label class="check"><input type="checkbox" id="sh-cert"> <span>${esc(t("sh_certify"))} <a href="mentions-legales.html#vendeurs" target="_blank" rel="noopener">${esc(t("sh_terms"))}</a></span></label>`;
    }
    if (!b) h += `<p class="msg info show">${esc(t("sh_step"))}</p>`;
    h += `<div class="acts" style="justify-content:flex-start"><button class="btn btn-blue" type="submit">${esc(t("sh_save"))}</button>
      ${b && ed ? `<button class="btn btn-gold" type="button" id="sh-submit">${esc(t("sh_submit"))}</button>` : ""}</div></form>`;
    return h;
  }

  function produitsHtml(){
    const cat = k => t("cat_" + k), et = k => t("et_" + k);
    return `<h4 class="shop-sub" id="sh-prods">${esc(t("sh_prods"))} <small>(${S.prods.length}/60)</small></h4>
      <div class="acts" style="justify-content:flex-start;margin-bottom:12px"><button type="button" class="btn btn-gold" id="sh-add">${esc(t("sh_add"))}</button></div>
      <div id="sh-pform"></div>
      <div class="list">${S.prods.length ? S.prods.map(p => `
        <div class="item"><div style="display:flex;gap:14px;align-items:center">
            <div class="pthumb">${p.images && p.images[0] ? `<img src="${esc(p.images[0])}" alt="">` : "📦"}</div>
            <div><h3>${esc(p.nom)}</h3><p>${esc(p.details)}</p>
              <div class="meta"><span>${esc(cat(p.categorie))}</span><span>${esc(et(p.etat))}</span><span>${esc(p.prix || t("ask_price"))}</span><span>📷 ${(p.images || []).length}/3</span>
                ${p.masque_admin ? `<span class="pill p-full">${esc(t("sh_hidden"))}</span>` : (p.publie ? "" : `<span class="pill p-off">${esc(t("sh_off"))}</span>`)}</div></div></div>
          <div class="acts"><button type="button" class="btn btn-line" data-pedit="${p.id}">${esc(t("sh_edit"))}</button>
            <button type="button" class="btn btn-line" data-pdel="${p.id}">${esc(t("sh_del"))}</button></div></div>`).join("")
        : `<div class="empty">${esc(t("sh_noprod"))}</div>`}</div>`;
  }

  function formProduit(p){
    p = p || { nom: "", details: "", categorie: "ordinateurs", etat: "neuf", prix: "", images: [], publie: true };
    S.edit = p;
    const imgs = (p.images || []).slice(0, 3);
    $("sh-pform").innerHTML = `<form id="f-prod" class="pform">
      <div class="row2"><div><label for="pr-nom2">${esc(t("pr_name"))} *</label><input id="pr-nom2" maxlength="120" required value="${esc(p.nom)}"></div>
        <div><label for="pr-prix">${esc(t("pr_price"))}</label><input id="pr-prix" maxlength="40" value="${esc(p.prix)}" placeholder="1 350 000 Ar"></div></div>
      <label for="pr-det">${esc(t("pr_det"))}</label><input id="pr-det" maxlength="300" value="${esc(p.details)}" placeholder="Core i5 · 8 Go RAM · SSD 256 Go">
      <div class="row2"><div><label for="pr-cat">${esc(t("pr_cat"))}</label><select id="pr-cat">${CATS.map(k => `<option value="${k}" ${p.categorie === k ? "selected" : ""}>${esc(t("cat_" + k))}</option>`).join("")}</select></div>
        <div><label for="pr-etat">${esc(t("pr_state"))}</label><select id="pr-etat">${ETATS.map(k => `<option value="${k}" ${p.etat === k ? "selected" : ""}>${esc(t("et_" + k))}</option>`).join("")}</select></div></div>
      <label>${esc(t("pr_photos"))}</label>
      <div class="photos3">${[0, 1, 2].map(i => `<div class="ph"><div class="prev" id="pr-img${i}-prev">${imgs[i] ? `<img src="${esc(imgs[i])}" alt="">` : (i ? "＋" : "📷")}</div>
        <small>${esc(i ? t("pr_photo") + " " + (i + 1) : t("pr_photo1"))}</small><input type="file" accept="image/*" id="pr-img${i}">
        ${imgs[i] ? `<label class="check" style="margin:0"><input type="checkbox" id="pr-img${i}-del"> ${esc(t("pr_remove"))}</label>` : ""}</div>`).join("")}</div>
      <label class="check"><input type="checkbox" id="pr-pub" ${p.publie ? "checked" : ""}> ${esc(t("pr_pub"))}</label>
      <div class="acts" style="justify-content:flex-start"><button class="btn btn-blue" type="submit">${esc(t("pr_save"))}</button>
        <button class="btn btn-line" type="button" id="pr-cancel">${esc(t("pr_cancel"))}</button></div></form>`;
    [0, 1, 2].forEach(i => $("pr-img" + i).onchange = e => { const f = e.target.files[0]; if (f) $("pr-img" + i + "-prev").innerHTML = `<img src="${URL.createObjectURL(f)}" alt="">`; });
    $("pr-cancel").onclick = () => { $("sh-pform").innerHTML = ""; S.edit = null; };
    $("f-prod").onsubmit = async e => {
      e.preventDefault(); const f = e.target; busy(f, true);
      const anciennes = (S.edit.images || []).slice(0, 3), images = [], aEffacer = [], envoyees = [];
      try {
        for (let i = 0; i < 3; i++) {
          const file = $("pr-img" + i).files[0], retirer = $("pr-img" + i + "-del") && $("pr-img" + i + "-del").checked, cur = anciennes[i] || "";
          if (file) { const u = await envoyerPublic(file); envoyees.push(u); images.push(u); if (cur) aEffacer.push(cur); }
          else if (retirer) { if (cur) aEffacer.push(cur); }
          else if (cur) images.push(cur);
        }
        const row = { nom: val("pr-nom2"), details: val("pr-det"), categorie: $("pr-cat").value, etat: $("pr-etat").value, prix: val("pr-prix"), publie: $("pr-pub").checked, images };
        if (!row.nom) throw new Error(t("sh_need_fields"));
        const r = S.edit.id ? await sb.from("boutique_produits").update(row).eq("id", S.edit.id)
                            : await sb.from("boutique_produits").insert(Object.assign({ boutique_id: S.b.id }, row));
        if (r.error) throw r.error;
      } catch (err) {
        for (const u of envoyees) await retirerPublic(u);
        busy(f, false); return msg("m-shop", erreurBoutique(err), "err");
      }
      for (const u of aEffacer) await retirerPublic(u);
      S.edit = null; await load(); msg("m-shop", t("sh_saved"), "ok");
    };
    $("sh-pform").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function brancher(){
    const f = $("f-shop");
    if (f) {
      document.querySelectorAll("input[name=sh-type]").forEach(r => r.onchange = () => $("sh-ent").classList.toggle("hidden", r.value !== "entreprise" || !r.checked));
      f.onsubmit = async e => {
        e.preventDefault(); busy(f, true);
        try { await enregistrer(); await load(); msg("m-shop", t("sh_saved"), "ok"); }
        catch (err) { busy(f, false); msg("m-shop", erreurBoutique(err), "err"); }
      };
      document.querySelectorAll("[data-doc]").forEach(inp => inp.onchange = async () => {
        const file = inp.files[0]; if (!file) return;
        inp.disabled = true; msg("m-shop", t("preparing") || "…", "info");
        try { await envoyerPiece(inp.dataset.doc, file); render(); msg("m-shop", t("sh_saved"), "ok"); }
        catch (err) { inp.disabled = false; msg("m-shop", erreurBoutique(err), "err"); }
      });
      const sub = $("sh-submit");
      if (sub) sub.onclick = async () => {
        if (!$("sh-cert").checked) return msg("m-shop", t("sh_need_certify"), "err");
        sub.disabled = true;
        try {
          await enregistrer();
          const { error } = await sb.rpc("soumettre_boutique");
          if (error) throw error;
          await load(); msg("m-shop", t("sh_submitted"), "ok");
        } catch (err) { sub.disabled = false; msg("m-shop", erreurBoutique(err), "err"); }
      };
    }
    const add = $("sh-add"); if (add) add.onclick = () => formProduit(null);
    document.querySelectorAll("[data-pedit]").forEach(b => b.onclick = () => formProduit(S.prods.find(p => String(p.id) === b.dataset.pedit)));
    document.querySelectorAll("[data-pdel]").forEach(b => b.onclick = async () => {
      const p = S.prods.find(x => String(x.id) === b.dataset.pdel); if (!p || !confirm(t("sh_del_q"))) return;
      b.disabled = true;
      const { error } = await sb.from("boutique_produits").delete().eq("id", p.id);
      if (error) { b.disabled = false; return msg("m-shop", erreurBoutique(error), "err"); }
      for (const u of p.images || []) await retirerPublic(u);
      await load();
    });
  }

  window.MB = { load, render, reset(){ S.b = null; S.docs = []; S.prods = []; S.open = false; S.loaded = false; } };
})();
