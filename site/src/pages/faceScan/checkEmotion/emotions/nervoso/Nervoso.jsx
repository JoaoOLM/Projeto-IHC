import React from 'react'
import './Nervoso.css';
import { useNavigate } from 'react-router-dom';

import ImagemRoboNervoso from "../../../../../assets/home/robo-nervoso.svg"

const Nervoso = () => {
    const navigate = useNavigate();

    const handleRespiracao = () => {
        // Aqui você define para qual rota deseja redirecionar
        navigate('/respiration');
    };

    return (
        <div className='nervoso'>
            <div className='image-robot-home'>
                <img src={ImagemRoboNervoso} alt='Robo Nervoso' width='300' height='200' />
            </div>
            <div className='text-nervoso'>
                Parece que você está se sentindo nervoso. Não se preocupe, estou aqui para ajudar!
            </div>
            <div className='text-nervoso'>
                O nervosismo é uma emoção comum e compreensível. Vamos trabalhar juntos para acalmar esses sentimentos e restaurar o equilíbrio. Uma maneira eficaz de fazer isso é através da respiração guiada.
            </div>
            <div className='button-nervoso' onClick={handleRespiracao}>
                <div className='text-nervoso2'>
                    Realizar exercício <br />
                    de respiração
                </div>
            </div>
        </div>
    );
};

export default Nervoso;
