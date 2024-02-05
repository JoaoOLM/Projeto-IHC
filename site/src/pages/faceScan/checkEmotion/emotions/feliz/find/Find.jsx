import React from 'react'
import './Find.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import { getExpressionByNumber, getExpressionByBits, getExpressionList } from '../../../../../components/api/api.js';

import ImagemRoboFeliz from "../../../../../../assets/home/robot-svgrepo-com.svg"
import Parque from "../../../../../../assets/happy-find/parque.svg"
import Biblioteca from "../../../../../../assets/happy-find/biblioteca.svg"

const Find = () => {
    //getExpressionByNumber(9);
    const navigate = useNavigate();

    const handleDescobrir = () => {
        navigate('/Happy/find');
    };

    return (
        <div className='Find'>
            <div>
                <img src={ImagemRoboFeliz} alt="Robo Feliz" width={300} height={200} />
            </div>
            <div className='text-find'>
                Para potencializar essa sensação de felicidade,
                aqui estão algumas sugestões de atividades legais
                que você pode experimentar:
            </div>
            <div className='text-find2'>
                Parque Ecológico de São Carlos
            </div>
            <img src={Parque} alt="Parque" width={300} height={200} />
            <Link to="https://maps.app.goo.gl/81RkGks5GdtFsChM8" target="_blank" className='button-find'>
                Saiba mais
            </Link>
            <div className='text-find2'>
                Bilioteca Comunitária da UFSCar
            </div>
            <img src={Biblioteca} alt="Biblioteca" width={300} height={200} />
            <Link to="https://maps.app.goo.gl/foqKoc4ganYhqxev6" target="_blank" className='button-find'>
                Saiba mais
            </Link>
        </div>
    );
};

export default Find;
