import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, message } from 'antd';

import * as ROUTES from '../../../constants/routes';
import * as ROLES from '../../../constants/roles';

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead.
`;

const NormalForm = props => {
    const { firebase, history, form } = props;
    const { getFieldDecorator } = form;

    const [confirmDirty, setComfirmDirty] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        const roles = [ROLES.USER];

        props.form.validateFields((err, values) => {
            if (!err) {
                const {email, password} = values;
                firebase.doCreateUserWithEmailAndPassword(email, password)
                .then(authUser => {
                    // Create user in Firebase cloud firestore
                    return firebase.user(authUser.user.uid).set(
                        {
                        email,
                        roles
                        },
                        { merge: true },
                    );
                })
                .then(() => {
                    history.push(ROUTES.MONITORING);
                })
                .catch(error => {
                    if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                        error.message = ERROR_MSG_ACCOUNT_EXISTS;
                    }
                    message.error(error.message);
                });
            }
        });
    }

    const handleConfirmBlur = e => {
        const { value } = e.target;
        setComfirmDirty(confirmDirty || !!value);
    };

    const validateToNextPassword = (rule, value, callback) => {
        if (value && confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    const compareToFirstPassword = (rule, value, callback) => {
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
    };

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
                <Form.Item label="Password" hasFeedback>
                    {getFieldDecorator("password", {
                        rules: [
                            { required: true, message: `Please input your password!` },
                            { validator: validateToNextPassword }
                        ],
                    })(
                        <Input
                        prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type='password'
                        placeholder='Password'
                        />,
                    )}
                </Form.Item>
                <Form.Item label="Confirm Password" hasFeedback>
                    {getFieldDecorator("confirm", {
                        rules: [
                            { required: true, message: `Please confirm your password!` },
                            { validator: compareToFirstPassword }
                        ],
                    })(
                        <Input
                        prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type='password'
                        placeholder='Confirm Password'
                        onBlur={handleConfirmBlur}
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="form-content__button">
                        Login
                    </Button>
                    <span>Have an account? <Link to="/login">Login</Link></span>
                </Form.Item>
            </Form>
        </div>
    )
}

const SignupForm = Form.create({name: 'signup'})(NormalForm);

export default SignupForm;