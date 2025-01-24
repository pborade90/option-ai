const ContactPage = () => {
  return (
    <div className="bg-primary-background min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-primary-dark text-center">
          Contact Us
        </h1>
        <p className="text-primary-medium text-lg mt-6 text-center">
          Have questions or need help? We'd love to hear from you. Use the form below or reach out to us directly.
        </p>

        <div className="mt-12 max-w-xl mx-auto">
          <form className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <label className="block text-primary-dark font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-primary-medium rounded"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-primary-dark font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-primary-medium rounded"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-primary-dark font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 border border-primary-medium rounded"
                rows="5"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary-dark text-white font-bold rounded hover:bg-primary-light transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
