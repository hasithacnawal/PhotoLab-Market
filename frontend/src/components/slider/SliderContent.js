import styled from "@emotion/styled";

const SliderContent = styled.div`
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  height: 80%;
  width: ${(props) => props.width}px;
  display: flex;
  background: lightblue;
`;
export default SliderContent;
