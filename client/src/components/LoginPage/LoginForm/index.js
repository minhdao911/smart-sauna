import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, message } from 'antd';

import * as ROUTES from '../../../constants/routes';

const NormalForm = props => {
    const { firebase, history, form } = props;
    const { getFieldDecorator } = form;

    const handleSubmit = e => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                const {email, password} = values;
                firebase.doSignInWithEmailAndPassword(email, password)
                .then(() => {
                    history.push(ROUTES.MONITORING);
                })
                .catch(error => {
                    message.error(error.message);
                });
            }
        });
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} className="form-content__form">
                <Form.Item label="Email">
                    {getFieldDecorator("email", {
                        rules: [{ required: true, message: `Please input your email!` }],
                    })(
                        <Input
                        prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type='email'
                        placeholder='Email'
                        />,
                    )}
                </Form.Item>
                <Form.Item label="Password">
                    {getFieldDecorator("password", {
                        rules: [{ required: true, message: `Please input your password!` }],
                    })(
                        <Input
                        prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type='password'
                        placeholder='Password'
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="form-content__button">
                        Login
                    </Button>
                    <span>Not have an account? <Link to="/signup">Signup</Link></span>
                </Form.Item>
            </Form>
        </div>
    )
}

const LoginForm = Form.create({name: 'login'})(NormalForm);

export default LoginForm;