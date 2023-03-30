import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../vars.css'

export const wrapperNavbar = style({
  display: 'flex',
  position: 'relative',
  backgroundColor: vars.color.primary,
  color: 'white',
  width: '100%',
  justifyContent: 'center',
  padding: 18,
  alignItems: 'center',
});

export const navBar = style({
  backgroundColor: vars.color.primary,
  color: 'white',
  justifyContent: 'center',
  position: 'absolute',
  right: 50,
  display: 'flex',
  gap: 20,
  fontSize: 18
});

export const navBarItems = style({
  color: 'white',
  position: 'relative',
  selectors: {
    '&:hover': {
      color: 'black'
    }
  }
});

export const cartCount= style({
  width: 20,
  height: 20,
  backgroundColor: vars.color.secondary,
  border: '2px solid white',
  position: 'absolute',
  borderRadius: 999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: -12,
  right: -12,
  fontSize: 10
});

export const accountDropdown = style({
  color: vars.color.secondary,
  position: 'absolute',
  fontSize: 12,
  right: -10,
  backgroundColor: 'white',
  border: `1px solid ${vars.color.secondary}`,
  padding: '5px 10px'
});

globalStyle(`${accountDropdown} ul`, {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  textAlign: 'right'
});

globalStyle(`${accountDropdown} li`, {
  padding: 5
});
