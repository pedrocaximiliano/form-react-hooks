import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Card = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Card;
