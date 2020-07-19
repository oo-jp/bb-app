import React from 'react';
import { useFormik } from 'formik';
import { Container, Form, Button } from 'react-bootstrap';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    // <form onSubmit={formik.handleSubmit}>
    //   <div>
    //     <label htmlFor='username'>ユーザー名</label>
    //     <input
    //       name='username'
    //       type='text'
    //       onChange={formik.handleChange}
    //       value={formik.values.username}
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor='password'>パスワード</label>
    //     <input
    //       name='password'
    //       type='text'
    //       onChange={formik.handleChange}
    //       value={formik.values.password}
    //     />
    //   </div>
    //   <div>
    //     <button type='submit'>登録</button>
    //   </div>
    // </form>
    <Container>
      <Form>
        <Form.Group controlId='formBasicId'>
          <Form.Label>アカウント名</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
            name='username'
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <Form.Text className='text-muted'></Form.Text>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>パスワード</Form.Label>
          <Form.Control
            type='password'
            placeholder=''
            name='password'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          ログイン
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;