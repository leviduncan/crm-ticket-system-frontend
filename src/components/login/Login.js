import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
export const Login = ( {handleFormSwitch, handleOnSubmit, handleOnChange, email, password} ) => {


    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Client Login</h1>
                    <hr />
                    <Form autoComplete="off" onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <div className="mb-3">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleOnChange}
                                    placeholder="Enter Email"
                                    required
                                    
                                />
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <div className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={handleOnChange}
                                    placeholder="Password"
                                    required
                                    
                                />
                            </div>
                        </Form.Group>
                        <Button type="submit" className="btn btn-primary" >Login</Button>
                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                <a href="#!" onClick={() => handleFormSwitch('reset')}>Forgot Password</a>
                </Col>
            </Row>
        </Container>
    )
}

Login.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    handleFormSwitch: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}