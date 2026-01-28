import { useEffect, useRef, useState } from "react";

export interface UseSpeechReaderReturn {
  sentences: string[];
  currentIndex: number;
  voices: SpeechSynthesisVoice[];
  voice: SpeechSynthesisVoice | null;
  setVoice: (voice: SpeechSynthesisVoice | null) => void;
  rate: number;
  setRate: (rate: number) => void;
  isPlaying: boolean;
  prepareText: (text: string) => void;
  play: () => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
}

export function useSpeechReader(): UseSpeechReaderReturn {
  const [sentences, setSentences] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [rate, setRate] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Load available voices
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      setVoice((prev) => prev ?? availableVoices[0] ?? null);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const prepareText = (text: string): void => {
    const parts =
      text
        .match(/[^.!?]+[.!?]*/g)
        ?.map((sentence) => sentence.trim())
        .filter(Boolean) ?? [];

    setSentences(parts);
    setCurrentIndex(0);
  };

  const speakSentence = (index: number): void => {
    const sentence = sentences[index];
    if (!sentence || !voice) return;

    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.voice = voice;
    utterance.rate = rate;

    utterance.onstart = () => setIsPlaying(true);

    utterance.onend = () => {
      if (index + 1 < sentences.length) {
        setCurrentIndex((i) => i + 1);
      } else {
        setIsPlaying(false);
      }
    };

    utterance.onerror = () => setIsPlaying(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  // React to index changes
  useEffect(() => {
    if (isPlaying && sentences.length > 0) {
      window.speechSynthesis.cancel();
      speakSentence(currentIndex);
    }
  }, [currentIndex]);

  const play = (): void => {
    if (!sentences.length) return;
    setIsPlaying(true);
    speakSentence(currentIndex);
  };

  const pause = (): void => {
    window.speechSynthesis.pause();
  };

  const resume = (): void => {
    window.speechSynthesis.resume();
  };

  const stop = (): void => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setCurrentIndex(0);
  };

  return {
    sentences,
    currentIndex,
    voices,
    voice,
    setVoice,
    rate,
    setRate,
    isPlaying,
    prepareText,
    play,
    pause,
    resume,
    stop,
  };
}
