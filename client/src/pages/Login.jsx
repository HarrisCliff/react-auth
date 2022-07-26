import axios from "axios";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import FbIcon from "../assets/icons8-facebook-48.png";
import GoogleIcon from "../assets/icons8-google-48.png";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const generateError = (err) =>
    toast.error(err, {
      position: "top-right",
    });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:5000/login",
        {
          ...values,
        },
        {
          withCredentials: true,
        }
      );
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };
  return (
    <div className="">
      <ToastContainer />
      <div className="min-w-screen flex min items-center justify-center px-5 py-5">
        <section class="flex flex-col md:flex-row bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden max-w-[1000px]">
          <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-1/2 h-screen">
            <img
              src="https://source.unsplash.com/random"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>

          <div
            class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/2 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
          >
            <div class="w-full h-100">
              <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
                Log in to your account
              </h1>

              <form className="mt-6" onSubmit={(e) => handleSubmit(e)}>
                <div>
                  <label class="block text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) =>
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                    placeholder="Enter Email Address"
                    class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    autofocus
                    autocomplete
                  />
                </div>

                <div class="mt-4 relative">
                  <label class="block text-gray-700">Password</label>
                  <div class="relative">
                    <input
                      type="password"
                      name="password"
                      onChange={(e) =>
                        setValues({
                          ...values,
                          [e.target.name]: e.target.value,
                        })
                      }
                      placeholder="Enter Password"
                      minlength="6"
                      class="w-full  px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                    />
                    <div class="absolute right-3 top-6 cursor-pointer">
                      <FaEye />
                    </div>
                  </div>
                </div>

                <div class="text-right mt-2">
                  <a
                    href="/"
                    class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                  >
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
                >
                  Log In
                </button>
              </form>
              <hr class="my-6 border-gray-300 w-full" />
              <button
                type="button"
                class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300 mb-3"
                onClick={google}
              >
                <div class="flex items-center justify-center">
                  <img src={GoogleIcon} width={22} alt="" />
                  <span class="ml-4">Log in with Google</span>
                </div>
              </button>
              {/* <button
                type="button"
                class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
                onClick={facebook}
              >
                <div class="flex items-center justify-center">
                  <img src={FbIcon} width={22} alt="" />
                  <span class="ml-4">Log in with Facebook</span>
                </div>
              </button> */}

              <p class="mt-8 mb-5">
                Need an account?{" "}
                <a
                  href="/register"
                  class="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  Create an account
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
