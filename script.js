// ===== 線上預約系統網址 =====
// 預約系統部署完成後，把網址填在這裡（要包含 /card/booking），
// 「線上預約看屋」按鈕就會自動出現在預約區塊。
// 例如：const BOOKING_URL = 'https://terry-booking.vercel.app/card/booking';
const BOOKING_URL = '';
// ============================

document.getElementById('year').textContent = new Date().getFullYear();

const onlineBookingBtn = document.getElementById('onlineBookingBtn');
const phoneBookingBtn = document.getElementById('phoneBookingBtn');

if (BOOKING_URL) {
  onlineBookingBtn.href = BOOKING_URL;
  onlineBookingBtn.hidden = false;
  // 有線上預約時，電話改成次要按鈕，避免兩顆同色搶焦點
  phoneBookingBtn.classList.replace('btn-primary', 'btn-secondary');
}

const header = document.getElementById('siteHeader');
const navToggle = document.getElementById('navToggle');

navToggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});
