import Folder from "./common/Folder"

export default function About () {
    return (
        <>
        <div className="bg-[#0B685C] text-white">
            <div>
                <div className="flex justify-end">
                    <div className="mb-4">
                        {/* another tsar */}
                        <img src="/pinkStar.svg" className="animate-slow-spin"/>
                    </div>

                    <div className="text-black text-[80px] font-bold mr-10 ">
                        about me.
                    </div>

                </div>
                     
                <div className="flex flex-row justify-end pr-10 pt-5">
                    <div>


                            <div style={{ height: '600px', position: 'relative' }}>
                            <Folder size={2} color="#5227FF" className="custom-folder" />
                            </div>
                    </div>
                    <div className="pl-150 text-xl">
                        i love bringing designs and ideas to life through technology. 
                        i'm into webtoons, lovebite (it's a snack), kpop, anime, and watching people make cool shit. 
                        my goal in life is to shut up and create something. i love designing and all forms of art like video 
                        editing, coding websites, and making an impact in the world. i'm drawn to ambitious people who want 
                        to make something and won't hesitate to do it. i'm interested in a lot of things: webdev, p5.js, 
                        after effects, photoshop, touchdesigner, three.js, blender. All these technologies excite me. i want
                         to collaborate with like-minded people, building for the better. my goal in life is to:
                    </div>
                </div>

                <div className="instrument-serif-regular text-7xl pt-10 pl-100 text-[#E57375] ">
                    shut up and create something
                </div>
            </div>
        </div>
        </>
    )
} 