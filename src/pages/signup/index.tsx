
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";


// Dialogue 1: Let's define the Signup component
const Signup = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign up</h1>
                    <SignupForm />
                    <div className="mt-4"> Already Registered! 
                    <Link id="signin-link" to="/signin" > Sign In </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Dialogue 2: And finally, we've to export the component
export default Signup;