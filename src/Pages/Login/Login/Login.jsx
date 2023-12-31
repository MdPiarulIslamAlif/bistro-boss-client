import { createContext, useContext, useEffect, useState } from"react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from"react-simple-captcha";
import { AuthContext } from"../../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from"react-router-dom";
import { Helmet } from"react-helmet-async";
import Swal from"sweetalert2";
import SocialLogin from "../../../Components/SocialLogin/SocialLogin";


const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { loggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

 

  const from = location.state?.from?.pathname || "/";
  console.log("state in the location login page", location.state);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(login);
    loggedIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        Swal.fire({
          title: "User Login successful",
          showClass: {
            popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
          },
          hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
      animate__faster
    `,
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type the text above"
                  className="input input-bordered"
                  required
                />
                <button className="btn btn-outline">Validate</button>
              </div>
              <div className="form-control mt-6">
                {/* todo: disabled */}
                <input
                  disabled={false}
                  className="btn btn-primary"
                  type="submit"
                  value="Submit"
                />
              </div>
              <div className="divider">OR</div>
              <SocialLogin></SocialLogin>
              <div>
                <p>
                  Your New formHere Please
                  <button className="btn btn-outline btn-primary ml-4">
                    <Link to={"/signUp"}>SignUp</Link>
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
