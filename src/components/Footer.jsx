export default function Footer () {
    return (
        <>
        <div className="bg-[#0B685C] text-4xl pt-30">
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

                <div className="flex flex-row  ietms-center justify-evenly mt-10">
                    <div>
                        linkedIN
                    </div>

                    <div>
                        github
                    </div>

                    <div>
                        instagram
                    </div>
                </div>
            </div>
        </div>
        </>
    )
} 