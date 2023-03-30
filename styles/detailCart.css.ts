import { style } from '@vanilla-extract/css';
import { vars } from '../vars.css'


export const cartWrapper = style({
  display: 'flex',
  marginBottom: 60,
  marginTop: 100
});

export const cartRight = style({
  width: '100%',
  padding: 16, 
  marginLeft: 16,
  color: vars.color.secondary
});

export const cartName = style({
  fontWeight: 'bold',
  marginBottom: 12
});

export const cartPrice = style({
  fontWeight: 'bold',
  marginBottom: 24,
  fontSize: 24
});


export const cartLeft = style({

});

