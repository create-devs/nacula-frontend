import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import loginBG from '../media/5545.png';
import aetlLogo from '../media/aetl.png';

export default class Forgot extends Component {
    render() {
        return (
            <div className="login-wrapper container-fluid">
                <Row className="align-content-md-center" style={{minHeight: '100vh'}}>
                    <Col md={7} style={{alignSelf: 'center', textAlign: 'center'}}>
                        <img src={loginBG} alt=""/>
                    </Col>
                    <Col md={5} style={{alignSelf: 'center'}}>
                        <div className="login-form">
                            <div className="login-logo">
                                <img src={aetlLogo} alt=""/>
                                <p>Enter your email and we send you a password reset link.</p>
                            </div>
                            <form action="">
                                <input className="login-control" type="email" placeholder="Email" />
                                <Link to="/daily-activity"><button type="submit">Send Request</button></Link>
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
