import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";

const App = () => {
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language:'en-IN' });
    const stopListening = () => SpeechRecognition.stopListening();
    const [text, setText] = useState();
    const [copied, setCopied] = useClipboard(text);

    const {
        transcript,
        listening,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();

      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
    
  return (
    <>
        <div >
            <h2>Text To Speech Converter</h2>
            <p>Helps to convert text to speech without complex procedure</p>
            <div >

            </div>

            <div onClick={() => setText(transcript)}>{transcript}</div>

            <div>
                <button onClick={setCopied}> {copied ? 'Copied' : 'Copy to Clipboard'}</button>
                <button onClick={startListening}>Start Listening </button>
                <button onClick={stopListening}>Stop Listening </button>
            </div>
        </div>
    </>
  )
}

export default App;
