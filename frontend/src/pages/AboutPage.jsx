const AboutPage = () => {
  return (
    <div className="bg-primary-background min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-primary-dark text-center">
          About Us
        </h1>
        <p className="text-primary-medium text-lg mt-6 text-center">
          Welcome to <span className="text-primary-medium font-semibold">Options AI</span>, your trusted platform for options trading predictions.
          Our mission is to empower traders with cutting-edge machine learning insights to make smarter, more informed decisions.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary-dark">
              Our Vision
            </h3>
            <p className="text-primary-medium mt-4">
              We aim to revolutionize trading by making advanced AI predictions accessible to everyone.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary-dark">
              Our Technology
            </h3>
            <p className="text-primary-medium mt-4">
              Our platform is built on cutting-edge machine learning algorithms to provide real-time insights into market trends.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary-dark">
              Our Commitment
            </h3>
            <p className="text-primary-medium mt-4">
              We are dedicated to helping traders of all levels achieve their financial goals with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
