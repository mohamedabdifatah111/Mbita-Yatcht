
import heroImg           from '../assets/images/hero.jpg';
import yachtBahariPearl  from '../assets/images/yacht-bahari-pearl.jpg';
import yachtPwaniStar    from '../assets/images/yacht-pwani-star.jpg';
import yachtKilindini    from '../assets/images/yacht-kilindini-queen.jpg';
import yachtDhahabu      from '../assets/images/yacht-dhahabu.jpg';
import yachtSimbaDeep    from '../assets/images/yacht-simba-deep.jpg';
import yachtBahariNights from '../assets/images/yacht-bahari-nights.jpg';
import wsKayak           from '../assets/images/ws-kayak.jpg';
import wsRhib            from '../assets/images/ws-rhib.jpg';
import wsJetboard        from '../assets/images/ws-jetboard.jpg';

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

    /* Hero */
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

    /* ── TRIPS & BOOKING ── */
    .trips-wrap{background:var(--navy);}
    .trips-route-bar{display:flex;align-items:center;justify-content:center;gap:1.5rem;margin-bottom:3rem;flex-wrap:wrap;}
    .trips-route-city{text-align:center;}
    .trips-route-city-name{font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:600;color:var(--white);}
    .trips-route-city-label{font-size:0.6rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--text-muted);margin-top:0.2rem;}
    .trips-route-arrow{display:flex;flex-direction:column;align-items:center;gap:0.3rem;color:var(--gold);}
    .trips-route-line{width:80px;height:1px;background:linear-gradient(to right,rgba(201,168,76,0.2),var(--gold),rgba(201,168,76,0.2));}
    .trips-route-dist{font-size:0.62rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-muted);}
    .trips-loading{text-align:center;padding:4rem 2rem;}
    .trips-spinner{width:40px;height:40px;border:2px solid rgba(201,168,76,0.2);border-top-color:var(--gold);border-radius:50%;animation:spin 0.8s linear infinite;margin:0 auto 1rem;}
    @keyframes spin{to{transform:rotate(360deg);}}
    .trips-error{text-align:center;padding:3rem;background:rgba(220,38,38,0.08);border:1px solid rgba(220,38,38,0.2);border-radius:4px;color:#fca5a5;font-size:0.85rem;}
    .trips-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem;animation:fadeUp 0.6s ease both;}
    .trips-loading{animation:fadeUp 0.4s ease both;}
    .trip-card{background:rgba(255,255,255,0.03);border:1px solid rgba(201,168,76,0.12);border-radius:4px;overflow:hidden;transition:all 0.3s;}
    .trip-card:hover{border-color:rgba(201,168,76,0.35);transform:translateY(-3px);box-shadow:0 16px 40px rgba(0,0,0,0.35);}
    .trip-card.selected{border-color:var(--gold);background:rgba(201,168,76,0.05);}
    .trip-card-header{padding:1.25rem 1.25rem 1rem;border-bottom:1px solid rgba(201,168,76,0.08);display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;}
    .trip-transport-badge{display:flex;align-items:center;gap:0.4rem;font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;background:rgba(201,168,76,0.12);border:1px solid rgba(201,168,76,0.25);color:var(--gold);padding:0.3rem 0.7rem;border-radius:2px;white-space:nowrap;}
    .trip-time-block{text-align:right;}
    .trip-times{font-family:'Cormorant Garamond',serif;font-size:1.3rem;color:var(--white);}
    .trip-duration{font-size:0.65rem;color:var(--text-muted);letter-spacing:0.08em;margin-top:0.15rem;}
    .trip-card-body{padding:1rem 1.25rem;}
    .trip-vessel{font-size:0.78rem;color:rgba(255,255,255,0.75);margin-bottom:0.85rem;display:flex;align-items:center;gap:0.4rem;}
    .trip-seats{display:grid;grid-template-columns:repeat(3,1fr);gap:0.6rem;margin-bottom:1rem;}
    .trip-seat{padding:0.65rem 0.5rem;border-radius:3px;text-align:center;cursor:pointer;transition:all 0.25s;border:1px solid transparent;}
    .trip-seat.front{background:rgba(201,168,76,0.08);border-color:rgba(201,168,76,0.2);}
    .trip-seat.middle{background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.08);}
    .trip-seat.rear{background:rgba(148,163,184,0.06);border-color:rgba(148,163,184,0.15);}
    .trip-seat:hover,.trip-seat.active{border-color:var(--gold);background:rgba(201,168,76,0.15);}
    .trip-seat-label{font-size:0.58rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.2rem;}
    .trip-seat-cat{font-size:0.68rem;font-weight:600;color:var(--gold-light);margin-bottom:0.15rem;}
    .trip-seat-price{font-family:'Cormorant Garamond',serif;font-size:1rem;color:var(--gold);}
    .trip-seat-price small{font-family:'Montserrat',sans-serif;font-size:0.55rem;color:var(--text-muted);}
    .trip-avail{font-size:0.65rem;color:var(--text-muted);display:flex;align-items:center;gap:0.3rem;margin-bottom:0.75rem;}
    .trip-avail-dot{width:6px;height:6px;border-radius:50%;background:#4ade80;flex-shrink:0;}

    /* Booking modal overlay */
    .booking-overlay{position:fixed;inset:0;background:rgba(5,10,20,0.88);backdrop-filter:blur(8px);z-index:500;display:flex;align-items:center;justify-content:center;padding:1rem;}
    .booking-modal{background:var(--navy-mid);border:1px solid rgba(201,168,76,0.2);border-radius:6px;width:100%;max-width:520px;max-height:90vh;overflow-y:auto;}
    .booking-modal-header{padding:1.5rem 1.75rem 1.25rem;border-bottom:1px solid rgba(201,168,76,0.1);display:flex;justify-content:space-between;align-items:center;}
    .booking-modal-title{font-family:'Cormorant Garamond',serif;font-size:1.4rem;color:var(--gold-light);}
    .booking-modal-close{background:none;border:none;color:var(--text-muted);font-size:1.3rem;cursor:pointer;padding:0.25rem;line-height:1;transition:color 0.2s;}
    .booking-modal-close:hover{color:var(--white);}
    .booking-modal-body{padding:1.5rem 1.75rem;}
    .booking-summary{background:rgba(201,168,76,0.06);border:1px solid rgba(201,168,76,0.15);border-radius:3px;padding:1rem 1.25rem;margin-bottom:1.5rem;}
    .booking-summary-row{display:flex;justify-content:space-between;align-items:center;font-size:0.8rem;padding:0.3rem 0;}
    .booking-summary-row:not(:last-child){border-bottom:1px solid rgba(201,168,76,0.08);}
    .booking-summary-label{color:var(--text-muted);}
    .booking-summary-value{color:var(--white);font-weight:500;}
    .booking-summary-price{color:var(--gold);font-family:'Cormorant Garamond',serif;font-size:1.1rem;}
    .booking-form-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem;}
    .booking-form-group{margin-bottom:1rem;}
    .booking-form-label{display:block;font-size:0.62rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.4rem;}
    .booking-form-input{width:100%;background:rgba(255,255,255,0.04);border:1px solid rgba(201,168,76,0.2);border-radius:2px;color:var(--white);font-family:'Montserrat',sans-serif;font-size:0.85rem;padding:0.75rem 1rem;outline:none;transition:all 0.3s;}
    .booking-form-input:focus{border-color:var(--gold);background:rgba(201,168,76,0.05);box-shadow:0 0 0 3px rgba(201,168,76,0.1);}
    .booking-form-input.err{border-color:#f87171;}
    .booking-form-error{font-size:0.68rem;color:#f87171;margin-top:0.3rem;}
    .booking-submitting{display:flex;align-items:center;justify-content:center;gap:0.75rem;padding:0.85rem;font-size:0.8rem;color:var(--text-muted);}
    .booking-submitting-spinner{width:18px;height:18px;border:2px solid rgba(201,168,76,0.2);border-top-color:var(--gold);border-radius:50%;animation:spin 0.7s linear infinite;}

    /* Confirmation */
    .booking-confirm{text-align:center;padding:1rem 0;}
    .booking-confirm-icon{font-size:3rem;margin-bottom:1rem;}
    .booking-confirm-title{font-family:'Cormorant Garamond',serif;font-size:1.6rem;color:var(--gold-light);margin-bottom:0.5rem;}
    .booking-confirm-sub{font-size:0.82rem;color:var(--text-muted);line-height:1.7;margin-bottom:1.5rem;}
    .booking-confirm-ref{display:inline-block;background:rgba(201,168,76,0.1);border:1px solid rgba(201,168,76,0.3);border-radius:3px;padding:0.5rem 1.25rem;font-family:'Cormorant Garamond',serif;font-size:1.2rem;color:var(--gold);letter-spacing:0.08em;margin-bottom:1.5rem;}
    .booking-confirm-details{background:rgba(255,255,255,0.03);border-radius:3px;padding:1rem 1.25rem;text-align:left;margin-bottom:1.5rem;}
    .booking-confirm-row{display:flex;justify-content:space-between;font-size:0.8rem;padding:0.3rem 0;}
    .booking-confirm-row:not(:last-child){border-bottom:1px solid rgba(255,255,255,0.05);}

    /* FAQ */
    .faq-wrap{background:var(--navy-mid);}
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
    @media(max-width:1000px){.yachts-grid{grid-template-columns:repeat(2,1fr);}.fb-grid{grid-template-columns:repeat(2,1fr);}.ws-hero-grid{grid-template-columns:1fr;}.ws-extras{grid-template-columns:repeat(2,1fr);}.trips-grid{grid-template-columns:1fr;}}
    @media(max-width:900px){.stats-bar{grid-template-columns:repeat(2,1fr);}.two-col{grid-template-columns:1fr;gap:2.5rem;}.contact-grid{grid-template-columns:1fr;gap:3rem;}.footer-inner{grid-template-columns:1fr 1fr;}.nav-links{display:none;}.hamburger{display:flex;}}
    @media(max-width:640px){.yachts-grid{grid-template-columns:1fr;}.fb-grid{grid-template-columns:1fr;}.ws-extras{grid-template-columns:1fr;}.form-row{grid-template-columns:1fr;}.footer-inner{grid-template-columns:1fr;}.footer-bottom{flex-direction:column;gap:0.5rem;text-align:center;}.yachts-tabs{overflow-x:auto;}.yacht-tab{flex:none;}.booking-form-row{grid-template-columns:1fr;}.trip-seats{grid-template-columns:repeat(3,1fr);}}
  `}</style>
);

/* ─────────────────────────────────────────────────────────────
   MOCK API LAYER
   The shape of each response is documented in the comments.
───────────────────────────────────────────────────────────── */
const ROUTE = { origin: "Homa Bay", destination: "Kisumu" };

// GET /api/trips?origin=Homa Bay&destination=Kisumu
async function fetchTrips() {
  await new Promise(r => setTimeout(r, 1400)); // simulate network
  return [
    {
      id: "TRP-001",
      origin: "Homa Bay",
      destination: "Kisumu",
      departure: "06:00",
      arrival: "08:30",
      duration: "2h 30m",
      transport_type: "Speed Boat",
      transport_icon: "⚡",
      vessel_name: "MV Nyanza Express",
      available_seats: 18,
      seats: [
        { position: "front",  category: "Premium",  tier: "Front Seat",  price: 1800 },
        { position: "middle", category: "Standard", tier: "Middle Seat", price: 1200 },
        { position: "rear",   category: "Economy",  tier: "Rear Seat",   price: 850  },
      ],
    },
    {
      id: "TRP-002",
      origin: "Homa Bay",
      destination: "Kisumu",
      departure: "08:00",
      arrival: "11:30",
      duration: "3h 30m",
      transport_type: "Ferry",
      transport_icon: "⛴",
      vessel_name: "MV Victoria Queen",
      available_seats: 45,
      seats: [
        { position: "front",  category: "Premium",  tier: "Front Seat",  price: 1200 },
        { position: "middle", category: "Standard", tier: "Middle Seat", price: 850  },
        { position: "rear",   category: "Economy",  tier: "Rear Seat",   price: 600  },
      ],
    },
    {
      id: "TRP-003",
      origin: "Homa Bay",
      destination: "Kisumu",
      departure: "11:00",
      arrival: "13:15",
      duration: "2h 15m",
      transport_type: "Speed Boat",
      transport_icon: "⚡",
      vessel_name: "MV Lolwe Swift",
      available_seats: 12,
      seats: [
        { position: "front",  category: "Premium",  tier: "Front Seat",  price: 2000 },
        { position: "middle", category: "Standard", tier: "Middle Seat", price: 1400 },
        { position: "rear",   category: "Economy",  tier: "Rear Seat",   price: 950  },
      ],
    },
    {
      id: "TRP-004",
      origin: "Homa Bay",
      destination: "Kisumu",
      departure: "14:00",
      arrival: "18:00",
      duration: "4h 00m",
      transport_type: "Ferry",
      transport_icon: "⛴",
      vessel_name: "MV Uhuru III",
      available_seats: 60,
      seats: [
        { position: "front",  category: "Premium",  tier: "Front Seat",  price: 1000 },
        { position: "middle", category: "Standard", tier: "Middle Seat", price: 700  },
        { position: "rear",   category: "Economy",  tier: "Rear Seat",   price: 500  },
      ],
    },
  ];
}

// POST /api/bookings
async function submitBooking(payload) {
  await new Promise(r => setTimeout(r, 1800)); // simulate network
  /* payload shape:
    {
      trip_id: string,
      seat_category: { position, category, tier, price },
      passenger: { full_name, email, phone, id_number }
    }
  */
  // Simulate occasional failure to show error state:
  // if (Math.random() < 0.2) throw new Error("Payment gateway timeout");
  const ref = "MBY-" + Math.random().toString(36).substring(2,8).toUpperCase();
  return {
    success: true,
    booking_reference: ref,
    trip_id: payload.trip_id,
    passenger_name: payload.passenger.full_name,
    seat_category: payload.seat_category.tier,
    seat_class: payload.seat_category.category,
    price: payload.seat_category.price,
    departure: payload.departure,
    arrival: payload.arrival,
    vessel: payload.vessel_name,
    transport: payload.transport_type,
  };
}

/* ─────────────────────────────────────────────────────────────
   DATA (existing — unchanged)
───────────────────────────────────────────────────────────── */
const faqs = [
  { q:"What is included in the yacht charter?", a:"Our yacht charters include a professional captain and crew, fuel, life jackets, snorkeling gear, and onboard safety equipment. We also provide fresh water, ice, and basic amenities. Premium packages include catered meals, beverages, and custom decoration for special occasions." },
  { q:"What are the booking and payment terms?", a:"A 50% deposit is required to secure your booking date, with the remaining balance due 7 days before your charter. We accept M-Pesa, bank transfer, and major credit cards. Cancellations made 14+ days in advance receive a full refund of the deposit; within 14 days, deposits are non-refundable but can be rescheduled once." },
  { q:"What happens in bad weather?", a:"Guest safety is our top priority. If Kenya Meteorological Department issues a marine advisory or conditions are deemed unsafe by our captain, we will reschedule your charter at no charge or offer a full refund. The final call on safety rests with our experienced captain." },
  { q:"Can I bring food and drinks on board?", a:"Absolutely. You are welcome to bring your own food and beverages. We provide a cooler, ice, and basic kitchen facilities. For a fully catered experience, our team can arrange professional catering at an additional cost. Please note that glass bottles are discouraged for safety reasons." },
  { q:"How many guests can the yacht accommodate?", a:"Our flagship yacht comfortably accommodates up to 20 guests for day charters and 10 guests for overnight trips. We also offer intimate sunset cruises for smaller groups of 2–8 people. Contact us to discuss the perfect configuration for your event." },
  { q:"What safety measures are in place?", a:"All our yachts are equipped with life jackets for every guest, first aid kits, fire extinguishers, and communication devices. Our crew is trained in emergency procedures and we conduct regular safety drills. We also provide a safety briefing at the start of each charter to ensure everyone is informed." },
];

const YACHT_TYPES = ["All Yachts","Normal Charter","Overnight","Fishing","Couple Cruise"];
const yachts = [
  { name:"Bahari Pearl",   type:"Luxury Flybridge",   cat:["All Yachts","Normal Charter","Overnight"],  img:yachtBahariPearl,  pax:"Up to 20", len:"45 ft", hrs:"4 hrs",     pwd:"KSh 28,000", pwe:"KSh 35,000", addons:"BBQ pit rental · City cruise · Water trampoline · Snorkel gear", badge:"Most Popular" },
  { name:"Pwani Star",     type:"Sport Cruiser",      cat:["All Yachts","Normal Charter","Couple Cruise"],img:yachtPwaniStar,    pax:"Up to 12", len:"38 ft", hrs:"4 hrs",     pwd:"KSh 18,500", pwe:"KSh 24,000", addons:"Stand-up paddleboards · Ice pack included · Fishing rod & bait",  badge:"" },
  { name:"Kilindini Queen",type:"Motor Catamaran",    cat:["All Yachts","Normal Charter","Overnight"],  img:yachtKilindini,    pax:"Up to 25", len:"52 ft", hrs:"4 hrs",     pwd:"KSh 45,000", pwe:"KSh 56,000", addons:"Full galley kitchen · Master cabin · Sea scooter add-on",          badge:"Premium" },
  { name:"Dhahabu",        type:"Classic Dhow",       cat:["All Yachts","Couple Cruise"],               img:yachtDhahabu,      pax:"Up to 8",  len:"35 ft", hrs:"2–4 hrs",   pwd:"KSh 12,000", pwe:"KSh 16,000", addons:"Traditional Swahili dining · Sunset cruise included",              badge:"Heritage" },
  { name:"Simba Deep",     type:"Fishing Sportfisher",cat:["All Yachts","Fishing"],                     img:yachtSimbaDeep,    pax:"Up to 6",  len:"32 ft", hrs:"Full day",  pwd:"KSh 22,000", pwe:"KSh 27,000", addons:"Full deep  fishing gear · Bait & tackle · Fish processing",     badge:"Fishing" },
  { name:"Bahari Nights",  type:"Overnight Cruiser",  cat:["All Yachts","Overnight"],                   img:yachtBahariNights, pax:"Up to 10", len:"48 ft", hrs:"Overnight", pwd:"KSh 65,000", pwe:"KSh 80,000", addons:"3 cabins · Catered meals · Wasini Island route option",            badge:"Overnight" },
];

const FB_CATS = ["All Menus","BBQ (Halal)","BBQ (Vegetarian)","Finger Food","Swahili Cuisine","Alcohol & Drinks"];
const fbMenus = [
  { cat:"BBQ (Halal)",       name:"Halal BBQ — Set A",           serves:"5 persons",   price:"KSh 4,800",  badge:"Halal",   sections:[{t:"Meat & Seafood",i:["Meltique steak 200g × 2","XL Black Tiger Prawns 500g","Mid Chicken Wings 500g","Chicken Cutlets 500g","Chicken Sausages × 3","Half Shell Scallop 500g"]},{t:"Mains",i:["Fried Rice","Fried Noodles"]},{t:"Drinks (1.5L each)",i:["Green Tea","Coke","Mineral Water"]}]},
  { cat:"BBQ (Halal)",       name:"Halal BBQ — Seafood Set",     serves:"5 persons",   price:"KSh 5,500",  badge:"Halal",   sections:[{t:"lakefood & Meat",i:["Salmon 700g","XL Tiger Prawns 500g","Chicken Wings 500g","Sambal Sotong Rings × 5","Scallop with Cheese 400g","Otah (spicy) × 5","Chicken Hot Dog × 10"]},{t:"Mains",i:["Fried Noodles"]},{t:"Drinks (1.5L each)",i:["Coke","Green Tea","Mineral Water"]}]},
  { cat:"BBQ (Vegetarian)",  name:"Vegetarian BBQ Set",          serves:"5 persons",   price:"KSh 3,800",  badge:"Veg",     sections:[{t:"Grilled Items",i:["Mixed veggie skewers","Portobello mushrooms","Corn on the cob × 5","Halloumi slices 300g","Tofu satay × 10"]},{t:"Mains",i:["Fragrant fried rice","Stir-fried noodles"]},{t:"Drinks",i:["Fruit punch 1.5L","Mineral water × 3"]}]},
  { cat:"Finger Food",       name:"Premium Finger Food Platter", serves:"10 persons",  price:"KSh 6,200",  badge:"Popular", sections:[{t:"Bites & Canapés",i:["Mini beef sliders × 10","Prawn tempura × 12","Bruschetta assortment × 12","Cheese & crackers board","Chicken satay × 15","Spring rolls × 12"]},{t:"Dips & Sauces",i:["Hummus","Tzatziki","Sweet chilli"]}]},
  { cat:"Swahili Cuisine",   name:"Swahili lake  Feast",       serves:"8 persons",   price:"KSh 8,500",  badge:"Local",   sections:[{t:"Main Dishes",i:["Grilled whole fish (catch of day)","Prawn pilau","Coconut chicken curry","Kachumbari salad","Chapati × 20"]},{t:"Sides",i:["Coconut rice","Ugali","Sukuma wiki"]},{t:"Dessert",i:["Mango sorbet","Kashata (coconut candy)"]}]},
  { cat:"Alcohol & Drinks",  name:"Premium Bar Package",         serves:"Per charter", price:"KSh 12,000", badge:"Add-on",  sections:[{t:"Spirits & Wine",i:["House red & white wine × 2 btl each","Tusker & White Cap × 24 cans","Champagne (upon request)"]},{t:"Soft Drinks",i:["Assorted sodas × 24","Fresh juices × 6 jugs","Mineral water × 24 btl"]},{t:"Bar Setup",i:["Ice (20kg)","Glassware & cups","Garnishes & stirrers"]}]},
];

const wsExtras = [
  { icon:"🤿", title:"Snorkelling Gear",   desc:"Full mask, fins & snorkel set for each guest. Includes safety briefing and guide to the best coral spots.", price:"KSh 800/person"  },
  { icon:"🎣", title:"Deep Sea Fishing",   desc:"Professional rods, bait, tackle box & fish processing. Includes offshore charts and captain guidance.",   price:"KSh 1,500/set"   },
  { icon:"🏄", title:"Stand-Up Paddleboard",desc:"Premium SUP boards with non-slip deck and full safety gear. Guided paddling routes available.",            price:"KSh 1,200/board" },
  { icon:"🌊", title:"Lake  Scooter",        desc:"Underwater lake scooter for hands-free coral reef exploration. No experience required.",                    price:"KSh 2,000/unit"  },
  { icon:"🛟", title:"Water Trampoline",   desc:"Giant inflatable floating trampoline anchored offshore — ideal for families and groups.",                   price:"KSh 1,800/charter"},
  { icon:"🍹", title:"Floating Bar",       desc:"Fully stocked floating bar with professional bartender. Custom cocktail menu available upon request.",        price:"KSh 15,000/charter"},
];

/* ─────────────────────────────────────────────────────────────
   EXISTING COMPONENTS (unchanged)
───────────────────────────────────────────────────────────── */
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
    { href:"#yachts",      label:"Yachts" },
    { href:"#fnb",         label:"F&B" },
    { href:"#watersports", label:"Water Sports" },
    { href:"#trips",       label:"Trips" },
    { href:"#faq",         label:"FAQ" },
    { href:"#contact",     label:"Book Now", cls:"nav-cta" },
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
          <p className="section-subtitle">From intimate couple cruises to large party charters — the perfect vessel for every occasion on the Lake Victoria.</p>
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
          <p className="section-subtitle">Elevate your charter with our curated F&B packages. From sizzling halal BBQs to authentic Swahili lake feasts — delivered fresh to your yacht.</p>
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
          <h2 className="section-title">Adventures on the <em className="gold-italic">Lake</em></h2>
          <p className="section-subtitle">Add a rush of adrenaline to your charter. Our watersports add-ons transform a relaxing cruise into an unforgettable adventure.</p>
        </div>
        <div className="ws-hero-grid reveal">
          <div className="ws-big-card">
            <img src={wsKayak} alt="Kayak Adventures" className="ws-big-img"/>
            <div className="ws-big-body">
              <div className="ws-big-title">Leg Pedal Kayak Adventures</div>
              <div className="ws-big-sub">Guided Lake Exploration · Add-on to Charter</div>
              <div className="ws-big-desc">Kenya's first leg pedal kayak experience. Explore mangroves, hidden channels and pristine coves around Lake Victoria— hands-free for the perfect photo moment.</div>
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
          <div className="ws-side-cards">
            <div className="ws-side-card">
              <img src={wsRhib} alt="RHIB Boat" className="ws-side-img"/>
              <div className="ws-side-body">
                <div className="ws-side-title">RHIB Adventure Boat Rides</div>
                <span className="ws-side-badge">High Speed · Thrill Add-on</span>
                <div className="ws-side-desc">Blast across the Lake Victoria on a rigid inflatable at full throttle. Perfect for island hopping, wildlife spotting, or pure adrenaline. Groups of 2–8 persons.</div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"0.85rem"}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.15rem",color:"var(--gold)"}}>KSh 3,500 <span style={{fontFamily:"'Montserrat',sans-serif",fontSize:"0.62rem",color:"var(--text-muted)"}}>/ hr</span></div>
                  <a href="#contact" className="btn-outline" style={{fontSize:"0.65rem",padding:"0.5rem 1rem"}}>Book</a>
                </div>
              </div>
            </div>
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

/* ─────────────────────────────────────────────────────────────
   NEW — BOOKING MODAL
   Shown when user clicks "Book This Trip" on a trip card.
   Collects passenger details, calls submitBooking(), shows confirmation.
───────────────────────────────────────────────────────────── */
function BookingModal({ trip, seat, onClose }) {
  const [passenger, setPassenger] = useState({ full_name:"", email:"", phone:"", id_number:"" });
  const [errors, setErrors]       = useState({});
  const [status, setStatus]       = useState("idle"); // idle | submitting | success | error
  const [result, setResult]       = useState(null);
  const [apiError, setApiError]   = useState("");

  const upd = f => e => {
    setPassenger(v => ({ ...v, [f]: e.target.value }));
    if (errors[f]) setErrors(v => ({ ...v, [f]:"" }));
  };

  const validate = () => {
    const e = {};
    if (!passenger.full_name.trim()) e.full_name  = "Full name is required";
    if (!passenger.email.trim())     e.email      = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(passenger.email)) e.email = "Invalid email";
    if (!passenger.phone.trim())     e.phone      = "Phone number is required";
    if (!passenger.id_number.trim()) e.id_number  = "ID / Passport number is required";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("submitting");
    try {
      const res = await submitBooking({
        trip_id:        trip.id,
        seat_category:  seat,
        passenger,
        departure:      trip.departure,
        arrival:        trip.arrival,
        vessel_name:    trip.vessel_name,
        transport_type: trip.transport_type,
      });
      setResult(res);
      setStatus("success");
    } catch (err) {
      setApiError(err.message || "Booking failed. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="booking-overlay" onClick={e => { if(e.target===e.currentTarget) onClose(); }}>
      <div className="booking-modal">
        <div className="booking-modal-header">
          <div className="booking-modal-title">
            {status === "success" ? "Booking Confirmed" : "Complete Your Booking"}
          </div>
          <button className="booking-modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className="booking-modal-body">

          {/* ── SUCCESS STATE ── */}
          {status === "success" && result && (
            <div className="booking-confirm">
              <div className="booking-confirm-icon">✅</div>
              <div className="booking-confirm-title">You're all set!</div>
              <div className="booking-confirm-sub">
                Your seat has been reserved. A confirmation has been sent to <strong>{passenger.email}</strong>.
              </div>
              <div className="booking-confirm-ref">{result.booking_reference}</div>
              <div className="booking-confirm-details">
                {[
                  ["Passenger",  result.passenger_name],
                  ["Route",      `${ROUTE.origin} → ${ROUTE.destination}`],
                  ["Vessel",     result.vessel],
                  ["Transport",  result.transport],
                  ["Departure",  result.departure],
                  ["Arrival",    result.arrival],
                  ["Seat",       `${result.seat_category} (${result.seat_class})`],
                  ["Amount",     `KSh ${result.price.toLocaleString()}`],
                ].map(([l,v]) => (
                  <div key={l} className="booking-confirm-row">
                    <span style={{color:"var(--text-muted)",fontSize:"0.78rem"}}>{l}</span>
                    <span style={{color:"var(--white)",fontSize:"0.82rem",fontWeight:500}}>{v}</span>
                  </div>
                ))}
              </div>
              <button className="btn-primary" style={{width:"100%"}} onClick={onClose}>
                Done
              </button>
            </div>
          )}

          {/* ── FORM STATE ── */}
          {status !== "success" && (
            <>
              {/* Trip summary */}
              <div className="booking-summary">
                <div className="booking-summary-row">
                  <span className="booking-summary-label">Route</span>
                  <span className="booking-summary-value">{ROUTE.origin} → {ROUTE.destination}</span>
                </div>
                <div className="booking-summary-row">
                  <span className="booking-summary-label">Vessel</span>
                  <span className="booking-summary-value">{trip.vessel_name}</span>
                </div>
                <div className="booking-summary-row">
                  <span className="booking-summary-label">Transport</span>
                  <span className="booking-summary-value">{trip.transport_icon} {trip.transport_type}</span>
                </div>
                <div className="booking-summary-row">
                  <span className="booking-summary-label">Departure</span>
                  <span className="booking-summary-value">{trip.departure} → {trip.arrival}</span>
                </div>
                <div className="booking-summary-row">
                  <span className="booking-summary-label">Seat</span>
                  <span className="booking-summary-value">{seat.tier} · {seat.category}</span>
                </div>
                <div className="booking-summary-row">
                  <span className="booking-summary-label">Price</span>
                  <span className="booking-summary-price">KSh {seat.price.toLocaleString()}</span>
                </div>
              </div>

              {/* Passenger form */}
              <form onSubmit={handleSubmit} noValidate>
                <div className="booking-form-row">
                  <div className="booking-form-group">
                    <label className="booking-form-label">Full Name *</label>
                    <input className={`booking-form-input${errors.full_name?" err":""}`}
                      placeholder="John Doe" value={passenger.full_name} onChange={upd("full_name")}/>
                    {errors.full_name && <p className="booking-form-error">{errors.full_name}</p>}
                  </div>
                  <div className="booking-form-group">
                    <label className="booking-form-label">Phone Number *</label>
                    <input className={`booking-form-input${errors.phone?" err":""}`}
                      placeholder="+254 700 000 000" value={passenger.phone} onChange={upd("phone")}/>
                    {errors.phone && <p className="booking-form-error">{errors.phone}</p>}
                  </div>
                </div>
                <div className="booking-form-row">
                  <div className="booking-form-group">
                    <label className="booking-form-label">Email Address *</label>
                    <input className={`booking-form-input${errors.email?" err":""}`}
                      type="email" placeholder="you@email.com" value={passenger.email} onChange={upd("email")}/>
                    {errors.email && <p className="booking-form-error">{errors.email}</p>}
                  </div>
                  <div className="booking-form-group">
                    <label className="booking-form-label">ID / Passport No. *</label>
                    <input className={`booking-form-input${errors.id_number?" err":""}`}
                      placeholder="12345678" value={passenger.id_number} onChange={upd("id_number")}/>
                    {errors.id_number && <p className="booking-form-error">{errors.id_number}</p>}
                  </div>
                </div>

                {status === "error" && (
                  <div style={{background:"rgba(220,38,38,0.08)",border:"1px solid rgba(220,38,38,0.25)",borderRadius:"3px",padding:"0.85rem 1rem",fontSize:"0.82rem",color:"#fca5a5",marginBottom:"1rem"}}>
                    ⚠️ {apiError}
                  </div>
                )}

                {status === "submitting" ? (
                  <div className="booking-submitting">
                    <div className="booking-submitting-spinner"/>
                    Confirming your booking…
                  </div>
                ) : (
                  <button type="submit" className="btn-primary" style={{width:"100%",marginTop:"0.25rem"}}>
                    Confirm Booking — KSh {seat.price.toLocaleString()}
                  </button>
                )}
              </form>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   NEW — TRIPS SECTION
   1. Fetches trips from API on mount
   2. Displays each trip with transport type + 3 seat categories
   3. User selects a seat → opens BookingModal
───────────────────────────────────────────────────────────── */
function TripsSection() {
  const [trips,   setTrips]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState("");

  // Selected seat per trip: { [tripId]: seatObject }
  const [selectedSeats, setSelectedSeats] = useState({});

  // Modal state
  const [booking, setBooking] = useState(null); // { trip, seat } | null

  // STEP 1 — Fetch trips from API
  useEffect(() => {
    setLoading(true);
    fetchTrips()
      .then(data => { setTrips(data); setLoading(false); })
      .catch(err  => { setError(err.message || "Failed to load trips."); setLoading(false); });
  }, []);

  const selectSeat = (tripId, seat) => {
    setSelectedSeats(prev => ({ ...prev, [tripId]: seat }));
  };

  const openBooking = (trip) => {
    const seat = selectedSeats[trip.id] || trip.seats[0];
    setBooking({ trip, seat });
  };

  return (
    <>
      <div className="trips-wrap" id="trips">
        <div className="section">

          {/* Header */}
          <div className="reveal">
            <p className="section-eyebrow">Lake Victoria Routes</p>
            <div className="divider"/>
            <h2 className="section-title">Available <em className="gold-italic">Trips</em></h2>
            <p className="section-subtitle">
              Book your seat on our scheduled lake crossings between Homa Bay and Kisumu.
              Select a trip, pick your seat category, and confirm your booking instantly.
            </p>
          </div>

          {/* Route display bar */}
          <div className="trips-route-bar">
            <div className="trips-route-city">
              <div className="trips-route-city-name">Homa Bay</div>
              <div className="trips-route-city-label">Origin</div>
            </div>
            <div className="trips-route-arrow">
              <div className="trips-route-line"/>
              <div style={{fontSize:"1.1rem",color:"var(--gold)"}}>⛵</div>
              <div className="trips-route-line"/>
              <div className="trips-route-dist">Lake Victoria</div>
            </div>
            <div className="trips-route-city">
              <div className="trips-route-city-name">Kisumu</div>
              <div className="trips-route-city-label">Destination</div>
            </div>
          </div>

          {/* STEP 1 result — Loading */}
          {loading && (
            <div className="trips-loading">
              <div className="trips-spinner"/>
              <p style={{color:"var(--text-muted)",fontSize:"0.85rem"}}>Fetching available trips…</p>
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="trips-error">
              ⚠️ {error}
              <br/>
              <button className="btn-outline" style={{marginTop:"1rem",fontSize:"0.72rem"}}
                onClick={() => { setLoading(true); setError("");
                  fetchTrips().then(d=>{setTrips(d);setLoading(false);})
                              .catch(e=>{setError(e.message);setLoading(false);}); }}>
                Retry
              </button>
            </div>
          )}

          {/* STEP 2 — Display trips */}
          {!loading && !error && (
            <div className="trips-grid">
              {trips.map(trip => {
                const activeSeat = selectedSeats[trip.id] || trip.seats[0];
                return (
                  <div key={trip.id} className={`trip-card${booking?.trip.id===trip.id?" selected":""}`}>

                    {/* Trip header */}
                    <div className="trip-card-header">
                      <div>
                        {/* Transport type — shown automatically from API, not chosen by user */}
                        <div className="trip-transport-badge">
                          <span>{trip.transport_icon}</span>
                          <span>{trip.transport_type}</span>
                        </div>
                      </div>
                      <div className="trip-time-block">
                        <div className="trip-times">{trip.departure} → {trip.arrival}</div>
                        <div className="trip-duration">Duration: {trip.duration}</div>
                      </div>
                    </div>

                    {/* Trip body */}
                    <div className="trip-card-body">
                      <div className="trip-vessel">
                        🚢 &nbsp;{trip.vessel_name}
                      </div>

                      <div className="trip-avail">
                        <span className="trip-avail-dot"/>
                        {trip.available_seats} seats available
                      </div>

                      {/* STEP 2 — Seat categories from API */}
                      <div style={{fontSize:"0.6rem",letterSpacing:"0.15em",textTransform:"uppercase",color:"var(--text-muted)",marginBottom:"0.5rem"}}>
                        Select Seat Category
                      </div>
                      <div className="trip-seats">
                        {trip.seats.map(seat => (
                          <button
                            key={seat.position}
                            className={`trip-seat ${seat.position}${activeSeat.position===seat.position?" active":""}`}
                            onClick={() => selectSeat(trip.id, seat)}
                            title={seat.tier}
                          >
                            <div className="trip-seat-label">{seat.tier.split(" ")[0]}</div>
                            <div className="trip-seat-cat">{seat.category}</div>
                            <div className="trip-seat-price">
                              {seat.price.toLocaleString()}
                              <small> KSh</small>
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Selected seat summary */}
                      <div style={{
                        background:"rgba(201,168,76,0.06)",border:"1px solid rgba(201,168,76,0.12)",
                        borderRadius:"3px",padding:"0.6rem 0.85rem",marginBottom:"0.85rem",
                        display:"flex",justifyContent:"space-between",alignItems:"center",
                        fontSize:"0.75rem"
                      }}>
                        <span style={{color:"var(--text-muted)"}}>
                          {activeSeat.tier} &mdash; {activeSeat.category}
                        </span>
                        <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1rem",color:"var(--gold)"}}>
                          KSh {activeSeat.price.toLocaleString()}
                        </span>
                      </div>

                      {/* STEP 3 — Book button */}
                      <button
                        className="btn-primary"
                        style={{width:"100%",padding:"0.85rem"}}
                        onClick={() => openBooking(trip)}
                      >
                        Book This Trip
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </div>
      </div>

      {/* STEP 4 & 5 — Booking modal (renders outside section flow) */}
      {booking && (
        <BookingModal
          trip={booking.trip}
          seat={selectedSeats[booking.trip.id] || booking.trip.seats[0]}
          onClose={() => setBooking(null)}
        />
      )}
    </>
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
        <FormInput label="Full Name" id="name" placeholder="Your full name" value={form.name} onChange={upd("name")} error={errors.name} required/>
        <FormInput label="Email" id="email" type="email" placeholder="you@email.com" value={form.email} onChange={upd("email")} error={errors.email} required/>
      </div>
      <div className="form-row">
        <FormInput label="Phone" id="phone" type="tel" placeholder="+254 700 000 000" value={form.phone} onChange={upd("phone")} error={errors.phone} required/>
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

/* ─────────────────────────────────────────────────────────────
   MAIN APP — original structure unchanged, TripsSection added
   between WatersportsSection and FAQ
───────────────────────────────────────────────────────────── */
export default function MbitaYacht() {
  useReveal();
  return (
    <>
      <FontLink/>
      <Navbar/>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-bg" style={{ backgroundImage:`url(${heroImg})` }}/>
        <div className="hero-overlay"/>
        <div className="hero-content">
          <div className="hero-eyebrow">Homa Bay, Kenya</div>
          <h1 className="hero-title">Mbita <em>Yacht</em><br/>Experience</h1>
          <p className="hero-subtitle">Luxury Charters · Fine Dining · Lake Adventures</p>
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
              <h2 className="section-title">Unforgettable voyages on the Lake Victoria </h2>
              <p className="section-subtitle">From sunrise cruises to multi-day island expeditions, Mbita Yacht offers bespoke charter experiences on the azure waters of Mombasa's coastline. Our crew, curated F&B, and thrilling watersports ensure every moment is extraordinary.</p>
              <a href="#yachts" className="btn-primary">Explore Our Fleet</a>
            </div>
            <div className="services-grid">
              {[
                {i:"🌊",t:"Lake Excursions",d:"Snorkeling, Nile parch  watching, Wasini Island"},
                {i:"🥂",t:"Private Events",d:"Weddings, birthdays, corporate retreats"},
                {i:"🐠",t:"Fishing Charters",d:"Deep  fishing in Mbita Channel"},
                {i:"🌅",t:"Sunset Cruises",d:"Romantic Lake View sunsets"},
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

      {/* Existing sections — unchanged */}
      <YachtsSection/>
      <FBSection/>
      <WatersportsSection/>

      {/* ── NEW SECTION ── */}
      <TripsSection/>

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
                {i:"📍",l:"Location",        v:"Mbita, Homa Bay\nHoma Bay County, Kenya"},
                {i:"📞",l:"Phone / WhatsApp",v:"+254 700 429 164"},
                {i:"✉️",l:"Email",           v:"info@mbitayacht.co.ke"},
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
          <iframe title="Homa Bay" loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127639.5!2d34.1700!3d-0.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d4f3b0f4f6a6f5%3A0x8c2d7c6e8c9c1234!2sMbita%2C%20Homa%20Bay%20County%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000"
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
            <p className="footer-desc">Premier luxury yacht charters, fine dining & Lake adventures on Kenya's breathtaking Lake View. Since 2014.</p>
          </div>
          <div>
            <div className="footer-col-title">Quick Links</div>
            <ul className="footer-links">
              {[["Yachts","#yachts"],["F&B Packages","#fnb"],["Water Sports","#watersports"],["Trips","#trips"],["FAQ","#faq"],["Book Now","#contact"]].map(([l,h])=>(
                <li key={l}><a href={h}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <ul className="footer-links">
              <li><a href="tel:+254700429164">+254 700 429 164</a></li>
              <li><a href="mailto:info@mbitayacht.co.ke">info@mbitayacht.co.ke</a></li>
              <li><a href="#contact">Mbita, Homa Bay</a></li>
              <li style={{marginTop:"1rem"}}>
                <div className="footer-col-title" style={{marginBottom:"0.6rem"}}>Hours</div>
                <a href="#contact">Mon–Sun: 6:00 AM – 8:00 PM</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Mbita Yacht. All rights reserved.</span>
          <span>Crafted with <span style={{color:"var(--gold)"}}>♥</span> in Homa Bay, Kenya</span>
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
