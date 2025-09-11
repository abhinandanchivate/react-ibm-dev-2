import React, { useState } from "react";
import { registerUser } from "../services/auth.service";
const registerState = {
  name: "abhi",
  email: "",
  password: "",
  password2: "",
};
const Register = () => {
  // we will decalre the state
  // we have to use a hook called useState
  const [form, setForm] = useState(registerState);
  // destructuring of the json object
  // form.name , form.email , form.password , form.password2
  // name , email , password , password2
  // const name = form.name
  // const email = form.email
  // const password = form.password
  // const password2 = form.password2
  const { name, email, password, password2 } = form; // destructuring
  // form : state variable
  // setForm : function to update the state variable
  // hook : hooks are the special functions in react which allow us to use the features of react : state , life cycle. etc.

  // onChange
  const onChange = (e) => {
    // we want to update the state variable
    // to update the state : we ahve to use the function setForm
    const { name, value } = e.target;

    // name and value ==> input tag ==> e.target(input tag)
    // it will consider from e.target :

    setForm({ ...form, [name]: value });
    // {name: 'abhi', email: '', password: '', password2: '',[name]: value}
    // [name]: value : we are updating the value for the key provided key in our state.

    // ... ==> form : state: is it a json object
    // this json object will have 4 key value pairs
    // ... will copy all the key value pairs from form(state) to the new json object i.e.{...form}
  };
  // onSubmit
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(form);
    registerUser(form) // state object
      // state object i.e. form will hold the data from the form(input data)

      .then((res) => console.log(res))
      .catch((err) => {});
  };

  return (
    <>
      {" "}
      <section class="container">
        <h1 class="large text-primary">Sign Up</h1>
        <p class="lead">
          <i class="fas fa-user"></i> Create Your Account
        </p>
        <form class="form" onSubmit={onSubmit}>
          <div class="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
            />
            <small class="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              value={password}
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
              value={password2}
              onChange={onChange}
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Register" />
        </form>
        <p class="my-1">
          Already have an account? <a href="login.html">Sign In</a>
        </p>
      </section>
    </>
  );
};

export default Register;
