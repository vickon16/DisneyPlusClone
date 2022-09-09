import styled from "styled-components";

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="viewers-1" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="viewers-1" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="viewers-1" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="viewers-1" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="viewers-1" />
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.section`
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  place-items: center;
  grid-gap: 20px;
  padding: 0 20px;
  width: min(100%, 1200px);

  @media screen and (min-width: 1500px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  } ;
`;

const Wrap = styled.article`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.35);
  }
`;
