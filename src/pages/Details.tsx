import founderImg from "../assets/images/Rishabh-img.jpeg";

const Details = () => {
  return (
    <main className="pt-24 text-gray-800">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">About Buildify</h1>

        <p className="text-lg text-center max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Buildify is a modern technology company focused on building scalable,
          high-performance web applications and digital products for startups
          and businesses. Our goal is to help companies transform their ideas
          into powerful digital solutions using the latest technologies like
          React, Node.js, and Cloud platforms.
        </p>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Mission
            </h2>
            <p className="text-gray-600">
              Our mission is to empower startups and businesses by providing
              reliable and innovative software solutions. We aim to deliver
              high-quality products that improve efficiency, scalability, and
              user experience.
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Vision
            </h2>
            <p className="text-gray-600">
              We envision Buildify as a trusted global technology partner,
              helping companies grow digitally and compete in the modern tech
              world through smart engineering and creative solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-14">Our Projects</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-3">E-Commerce Platform</h3>
            <p className="text-gray-600">
              Full-featured online shopping platform with product management,
              cart, authentication, and secure payments using MERN stack.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-3">
              Hospital Management System
            </h3>
            <p className="text-gray-600">
              Patient records, appointment booking, doctor dashboards and admin
              panel built using React, Node.js and MySQL integration.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-3">
              Real-Time Chat Application
            </h3>
            <p className="text-gray-600">
              Real-time messaging platform using Socket.io with authentication
              and live notifications system.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Founder Image */}
          <div className="flex justify-center">
            <img
              src={founderImg}
              alt="Founder"
              className="rounded-2xl shadow-2xl w-80 h-80 object-cover border-4 border-white"
            />
          </div>

          {/* Founder Info */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Meet Our Founder</h2>

            <h3 className="text-2xl font-semibold text-blue-200 mb-4">
              Rishabh Tiwari
            </h3>

            <p className="text-blue-100 leading-relaxed">
              Rishabh Tiwari is a passionate MERN Stack Developer and software
              engineer who founded Buildify with the vision of helping
              businesses build high-quality digital products. With strong
              expertise in React, Node.js, APIs and system design, he focuses on
              delivering scalable and user-friendly applications.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Details;
