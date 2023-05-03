import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="my-4">
                        <Card.Body>
                            <Card.Title>Tell us the differences between uncontrolled and controlled components.</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                By Noman Ahmed
                            </Card.Subtitle>
                            <Card.Text>
                                In React, there are two types of components: controlled and uncontrolled.
                                <br /> <br />
                                Uncontrolled components are components that maintain their own internal state and do not rely on any external state management. They are typically used for basic form inputs, such as text fields, checkboxes, and radio buttons.
                                <br /> <br />
                                Controlled components, on the other hand, rely on the parent component to manage and update their state. They receive their initial values and event handlers as props from the parent component, and they notify the parent component when their values change by invoking callback functions passed down as props.
                                <br /> <br />
                                The main difference between the two is that in an uncontrolled component, the state is managed internally by the component itself, while in a controlled component, the state is managed externally by the parent component. Controlled components offer more control over the state of the component but require more code to manage the state. Uncontrolled components are simpler to use but offer less control over the state.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="my-4">
                        <Card.Body>
                            <Card.Title>How to validate React props using PropTypes?</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                By Noman Ahmed
                            </Card.Subtitle>
                            <Card.Text>
                                React provides a library called PropTypes that can be used to validate the props passed to a component by defining the data type and validation rules for each prop. Below are the validators for the basic data types:
                                <br />
                                <ul>
                                    <li>PropTypes.any: The prop can be of any data type</li>
                                    <li>PropTypes.bool: The prop should be a Boolean</li>
                                    <li>PropTypes.number: The prop should be a number</li>
                                    <li>PropTypes.string: The prop should be a string</li>
                                    <li>PropTypes.func: The prop should be a function</li>
                                    <li>PropTypes.array: The prop should be an array</li>
                                    <li>PropTypes.object: The prop should be an object</li>
                                    <li>PropTypes.symbol: The prop should be a symbol</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="my-4">
                        <Card.Body>
                            <Card.Title>Tell us the difference between nodejs and express js.</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                By Noman Ahmed
                            </Card.Subtitle>
                            <Card.Text>
                                Node.js is a runtime environment for executing JavaScript code outside of a web browser. It provides an event-driven, non-blocking I/O model that makes it lightweight and efficient, making it well-suited for building scalable network applications.
                                <br /> <br />
                                Express.js, on the other hand, is a minimalist web framework built on top of Node.js. It provides a set of features for building web applications and APIs, such as routing, middleware, and template rendering. Express.js simplifies the process of creating web applications in Node.js by providing a higher-level API that abstracts away some of the lower-level details.
                                <br /> <br />
                                In essence, Node.js provides the foundation for building server-side applications in JavaScript, while Express.js helps developers build web applications more easily on top of Node.js.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="my-4">
                        <Card.Body>
                            <Card.Title>What is a custom hook, and why will you create a custom hook?</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                By Noman Ahmed
                            </Card.Subtitle>
                            <Card.Text>
                                In React, a custom hook is a JavaScript function that starts with the prefix "use" and can call other hooks if needed. Custom hooks allow developers to extract reusable logic from components and share it across multiple components. With custom hooks, one can create their own hooks that can be used in components, or can use existing hooks from other libraries. Custom hooks make it easier to maintain and reuse code, and they help to keep your components clean and readable.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Blog;