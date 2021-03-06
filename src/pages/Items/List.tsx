import React from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Dropdown,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import BaseLayout from "../../components/BaseLayout";
import { itemsListRoutePath } from "../../routes/config";
import { StyledTh } from "./styles";
import { useMutation, useQuery } from "react-query";
import ItemHttpService from "../../services/http/item-http";
import { ReactComponent as More } from "../../assets/icons/more.svg";
import Header from "../../components/Header";
import { toast } from "react-toastify";

const List: React.FC = () => {
  const { data, isLoading, refetch } = useQuery(["items"], loadWorlds);
  const history = useHistory();

  async function loadWorlds() {
    const response: any = await ItemHttpService.index({});

    return response.data;
  }

  const mutation = useMutation(
    async (id: number) => {
      await ItemHttpService.destroy(id);
    },
    {
      onError: (error: any) => {
        toast.error(error.message);
      },
      onSuccess: () => {
        toast.success("Excluido com sucesso!");
      },
    }
  );

  return (
    <BaseLayout>
      <Row className="header align-items-center pr-2 pl-2">
        <Header title={"Items"} subtitle={"Veja seus Items!"} />
        <Col className="text-right">
          <ButtonGroup className="float-right">
            <Button
              className="float-right"
              onClick={() => {
                history.push(`${itemsListRoutePath}/new`);
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
              <StyledTh>VALOR</StyledTh>
              <StyledTh>TIPO</StyledTh>
              <StyledTh></StyledTh>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <Spinner animation={"border"} />
            ) : (
              data?.map((item: any, index: number) => (
                <tr key={index}>
                  <td>{item._id}</td>
                  <td>{item.description}</td>
                  <td>{item.value}</td>
                  <td>{item.type}</td>

                  <td>
                    <Dropdown className={"float-right"} key="left">
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
                          to={`${itemsListRoutePath}/${item._id}/edit`}
                        >
                          Editar
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                          onClick={async () => {
                            await mutation.mutateAsync(item._id);
                            refetch();
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
