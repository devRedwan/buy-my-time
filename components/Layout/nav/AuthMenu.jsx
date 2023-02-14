import ButtonOutline from "../../misc/buttons/ButtonOutline";

const AuthMenu = ({ modalSignIn, modalSignUp }) => {
  return (
    <>
      <button
        className="signIn__button text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-blue-500 transition-all"
        onClick={modalSignIn}>
        Sign In
      </button>

      <ButtonOutline className="navMenu__authSignUp" onClick={modalSignUp}>
        Sign Up
      </ButtonOutline>
    </>
  );
};

export default AuthMenu;
