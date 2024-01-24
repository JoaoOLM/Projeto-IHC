import React, { useState, useEffect } from 'react'
import './Home.css';

import ImagemRobo from "../../assets/home/robot-svgrepo-com.svg"

const Home = () => {

    return (
        <div className='home'>
            {/* Seção de conteúdo no meio da página */}
            <div className='content'>
                {/* Texto superior */}
                <div className='text-container'>
                    <p>OLÁ, BEM-VINDO!</p>
                </div>

                {/* Imagem */}
                <div className='image-container'>
                    <img src={ImagemRobo} alt='Descrição da imagem' width='300' height='200' />
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

export default Home;
