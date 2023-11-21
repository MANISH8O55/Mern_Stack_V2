import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#42969f' }}>
      <Container>
        <Row>
          <Col className='text-center py-3' style={{ color: '#555555' }}>
            <p>BUY-BRAND'S &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
