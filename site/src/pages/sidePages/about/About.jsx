import React from 'react'
import './About.css';

import ImagemRobo from "../../../assets/home/robot-svgrepo-com.svg"

const About = () => {

    return (
        <div className='About'>
            {/* Imagem */}
            <div className='image-robot-about'>
                <img src={ImagemRobo} alt='Descrição da imagem' width='200' height='140' />
            </div>

            {/* Texto inferior */}
            <div className='text-about'>
                <p>
                    Olá! Eu sou o robô do DC, e estou aqui para tornar nosso departamento
                    um lugar ainda mais acolhedor. Minha principal função é o reconhecimento
                    facial, onde me adapto para entender o que você está passando
                    e tentar oferecer suporte para que você se sinta melhor. 
                </p>
                <p>
                    Além disso, ofereço um guia de respiração para ajudá-lo a se
                    acalmar em momentos de tensão, como antes daquela prova difícil.
                    Acredito que uma respiração consciente pode fazer toda a diferença
                    no seu bem-estar. Também tenho um player de música com uma
                    seleção especial das melhores músicas, separadas pelo gênero.
                </p>
                <p>
                    Estou aqui para ser seu companheiro digital, sempre disponível
                    para ajudá-lo a enfrentar os desafios do dia a dia. Conte comigo
                    para tornar cada dia mais agradável para você.
                </p>
            </div>
        </div>
    );
};

export default About;
