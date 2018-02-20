function WithRipple(component) {
  return component.extend`
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
    transform: scale(10,10);
    opacity: 0;
    transition: transform .5s, opacity 1s;
  }

  &:active:after {
    transform: scale(0,0);
    opacity: .2;
    transition: 0s;
  }
`;
}

export default WithRipple;
