import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/Contexts";
import ButtonPrimary from "../misc/buttons/ButtonPrimary";

const SignUpForm = () => {
  const { toggleModalOpen, signUp, setModalOpen, currentUser } =
    useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await signUp(name, email, password);
      setEmail("");
      setName("");
      setPassword("");
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="SignUp__form w-3/4 max-w-md mx-auto flex flex-col my-4"
      onSubmit={handleSubmit}>
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

      <ButtonPrimary
        type="submit"
        addClass={`${loading && "bg-gray-400 pointer-events-none"}`}
        disabled>
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
