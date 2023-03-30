import { style } from '@vanilla-extract/css';
import { vars } from '../../vars.css'

export const infoBar = style({
  display: 'flex',
  backgroundColor: vars.color.secondary,
  color: 'white',
  width: '100%',
  fontSize: 14,
  justifyContent: 'center',
  paddingTop: 8,
  paddingBottom: 8
});