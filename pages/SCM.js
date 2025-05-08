export default function Example() {
    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold text-blue-600">[1005] Geo not supported</p>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            We're sorry — this location isn't currently supported
            </h1>
            <p className="mt-6 px-20 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Unfortunately, we’re not able to offer sign-ups from your region at this time.
            We're working on expanding access, so please check back soon.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://www.scandinavianmarkets.com"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Go to homepage
              </a>
              <a href="https://www.scandinavianmarkets.com/contact" className="text-sm font-semibold text-gray-900">
                Contact support <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </main>
      </>
    )
  }