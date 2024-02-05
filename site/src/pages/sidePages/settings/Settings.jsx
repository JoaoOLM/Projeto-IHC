import React from 'react';
import './Settings.css';

const Settings = () => {
  // Exemplo de funções fictícias para alterar as configurações
  const changeLanguage = (language) => {
    console.log(`Idioma alterado para: ${language}`);
  };

  const changeFontSize = (fontSize) => {
    console.log(`Tamanho da fonte alterado para: ${fontSize}`);
  };

  const changeColor = (color) => {
    console.log(`Cor alterada para: ${color}`);
  };

  return (
    <div className="settings-container">
      <h2>Configurações</h2>
      <div className="setting-option">
        <label>Idioma:</label>
        <select onChange={(e) => changeLanguage(e.target.value)}>
          <option value="pt-br">Português</option>
          <option value="en">English</option>
        </select>
      </div>
      <div className="setting-option">
        <label>Tamanho da Fonte:</label>
        <select onChange={(e) => changeFontSize(e.target.value)}>
          <option value="small">Pequeno</option>
          <option value="medium">Médio</option>
          <option value="large">Grande</option>
        </select>
      </div>
      <div className="setting-option">
        <label>Cor:</label>
        <input type="color" onChange={(e) => changeColor(e.target.value)} />
      </div>
    </div>
  );
};

export default Settings;
