import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'


export const ResetPassword = ({ handleFormSwitch, handleOnResetSubmit, handleOnChange, email }) => {


    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Reset Password</h1>
                    <hr />
                    <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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

                        <Button type="submit" className="btn btn-primary" >Reset Password</Button>
                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!" onClick={() => handleFormSwitch('login')}>Login Now</a>
                </Col>
            </Row>
        </Container>
    )
}

ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    handleFormSwitch: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
}