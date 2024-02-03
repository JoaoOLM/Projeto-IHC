const url = `http://192.168.1.100:5000/led/changeExpression/9`

async function fetchData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
}

// Exemplos de como usar a função para os endpoints específicos
async function getExpressionByNumber(expressionNumber) {
    const url = `http://192.168.1.100:5000/led/changeExpression/${expressionNumber}`;
    const data = await fetchData(url);
    console.log('Expression by Number:', data);
}

async function getExpressionByBits(expressionBits) {
    const url = `http://192.168.1.100:5000/led/changeExpression/${expressionBits}`;
    const data = await fetchData(url);
    console.log('Expression by Bits:', data);
}

async function getExpressionList() {
    const url = `http://192.168.1.100:5000/led/getExpressionList`;
    const data = await fetchData(url);
    console.log('Expression List:', data);
}

export { getExpressionByNumber, getExpressionByBits, getExpressionList };