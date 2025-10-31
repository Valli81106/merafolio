export default function Projects () {
    return (
        <>
            <div className="bg-[#0B685C] text-4xl pt-20 pb-10">
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <div className="text-black text-[80px] font-bold ml-20">
                            projects.
                        </div>

                        <div>
                            <img src="/pinkStar.svg"/>
                        </div>
                    </div>

                    <div className="flex flex-row bg-[#E57375] ml-20 mr-20 mt-10 rounded-2xl gap- ">
                        <div className="m-7 w-[500px] shrink-0">
                            <img src="public\swiftshare_homepage.png" alt="swiftshare homepage"/>
                        </div>

                        <div className="m-4 grow ">
                            <div className="text-white font-bold ">
                                SwiftShare
                            </div>
                            <div className="text-white text-2xl mt-3 font-semibold">
                                P2P File Transfer System
                            </div>
                            <div className="text-white text-[16px] mt-3 leading-snug">
                            SwiftShare is a cross-platform peer-to-peer file transfer app enabling fast,
                             secure sharing without the need for internet or cloud services. The project focuses on creating temporary, 
                             password-protected "rooms" where multiple users can connect and exchange files in a secure session with 
                             automatic expiry. My role centers on designing and developing the GUI, crafting an intuitive UI/UX that
                             bridges user actions with underlying networking and file transfer logic. The app is developed using Java,
                             JavaFX for the frontend, and includes networking, security, and file I/O components to ensure reliable,
                             encrypted file sharing. The project is currently under active development.
                            </div>
                            <div className="text-black text-[20px] mt-3 font-semibold">
                                TechStack : Java, JavaSwing
                            </div>
                            <div>
                                <button
                                  onClick={() => window.open("https://github.com/Valli81106/SwiftShare", "_blank")}
                                    className="bg-[#000000] text-[15px] text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:bg-[#8e3c3c] hover:shadow-lg transition duration-300"
                                   >
                                    GitHub
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 