export default function Transition(value) {
  return `
    transition: ${value};
    -webkit-transition: ${value};
    -moz-transition: ${value};
  `;
}
