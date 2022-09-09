import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default Layout;

const Main = styled.main`
  width: min(100%, 1550px);
  padding: min(1.5rem, 3%);
  min-height: calc(100vh - 60px);
  position: relative;
  padding-top: 4.4rem;
  margin: 0 auto;
  overflow: hidden;
`;
