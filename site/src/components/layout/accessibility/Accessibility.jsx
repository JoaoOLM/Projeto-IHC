import React, {useState} from 'react';
import './Accessibility.css'; // Importe o estilo específico do botão de acessibilidade se houver
import { MdAccessible } from "react-icons/md";

const AccessibilityButton = () => {
    const [accessibilityOpen, setAccessibilityOpen] = useState(false);

    const toggleAccessibility = () => setAccessibilityOpen(!accessibilityOpen);

    return (
        <div>
            <div className='accessibility-button' onClick={toggleAccessibility}>
                <MdAccessible size={20} color='#1D1B20' />
            </div>

            {/* Aba de Acessibilidade */}
            {accessibilityOpen && (
                <div className='accessibility-tab'>
                    {/* Conteúdo da Aba de Acessibilidade */}
                    <p>Conteúdo da Aba de Acessibilidade</p>
                </div>
            )}
        </div>
    );
}

export default AccessibilityButton;
