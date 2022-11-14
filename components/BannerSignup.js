export default function BannerSignup() {
  return (
    <div className="max-w-7xl mx-auto py-8 lg:py-8">
      <div className="py-4 px-6 bg-green-600 rounded-3xl sm:py-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Learn the basics of application development
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-green-200">
            Receive a brief email each weekday in a single narrative that teaches you the elements
            of application development and UXer, marketer, or product manager should know.
          </p>
        </div>
        <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
          <form name="banner-signup" method="POST" data-netlify="true" className="sm:flex">
            <input type="hidden" name="form-name" value="banner-signup" />
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold rounded-md text-white bg-green-800 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
            >
              Give it a shot
            </button>
          </form>
          <p className="mt-3 text-sm text-indigo-100">
            We care about the protection of your data. Nothing will be shared.
          </p>
        </div>
      </div>
    </div>
  )
}
