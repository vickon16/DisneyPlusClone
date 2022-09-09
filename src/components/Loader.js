import styled from "styled-components";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <Container>
      <ColorRing
        visible={true}
        height="60"
        width="60"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </Container>
  );
}

export default Loader

const Container = styled.div`
  width: fit-content;
  margin: 4rem auto;
`
