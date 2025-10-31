import RotatingText from "./common/RotatingText"

export default function Home () {
    return (
        <>
            <div className="bg-[#0B685C] h-screen flex flex-row text-white">
                <div>
                    {/*3d character ka code */}
                </div>

                <div className="flex flex-col pt-40 pl-20">
                    <div className="flex flex-row">
                        <div className="text-[85px] font-bold ">
                            {/* hi im */}
                            Hi, I'm
                        </div>

                        <div className="ml-10">
                            {/* star element or image */}
                            <img src="/starblack.svg" alt="star" />
                        </div>
                    </div>

                    <div className="text-9xl font-extrabold text-[#E57375]">
                        {/* sreevalli*/}
                        sreevalli
                    </div>

                    <div className="flex flex-row ">
                        <div className="pt-10 text-5xl">
                            your
                        </div>
                        <div className="pl-5 pt-10">
                            <RotatingText
                            texts = {['webdeveloper' , 'ui/ux designer']}
                            mainClassName = "text-5xl pl-5 pr-5 pt-1 pb-1 text-black font-semibold bg-[#E57375] overflow-hidden justify center rounded-3xl" 
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2000}/>
                        </div>
                    </div>

                    <div className="pt-15 ml-30 items-center">
                        {/* button */}
                        <button className=" pl-2 pr-2 pt-1 pb-1 text-black  text-lg bg-[#DFE365] rounded-3xl font-semibold hover:bg-[#d86466] hover:cursor-pointer ">
                            touch me
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}