import { ADD_CARD, ADD_DECK, DELETE_DECK } from './actionType'

const Reducer = (state=INITIAL_STATE, action) => {
    const { deckId, newQuestion } = action.payload 
    let newDeck

    switch(action.type) 
    {
        case ADD_CARD:
            newDeck = state.decks[deckId].questions.concat(newQuestion)
            return {
                ...state,
                decks: {
                    ...state.decks, 
                    [deckId]: {
                        title: deckId,
                        questions: newDeck
                    }
                }
            }

        case ADD_DECK:
            newDeck = {
                title: deckId,
                questions: []
            }
            return {
                ...state,
                decks: {
                    ...state.decks,
                    [deckId]: newDeck
                }
            }

        case DELETE_DECK:
            let newDecks = Object.keys(state.decks).reduce((r, e) => {
                if (!action.payload[e]) r[e] = state.decks[e]
                return r
            }, {})
            return {...state, decks: newDecks}
        
        default:
            return state
    }
}

export default Reducer