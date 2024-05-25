import styled from "@emotion/styled";
import Logo from "@/assets/images/logo.png";

const Header = () => {
  return (
    <Components.Container>
      <a href="/">
        <Components.LogoImage src={Logo} />
      </a>
      <Components.Navigation.Container>
        <Components.Navigation.Item href="#home">
          Home
        </Components.Navigation.Item>
        <Components.Navigation.Item href="#about">
          About
        </Components.Navigation.Item>
        <Components.Navigation.Item href="#projects">
          Projects
        </Components.Navigation.Item>
      </Components.Navigation.Container>
    </Components.Container>
  );
};

const Components = {
  Container: styled.header`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: calc(100% - 80px);
    height: 100px;
    padding: 0 40px;
    margin: 20px 40px;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0);
    transition:
      0.15s transform ease-in,
      0.15s background ease-in,
      0.15s backdrop-filter ease-in;
    z-index: 999;
    @media screen and (min-width: 768px) {
      &:hover {
        background: rgba(0, 0, 0, 0.04);
        backdrop-filter: blur(3px);
        transform: scale(1.02);
      }
    }
    @media screen and (max-width: 767px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      width: 100%;
      height: 150px;
      margin: 0;
      padding: 20px 0;
      padding-top: 0;
      background: rgba(0, 0, 0, 0.02);
      border-radius: 0;
      border-bottom: 1px solid #e2dddd;
      backdrop-filter: blur(3px);
    }
  `,
  LogoImage: styled.img`
    width: 100px;
    object-fit: cover;
    opacity: 0.75;
  `,
  Navigation: {
    Container: styled.nav`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 64px;
      width: auto;
      height: 100%;
      @media screen and (max-width: 767px) {
        gap: 32px;
      }
    `,
    Item: styled.a`
      display: flex;
      justify-content: center;
      align-items: center;
      width: auto;
      height: 100%;
      font-size: 1.25rem;
      font-weight: 500;
      color: #5a5a5a;
      cursor: pointer;
    `,
  },
};

export default Header;
