/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import { Flex } from "../globalFunctions";

const Login = () => {
  return (
    <Container>
      <CTA>
        <img src="/images/cta-logo-one.svg" alt="logo1" className="logo1" />
        <a href="#">GET ALL THERE</a>
        <p>
          Get Premier Access to Rays and the Last Dragon. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dignissimos beatae asperiores ad
          nisi et sequi quam expedita iure dolorem magnam?
        </p>
        <img src="/images/cta-logo-two.png" alt="logo2" className="logo2" />
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.section`
  ${Flex("center")};

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: url("/images/login-background.jpg") top / cover no-repeat fixed;
    z-index: -2;
    opacity: 0.5;
  }
`;

const CTA = styled.div`
  ${Flex("center", "column")}
  width: min(100%, 650px);
  padding: 80px 20px;
  gap: 1rem;

  a {
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    border-radius: 4px;
    text-align: center;
    font-size: clamp(0.9rem, 1.2vw, 1.2rem);
    cursor: pointer;
    letter-spacing: 1.5px;

    &:hover {
      background-color: #0483ee;
    }
  }

  p {
    font-size: 0.8rem;
    text-align: center;
    line-height: 1.5;
    margin-top: 0.2rem;
  }
`;
