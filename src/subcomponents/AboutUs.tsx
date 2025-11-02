export default function AboutUs() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">About Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover who we are and what drives us to make job applications easier
          for professionals worldwide.
        </p>
      </div>

      {/* Image + Text Layout */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 max-w-6xl mx-auto">
        {/* Image (Left on Desktop, Bottom on Mobile) */}
        <div className="md:w-1/2 w-full">
          <img
            src="https://thumbs.dreamstime.com/b/black-young-man-using-smartphone-home-pressing-finger-reading-social-media-internet-typing-text-shopping-online-mobile-black-245278655.jpg"
            alt="Jobinex team at work"
            className="w-full h-[200px] md:h-[300px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Text (Right on Desktop, Top on Mobile) */}
        <div className="md:w-1/2 w-full space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Who We Are
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Jobbinex is a professional job application assistant designed to
              help busy individuals outsource the job application process. We
              believe in making career advancement more efficient, structured,
              and accessible to everyone, no matter how hectic your schedule
              is.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              What We Do
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We handle everything from personalized job searches to weekly
              application submissions, ensuring every application aligns with
              your career goals. Our dedicated assistants and smart platform
              help you stay consistent and increase your chances of landing your
              next big role.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
