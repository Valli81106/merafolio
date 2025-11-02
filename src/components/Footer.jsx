export default function Footer () {
    return (
        <>
        <div className="bg-[#0B685C] text-4xl pt-30 pb-10">
            <div className="">
                <div className="flex flex-row justify-center gap-10" >
                    <div className="">
                        <img src="/stcikerr.png "/>
                    </div>

                    <div className="relative h-40">
                        <img src="/yellow_ellipse.png" className="w-full h-full object-fill" />
                        <div className="absolute inset-0 flex items-center justify-center font-semibold flex-col">
                            hire me pls.
                            <div className="text-sm mt-2 ">
                                i will make responsive and cute websites.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row ietms-center justify-evenly mt-15 text-2xl text-[#E58EB0] font-semibold">
                    <div>
                        <a
                        href="www.linkedin.com/in/sreevalli-pallapothu-180b74321"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-300 transition duration-300 underline"
                        >
                            LinkedIn
                        </a>
                    </div>

                    <div>
                         <a
                        href="https://github.com/Valli81106"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-300 transition duration-300 underline"
                        >
                            GitHub
                        </a>
                    </div>

                    <div>
                         <a
                        href="https://www.instagram.com/valli81106/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-300 transition duration-300 underline"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
} 