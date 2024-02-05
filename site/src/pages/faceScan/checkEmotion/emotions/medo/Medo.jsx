import React from 'react'
import './Medo.css';
import { useNavigate } from 'react-router-dom';
import { getExpressionByNumber, getExpressionByBits, getExpressionList } from '../../../../../components/api/api.js';

import ImagemRoboMedo from "../../../../../assets/home/robo-medo.svg"

const Medo = () => {
    getExpressionByNumber(9);
    const navigate = useNavigate();

    const handleDicas = () => {
        // Aqui você define para qual rota deseja redirecionar
        navigate('/Fear/Tips');
    };

    return (
        //getExpressionByNumber(9);
        <div className='medo'>
            <div>
                <img src={ImagemRoboMedo} alt="Robo medo" width={300} height={200}/>
            </div>
            <div className='text-medo'>
                Parece que você está enfrentando um momento de medo. 
                Estou aqui para oferecer apoio e estratégias para 
                lidar com essa emoção.
                <br /> <br />
                Entendo que o medo pode ser desafiador, mas lembre-se de que 
                é normal sentir medo de vez em quando. Vamos explorar juntos 
                maneiras de enfrentar esse sentimento.
            </div>
            <div className='button-medo' onClick={handleDicas}>
                Dicas
            </div>
        </div>
    );
};

export default Medo;
