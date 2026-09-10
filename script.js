/* =====================================================================
   線上預約系統網址
   ---------------------------------------------------------------------
   realtor-ai-booking 部署完成後，把網址（含 /card/booking）填在這裡，
   「線上預約看屋」按鈕就會自動出現在預約區塊。
   留空 = 按鈕不顯示，避免產生死連結。
   例：const BOOKING_URL = 'https://terry-booking.vercel.app/card/booking';
   ===================================================================== */
const BOOKING_URL = 'https://terry-booking.vercel.app/card/booking';
/* ===================================================================== */

(function () {
  'use strict';

  /* --- 頁尾年份 --- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* --- 線上預約按鈕 --- */
  const bookingBtn = document.getElementById('onlineBookingBtn');
  if (bookingBtn && BOOKING_URL) {
    bookingBtn.href = BOOKING_URL;
    bookingBtn.target = '_blank';
    bookingBtn.rel = 'noopener';
    bookingBtn.hidden = false;
  }

  /* --- 手機選單 --- */
  const header = document.getElementById('siteHeader');
  const navToggle = document.getElementById('navToggle');

  if (header && navToggle) {
    navToggle.addEventListener('click', function () {
      const open = header.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? '關閉選單' : '開啟選單');
    });

    document.querySelectorAll('.main-nav a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });

    document.addEventListener('click', function (e) {
      if (header.classList.contains('nav-open') && !header.contains(e.target)) closeNav();
    });
  }

  function closeNav() {
    if (!header || !header.classList.contains('nav-open')) return;
    header.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', '開啟選單');
  }

  /* --- 捲動時的 header 陰影 --- */
  if (header) {
    const onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* --- 複製 LINE 搜尋號碼 --- */
  const copyBtn = document.getElementById('copyLineBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      const value = copyBtn.dataset.copy || '';
      const done = function () {
        const original = copyBtn.textContent;
        copyBtn.textContent = '已複製';
        copyBtn.disabled = true;
        setTimeout(function () {
          copyBtn.textContent = original;
          copyBtn.disabled = false;
        }, 1800);
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(value).then(done).catch(fallback);
      } else {
        fallback();
      }

      function fallback() {
        // file:// 或舊瀏覽器沒有 clipboard API，改用選取方式
        const range = document.createRange();
        const code = document.getElementById('lineId');
        if (!code) return;
        range.selectNodeContents(code);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        try {
          document.execCommand('copy');
          done();
        } catch (err) {
          /* 複製失敗就讓號碼保持選取，使用者可以手動複製 */
        }
      }
    });
  }
})();
