import React from 'react'
import './Options.css';
import { useNavigate } from 'react-router-dom';
import {
    MdSpa,
    MdAccessTime,
    MdFace,
    MdMusicNote,
} from 'react-icons/md';

import ImagemRobo from "../../assets/home/robot-svgrepo-com.svg"

const Options = () => {
    const navigate = useNavigate();

    const handleAnalise = () => {
        // Aqui você define para qual rota deseja redirecionar
        navigate('/facescan');
    };

    const handleRespiracao = () => {
        // Aqui você define para qual rota deseja redirecionar
        navigate('/respiration');
    };

    const handleMusica = () => {
        // Aqui você define para qual rota deseja redirecionar
        navigate('/music');
    };

    const handleMeditacao = () => {
        // Aqui você define para qual rota deseja redirecionar
        navigate('/meditation');
    };


    return (
        <div className='Options'>
            {/* Seção de conteúdo no meio da página */}
            <div className='text-options'>
                <p>BOM DIA</p>
            </div>

            {/* Imagem */}
            <div className='row'>
                <div className='image-robot-options'>
                    <img src={ImagemRobo} alt='Descrição da imagem' width='105' height='70' />
                </div>
                <div className='text-options'>
                    Espero que seu dia esteja sendo excelente!
                </div>
            </div>

            {/* Botões */}
            <div className='button-container'>
                <div className='column'>
                    <div className='button-option' onClick={handleAnalise}>
                        <MdFace size={70} color='#fff' />
                        <div>Análise Facial</div>
                    </div>
                    <div className='button-option' onClick={handleMusica}>
                        <MdMusicNote size={70} color='#fff' />
                        <div>Música</div>
                    </div>
                </div>
                <div className='column'>
                    <div className='button-option' onClick={handleRespiracao}>
                        <MdAccessTime size={70} color='#fff' />
                        <div>Respiração</div>
                    </div>
                    <div className='button-option' onClick={handleMeditacao}>
                        <MdSpa size={70} color='#fff' />
                        <div>Meditação</div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Options;
