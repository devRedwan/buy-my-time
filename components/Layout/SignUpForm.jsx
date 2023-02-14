import { useContext, useState } from "react";
import { AuthContext } from "../../context/Contexts";
import ButtonPrimary from "../misc/buttons/ButtonPrimary";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/init";
import { toast } from "react-hot-toast";

const SignUpForm = () => {
  const { toggleModalOpen } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Creating Profile ...");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = auth.currentUser;
        updateProfile(newUser, {
          displayName: name,
        }).then(() => {
          toast.success(`Welcome ${userCredential.user.displayName} 🎊🥳`, {
            id: loadingToast,
            icon: "🙌",
            style: {
              background: "#E2F1FF",
              fontSize: "20px",
              maxWidth: "100vw",
            },
          });
        });
      })
      .catch((error) => {
        toast.error(
          `Oops! ${error.message
            .replace("Firebase: Error (auth/", " ")
            .replace(").", " ")}. Please Try Again.`,
          {
            id: loadingToast,
          }
        );
      });
  };

  return (
    <form className="SignUp__form w-3/4 max-w-md mx-auto flex flex-col my-4">
      <div className="mb-6">
        {name && (
          <label htmlFor="name" className="font-medium">
            Name
          </label>
        )}
        <input
          type="text"
          id="name"
          className="bg-transparent outline-none placeholder:font-thin border-b border-blue-500  block w-full p-2.5"
          placeholder="Your Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
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
          title="Please enter a valid email"
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
          placeholder="Your Password (minimum 8 characters)"
          id="password"
          className="bg-transparent outline-none placeholder:font-thin border-b border-blue-500  block w-full p-2.5"
          required
          min={8}
          pattern=".{8,}"
          title="Please enter at least 8 characters"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <ButtonPrimary type="submit" addClass="" onClick={signUp}>
        Sign Up
      </ButtonPrimary>
      <p className="mt-1">
        Already have an Account?
        <button
          onClick={() => {
            toggleModalOpen("signIn");
          }}
          className="hover:underline ml-2 text-blue-500">
          Sign In
        </button>
      </p>
    </form>
  );
};

export default SignUpForm;
