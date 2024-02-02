import React, { useEffect, useRef, useState } from 'react';
import { useExternalScript } from '../../helpers/ai-sdk/externalScriptsLoader';
import { getAiSdkControls } from '../../helpers/ai-sdk/loader';
import FaceTrackerComponent from '../../components/faceScan/FaceTrackerComponent';

import './FaceScan.css';
import { useNavigate } from 'react-router';

const FaceScan = () => {
  const mphToolsState = useExternalScript('https://sdk.morphcast.com/mphtools/v1.0/mphtools.js');
  const aiSdkState = useExternalScript('https://ai-sdk.morphcast.com/v1.16/ai-sdk.js');
  const videoEl = useRef(null);
  const [lastEmotion, setLastEmotion] = useState('');
  const [emotionCount, setEmotionCount] = useState(0);
  const navigate = useNavigate();

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
          navigate(`/checkemotion/${dominantEmotion}`);
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
  }, [lastEmotion, emotionCount, navigate]);

  return (
    <div className='facescan'>
      <div className='text-face'>
        Centralize seu rosto e espere alguns segundos.
      </div>
      <div className='video'>
        <video id='videoEl' ref={videoEl} autoPlay playsInline></video>
        <FaceTrackerComponent videoEl={videoEl}></FaceTrackerComponent>
      </div>
    </div>
  );
};

export default FaceScan;



