const MainPage = () => {
  return (
    <main className="text-gray-800">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Build Powerful Digital Products with{" "}
            <span className="text-blue-200">Buildify</span>
          </h1>

          <p className="text-lg max-w-2xl mx-auto mb-10 text-blue-100">
            We help startups and businesses design, develop and launch modern
            web applications using cutting-edge technologies like React, Node.js
            and Cloud Solutions.
          </p>

          <div className="flex justify-center gap-6">
            <button className="bg-white text-blue-600 px-7 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
              Get Started
            </button>

            <button className="border border-white px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Our Services
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES / FEATURES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-14">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-600">
                Modern, scalable and responsive websites using React, Next.js
                and modern frontend frameworks.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-4">Backend APIs</h3>
              <p className="text-gray-600">
                Secure and high-performance REST APIs built with Node.js,
                Express and database integrations.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-4">Cloud Deployment</h3>
              <p className="text-gray-600">
                Deploy your application on AWS, Vercel or Docker with CI/CD
                pipelines and monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Buildify?</h2>

            <ul className="space-y-4 text-gray-700">
              <li>✔ Experienced MERN Stack Developers</li>
              <li>✔ Scalable and Clean Architecture</li>
              <li>✔ Fast Delivery & Agile Workflow</li>
              <li>✔ Post-deployment Support</li>
            </ul>
          </div>

          <div className="bg-blue-100 rounded-2xl h-80 flex items-center justify-center text-blue-700 font-semibold text-xl">
            Your Product Idea → We Build It 🚀
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Launch Your Project?
        </h2>

        <p className="mb-8 text-blue-100">
          Let’s turn your idea into a real product with Buildify.
        </p>

        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
          Contact Us
        </button>
      </section>
    </main>
  );
};

export default MainPage;
