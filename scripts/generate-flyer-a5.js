const puppeteer = require('puppeteer');
const QRCode = require('qrcode');
const path = require('path');
const fs = require('fs');

async function generateFlyer() {
  const qr = await QRCode.toDataURL('https://www.empauma-conciergerie.fr', {
    width: 220,
    margin: 2,
    color: { dark: '#3D4F25', light: '#FBF8EF' },
    errorCorrectionLevel: 'H',
  });

  // ─── PAGE RECTO ──────────────────────────────────────────────────────────────
  const recto = `
  <div class="page recto">

    <!-- EN-TÊTE LOGO -->
    <div class="hd">
      <div class="orn"><div class="orn-line"></div><span class="star">✦</span><div class="orn-line"></div></div>
      <div class="logo-name">EMPAUMA</div>
      <div class="logo-rule"></div>
      <div class="logo-sub">CONCIERGERIE</div>
      <div class="logo-slogan">Votre bien entre de bonnes mains</div>
      <div class="orn" style="margin-top:16px"><div class="orn-line"></div><span class="star">✦</span><div class="orn-line"></div></div>
    </div>

    <!-- ACCROCHE -->
    <div class="accroche">
      <div class="accroche-title">Vous louez,<br><em>nous gérons tout.</em></div>
      <div class="accroche-rule"></div>
      <div class="accroche-text">
        Confiez votre bien à Empauma et profitez de vos revenus locatifs sans contrainte.
        De la mise en ligne de votre annonce jusqu'au départ de vos voyageurs,
        nous prenons soin de tout — avec sérieux, discrétion et un seul interlocuteur dédié.
      </div>
    </div>

    <!-- CHIFFRES CLÉS -->
    <div class="stats">
      <div class="stat-cell">
        <div class="stat-nb">1</div>
        <div class="stat-lb">seul inter­locuteur</div>
      </div>
      <div class="stat-sep"></div>
      <div class="stat-cell">
        <div class="stat-nb">100%</div>
        <div class="stat-lb">prise en charge</div>
      </div>
      <div class="stat-sep"></div>
      <div class="stat-cell">
        <div class="stat-nb">7j/7</div>
        <div class="stat-lb">disponibilité</div>
      </div>
    </div>

    <!-- TARIF 20% TTC -->
    <div class="tarif-block">
      <div class="tarif-ribbon">Tout inclus · Gestion complète</div>
      <div class="tarif-inner">
        <div class="tarif-left">
          <div class="tarif-label">Notre commission</div>
          <div class="tarif-price"><span class="tarif-pct">20</span><span class="tarif-ttc">% TTC</span></div>
          <div class="tarif-desc">du CA généré par votre bien<br>Aucun frais fixe · Aucune surprise</div>
        </div>
        <div class="tarif-divider"></div>
        <div class="tarif-right">
          <div class="tarif-item"><span class="chk">✓</span>Transparence totale</div>
          <div class="tarif-item"><span class="chk">✓</span>Aucun frais fixe</div>
          <div class="tarif-item"><span class="chk">✓</span>Un seul contrat</div>
          <div class="tarif-item"><span class="chk">✓</span>Ménage payé par les voyageurs</div>
        </div>
      </div>
    </div>

    <!-- CONTACT + QR -->
    <div class="contact-bar">
      <div class="contact-info">
        <div class="contact-eyebrow">Contactez-nous</div>
        <div class="contact-tel">06 66 73 85 07</div>
        <div class="contact-email">contact@empauma-conciergerie.fr</div>
        <div class="contact-web">www.empauma-conciergerie.fr</div>
      </div>
      <div class="contact-sep"></div>
      <div class="qr-wrap">
        <img src="${qr}" alt="QR Code" class="qr-img">
        <div class="qr-caption">Scanner pour<br>nous découvrir</div>
      </div>
    </div>

  </div>`;

  // ─── PAGE VERSO ──────────────────────────────────────────────────────────────
  const verso = `
  <div class="page verso">

    <!-- EN-TÊTE VERSO -->
    <div class="hd hd-sm">
      <div class="orn"><div class="orn-line"></div><span class="star">✦</span><div class="orn-line"></div></div>
      <div class="verso-title">Ce que nous faisons pour vous</div>
      <div class="verso-sub">Un service <em>clés en main</em></div>
    </div>

    <!-- SERVICES GRID -->
    <div class="section">
      <div class="section-label">✦ Nos prestations</div>
      <div class="svcs">

        <div class="svc">
          <div class="svc-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
          </div>
          <div class="svc-body">
            <div class="svc-title">Photos & annonces</div>
            <div class="svc-desc">Clichés pro, textes optimisés, multi-plateformes</div>
          </div>
        </div>

        <div class="svc">
          <div class="svc-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" stroke-width="2"><path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/></svg>
          </div>
          <div class="svc-body">
            <div class="svc-title">Tarification dynamique</div>
            <div class="svc-desc">Prix ajustés en temps réel selon la demande</div>
          </div>
        </div>

        <div class="svc">
          <div class="svc-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
          </div>
          <div class="svc-body">
            <div class="svc-title">Gestion réservations</div>
            <div class="svc-desc">Calendriers, confirmations et coordination</div>
          </div>
        </div>

        <div class="svc">
          <div class="svc-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <div class="svc-body">
            <div class="svc-title">Communication 7j/7</div>
            <div class="svc-desc">Messages personnalisés à chaque étape</div>
          </div>
        </div>

        <div class="svc">
          <div class="svc-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" stroke-width="2"><path d="M3 21v-4a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v4"/><path d="M3 7l9-4 9 4M12 3v10"/></svg>
          </div>
          <div class="svc-body">
            <div class="svc-title">Ménage & blanchisserie</div>
            <div class="svc-desc">Logement impeccable entre chaque séjour</div>
          </div>
        </div>

        <div class="svc">
          <div class="svc-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          </div>
          <div class="svc-body">
            <div class="svc-title">Conformité légale</div>
            <div class="svc-desc">Déclarations, enregistrement, taxe de séjour</div>
          </div>
        </div>

      </div>
    </div>

    <!-- ÉTAPES -->
    <div class="section">
      <div class="section-label">✦ Comment ça marche</div>
      <div class="etapes">

        <div class="etape">
          <div class="etape-left">
            <div class="etape-nb">1</div>
            <div class="etape-line"></div>
          </div>
          <div class="etape-body">
            <div class="etape-title">Prise de contact & visite</div>
            <div class="etape-desc">Nous échangeons sur votre bien, vos attentes. Une visite est organisée pour un diagnostic complet.</div>
          </div>
        </div>

        <div class="etape">
          <div class="etape-left">
            <div class="etape-nb">2</div>
            <div class="etape-line"></div>
          </div>
          <div class="etape-body">
            <div class="etape-title">Mise en place & lancement</div>
            <div class="etape-desc">Nous créons vos annonces, installons les accès connectés et lançons la commercialisation.</div>
          </div>
        </div>

        <div class="etape">
          <div class="etape-left">
            <div class="etape-nb">3</div>
            <div class="etape-line"></div>
          </div>
          <div class="etape-body">
            <div class="etape-title">Gestion au quotidien</div>
            <div class="etape-desc">Réservations, voyageurs, ménage, maintenance — tout est géré. Vous n'avez rien à faire.</div>
          </div>
        </div>

        <div class="etape">
          <div class="etape-left">
            <div class="etape-nb">4</div>
          </div>
          <div class="etape-body">
            <div class="etape-title">Bilan mensuel & optimisation</div>
            <div class="etape-desc">Rapport complet chaque mois, ajustement des tarifs pour maximiser vos revenus en continu.</div>
          </div>
        </div>

      </div>
    </div>

    <!-- FOOTER VERSO -->
    <div class="verso-foot">
      <div class="vf-logo">EMPAUMA <span>Conciergerie</span></div>
      <div class="vf-sep"></div>
      <div class="vf-right">
        <div class="vf-tel">06 66 73 85 07</div>
        <div class="vf-web">empauma-conciergerie.fr</div>
      </div>
    </div>

  </div>`;

  // ─── CSS COMMUN ──────────────────────────────────────────────────────────────
  const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap');

  :root {
    --olive:   #3D4F25;
    --olive2:  #4F6230;
    --sage:    #7A8C4E;
    --sage-lt: #9AAA72;
    --sage-pl: #D4DCA8;
    --cream:   #F4EDD8;
    --cream2:  #EDE6D0;
    --cream3:  #FBF8EF;
    --ocre:    #C49A58;
    --ocre2:   #D9B47D;
    --ink:     #2E2A1E;
    --ink2:    #3A3018;
    --ink3:    #5C4A2A;
    --serif:   'Cormorant Garamond', Georgia, serif;
    --sans:    'Jost', Arial, sans-serif;
  }

  * { margin:0; padding:0; box-sizing:border-box; }

  body {
    font-family: var(--serif);
    background: #c8c0b0;
    padding: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* ── PAGE A5 ── */
  .page {
    width: 148mm;
    height: 210mm;
    overflow: hidden;
    background: var(--cream);
    display: flex;
    flex-direction: column;
    page-break-after: always;
    position: relative;
  }

  /* ══════════════ EN-TÊTE PARTAGÉ ══════════════ */
  .hd {
    background: var(--olive);
    padding: 28px 34px 26px;
    text-align: center;
    flex-shrink: 0;
    position: relative;
  }
  .hd::after {
    content: '';
    position: absolute;
    bottom: -1px; left: 0; right: 0;
    height: 22px;
    background: var(--cream);
    clip-path: ellipse(55% 100% at 50% 100%);
  }
  .hd-sm { padding: 20px 34px 18px; }
  .hd-sm::after { height: 16px; }

  .orn { display:flex; align-items:center; justify-content:center; gap:12px; margin-bottom:12px; }
  .orn-line { width:32px; height:0.6px; background:var(--sage); opacity:0.7; }
  .star { font-size:9px; color:var(--sage); letter-spacing:3px; }

  .logo-name {
    font-family: var(--serif);
    font-size: 44px;
    font-weight: 300;
    letter-spacing: 11px;
    color: var(--cream);
    line-height: 1;
  }
  .logo-rule { width:160px; height:0.6px; background:var(--sage); margin:10px auto; opacity:0.6; }
  .logo-sub  { font-family:var(--sans); font-size:9.5px; letter-spacing:5.5px; color:var(--sage); font-weight:300; }
  .logo-slogan { font-family:var(--serif); font-style:italic; font-size:12.5px; color:var(--ocre); margin-top:8px; letter-spacing:0.3px; }

  .verso-title { font-family:var(--sans); font-size:8px; letter-spacing:4px; text-transform:uppercase; color:var(--sage); margin-bottom:5px; margin-top:2px; }
  .verso-sub   { font-family:var(--serif); font-size:20px; font-weight:300; color:var(--cream); letter-spacing:1px; }
  .verso-sub em { color:var(--ocre); }

  /* ══════════════ RECTO ══════════════ */
  .recto .accroche {
    text-align: center;
    padding: 22px 34px 0;
    flex-shrink: 0;
  }
  .accroche-title { font-size:26px; font-weight:400; color:var(--ink2); line-height:1.2; }
  .accroche-title em { color:var(--sage); font-style:italic; }
  .accroche-rule { width:48px; height:0.7px; background:var(--ocre); margin:10px auto; }
  .accroche-text { font-size:12px; color:var(--ink3); line-height:1.75; font-style:italic; opacity:0.9; }

  /* Stats */
  .stats {
    display: flex;
    align-items: stretch;
    margin: 14px 34px 0;
    border: 0.8px solid var(--sage);
    border-radius: 4px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .stat-cell { flex:1; background:var(--cream); padding:12px 8px; text-align:center; }
  .stat-sep  { width:0.8px; background:var(--sage); opacity:0.35; }
  .stat-nb   { font-size:26px; font-weight:300; color:var(--olive); line-height:1; margin-bottom:4px; }
  .stat-lb   { font-family:var(--sans); font-size:8px; letter-spacing:1.5px; text-transform:uppercase; color:#8C7A5E; line-height:1.4; }

  /* Tarif */
  .tarif-block {
    margin: 14px 34px 0;
    background: var(--olive);
    border-radius: 6px;
    overflow: hidden;
    flex-shrink: 0;
    position: relative;
  }
  .tarif-ribbon {
    background: var(--ocre);
    text-align: center;
    font-family: var(--sans);
    font-size: 7px;
    font-weight: 600;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--ink);
    padding: 4px 0;
  }
  .tarif-inner {
    display: flex;
    align-items: center;
    padding: 14px 18px;
    gap: 0;
  }
  .tarif-left { flex: 1; text-align:center; }
  .tarif-label { font-family:var(--sans); font-size:7.5px; letter-spacing:2.5px; text-transform:uppercase; color:var(--sage-pl); margin-bottom:4px; }
  .tarif-price { line-height:1; margin-bottom:5px; }
  .tarif-pct   { font-family:var(--serif); font-size:54px; font-weight:300; color:var(--cream); }
  .tarif-ttc   { font-family:var(--sans); font-size:14px; font-weight:600; color:var(--ocre); vertical-align:middle; letter-spacing:1px; }
  .tarif-desc  { font-family:var(--sans); font-size:8px; color:var(--sage-pl); line-height:1.5; font-weight:300; }

  .tarif-divider { width:0.8px; background:rgba(244,237,216,0.2); align-self:stretch; margin:0 16px; }

  .tarif-right { flex:1; display:flex; flex-direction:column; gap:6px; }
  .tarif-item  { font-family:var(--sans); font-size:8.5px; color:var(--cream); display:flex; align-items:center; gap:7px; font-weight:300; }
  .chk { color:var(--ocre); font-size:10px; flex-shrink:0; }

  /* Contact + QR */
  .contact-bar {
    margin: 14px 34px 0;
    background: var(--ink);
    border-radius: 6px;
    padding: 14px 16px;
    display: flex;
    align-items: center;
    gap: 14px;
    flex-shrink: 0;
  }
  .contact-info { flex:1; }
  .contact-eyebrow { font-family:var(--sans); font-size:7px; letter-spacing:3px; text-transform:uppercase; color:var(--sage); margin-bottom:6px; }
  .contact-tel   { font-family:var(--serif); font-size:18px; font-weight:400; color:var(--cream); letter-spacing:1px; margin-bottom:3px; }
  .contact-email { font-family:var(--sans); font-size:9px; color:var(--ocre); letter-spacing:0.2px; margin-bottom:2px; }
  .contact-web   { font-family:var(--sans); font-size:9px; color:var(--cream); opacity:0.6; }
  .contact-sep   { width:0.8px; height:60px; background:rgba(122,140,78,0.35); flex-shrink:0; }
  .qr-wrap       { display:flex; flex-direction:column; align-items:center; gap:5px; }
  .qr-img        { width:62px; height:62px; border-radius:4px; border:1.5px solid rgba(196,154,88,0.4); display:block; }
  .qr-caption    { font-family:var(--sans); font-size:7px; color:rgba(244,237,216,0.55); text-align:center; line-height:1.4; letter-spacing:0.5px; }

  /* ══════════════ VERSO ══════════════ */
  .verso { background: var(--cream); }

  .section { padding: 14px 34px 0; flex-shrink:0; }
  .section-label {
    font-family: var(--sans);
    font-size: 8px;
    letter-spacing: 3.5px;
    text-transform: uppercase;
    color: var(--sage);
    margin-bottom: 10px;
    padding-bottom: 6px;
    border-bottom: 0.5px solid rgba(122,140,78,0.4);
  }

  /* Services */
  .svcs { display:grid; grid-template-columns:1fr 1fr; gap:7px; }
  .svc  { display:flex; align-items:flex-start; gap:8px; background:var(--cream2); border-left:2px solid var(--sage); border-radius:0 4px 4px 0; padding:8px 9px; }
  .svc-icon { width:20px; height:20px; background:var(--olive); border-radius:4px; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px; }
  .svc-icon svg { width:11px; height:11px; }
  .svc-body {}
  .svc-title { font-family:var(--sans); font-size:8.5px; font-weight:500; letter-spacing:0.5px; color:var(--olive); text-transform:uppercase; margin-bottom:2px; }
  .svc-desc  { font-family:var(--serif); font-size:10.5px; color:var(--ink3); line-height:1.45; }

  /* Étapes */
  .etapes { display:flex; flex-direction:column; }
  .etape  { display:flex; gap:14px; align-items:flex-start; }
  .etape-left { display:flex; flex-direction:column; align-items:center; flex-shrink:0; }
  .etape-nb   { width:24px; height:24px; border-radius:50%; background:var(--olive); color:var(--cream); font-family:var(--serif); font-size:13px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
  .etape-line { width:0.8px; background:var(--sage); opacity:0.3; flex:1; min-height:14px; margin-top:3px; }
  .etape-body { padding: 3px 0 10px; }
  .etape-title { font-family:var(--sans); font-size:9px; font-weight:500; letter-spacing:0.8px; text-transform:uppercase; color:var(--olive); margin-bottom:2px; }
  .etape-desc  { font-family:var(--serif); font-size:11px; color:var(--ink3); line-height:1.55; font-style:italic; opacity:0.9; }

  /* Footer verso */
  .verso-foot {
    margin-top: auto;
    background: var(--olive);
    padding: 13px 34px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
  }
  .vf-logo { font-family:var(--serif); font-size:16px; font-weight:300; letter-spacing:4px; color:var(--cream); }
  .vf-logo span { font-family:var(--sans); font-size:9px; letter-spacing:3px; color:var(--sage); font-weight:300; display:block; margin-top:1px; }
  .vf-sep  { width:0.8px; height:28px; background:var(--sage); opacity:0.35; }
  .vf-right { text-align:right; }
  .vf-tel  { font-family:var(--serif); font-size:13px; color:var(--cream); letter-spacing:0.5px; margin-bottom:2px; }
  .vf-web  { font-family:var(--sans); font-size:9px; color:var(--ocre); letter-spacing:0.3px; }

  /* ── PRINT ── */
  @media print {
    body { background: white; }
    .page { box-shadow: none; }
  }
  `;

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<style>${css}</style>
</head>
<body>
${recto}
${verso}
</body>
</html>`;

  // Write HTML preview
  const htmlPath = path.join(__dirname, '../public/flyer-a5-rv.html');
  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log('✓ HTML → public/flyer-a5-rv.html');

  // Generate PDF
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1800));

  const pdfPath = path.join(__dirname, '../public/flyer-a5-rv.pdf');
  await page.pdf({
    path: pdfPath,
    width: '148mm',
    height: '210mm',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();
  console.log('✓ PDF  → public/flyer-a5-rv.pdf');
}

generateFlyer().catch(console.error);
