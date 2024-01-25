import React from 'react'
import './Home.css';
import { useNavigate } from 'react-router-dom';

import ImagemRobo from "../../../assets/home/robot-svgrepo-com.svg"

const Home = () => {

    const navigate = useNavigate();

    const handleIniciarClick = () => {
        // Aqui você define para qual rota deseja redirecionar
        navigate('/options');
    };

    return (
        <div className='home'>
            {/* Seção de conteúdo no meio da página */}
            <div className='content'>
                {/* Texto superior */}
                <div className='text-home'>
                    <p>OLÁ, BEM-VINDO!</p>
                </div>

                {/* Imagem */}
                <div className='image-robot-home'>
                    <img src={ImagemRobo} alt='Descrição da imagem' width='300' height='200' />
                </div>

                {/* Texto inferior */}
                <div className='text-home'>
                    <p>Meu nome é ... e vou te acompanhar pelo aplicativo</p>
                    <button className='button' onClick={handleIniciarClick}>
                        Iniciar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
