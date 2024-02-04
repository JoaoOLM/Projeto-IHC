import React from 'react'
import './Surpresa.css';
//import { getExpressionByNumber, getExpressionByBits, getExpressionList } from '../../../../../components/api/api.js';

import ImagemRoboSurpresa from "../../../../../assets/home/robo-surpresa.svg"

const Surpresa = () => {

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
            <div className='button-surpresa'>
                Respiração
            </div>
            <div className='conjunto'>
                <div className='column1'>
                    <div className='button-surpresa'>
                        Meditação
                    </div>
                </div>
                <div className='column2'>
                    <div className='button-surpresa'>
                        Música
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Surpresa;
