import React from 'react'
import './Nojo.css';
import { useNavigate } from 'react-router-dom';
import { getExpressionByNumber, getExpressionByBits, getExpressionList } from '../../../../../components/api/api.js';

import {
    MdSpa,
    MdAccessTime,
} from 'react-icons/md';

import ImagemRoboNojo from "../../../../../assets/home/robo-nojo.svg"

const Nojo = () => {
    getExpressionByNumber(26);
    getExpressionByNumber(21);
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
        <div className='nojo'>
            <div>
                <img src={ImagemRoboNojo} alt="Robo Nojo" width={300} height={200}/>
            </div>
            <div className='text-nojo'>
                Você está experimentando um sentimento de nojo. 
                Que é uma resposta quando sentimos algo repugnante, 
                ofensivo ou desagradável. <br /> <br />
                Vou dar algumas dicas para lidar com esse sentimento:
            </div>
            <div className='conjunto'>
                <div className='column1'>
                    <div className='button-nojo' onClick={handleRespiracao}>
                        <MdAccessTime size={70} color='#fff' />
                        <div className='text-button-nojo'>
                            Respiração
                        </div>
                    </div>
                </div>
                <div className='column2' onClick={handleMeditacao}>
                    <div className='button-nojo'>
                        <MdSpa size={70} color='#fff' />
                        <div className='text-button-nojo'>
                            Meditação
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nojo;
