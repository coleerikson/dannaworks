const SignupForm = () => (
  <div>
    <form name="signup" method="POST" data-netlify="true" className="mt-5 sm:flex sm:items-center">
      <input type="hidden" name="form-name" value="signup" />
      <div className="w-full sm:max-w-sm">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="px-6 py-4 shadow-sm focus:ring-yellow-600 focus:border-yellow-600 block w-full sm:text-lg border-gray-300 rounded-md"
          placeholder="you@example.com"
        />
      </div>
      <button
        type="submit"
        className="mt-3 w-full inline-flex items-center justify-center px-6 py-4 lg:ml-2 border border-transparent shadow-sm font-semibold rounded-md text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 sm:mt-0 sm:w-auto text-lg"
      >
        Try It
      </button>
    </form>
  </div>
)

export default SignupForm
