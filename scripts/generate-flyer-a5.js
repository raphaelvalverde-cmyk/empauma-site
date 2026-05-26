const puppeteer = require('puppeteer');
const QRCode = require('qrcode');
const path = require('path');
const fs = require('fs');

async function generateFlyer() {
  const qr = await QRCode.toDataURL('https://www.empauma-conciergerie.fr', {
    width: 280,
    margin: 2,
    color: { dark: '#3D4F25', light: '#FBF8EF' },
    errorCorrectionLevel: 'H',
  });

  // ─── CSS ─────────────────────────────────────────────────────────────────────
  const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600&family=Jost:wght@400;500;600;700&display=swap');

  :root {
    --olive:   #3D4F25;
    --sage:    #7A8C4E;
    --sage-lt: #9AAA72;
    --sage-pl: #D4DCA8;
    --cream:   #F4EDD8;
    --cream2:  #EDE6D0;
    --cream3:  #FBF8EF;
    --ocre:    #C49A58;
    --ocre2:   #D9B47D;
    --ink:     #1A1A14;
    --ink2:    #111111;   /* was #3A3018 brown → black */
    --ink3:    #1A1A1A;   /* was #5C4A2A brown → near-black */
    --serif: 'Cormorant Garamond', Georgia, serif;
    --sans:  'Jost', Arial, sans-serif;
  }

  * { margin:0; padding:0; box-sizing:border-box; }

  body {
    font-family: var(--serif);
    background: #c8c0b0;
    padding: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* ── PAGE A5 : 148 × 210 mm ── */
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

  /* ── SURLIGNAGES ── */
  .hl-fonce {
    background: #E8A01A;   /* amber foncé — mot-titre */
    padding: 1px 5px;
    border-radius: 3px;
    color: #1A1A1A;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }
  .hl-ocre {
    background: #F5D080;   /* ocre clair */
    padding: 1px 4px;
    border-radius: 3px;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }
  .hl-sage {
    background: #BFDB6A;   /* vert sauge */
    padding: 1px 4px;
    border-radius: 3px;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }

  /* ══════════════ EN-TÊTE COMMUN ══════════════ */
  .hd {
    background: var(--olive);
    padding: 30px 38px 28px;
    text-align: center;
    flex-shrink: 0;
    position: relative;
  }
  .hd::after {
    content: '';
    position: absolute;
    bottom: -1px; left: 0; right: 0;
    height: 24px;
    background: var(--cream);
    clip-path: ellipse(55% 100% at 50% 100%);
  }
  .hd-sm { padding: 22px 38px 20px; }
  .hd-sm::after { height: 18px; }

  .orn { display:flex; align-items:center; justify-content:center; gap:14px; margin-bottom:13px; }
  .orn-line { width:38px; height:0.7px; background:var(--sage); opacity:0.7; }
  .star { font-size:11px; color:var(--sage); letter-spacing:4px; }

  /* RECTO logo */
  .logo-name {
    font-family: var(--serif);
    font-size: 52px;
    font-weight: 400;        /* was 300 */
    letter-spacing: 12px;
    color: var(--cream);
    line-height: 1;
  }
  .logo-rule   { width:170px; height:0.7px; background:var(--sage); margin:12px auto; opacity:0.6; }
  .logo-sub    { font-family:var(--sans); font-size:12px; letter-spacing:6px; color:var(--sage); font-weight:600; } /* was 300 */
  .logo-slogan { font-family:var(--serif); font-style:italic; font-size:15px; font-weight:500; color:var(--ocre); margin-top:9px; letter-spacing:0.4px; } /* was no weight */

  /* VERSO titre */
  .verso-eyebrow { font-family:var(--sans); font-size:10px; letter-spacing:4.5px; text-transform:uppercase; color:var(--sage); font-weight:600; margin-bottom:6px; margin-top:3px; }
  .verso-sub     { font-family:var(--serif); font-size:24px; font-weight:500; color:var(--cream); letter-spacing:1px; } /* was 300 */
  .verso-sub em  { color:var(--ocre); font-weight:600; }

  /* ══════════════ RECTO ══════════════ */

  /* Accroche */
  .accroche {
    text-align: center;
    padding: 24px 38px 0;
    flex-shrink: 0;
  }
  .accroche-title {
    font-family: var(--serif);
    font-size: 30px;
    font-weight: 600;        /* was 400 */
    color: var(--ink2);
    line-height: 1.15;
    white-space: nowrap;
  }
  .accroche-title em { color:var(--sage); font-style:italic; font-weight:600; }
  .accroche-rule { width:52px; height:0.8px; background:var(--ocre); margin:11px auto; }
  .accroche-text {
    font-family: var(--serif);
    font-size: 15px;
    font-weight: 500;        /* was 300/italic light */
    color: var(--ink3);      /* was ink3 brown → now near-black */
    line-height: 1.7;
    font-style: italic;
  }

  /* Stats — 2 cellules */
  .stats {
    display: flex;
    align-items: stretch;
    margin: 16px 38px 0;
    border: 1px solid rgba(122,140,78,0.5);
    border-radius: 5px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .stat-cell { flex:1; background:var(--cream); padding:14px 10px; text-align:center; }
  .stat-sep  { width:1px; background:rgba(122,140,78,0.35); }
  .stat-nb   { font-family:var(--serif); font-size:30px; font-weight:500; color:var(--olive); line-height:1; margin-bottom:5px; } /* was 300 */
  .stat-lb   { font-family:var(--sans); font-size:11px; letter-spacing:1.5px; text-transform:uppercase; color:#2A2A2A; font-weight:600; line-height:1.4; } /* was #8C7A5E brown + no weight */

  /* Tarif 20 % TTC */
  .tarif-block {
    margin: 16px 38px 0;
    background: var(--olive);
    border-radius: 7px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .tarif-ribbon {
    background: var(--ocre);
    text-align: center;
    font-family: var(--sans);
    font-size: 10px;
    font-weight: 700;        /* was 600 */
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--ink);
    padding: 5px 0;
  }
  .tarif-inner {
    display: flex;
    align-items: center;
    padding: 16px 20px;
  }
  .tarif-left { flex:1; text-align:center; }
  .tarif-label {
    font-family: var(--sans);
    font-size: 10px;
    font-weight: 600;        /* was nothing */
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--sage-pl);
    margin-bottom: 5px;
  }
  .tarif-price { line-height:1; margin-bottom:6px; }
  .tarif-pct   { font-family:var(--serif); font-size:62px; font-weight:500; color:var(--cream); } /* was 300 */
  .tarif-ttc   { font-family:var(--sans); font-size:17px; font-weight:700; color:var(--ocre); vertical-align:middle; letter-spacing:1px; }
  .tarif-desc  { font-family:var(--sans); font-size:11px; color:var(--sage-pl); line-height:1.55; font-weight:500; } /* was 300 */

  .tarif-divider { width:1px; background:rgba(244,237,216,0.18); align-self:stretch; margin:0 18px; flex-shrink:0; }

  .tarif-right { flex:1; display:flex; flex-direction:column; gap:8px; }
  .tarif-item  {
    font-family: var(--sans);
    font-size: 12px;
    font-weight: 600;        /* was 300 */
    color: var(--cream);
    display: flex;
    align-items: center;
    gap: 8px;
    line-height: 1.3;
  }
  .chk { color:var(--ocre); font-size:14px; flex-shrink:0; line-height:1; }

  /* Contact + QR */
  .contact-bar {
    margin: 16px 38px 0;
    background: var(--ink);
    border-radius: 7px;
    padding: 16px 18px;
    display: flex;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
  }
  .contact-info { flex:1; }
  .contact-eyebrow { font-family:var(--sans); font-size:10px; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:var(--sage); margin-bottom:7px; }
  .contact-tel   { font-family:var(--serif); font-size:22px; font-weight:600; color:var(--cream); letter-spacing:1px; margin-bottom:4px; } /* was 400 */
  .contact-email { font-family:var(--sans); font-size:12px; font-weight:500; color:var(--ocre); letter-spacing:0.2px; margin-bottom:3px; } /* was no weight */
  .contact-web   { font-family:var(--sans); font-size:11px; font-weight:500; color:#9A9A88; } /* was opacity:0.6 on cream → now grey */
  .contact-sep   { width:1px; height:70px; background:rgba(122,140,78,0.35); flex-shrink:0; }
  .qr-wrap       { display:flex; flex-direction:column; align-items:center; gap:6px; }
  .qr-img        { width:74px; height:74px; border-radius:5px; border:1.5px solid rgba(196,154,88,0.4); display:block; }
  .qr-caption    { font-family:var(--sans); font-size:10px; font-weight:500; color:#8A8A78; text-align:center; line-height:1.4; letter-spacing:0.5px; }

  /* ══════════════ VERSO ══════════════ */
  .verso { background: var(--cream); }

  .section { padding: 16px 38px 0; flex-shrink:0; }
  .section-label {
    font-family: var(--sans);
    font-size: 10px;
    font-weight: 700;        /* was no weight */
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--sage);
    margin-bottom: 12px;
    padding-bottom: 7px;
    border-bottom: 0.6px solid rgba(122,140,78,0.4);
  }

  /* Services */
  .svcs { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
  .svc  {
    display: flex;
    align-items: flex-start;
    gap: 9px;
    background: var(--cream2);
    border-left: 2.5px solid var(--sage);
    border-radius: 0 5px 5px 0;
    padding: 10px 11px;
  }
  .svc-icon {
    width: 24px; height: 24px;
    background: var(--olive);
    border-radius: 5px;
    display: flex; align-items:center; justify-content:center;
    flex-shrink: 0; margin-top: 1px;
  }
  .svc-icon svg { width:13px; height:13px; }
  .svc-title { font-family:var(--sans); font-size:11px; font-weight:700; letter-spacing:0.5px; color:var(--olive); text-transform:uppercase; margin-bottom:3px; line-height:1.2; } /* was 500 */
  .svc-desc  { font-family:var(--serif); font-size:13px; font-weight:500; color:var(--ink3); line-height:1.45; } /* was no weight, was brown */

  /* Étapes */
  .etapes { display:flex; flex-direction:column; }
  .etape  { display:flex; gap:14px; align-items:flex-start; }
  .etape-left { display:flex; flex-direction:column; align-items:center; flex-shrink:0; }
  .etape-nb   {
    width:30px; height:30px;
    border-radius: 50%;
    background: var(--olive);
    color: var(--cream);
    font-family: var(--serif);
    font-size: 16px;
    font-weight: 600;        /* was no weight */
    display: flex; align-items:center; justify-content:center;
    flex-shrink: 0;
  }
  .etape-line { width:1px; background:var(--sage); opacity:0.3; flex:1; min-height:12px; margin-top:4px; }
  .etape-body { padding: 3px 0 12px; }
  .etape-title { font-family:var(--sans); font-size:11px; font-weight:700; letter-spacing:0.8px; text-transform:uppercase; color:var(--olive); margin-bottom:3px; } /* was 500 */
  .etape-desc  { font-family:var(--serif); font-size:13px; font-weight:500; color:var(--ink3); line-height:1.55; font-style:italic; } /* was 300/opacity, was brown */

  /* Footer verso */
  .verso-foot {
    margin-top: auto;
    background: var(--olive);
    padding: 14px 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
  }
  .vf-logo      { font-family:var(--serif); font-size:20px; font-weight:500; letter-spacing:5px; color:var(--cream); } /* was 300 */
  .vf-logo span { font-family:var(--sans); font-size:11px; letter-spacing:3.5px; color:var(--sage); font-weight:600; display:block; margin-top:2px; } /* was 300 */
  .vf-sep       { width:1px; height:32px; background:var(--sage); opacity:0.35; }
  .vf-right     { text-align:right; }
  .vf-tel       { font-family:var(--serif); font-size:17px; font-weight:500; color:var(--cream); letter-spacing:0.5px; margin-bottom:3px; } /* was no weight */
  .vf-web       { font-family:var(--sans); font-size:12px; font-weight:600; color:var(--ocre); letter-spacing:0.3px; } /* was no weight */

  @media print {
    body { background: white; }
    .page { box-shadow: none; }
  }
  `;

  // ─── RECTO ───────────────────────────────────────────────────────────────────
  const recto = `
  <div class="page recto">

    <div class="hd">
      <div class="orn"><div class="orn-line"></div><span class="star">✦</span><div class="orn-line"></div></div>
      <div class="logo-name">EMPAUMA</div>
      <div class="logo-rule"></div>
      <div class="logo-sub">CONCIERGERIE</div>
      <div class="logo-slogan">Votre bien entre de bonnes mains</div>
      <div class="orn" style="margin-top:14px;margin-bottom:0">
        <div class="orn-line"></div><span class="star">✦</span><div class="orn-line"></div>
      </div>
    </div>

    <div class="accroche">
      <div class="accroche-title">Vous louez, <em><span class="hl-fonce">nous gérons tout.</span></em></div>
      <div class="accroche-rule"></div>
      <div class="accroche-text">
        Confiez votre bien à Empauma et profitez de vos revenus <span class="hl-ocre">sans contrainte</span>.<br>
        Un seul interlocuteur, <span class="hl-ocre">zéro frais caché</span>, 100&nbsp;% prise en charge.
      </div>
    </div>

    <div class="stats">
      <div class="stat-cell">
        <div class="stat-nb">100%</div>
        <div class="stat-lb">Prise en charge</div>
      </div>
      <div class="stat-sep"></div>
      <div class="stat-cell">
        <div class="stat-nb">7j/7</div>
        <div class="stat-lb">Disponibilité</div>
      </div>
    </div>

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

  // ─── VERSO ───────────────────────────────────────────────────────────────────
  const verso = `
  <div class="page verso">

    <div class="hd hd-sm">
      <div class="orn"><div class="orn-line"></div><span class="star">✦</span><div class="orn-line"></div></div>
      <div class="verso-eyebrow">Ce que nous faisons pour vous</div>
      <div class="verso-sub">Un service <em>clés en main</em></div>
    </div>

    <div class="section">
      <div class="section-label">✦ Nos prestations</div>
      <div class="svcs">

        <div class="svc">
          <div class="svc-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" stroke-width="2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          </div>
          <div class="svc-body">
            <div class="svc-title">Photos & annonces</div>
            <div class="svc-desc">Clichés pro, textes optimisés, <span class="hl-ocre">multi-plateformes</span></div>
          </div>
        </div>

        <div class="svc">
          <div class="svc-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" stroke-width="2">
              <path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/>
            </svg>
          </div>
          <div class="svc-body">
            <div class="svc-title">Prix dynamiques</div>
            <div class="svc-desc">Tarifs ajustés pour <span class="hl-ocre">maximiser vos revenus</span></div>
          </div>
        </div>

        <div class="svc">
          <div class="svc-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
          </div>
          <div class="svc-body">
            <div class="svc-title">Réservations</div>
            <div class="svc-desc">Calendriers, confirmations et coordination complète</div>
          </div>
        </div>

        <div class="svc">
          <div class="svc-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <div class="svc-body">
            <div class="svc-title">Communication 7j/7</div>
            <div class="svc-desc">Messages personnalisés à chaque étape du séjour</div>
          </div>
        </div>

        <div class="svc">
          <div class="svc-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" stroke-width="2">
              <path d="M3 21v-4a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v4"/>
              <path d="M3 7l9-4 9 4M12 3v10"/>
            </svg>
          </div>
          <div class="svc-body">
            <div class="svc-title">Ménage & linge</div>
            <div class="svc-desc"><span class="hl-sage">Logement impeccable</span> entre chaque séjour</div>
          </div>
        </div>

        <div class="svc">
          <div class="svc-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#F4EDD8" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
          </div>
          <div class="svc-body">
            <div class="svc-title">Conformité légale</div>
            <div class="svc-desc">Déclarations, enregistrement, taxe de séjour</div>
          </div>
        </div>

      </div>
    </div>

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
            <div class="etape-desc">Nous échangeons sur votre bien et vos attentes. Une visite est organisée pour un <span class="hl-ocre">diagnostic complet</span>.</div>
          </div>
        </div>

        <div class="etape">
          <div class="etape-left">
            <div class="etape-nb">2</div>
            <div class="etape-line"></div>
          </div>
          <div class="etape-body">
            <div class="etape-title">Mise en place & lancement</div>
            <div class="etape-desc">Annonces créées, accès connectés installés, <span class="hl-ocre">commercialisation lancée</span>.</div>
          </div>
        </div>

        <div class="etape">
          <div class="etape-left">
            <div class="etape-nb">3</div>
            <div class="etape-line"></div>
          </div>
          <div class="etape-body">
            <div class="etape-title">Gestion au quotidien</div>
            <div class="etape-desc">Réservations, ménage, maintenance — tout est géré. <span class="hl-sage">Vous n'avez rien à faire.</span></div>
          </div>
        </div>

        <div class="etape">
          <div class="etape-left">
            <div class="etape-nb">4</div>
          </div>
          <div class="etape-body">
            <div class="etape-title">Bilan mensuel & optimisation</div>
            <div class="etape-desc">Rapport complet chaque mois, tarifs ajustés pour <span class="hl-ocre">maximiser vos revenus</span> en continu.</div>
          </div>
        </div>

      </div>
    </div>

    <div class="verso-foot">
      <div class="vf-logo">EMPAUMA<span>Conciergerie</span></div>
      <div class="vf-sep"></div>
      <div class="vf-right">
        <div class="vf-tel">06 66 73 85 07</div>
        <div class="vf-web">empauma-conciergerie.fr</div>
      </div>
    </div>

  </div>`;

  // ─── ASSEMBLAGE ──────────────────────────────────────────────────────────────
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

  const htmlPath = path.join(__dirname, '../public/flyer-a5-rv.html');
  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log('✓ HTML → public/flyer-a5-rv.html');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));

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
