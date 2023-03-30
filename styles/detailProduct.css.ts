import { style } from '@vanilla-extract/css';
import { vars } from '../vars.css'


export const prodDetailWrapper = style({
  marginBottom: 100
});

export const prodDetailHeading = style({
  borderTop: `1px solid ${vars.color.line}`,
  borderBottom: `1px solid ${vars.color.line}`,
  padding: '30px 0',
  fontWeight: 'bold',
  marginBottom: 8,
  fontSize: 20
});

export const prodDetailBody = style({

});

