import React from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import './CheckEmotion.css';

import ImagemRobo from "../../../assets/home/robot-svgrepo-com.svg";

const emotions = {
    Nervous: 'Nervoso',
    Disgust: 'Nojo',
    Fear: 'Medo',
    Happy: 'Feliz',
    Neutral: 'Neutro',
    Sad: 'Triste',
    Surprise: 'Surpresa',
};

const CheckEmotion = () => {
    const { emocao } = useParams();

    // Função para traduzir a emoção
    const traduzirEmocao = (emo) => emotions[emo] || emo;

    const navigate = useNavigate();

    const handleFail = () => {
        navigate('/checkemotion/emotionfail');
    };

    const handleSuccess = () => {
        navigate(`/${emocao}`);
    };


    return (
        <div className='checkemotion'>
            <div className='text-check'>
                Análise Facial
            </div>
            <div className='row-check'>
                <div className='image-robot-options'>
                    <img src={ImagemRobo} alt='Descrição da imagem' width='105' height='70' />
                </div>
                <div className='text-check'>
                    Parece que você está se sentindo {traduzirEmocao(emocao)}
                </div>
            </div>
            <div >
                <button className='button-check' onClick={handleSuccess}>
                    Acho que sim
                </button>
                <button className='button-check2' onClick={handleFail}>
                    Não exatamente
                </button>
            </div>
        </div>
    );
};

export default CheckEmotion;
