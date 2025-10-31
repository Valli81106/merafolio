export default function Exp() {
  return (
    <div className="bg-[#0B685C] py-20 px-10">
      <div className="bg-[#E57375] mx-20 rounded-2xl p-10 space-y-14">
        {/* Header */}
        <div className="flex flex-row items-center gap-4">
          <div className="text-white font-bold text-5xl leading-tight">
            design.
          </div>
          <img src="/sticker2.png" alt="sticker" className="w-16 h-16 object-contain" />
        </div>

        {/* Google Developers Group */}
        <section>
          <h2 className="text-white font-semibold text-2xl mb-2">Google Developers Group</h2>
          <p className="text-white/80 text-base leading-relaxed mb-6 max-w-2xl">
            I'm part of the GDG SRM on-campus creative team. These are some of my works and
            contributions for the club — they helped me up my Figma game.
          </p>

          {/* Image grid */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
            <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
            <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
          </div>

          <button className="bg-white text-[#E57375] font-semibold px-6 py-2 rounded-lg hover:bg-gray-200 transition">
            <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">
              view on figma
            </a>
          </button>
        </section>

        {/* GitHub Community */}
        <section>
          <h2 className="text-white font-semibold text-2xl mb-2">GitHub Community</h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-1/3 h-40 bg-gray-300 rounded-lg"></div>
            <p className="text-white/80 text-base leading-relaxed max-w-xl">
              I'm part of the tech team in GitHub SRM, working on different websites.
              This club pushed me to learn React and understand how professional websites are built.
              Worked on frontend and backend, met amazing people, and learned a lot.
              <br /><br />
              <span className="underline hover:text-white cursor-pointer mr-4">follow github</span>
              <span className="underline hover:text-white cursor-pointer">insta</span>
            </p>
          </div>
        </section>

        {/* Codédex Monthly Challenge */}
        <section>
          <h2 className="text-white font-semibold text-2xl mb-2">Codédex Monthly Challenge</h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-1/3 h-40 bg-gray-300 rounded-lg"></div>
            <p className="text-white/80 text-base leading-relaxed max-w-xl">
              So grateful that I could participate in this challenge.
              <br /><br />
              <span className="underline hover:text-white cursor-pointer">link</span>
            </p>
          </div>
        </section>

        {/* Hackathon Section */}
        <section>
          <h2 className="text-white font-bold text-3xl mb-2">hackathon</h2>
          <h3 className="text-white font-semibold text-xl mb-3">OssomeHacks 2.0</h3>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-1/3 h-40 bg-gray-300 rounded-lg"></div>
            <p className="text-white/80 text-base leading-relaxed max-w-xl">
              Was part of the core gang for this hackathon conducted by GitHub SRM.
              It was a 36-hour hackathon, then 18-hour code sprint — first time experiencing a hackathon!
              Saw and made multiple submissions, really thought about how hackathon quality works,
              how people build amazing things in hours.
            </p>
            <div className="w-full md:w-1/3 h-40 bg-gray-300 rounded-lg"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
