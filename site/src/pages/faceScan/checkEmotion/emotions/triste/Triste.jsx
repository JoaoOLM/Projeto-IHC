import React from 'react'
import './Triste.css';
import { getExpressionByNumber, getExpressionByBits, getExpressionList } from '../../../../../components/api/api.js';

import ImagemRoboTriste from "../../../../../assets/home/robo-triste.svg"

const Triste = () => {
    getExpressionByNumber(9);
    return (
        //getExpressionByNumber(9);
        <div className='triste'>
            <div className='imagem-robo-triste'>
                <img src={ImagemRoboTriste} alt="Robo Triste" width={300} height={200}/>
            </div>
            <div className='text-triste'>
                Sinto muito ouvir que você está se sentindo triste. Aqui estão algumas sugestões que podem ajudá-lo a lidar com a tristeza:
            </div>
            <div className='conjunto-triste'>
                <div className='column-triste1'>
                    <div className='text-triste2'>
                        1.Converse com alguem: <br /> <br />
                        Às vezes, compartilhar seus sentimentos 
                        com um amigo, membro da família 
                        ou profissional pode ajudar a aliviar a tristeza
                    </div>
                </div>
                <div className='column-triste2'>
                <div className='text-triste2'>
                    2.Pratique atividades: <br /> <br />
                    Desenvolver atividades que você gosta pode 
                    elevar o seu humor. Isso pode incluir 
                    hobbies, esportes, grupos de extesão.
                    </div>
                </div>
            </div>
            <div className='conjunto'>
                <div className='column-triste1'>
                    <div className='text-triste2'>
                        3.Cuide de si mesmo: <br /> <br />
                        Tire um tempo para cuidar de si mesmo. Isso pode 
                        envolver descansar o suficiente, comer bem, meditar 
                        ou fazer algo que o faça sentir-se bem consigo mesmo.
                    </div>
                </div>
                <div className='column-triste2'>
                    <div className='text-triste2'>
                        4.Ajuda profissional: <br /> <br />
                        Se você está assim por um longo período de tempo e está afetando sua vida 
                        diária, considerar falar com um profissional de saúde mental, 
                        como um psicólogo ou terapeuta, pode ser benéfico.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Triste;
