import React from 'react';
import SigninForm from "./SigninForm"
import { Link } from 'react-router-dom';
import sports_journalism from "../../assets/images/sports-journalism.avif"
const Signin: React.FC = () => {
  return (
    <div>
      {/* <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-2xl w-full px-6 py-8 bg-white rounded-lg shadow-md">
          <div className="w-full">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Sign in
            </h1>
            <SigninForm />

            <div className="mt-4"> New User!
              <Link id="signup-link" to="/signup" > Sign Up </Link>
            </div>
          </div>
          <div className="flex items-center justify-center w-full mx-10">
            <img src={sports_journalism} alt="Sports News" />
          </div>
        </div>
      </div> */}


      <div className="min-h-screen flex items-center justify-center bg-gray-100">


        <div className="mt-1 bg-[#f4f4f4] border border-gray-detailBorder py-1.25 px-0.75 items-center text-center w-1/2">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Sign in
          </h1>
          <SigninForm />

          <div className="mt-4"> New User!
            <Link id="signup-link" to="/signup" > Sign Up </Link>
          </div>
        </div>
        <div className="bg-[#f4f4f4] border border-gray-detailBorder border-t-0 py-1.25 px-0.75 items-center text-center w-1/2 md:w-full">
          <img src={sports_journalism} alt="Sports News" />
        </div>
      </div>



    </div>
  );
}
export default Signin;