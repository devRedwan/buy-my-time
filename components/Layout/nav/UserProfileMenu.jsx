import ButtonOutline from "../../misc/buttons/ButtonOutline";
import { toast } from "react-hot-toast";

const UserProfileMenu = ({ user, signOut }) => {
  return (
    <>
      <ButtonOutline addClass="userProfile__Icon !px-3 !py-1 !rounded-full !text-2xl">
        {user?.displayName && user?.displayName?.slice(0, 1)}
      </ButtonOutline>
      <button
        className="navMenu__userSignOut text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-blue-500 transition-all"
        onClick={signOut}>
        Sign Out
      </button>
    </>
  );
};

export default UserProfileMenu;
