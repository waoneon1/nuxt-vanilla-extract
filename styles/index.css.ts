import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../vars.css";

const system =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";
const fonts = {
  playfair: `'Playfair Display', ${system}`,
  poppins: `'Poppins', ${system}`,
} as const;

globalStyle("*", {
  boxSizing: "border-box",
})

globalStyle("a", {
  textDecoration: "none",
  color: vars.color.secondary
})

globalStyle("button", {
  textDecoration: "none",
  border: "none",
  cursor: "pointer"
})

globalStyle("body", {
  margin: 0,
  fontFamily: fonts.poppins,
  color: vars.color.secondary,
  backgroundColor: '#f6f6f6'
});

export const container = style({
  maxWidth: 1100,
  margin: '0 auto',
  padding: '0 20px'
});

export const spaceBottom = style({
  marginBottom: 100
});

