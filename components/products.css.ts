import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../vars.css'

export const productWrapper = style({
  marginBottom: 100
});

export const productHeading = style({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 14,
  color: vars.color.secondary,
  fontWeight: 500,
  marginBottom: 20
});

export const productsList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
  gap: 30
});

export const product = style({
  color: vars.color.secondary,
  cursor: 'pointer'
});


globalStyle(`${product} .brand`, {
  fontWeight: 'bold',
  marginBottom: 4
});
globalStyle(`${product} .name`, {
  marginBottom: 8,
  fontSize: 14,
  color: vars.color.text
});
globalStyle(`${product} .price`, {
  fontWeight: 'bold',
  marginBottom: 8,
  fontSize: 20
});
