import React from "react";
import bgimg from "../src/assets/baimg.jpg"

const App = () => {
  return (
     <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
  {/* Background Image */}
  <img
    src={bgimg}
    alt="Netflix Background"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center px-4 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Unlimited movies, TV shows, and more
    </h1>
    <h2 className="text-2xl mb-6">Watch anywhere. Cancel anytime.</h2>
    <p className="mb-4 text-lg">
      Ready to watch? Enter your email to create or restart your membership.
    </p>
    <div className="flex flex-col sm:flex-row items-center gap-2">
      <input
        type="email"
        placeholder="Email address"
        className="px-4 py-3 text-black rounded w-72"
      />
      <button className="bg-red-600 hover:bg-red-700 px-6 py-3 text-lg font-bold rounded">
        Get Started
      </button>
    </div>
  </div>
</section>


      {/* Feature Sections */}
      <section className="bg-black py-16 border-t border-gray-700">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enjoy on your TV</h2>
            <p className="text-lg">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="TV" className="w-1/2" />
        </div>
      </section>

      <section className="bg-black py-16 border-t border-gray-700">
        <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Download your shows to watch offline</h2>
            <p className="text-lg">Save your favorites easily and always have something to watch.</p>
          </div>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="Mobile" className="w-1/2" />
        </div>
      </section>

      <section className="bg-black py-16 border-t border-gray-700">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Watch everywhere</h2>
            <p className="text-lg">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="Devices" className="w-1/2" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-black py-16 border-t border-gray-700">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            "What is Netflix?",
            "How much does Netflix cost?",
            "Where can I watch?",
            "How do I cancel?",
            "What can I watch on Netflix?",
          ].map((question, index) => (
            <div key={index} className="bg-gray-800 p-5 rounded">
              <h3 className="text-xl font-semibold">{question}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-sm py-10 px-4 border-t border-gray-700">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p>FAQ</p>
            <p>Investor Relations</p>
            <p>Privacy</p>
            <p>Speed Test</p>
          </div>
          <div>
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
            <p>Legal Notices</p>
          </div>
          <div>
            <p>Account</p>
            <p>Ways to Watch</p>
            <p>Corporate Information</p>
            <p>Only on Netflix</p>
          </div>
          <div>
            <p>Media Center</p>
            <p>Terms of Use</p>
            <p>Contact Us</p>
          </div>
        </div>
        <p className="text-center mt-6">© 2025 Netflix Clone. Built with ❤️ by Krishna Sree</p>
      </footer>
    </div>
  );
};

export default App;
