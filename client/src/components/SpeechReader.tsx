import { ChangeEvent, FC, useState } from "react";
import { useSpeechReader } from "./useSpeechReader";

const SpeechReader: FC = () => {
  const [text, setText] = useState<string>("");

  const {
    sentences,
    currentIndex,
    voices,
    voice,
    setVoice,
    rate,
    setRate,
    prepareText,
    play,
    pause,
    resume,
    stop,
  } = useSpeechReader();

  const handleVoiceChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = voices.find((v) => v.name === e.target.value) ?? null;
    setVoice(selected);
  };

  const handleRateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRate(Number(e.target.value));
  };

  return (
    <div style={{ maxWidth: 600 }}>
      <h2>Speech Reader</h2>

      <textarea
        rows={5}
        value={text}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setText(e.target.value)
        }
        placeholder="Paste text..."
        style={{ width: "100%" }}
      />

      <button onClick={() => prepareText(text)}>Prepare</button>

      <div>
        <label>Voice:</label>
        <select value={voice?.name ?? ""} onChange={handleVoiceChange}>
          {voices.map((v) => (
            <option key={v.name} value={v.name}>
              {v.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Rate: {rate}</label>
        <input
          type="range"
          min="0.7"
          max="1.5"
          step="0.1"
          value={rate}
          onChange={handleRateChange}
        />
      </div>

      <div style={{ margin: "10px 0" }}>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button>
        <button onClick={stop}>Stop</button>
      </div>

      <div>
        {sentences.map((sentence, index) => (
          <p
            key={index}
            style={{
              background: index === currentIndex ? "#ffe58a" : "transparent",
            }}
          >
            {sentence}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SpeechReader;
