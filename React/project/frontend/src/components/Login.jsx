import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Alert from "react-bootstrap/Alert";
import { logInValidationRules } from "/src/validations/Validations.jsx";
import { signIn } from "../services/AuthService";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: logInValidationRules,
    onSubmit: (values) => {
      signIn(values).then((res) => {
        console.log(res.data);
        if (res.data.err == 0) {
          Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "Welcome back!",
            showConfirmButton: false,
            timer: 1500,
          });
          localStorage.setItem("_token",res.data.token);
          navigate("/dashboard");
        }
        if (res.data.err == 1) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: res.data.msg,
            confirmButtonText: "Try Again",
          });
        }
      });
    },
  });

  return (
    <div className="wrapper">
      <div>
        <h1 style={{ paddingRight: "150px" }}>Sign-In Here</h1>
      </div>
      <div className="login_wrapper">
        <Form onSubmit={formik.handleSubmit}>
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
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <Alert variant="danger">{formik.errors.password}</Alert>
            ) : null}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p className="para">
            {" "}
            Don't have an account <Link to="/signup"> Register Here</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}

export default Login;
