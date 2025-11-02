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
          <h2 className="text-black font-semibold text-2xl mb-2">Google Developers Group</h2>
          <p className="text-white/80 text-base leading-relaxed mb-6 max-w-2xl">
            I'm part of the GDG SRM on-campus creative team. These are some of my works and
            contributions for the club — they helped me up my Figma game.
          </p>
          <div className="flex flex-row gap-10 justify-evenly items-center">
            <div className="w-70 h-120">
              <img src="/recruitment2.png" className="w-full h-full object-cover rounded-lg" alt="Recruitment" />
              <div className="ml-18 mt-2">Recruitment Task</div>
            </div>
            <div className="w-70 h-120">
              <img src="/onam_story.png" className="w-full h-full object-cover rounded-lg" alt="Onam Story" />
              <div className="ml-18 mt-2">Stories for Insta</div>
            </div>
            <div className="w-70 h-120 ">
              <img src="/website_page.png" className="w-full h-full object-cover rounded-lg" alt="Website Page" />
              <div className="ml-17 mt-2">Redesigning website</div>
            </div>
          </div>
          <button className="bg-black text-[#E57375] font-semibold px-6 py-2 rounded-lg hover:bg-[#8a3b3c] transition ml-130 mt-10">
            <a href="https://www.figma.com/design/87EPwc2axz1sM4gxq3G0dE/gdc?node-id=0-1&t=f11CS3SQ5flA6FVi-1" target="_blank" rel="noopener noreferrer">
              view on figma
            </a>
          </button>
        </section>

        {/* GitHub Community */}
        <section>
          <h2 className="text-black font-semibold text-2xl mb-2">GitHub Community</h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-1/3 h-50 ">
            <img src="/github_associate.png" className="object-contain rounded-lg"/>
            </div>
            <p className="text-white/80 text-base leading-relaxed max-w-xl">
             I am a Technical Associate at GitHub SRMIST Community, working on real-life projects and websites that have significantly 
             improved my skills. This club has played a big role in my technical journey, helping me understand teamwork, the use of Git,
              taking responsibility, and combining design with technology.


              <br /><br />
              <button
                  className="mr-4 px-4 py-2 rounded-lg bg-[#000000] text-[#E57375] font-semibold transition hover:bg-[#8a3b3c]"
                  onClick={() => window.open("https://www.githubsrmist.in/", "_blank")}
                >
                  Github SRMIST
                </button>
              <button
                  className="mr-4 px-4 py-2 rounded-lg bg-[#000000] text-[#E57375] font-semibold transition hover:bg-[#8a3b3c]"
                  onClick={() => window.open("https://www.githubsrmist.in/", "_blank")}
                >
                  Instagram
                </button>
            </p>
          </div>
        </section>

        {/* Codédex Monthly Challenge */}
        <section>
          <h2 className="text-black font-semibold text-2xl mb-2">Codédex Monthly Challenge</h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-80 h-80 mt-2">
              <img src="/codedex.png" className="w-full h-full rounded-lg"/>
            </div>
            <p className="text-white/80 text-base leading-relaxed max-w-xl">
              I’m honored to have won the Codédex Monthly Challenge, an engaging competition that continually pushes my skills forward. 
              Being part of the Codédex community has been invaluable, providing a supportive environment to explore new technologies and
               creative tools like the p5.js library Lua and many more. Each monthly challenge brings fresh excitement and learning
                opportunities, helping me grow both technically and creatively.
              <br /><br />
              <button
                  className="mr-4 px-4 py-2 mt-26 rounded-lg bg-[#000000] text-[#E57375] font-semibold transition hover:bg-[#8a3b3c]"
                  onClick={() => window.open("https://www.codedex.io/community/monthly-challenge/submission/QsDwmLoN0nG0tJtqPQRd", "_blank")}
                >
                  View
                </button>
            </p>
          </div>
        </section>

        {/* Hackathon Section */}
        <section>
          <h2 className="text-white font-bold text-5xl leading-tight">hackathon</h2>
          <h3 className="text-black font-semibold text-2xl mb-2 mt-7">OssomeHacks 2.0</h3>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-1/3 h-70">
              <img src="/keshi_and_me_github.jpg" className="w-full h-full object-cover rounded-lg overflow-hidden" />
            </div>
            <p className="text-white/80 text-base leading-relaxed max-w-xl">
              I was part of the organizing committee for OssomeHacks 2.0, a 36-hour hackathon conducted 
              by GitHub Community SRM. It was my first time experiencing a hackathon from the organizing side, where I helped 
              manage and coordinate over 100 participants. The event gave me valuable insights into how hackathons operate, how 
              teams build incredible projects within a short time, and how collaboration drives innovation. It was a thoroughly 
              enjoyable and inspiring experience. Thats me and my other half keshi. Sleepdeprived and half-dead.
            </p>
            <div className="w-full md:w-1/3 h-70">
              <img src="/valli_associate.jpg" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
