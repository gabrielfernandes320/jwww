import React from "react";
import { Col } from "react-bootstrap";

interface Props {
  title: string;
  subtitle: string;
}

export default function Header({ subtitle, title }: Props) {
  return (
    <>
      <Col>
        <h3 className="mt-2">{title}</h3>
        <p>{subtitle}</p>
      </Col>
    </>
  );
}
