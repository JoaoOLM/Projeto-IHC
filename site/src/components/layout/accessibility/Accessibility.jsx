import React, {useState, useEffect} from 'react';
import './Accessibility.css'; // Importe o estilo específico do botão de acessibilidade se houver
import { MdSettingsAccessibility } from "react-icons/md";

const AccessibilityButton = () => {
    const [accessibilityOpen, setAccessibilityOpen] = useState(false);

    const toggleAccessibility = (clickEvent) => {
        // Impede a propagação do evento para que não alcance o corpo da página
        clickEvent.stopPropagation();
        setAccessibilityOpen(!accessibilityOpen);
    }

    useEffect(() => {
        const handleOutsideClick = (clickEvent) => {
            const accessibility = document.getElementById('accessibility');

            // Verifica se o clique foi fora da sidebar
            if (accessibilityOpen && accessibility && !accessibility.contains(clickEvent.target)) {
                toggleAccessibility(clickEvent);
            }
        };

        // Adiciona o ouvinte de evento ao corpo da página
        document.body.addEventListener('click', handleOutsideClick);

        // Remove o ouvinte de evento ao desmontar o componente
        return () => {
            document.body.removeEventListener('click', handleOutsideClick);
        };
    }, [accessibilityOpen, toggleAccessibility]);

    return (
        <div>
            <div className='accessibility-button' onClick={toggleAccessibility}>
                <MdSettingsAccessibility size={30} color='#1D1B20' />
            </div>

            {/* Aba de Acessibilidade */}
            {accessibilityOpen && (
                <div id="accessibility" className={`accessibility ${accessibilityOpen ? 'open' : ''}`}>
                    <div className="accessibility-button" onClick={toggleAccessibility}>
                        <MdSettingsAccessibility size={30} color='#fff' />
                    </div>
                </div>
            )}
        </div>
    );
}

export default AccessibilityButton;
