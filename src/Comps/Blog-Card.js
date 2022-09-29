import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {CardGroup} from "react-bootstrap";

function GridExample() {
    return (
        <CardGroup style={{margin: '15px'}}>
            <Row xs={1} md={2} className="g-4">
                {Array.from({length: 4}).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160"/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </CardGroup>
    );
}

export default GridExample;