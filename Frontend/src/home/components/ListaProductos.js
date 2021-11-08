import { Container, Row, Col } from "react-bootstrap";
import Producto from "./Producto";

const ListaProductos = ({ isAuthenticated, carrito, setCarrito, productos }) => {
  return (
    <Container>
      <Row>
        {productos.map((producto) => (
          <Col xs={4} key={producto._id}>
            <Producto
              producto={producto}
              isAuthenticated={isAuthenticated}
              productos={productos}
              carrito={carrito}
              setCarrito={setCarrito}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListaProductos;
