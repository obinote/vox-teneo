import * as React from "react";
import chevronRight from "./LOGO/icon/chevron-right.svg";

function MainContent() {
    return (
        <>
            <div className="font-nunito font-black bg-header-bg">
                <div className="px-5 pt-2 pb-16">
                    <p className="text-3xl font-nunito">Who Are We ?</p>
                    <p className="mb-4 text-sm font-normal text-zinc-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel
                        sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius
                        sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo
                        autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
                        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
                        laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
                        Officiis iure rerum voluptates a cumque velit
                    </p>
                    <button className="block border-2 border-transparent bg-purple-500 py-0.5 px-4 rounded-lg w-28 text-white">
                        Register
                    </button>
                </div>
            </div>
            <div className="mx-5">
                <div className="w-full -mt-9">
                    <div className="xs:justify-between xs:flex xs:space-x-4 xs:w-full">
                        <div className="bg-teal-400 text-white p-4 mb-5 xs:w-1/2">
                            <p className="text-2xl font-bold">Become a partner</p>
                            <p className="text-sm mb-2">Promote your store through our platform</p>
                            <button className="block border-2 border-white bg-transparent py-0.5 px-4 rounded-lg w-fit">
                                Find About More
                            </button>
                        </div>
                        <div className="bg-purple-500 text-white p-4 mb-5 xs:w-1/2">
                            <p className="text-2xl font-bold">Become a partner</p>
                            <p className="text-sm mb-2">Promote your store through our platform</p>
                            <button className="block border-2 border-white bg-transparent py-0.5 px-4 rounded-lg w-fit">
                                Find About More
                            </button>
                        </div>
                    </div>
                    <div className="bg-header-bg text-white p-4 mb-5 xs:w-full">
                        <p className="text-2xl font-bold">About Us</p>
                        <p className="text-sm mb-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia
                        </p>
                    </div>
                    <div className="block bg-white mb-2 xs:flex xs:space-x-32">
                        <div className="block mb-7">
                            <p className="uppercase text-base xs:text-2xl font-bold xs:mb-3">see who are</p>
                            <p className="uppercase text-lg xs:text-5xl font-bold xs:mb-3 mb-1">our patrners</p>
                            <div className="flex space-x-3 mb-7">
                                <button className="rotate-180 bg-gray-300 p-3 rounded-sm">
                                    <img src={chevronRight} alt="icon" width="8" height="12" />
                                </button>
                                <button className="bg-gray-300 p-3 rounded-sm">
                                    <img src={chevronRight} alt="icon" width="8" height="12" />
                                </button>
                            </div>
                            <button className="block w-fit border-2 border-purple-500 bg-purple-500 py-1 px-4 rounded-lg text-white uppercase">
                                See our partners
                            </button>
                        </div>
                        <div className="flex space-x-4 overflow-x-scroll">
                            <div className="border-2 border-gray-500 min-w-[200px] min-h-[200px] xs:min-w-[250px] xs:min-h-[250px] flex items-center justify-center">
                                <p>Home Decor</p>
                            </div>
                            <div className="border-2 border-gray-500 min-w-[200px] min-h-[200px] xs:min-w-[250px] xs:min-h-[250px]  flex items-center justify-center">
                                <p>Diesel</p>
                            </div>
                            <div className="border-2 border-gray-500 min-w-[200px] min-h-[200px] xs:min-w-[250px] xs:min-h-[250px]  flex items-center justify-center">
                                <p>Zara</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainContent;
