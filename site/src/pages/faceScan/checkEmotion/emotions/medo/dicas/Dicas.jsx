import React from 'react'
import './Dicas.css';
import { useNavigate } from 'react-router-dom';
//import { getExpressionByNumber, getExpressionByBits, getExpressionList } from '../../../../../components/api/api.js';

import ImagemRoboMedo from "../../../../../../assets/home/robo-medo.svg"

const Dicas = () => {
    const navigate = useNavigate();

    const handleMeditacao = () => {
        // Aqui você define para qual rota deseja redirecionar
        navigate('/meditation');
    };

    const handleRespiracao = () => {
        // Aqui você define para qual rota deseja redirecionar
        navigate('/respiration');
    };

    return (
        //getExpressionByNumber(9);
        <div className='dicas'>
            <div >
                <img src={ImagemRoboMedo} alt="Robo Medo" width={240} height={160} />
            </div>
            <div className='conjunto1'>
                <div className='column3'>
                    <div className='text-dicas-h2'>
                        1.Respiração Guiada
                    </div>
                    <div className='text-dicas-h2'>
                        Vamos começar com uma respiração guiada. Toque no botão abaixo para ser redirecionado 
                        a um exercício de respiração guiada. Isso pode ajudar a acalmar sua mente e diminuir a sensação de medo.
                    </div>
                    <div className='button-dicas' onClick={handleRespiracao}>
                        <div className='text-dicas-botao'>
                            Realizar exercício <br />
                            de respiração
                        </div>
                    </div>
                </div>
                <div className='column4'>
                    <div className='text-dicas-h2'>
                        2.Identificar medos
                    </div>
                    <div className='text-dicas-h2'>
                        Tente identificar e nomear seus medos. Às vezes, compreender o que está causando o medo pode ser o primeiro 
                        passo para enfrentá-lo. Utilizar de uma técnica de meditação pode te ajudar nesse processo.
                    </div>
                    <div className='button-dicas2' onClick={handleMeditacao}>
                        <div className='text-dicas-botao'>
                            Realizar exercício <br />
                            de meditação
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dicas;
