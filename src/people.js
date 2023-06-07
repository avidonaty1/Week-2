import { useState, useEffect } from "react";
import { Button, Grid, ButtonGroup, Checkbox } from "@mui/material";
import React from "react";
import "./style.css";
import { Delete } from "@mui/icons-material";
import { Formik, Field, Form } from "formik";

function People() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setPeople(json));
    console.log(people);
  }, []);


  let theForm = <Formik
    initialValues={{name: "", email: "", city: ""}}
    onSubmit={(values, helpers) => {
      console.log(values);

      let obj = {
        name: values.name,
        email: values.email,
        address: {city: values.city},
        id: crypto.randomUUID()
      }

      setPeople([obj, ...people]);

      helpers.setSubmitting(false);
      helpers.resetForm();

    }}
  >
    <div>
    <Form>
      <Field name="name" type="text"
      style={{width: 50}}
      ></Field>
      <Field name="email" type="email"></Field>
      <Field name="city" type="text"></Field>
      <button type="submit">Submit</button>
    </Form>
    </div>

  </Formik>



  let list = people.map((person) => {
    let element = (
      <div className="separateElements" key={person.id}>
        {/* grid here */}
        <Grid
          container
          spacing={15}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <p className="alignParagraph">Name: {person.name}</p>
          </Grid>

          <Grid item>
            <p className="alignParagraph">Email: {person.email}</p>
          </Grid>

          <Grid item>
            <p className="alignParagraph">City: {person.address.city}</p>
          </Grid>
        </Grid>

        {/* delete button here */}
        <Button
          variant="outlined"
          sx={{
            width: 100,
            color: "red",

            "&:hover": {
              backgroundColor: "error.main",
              color: "white",
            },
          }}
          onClick={() => {
            let newArr = people.filter((other) => {
              if (other.id === person.id) {
                return false;
              } else {
                return true;
              }
            });

            setPeople(newArr);
          }}
          startIcon={<Delete />}
        >
          Delete
        </Button>
      </div>
    );

    // returns each individual element in array
    return element;
  });

  return (
    <Grid
    container 
    direction="row"
    gap={5}
    width="100vw"
    >
      <Grid item
      xs={7}
      >
      {list}
      </Grid>
      <Grid item>
      {theForm}
      </Grid>



    </Grid>

  )
}

export default People;
