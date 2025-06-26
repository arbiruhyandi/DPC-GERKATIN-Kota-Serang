// Klik Video Javascript
  const videos = [
    { src: 'videos/1.mp4', caption: 'DIRGAHAYU DPC GERKATIN KOTA SERANG K-11' },
    { src: 'videos/2.mp4', caption: 'Belajar Bahasa Isyarat BISINDO' },
    { src: 'videos/3.mp4', caption: 'Workshop Kewirausahaan' }
  ];

  let currentIndex = 0;
  const videoPlayer = document.getElementById('videoPlayer');
  const videoCaption = document.getElementById('videoCaption');

  function updateVideo() {
    videoPlayer.querySelector('source').src = videos[currentIndex].src;
    videoCaption.textContent = videos[currentIndex].caption;
    videoPlayer.load(); // Reload video
  }

  function nextVideo() {
    if (currentIndex < videos.length - 1) {
      currentIndex++;
      updateVideo();
    }
  }

  function prevVideo() {
    if (currentIndex > 0) {
      currentIndex--;
      updateVideo();
    }
  }
