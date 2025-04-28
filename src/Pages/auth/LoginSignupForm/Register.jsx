import React from "react";
import Form from "../Form";
import Layout from "../../../Components/layout";
import { useDispatch } from "react-redux";
import { register } from "../../../../store/authSlice";

const Register = () => {

  const dispatch = useDispatch();
  const handleRegister = (data) => {
    dispatch(register(data));
  };

  return (
    <Layout>
      <Form type="Register" onSubmit={handleRegister} />
    </Layout>
  );
};

export default Register;
