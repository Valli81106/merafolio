export default function Webtoon () {
    return (
        <>
            <div className="bg-[#0B685C] flex flex-col ">
                <div className="flex flex-row justify-center items-center pt-10">
                    <div>
                        <img src="/star_yellow.svg"/>
                    </div>
                    <div className="text-5xl font-semibold pl-10 pr-10">
                        omg i love webtoons
                    </div>
                    <div>
                        <img src="/star_yellow.svg"/>
                    </div>
                </div>

                <div className="text-white text-2xl pl-40 pr-40 pt-10">
                    when im not sleeping or working this is what ive been doing. they are not in any particular order, 
                    just some of my facourite and comfort manhwas of all time and would recommend everyone to read once in 
                    their lives.
                </div>

                <div className="ml-20 mr-20">
                    <div className="flex flex-row  mt-20 justify-evenly ">
                        <div className="w-[250px] h-[430px] object-cover hover:-translate-y-2.5 transition-transform duration-300 ">
                            <img src="public/toon1.png" className="object-cover w-full h-ful rounded-3xl" />
                        </div>

                        <div className="w-[250px] h-[370px] mt-20 object-cover hover:-translate-y-2.5 transition-transform duration-300">
                            <img src="public/toon2.png" className="object-cover w-full h-full rounded-3xl" />
                        </div>

                        <div className=" w-[250px] h-[370px] object-cover hover:-translate-y-2.5 transition-transform duration-300">
                            <img src="public/toon3.png" className="object-cover w-full h-full rounded-3xl " />
                        </div>
                        <div className="w-[250px] h-[370px] mt-20 hover:-translate-y-2.5 transition-transform duration-300">
                            <img src="public/toon4.png" className="object-cover w-full h-full rounded-3xl" />
                        </div>
                    </div>

                    <div className="flex flex-row   justify-evenly">
                        <div className="w-[250px] h-[370px] hover:-translate-y-2.5 transition-transform duration-300">
                            <img src="public/toon5.png" className="object-cover w-full h-full rounded-3xl" />
                        </div>

                        <div className="w-[250px] h-[370px] mt-20 hover:-translate-y-2.5 transition-transform duration-300">
                            <img src="public/toon6.png" className="object-cover w-full h-full rounded-3xl" />
                        </div>

                        <div className="w-[250px] h-[370px] hover:-translate-y-2.5 transition-transform duration-300">
                            <img src="public/toon7.png" className="object-cover w-full h-full rounded-3xl" />
                        </div>

                        <div className="w-[250px] h-[370px] mt-20 hover:-translate-y-2.5 transition-transform duration-300">
                            <img src="public/toon8.png" className="object-cover w-full h-full rounded-3xl"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 