import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../vars.css'


export const backToShopWrapper = style({
  borderTop: `1px solid ${vars.color.line}`,
  borderBottom: `1px solid ${vars.color.line}`,
  padding: '24px 50px',
  fontWeight: 'bold',
  marginBottom: 8,
  fontSize: 16,
  width: '100%',
});
export const backToShop = style({
  display: 'flex',
  alignItems: 'center',
  gap: 15
});
export const cartHeading = style({
  textAlign: 'center',
  marginTop: 50,
  marginBottom: 50
});
export const cart = style({
  display: 'flex'
});
export const cartOrderWrapper = style({
  width: '70%',
  marginRight: 24
});
export const cartOrders = style({
  backgroundColor: 'white',
  borderRadius: 10,
});
export const cartOrder = style({
  display: 'flex',
  padding: 20,
  marginBottom: 10,
  borderBottom: '1px solid #e3e3e3'
});
export const cartOrderItem = style({
  flexGrow: 1,
  marginLeft: 20
});
globalStyle(`${cartOrderItem} h4`, {
  margin: 0,
  marginBottom: 5
});
globalStyle(`${cartOrderItem} span`, {
  fontSize: 14,
  marginBottom: 16,
  display: 'inline-block'
});
globalStyle(`${cartOrderItem} p`, {
  margin: 0,
  fontSize: 14,
  marginBottom: 16,
});
export const cartOrderInc = style({
  display: 'flex'
});
export const cartOrderCount = style({
  padding: '0 10px',
  display: 'flex',
  alignItems: 'center'
});
export const cartOrderTrash = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
});
export const cartSummaryWrapper = style({
  width: '30%'
});
export const cartSummary = style({
  backgroundColor: 'white',
  borderRadius: 10,
  padding: 20
});
export const cartSummarys = style({
  display: 'flex',
  justifyContent: 'space-between'
});
export const cartSummaryItem = style({
  borderBottom: '1px solid #e3e3e3',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  paddingBottom: 16,
  fontSize: 13
});
export const cartSummaryTotal = style({

});


