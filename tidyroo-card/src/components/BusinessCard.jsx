import React from "react";
import { QRCodeSVG } from "qrcode.react";
import logo from "../assets/logo.jpg";

export default function BusinessCard() {
  const phoneDisplay = "0493 100 989";
  const phoneDial = "+61493100989";
  const email = "info@tidyroo.au";
  const website = "tidyroo.au";
  const websiteUrl = `https://${website}`;

  const handlePrint = () => window.print();

  return (
    <div className="bc-page">
      <style>{css}</style>

      {/* Controls (hidden in print) */}
      <div className="bc-toolbar no-print">
        <button className="bc-btn" onClick={handlePrint}>
          Print cards
        </button>
        <span className="bc-hint">
          Print tips: Scale 100% · Disable headers/footers · Background graphics ON
        </span>
      </div>

      {/* Sheet */}
      <div className="bc-sheet" aria-label="Business card front and back">
        {/* FRONT */}
        <section className="bc-card bc-front" aria-label="Business card front">
          <div className="bc-frontInner">
            <div className="bc-frontTop">
              <div className="bc-logoWrap">
                <img className="bc-logo" src={logo} alt="Tidy Roo Steam Cleaning logo" />
              </div>

              <div className="bc-brand">
                <div className="bc-name">TIDY ROO</div>
                <div className="bc-tag">STEAM CLEANING</div>
              </div>
            </div>

            <div className="bc-frontDivider" />

            <div className="bc-frontInfo">
              <div className="bc-services">
                Carpet / Upholstery / Rugs / Mattress / Tile &amp; Grout
              </div>
              <div className="bc-sub">Melbourne-wide service · Fast call-backs</div>
            </div>

            <div className="bc-frontAccent" aria-hidden="true" />
          </div>
        </section>

        {/* BACK */}
        <section className="bc-card bc-back" aria-label="Business card back">
          <div className="bc-backInner">
            <div className="bc-backStripe" aria-hidden="true" />

            <div className="bc-backHeader">
              <div className="bc-backText">
                <div className="bc-backTitle">Book a clean</div>
                <div className="bc-backSub">Call / text / email anytime</div>
              </div>

              <div className="bc-qrBlock" aria-label="QR code for website">
                <QRCodeSVG
                  value={websiteUrl}
                  size={54}
                  includeMargin={true}
                  level="M"
                />
                <div className="bc-qrCaption">Scan for website</div>
              </div>
            </div>

            <div className="bc-contact" aria-label="Contact details">
              <div className="bc-contactRow">
                <span className="bc-ico" aria-hidden="true">
                  <PhoneIcon />
                </span>
                <a className="bc-link" href={`tel:${phoneDial}`}>
                  {phoneDisplay}
                </a>
              </div>

              <div className="bc-contactRow">
                <span className="bc-ico" aria-hidden="true">
                  <MailIcon />
                </span>
                <a className="bc-link" href={`mailto:${email}`}>
                  {email}
                </a>
              </div>

              <div className="bc-contactRow">
                <span className="bc-ico" aria-hidden="true">
                  <WebIcon />
                </span>
                <a className="bc-link" href={websiteUrl} target="_blank" rel="noreferrer">
                  {website}
                </a>
              </div>
            </div>

            <div className="bc-badges" aria-label="Service badges">
              <div className="bc-badge">Eco products</div>
              <div className="bc-badge">Insured</div>
              <div className="bc-badge">Satisfaction guarantee</div>
            </div>

            <div className="bc-footer">
              <span className="bc-note">ABN: 63 684 849 929</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 2.5h2.7l1 4-2 1.7c1.2 2.2 3 4 5.2 5.2l1.7-2 4 1v2.7c0 1.1-.9 2-2 2A13.1 13.1 0 0 1 4.5 4.5c0-1.1.9-2 2-2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 6.5h15a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z" />
      <path d="m5 8 7 5 7-5" />
    </svg>
  );
}

function WebIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19z" />
      <path d="M2.5 12h19" />
      <path d="M12 2.5c2.6 3 2.6 16 0 19" />
      <path d="M12 2.5c-2.6 3-2.6 16 0 19" />
    </svg>
  );
}

const css = `
  :root{
    --ink:#0b1220;
    --muted: rgba(11,18,32,0.62);
    --paper:#ffffff;

    /* Brand-ish greens (more color but still clean) */
    --g1:#1f6f62;
    --g2:#66b3a6;
    --g3:#e9f6f3;

    --stroke: rgba(15, 23, 42, 0.12);
    --shadow: 0 10px 26px rgba(2, 6, 23, 0.12);
  }

  *{ box-sizing:border-box; }
  body{ margin:0; font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; color:var(--ink); }

  .bc-page{
    min-height:100vh;
    background: linear-gradient(180deg, #f4f6f8 0%, #eef2f5 100%);
    padding: 22px;
  }

  .bc-toolbar{
    display:flex;
    gap:12px;
    align-items:center;
    justify-content:center;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }
  .bc-btn{
    background: linear-gradient(180deg, var(--g2), var(--g1));
    color: white;
    border: none;
    padding: 10px 14px;
    border-radius: 12px;
    font-weight: 800;
    cursor: pointer;
  }
  .bc-btn:active{ transform: translateY(1px); }
  .bc-hint{ color: #334155; font-size: 13px; }

  /* KEY FIX: align cards to top so they look level */
  .bc-sheet{
    display:flex;
    gap: 18px;
    justify-content:center;
    align-items:flex-start;
    flex-wrap: wrap;
  }

  .bc-card{
    width: 3.5in;
    height: 2in;
    background: var(--paper);
    border: 1px solid var(--stroke);
    border-radius: 14px;
    box-shadow: var(--shadow);
    overflow:hidden;
    position: relative;
  }

  /* FRONT */
  .bc-front{
    background:
      radial-gradient(220px 140px at 75% 18%, rgba(102,179,166,0.30), transparent 62%),
      radial-gradient(260px 180px at -10% 120%, rgba(31,111,98,0.18), transparent 65%),
      linear-gradient(135deg, rgba(233,246,243,0.72), rgba(255,255,255,1));
  }

  .bc-frontInner{
    height:100%;
    padding: 12px 14px;
    display:flex;
    flex-direction:column;
    gap: 10px;
    position: relative;
  }

  .bc-frontTop{
    display:flex;
    align-items:center;
    gap: 10px;
  }

  .bc-logo{
    width: 48px;
    height: 48px;
    object-fit: contain; /* IMPORTANT for logos */
    border-radius: 12px;
    background:#fff;
    border: 1px solid rgba(255,255,255,0.8);
    box-shadow: 0 6px 16px rgba(2,6,23,0.10);
    padding: 6px; /* gives breathing room if logo is not square */
  }

  .bc-name{
    font-weight: 900;
    letter-spacing: 0.18em;
    font-size: 16px;
    line-height: 1.1;
  }
  .bc-tag{
    margin-top: 3px;
    font-weight: 800;
    letter-spacing: 0.18em;
    font-size: 9.5px;
    color: var(--muted);
  }

  .bc-frontDivider{
    height: 2px;
    width: 100%;
    background: linear-gradient(90deg, transparent, rgba(31,111,98,0.55), transparent);
    border-radius: 999px;
  }

  .bc-services{
    font-weight: 700;
    font-size: 10px;
    color: rgba(11,18,32,0.86);
  }
  .bc-sub{
    margin-top: 3px;
    font-size: 9.4px;
    color: rgba(11,18,32,0.58);
    font-weight: 650;
  }

  .bc-frontAccent{
    position:absolute;
    right:-28px;
    bottom:-28px;
    width: 120px;
    height: 120px;
    background: radial-gradient(circle at 30% 30%, rgba(31,111,98,0.20), rgba(31,111,98,0.0) 65%);
    transform: rotate(12deg);
    pointer-events:none;
  }

  /* BACK */
  .bc-back{
    background: linear-gradient(180deg, #ffffff, #f6fbfa);
  }

  /* KEY FIX: tighter spacing so website row fits */
  .bc-backInner{
    height:100%;
    padding: 10px 12px;
    display:flex;
    flex-direction:column;
    gap: 8px;
    position: relative;
  }

  .bc-backStripe{
    position:absolute;
    left:0;
    top:0;
    height: 100%;
    width: 8px;
    background: linear-gradient(180deg, var(--g2), var(--g1));
  }

  .bc-backHeader{
    display:flex;
    align-items:flex-start;
    justify-content:space-between;
    gap: 8px;
    padding-bottom: 4px;
    border-bottom: 1px solid rgba(31,111,98,0.18);
    padding-left: 6px;
  }

  .bc-backTitle{
    font-weight: 900;
    font-size: 14px;
    letter-spacing: 0.03em;
    color: var(--g1);
  }
  .bc-backSub{
    margin-top: 2px;
    font-size: 9.5px;
    color: var(--muted);
    font-weight: 650;
  }

  .bc-qrBlock{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap: 4px;
    padding: 3px;
    background: #fff;
    border: 1px solid rgba(15, 23, 42, 0.10);
    border-radius: 10px;
  }
  .bc-qrCaption{
    font-size: 8px;
    color: var(--muted);
    font-weight: 650;
  }

  .bc-contact{
    display:grid;
    gap: 5px;
    padding: 7px 9px;
    background: rgba(31,111,98,0.05);
    border: 1px solid rgba(31,111,98,0.14);
    border-radius: 12px;
    margin-left: 6px;
  }

  .bc-contactRow{
    display:flex;
    align-items:center;
    gap: 8px;
    min-width: 0;
  }

  .bc-ico{
    width: 20px;
    height: 20px;
    display:grid;
    place-items:center;
    background: linear-gradient(180deg, rgba(102,179,166,0.22), rgba(31,111,98,0.12));
    color: var(--g1);
    border-radius: 6px;
    border: 1px solid rgba(31,111,98,0.18);
    flex: 0 0 auto;
  }

  .bc-ico svg{
    width: 12px;
    height: 12px;
    stroke: currentColor;
    stroke-width: 1.6;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* KEY FIX: prevent the website line being clipped */
  .bc-link{
    color: var(--ink);
    text-decoration: none;
    font-weight: 800;
    font-size: 10.6px;
    line-height: 1.15;
    white-space: nowrap;
    overflow: visible;
    display:block;
    min-width: 0;
  }
  .bc-link:hover{ text-decoration: underline; }

  .bc-badges{
    display:flex;
    gap: 6px;
    flex-wrap: wrap;
    margin-left: 6px;
  }
  .bc-badge{
    font-size: 9.2px;
    font-weight: 800;
    color: rgba(11,18,32,0.78);
    background: rgba(31,111,98,0.10);
    border: 1px solid rgba(31,111,98,0.18);
    padding: 4px 8px;
    border-radius: 999px;
  }

  .bc-footer{
    margin-top: auto;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 6px;
  }
  .bc-note{
    font-size: 8.6px;
    color: rgba(11,18,32,0.56);
    font-weight: 750;
  }

  /* PRINT ONLY CARDS */
  @media print {
    body * { visibility: hidden !important; }

    .bc-sheet, .bc-sheet * { visibility: visible !important; }

    .bc-sheet{
      position: absolute;
      left: 0;
      top: 0;
      margin: 0 !important;
      padding: 0 !important;
      gap: 0 !important;
      align-items: flex-start !important;
    }

    .bc-page{
      background: white !important;
      padding: 0 !important;
      margin: 0 !important;
    }

    .no-print{ display:none !important; }

    .bc-card{
      box-shadow: none !important;
      border-radius: 0 !important;
      border: 1px solid #00000020 !important;
      margin: 0.15in !important;
      page-break-inside: avoid;
      break-inside: avoid;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
