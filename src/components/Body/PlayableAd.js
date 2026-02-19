import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Main Component
const PlayableAd = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  return (
    <div
      className="min-h-screen bg-gradient-to-br 
      from-purple-900 via-purple-700 to-yellow-500 
      flex items-center justify-center p-4"
    >
      <div
        className="w-full max-w-md rounded-3xl 
        shadow-2xl overflow-hidden relative"
      >
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="main"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.45 }}
            >
              <MainScreen
                onStart={() => setStep(1)}
                onBack={() => navigate("/")}
              />
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="melt"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.45 }}
            >
              <MeltStep onNext={() => setStep(2)} />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="mix"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.45 }}
            >
              <MixStep onNext={() => setStep(3)} />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="bake"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.45 }}
            >
              <BakeStep onNext={() => setStep(4)} />
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="final"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.45 }}
            >
              <FinalRevealStep />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Main Screen
const MainScreen = ({ onStart, onBack }) => {
  const titleImg = new URL("../../assets/title.png", import.meta.url);

  return (
    <div
      className="relative w-full max-w-lg mx-auto 
      rounded-3xl overflow-hidden shadow-2xl"
    >
      <img
        src={titleImg}
        alt="Kuih Raya Cadbury"
        className="w-full h-auto object-contain"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t 
        from-black/60 via-transparent to-transparent"
      />

      <button
        onClick={onBack}
        className="absolute top-4 left-4 
        bg-black/40 backdrop-blur-sm 
        text-white px-4 py-1 
        rounded-full text-sm 
        hover:bg-black/60 transition"
      >
        ← Back
      </button>

      <button
        onClick={onStart}
        className="absolute bottom-[6%] left-1/2 
        -translate-x-1/2
        px-8 py-3 text-base font-bold 
        text-purple-900 
        bg-gradient-to-b from-yellow-300 to-yellow-500
        rounded-full 
        border-3 border-purple-900
        shadow-lg shadow-yellow-400/30
        transition-all duration-200
        hover:scale-105
        active:translate-y-1 cursor-pointer"
      >
        🍪 START BAKING
      </button>
    </div>
  );
};

// Melting Step
const MeltStep = ({ onNext }) => {
  const videoRef = useRef(null);
  const meltHeader = new URL("../../assets/meltheader.png", import.meta.url);
  const meltVideo = new URL("../../assets/melt.mp4", import.meta.url);

  const [clickCount, setClickCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video || isPlaying) return;

    setIsPlaying(true);
    setClickCount((prev) => (prev < 5 ? prev + 1 : prev));
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }

    const handleEnded = () => {
      setIsPlaying(false);

      if (clickCount >= 4 && onNext) {
        setTimeout(() => onNext(), 800);
      }
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [isPlaying, clickCount, onNext]);

  return (
    <div className="w-full max-w-md">
      <div className="w-full">
        <img
          src={meltHeader}
          alt="Melt The Chocolate"
          className="w-full object-contain
          drop-shadow-[0_8px_25px_rgba(0,0,0,0.6)]"
        />
      </div>

      <div
        onClick={handleClick}
        className="relative -mt-2 rounded-2xl overflow-hidden
        shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        cursor-pointer group"
      >
        <video
          ref={videoRef}
          src={meltVideo}
          className="w-full h-[380px] object-cover
          brightness-105 contrast-110 saturate-110"
          playsInline
          preload="auto"
        />

        <div
          className="absolute inset-0 
        bg-gradient-to-t 
        from-black/60 via-black/20 to-black/30
        pointer-events-none"
        />

        <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none">
          <p
            className="text-sm sm:text-base font-medium text-white
          bg-black/50 backdrop-blur-md
          px-6 py-2 rounded-full
          drop-shadow-lg"
          >
            {isPlaying ? "Melting..." : "Tap quickly to melt"}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <ProgressBar clickCount={clickCount} />
      </div>
    </div>
  );
};

// Progress Bar for Melting Step
const ProgressBar = ({ clickCount }) => {
  const progress = Math.min(clickCount * 20, 100);

  return (
    <div className="mt-6 px-4">
      <div className="relative h-5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-300
          bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-center mt-2 font-semibold text-purple-900">
        {progress}% Melted
      </p>
    </div>
  );
};

// Mixing Step
const MixStep = ({ onNext }) => {
  const videoRef = useRef(null);
  const mixHeader = new URL("../../assets/mixheader.png", import.meta.url);
  const mixVideo = new URL("../../assets/mix.mp4", import.meta.url);

  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video || isPlaying) return;
    setIsPlaying(true);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }

    const handleEnded = () => {
      setIsPlaying(false);
      if (onNext) setTimeout(() => onNext(), 800);
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [isPlaying, onNext]);

  return (
    <div className="w-full max-w-md">
      <div className="w-full">
        <img
          src={mixHeader}
          alt="Mix It Up"
          className="w-full object-contain
          drop-shadow-[0_8px_25px_rgba(0,0,0,0.6)]"
        />
      </div>

      <div
        onClick={handleClick}
        className="relative -mt-2 rounded-2xl overflow-hidden
        shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        cursor-pointer group"
      >
        <video
          ref={videoRef}
          src={mixVideo}
          className="w-full h-[380px] object-cover
          brightness-105 contrast-110 saturate-110"
          playsInline
          preload="auto"
        />

        <div
          className="absolute inset-0 
        bg-gradient-to-t 
        from-black/60 via-black/20 to-black/30
        pointer-events-none"
        />

        <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none">
          <p
            className="text-sm sm:text-base font-medium text-white
          bg-black/50 backdrop-blur-md
          px-6 py-2 rounded-full
          drop-shadow-lg"
          >
            {isPlaying ? "Mixing..." : "Tap to mix the chocolate"}
          </p>
        </div>
      </div>
    </div>
  );
};

