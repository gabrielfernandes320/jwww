import React from "react";
import { Button, ButtonGroup, Col, Form, Row, Spinner } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import Header from "../../components/Header";
import { ICharacter } from "../../interfaces/characters/character";
import CharacterHttpService from "../../services/http/character-http";
import { useMutation, useQuery } from "react-query";
import BaseLayout from "../../components/BaseLayout";
import { charactersListRoutePath } from "../../routes/config";
import { toast } from "react-toastify";

const Detail: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  useQuery("character", loadCharacter, {
    enabled: !!id,
  });

  const mutation = useMutation(
    async (data: ICharacter) => {
      if (data._id) {
        await CharacterHttpService.update(data);
      } else {
        await CharacterHttpService.insert(data);
      }
    },
    {
      onError: (error: any) => {
        toast.error(error.message);
      },
      onSuccess: () => {
        toast.success("Salvo com sucesso!");
        history.push(charactersListRoutePath);
      },
    }
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICharacter>();
  const onSubmit: SubmitHandler<ICharacter> = async (data: ICharacter) => {
    await mutation.mutateAsync(data);
  };

  async function loadCharacter() {
    const response: any = await CharacterHttpService.show(id);

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
              {...(register("name"), { required: true })}
              name="name"
              isInvalid={!!errors.name}
              placeholder="Informe a descrição"
            />
            {errors.name && (
              <Form.Control.Feedback type="invalid">
                {errors?.name?.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Profissao</Form.Label>
            <Form.Control
              {...(register("profession"), { required: true })}
              name="profession"
              isInvalid={!!errors.profession}
              placeholder="Informe a profession"
            />
            {errors.profession && (
              <Form.Control.Feedback type="invalid">
                {errors?.profession?.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </Form>
      </Row>
    </BaseLayout>
  );
};

export { Detail };
