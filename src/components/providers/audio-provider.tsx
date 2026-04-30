"use client";
import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface AudioContextType {
    isPlaying: boolean;
    toggleSound: (e?: React.MouseEvent) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children } : { children: React.ReactNode }){
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const startAudio = () => {
        if (audioRef.current && audioRef.current.paused){
            audioRef.current.volume = 1;
            audioRef.current.muted = false;
            audioRef.current.play()
            .then(() => setIsPlaying(true))
            .catch((e) => console.log("Audio diblokir:", e));
        }
    };
    useEffect(() => {
        const handleFirstInteraction = () => {
            startAudio();
            document.removeEventListener("click", handleFirstInteraction);
            document.removeEventListener("touchstart", handleFirstInteraction);
            document.removeEventListener("keydown", handleFirstInteraction);
        };
        document.addEventListener("click", handleFirstInteraction);
        document.addEventListener("touchstart", handleFirstInteraction);
        document.addEventListener("keydown", handleFirstInteraction);
        
        return () => {
            document.removeEventListener("click", handleFirstInteraction);
            document.removeEventListener("touchstart", handleFirstInteraction);
            document.removeEventListener("keydown", handleFirstInteraction);
        };
    }, []);

    const toggleSound = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        if (audioRef.current){
            if (isPlaying){
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };
    return (
        <AudioContext.Provider value={{isPlaying, toggleSound }}>
            <audio
                ref={audioRef}
                loop
                src="/VoiceBackgroundDotline.mp4"
                className="hidden"
            />
            {children}
            {/* Floating Audio Controller Globally */}
            <div className="fixed bottom-8 right-8 z-[100] flex items-center gap-3">
                <button
                    onClick={toggleSound}
                    className={`p-4 rounded-full border border-gingerbread/50 bg-black/80 backdrop-blur-md text-gingerbread hover:scale-110 transition-all ${isPlaying ? 'shadow-[0_0_15px_rgba(184,92,56,0.5)]' : ''}`}
                    aria-label={isPlaying ? "Mute music" : "Play music"}
                >
                    {isPlaying ? <Volume2 size={20}/> : <VolumeX size={20}/>}
                </button>
            </div>
        </AudioContext.Provider>
    );
}
// Cutom Hook context calling
export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};