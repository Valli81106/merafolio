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
                            <img src="public\starblack.svg" alt="star" />
                        </div>
                    </div>

                    <div className="text-9xl font-extrabold text-[#E57375]">
                        {/* sreevalli*/}
                        sreevalli
                    </div>

                    <div className="pt-10 text-5xl ">
                        {/* your webdeveloper or smth*/}
                        your webdeveloper
                    </div>

                    <div className="pt-15 ml-30 items-center">
                        {/* button */}
                        <button className=" pl-2 pr-2 pt-1 pb-1 text-black  text-lg bg-[#E57375] rounded-3xl font-semibold hover:bg-[#d86466] hover:cursor-pointer ">
                            touch me
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}