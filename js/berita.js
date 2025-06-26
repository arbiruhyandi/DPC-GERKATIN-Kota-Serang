document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.toggle-berita-btn');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const currentItem = btn.closest('.berita-item');
      const fullContent = currentItem.querySelector('.berita-penuh');
      const isHidden = fullContent.classList.contains('hidden');

      document.querySelectorAll('.berita-penuh').forEach(function (item) {
        item.classList.add('hidden');
      });
      document.querySelectorAll('.toggle-berita-btn').forEach(function (b) {
        b.textContent = 'Baca Selengkapnya';
      });

      if (isHidden) {
        fullContent.classList.remove('hidden');
        btn.textContent = 'Tutup';
      }
    });
  });
});
