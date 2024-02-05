import React from 'react'
import './Surpresa.css';
import { useNavigate } from 'react-router-dom';
//import { getExpressionByNumber, getExpressionByBits, getExpressionList } from '../../../../../components/api/api.js';

import ImagemRoboSurpresa from "../../../../../assets/home/robo-surpresa.svg"

import {
    MdSpa,
    MdAccessTime,
    MdMusicNote,
} from 'react-icons/md';

const Surpresa = () => {
    const navigate = useNavigate();

    const handleMeditacao = () => {
        // Aqui você define para qual rota deseja redirecionar
        navigate('/meditation');
    };

    const handleRespiracao = () => {
        // Aqui você define para qual rota deseja redirecionar
        navigate('/respiration');
    };

    const handleMusic = () => {
        // Aqui você define para qual rota deseja redirecionar
        navigate('/music');
    };

    return (
        //getExpressionByNumber(9);
        <div className='surpresa'>
            <div>
                <img src={ImagemRoboSurpresa} alt="Robo Surpresa" width={300} height={200}/>
            </div>
            <div className='text-surpresa'>
                Pelo visto você ficou surpreso com o nosso 
                software, temos varias funções além dessa, experimente:
            </div>
            <div className='button-surpresa' onClick={handleRespiracao}>
                <MdAccessTime size={70} color='#fff' />
                <div className='text-button-surpresa'>
                    Respiração
                </div>
            </div>
            <div className='conjunto'>
                <div className='column1' onClick={handleMeditacao}>
                    <div className='button-surpresa'>
                        <MdSpa size={70} color='#fff' />
                        <div className='text-button-surpresa'>
                            Meditação
                        </div>
                    </div>
                </div>
                <div className='column2' onClick={handleMusic}>
                    <div className='button-surpresa'>
                        <MdMusicNote size={70} color='#fff' />
                        <div className='text-button-surpresa'>
                            Música
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Surpresa;
