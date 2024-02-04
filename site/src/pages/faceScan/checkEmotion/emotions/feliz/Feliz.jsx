import React from 'react'
import './Feliz.css';
//import { getExpressionByNumber, getExpressionByBits, getExpressionList } from '../../../../../components/api/api.js';

import ImagemRoboFeliz from "../../../../../assets/home/robot-svgrepo-com.svg"


const Feliz = () => {
    //getExpressionByNumber(9);
    return (
        <div className='feliz'>
            <div>
                <img src={ImagemRoboFeliz} alt="Robo Feliz" width={300} height={200}/>
            </div>
            <div className='text-feliz'>
                Que ótimo ver você feliz! Vamos 
                compartilhar essa alegria. Como 
                posso tornar o seu dia ainda melhor?
            </div>
            <div className='button-feliz'>
                <div className='text-feliz2'>
                    Descobrir atividades legais <br />
                    em São Carlos
                </div>
            </div>
            <div className='button-feliz'>
                <div className='text-feliz2'>
                    Escutar músicas animadas
                </div>
            </div>
        </div>
    );
};

export default Feliz;
