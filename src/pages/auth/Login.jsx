import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import localForage from "localforage";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formError, setFormError] = useState("");
  const [alert, setAlert] = useState("");
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const res = await axios.post(`/login`, formData);
      localForage.setItem("tokenUser", res.data.token);
      setAlert("");
      setFormError("");
      navigate("/", { replace: true });
    } catch (error) {
      setAlert(error.response.data.message);
      setFormError(error.response.data);
    }
  };
  return (
    <div className="container">
      <Helmet>
        <title>Mention &mdash; Login</title>
        <meta
          name="description"
          content="this is a login page of Mention sites"
        />
      </Helmet>
      <div className="row">
        <div className="col-md-5">
          {alert && (
            <div className="alert alert-danger" role="alert">
              {alert}
            </div>
          )}
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form
                onSubmit={loginHandler}
                className="needs-validation"
                noValidate
              >
                <div className="mb-4">
                  <label htmlFor="email" className="form-label text-capitalize">
                    email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={
                      alert || formError?.email
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {formError?.email && (
                    <div className="invalid-feedback">
                      {formError?.email[0]}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="form-label text-capitalize"
                  >
                    password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={
                      alert || formError?.password
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {formError?.password && (
                    <div className="invalid-feedback">
                      {formError?.password[0]}
                    </div>
                  )}
                </div>

                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
