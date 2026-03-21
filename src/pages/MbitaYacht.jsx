// ─────────────────────────────────────────────────────────────
//  IMAGE IMPORTS — place your photos in src/assets/images/
//  and make sure the filenames match exactly (case-sensitive)
// ─────────────────────────────────────────────────────────────
import heroImg          from '../assets/images/hero.jpg';
import yachtBahariPearl from '../assets/images/yacht-bahari-pearl.jpg';
import yachtPwaniStar   from '../assets/images/yacht-pwani-star.jpg';
import yachtKilindini   from '../assets/images/yacht-kilindini-queen.jpg';
import yachtDhahabu     from '../assets/images/yacht-dhahabu.jpg';
import yachtSimbaDeep   from '../assets/images/yacht-simba-deep.jpg';
import yachtBahariNights from '../assets/images/yacht-bahari-nights.jpg';
import wsKayak          from '../assets/images/ws-kayak.jpg';
import wsRhib           from '../assets/images/ws-rhib.jpg';
import wsJetboard       from '../assets/images/ws-jetboard.jpg';

import { useState, useEffect } from "react";

const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap');
    :root {
      --navy:#0a1628; --navy-mid:#12224a; --navy-light:#1e3a6e;
      --gold:#c9a84c; --gold-light:#e8c97e; --gold-pale:#f5e9cc;
      --white:#ffffff; --off-white:#f8f6f1; --text-muted:#9aaac4;
    }
    *{box-sizing:border-box;margin:0;padding:0;}
    html{scroll-behavior:smooth;}
    body{font-family:'Montserrat',sans-serif;background:var(--navy);color:var(--white);overflow-x:hidden;}

    /* Navbar */
    .navbar{position:fixed;top:0;left:0;right:0;z-index:100;padding:1.5rem 2rem;display:flex;align-items:center;justify-content:space-between;transition:all 0.4s ease;}
    .navbar.solid{background:rgba(10,22,40,0.97);backdrop-filter:blur(16px);padding:1rem 2rem;border-bottom:1px solid rgba(201,168,76,0.15);box-shadow:0 4px 40px rgba(0,0,0,0.4);}
    .nav-logo{font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:600;letter-spacing:0.04em;color:var(--white);display:flex;align-items:center;gap:0.5rem;}
    .nav-logo span{color:var(--gold);}
    .nav-links{display:flex;gap:1.75rem;align-items:center;}
    .nav-links a{font-size:0.72rem;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.8);text-decoration:none;transition:color 0.3s;}
    .nav-links a:hover{color:var(--gold);}
    .nav-cta{background:transparent!important;border:1px solid var(--gold)!important;color:var(--gold)!important;padding:0.5rem 1.25rem;border-radius:2px;}
    .nav-cta:hover{background:var(--gold)!important;color:var(--navy)!important;}
    .hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:4px;}
    .hamburger span{display:block;width:24px;height:2px;background:var(--white);transition:all 0.3s;}
    .mobile-nav{display:none;position:fixed;inset:0;z-index:99;background:rgba(10,22,40,0.98);flex-direction:column;align-items:center;justify-content:center;gap:2rem;}
    .mobile-nav.open{display:flex;}
    .mobile-nav a{font-size:1.5rem;font-family:'Cormorant Garamond',serif;color:var(--white);text-decoration:none;}
    .mobile-nav a:hover{color:var(--gold);}

    /* Hero — background-image is now set via inline style in JSX */
    .hero{position:relative;height:100vh;min-height:600px;display:flex;align-items:center;justify-content:center;overflow:hidden;}
    .hero-bg{position:absolute;inset:0;background-size:cover;background-position:center;animation:slowZoom 20s ease-in-out infinite alternate;}
    @keyframes slowZoom{from{transform:scale(1.05);}to{transform:scale(1.12);}}
    .hero-overlay{position:absolute;inset:0;background:linear-gradient(160deg,rgba(10,22,40,0.85) 0%,rgba(10,22,40,0.6) 50%,rgba(10,22,40,0.85) 100%);}
    .hero-content{position:relative;text-align:center;padding:2rem;max-width:800px;animation:fadeUp 1.2s ease both;}
    @keyframes fadeUp{from{opacity:0;transform:translateY(40px);}to{opacity:1;transform:translateY(0);}}
    .hero-eyebrow{font-size:0.7rem;letter-spacing:0.3em;text-transform:uppercase;color:var(--gold);margin-bottom:1.5rem;display:flex;align-items:center;justify-content:center;gap:1rem;}
    .hero-eyebrow::before,.hero-eyebrow::after{content:'';display:block;width:40px;height:1px;background:var(--gold);}
    .hero-title{font-family:'Cormorant Garamond',serif;font-size:clamp(3rem,7vw,5.5rem);font-weight:300;line-height:1.1;margin-bottom:1.25rem;color:var(--white);}
    .hero-title em{font-style:italic;color:var(--gold-light);}
    .hero-subtitle{font-size:0.9rem;font-weight:300;letter-spacing:0.08em;color:rgba(255,255,255,0.75);margin-bottom:2.5rem;text-transform:uppercase;}
    .hero-scroll{position:absolute;bottom:2.5rem;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:0.5rem;color:rgba(255,255,255,0.5);font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;animation:bounce 2s infinite;}
    .hero-scroll-line{width:1px;height:50px;background:linear-gradient(to bottom,rgba(201,168,76,0.8),transparent);}
    @keyframes bounce{0%,100%{transform:translateX(-50%) translateY(0);}50%{transform:translateX(-50%) translateY(8px);}}

    /* Buttons */
    .btn-primary{display:inline-block;background:var(--gold);color:var(--navy);font-family:'Montserrat',sans-serif;font-size:0.72rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;padding:1rem 2.5rem;border:none;border-radius:2px;cursor:pointer;text-decoration:none;transition:all 0.35s ease;position:relative;overflow:hidden;}
    .btn-primary::after{content:'';position:absolute;inset:0;background:rgba(255,255,255,0.15);transform:translateX(-100%);transition:transform 0.35s ease;}
    .btn-primary:hover::after{transform:translateX(0);}
    .btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(201,168,76,0.4);}
    .btn-outline{display:inline-block;background:transparent;border:1px solid var(--gold);color:var(--gold);font-family:'Montserrat',sans-serif;font-size:0.72rem;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;padding:0.75rem 1.75rem;border-radius:2px;cursor:pointer;text-decoration:none;transition:all 0.3s ease;}
    .btn-outline:hover{background:var(--gold);color:var(--navy);transform:translateY(-1px);}

    /* Stats */
    .stats-bar{background:var(--navy-mid);border-top:1px solid rgba(201,168,76,0.2);border-bottom:1px solid rgba(201,168,76,0.2);padding:2rem;display:grid;grid-template-columns:repeat(4,1fr);text-align:center;gap:1rem;}
    .stat-num{font-family:'Cormorant Garamond',serif;font-size:2.2rem;font-weight:600;color:var(--gold);}
    .stat-label{font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--text-muted);margin-top:0.25rem;}

    /* Section base */
    .section{padding:7rem 2rem;max-width:1100px;margin:0 auto;}
    .section-eyebrow{font-size:0.65rem;letter-spacing:0.25em;text-transform:uppercase;color:var(--gold);margin-bottom:1rem;}
    .section-title{font-family:'Cormorant Garamond',serif;font-size:clamp(2rem,4vw,3rem);font-weight:300;line-height:1.2;color:var(--white);margin-bottom:1rem;}
    .section-subtitle{font-size:0.85rem;color:var(--text-muted);line-height:1.8;max-width:500px;margin-bottom:3rem;}
    .divider{width:50px;height:2px;background:linear-gradient(to right,var(--gold),transparent);margin-bottom:1.5rem;}
    .gold-italic{font-family:'Cormorant Garamond',serif;font-style:italic;color:var(--gold-light);}

    /* About */
    .two-col{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;}
    .services-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;}
    .service-card{background:rgba(255,255,255,0.03);border:1px solid rgba(201,168,76,0.12);border-radius:4px;padding:1.25rem;transition:border-color 0.3s,transform 0.3s;}
    .service-card:hover{border-color:rgba(201,168,76,0.4);transform:translateY(-3px);}

    /* YACHTS */
    .yachts-wrap{background:var(--navy-mid);}
    .yachts-tabs{display:flex;gap:0;border:1px solid rgba(201,168,76,0.2);border-radius:2px;overflow:hidden;margin-bottom:3rem;flex-wrap:wrap;}
    .yacht-tab{flex:1;padding:0.75rem 1rem;background:none;border:none;color:var(--text-muted);font-family:'Montserrat',sans-serif;font-size:0.68rem;letter-spacing:0.12em;text-transform:uppercase;cursor:pointer;border-right:1px solid rgba(201,168,76,0.15);transition:all 0.3s;white-space:nowrap;}
    .yacht-tab:last-child{border-right:none;}
    .yacht-tab.active{background:var(--gold);color:var(--navy);font-weight:700;}
    .yacht-tab:not(.active):hover{background:rgba(201,168,76,0.08);color:var(--gold-light);}
    .yachts-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;}
    .yacht-card{background:rgba(255,255,255,0.03);border:1px solid rgba(201,168,76,0.12);border-radius:4px;overflow:hidden;transition:all 0.35s;cursor:pointer;}
    .yacht-card:hover{border-color:rgba(201,168,76,0.4);transform:translateY(-5px);box-shadow:0 20px 50px rgba(0,0,0,0.4);}
    .yacht-card-img{width:100%;height:200px;object-fit:cover;filter:brightness(0.85) saturate(0.9);transition:filter 0.35s;display:block;}
    .yacht-card:hover .yacht-card-img{filter:brightness(1) saturate(1.1);}
    .yacht-card-body{padding:1.25rem;}
    .yacht-card-name{font-family:'Cormorant Garamond',serif;font-size:1.2rem;color:var(--gold-light);margin-bottom:0.3rem;}
    .yacht-card-type{font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.85rem;}
    .yacht-card-specs{display:flex;gap:0.75rem;flex-wrap:wrap;margin-bottom:0.85rem;}
    .yacht-spec{font-size:0.68rem;color:var(--text-muted);background:rgba(201,168,76,0.08);border:1px solid rgba(201,168,76,0.15);padding:0.2rem 0.55rem;border-radius:2px;}
    .yacht-card-price{font-family:'Cormorant Garamond',serif;font-size:1.1rem;color:var(--gold);}
    .yacht-card-price span{font-family:'Montserrat',sans-serif;font-size:0.65rem;color:var(--text-muted);margin-left:0.25rem;}
    .yacht-addons{margin-top:0.75rem;padding-top:0.75rem;border-top:1px solid rgba(201,168,76,0.1);font-size:0.72rem;color:var(--text-muted);line-height:1.7;}

    /* F&B */
    .fb-wrap{background:var(--navy);}
    .fb-tabs{display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:3rem;}
    .fb-tab{padding:0.6rem 1.25rem;background:rgba(255,255,255,0.04);border:1px solid rgba(201,168,76,0.2);border-radius:2px;color:var(--text-muted);font-size:0.68rem;letter-spacing:0.1em;text-transform:uppercase;cursor:pointer;transition:all 0.3s;}
    .fb-tab.active{background:var(--gold);color:var(--navy);border-color:var(--gold);font-weight:700;}
    .fb-tab:not(.active):hover{border-color:var(--gold);color:var(--gold-light);}
    .fb-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;}
    .fb-card{background:rgba(255,255,255,0.03);border:1px solid rgba(201,168,76,0.12);border-radius:4px;overflow:hidden;transition:all 0.3s;}
    .fb-card:hover{border-color:rgba(201,168,76,0.4);transform:translateY(-4px);box-shadow:0 15px 40px rgba(0,0,0,0.35);}
    .fb-card-header{padding:1.5rem 1.25rem 1rem;border-bottom:1px solid rgba(201,168,76,0.1);position:relative;}
    .fb-card-badge{position:absolute;top:1rem;right:1rem;font-size:0.6rem;letter-spacing:0.1em;text-transform:uppercase;background:rgba(201,168,76,0.15);border:1px solid rgba(201,168,76,0.3);color:var(--gold);padding:0.2rem 0.5rem;border-radius:2px;}
    .fb-card-name{font-family:'Cormorant Garamond',serif;font-size:1.15rem;color:var(--gold-light);margin-bottom:0.25rem;}
    .fb-card-serves{font-size:0.7rem;color:var(--text-muted);letter-spacing:0.08em;}
    .fb-card-price{font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:600;color:var(--gold);margin-top:0.5rem;}
    .fb-card-price small{font-family:'Montserrat',sans-serif;font-size:0.65rem;color:var(--text-muted);margin-left:0.2rem;}
    .fb-card-body{padding:1.25rem;}
    .fb-category{font-size:0.6rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--gold);margin:0.85rem 0 0.4rem;}
    .fb-category:first-child{margin-top:0;}
    .fb-items{list-style:none;}
    .fb-items li{font-size:0.78rem;color:var(--text-muted);padding:0.2rem 0;padding-left:0.9rem;position:relative;line-height:1.5;}
    .fb-items li::before{content:'—';position:absolute;left:0;color:rgba(201,168,76,0.4);font-size:0.65rem;}
    .fb-note{margin-top:1.5rem;padding:1rem 1.25rem;background:rgba(201,168,76,0.06);border:1px solid rgba(201,168,76,0.15);border-radius:2px;font-size:0.75rem;color:var(--text-muted);line-height:1.7;}
    .fb-note strong{color:var(--gold-light);}

    /* WATERSPORTS */
    .ws-wrap{background:var(--navy-mid);}
    .ws-hero-grid{display:grid;grid-template-columns:1.1fr 1fr;gap:3rem;align-items:start;margin-bottom:4rem;}
    .ws-big-card{border-radius:4px;overflow:hidden;position:relative;border:1px solid rgba(201,168,76,0.2);transition:all 0.35s;}
    .ws-big-card:hover{border-color:rgba(201,168,76,0.5);transform:translateY(-4px);box-shadow:0 20px 60px rgba(0,0,0,0.5);}
    .ws-big-img{width:100%;height:300px;object-fit:cover;filter:brightness(0.75) saturate(0.85);transition:filter 0.35s;display:block;}
    .ws-big-card:hover .ws-big-img{filter:brightness(0.9) saturate(1);}
    .ws-big-body{padding:1.5rem;background:rgba(255,255,255,0.03);}
    .ws-big-title{font-family:'Cormorant Garamond',serif;font-size:1.5rem;color:var(--gold-light);margin-bottom:0.4rem;}
    .ws-big-sub{font-size:0.72rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.85rem;}
    .ws-big-desc{font-size:0.82rem;color:rgba(255,255,255,0.7);line-height:1.75;margin-bottom:1rem;}
    .ws-features{list-style:none;display:flex;flex-direction:column;gap:0.45rem;margin-bottom:1.25rem;}
    .ws-features li{font-size:0.78rem;color:var(--text-muted);padding-left:1rem;position:relative;}
    .ws-features li::before{content:'✦';position:absolute;left:0;color:var(--gold);font-size:0.5rem;top:0.2rem;}
    .ws-side-cards{display:flex;flex-direction:column;gap:1.5rem;}
    .ws-side-card{border-radius:4px;overflow:hidden;display:flex;flex-direction:column;border:1px solid rgba(201,168,76,0.15);transition:all 0.3s;}
    .ws-side-card:hover{border-color:rgba(201,168,76,0.4);transform:translateY(-3px);}
    .ws-side-img{width:100%;height:160px;object-fit:cover;filter:brightness(0.75) saturate(0.85);transition:filter 0.3s;display:block;}
    .ws-side-card:hover .ws-side-img{filter:brightness(0.9) saturate(1);}
    .ws-side-body{padding:1.1rem;background:rgba(255,255,255,0.03);flex:1;}
    .ws-side-title{font-family:'Cormorant Garamond',serif;font-size:1.15rem;color:var(--gold-light);margin-bottom:0.25rem;}
    .ws-side-badge{font-size:0.6rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--gold);margin-bottom:0.5rem;display:block;}
    .ws-side-desc{font-size:0.75rem;color:var(--text-muted);line-height:1.65;}
    .ws-extras{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;}
    .ws-extra-card{background:rgba(255,255,255,0.02);border:1px solid rgba(201,168,76,0.1);border-radius:4px;padding:1.25rem;text-align:center;transition:all 0.3s;}
    .ws-extra-card:hover{border-color:rgba(201,168,76,0.35);background:rgba(201,168,76,0.04);}

    /* FAQ */
    .faq-wrap{background:var(--navy);}
    .faq-inner{max-width:800px;margin:0 auto;padding:7rem 2rem;}
    .faq-item{border-bottom:1px solid rgba(201,168,76,0.15);overflow:hidden;}
    .faq-question{width:100%;background:none;border:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;padding:1.5rem 0;gap:1rem;text-align:left;}
    .faq-q-text{font-family:'Cormorant Garamond',serif;font-size:1.15rem;font-weight:400;color:var(--white);transition:color 0.3s;}
    .faq-question:hover .faq-q-text{color:var(--gold-light);}
    .faq-icon{width:28px;height:28px;flex-shrink:0;border:1px solid rgba(201,168,76,0.4);border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--gold);font-size:1rem;transition:all 0.3s;}
    .faq-icon.open{background:var(--gold);color:var(--navy);transform:rotate(45deg);}
    .faq-answer{max-height:0;overflow:hidden;transition:max-height 0.45s cubic-bezier(0.4,0,0.2,1);}
    .faq-answer.open{max-height:300px;}
    .faq-answer-inner{font-size:0.85rem;line-height:1.9;color:var(--text-muted);padding-bottom:1.5rem;}

    /* Contact */
    .contact-wrap{background:var(--navy-mid);}
    .contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:start;}
    .contact-info-item{display:flex;align-items:flex-start;gap:1rem;margin-bottom:1.75rem;}
    .contact-icon{width:40px;height:40px;flex-shrink:0;border:1px solid rgba(201,168,76,0.3);border-radius:2px;display:flex;align-items:center;justify-content:center;color:var(--gold);font-size:1rem;}
    .contact-info-label{font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--gold);margin-bottom:0.25rem;}
    .contact-info-value{font-size:0.9rem;color:rgba(255,255,255,0.85);line-height:1.6;}
    .form-group{margin-bottom:1.25rem;}
    .form-row{display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;}
    .form-label{display:block;font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.5rem;}
    .form-input,.form-textarea{width:100%;background:rgba(255,255,255,0.04);border:1px solid rgba(201,168,76,0.2);border-radius:2px;color:var(--white);font-family:'Montserrat',sans-serif;font-size:0.85rem;padding:0.85rem 1rem;transition:all 0.3s;outline:none;}
    .form-input::placeholder,.form-textarea::placeholder{color:rgba(255,255,255,0.25);}
    .form-input:focus,.form-textarea:focus{border-color:var(--gold);background:rgba(201,168,76,0.05);box-shadow:0 0 0 3px rgba(201,168,76,0.1);}
    .form-input.error,.form-textarea.error{border-color:#e05252;}
    .form-error{font-size:0.7rem;color:#e05252;margin-top:0.35rem;}
    .form-textarea{resize:vertical;min-height:120px;}
    .form-success{background:rgba(201,168,76,0.1);border:1px solid rgba(201,168,76,0.4);border-radius:2px;padding:1rem 1.25rem;font-size:0.85rem;color:var(--gold-light);margin-top:1rem;text-align:center;}
    .map-wrap{border:1px solid rgba(201,168,76,0.15);border-radius:4px;overflow:hidden;margin-top:2rem;}
    .map-wrap iframe{display:block;width:100%;height:220px;border:none;}

    /* Footer */
    footer{background:#060e1c;border-top:1px solid rgba(201,168,76,0.15);padding:3rem 2rem 2rem;}
    .footer-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr;gap:3rem;margin-bottom:2.5rem;}
    .footer-brand-name{font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:600;color:var(--white);margin-bottom:0.75rem;}
    .footer-brand-name span{color:var(--gold);}
    .footer-desc{font-size:0.8rem;color:var(--text-muted);line-height:1.8;max-width:280px;}
    .footer-col-title{font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin-bottom:1.25rem;}
    .footer-links{list-style:none;}
    .footer-links li{margin-bottom:0.7rem;}
    .footer-links a{font-size:0.82rem;color:var(--text-muted);text-decoration:none;transition:color 0.3s;}
    .footer-links a:hover{color:var(--gold-light);}
    .footer-bottom{max-width:1100px;margin:0 auto;border-top:1px solid rgba(255,255,255,0.06);padding-top:1.5rem;display:flex;justify-content:space-between;align-items:center;font-size:0.72rem;color:rgba(255,255,255,0.3);}

    /* WhatsApp */
    .whatsapp-fab{position:fixed;bottom:2rem;right:2rem;z-index:200;width:56px;height:56px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 30px rgba(37,211,102,0.4);cursor:pointer;text-decoration:none;transition:all 0.3s;border:2px solid rgba(255,255,255,0.2);}
    .whatsapp-fab:hover{transform:scale(1.1);box-shadow:0 12px 40px rgba(37,211,102,0.6);}
    .whatsapp-fab svg{width:28px;height:28px;fill:white;}

    /* Reveal */
    .reveal{opacity:0;transform:translateY(30px);transition:opacity 0.7s ease,transform 0.7s ease;}
    .reveal.visible{opacity:1;transform:none;}

    /* Responsive */
    @media(max-width:1000px){.yachts-grid{grid-template-columns:repeat(2,1fr);}.fb-grid{grid-template-columns:repeat(2,1fr);}.ws-hero-grid{grid-template-columns:1fr;}.ws-extras{grid-template-columns:repeat(2,1fr);}}
    @media(max-width:900px){.stats-bar{grid-template-columns:repeat(2,1fr);}.two-col{grid-template-columns:1fr;gap:2.5rem;}.contact-grid{grid-template-columns:1fr;gap:3rem;}.footer-inner{grid-template-columns:1fr 1fr;}.nav-links{display:none;}.hamburger{display:flex;}}
    @media(max-width:640px){.yachts-grid{grid-template-columns:1fr;}.fb-grid{grid-template-columns:1fr;}.ws-extras{grid-template-columns:1fr;}.form-row{grid-template-columns:1fr;}.footer-inner{grid-template-columns:1fr;}.footer-bottom{flex-direction:column;gap:0.5rem;text-align:center;}.yachts-tabs{overflow-x:auto;}.yacht-tab{flex:none;}}
  `}</style>
);

/* ── Data ── */
const faqs = [
  { q:"What is included in the yacht charter?", a:"Our yacht charters include a professional captain and crew, fuel, life jackets, snorkeling gear, and onboard safety equipment. We also provide fresh water, ice, and basic amenities. Premium packages include catered meals, beverages, and custom decoration for special occasions." },
  { q:"What are the booking and payment terms?", a:"A 50% deposit is required to secure your booking date, with the remaining balance due 7 days before your charter. We accept M-Pesa, bank transfer, and major credit cards. Cancellations made 14+ days in advance receive a full refund of the deposit; within 14 days, deposits are non-refundable but can be rescheduled once." },
  { q:"What happens in bad weather?", a:"Guest safety is our top priority. If Kenya Meteorological Department issues a marine advisory or conditions are deemed unsafe by our captain, we will reschedule your charter at no charge or offer a full refund. The final call on safety rests with our experienced captain." },
  { q:"Can I bring food and drinks on board?", a:"Absolutely. You are welcome to bring your own food and beverages. We provide a cooler, ice, and basic kitchen facilities. For a fully catered experience, our team can arrange professional catering at an additional cost. Please note that glass bottles are discouraged for safety reasons." },
  { q:"How many guests can the yacht accommodate?", a:"Our flagship yacht comfortably accommodates up to 20 guests for day charters and 10 guests for overnight trips. We also offer intimate sunset cruises for smaller groups of 2–8 people. Contact us to discuss the perfect configuration for your event." },
  { q:"What destinations can we visit from Mombasa?", a:"From Mombasa's beautiful coastline, we can visit Wasini Island, Kisite-Mpunguti Marine Park for world-class snorkeling and dolphin watching, the pristine Funzi Island, Pemba Channel, and Shimba Hills coastal views. Overnight charters can extend to Zanzibar and beyond." }
];

const YACHT_TYPES = ["All Yachts","Normal Charter","Overnight","Fishing","Couple Cruise"];

// ─────────────────────────────────────────────────────────────
//  YACHT DATA — img fields now use imported local variables
// ─────────────────────────────────────────────────────────────
const yachts = [
  {
    name:"Bahari Pearl", type:"Luxury Flybridge",
    cat:["All Yachts","Normal Charter","Overnight"],
    img: yachtBahariPearl,                               // ← your photo
    pax:"Up to 20", len:"45 ft", hrs:"4 hrs",
    pwd:"KSh 28,000", pwe:"KSh 35,000",
    addons:"BBQ pit rental · City cruise · Water trampoline · Snorkel gear",
    badge:"Most Popular"
  },
  {
    name:"Pwani Star", type:"Sport Cruiser",
    cat:["All Yachts","Normal Charter","Couple Cruise"],
    img: yachtPwaniStar,                                 // ← your photo
    pax:"Up to 12", len:"38 ft", hrs:"4 hrs",
    pwd:"KSh 18,500", pwe:"KSh 24,000",
    addons:"Stand-up paddleboards · Ice pack included · Fishing rod & bait",
    badge:""
  },
  {
    name:"Kilindini Queen", type:"Motor Catamaran",
    cat:["All Yachts","Normal Charter","Overnight"],
    img: yachtKilindini,                                 // ← your photo
    pax:"Up to 25", len:"52 ft", hrs:"4 hrs",
    pwd:"KSh 45,000", pwe:"KSh 56,000",
    addons:"Full galley kitchen · Master cabin · Sea scooter add-on",
    badge:"Premium"
  },
  {
    name:"Dhahabu", type:"Classic Dhow",
    cat:["All Yachts","Couple Cruise"],
    img: yachtDhahabu,                                   // ← your photo
    pax:"Up to 8", len:"35 ft", hrs:"2–4 hrs",
    pwd:"KSh 12,000", pwe:"KSh 16,000",
    addons:"Traditional Swahili dining · Sunset cruise included",
    badge:"Heritage"
  },
  {
    name:"Simba Deep", type:"Fishing Sportfisher",
    cat:["All Yachts","Fishing"],
    img: yachtSimbaDeep,                                 // ← your photo
    pax:"Up to 6", len:"32 ft", hrs:"Full day",
    pwd:"KSh 22,000", pwe:"KSh 27,000",
    addons:"Full deep-sea fishing gear · Bait & tackle · Fish processing",
    badge:"Fishing"
  },
  {
    name:"Bahari Nights", type:"Overnight Cruiser",
    cat:["All Yachts","Overnight"],
    img: yachtBahariNights,                              // ← your photo
    pax:"Up to 10", len:"48 ft", hrs:"Overnight",
    pwd:"KSh 65,000", pwe:"KSh 80,000",
    addons:"3 cabins · Catered meals · Wasini Island route option",
    badge:"Overnight"
  },
];

const FB_CATS = ["All Menus","BBQ (Halal)","BBQ (Vegetarian)","Finger Food","Swahili Cuisine","Alcohol & Drinks"];
const fbMenus = [
  { cat:"BBQ (Halal)", name:"Halal BBQ — Set A", serves:"5 persons", price:"KSh 4,800", badge:"Halal",
    sections:[{t:"Meat & Seafood",i:["Meltique steak 200g × 2","XL Black Tiger Prawns 500g","Mid Chicken Wings 500g","Chicken Cutlets 500g","Chicken Sausages × 3","Half Shell Scallop 500g"]},{t:"Mains",i:["Fried Rice","Fried Noodles"]},{t:"Drinks (1.5L each)",i:["Green Tea","Coke","Mineral Water"]}]},
  { cat:"BBQ (Halal)", name:"Halal BBQ — Seafood Set", serves:"5 persons", price:"KSh 5,500", badge:"Halal",
    sections:[{t:"Seafood & Meat",i:["Salmon 700g","XL Tiger Prawns 500g","Chicken Wings 500g","Sambal Sotong Rings × 5","Scallop with Cheese 400g","Otah (spicy) × 5","Chicken Hot Dog × 10"]},{t:"Mains",i:["Fried Noodles"]},{t:"Drinks (1.5L each)",i:["Coke","Green Tea","Mineral Water"]}]},
  { cat:"BBQ (Vegetarian)", name:"Vegetarian BBQ Set", serves:"5 persons", price:"KSh 3,800", badge:"Veg",
    sections:[{t:"Grilled Items",i:["Mixed veggie skewers","Portobello mushrooms","Corn on the cob × 5","Halloumi slices 300g","Tofu satay × 10"]},{t:"Mains",i:["Fragrant fried rice","Stir-fried noodles"]},{t:"Drinks",i:["Fruit punch 1.5L","Mineral water × 3"]}]},
  { cat:"Finger Food", name:"Premium Finger Food Platter", serves:"10 persons", price:"KSh 6,200", badge:"Popular",
    sections:[{t:"Bites & Canapés",i:["Mini beef sliders × 10","Prawn tempura × 12","Bruschetta assortment × 12","Cheese & crackers board","Chicken satay × 15","Spring rolls × 12"]},{t:"Dips & Sauces",i:["Hummus","Tzatziki","Sweet chilli"]}]},
  { cat:"Swahili Cuisine", name:"Swahili Coastal Feast", serves:"8 persons", price:"KSh 8,500", badge:"Local",
    sections:[{t:"Main Dishes",i:["Grilled whole fish (catch of day)","Prawn pilau","Coconut chicken curry","Kachumbari salad","Chapati × 20"]},{t:"Sides",i:["Coconut rice","Ugali","Sukuma wiki"]},{t:"Dessert",i:["Mango sorbet","Kashata (coconut candy)"]}]},
  { cat:"Alcohol & Drinks", name:"Premium Bar Package", serves:"Per charter", price:"KSh 12,000", badge:"Add-on",
    sections:[{t:"Spirits & Wine",i:["House red & white wine × 2 btl each","Tusker & White Cap × 24 cans","Champagne (upon request)"]},{t:"Soft Drinks",i:["Assorted sodas × 24","Fresh juices × 6 jugs","Mineral water × 24 btl"]},{t:"Bar Setup",i:["Ice (20kg)","Glassware & cups","Garnishes & stirrers"]}]},
];

const wsExtras = [
  { icon:"🤿", title:"Snorkelling Gear", desc:"Full mask, fins & snorkel set for each guest. Includes safety briefing and guide to the best coral spots.", price:"KSh 800/person" },
  { icon:"🎣", title:"Deep Sea Fishing", desc:"Professional rods, bait, tackle box & fish processing. Includes offshore charts and captain guidance.", price:"KSh 1,500/set" },
  { icon:"🏄", title:"Stand-Up Paddleboard", desc:"Premium SUP boards with non-slip deck and full safety gear. Guided paddling routes available.", price:"KSh 1,200/board" },
  { icon:"🌊", title:"Sea Scooter", desc:"Underwater sea scooter for hands-free coral reef exploration. No experience required.", price:"KSh 2,000/unit" },
  { icon:"🛟", title:"Water Trampoline", desc:"Giant inflatable floating trampoline anchored offshore — ideal for families and groups.", price:"KSh 1,800/charter" },
  { icon:"🐬", title:"Dolphin Watch Tour", desc:"Guided route through Kisite-Mpunguti Marine Park for dolphin and whale shark sightings.", price:"KSh 3,500/person" },
];

/* ── Components ── */
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span className="faq-q-text">{q}</span>
        <span className={`faq-icon${open?" open":""}`}>+</span>
      </button>
      <div className={`faq-answer${open?" open":""}`}>
        <p className="faq-answer-inner">{a}</p>
      </div>
    </div>
  );
}

function FormInput({ label, id, type="text", placeholder, value, onChange, error, required }) {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={id}>{label}{required&&" *"}</label>
      <input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange}
        className={`form-input${error?" error":""}`} required={required} />
      {error&&<p className="form-error">{error}</p>}
    </div>
  );
}

function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = [
    { href:"#yachts", label:"Yachts" },
    { href:"#fnb",    label:"F&B" },
    { href:"#watersports", label:"Water Sports" },
    { href:"#faq",    label:"FAQ" },
    { href:"#contact",label:"Book Now", cls:"nav-cta" },
  ];
  return (
    <>
      <nav className={`navbar${solid?" solid":""}`}>
        <div className="nav-logo">⚓ <span>Mbita</span> Yacht</div>
        <div className="nav-links">
          {links.map(l => <a key={l.label} href={l.href} className={l.cls||""}>{l.label}</a>)}
        </div>
        <button className="hamburger" onClick={() => setOpen(v=>!v)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </nav>
      <div className={`mobile-nav${open?" open":""}`}>
        <button onClick={() => setOpen(false)} style={{position:"absolute",top:"1.5rem",right:"1.5rem",background:"none",border:"none",color:"#fff",fontSize:"1.5rem",cursor:"pointer"}}>✕</button>
        {links.map(l => <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
      </div>
    </>
  );
}

function YachtsSection() {
  const [tab, setTab] = useState("All Yachts");
  const list = yachts.filter(y => y.cat.includes(tab));
  return (
    <div className="yachts-wrap" id="yachts">
      <div className="section">
        <div className="reveal">
          <p className="section-eyebrow">Our Fleet</p>
          <div className="divider"/>
          <h2 className="section-title">Choose Your <em className="gold-italic">Yacht</em></h2>
          <p className="section-subtitle">From intimate couple cruises to large party charters — the perfect vessel for every occasion on the Indian Ocean.</p>
        </div>
        <div className="reveal">
          <div className="yachts-tabs">
            {YACHT_TYPES.map(t => (
              <button key={t} className={`yacht-tab${tab===t?" active":""}`} onClick={() => setTab(t)}>{t}</button>
            ))}
          </div>
        </div>
        <div className="yachts-grid reveal">
          {list.map(y => (
            <div key={y.name} className="yacht-card">
              <div style={{position:"relative"}}>
                {/* ── local image ── */}
                <img src={y.img} alt={y.name} className="yacht-card-img"/>
                {y.badge && (
                  <span style={{position:"absolute",top:"0.75rem",left:"0.75rem",fontSize:"0.6rem",letterSpacing:"0.1em",textTransform:"uppercase",background:"var(--gold)",color:"var(--navy)",padding:"0.2rem 0.6rem",borderRadius:"2px",fontWeight:700}}>
                    {y.badge}
                  </span>
                )}
              </div>
              <div className="yacht-card-body">
                <div className="yacht-card-name">{y.name}</div>
                <div className="yacht-card-type">{y.type}</div>
                <div className="yacht-card-specs">
                  <span className="yacht-spec">👥 {y.pax}</span>
                  <span className="yacht-spec">📏 {y.len}</span>
                  <span className="yacht-spec">⏱ {y.hrs}</span>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end"}}>
                  <div>
                    <div style={{fontSize:"0.6rem",letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-muted)",marginBottom:"0.2rem"}}>Weekday from</div>
                    <div className="yacht-card-price">{y.pwd}<span>/ charter</span></div>
                  </div>
                  <div style={{textAlign:"right"}}>
                    <div style={{fontSize:"0.6rem",letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-muted)",marginBottom:"0.2rem"}}>Weekend</div>
                    <div className="yacht-card-price">{y.pwe}<span>/ charter</span></div>
                  </div>
                </div>
                <div className="yacht-addons">
                  <strong style={{color:"var(--gold-light)",fontSize:"0.65rem",letterSpacing:"0.08em",textTransform:"uppercase"}}>Add-ons: </strong>{y.addons}
                </div>
                <div style={{marginTop:"1rem"}}>
                  <a href="#contact" className="btn-outline" style={{width:"100%",textAlign:"center",display:"block"}}>Enquire Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="reveal" style={{textAlign:"center",marginTop:"3rem"}}>
          <p style={{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"1rem"}}>All rates include captain, crew & fuel. F&B and watersports are optional add-ons.</p>
          <a href="#contact" className="btn-primary">Check Availability</a>
        </div>
      </div>
    </div>
  );
}

function FBSection() {
  const [tab, setTab] = useState("All Menus");
  const list = tab === "All Menus" ? fbMenus : fbMenus.filter(m => m.cat === tab);
  return (
    <div className="fb-wrap" id="fnb">
      <div className="section">
        <div className="reveal">
          <p className="section-eyebrow">Food & Beverage</p>
          <div className="divider"/>
          <h2 className="section-title">Onboard <em className="gold-italic">Dining</em></h2>
          <p className="section-subtitle">Elevate your charter with our curated F&B packages. From sizzling halal BBQs to authentic Swahili coastal feasts — delivered fresh to your yacht.</p>
        </div>
        <div className="reveal">
          <div className="fb-tabs">
            {FB_CATS.map(c => (
              <button key={c} className={`fb-tab${tab===c?" active":""}`} onClick={() => setTab(c)}>{c}</button>
            ))}
          </div>
        </div>
        <div className="fb-grid reveal">
          {list.map(m => (
            <div key={m.name} className="fb-card">
              <div className="fb-card-header">
                {m.badge && <span className="fb-card-badge">{m.badge}</span>}
                <div className="fb-card-name">{m.name}</div>
                <div className="fb-card-serves">Serves {m.serves}</div>
                <div className="fb-card-price">{m.price}<small>/ set</small></div>
              </div>
              <div className="fb-card-body">
                {m.sections.map(s => (
                  <div key={s.t}>
                    <div className="fb-category">{s.t}</div>
                    <ul className="fb-items">{s.i.map(i => <li key={i}>{i}</li>)}</ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="fb-note reveal">
          <strong>Important notes:</strong> All BBQ packages require a BBQ pit rental (available as add-on during booking). Disposable cutlery and cups are included. Ice included unless stated. Alcohol packages subject to yacht owner approval. Please inform us of dietary restrictions at least 48 hours before your charter.
        </div>
      </div>
    </div>
  );
}

function WatersportsSection() {
  return (
    <div className="ws-wrap" id="watersports">
      <div className="section">
        <div className="reveal">
          <p className="section-eyebrow">Water Sports</p>
          <div className="divider"/>
          <h2 className="section-title">Adventures on the <em className="gold-italic">Ocean</em></h2>
          <p className="section-subtitle">Add a rush of adrenaline to your charter. Our watersports add-ons transform a relaxing cruise into an unforgettable adventure.</p>
        </div>
        <div className="ws-hero-grid reveal">
          {/* Big card — wsKayak */}
          <div className="ws-big-card">
            <img src={wsKayak} alt="Kayak Adventures" className="ws-big-img"/>
            <div className="ws-big-body">
              <div className="ws-big-title">Leg Pedal Kayak Adventures</div>
              <div className="ws-big-sub">Guided Coastal Exploration · Add-on to Charter</div>
              <div className="ws-big-desc">Kenya's first leg pedal kayak experience. Explore mangroves, hidden channels and pristine coves around Mombasa's coastline — hands-free for the perfect photo moment.</div>
              <ul className="ws-features">
                <li>Faster & easier than traditional kayaking — kids welcome</li>
                <li>Hands-free design for photos & snorkelling stops</li>
                <li>Explore mangroves, islands and fishing villages</li>
                <li>Guided tour with safety briefing included</li>
              </ul>
              <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"center"}}>
                <div>
                  <div style={{fontSize:"0.6rem",letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--text-muted)",marginBottom:"0.2rem"}}>From</div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.4rem",color:"var(--gold)"}}>KSh 2,500 <span style={{fontFamily:"'Montserrat',sans-serif",fontSize:"0.65rem",color:"var(--text-muted)"}}>/ person</span></div>
                </div>
                <a href="#contact" className="btn-primary">Add to Charter</a>
              </div>
            </div>
          </div>

          {/* Side cards */}
          <div className="ws-side-cards">
            {/* wsRhib */}
            <div className="ws-side-card">
              <img src={wsRhib} alt="RHIB Boat" className="ws-side-img"/>
              <div className="ws-side-body">
                <div className="ws-side-title">RHIB Adventure Boat Rides</div>
                <span className="ws-side-badge">High Speed · Thrill Add-on</span>
                <div className="ws-side-desc">Blast across the Indian Ocean on a rigid inflatable at full throttle. Perfect for island hopping, wildlife spotting, or pure adrenaline. Groups of 2–8 persons.</div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"0.85rem"}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.15rem",color:"var(--gold)"}}>KSh 3,500 <span style={{fontFamily:"'Montserrat',sans-serif",fontSize:"0.62rem",color:"var(--text-muted)"}}>/ hr</span></div>
                  <a href="#contact" className="btn-outline" style={{fontSize:"0.65rem",padding:"0.5rem 1rem"}}>Book</a>
                </div>
              </div>
            </div>
            {/* wsJetboard */}
            <div className="ws-side-card">
              <img src={wsJetboard} alt="Electric Jetboard" className="ws-side-img"/>
              <div className="ws-side-body">
                <div className="ws-side-title">TKO Electric Jetboard</div>
                <span className="ws-side-badge">Premium · Electric Powered</span>
                <div className="ws-side-desc">Ride the future of watersports. The TKO TYPE-001 electric jetboard delivers whisper-quiet, high-speed surfing powered by an eco-friendly motor. No waves required.</div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"0.85rem"}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.15rem",color:"var(--gold)"}}>KSh 5,000 <span style={{fontFamily:"'Montserrat',sans-serif",fontSize:"0.62rem",color:"var(--text-muted)"}}>/ 30 min</span></div>
                  <a href="#contact" className="btn-outline" style={{fontSize:"0.65rem",padding:"0.5rem 1rem"}}>Book</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extra add-ons */}
        <div className="reveal">
          <div style={{textAlign:"center",marginBottom:"2.5rem"}}>
            <p style={{fontSize:"0.7rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--gold)",marginBottom:"0.5rem"}}>More Add-ons</p>
            <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.6rem",fontWeight:300}}>Enhance Your Charter Experience</h3>
          </div>
          <div className="ws-extras">
            {wsExtras.map(e => (
              <div key={e.title} className="ws-extra-card">
                <div style={{fontSize:"2rem",marginBottom:"0.6rem"}}>{e.icon}</div>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1rem",color:"var(--gold-light)",marginBottom:"0.35rem"}}>{e.title}</div>
                <div style={{fontSize:"0.72rem",color:"var(--text-muted)",lineHeight:1.6}}>{e.desc}</div>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1rem",color:"var(--gold)",marginTop:"0.75rem"}}>{e.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({name:"",email:"",phone:"",date:"",message:""});
  const [errors, setErrors] = useState({});
  const [ok, setOk] = useState(false);
  const validate = () => {
    const e = {};
    if (!form.name.trim())  e.name    = "Name is required";
    if (!form.email.trim()) e.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.phone.trim()) e.phone   = "Phone is required";
    if (!form.date)         e.date    = "Date is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };
  const submit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({}); setOk(true);
    setForm({name:"",email:"",phone:"",date:"",message:""});
  };
  const upd = f => e => {
    setForm(v=>({...v,[f]:e.target.value}));
    if (errors[f]) setErrors(v=>({...v,[f]:""}));
  };
  return (
    <form onSubmit={submit} noValidate>
      <div className="form-row">
        <FormInput label="Full Name"     id="name"  placeholder="Your full name"    value={form.name}    onChange={upd("name")}    error={errors.name}    required/>
        <FormInput label="Email"         id="email" type="email" placeholder="you@email.com" value={form.email}   onChange={upd("email")}   error={errors.email}   required/>
      </div>
      <div className="form-row">
        <FormInput label="Phone"         id="phone" type="tel"  placeholder="+254 700 000 000" value={form.phone} onChange={upd("phone")} error={errors.phone} required/>
        <FormInput label="Preferred Date" id="date" type="date" value={form.date} onChange={upd("date")} error={errors.date} required/>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="msg">Your Message *</label>
        <textarea id="msg" placeholder="Yacht preference, group size, occasion, F&B & watersports requests..."
          value={form.message} onChange={upd("message")}
          className={`form-textarea${errors.message?" error":""}`}/>
        {errors.message&&<p className="form-error">{errors.message}</p>}
      </div>
      <button type="submit" className="btn-primary" style={{width:"100%",marginTop:"0.5rem"}}>Send Enquiry</button>
      {ok&&<div className="form-success">✦ Thank you! We'll be in touch within 24 hours to confirm your charter.</div>}
    </form>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ── Main App ── */
export default function MbitaYacht() {
  useReveal();
  return (
    <>
      <FontLink/>
      <Navbar/>

      {/* ── Hero — backgroundImage set via inline style using imported heroImg ── */}
      <section className="hero" id="home">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }}/>
        <div className="hero-overlay"/>
        <div className="hero-content">
          <div className="hero-eyebrow">Mombasa, Kenya</div>
          <h1 className="hero-title">Mbita <em>Yacht</em><br/>Experience</h1>
          <p className="hero-subtitle">Luxury Charters · Fine Dining · Ocean Adventures</p>
          <a href="#contact" className="btn-primary">Book Your Charter</a>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line"/>
          Discover
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bar reveal">
        {[{n:"10+",l:"Years Experience"},{n:"6",l:"Yachts in Fleet"},{n:"500+",l:"Charters Completed"},{n:"5★",l:"Average Rating"}].map(s=>(
          <div key={s.l}><div className="stat-num">{s.n}</div><div className="stat-label">{s.l}</div></div>
        ))}
      </div>

      {/* About */}
      <div style={{background:"var(--navy)"}}>
        <div className="section reveal">
          <p className="section-eyebrow">About Mbita Yacht</p>
          <div className="divider"/>
          <div className="two-col">
            <div>
              <h2 className="section-title">Unforgettable voyages on the Indian Ocean</h2>
              <p className="section-subtitle">From sunrise cruises to multi-day island expeditions, Mbita Yacht offers bespoke charter experiences on the azure waters of Mombasa's coastline. Our crew, curated F&B, and thrilling watersports ensure every moment is extraordinary.</p>
              <a href="#yachts" className="btn-primary">Explore Our Fleet</a>
            </div>
            <div className="services-grid">
              {[
                {i:"🌊",t:"Ocean Excursions",d:"Snorkeling, dolphin watching, Wasini Island"},
                {i:"🥂",t:"Private Events",d:"Weddings, birthdays, corporate retreats"},
                {i:"🐠",t:"Fishing Charters",d:"Deep sea fishing in Pemba Channel"},
                {i:"🌅",t:"Sunset Cruises",d:"Romantic Indian Ocean sunsets"},
              ].map(c=>(
                <div key={c.t} className="service-card">
                  <div style={{fontSize:"1.5rem",marginBottom:"0.5rem"}}>{c.i}</div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1rem",color:"var(--gold-light)",marginBottom:"0.35rem"}}>{c.t}</div>
                  <div style={{fontSize:"0.75rem",color:"var(--text-muted)",lineHeight:1.6}}>{c.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Yachts · F&B · Watersports */}
      <YachtsSection/>
      <FBSection/>
      <WatersportsSection/>

      {/* FAQ */}
      <div className="faq-wrap" id="faq">
        <div className="faq-inner">
          <div className="reveal">
            <p className="section-eyebrow">Got Questions?</p>
            <div className="divider"/>
            <h2 className="section-title">Frequently Asked <em className="gold-italic">Questions</em></h2>
            <p className="section-subtitle">Everything you need to know before setting sail with us.</p>
          </div>
          <div className="reveal">{faqs.map((f,i)=><FAQItem key={i} q={f.q} a={f.a}/>)}</div>
        </div>
      </div>

      {/* Contact */}
      <div className="contact-wrap" id="contact">
        <div className="section">
          <div className="contact-grid">
            <div className="reveal">
              <p className="section-eyebrow">Get in Touch</p>
              <div className="divider"/>
              <h2 className="section-title">Book Your <em className="gold-italic">Charter</em></h2>
              <p className="section-subtitle" style={{marginBottom:"2rem"}}>Ready to set sail? Fill in the form and our team will respond within 24 hours with availability and a personalised quote.</p>
              {[
                {i:"📍",l:"Location",   v:"Old Port Marina, Mombasa\nMombasa County, Kenya"},
                {i:"📞",l:"Phone / WhatsApp", v:"+254 700 429 164"},
                {i:"✉️",l:"Email",      v:"info@mbitayacht.co.ke"},
              ].map(c=>(
                <div key={c.l} className="contact-info-item">
                  <div className="contact-icon">{c.i}</div>
                  <div>
                    <div className="contact-info-label">{c.l}</div>
                    <div className="contact-info-value" style={{whiteSpace:"pre-line"}}>{c.v}</div>
                  </div>
                </div>
              ))}
              <div className="map-wrap">
                <iframe title="Mombasa" loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63819.86037688065!2d39.62575!3d-4.04305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012e73fd447f9%3A0x3dbfe4461b4f03b9!2sMombasa%2C%20Kenya!5e0!3m2!1sen!2s!4v1700000000000"
                  allowFullScreen referrerPolicy="no-referrer-when-downgrade"/>
              </div>
            </div>
            <div className="reveal" style={{paddingTop:"0.5rem"}}>
              <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(201,168,76,0.15)",borderRadius:"4px",padding:"2.5rem"}}>
                <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.4rem",color:"var(--gold-light)",marginBottom:"1.75rem"}}>Charter Enquiry Form</h3>
                <ContactForm/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-inner">
          <div>
            <div className="footer-brand-name">⚓ <span>Mbita</span> Yacht</div>
            <p className="footer-desc">Premier luxury yacht charters, fine dining & ocean adventures on Kenya's breathtaking Indian Ocean coastline. Since 2014.</p>
          </div>
          <div>
            <div className="footer-col-title">Quick Links</div>
            <ul className="footer-links">
              {[["Yachts","#yachts"],["F&B Packages","#fnb"],["Water Sports","#watersports"],["FAQ","#faq"],["Book Now","#contact"]].map(([l,h])=>(
                <li key={l}><a href={h}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <ul className="footer-links">
              <li><a href="tel:+254700429164">+254 700 429 164</a></li>
              <li><a href="mailto:info@mbitayacht.co.ke">info@mbitayacht.co.ke</a></li>
              <li><a href="#contact">Old Port Marina, Mombasa</a></li>
              <li style={{marginTop:"1rem"}}>
                <div className="footer-col-title" style={{marginBottom:"0.6rem"}}>Hours</div>
                <a href="#contact">Mon–Sun: 6:00 AM – 8:00 PM</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Mbita Yacht. All rights reserved.</span>
          <span>Crafted with <span style={{color:"var(--gold)"}}>♥</span> in Mombasa, Kenya</span>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a href="https://wa.me/254700429164?text=Hi%20Mbita%20Yacht%2C%20I%27d%20like%20to%20book%20a%20charter!"
        target="_blank" rel="noopener noreferrer" className="whatsapp-fab" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </>
  );
}
