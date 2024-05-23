import styled from "@emotion/styled";
import React, { useState } from "react";

const Toggle = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <Styled.Title onClick={() => setToggle((prev) => !prev)} toggle={toggle}>
        {title}
      </Styled.Title>
      {toggle && children}
    </>
  );
};

const Styled = {
  Title: styled.h3<{ toggle: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    width: 100%;
    height: 100%;
    font-size: 2rem;
    font-weight: 800;
    cursor: pointer;
    &:before {
      content: "▶";
      font-size: inherit;
      transform: rotate(0deg);
      ${({ toggle }) => toggle && "transform: rotate(90deg);"}
    }
    @media screen and (max-width: 767px) {
      font-size: 1.5rem;
    }
  `,
};

export default Toggle;
