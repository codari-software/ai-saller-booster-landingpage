import { FaPlay, FaExpand, FaFire } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";

const VideoSection = () => {
  return (
    <section className="py-[80px] px-[64px] bg-slate-200">
      <h2 className="text-center text-slate-900 text-4xl font-black pb-[16px]">
        Pare de Ler. Veja a IA em Ação.
      </h2>
      <p className="text-center text-slate-600 text-xl border-2 w-[55%] m-auto pb-[16px]">
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
          <source src="SEU_LINK_PARA_O_VIDEO_MP4.mp4" type="video/mp4" />
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
                  <FaVolumeHigh />
                </button>
                <input
                  type="range"
                  id="volume-slider"
                  min="0"
                  max="1"
                  step="0.1"
                  value="1"
                  className="absolute top-1/2 -left-16 transform -translate-y-1/2 rotate-90 origin-top-left -ml-28 w-20 h-1 hidden group-hover:block appearance-none bg-slate-600 rounded-full cursor-pointer"
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
        <p className="text-slate-700 text-lg font-semibold">Você só copia e cola. O resultado é imediato.</p>
      </div>
    </section>
  );
};

export default VideoSection;
