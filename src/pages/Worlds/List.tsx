import React, { useMemo } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Dropdown,
  Form,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILogin } from "../../interfaces/auth/login";
import LoginService from "../../services/login";
import BaseLayout from "../../components/BaseLayout";
import history from "../../services/history";
import {
  worldsDetailRoutePath,
  worldsListRoutePath,
} from "../../routes/config";
import { StyledTh } from "./styles";
import { useQuery } from "react-query";
import WorldHttpService from "../../services/http/world-http";
import { ReactComponent as More } from "../../assets/icons/more.svg";
import Header from "../../components/Header";

const List: React.FC = () => {
  const { data, isLoading } = useQuery(["worlds"], loadWorlds);

  async function loadWorlds() {
    const response: any = await WorldHttpService.index({});

    return response.data;
  }

  return (
    <BaseLayout>
      <Row className="header align-items-center pr-2 pl-2">
        <Header title={"Mundos"} subtitle={"Veja seus mundos!"} />
        <Col className="text-right">
          <ButtonGroup className="float-right">
            <Button
              className="float-right"
              onClick={() => {
                history.push(`${worldsListRoutePath}/new`);
              }}
            >
              Novo
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <Table>
          <thead>
            <tr>
              <StyledTh>Nº</StyledTh>
              <StyledTh>DESCRIÇÃO</StyledTh>
              <StyledTh></StyledTh>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <Spinner animation={"border"} />
            ) : (
              data.map((item: any, index: number) => (
                <tr key={index}>
                  <td>{item._id}</td>
                  <td>{item.description}</td>
                  <td>
                    <Dropdown key="left">
                      <Dropdown.Toggle
                        bsPrefix="nexen"
                        as={Button}
                        variant="text"
                      >
                        <More />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          as={Link}
                          to={`${worldsListRoutePath}/${item._id}`}
                        >
                          Editar
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                          onClick={() => {
                            //return printInvoice(item ?? {});
                          }}
                        >
                          Excluir
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Row>
    </BaseLayout>
  );
};

export { List };
