import React from "react";
import { Button, ButtonGroup, Col, Form, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILogin } from "../../interfaces/auth/login";
import LoginService from "../../services/login";
import BaseLayout from "../../components/BaseLayout";
import Header from "../../components/Header";
import { IWorld } from "../../interfaces/worlds/world";
import WorldHttpService from "../../services/http/world-http";

const Detail: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IWorld>();
  const onSubmit: SubmitHandler<IWorld> = (data: any) =>
    WorldHttpService.insert(data);

  return (
    <BaseLayout>
      <Row className="header align-items-center pr-2 pl-2">
        <Header
          title={"Mundos"}
          subtitle={"Edite as informações de seu mundo!"}
        />
        <Col className="text-right">
          <ButtonGroup className="float-right">
            <Button className="float-right" onClick={handleSubmit(onSubmit)}>
              Salvar
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Form className="mt-5">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              {...register("description")}
              name="description"
              isInvalid={!!errors.description}
              placeholder="Informe a descrição"
            />
            {errors.description && (
              <Form.Control.Feedback type="invalid">
                {errors?.description?.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </Form>
      </Row>
    </BaseLayout>
  );
};

export { Detail };
