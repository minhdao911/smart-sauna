import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';

const NormalForm = props => {
    const { form } = props;
    const { getFieldDecorator } = form;

    const [confirmDirty, setComfirmDirty] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
              console.log('Received values of form: ', values);
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
    )
}

const SignupForm = Form.create({name: 'signup'})(NormalForm);

export default SignupForm;