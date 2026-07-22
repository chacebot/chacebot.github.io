import { useState, useEffect, useRef } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const navRef = useRef<HTMLElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Track screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      // Close menu when switching to desktop
      if (window.innerWidth >= 992) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open (mobile only)
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      // Get scrollbar width before hiding overflow
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      // Prevent scroll and compensate for scrollbar to prevent layout shift
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0';
    };
  }, [isMenuOpen, isMobile]);

  // Expose the navbar's rendered height as a CSS variable so other sections
  // can size themselves to fit the remaining viewport (e.g. `calc(100vh - var(--navbar-height))`)
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const updateNavbarHeightVar = () => {
      document.documentElement.style.setProperty('--navbar-height', `${nav.offsetHeight}px`);
    };

    updateNavbarHeightVar();

    const resizeObserver = new ResizeObserver(updateNavbarHeightVar);
    resizeObserver.observe(nav);

    return () => resizeObserver.disconnect();
  }, [isMobile]);

  // Lock navbar height on mobile to prevent Chrome iOS expansion
  useEffect(() => {
    if (!navRef.current || !isMobile) return;

    const nav = navRef.current;
    let lockedHeight: number | null = null;

    const lockHeight = () => {
      if (!lockedHeight) {
        // Measure height including all padding
        const computedStyle = window.getComputedStyle(nav);
        const paddingTop = parseFloat(computedStyle.paddingTop);
        const paddingBottom = parseFloat(computedStyle.paddingBottom);
        const contentHeight = nav.scrollHeight - paddingTop - paddingBottom;
        lockedHeight = contentHeight + paddingTop + paddingBottom;
        nav.style.height = `${lockedHeight}px`;
        nav.style.minHeight = `${lockedHeight}px`;
        nav.style.maxHeight = `${lockedHeight}px`;
      }
    };

    // Lock height after initial render - give more time for layout
    const timeoutId = setTimeout(lockHeight, 200);

    // Prevent resize observer from changing height
    const resizeObserver = new ResizeObserver((entries) => {
      if (lockedHeight && nav.style.height !== `${lockedHeight}px`) {
        nav.style.height = `${lockedHeight}px`;
        nav.style.minHeight = `${lockedHeight}px`;
        nav.style.maxHeight = `${lockedHeight}px`;
      }
    });

    resizeObserver.observe(nav);

    return () => {
      clearTimeout(timeoutId);
      resizeObserver.disconnect();
      if (nav) {
        nav.style.height = '';
        nav.style.minHeight = '';
        nav.style.maxHeight = '';
      }
    };
  }, [isMobile]);

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: 'sticky',
          top: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1.5rem',
          paddingBottom: isMobile ? '1.5rem' : '1.5rem',
          minHeight: isMobile ? 'auto' : 'auto',
          zIndex: 10000,
          width: '100%',
          willChange: 'transform',
          flexShrink: 0,
          boxSizing: 'border-box',
        }}
        className="navbar-fixed-height"
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1400px',
            margin: '0 auto',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            minHeight: '1.5rem',
          }}
        >
          <div
            onClick={scrollToTop}
            style={{
              fontWeight: 400,
              fontSize: '0.875rem',
              color: '#ffffff',
              textDecoration: 'none',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              opacity: 0.9,
              cursor: 'pointer',
              lineHeight: '1.5',
              paddingTop: '0.25rem',
              paddingBottom: '0.25rem',
            }}
          >
            Chace Medeiros
          </div>

          {/* Desktop menu - horizontal items */}
          {!isMobile && (
            <div
              style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center',
              }}
            >
              <div
                onClick={() => scrollToSection('about')}
                style={{
                  fontWeight: 400,
                  padding: 0,
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  color: '#ffffff',
                  opacity: 0.7,
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.7';
                }}
              >
                About
              </div>
              <div
                onClick={() => scrollToSection('projects')}
                style={{
                  fontWeight: 400,
                  padding: 0,
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  color: '#ffffff',
                  opacity: 0.7,
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.7';
                }}
              >
                Projects
              </div>
              <div
                onClick={() => scrollToSection('contact')}
                style={{
                  fontWeight: 400,
                  padding: 0,
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  color: '#ffffff',
                  opacity: 0.7,
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.7';
                }}
              >
                Contact
              </div>
            </div>
          )}

          {/* Mobile menu - caret toggle */}
          {isMobile && (
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              style={{
                background: 'none',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                padding: 0,
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                opacity: 0.7,
                width: '20px',
                height: '20px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.7';
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transform: 'rotate(90deg)',
                }}
              >
                <path
                  d="M4 2L8 6L4 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </button>
          )}
        </div>
      </nav>

      {/* Full-screen menu overlay - mobile only */}
      {isMobile && (
        <div
          className="mobile-menu-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            backgroundColor: '#000000',
            zIndex: 9999,
            display: isMenuOpen ? 'flex' : 'none',
            flexDirection: 'column',
            transition: 'opacity 0.3s ease',
            opacity: isMenuOpen ? 1 : 0,
            pointerEvents: isMenuOpen ? 'auto' : 'none',
          }}
        >
          {/* Top bar with brand and close */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '2rem',
              width: '100%',
            }}
          >
            <div
              onClick={scrollToTop}
              style={{
                fontWeight: 400,
                fontSize: '0.875rem',
                color: '#ffffff',
                textDecoration: 'none',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              Chace Medeiros
            </div>
            <div
              onClick={toggleMenu}
              style={{
                fontWeight: 400,
                fontSize: '0.875rem',
                color: '#ffffff',
                textDecoration: 'none',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              Menu
            </div>
          </div>

          {/* Menu items - bottom left */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              padding: '2rem',
              paddingBottom: isMobile
                ? 'calc(2rem + env(safe-area-inset-bottom, 0px) + 50px)'
                : '2rem',
              gap: '3rem',
            }}
          >
            <div
              onClick={() => scrollToSection('about')}
              style={{
                fontWeight: 400,
                fontSize: 'clamp(2rem, 8vw, 6rem)',
                color: '#ffffff',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'opacity 0.3s ease',
                opacity: 0.9,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.9';
              }}
            >
              About
            </div>
            <div
              onClick={() => scrollToSection('projects')}
              style={{
                fontWeight: 400,
                fontSize: 'clamp(2rem, 8vw, 6rem)',
                color: '#ffffff',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'opacity 0.3s ease',
                opacity: 0.9,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.9';
              }}
            >
              Projects
            </div>
            <div
              onClick={() => scrollToSection('contact')}
              style={{
                fontWeight: 400,
                fontSize: 'clamp(2rem, 8vw, 6rem)',
                color: '#ffffff',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'opacity 0.3s ease',
                opacity: 0.9,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.9';
              }}
            >
              Contact
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { NavBar };
