import { useEffect } from "react";
import { FaPlay, FaPause, FaExpand, FaFire } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import VSL from "../assets/VSL.mp4";

const VideoSection = () => {
  useEffect(() => {
    const video = document.getElementById("product-vsl") as HTMLVideoElement;
    const overlay = document.getElementById(
      "initial-overlay"
    ) as HTMLDivElement;
    const initialBtn = document.getElementById(
      "initial-play-btn"
    ) as HTMLButtonElement;
    const controls = document.getElementById(
      "custom-controls"
    ) as HTMLDivElement;
    const playPause = document.getElementById(
      "play-pause-btn"
    ) as HTMLButtonElement;
    const progressFilled = document.getElementById(
      "progress-filled"
    ) as HTMLDivElement;
    const progressHandle = document.getElementById(
      "progress-handle"
    ) as HTMLDivElement;
    const progressContainer = document.getElementById(
      "progress-bar-container"
    ) as HTMLDivElement;
    const timeDisplay = document.getElementById(
      "time-display"
    ) as HTMLSpanElement;

    const muteBtn = document.getElementById("mute-btn") as HTMLButtonElement;
    const volumeSlider = document.getElementById("volume-slider") as HTMLInputElement;
    const volumeIcon = document.getElementById("volume-icon") as HTMLElement;
    const fullscreenBtn = document.getElementById("fullscreen-btn") as HTMLButtonElement;
    const playerContainer = document.getElementById("custom-player-container") as HTMLDivElement;
    const videoPauseOverlay = document.getElementById("video-pause-overlay") as HTMLDivElement;
    const pausePlayBtn = document.getElementById("pause-play-btn") as HTMLButtonElement;
    let previousVolume = 1; // Guarda o volume anterior ao mutar

    if (!video) return;

    // ===== FORMATTER =====
    const formatTime = (seconds: number) => {
      if (!seconds || isNaN(seconds)) return "0:00";
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    // ===== FUNÇÃO PARA ATUALIZAR SLIDER VISUAL =====
    const updateSliderBackground = () => {
      if (!volumeSlider) return;
      const value = parseFloat(volumeSlider.value);
      const percentage = value * 100;
      volumeSlider.style.background = `linear-gradient(to right, #6366f1 0%, #6366f1 ${percentage}%, #475569 ${percentage}%, #475569 100%)`;
    };

    // ===== FUNÇÃO PARA ATUALIZAR ÍCONE DE VOLUME =====
    const updateVolumeIcon = () => {
      if (!volumeIcon) return;
      
      if (video.muted || video.volume === 0) {
        volumeIcon.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"></path></svg>';
        if (volumeSlider) {
          volumeSlider.value = "0";
          updateSliderBackground();
        }
      } else if (video.volume < 0.5) {
        volumeIcon.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"></path></svg>';
      } else {
        volumeIcon.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"></path></svg>';
      }
    };

    // ===== CONTROLE DE VOLUME =====
    const handleVolumeChange = () => {
      if (volumeSlider) {
        const newVolume = parseFloat(volumeSlider.value);
        video.volume = newVolume;
        video.muted = false;
        previousVolume = newVolume > 0 ? newVolume : previousVolume; // Salva apenas se maior que 0
        updateSliderBackground(); // Atualiza visual em tempo real
        updateVolumeIcon();
      }
    };

    const handleMuteToggle = () => {
      if (video.muted) {
        // Desmutando: restaura o volume anterior
        video.muted = false;
        video.volume = previousVolume;
        if (volumeSlider) {
          volumeSlider.value = previousVolume.toString();
          updateSliderBackground();
        }
      } else {
        // Mutando: salva o volume atual
        previousVolume = video.volume > 0 ? video.volume : 1;
        video.muted = true;
      }
      updateVolumeIcon();
    };

    if (volumeSlider) {
      volumeSlider.addEventListener("input", handleVolumeChange);
    }

    if (muteBtn) {
      muteBtn.addEventListener("click", handleMuteToggle);
    }

    // ===== FULLSCREEN =====
    const handleFullscreen = () => {
      if (!document.fullscreenElement) {
        // Entra em tela cheia
        if (playerContainer.requestFullscreen) {
          playerContainer.requestFullscreen();
        }
      } else {
        // Sai da tela cheia
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    };

    if (fullscreenBtn) {
      fullscreenBtn.addEventListener("click", handleFullscreen);
    }

    // ===== CLIQUE NO VÍDEO PARA PAUSAR/PLAY =====
    let clickTimeout: ReturnType<typeof setTimeout> | null = null;
    
    const handleVideoClick = () => {
      // Cancela se for duplo clique
      if (clickTimeout) {
        clearTimeout(clickTimeout);
        clickTimeout = null;
        return;
      }

      clickTimeout = setTimeout(() => {
        if (video.paused) {
          video.play();
          if (videoPauseOverlay) {
            videoPauseOverlay.style.opacity = "0";
            videoPauseOverlay.style.pointerEvents = "none";
          }
        } else {
          video.pause();
          if (videoPauseOverlay) {
            videoPauseOverlay.style.opacity = "1";
            videoPauseOverlay.style.pointerEvents = "auto";
          }
        }
        clickTimeout = null;
      }, 200);
    };

    video.addEventListener("click", handleVideoClick);

    // ===== DUPLO CLIQUE PARA TELA CHEIA =====
    video.addEventListener("dblclick", () => {
      if (clickTimeout) {
        clearTimeout(clickTimeout);
        clickTimeout = null;
      }
      handleFullscreen();
    });

    // ===== BOTÃO GRANDE DE PLAY NO OVERLAY =====
    const handlePausePlayBtn = () => {
      video.play();
      if (videoPauseOverlay) {
        videoPauseOverlay.style.opacity = "0";
        videoPauseOverlay.style.pointerEvents = "none";
      }
    };

    if (pausePlayBtn) {
      pausePlayBtn.addEventListener("click", handlePausePlayBtn);
    }

    // ===== INICIALIZA O SLIDER VISUAL =====
    updateSliderBackground();

    // ===== FUNÇÃO PARA ATUALIZAR ÍCONE =====
    const updatePlayPauseIcon = () => {
      if (playPause) {
        playPause.innerHTML = video.paused 
          ? '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path></svg>'
          : '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"></path></svg>';
      }
    };

    // ===== DESATIVA ARRASTAR DA BARRA =====
    if (progressContainer) {
      progressContainer.style.pointerEvents = "none";
      progressContainer.style.cursor = "default";
    }
    if (progressHandle) {
      progressHandle.style.pointerEvents = "none";
    }

    // ===== PLAY AO CLICAR NO BOTÃO INICIAL =====
    const handleInitialPlay = () => {
      video.play();

      // esconde overlay
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";

      // mostra controles
      controls.style.opacity = "1";
      controls.style.pointerEvents = "auto";

      // ATUALIZA O ÍCONE
      updatePlayPauseIcon();
    };

    if (initialBtn) {
      initialBtn.addEventListener("click", handleInitialPlay);
    }

    // ===== PLAY/PAUSE NO BOTÃO DO PLAYER =====
    const handlePlayPause = () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    };

    if (playPause) {
      playPause.addEventListener("click", handlePlayPause);
    }

    // ===== ATUALIZA ÍCONE QUANDO O VÍDEO TOCA/PAUSA =====
    const handlePlay = () => {
      updatePlayPauseIcon();
      // Esconde o overlay quando o vídeo tocar
      if (videoPauseOverlay) {
        videoPauseOverlay.style.opacity = "0";
        videoPauseOverlay.style.pointerEvents = "none";
      }
    };
    
    const handlePause = () => {
      updatePlayPauseIcon();
      // Mostra o overlay quando o vídeo pausar (exceto no início)
      if (videoPauseOverlay && controls.style.opacity === "1") {
        videoPauseOverlay.style.opacity = "1";
        videoPauseOverlay.style.pointerEvents = "auto";
      }
    };
    
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    // ===== ATUALIZA A BARRA DE PROGRESSO =====
    const handleTimeUpdate = () => {
      if (!video.duration) return;

      const percent = (video.currentTime / video.duration) * 100;

      if (progressFilled) {
        progressFilled.style.width = `${percent}%`;
      }

      if (timeDisplay) {
        timeDisplay.textContent = `${formatTime(
          video.currentTime
        )} / ${formatTime(video.duration)}`;
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    // ===== CLEANUP =====
    return () => {
      initialBtn?.removeEventListener("click", handleInitialPlay);
      playPause?.removeEventListener("click", handlePlayPause);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("click", handleVideoClick);
      video.removeEventListener("dblclick", handleFullscreen);
      volumeSlider?.removeEventListener("input", handleVolumeChange);
      muteBtn?.removeEventListener("click", handleMuteToggle);
      fullscreenBtn?.removeEventListener("click", handleFullscreen);
      pausePlayBtn?.removeEventListener("click", handlePausePlayBtn);
      if (clickTimeout) clearTimeout(clickTimeout);
    };
  }, []);

  return (
    <section className="py-[80px] px-[64px] bg-slate-200">
      <h2 className="text-center text-slate-900 text-4xl font-black pb-[16px]">
        Pare de Ler. Veja a IA em Ação.
      </h2>
      <p className="text-center text-slate-600 text-xl border-2 w-[55%] m-auto pb-[16px] max-md:w-full">
        Em apenas 90 segundos, veja o que a AI Seller Booster gera para você.
      </p>

      <div
        id="custom-player-container"
        className="relative pt-[56.25%] bg-slate-800 rounded-3xl shadow-2xl shadow-slate-900/30 overflow-hidden border-4 border-indigo-500"
      >
        <video
          id="product-vsl"
          className="absolute top-0 left-0 w-full h-full object-cover"
          poster="SEU_LINK_PARA_IMAGEM_DE_CAPA_DO_VIDEO.jpg"
          preload="metadata"
        >
          <source src={VSL} type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>

        <div
          id="initial-overlay"
          className="absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-500 cursor-pointer"
        >
          <button
            id="initial-play-btn"
            className="bg-indigo-600 hover:bg-indigo-700 text-white w-24 h-24 rounded-full flex items-center justify-center transition transform hover:scale-105 shadow-xl shadow-indigo-600/50"
          >
            <FaPlay className="text-4xl ml-1" />
          </button>
        </div>

        <div
          id="video-pause-overlay"
          className="absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-300 opacity-0 pointer-events-none"
        >
          <button
            id="pause-play-btn"
            className="bg-indigo-600 hover:bg-indigo-700 text-white w-24 h-24 rounded-full flex items-center justify-center transition transform hover:scale-105 shadow-xl shadow-indigo-600/50"
          >
            <FaPlay className="text-4xl ml-1" />
          </button>
        </div>

        <div
          id="custom-controls"
          className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 transition-opacity duration-300 opacity-0 pointer-events-none"
        >
          <div
            id="progress-bar-container"
            className="h-2 bg-slate-700 rounded-full mb-3 cursor-pointer relative"
          >
            <div
              id="progress-filled"
              className="h-full bg-indigo-500 rounded-full w-0"
            ></div>
            <div
              id="progress-handle"
              className="absolute h-4 w-4 rounded-full bg-indigo-500 top-1/2 -mt-2 -ml-2 transform scale-0 transition-transform duration-100 ease-out"
            ></div>
          </div>

          <div className="flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <button
                id="play-pause-btn"
                className="text-xl hover:text-indigo-400"
              >
                <FaPlay />
              </button>
              <span id="time-display" className="text-xs text-slate-300">
                0:00 / 0:00
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="relative flex items-center group">
                <button id="mute-btn" className="text-lg hover:text-indigo-400">
                  <span id="volume-icon">
                    <FaVolumeHigh />
                  </span>
                </button>
                <input
                  type="range"
                  id="volume-slider"
                  min="0"
                  max="1"
                  step="0.01"
                  defaultValue="1"
                  className="ml-2 w-20 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 appearance-none rounded-full cursor-pointer"
                />
              </div>

              <button
                id="fullscreen-btn"
                className="text-lg hover:text-indigo-400"
              >
                <FaExpand />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center pt-[40px] gap-[8px]">
        <FaFire className="text-red-500" />
        <p className="text-slate-700 text-lg font-semibold">
          Você só copia e cola. O resultado é imediato.
        </p>
      </div>
    </section>
  );
};

export default VideoSection;