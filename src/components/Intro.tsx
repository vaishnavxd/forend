import { Button } from "./Button";

export const Intro = () => {
  return (
    <section className="w-full  relative md:absolute m-0 min-h-screen bg-gray-50 flex items-center justify-center justify-items-center relative">
      {/* Main Content */}
      <div className="mx-auto max-w-screen-xl w-full text-center">
        {/* Code/Create/Connect Headings */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900">Code</h2>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900">Create</h2>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900">Connect</h2>
        </div>

        {/* Subtitle */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-700 mt-8">
          Hackathons & Meetups For
          <span className="block text-blue-600 mt-2 font-title">Students</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          WeMakeDews is an inclusive global community for anyone passionate about
          technology. We foster collaboration and innovation through global events.
        </p>

        {/* CTA Button */}
        <div className="pt-8">
          <Button
            onClick={() => {/* Add navigation logic */}}
          >
            Join our community
          </Button>
        </div>
      </div>

      {/* Events Link */}
      <div className="absolute bottom-8 animate-bounce">
        <a href="#events" className="text-gray-900 hover:text-blue-600 transition-colors">
          Events ↓
        </a>
      </div>
    </section>
  );
};