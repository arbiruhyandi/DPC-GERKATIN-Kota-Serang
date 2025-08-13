// Daftar video dan caption
  const videos = [
    { src: "videos/1.mp4", caption: "DIRGAHAYU DPC GERKATIN KOTA SERANG K-11" },
    { src: "videos/2.mp4", caption: "Kegiatan Sosialisasi Pelatihan Bahasa Isyarat Masyarakat" },
    { src: "videos/3.mp4", caption: "Berbagi Takjil & Dhuafa" }
  ];

  let currentIndex = 0;

  const videoPlayer = document.getElementById("videoPlayer");
  const videoCaption = document.getElementById("videoCaption");

  function updateVideo() {
    videoPlayer.pause(); // Hentikan video
    videoPlayer.src = videos[currentIndex].src; // Ganti sumber video
    videoCaption.textContent = videos[currentIndex].caption; // Ganti caption
    videoPlayer.load(); // Reset video ke awal
  }

  function prevVideo() {
    currentIndex = (currentIndex - 1 + videos.length) % videos.length;
    updateVideo();
  }

  function nextVideo() {
    currentIndex = (currentIndex + 1) % videos.length;
    updateVideo();
  }