import styled from "@emotion/styled";

const Footer = () => {
  return (
    <Styled.Container>
      <Styled.Paragraph>© by 조용원.</Styled.Paragraph>
      <Styled.Paragraph>All Right Reserved.</Styled.Paragraph>
      <Styled.Paragraph>
        <a href="https://pf.nyong.world">https://pf.nyong.world</a>
      </Styled.Paragraph>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    width: 100%;
    min-height: 120px;
    height: auto;
    padding: 0px 80px 80px 40px;
  `,
  Paragraph: styled.p`
    font-size: 1rem;
    color: #b3b0b0;
  `,
};

export default Footer;
