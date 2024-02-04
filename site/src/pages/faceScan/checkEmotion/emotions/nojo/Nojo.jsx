import React from 'react'
import './Nojo.css';
//import { getExpressionByNumber, getExpressionByBits, getExpressionList } from '../../../../../components/api/api.js';

import ImagemRoboNojo from "../../../../../assets/home/robo-nojo.svg"

const Nojo = () => {

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
                    <div className='button-nojo'>
                        <div className='text-button-nojo'>
                            Respiração
                        </div>
                    </div>
                </div>
                <div className='column2'>
                    <div className='button-nojo'>
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
