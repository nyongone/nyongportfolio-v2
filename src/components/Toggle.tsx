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
    padding: 15px;
    line-height: 1.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    ${({ toggle }) => toggle && `background: #988888; color: white;`}
    transition: .1s background ease-in, .1s color ease-in;
    &:before {
      content: "▶";
      font-size: 1rem;
      transform: rotate(0deg);
      ${({ toggle }) => toggle && "transform: rotate(90deg);"}
    }
  `,
};

export default Toggle;
