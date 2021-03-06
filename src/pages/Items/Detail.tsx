import React from "react";
import { Button, ButtonGroup, Col, Form, Row, Spinner } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import Header from "../../components/Header";
import { IItem } from "../../interfaces/items/item";
import ItemHttpService from "../../services/http/item-http";
import { useMutation, useQuery } from "react-query";
import BaseLayout from "../../components/BaseLayout";
import { itemsListRoutePath } from "../../routes/config";
import { toast } from "react-toastify";

const Detail: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  useQuery("item", loadItem, {
    enabled: !!id,
  });

  const mutation = useMutation(
    async (data: IItem) => {
      if (data._id) {
        await ItemHttpService.update(data);
      } else {
        await ItemHttpService.insert(data);
      }
    },
    {
      onError: (error: any) => {
        toast.error(error.message);
      },
      onSuccess: () => {
        toast.success("Salvo com sucesso!");
        history.push(itemsListRoutePath);
      },
    }
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IItem>();
  const onSubmit: SubmitHandler<IItem> = async (data: IItem) => {
    await mutation.mutateAsync(data);
  };

  async function loadItem() {
    const response: any = await ItemHttpService.show(id);

    console.log(response.data);

    reset(response.data);

    return response.data;
  }

  return (
    <BaseLayout>
      <Row className="header align-items-center pr-2 pl-2">
        <Header
          title={"Items"}
          subtitle={"Edite as informações de seu item!"}
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
                {errors?.description}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Valor</Form.Label>
            <Form.Control
              {...register("value")}
              name="value"
              isInvalid={!!errors.value}
              placeholder="Informe o valor do item"
            />
            {errors.value && (
              <Form.Control.Feedback type="invalid">
                {errors?.value}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              {...register("type")}
              name="type"
              isInvalid={!!errors.type}
              placeholder="Informe o tipo do item"
            />
            {errors.type && (
              <Form.Control.Feedback type="invalid">
                {errors?.type}
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </Form>
      </Row>
    </BaseLayout>
  );
};

export { Detail };
