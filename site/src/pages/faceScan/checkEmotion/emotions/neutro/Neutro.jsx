import React from 'react'
import './Neutro.css';
import { useNavigate } from 'react-router-dom';
//import { getExpressionByNumber, getExpressionByBits, getExpressionList } from '../../../../../components/api/api.js';

import ImagemRoboNeutro from "../../../../../assets/home/robo-neutro.svg"

const Neutro = () => {

    const navigate = useNavigate();

    const handleMeditacao = () => {
        // Aqui você define para qual rota deseja redirecionar
        navigate('/meditacao');
    };

    return (
        //getExpressionByNumber(9);
        <div className='neutro'>
            <div >
                <img src={ImagemRoboNeutro} alt="Robo Neutro" width={300} height={200}/>
            </div>
            <div className='text-neutro'>
                Se você está se sentindo 
                neutro, pode ser  esteja tranquilo, mas 
                também pode ser uma falta de emoção. 
                Vou te dar algumas dicas.
            </div>
            <div className='conjunto'>
                <div className='column1'>
                    <div className='text-neutro-h2'>
                        1.Auto-reflexão:
                    </div>
                    <div className='text-neutro-h2'>
                    Reserve um tempo para refletir sobre 
                    sobre sua vida. Pergunte a si mesmo se 
                    há algo específico que esteja causando 
                    essa neutralidade emocional.
                    </div>
                </div>
                <div className='column2'>
                    <div className='text-neutro-h2'>
                        2.Tente coisas novas:
                    </div>
                    <div className='text-neutro-h2'>
                    A rotina e monotonia podem 
                    contribuir para um estado neutro. 
                    Tente sair da sua zona de conforto 
                    e tentar atividades novas.
                    </div>
                </div>
            </div>
            <div className='button-neutro' onClick={handleMeditacao}>
                <div className='text-neutro-botao'>
                    Experimente um <br />
                    pouco de meditação
                </div>
            </div>
        </div>
    );
};

export default Neutro;
