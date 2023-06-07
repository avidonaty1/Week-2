import { useEffect, useState } from "react";
// import React from "react";
import { Formik, Field, Form } from "formik";
import { Button, Grid } from "@mui/material";

function Input() {
  return (
    <div>
      <Formik
        initialValues={{ FN: "", LN: "", email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <div>
          <Form>
            <Field name="FN" type="text"></Field>
            <Field name="LN" type="text"></Field>
            <Field name="email" type="email"></Field>
            <Field name="password" type="password"></Field>
            <Button type="submit">Submit</Button>
          </Form>

        </div>
      </Formik>
    </div>
  );
}

export default Input;
