import React, { useEffect, useRef, useContext, useState } from 'react';
import { useExternalScript } from '../../helpers/ai-sdk/externalScriptsLoader';
import { getAiSdkControls } from '../../helpers/ai-sdk/loader';
import FaceTrackerComponent from '../../components/faceScan/FaceTrackerComponent';

import './FaceScan.css';

const FaceScan = () => {
  const mphToolsState = useExternalScript('https://sdk.morphcast.com/mphtools/v1.0/mphtools.js');
  const aiSdkState = useExternalScript('https://ai-sdk.morphcast.com/v1.16/ai-sdk.js');
  const videoEl = useRef(null);
  const [lastEmotion, setLastEmotion] = useState('');
  const [emotionCount, setEmotionCount] = useState(0);

  useEffect(() => {
    videoEl.current = document.getElementById('videoEl');
    async function getAiSdk() {
      if (aiSdkState === 'ready' && mphToolsState === 'ready') {
        const { source, start } = await getAiSdkControls();
        await source.useCamera({
          toVideoElement: videoEl.current,
        });
        await start();
      }
    }
    getAiSdk();
  }, [aiSdkState, mphToolsState]);

  useEffect(() => {
    function handleEmotion(evt) {
      const dominantEmotion = evt.detail.output.dominantEmotion || '';
      console.log(dominantEmotion);

      if (dominantEmotion === lastEmotion) {
        setEmotionCount(emotionCount + 1);

        if (emotionCount + 1 === 30) {
          console.log(`Enviando emoção dominante: ${dominantEmotion}`);
          // Faça algo com a emoção, por exemplo, navegar para outra página
          setEmotionCount(0);
          setLastEmotion('');
        }
      } else {
        setLastEmotion(dominantEmotion);
        setEmotionCount(1);
      }
    }

    window.addEventListener('CY_FACE_EMOTION_RESULT', handleEmotion);

    return () => {
      window.removeEventListener('CY_FACE_EMOTION_RESULT', handleEmotion);
    };
  }, [lastEmotion, emotionCount]);

  return (
    <div className='facescan'>
      <h1>
        Enquadre seu rosto abaixo para que eu possa detectar o que você está sentindo.
      </h1>
      <div className='video'>
        <video id='videoEl' ref={videoEl} autoPlay playsInline></video>
        <FaceTrackerComponent videoEl={videoEl}></FaceTrackerComponent>
      </div>
    </div>
  );
};

export default FaceScan;
