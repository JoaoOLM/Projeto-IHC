import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EmotionFail.css';

import ImagemRobo from "../../../../assets/home/robot-svgrepo-com.svg";

const EmotionFail = () => {
    const navigate = useNavigate();

    const handleFeliz = () => {
        navigate(`/Happy`);
    };

    const handleTriste = () => {
        navigate(`/Sad`);
    };

    const handleNervoso = () => {
        navigate(`/Nervous`);
    };

    const handleNojo = () => {
        navigate(`/Disgust`);
    };

    const handleMedo = () => {
        navigate(`/Fear`);
    };

    const handleNeutro = () => {
        navigate(`/Neutral`);
    };

    const handleSurpresa = () => {
        navigate(`/Surprise`);
    };

    return (
        <div className='emotionfail'>
            <div className='row-check'>
                <div className='image-robot-options'>
                    <img src={ImagemRobo} alt='Descrição da imagem' width='105' height='70' />
                </div>
                <div className='text-fail'>
                    Qual emoção descreve melhor o que você está sentindo?
                </div>
            </div>
            <div className='column'>
                <button className='button-fail' onClick={handleNervoso}>
                    Nervoso
                </button>
                <button className='button-fail' onClick={handleNojo}>
                    Nojo
                </button>
                <button className='button-fail' onClick={handleMedo}>
                    Medo
                </button>
                <button className='button-fail' onClick={handleFeliz}>
                    Feliz
                </button>
                <button className='button-fail' onClick={handleNeutro}>
                    Neutro
                </button>
                <button className='button-fail' onClick={handleTriste}>
                    Triste
                </button>
                <button className='button-fail' onClick={handleSurpresa}>
                    Surpresa
                </button>

            </div>
        </div>
    );
};

export default EmotionFail;
