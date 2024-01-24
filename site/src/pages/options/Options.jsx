import React, { useState, useEffect } from 'react'
import './Options.css';

import ImagemRobo from "../../assets/home/robot-svgrepo-com.svg"

const Options = () => {

    return (
        <div className='Options'>
            {/* Seção de conteúdo no meio da página */}
            <div className='content'>
                {/* Texto superior */}
                <div className='text-container'>
                    <p>BOM DIA</p>
                </div>

                {/* Imagem */}
                <div className='image-container'>
                    <img src={ImagemRobo} alt='Descrição da imagem' width='60' height='40' />
                    <p>Espero que seu dia esteja sendo excelente!</p>
                </div>

                {/* Texto inferior */}
                <div className='text-container'>
                    <p>Meu nome é ... e vou te acompanhar pelo aplicativo</p>
                    <button className='button'>Iniciar</button>
                </div>
            </div>
        </div>
    );
};

export default Options;
