import { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

export default function Register() {
  const [formError, setFormError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      await axios.post("/register", formData);
      e.target.reset();
      setFormError("");
    } catch (error) {
      setFormError(error.response.data);
    }
  };

  return (
    <div className="container">
      <Helmet>
        <title>Mention &mdash; Register</title>
        <meta
          name="description"
          content="this is a register page of Mention sites"
        />
      </Helmet>
      <div className="row">
        <div className="col-md-5">
          <div className="card">
            <div className="card-header">Register</div>
            <div className="card-body">
              <form
                onSubmit={registerHandler}
                className="needs-validation"
                noValidate
              >
                <div className="mb-4">
                  <label htmlFor="name" className="form-label text-capitalize">
                    name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={
                      formError?.name
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {formError?.name && (
                    <div className="invalid-feedback">{formError?.name[0]}</div>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="form-label text-capitalize">
                    email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={
                      formError?.email
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
                      formError?.password
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

                <div className="mb-4">
                  <label
                    htmlFor="password_confirmation"
                    className="form-label text-capitalize"
                  >
                    confirm password
                  </label>
                  <input
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    className="form-control"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
