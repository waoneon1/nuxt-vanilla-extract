import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    primary: '#12784a',
    secondary: '#444444',
    text: '#c0c0c0',
    line: '#ebebeb',
    white: '#fff',
    black: '#000',
  },
  marginTop: {
    '40': '40'
  },
  display: {
    block: 'block',
    flex: 'flex',
    inlineBlock: 'inline-block',
  },
  fontFamily: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
});
