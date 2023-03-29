import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    core10: '#F7F3F6',
    core20: '#E6D3E4',
    core30: '#AF78B4',
    core40: '#A05EA6',
    core50: '#934398',
    core60: '#7F187F',
    core70: '#691568',
    core80: '#480D4A',
    black10: '#F5F5F5',
    black20: '#D1D1D6',
    black30: '#93939A',
    black40: '#777279',
    black50: '#646266',
    black60: '#4D4A4F',
    black70: '#363438',
    black80: '#211E22',
  },
  fontFamily: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
});
