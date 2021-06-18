import React, { useEffect } from "react";
import { Button, ButtonGroup, Col, Form, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import Header from "../../components/Header";
import { IWorld } from "../../interfaces/worlds/world";
import WorldHttpService from "../../services/http/world-http";
import { QueryCache, useQuery } from "react-query";
import BaseLayout from "../../components/BaseLayout";
import { worldsListRoutePath } from "../../routes/config";
import { toast } from "react-toastify";

const Detail: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const { data } = useQuery("world", loadWorld, {
    enabled: !!id,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IWorld>();
  const onSubmit: SubmitHandler<IWorld> = async (data: IWorld) => {
    try {
      if (data._id) {
        await WorldHttpService.update(data);
      } else {
        await WorldHttpService.insert(data);
      }

      history.push(worldsListRoutePath);
    } catch (error) {
      toast.error("Erro ao salvar!");
    }
  };

  async function loadWorld() {
    const response: any = await WorldHttpService.show(id);

    setValue("description", response.data.description);
    setValue("_id", response.data._id);
    return response.data;
  }

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