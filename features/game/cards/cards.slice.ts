import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../../redux/store';
import shuffle from '../../../hooks/use-card-shuffling';

export interface ICardAction {
  id: number;
  value: boolean;
}

export interface ICard {
  id: number;
  name: string;
  isFlippable: boolean;
  isFlipped: boolean;
  hasPair: boolean;
  cardWidth: number;
}

interface IGame {
  cards: ICard[];
  flips: number;
}

//8 cards
const cardImageNames: string[] = [
  'bat',
  'bones',
  'cauldron',
  'dracula',
  'eye',
  'ghost',
  'pumpkin',
  'skull',
];

//16 total
const cardDeck: ICard[] = shuffle(
  Array(2)
    .fill(cardImageNames)
    .flat()
    .map((name, id) => ({
      id,
      name,
      isFlippable: true,
      isFlipped: false,
      hasPair: false,
    })),
);

const initialState: IGame = {cards: cardDeck, flips: 0};

const cardPairFlipped = (state: ICard[]) =>
  state.filter(card => card.isFlipped && !card.hasPair).length === 2;

const restoreFlipOnNonPairCards = (state: ICard[]) =>
  state
    .filter(card => !card.hasPair)
    .forEach(card => {
      card.isFlipped = false;
      card.isFlippable = true;
    });

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    resetCards: state => {
      const shuffledCards = shuffle(
        state.cards.map(card => ({
          ...card,
          isFlippable: true,
          isFlipped: false,
          hasPair: false,
        })),
      );

      return {
        cards: shuffledCards,
        flips: 0,
      };
    },
    flipCard: (state, action: PayloadAction<number>) => {
      const cards = state.cards;
      const card = cards.find(card => card.id === action.payload);
      if (!card || !card.isFlippable || card.hasPair) return;

      card.isFlipped = !card.isFlipped;
      card.isFlippable = false;

      if (cardPairFlipped(cards)) {
        cards.forEach(card => {
          card.isFlippable = false;
        });
      }
    },
    cardAnimationToBackDone: state => {
      const cards = state.cards;
      if (!cardPairFlipped(cards)) return;
      const pair = cards.filter(card => card.isFlipped && !card.hasPair);

      if (pair[0].name === pair[1].name) {
        pair[0].hasPair = true;
        pair[1].hasPair = true;
      }

      restoreFlipOnNonPairCards(cards);
      state.flips += 1;
    },
  },
});

export const {resetCards, flipCard, cardAnimationToBackDone} =
  cardsSlice.actions;

export const selectCards = (state: RootState) => state.cards.cards;
export const selectFlips = (state: RootState) => state.cards.flips;

export default cardsSlice.reducer;