// Baking Step with Round Progress Bar
const BakeStep = ({ onNext }) => {
  const videoRef = useRef(null);
  const hasMoved = useRef(false);
  const timeoutRef = useRef(null);

  const bakeHeader = new URL("../../assets/bakeheader.png", import.meta.url);
  const bake1 = new URL("../../assets/bake1.mp4", import.meta.url);
  const bake2 = new URL("../../assets/bake2.mp4", import.meta.url);

  const [clickCount, setClickCount] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto play bake1
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.src = bake1;
    video.play().catch(() => {});
  }, []);

  useEffect(() => {
    let interval;

    const finish = () => {
      if (!hasMoved.current) {
        hasMoved.current = true;
        timeoutRef.current = setTimeout(() => {
          if (onNext) onNext();
        }, 600);
      }
    };

    if (clickCount === 0) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 100 / 60;
          if (next >= 100) {
            clearInterval(interval);
            finish();
            return 100;
          }
          return next;
        });
      }, 1000);
    }

    if (clickCount === 1) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 5;
          if (next >= 100) {
            clearInterval(interval);
            finish();
            return 100;
          }
          return next;
        });
      }, 300);
    }

    if (clickCount >= 2) {
      setProgress(100);
      finish();
    }

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [clickCount, onNext]);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (clickCount === 0) {
      video.src = bake2;
      video.play().catch(() => {});
    }

    if (clickCount < 2) {
      setClickCount((prev) => prev + 1);
    }
  };

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="w-full max-w-md">
      <div className="w-full">
        <img
          src={bakeHeader}
          alt="Bake It Up"
          className="w-full object-contain drop-shadow-[0_8px_25px_rgba(0,0,0,0.6)]"
        />
      </div>

      <div
        onClick={handleClick}
        className="relative -mt-2 rounded-2xl overflow-hidden
        shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        cursor-pointer"
      >
        <video
          ref={videoRef}
          className="w-full h-[380px] object-cover
          brightness-105 contrast-110 saturate-110"
          playsInline
          preload="auto"
        />

        <div
          className="absolute inset-0 
        bg-gradient-to-t from-black/60 via-black/20 to-black/30"
        />

        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <p className="text-white bg-black/50 px-6 py-2 rounded-full">
            {clickCount === 0 && "Baking... (1 min)"}
            {clickCount === 1 && "Speeding up... 🚀"}
            {clickCount >= 2 && "Perfectly Baked! 🎉"}
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <svg width="120" height="120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.3s linear" }}
          />
          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor="#facc15" />
              <stop offset="50%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="text-xl font-bold fill-purple-900"
          >
            {Math.round(progress)}%
          </text>
        </svg>
      </div>
    </div>
  );
};

// Final Cookie Reveal
const FinalRevealStep = () => {
  const videoRef = useRef(null);
  const bakedVideo = new URL("../../assets/baked.mp4", import.meta.url);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {});
  }, []);

  const handleDownload = () => {
    alert("Recipe Downloaded! 📄");
  };

  const handleShare = () => {
    alert("Recipe Shared! 📤");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      
      <div
        className="relative rounded-3xl overflow-hidden
      shadow-[0_25px_80px_rgba(0,0,0,0.6)]"
      >
        
        <video
          ref={videoRef}
          src={bakedVideo}
          className="w-full  object-cover
          brightness-105 contrast-110 saturate-110"
          playsInline
          preload="auto"
          loop
        />

        <div
          className="absolute inset-0 
        bg-gradient-to-t 
        from-black/70 via-black/20 to-transparent"
        />

        
        <div
          className="absolute bottom-6 left-0 right-0 
        flex justify-between items-center px-6"
        >
          <button
            onClick={handleDownload}
            className="flex-1 mr-3 px-8 py-3 text-base font-bold
  text-purple-900
  bg-gradient-to-b from-yellow-300 to-yellow-500
  rounded-full
  border-4 border-purple-900
  shadow-lg shadow-yellow-400/30
  transition-all duration-200
  hover:scale-105
  active:translate-y-1
  cursor-pointer"
          >
            📄 Download
          </button>

          <button
            onClick={handleShare}
            className="flex-1 ml-3 px-8 py-3 text-base font-bold
  text-purple-900
  bg-gradient-to-b from-yellow-300 to-yellow-500
  rounded-full
  border-4 border-purple-900
  shadow-lg shadow-yellow-400/30
  transition-all duration-200
  hover:scale-105
  active:translate-y-1
  cursor-pointer"
          >
            📤 Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayableAd;
