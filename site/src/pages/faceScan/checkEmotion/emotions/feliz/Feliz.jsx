import React from 'react'
import './Feliz.css';
import { getExpressionByNumber, getExpressionByBits, getExpressionList } from '../../../../../components/api/api.js';

//import ImagemRobo from "../../../../../assets/home/robot-svgrepo-com.svg"


const Feliz = () => {
    // Exemplos de chamada das funções
    //getExpressionByNumber(9);
    return (
        <div className='text-feliz'>
            Que bom👌!
        </div>
    );
};

export default Feliz;
