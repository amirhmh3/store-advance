import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "validation/LoginValidation";
import { Formik,Form,Field,ErrorMessage } from "formik";
import MainLayout from "layouts/MainLayout";
const Login = () => {
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState({
    userName: "",
    password: "",
  });

  return (
    <MainLayout>
      <div className="h-max container flex justify-center mx-auto my-16">
        <div className="w-max h-max text-center">
          <h1 className="text-gray-600 text-3xl font-bold">Log In</h1>
          <h3 className="text-gray-500 mb-5 mt-3">
            Best place to buy and sell digital products
          </h3>
          <div className="w-full h-full p-7 border-1 rounded-md">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={loginSchema}
              onSubmit={(values) => {
                localStorage.setItem('token',"hjhgjhgjh");
                navigate("/dashboard")
                setFormLogin(values);
              }}
            >
                <Form>
                  <div className="w-104 h-max mb-7 flex-col text-start">
                    <label
                      className="w-full text-gray-600 font-bold"
                      htmlFor="email"
                    >
                      Email Address*
                    </label>
                    <Field
                      className="w-full h-12 px-3 border-1 mt-2"
                      placeholder="Enter your email add..."
                      type="email"
                      name="email"
                    />
                    <ErrorMessage name="email"/>
                  </div>
                  <div className="w-104 h-max flex-col text-start">
                    <label
                      className="w-full text-gray-600 font-bold my-2"
                      htmlFor="Password"
                    >
                      Password*
                    </label>
                    <Field
                      className="w-full h-12 border-1 px-3 mt-2"
                      placeholder="Enter your Password..."
                      type="password"
                      name="password"
                    />
                    <ErrorMessage name="password"/>
                  </div>
                  <p className="text-start my-3 text-gray-600">
                    Forgot Password?
                  </p>
                  <div className="flex-col justify-center ">
                    <div className="w-36 mx-auto mt-3 h-11 bg-blue-500 flex items-center justify-center text-center hover:bg-gray-600 duration-300">
                      <Field
                        type="submit"
                        className=" text-white text-xl font-bold"
                        value="LOGIN"
                      />
                    </div>
                    <div className="w-36 mx-auto mt-3 h-11 bg-gray-600 flex items-center justify-center text-center hover:bg-blue-500 duration-300">
                      <button className=" text-white text-xl font-bold">
                        REGISTER
                      </button>
                    </div>
                  </div>
                </Form>
            </Formik>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
