import styled from "@emotion/styled";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Components.Main>{children}</Components.Main>
      <Footer />
    </>
  );
};

const Components = {
  Main: styled.main`
    width: 100%;
    height: auto;
    padding: 200px 80px 0px 80px;
    @media screen and (max-width: 767px) {
      padding-left: 40px;
      padding-right: 40px;
    }
  `,
};

export default Layout;
