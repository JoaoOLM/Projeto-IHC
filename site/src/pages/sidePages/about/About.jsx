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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium 
                    velit nec sem laoreet, sit amet laoreet elit maximus. Cras dignissim porta dui. 
                    Phasellus et lectus at massa posuere vehicula. Nullam eget efficitur urna, 
                    et mattis odio. Nullam vitae ante egestas, rutrum ipsum sed, ultrices enim. 
                    Nullam id bibendum tellus, vitae congue lacus. Vestibulum non semper nunc.
                    Aliquam id lectus metus. Morbi sit amet tortor vel urna placerat pharetra. 
                    Aliquam in hendrerit ligula. In hac habitasse platea dictumst. Cras sodales, 
                    justo eget convallis laoreet, nibh lectus pretium purus, in imperdiet diam 
                    ante sed velit. Aenean venenatis cursus suscipit. Nullam mattis velit turpis, 
                    mattis tempus eros malesuada tempor. Aliquam dui nisi, efficitur sit amet 
                    augue ut, posuere gravida ante.</p>
            </div>
        </div>
    );
};

export default About;
