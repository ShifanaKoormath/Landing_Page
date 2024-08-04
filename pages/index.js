import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Simple Landing Page</title>
        <meta name="description" content="A simple, responsive landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <header className="w-full bg-gradient-to-r from-indigo-500 via-purple-600 to-purple-700 text-white shadow-lg animate__animated animate__fadeInDown">
          <div className="container mx-auto p-10 text-center">
            <h1 className="text-6xl font-extrabold leading-tight">
              Welcome to Our{" "}
              <span className="text-white-300">Exciting Product</span>
            </h1>
            <p className="mt-4 text-xl">
              The ultimate solution for your needs. Discover the future today.
            </p>
          </div>
        </header>

        <section className="container mx-auto p-10 mt-10 text-center bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg shadow-lg animate__animated animate__fadeIn">
          <h2 className="text-5xl font-semibold text-gray-800">
            Why Choose Us?
          </h2>
          <p className="mt-6 text-gray-700 text-lg">
            Our product is crafted to offer exceptional features and
            functionalities that elevate your experience and simplify your life.
          </p>
        </section>

        <section className="container mx-auto p-10 mt-10 text-center animate__animated animate__fadeIn">
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-purple-700 hover:to-pink-600 transition-transform transform hover:scale-105">
            Get Started
          </button>
        </section>

        <section className="container mx-auto p-10 mt-10 text-center animate__animated animate__fadeIn">
          <h2 className="text-5xl font-semibold text-gray-800">Contact Us</h2>
          <form className="mt-6">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-purple-700 hover:to-pink-600 transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="w-full bg-gray-900 text-white shadow-lg mt-10 animate__animated animate__fadeInUp">
        <div className="container mx-auto p-5 text-center">
          <p className="text-gray-300">
            © 2024 Simple Landing Page. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
