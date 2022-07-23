import axios from 'axios';
/*I learned allot from a youtube video of CyberPotato.
I used axios card deck as my cards api.
First I declared the api in this file and I exported it inside the code.
I also shuffled the cards in the api. I called the data and specified the data: cardresponse
as you cannot decale data twice when it is different data */
const api = axios.create({
    baseURL: 'http://deckofcardsapi.com/api/deck/'
})

export const createDeckAndDraw = async () => {
  const { data } = await api.get('new/shuffle/', {
        params: {
            deck_count: 1
        }
    })
    const {deck_id: deckId} = data;

    const cardResponse = await drawCardFromDeck(deckId)  
    return cardResponse;
};

export const drawCardFromDeck = async (deckId) => {
    const { data } = await api.get(`${deckId}/draw/`,{
        params: {
        count: 1
        }
    })
    const { cards } = data;
    const {value, image} = cards[0];
    return {deckId, value, image}
}




