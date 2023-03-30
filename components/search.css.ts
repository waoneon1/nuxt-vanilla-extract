import { style } from '@vanilla-extract/css';
import { vars } from '../vars.css'

export const searchWrapper = style({
  display: 'flex',
  position: 'relative',
  color: 'black',
  border: `${vars.color.line} 1px solid`,
  width: '100%',
  padding: 10,
  alignItems: 'center',
  marginBottom: 100,
  borderRadius: 999,
  marginTop: 40,
  backgroundColor: 'white'
});

export const searchInput = style({
  marginLeft: 12,
  color: vars.color.secondary,
  WebkitAppearance: 'none',
  outline: 'none',
  border: '1px white solid',
  width: '100%'
});

export const navBarItems = style({
  color: 'white',
  selectors: {
    '&:hover': {
      color: 'black'
    }
  }
});