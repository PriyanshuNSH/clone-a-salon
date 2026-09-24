/**
 * CLONE A UNISEX SALON - INTERACTIVE JAVASCRIPT
 * -------------------------------------------------------------
 * Powers the interactive elements: mobile drawer, sticky header,
 * active scrollspy, booking modal, WhatsApp prefill, gallery lightbox,
 * back-to-top button, and salon owner proposal guide.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Current Year
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // 2. Sticky Header Scroll Effect
  const siteHeader = document.getElementById('siteHeader');
  const handleScroll = () => {
    if (window.scrollY > 30) {
      siteHeader.classList.add('is-scrolled');
    } else {
      siteHeader.classList.remove('is-scrolled');
    }

    // Back to top button visibility
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 3. Mobile Navigation Drawer
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerBackdrop = document.getElementById('mobileDrawerBackdrop');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  const openDrawer = () => {
    mobileDrawer.classList.add('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', openDrawer);
  }
  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener('click', closeDrawer);
  }
  if (mobileDrawerBackdrop) {
    mobileDrawerBackdrop.addEventListener('click', closeDrawer);
  }

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // 4. Smooth Scrolling with Active Nav Scrollspy
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  const updateActiveNav = () => {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // 5. Back to Top Smooth Scroll
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 6. Booking Modal Functionality
  const bookingModal = document.getElementById('bookingModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const openBookingBtns = document.querySelectorAll('.open-booking-modal-btn');
  const modalServiceSelect = document.getElementById('modalService');
  const modalBookingForm = document.getElementById('modalBookingForm');

  const openBookingModal = (serviceName = null) => {
    if (serviceName && modalServiceSelect) {
      // Find matching option or set closest
      let found = false;
      for (let option of modalServiceSelect.options) {
        if (option.value.toLowerCase().includes(serviceName.toLowerCase()) || serviceName.toLowerCase().includes(option.value.toLowerCase())) {
          option.selected = true;
          found = true;
          break;
        }
      }
      if (!found && modalServiceSelect.options.length > 0) {
        modalServiceSelect.selectedIndex = 0;
      }
    }
    bookingModal.classList.add('is-active');
    bookingModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus input
    setTimeout(() => {
      const nameInput = document.getElementById('modalCustomerName');
      if (nameInput) nameInput.focus();
    }, 150);
  };

  const closeBookingModal = () => {
    bookingModal.classList.remove('is-active');
    bookingModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openBookingBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-service') || 'General Appointment';
      // Close drawer if it was opened from mobile drawer
      closeDrawer();
      openBookingModal(service);
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeBookingModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeBookingModal);

  // Handle Modal Form Submission (Prefill WhatsApp)
  if (modalBookingForm) {
    modalBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const service = document.getElementById('modalService').value;
      const date = document.getElementById('modalDate').value || 'Flexible';
      const time = document.getElementById('modalTime').value;
      const name = document.getElementById('modalCustomerName').value || 'Customer';
      const notes = document.getElementById('modalNotes').value;

      let msg = `Hello Clone A Unisex Salon! I would like to book an appointment:\n\n`;
      msg += `👤 Name: ${name}\n`;
      msg += `✂️ Service: ${service}\n`;
      msg += `📅 Preferred Day: ${date}\n`;
      msg += `⏰ Preferred Time: ${time}\n`;
      if (notes.trim()) {
        msg += `📝 Notes/Queries: ${notes.trim()}\n`;
      }
      msg += `\n(Sent via Clone A Salon Website)`;

      const phone = (typeof SALON_CONFIG !== 'undefined' && SALON_CONFIG.contact && SALON_CONFIG.contact.whatsappNumber) 
                    ? SALON_CONFIG.contact.whatsappNumber 
                    : '918920186082';
      const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      closeBookingModal();
    });
  }

  // 7. Quick Enquiry Form in CTA Section
  const quickEnquiryForm = document.getElementById('quickEnquiryForm');
  if (quickEnquiryForm) {
    quickEnquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const service = document.getElementById('enquiryServiceSelect').value;
      const date = document.getElementById('enquiryDate').value;
      const time = document.getElementById('enquiryTime').value;
      const name = document.getElementById('enquiryCustomerName').value || 'Customer';

      let msg = `Hello Clone A Unisex Salon! I'm interested in an appointment enquiry:\n\n`;
      msg += `👤 Name: ${name}\n`;
      msg += `✂️ Service: ${service}\n`;
      msg += `📅 Day: ${date}\n`;
      msg += `⏰ Time: ${time}\n\n`;
      msg += `Please let me know the availability and package details.`;

      const phone = (typeof SALON_CONFIG !== 'undefined' && SALON_CONFIG.contact && SALON_CONFIG.contact.whatsappNumber) 
                    ? SALON_CONFIG.contact.whatsappNumber 
                    : '918920186082';
      const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // 7. Service Category Filtering
  const filterTabs = document.querySelectorAll('.service-filter-nav .filter-tab');
  const serviceCards = document.querySelectorAll('.service-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter') || 'all';

      // Update active state
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Filter cards
      serviceCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('is-filtered-out');
        } else {
          card.classList.add('is-filtered-out');
        }
      });
    });
  });

  // 8. Gallery Interactive Lightbox
  const galleryItems = document.querySelectorAll('.gallery-item');
  const galleryLightbox = document.getElementById('galleryLightbox');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');
  const lightboxContent = document.getElementById('lightboxContent');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');

  const openLightbox = (title, caption, id) => {
    lightboxTitle.textContent = title;
    lightboxDesc.textContent = caption;

    // Stylized luxury visual preview for lightbox
    lightboxContent.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding: 20px;">
        <div style="width: 70px; height: 70px; border-radius: 50%; border: 1.5px solid #C5A880; display:flex; align-items:center; justify-content:center; margin-bottom: 16px; box-shadow: 0 0 20px rgba(197, 168, 128, 0.2);">
          <span style="font-family:'Playfair Display', serif; font-size: 2rem; color: #C5A880;">C</span>
        </div>
        <h3 style="font-family:'Playfair Display', serif; font-size: 1.8rem; color: #FFFFFF; margin-bottom: 4px;">${title}</h3>
        <p style="font-size: 0.85rem; letter-spacing: 2px; text-transform:uppercase; color: #C5A880; font-weight: 600; margin-bottom: 16px;">Ambiance &amp; Service Slot</p>
        <div style="background: rgba(255, 255, 255, 0.08); border: 1px dashed rgba(197, 168, 128, 0.4); padding: 10px 18px; border-radius: 6px; font-size: 0.8rem; color: #DCD3C3; max-width: 360px;">
          📸 <strong>Owner Photo Area:</strong> Replaceable with high-res original photograph of Clone A Unisex Salon.
        </div>
      </div>
    `;

    galleryLightbox.classList.add('is-active');
    galleryLightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    galleryLightbox.classList.remove('is-active');
    galleryLightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  galleryItems.forEach(item => {
    const handleTrigger = () => {
      const title = item.getAttribute('data-title') || 'Salon Experience';
      const caption = item.getAttribute('data-caption') || 'Salon Ambiance Placeholder';
      const id = item.getAttribute('data-gallery-id') || 'interior';
      openLightbox(title, caption, id);
    };

    item.addEventListener('click', handleTrigger);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleTrigger();
      }
    });
  });

  if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  // 9. Salon Owner Proposal Pitch Guide Modal
  const openPitchGuideBtn = document.getElementById('openPitchGuideBtn');
  const pitchGuideModal = document.getElementById('pitchGuideModal');
  const pitchBackdrop = document.getElementById('pitchBackdrop');
  const closePitchBtn = document.getElementById('closePitchBtn');
  const pitchGotItBtn = document.getElementById('pitchGotItBtn');

  const openPitchGuide = () => {
    pitchGuideModal.classList.add('is-active');
    pitchGuideModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closePitchGuide = () => {
    pitchGuideModal.classList.remove('is-active');
    pitchGuideModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (openPitchGuideBtn) openPitchGuideBtn.addEventListener('click', openPitchGuide);
  if (closePitchBtn) closePitchBtn.addEventListener('click', closePitchGuide);
  if (pitchGotItBtn) pitchGotItBtn.addEventListener('click', closePitchGuide);
  if (pitchBackdrop) pitchBackdrop.addEventListener('click', closePitchGuide);

  // 10. Demo Top Bar Dismissal
  const dismissDemoBarBtn = document.getElementById('dismissDemoBarBtn');
  const demoTopBar = document.getElementById('demoTopBar');
  if (dismissDemoBarBtn && demoTopBar) {
    dismissDemoBarBtn.addEventListener('click', () => {
      demoTopBar.classList.add('is-hidden');
    });
  }

  // 11. Global Keyboard Listener (Escape key closes open dialogs)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileDrawer && mobileDrawer.classList.contains('is-open')) closeDrawer();
      if (bookingModal && bookingModal.classList.contains('is-active')) closeBookingModal();
      if (galleryLightbox && galleryLightbox.classList.contains('is-active')) closeLightbox();
      if (pitchGuideModal && pitchGuideModal.classList.contains('is-active')) closePitchGuide();
    }
  });

  // Console Welcome Guide for Developers & Owner Reviewers
  console.log(
    '%c CLONE A UNISEX SALON — WEBSITE DEMO %c\n' +
    'Location: Jagat Farm / Gamma 1, Greater Noida\n' +
    'Public Contact: 089201 86082\n' +
    'Configuration: js/config.js\n\n' +
    'To update verified business details or images, edit js/config.js or HTML directly.',
    'background: #181716; color: #C5A880; font-size: 14px; font-weight: bold; padding: 6px 10px; border-radius: 4px;',
    'color: #57524C; font-size: 12px;'
  );
});
