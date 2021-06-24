import React from "react";
import { Button, ButtonGroup, Col, Form, Row, Spinner } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import Header from "../../components/Header";
import { IWorld } from "../../interfaces/worlds/world";
import WorldHttpService from "../../services/http/world-http";
import { useMutation, useQuery } from "react-query";
import BaseLayout from "../../components/BaseLayout";
import { worldsListRoutePath } from "../../routes/config";
import { toast } from "react-toastify";

const Detail: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  useQuery("world", loadWorld, {
    enabled: !!id,
  });

  const mutation = useMutation(
    async (data: IWorld) => {
      if (data._id) {
        await WorldHttpService.update(data);
      } else {
        await WorldHttpService.insert(data);
      }
    },
    {
      onError: (error: any) => {
        toast.error(error.message);
      },
      onSuccess: () => {
        toast.success("Salvo com sucesso!");
        history.push(worldsListRoutePath);
      },
    }
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IWorld>();
  const onSubmit: SubmitHandler<IWorld> = async (data: IWorld) => {
    await mutation.mutateAsync(data);
  };

  async function loadWorld() {
    const response: any = await WorldHttpService.show(id);

    reset(response.data);

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
              {mutation.isLoading ? <Spinner animation={"border"} /> : "Salvar"}
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
