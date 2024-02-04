import React from 'react'
import './Medo.css';

import ImagemRoboMedo from "../../../../../assets/home/robo-medo.svg"

const Medo = () => {

    return (
        <div className='medo'>
            <div>
                <img src={ImagemRoboMedo} alt="Robo medo" width={300} height={200}/>
            </div>
            <div className='text-medo'>
                Parece que você está enfrentando um momento de medo. 
                Estou aqui para oferecer apoio e estratégias para 
                lidar com essa emoção.
                <br /> <br />
                Entendo que o medo pode ser desafiador, mas lembre-se de que 
                é normal sentir medo de vez em quando. Vamos explorar juntos 
                maneiras de enfrentar esse sentimento.
            </div>
            <div className='button-medo'>
                Dicas
            </div>
        </div>
    );
};

export default Medo;
