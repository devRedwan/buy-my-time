const SignInForm = () => {
  return (
    <form className="SignIn__form w-3/4 max-w-md mx-auto">
      <div class="mb-6">
        <input
          type="email"
          id="email"
          class="bg-transparent outline-none placeholder:font-thin border-b border-blue-500  block w-full p-2.5"
          placeholder=" Your Email"
          required
        />
      </div>
      <div class="mb-6">
        <input
          type="password"
          placeholder="Your Password (at least 8 characters)"
          id="password"
          class="bg-transparent  placeholder:font-thin border-b border-blue-500  block w-full p-2.5"
          required
        />
      </div>
      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            required
          />
        </div>
        <label for="remember" class="ml-2 text-sm ">
          Remember me
        </label>
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
        Submit
      </button>
    </form>
  );
};

export default SignInForm;
