const cardValues = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'JACK',
    'QUEEN',
    'KING',
    'ACE'
];

 const compareValues = ({ previousCardValue, currentCardValue }) => {
    const previousCardValueIndex = cardValues.indexOf(previousCardValue);
    const currentCardValueIndex = cardValues.indexOf(currentCardValue);

    if(previousCardValueIndex === -1 || currentCardValueIndex === -1) {
        throw new Error('Supplied cardValue not found in cardValues array')
    }
    if(previousCardValueIndex >= currentCardValueIndex) {
        return 'Loose'
    }
    if (previousCardValueIndex < currentCardValueIndex) {
        return "win";
       }
};
export default compareValues 