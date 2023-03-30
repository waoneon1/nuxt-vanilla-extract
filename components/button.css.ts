import { style, styleVariants, globalStyle } from '@vanilla-extract/css';
import { vars } from '../vars.css'

export const btnWrapper = style({
  display: 'flex',
  justifyContent: 'center',
});
export const btnBase = style({
  backgroundColor: vars.color.primary,
  color: 'white',
  display: 'flex',
  fontWeight: 'bold',
  padding: '12px 12px',
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
});
export const btn = styleVariants({
  primary: [btnBase, { padding: '12px 12px' }],
  wide: [btnBase, { padding: '12px 90px' }],
  full: [btnBase, { width: '100%' }],
  icon: [btnBase, { width: 35, height: 35 }],
  iconTrash: [btnBase, { 
    width: 35, 
    height: 35, 
    backgroundColor: 'gray'
  }],
});

globalStyle(`${btnBase} i`, {
  marginRight: 5
});
