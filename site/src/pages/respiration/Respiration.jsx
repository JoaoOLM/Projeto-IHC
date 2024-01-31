import React, { useState, useEffect } from 'react';
import ImagemRobo from "../../assets/home/robot-svgrepo-com.svg";
import './Respiration.css';

function Respiration() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [iterationCount, setIterationCount] = useState(6);
  const [textInsideCircle, setTextInsideCircle] = useState("Selecione o tempo desejado!");
  const [sliderValue, setSliderValue] = useState(1);
  const [showControls, setShowControls] = useState(true); // Estado para mostrar/ocultar controles
  const [displayText, setDisplayText] = useState(""); // Estado para exibir o texto expire/inspire

  useEffect(() => {   // ANIMAÇÃO INSPIRE E EXPIRE
    let timer = null;
    let count = 0;

    const updateText = () => {
      if (count === 0) {
        setDisplayText("Inspire");
      } else {
        setDisplayText(prevText => (prevText === "Inspire" ? "Expire" : "Inspire"));
      }
      count = count + 1; // Alternar entre 0 e 1
    };

    if (isAnimating) {
      timer = setInterval(updateText, 5000);
    } else {
      setDisplayText(""); // Limpar o texto quando a animação parar
    }

    return () => clearInterval(timer);
  }, [isAnimating, displayText]);  

  const toggleAnimation = () => {   //Animações após click START
    setIsAnimating(prevState => !prevState); // Inverte o estado de animação
    if (!isAnimating) {
      setTextInsideCircle("Clique novamente para parar");
      setShowControls(false); // Esconde os controles quando a animação começa
      setDisplayText("Respire de maneira controlada"); // Define o texto inicial
    } else {
      setTextInsideCircle("Selecione o tempo desejado!");
      setShowControls(true);
      setDisplayText(""); // Altera o texto para ""
    }
  };

  const setIteration = (count) => {   //Transforma os contadores em minutos
    setIterationCount(count);
    setSliderValue(Math.ceil(count / 6)); // Calcula o valor do slider com base nos conts (1 minuto = 6 conts)
  };

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    setSliderValue(value);
    setIterationCount(value * 6); // Calcula o número de conts com base nos minutos selecionados
  };

  useEffect(() => {   //Fim da Animação
    const circle = document.querySelector('.animated');
  
    if (circle) {
      circle.style.animationIterationCount = isAnimating ? iterationCount : '0';
  
      const animationEndHandler = () => {
        setTextInsideCircle("Selecione o tempo desejado!");
        setShowControls(true);
        setDisplayText(""); // Limpa o texto expire/inspire
        setIsAnimating(false); // Define isAnimating como false quando a animação do círculo terminar
      };
  
      circle.addEventListener('animationend', animationEndHandler);
  
      return () => {
        circle.removeEventListener('animationend', animationEndHandler);
      };
    }
  }, [isAnimating, iterationCount]);

  return (
    <div className="Respiration">
      <div className='text-options'>
        <p>Respiração<br />Guiada</p>
      </div>
      <div className='row'>
        <div className='image-robot-options'>
          <img src={ImagemRobo} alt='Descrição da imagem' width='105' height='70' />
        </div>
        <div className='text-options'>
          {textInsideCircle}
        </div>
      </div>
      
      {/*Bloco Opções de Tempo*/}
      <div className='rowl spaced-buttons'>
        {showControls && !isAnimating && (
          <>
            <div onClick={() => setIteration(6)}>
              <button className='button-option'>1 MINUTOS</button>
            </div>
            <div onClick={() => setIteration(18)}>
              <button className='button-option'>3 MINUTOS</button>
            </div>
            <div onClick={() => setIteration(30)}>
              <button className='button-option'>5 MINUTOS</button>         
            </div>
            <div onClick={() => setIteration(60)}>
              <button className='button-option'>10 MINUTOS</button>         
            </div>
          </>
        )}
      </div>

      {/*Bloco Animação do Círculo*/}
      <button className={isAnimating ? 'animated' : 'circular-button'} onClick={toggleAnimation}>
        {isAnimating ? '' : 'START'}
      </button>
      <button className='circular-button2'> </button>
      <div className="text-expire-inspire">
        <span className={displayText === "Inspire" ? "inspire-text" : "expire-text"}>
          {displayText}
        </span>
      </div>

      {/*Bloco SLIDER*/}
      <div className="row">                     
        {showControls && !isAnimating && (
          <>
            <input 
             type="range" 
             min="1" 
             max="30" // Limite de 30 minutos
             value={sliderValue} 
             onChange={handleSliderChange} 
             className="slider"
           />
            <span className="slider-value">{sliderValue} MIN</span> {/* Mostra o valor atual do slider */}
          </>
        )}
      </div>
    </div>
  );
}

export default Respiration;
