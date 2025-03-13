import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { registerValidationRules } from "../validations/Validations";
import Alert from "react-bootstrap/Alert";
import { signUp } from "../services/AuthService";
import Swal from "sweetalert2";

function Register() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      age: "",
    },
    validationSchema: registerValidationRules,
    onSubmit: (values) => {
      console.log(values)
      signUp(values)
        .then((res) => {
          if (res.data.err == 0) {
            console.log(res.data.msg)
            navigate("/");
          }
         else{
            console.log(res.data.msg)
          }
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <div className="wrapper">
      <div>
        <h1 style={{ paddingRight: "150px" }}>Sign-Up Here</h1>
      </div>
      <div className="login_wrapper">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <Alert variant="danger">{formik.errors.firstName}</Alert>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <Alert variant="danger">{formik.errors.lastName}</Alert>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <Alert variant="danger">{formik.errors.email}</Alert>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="New Password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <Alert variant="danger">{formik.errors.password}</Alert>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              placeholder="Age"
              name="age"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.age && formik.errors.age ? (
              <Alert variant="danger">{formik.errors.age}</Alert>
            ) : null}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p className="para">
            {" "}
            Don't have an account <Link to="/"> Login Here</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}

export default Register;
