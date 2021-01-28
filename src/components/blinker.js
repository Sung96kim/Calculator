import $ from "jquery";
import styled from 'styled-components'
import "../containers/Calculator.css";

const blink_me = styled.div`
  color: #E0B612;
`

export default function blinker() {
  $(blink_me).fadeOut(200);
  $(blink_me).fadeIn(200);
}
setInterval(blinker, 500);
