import React from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILogin } from "../../interfaces/auth/login";
import LoginService from "../../services/login";
import { toast } from "react-toastify";
import { worldsListRoutePath } from "../../routes/config";
import { useMutation } from "react-query";

const Login: React.FC = () => {
  const history = useHistory();
  const mutation = useMutation(
    async (data: ILogin) => {
      await LoginService.login(data);
    },
    {
      onError: (error: any) => {
        toast.error(error.message);
      },
      onSuccess: () => {
        toast.success("Login realizado com sucesso!");
        history.push(worldsListRoutePath);
      },
    }
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();
  const onSubmit: SubmitHandler<ILogin> = (data: ILogin) =>
    mutation.mutate(data);

  return (
    <>
      <Row className="mt-5">
        <Col sm={5} />
        <Col>
          <h5
            className="mt-5"
            style={{ fontWeight: "bolder", color: "#383838" }}
          >
            Login
          </h5>
          <p>Olá, seja bem-vindo(a). Identifique-se.</p>
          <hr />

          <Form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                {...register("login")}
                name="login"
                isInvalid={!!errors.login}
                placeholder="Informe seu login"
              />
              {errors.login && (
                <Form.Control.Feedback type="invalid">
                  {errors?.login?.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                {...register("password")}
                type="password"
                name="password"
                placeholder="Informe a senha"
              />

              <Form.Text className="text-muted">
                Esqueceu sua senha?{" "}
                <Link
                  style={{
                    color: "#707070",
                    fontWeight: 700,
                  }}
                  to={"./password/forgot"}
                >
                  Redefina sua senha
                </Link>
              </Form.Text>
            </Form.Group>

            <Button className={"mt-5shadow-none"} block type="submit">
              {mutation.isLoading ? (
                <Spinner animation={"border"} />
              ) : (
                "Entrar no sistema"
              )}
            </Button>

            <Button variant="outline-primary" block>
              Criar uma nova conta
            </Button>
          </Form>
        </Col>
        <Col sm={5} />
      </Row>
    </>
  );
};

export default Login;
