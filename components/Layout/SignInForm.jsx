import { useContext, useState } from "react";
import { AuthContext } from "../../context/Contexts";
import ButtonPrimary from "../misc/buttons/ButtonPrimary";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/init";
import { toast } from "react-hot-toast";

const SignInForm = () => {
  const { toggleModalOpen } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Creating Profile ...");
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const currentUser = auth.currentUser;
        currentUser &&
          toast.success(`Welcome ${currentUser.displayName} 🎊🥳`, {
            id: loadingToast,
            icon: "🙌",
            style: {
              background: "#E2F1FF",
              fontSize: "20px",
              maxWidth: "100vw",
            },
          });
      })
      .catch((error) => {
        toast.error(
          `Oops! ${error.message
            .replace("Firebase: Error (auth/", " ")
            .replace("-", " ")
            .replace(").", " ")}. Please Try Again.`,
          {
            id: loadingToast,
          }
        );
      });
  };

  return (
    <form className="SignIn__form w-3/4 max-w-md mx-auto flex flex-col my-4">
      <div className="mb-6">
        {email && (
          <label htmlFor="email" className="font-medium">
            Email
          </label>
        )}
        <input
          type="email"
          id="email"
          className="bg-transparent outline-none placeholder:font-thin border-b border-blue-500  block w-full p-2.5"
          placeholder=" Your Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        {password && (
          <label htmlFor="password" className="font-medium">
            Password
          </label>
        )}
        <input
          type="password"
          placeholder="Your Password"
          id="password"
          className="bg-transparent outline-none placeholder:font-thin border-b border-blue-500  block w-full p-2.5"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            required
          />
        </div>
        <label htmlFor="remember" className="ml-2 text-sm ">
          Remember me
        </label>
      </div>
      <ButtonPrimary type="submit" addClass="" onClick={signIn}>
        Sign In
      </ButtonPrimary>
      <p className="mt-1">
        Don't have an Account?
        <button
          onClick={() => {
            toggleModalOpen("signUp");
          }}
          className="hover:underline ml-2 text-blue-500">
          Sign Up
        </button>
      </p>
    </form>
  );
};

export default SignInForm;
