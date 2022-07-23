import React, { Component } from 'react'
import { createDeckAndDraw, drawCardFromDeck } from './api';
import { CardLayout } from './Layout.components';
import compareValues from './utils';

export default class CardGameBoard extends Component {
    
    state = {
        cardImageUrl: null,
        cardValue: null,
        deckId: null,
        result: null
    }
    async componentDidMount() {
       const {deckId, value, image } = await createDeckAndDraw();
       this.setState({
           deckId,
           cardValue: value,
           cardImageUrl: image
       })
     }
//Synthetic event
onCardClick= async ({target: {name: bet}}) => {
    this.setState({
        cardImageUrl: null
        
    })
    const {deckId, cardValue: previousCardValue} = this.state;
    const {value: currentCardValue, image} = await drawCardFromDeck(deckId);
    const result = compareValues({
        previousCardValue,
        currentCardValue,
        bet
        
    });
    
    this.setState({
        result,
        cardValue: currentCardValue,
        cardImageUrl: image
    })
  
}

    render () {
        const {result, cardImageUrl} = this.state;
        if(!cardImageUrl) {
            return <h1>Loading...</h1>
        }        
  
        return (
            <CardLayout > 
              <img src={cardImageUrl} alt="This is your card" onClick={this.onCardClick}/>
             {result && <h2>{`You, my friend, ${result}`}</h2>} 
            </CardLayout>
            
        )
    }
}


