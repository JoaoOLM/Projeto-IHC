import React from 'react'
import './Version.css';

import ImagemRobo from "../../../assets/home/robot-svgrepo-com.svg"
import ImagemChat from "../../../assets/Version/message-bubble-2-svgrepo-com.svg"

const Version = () => {

    return (
        <div className='Version'>
            {/* Seção de conteúdo no meio da página */}
            <div className='image-robot-version'>
                <img src={ImagemRobo} alt='Descrição da imagem' width='240' height='160' />
            </div>
            <div className='chat'>
                <img className='image-chat' src={ImagemChat} alt='Chat Image' width='240' height='160' />
            </div>
            <div className='text-version'>
                <p> Versão 0.1 </p>
            </div>
        </div>
    );
};

export default Version;
