'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import { supabase } from '@/lib/supabase';

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const [mobileDropdowns, setMobileDropdowns] = useState({
    about: false, wisdom: false, programs: false, involved: false,
  });

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    // await supabase.auth.signOut();
    setIsMobileMenuOpen(false);
    router.push('/');
  };

  const toggleMobileDropdown = (key) => {
    setMobileDropdowns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <style>{`
        /* ────────────────────────────────────
           NAV BASE
        ──────────────────────────────────── */
        #main-nav {
          position: fixed;
          top: 0; left: 0; width: 100%;
          z-index: 1000;
          padding: 0 5%;
          height: 68px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          border-bottom: 2px solid rgba(255,214,0,0);
          transform: translateY(-115%);
          transition:
            transform 1s cubic-bezier(0.16,1,0.3,1),
            height 0.4s,
            border-color 0.4s,
            box-shadow 0.4s;
          box-sizing: border-box;
        }
        #main-nav.vis { transform: translateY(0); }
        #main-nav.sc  {
          height: 58px;
          border-color: rgba(255,214,0,0.35);
          box-shadow: 0 8px 48px rgba(0,0,0,0.07);
        }

        /* ── LOGO ── */
        .n-logo {
          display: flex; align-items: center;
          text-decoration: none;
          height: 48px; flex-shrink: 0;
          transition: opacity 0.3s, transform 0.3s;
        }
        .n-logo:hover { opacity: 0.88; transform: scale(1.02); }
        .n-logo img {
          height: 100%; width: auto;
          max-width: 200px; object-fit: contain;
          display: block;
        }
        #main-nav.sc .n-logo { height: 38px; }

        /* ────────────────────────────────────
           DESKTOP LINKS
        ──────────────────────────────────── */
        .n-links {
          display: flex; gap: 8px; list-style: none;
          align-items: center; margin: 0 0 0 36px; padding: 0;
        }
        .nav-item { position: relative; list-style: none; }

        .nav-link, a.nav-link {
          display: inline-flex; align-items: center; gap: 4px;
          text-decoration: none; color: #1A1A1A;
          font-size: 0.74rem; text-transform: uppercase;
          letter-spacing: 1.2px; font-weight: 700;
          padding: 8px 11px; border-radius: 6px;
          background: none; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: color 0.25s, background 0.25s;
          white-space: nowrap; line-height: 1;
        }
        .nav-link:hover, a.nav-link:hover {
          color: #B30000;
          background: rgba(255,214,0,0.12);
        }
        .nav-arrow {
          font-size: 8px; opacity: 0.5;
          transition: transform 0.3s; display: inline-block; line-height: 1;
        }
        .nav-item:hover .nav-arrow { transform: rotate(180deg); }

        /* ────────────────────────────────────
           DROPDOWN — hidden, shows on hover
        ──────────────────────────────────── */
        .desktop-dropdown {
          position: absolute;
          top: calc(100% + 4px);
          left: 50%;
          transform: translateX(-50%) translateY(-6px);
          background: #fff;
          border: 1.5px solid rgba(255,214,0,0.3);
          border-radius: 14px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.13);
          padding: 8px;
          min-width: 210px;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s;
          z-index: 200;
        }
        /* Invisible bridge to catch mouse tracking over the gap */
        .desktop-dropdown::before {
          content: "";
          position: absolute;
          top: -16px;
          left: 0;
          right: 0;
          height: 16px;
        }
        .nav-item:hover > .desktop-dropdown,
        .nav-item:focus-within > .desktop-dropdown {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }
        .desktop-dropdown .dropdown-link {
          display: block; padding: 9px 16px;
          text-decoration: none; color: #1A1A1A;
          font-size: 0.8rem; font-weight: 500;
          border-radius: 8px; white-space: nowrap;
          transition: background 0.18s, color 0.18s;
          font-family: 'DM Sans', sans-serif; letter-spacing: 0.3px;
        }
        .desktop-dropdown .dropdown-link:hover {
          background: rgba(255,214,0,0.18); color: #B30000;
        }

        /* MEGA MENU */
        .mega-menu {
          min-width: 330px;
          display: flex; gap: 0; padding: 14px 10px;
        }
        .mega-col { flex: 1; }
        .mega-col .col-label {
          font-size: 0.63rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 2px;
          padding: 4px 12px 10px; display: block;
        }
        .mega-col.beginner .col-label { color: #E09A00; }
        .mega-col.advanced .col-label { color: #7A0000; }
        .mega-divider {
          width: 1px; background: rgba(255,214,0,0.3);
          margin: 4px 6px; flex-shrink: 0;
        }

        /* ── AUTH BUTTONS ── */
        .btn-login {
          display: inline-flex; align-items: center;
          padding: 9px 20px;
          background: linear-gradient(135deg,#FFD600 0%,#FF6F00 60%,#B30000 100%);
          color: #fff !important; text-decoration: none;
          font-size: 0.73rem; font-weight: 700;
          letter-spacing: 1.2px; text-transform: uppercase;
          border-radius: 6px;
          box-shadow: 0 4px 18px rgba(179,0,0,0.25);
          transition: all 0.3s;
          font-family: 'DM Sans', sans-serif; white-space: nowrap;
        }
        .btn-login:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(179,0,0,0.35); }
        .btn-logout {
          padding: 8px 16px; background: transparent;
          border: 1.5px solid rgba(179,0,0,0.3); color: #B30000;
          border-radius: 6px; font-size: 0.73rem; font-weight: 600;
          letter-spacing: 1px; text-transform: uppercase;
          cursor: pointer; font-family: 'DM Sans', sans-serif;
          transition: all 0.25s; white-space: nowrap;
        }
        .btn-logout:hover { background: rgba(179,0,0,0.06); border-color: #B30000; }

        /* ────────────────────────────────────
           HAMBURGER FAB
        ──────────────────────────────────── */
        .hamburger-fab {
          display: none;
          position: fixed; bottom: 24px; right: 20px;
          background: linear-gradient(135deg,#FFD600 0%,#FF6F00 60%,#B30000 100%);
          color: #fff; border: none; border-radius: 50%;
          width: 56px; height: 56px;
          font-size: 1.3rem; line-height: 1;
          box-shadow: 0 6px 24px rgba(179,0,0,0.45);
          cursor: pointer; z-index: 1001;
          align-items: center; justify-content: center;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .hamburger-fab:active { transform: scale(0.9); }

        /* ────────────────────────────────────
           MOBILE BOTTOM SHEET
        ──────────────────────────────────── */
        .mob-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.78);
          backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
          z-index: 9998;
          display: flex; align-items: flex-end; justify-content: center;
          padding-bottom: 8px;
          opacity: 0; visibility: hidden; pointer-events: none;
          transition: opacity 0.3s ease, visibility 0.3s;
        }
        .mob-overlay.open { opacity: 1; visibility: visible; pointer-events: auto; }

        .mob-sheet {
          background: #fff;
          width: 100%; max-width: 480px;
          border-radius: 24px 24px 16px 16px;
          padding: 0 16px 20px;
          max-height: 88vh; overflow-y: auto;
          overscroll-behavior: contain;
          box-shadow: 0 -24px 80px rgba(0,0,0,0.35);
          transform: translateY(40px);
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .mob-overlay.open .mob-sheet { transform: translateY(0); }

        .mob-handle {
          width: 40px; height: 4px; border-radius: 2px;
          background: rgba(0,0,0,0.12);
          margin: 14px auto 18px; display: block;
        }
        .mob-logo-row {
          display: flex; justify-content: center;
          padding-bottom: 14px;
          border-bottom: 1.5px solid rgba(255,214,0,0.25);
          margin-bottom: 12px;
        }
        .mob-logo-row img { height: 44px; width: auto; object-fit: contain; }

        .mob-acc-btn {
          width: 100%; display: flex;
          justify-content: space-between; align-items: center;
          padding: 12px 16px;
          background: rgba(255,249,230,0.8);
          border: 1.5px solid rgba(255,214,0,0.22);
          border-radius: 10px; margin-bottom: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 1.5px;
          color: #1A1A1A; cursor: pointer; text-align: left;
          transition: background 0.2s, border-color 0.2s;
        }
        .mob-acc-btn:hover { background: rgba(255,214,0,0.2); border-color: rgba(255,214,0,0.5); }
        .mob-acc-btn.active { background: rgba(255,214,0,0.15); border-color: rgba(255,214,0,0.5); }
        .mob-acc-arrow { font-size: 0.65rem; opacity: 0.45; transition: transform 0.3s; }
        .mob-acc-btn.active .mob-acc-arrow { transform: rotate(180deg); opacity: 0.8; }

        .mob-acc-children {
          display: flex; flex-direction: column; gap: 2px;
          padding: 2px 8px 10px;
        }
        .mob-acc-child {
          display: block; padding: 9px 14px;
          text-decoration: none; color: #333;
          font-size: 0.82rem; font-family: 'DM Sans', sans-serif;
          border-radius: 8px; transition: background 0.18s, color 0.18s;
        }
        .mob-acc-child:hover { background: rgba(255,214,0,0.15); color: #B30000; }
        .mob-col-label {
          font-size: 0.63rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 2px;
          padding: 8px 14px 4px; display: block;
        }
        .mob-col-label.beginner { color: #E09A00; }
        .mob-col-label.advanced { color: #7A0000; }

        .mob-plain-link {
          display: block; width: 100%; padding: 12px 16px;
          text-decoration: none;
          background: rgba(255,249,230,0.8);
          border: 1.5px solid rgba(255,214,0,0.22);
          border-radius: 10px; margin-bottom: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 1.5px;
          color: #1A1A1A; transition: background 0.2s;
        }
        .mob-plain-link:hover { background: rgba(255,214,0,0.2); }

        .mob-auth-row { padding-top: 10px; border-top: 1.5px solid rgba(255,214,0,0.2); margin-top: 6px; }
        .mob-btn-fire {
          display: block; width: 100%; padding: 14px; margin-bottom: 8px;
          background: linear-gradient(135deg,#FFD600 0%,#FF6F00 60%,#B30000 100%);
          color: #fff; text-decoration: none; text-align: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          border-radius: 10px;
          box-shadow: 0 4px 18px rgba(179,0,0,0.25);
          border: none; cursor: pointer;
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .mob-btn-fire:hover { box-shadow: 0 8px 28px rgba(179,0,0,0.35); transform: translateY(-1px); }
        .mob-btn-outline {
          display: block; width: 100%; padding: 12px;
          background: transparent;
          border: 1.5px solid rgba(179,0,0,0.3); color: #B30000;
          text-align: center; font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem; font-weight: 600;
          letter-spacing: 1.2px; text-transform: uppercase;
          border-radius: 10px; cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }
        .mob-btn-outline:hover { background: rgba(179,0,0,0.05); border-color: #B30000; }

        .mob-close-row {
          display: flex; justify-content: space-between; align-items: center;
          padding-top: 14px; border-top: 1.5px solid rgba(0,0,0,0.06); margin-top: 10px;
        }
        .mob-close-btn {
          border: 1.5px solid rgba(179,0,0,0.3); color: #B30000;
          background: transparent; padding: 8px 20px;
          border-radius: 8px; font-size: 0.75rem;
          font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
          cursor: pointer; font-family: 'DM Sans', sans-serif;
          transition: background 0.2s;
        }
        .mob-close-btn:hover { background: rgba(179,0,0,0.05); }
        .mob-brand-tag {
          font-family: 'Playfair Display', serif;
          font-size: 0.85rem; font-weight: 700; color: #1A1A1A;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .n-links { display: none !important; }
          .hamburger-fab { display: flex !important; }
        }
        @media (max-width: 480px) {
          #main-nav { padding: 0 4%; }
        }
      `}</style>

      {/* ─── DESKTOP NAV ─── */}
      <nav id="main-nav" className={`${isMounted ? 'vis' : ''} ${isScrolled ? 'sc' : ''}`}>

        <Link href="/" className="n-logo">
          <img
            src="/suntohumanlogopic.png"
            alt="Sun To Human Foundation"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling.style.display = 'inline';
            }}
          />
          <span style={{ display: 'none', fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: '#0A0A0A' }}>
            PARAM AALAY
          </span>
        </Link>

        <ul className="n-links">

          {/* ABOUT */}
          <li className="nav-item">
            <span className="nav-link">About <span className="nav-arrow">▼</span></span>
            <div className="desktop-dropdown">
              <Link href="/about/pujya-param-aalay" className="dropdown-link">Pujya Param Aalay Ji</Link>
              <Link href="/about/foundation" className="dropdown-link">Sun to Human Foundation</Link>
              <Link href="/about/retreat-centre" className="dropdown-link">Retreat Centre</Link>
              <Link href="/about/param-mitras" className="dropdown-link">Param Mitras</Link>
              <Link href="/about/testimonials" className="dropdown-link">Testimonials</Link>
              <Link href="/about/media-coverage" className="dropdown-link">Media Coverage</Link>
            </div>
          </li>

          {/* WISDOM */}
          <li className="nav-item">
            <span className="nav-link">Wisdom <span className="nav-arrow">▼</span></span>
            <div className="desktop-dropdown">
              <Link href="/wisdom/videos" className="dropdown-link">Videos</Link>
              <Link href="/wisdom/audios" className="dropdown-link">Audios</Link>
              <Link href="/wisdom/books" className="dropdown-link">Books</Link>
              <Link href="/wisdom/articles" className="dropdown-link">Articles</Link>
            </div>
          </li>

          {/* GALLERY */}
          <li className="nav-item">
            <Link href="/gallery" className="nav-link">Gallery</Link>
          </li>

          {/* PROGRAMS */}
          <li className="nav-item">
            <span className="nav-link">Programs <span className="nav-arrow">▼</span></span>
            <div className="desktop-dropdown mega-menu">

              {/* Beginner Column */}
              <div className="mega-col beginner">
                <span className="col-label">Beginner</span>
                <Link href="/programs/city-camps" className="dropdown-link">Beginner City Camps</Link>
                <Link href="/programs/home-journey" className="dropdown-link">Home Journey</Link>
                <Link href="/programs/demo-workshops" className="dropdown-link">Demo Workshops</Link>
              </div>

              <div className="mega-divider" />

              {/* Advanced Column */}
              <div className="mega-col advanced">
                <span className="col-label">Advanced</span>
                <Link href="/programs/urja-shivir" className="dropdown-link">5 Days Urja Shivir</Link>
                <Link href="/programs/navratri-shivir" className="dropdown-link">11 Days Param Navratri</Link>
                <Link href="/programs/cosmic-vision" className="dropdown-link">18 Days Cosmic Vision</Link>
                <Link href="/programs/savan-sadhana" className="dropdown-link">11 Days Savan Sadhna</Link>
              </div>

              <div className="mega-divider" />

              {/* Events Column */}
              <div className="mega-col advanced">
                <span className="col-label">Events</span>
                <Link href="/events/swadiksha" className="dropdown-link">Swadiksha</Link>
                <Link href="/events/param-utsav" className="dropdown-link">Param Utsav</Link>
              </div>

            </div>
          </li>
          {/* EVENTS & TECHNIQUES */}
          <li className="nav-item"><Link href="/techniques" className="nav-link">Techniques</Link></li>

          {/* GET INVOLVED */}
          <li className="nav-item">
            <span className="nav-link">Get Involved <span className="nav-arrow">▼</span></span>
            <div className="desktop-dropdown">
              <Link href="/involved/campaign" className="dropdown-link">Join Us in Campaign</Link>
              <Link href="/involved/full-time-sadhak" className="dropdown-link">Become a Full-Time Sadhak</Link>
              <Link href="/involved/param-mitra" className="dropdown-link">Become a Param Mitra</Link>
              <Link href="/involved/volunteer-camps" className="dropdown-link">Volunteer in City Camps</Link>
              <Link href="/involved/volunteer-residential" className="dropdown-link">Volunteer at Residential</Link>
              <Link href="/involved/remote-volunteering" className="dropdown-link">Remote Volunteering</Link>
            </div>
          </li>

          {/* AUTH */}
          <li style={{ marginLeft: '6px' }}>
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Link href="/dashboard" className="nav-link" style={{ color: '#7A0000' }}>Dashboard</Link>
                <button onClick={handleLogout} className="btn-logout">Logout</button>
              </div>
            ) : (
              <Link href="/login" className="btn-login">Login</Link>
            )}
          </li>

        </ul>
      </nav>

      {/* ─── MOBILE FAB ─── */}
      <button
        className="hamburger-fab"
        onClick={() => setIsMobileMenuOpen(true)}
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* ─── MOBILE BOTTOM SHEET ─── */}
      <div
        className={`mob-overlay${isMobileMenuOpen ? ' open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div className="mob-sheet" onClick={(e) => e.stopPropagation()}>

          <span className="mob-handle" />

          <div className="mob-logo-row">
            <img src="/suntohumanlogopic.png" alt="Sun To Human" />
          </div>

          {/* HOME */}
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="mob-plain-link">
            🏠&nbsp; Home
          </Link>

          {/* ABOUT */}
          <button
            className={`mob-acc-btn${mobileDropdowns.about ? ' active' : ''}`}
            onClick={() => toggleMobileDropdown('about')}
          >
            About <span className="mob-acc-arrow">▼</span>
          </button>
          {mobileDropdowns.about && (
            <div className="mob-acc-children">
              <Link href="/about/pujya-param-aalay" onClick={() => setIsMobileMenuOpen(false)} className="mob-acc-child">→ Pujya Param Aalay Ji</Link>
              <Link href="/about/foundation" onClick={() => setIsMobileMenuOpen(false)} className="mob-acc-child">→ Sun to Human Foundation</Link>
              <Link href="/about/retreat-centre" onClick={() => setIsMobileMenuOpen(false)} className="mob-acc-child">→ Retreat Centre</Link>
              <Link href="/about/param-mitras" onClick={() => setIsMobileMenuOpen(false)} className="mob-acc-child">→ Param Mitras</Link>
              <Link href="/about/testimonials" onClick={() => setIsMobileMenuOpen(false)} className="mob-acc-child">→ Testimonials</Link>
              <Link href="/about/media-coverage" onClick={() => setIsMobileMenuOpen(false)} className="mob-acc-child">→ Media Coverage</Link>
            </div>
          )}

          {/* WISDOM */}
          <button
            className={`mob-acc-btn${mobileDropdowns.wisdom ? ' active' : ''}`}
            onClick={() => toggleMobileDropdown('wisdom')}
          >
            Wisdom <span className="mob-acc-arrow">▼</span>
          </button>
          {mobileDropdowns.wisdom && (
            <div className="mob-acc-children">
              <Link href="/wisdom/videos" onClick={() => setIsMobileMenuOpen(false)} className="mob-acc-child">→ Videos</Link>
              <Link href="/wisdom/audios" onClick={() => setIsMobileMenuOpen(false)} className="mob-acc-child">→ Audios</Link>
              <Link href="/wisdom/books" onClick={() => setIsMobileMenuOpen(false)} className="mob-acc-child">→ Books</Link>
              <Link href="/wisdom/articles" onClick={() => setIsMobileMenuOpen(false)} className="mob-acc-child">→ Articles</Link>
            </div>
          )}

          {/* GALLERY */}
          <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="mob-plain-link">
            🖼️&nbsp; Gallery
          </Link>

          {/* PROGRAMS */}
          <button
            className={`mob-acc-btn${mobileDropdowns.programs ? ' active' : ''}`}
            onClick={() => toggleMobileDropdown('programs')}
          >
            Programs <span className="mob-acc-arrow">▼</span>
          </button>
          {mobileDropdowns.programs && (
            <div className="mob-acc-children">
              <span className="mob-col-label beginner">Beginner</span>
              <Link href="/programs/city-camps" onClick={() => setIsMobileMenuOpen(false)} className="mob-acc-child">→ Beginner City Camps</Link>
              <Link href="/programs/home-journey" onClick={() => setIsMobileMenuOpen(false)} className="mob-acc-child">→ Home Journey</Link>
              <Link href="/programs/demo-workshops" onClick={() => setIsMobileMenuOpen(false)} className="mob-acc-child">→ Demo Workshops</Link>
              <span className="mob-col-label advanced" style={{ marginTop: '6px' }}>Advanced</span>
              <Link href="/programs/urja-shivir" onClick={() => setIsMobileMenuOpen(false)} className="mob-acc-child">→ 5 Days Urja Shivir</Link>
              <Link href="/programs/navratri-shivir" onClick={() => setIsMobileMenuOpen(false)} className="mob-acc-child">→ 11 Days Param Navratri</Link>
              <Link href="/programs/cosmic-vision" onClick={() => setIsMobileMenuOpen(false)} className="mob-acc-child">→ 18 Days Cosmic Vision</Link>
              <Link href="/programs/savan-sadhana" onClick={() => setIsMobileMenuOpen(false)} className="mob-acc-child">→ 11 Days Savan Sadhna</Link>
            </div>
          )}

          {/* EVENTS & TECHNIQUES */}
          <Link href="/events/swadiksha" onClick={() => setIsMobileMenuOpen(false)} className="mob-plain-link">
            ✨&nbsp; Swadiksha
          </Link>
          <Link href="/events/param-utsav" onClick={() => setIsMobileMenuOpen(false)} className="mob-plain-link">
            🎉&nbsp; Param Utsav
          </Link>
          <Link href="/techniques" onClick={() => setIsMobileMenuOpen(false)} className="mob-plain-link">
            🔵&nbsp; Techniques
          </Link>

          {/* GET INVOLVED */}
          <button
            className={`mob-acc-btn${mobileDropdowns.involved ? ' active' : ''}`}
            onClick={() => toggleMobileDropdown('involved')}
          >
            Get Involved <span className="mob-acc-arrow">▼</span>
          </button>
          {mobileDropdowns.involved && (
            <div className="mob-acc-children">
              <Link href="/involved/campaign" onClick={() => setIsMobileMenuOpen(false)} className="mob-acc-child">→ Join Us in Campaign</Link>
              <Link href="/involved/full-time-sadhak" onClick={() => setIsMobileMenuOpen(false)} className="mob-acc-child">→ Become a Full-Time Sadhak</Link>
              <Link href="/involved/param-mitra" onClick={() => setIsMobileMenuOpen(false)} className="mob-acc-child">→ Become a Param Mitra</Link>
              <Link href="/involved/volunteer-camps" onClick={() => setIsMobileMenuOpen(false)} className="mob-acc-child">→ Volunteer in City Camps</Link>
              <Link href="/involved/volunteer-residential" onClick={() => setIsMobileMenuOpen(false)} className="mob-acc-child">→ Volunteer at Residential</Link>
              <Link href="/involved/remote-volunteering" onClick={() => setIsMobileMenuOpen(false)} className="mob-acc-child">→ Remote Volunteering</Link>
            </div>
          )}

          {/* AUTH */}
          <div className="mob-auth-row">
            {user ? (
              <>
                <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="mob-btn-fire">
                  My Dashboard
                </Link>
                <button onClick={handleLogout} className="mob-btn-outline">Logout</button>
              </>
            ) : (
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="mob-btn-fire">
                Login / Register
              </Link>
            )}
          </div>

          {/* Footer row */}
          <div className="mob-close-row">
            <button className="mob-close-btn" onClick={() => setIsMobileMenuOpen(false)}>✕ Close</button>
            <span className="mob-brand-tag">Param Aalay</span>
          </div>

        </div>
      </div>
    </>
  );
}