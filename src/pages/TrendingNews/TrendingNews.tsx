import React, { Fragment, useEffect } from "react";
import { useSportDispatch, useSportState } from "../../context/sports/context";
import { fetchSports } from "../../context/sports/action";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Tabs from "./Tabs";
import Tab from "./Tab";
import TrendingNewsItems from "./TrendingNewsItems";



export default function TrendingNews() {
    let currentSport = 'ALL';
    const sportsDispatch = useSportDispatch();
    // console.log("Sport Dispatch:", sportsDispatch);
    // fetchSports(sportsDispatch);

    useEffect(() => {
        fetchSports(sportsDispatch);
    }, []);

    let sportState: any = useSportState();
    const { sports, isLoading, isError, errorMessage } = sportState;
    console.log("Sports:", sports, isLoading, isError, errorMessage);
    console.log("Sport Length:", sports.length);

    if (sports.length === 0 && isLoading) {
        return <span>Sports News Loading...</span>;
    }

    if (sports.length === 0) {
        return <span>Wait Sports News Loading...</span>;
    }

    if (isError) {
        return <span>Sports News Item Page -{errorMessage}</span>;
    }

    console.log("Sport Items:", (sports));
    // return (
    //     <>
    //         {sports.map((item, index) => {
    //             return (
    //                 <div key={index}>
    //                     <h2>name: {item.name}</h2>
    //                 </div>
    //             );
    //         })}

    //     </>
    // );

    const classNames = (...classes: string[]): string => classes.filter(Boolean).join(' ');
    return (
        <>
            {/* <Disclosure as="nav" className="border-b border-slate-200"> */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                  <Tabs>
                                {
                                sports.map((item) => {
                                          return(  <Tab title={item.name}>
                                            <div >
                                            <TrendingNewsItems sportID={item.id} />
                                            </div>
                                            </Tab>)
                                    
                                })}
                            </Tabs>
                        
                    </div >

                </div >
            {/* )} */}
            {/* </Disclosure> */}
        </>
    );

    // return (
    //     <Tabs>
    //       <Tab title="Lemon">Lemon is yellow</Tab>
    //       <Tab title="Strawberry">Strawberry is red</Tab>
    //       <Tab title="Pear">Pear is green</Tab>
    //     </Tabs>
    //   )

    // return (
    //     <div className="w-2/3">
    //         <div className="relative right-0">
    //             <ul
    //                 className="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60"
    //                 data-tabs="tabs"
    //                 role="list"
    //             >

    //                 {
    //                     sports.map((sport: any, i: number) => {
    //                         console.log("Sport:", sport);
    //                         return (
    //                             <li className="z-30 flex-auto text-center">
    //                                 <div key={i}>
    //                                 <a
    //                                     className="z-30 border-2  flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out cursor-pointer text-slate-700 bg-inherit"
    //                                     data-tab-target=""
    //                                     active={sport.name}
    //                                     role="tab"
    //                                     aria-selected="true"
    //                                     aria-controls="app"
    //                                 >
    //                                     <span className="ml-1">{sport.name}</span>
    //                                 </a>
    //                                 </div>
    //                             </li>
    //                         );
    //                     })
    //                 }


    //             </ul>
    //             <div data-tab-content="" className="p-5">
    //                 <div className="block opacity-100" id="Basketball" role="tabpanel">
    //                     <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
    //                         Because it's about motivating the doers. Because I'm here to follow
    //                         my dreams and inspire other people to follow their dreams, too.
    //                     </p>
    //                 </div>
    //                 <div className="hidden opacity-0" id="message" role="tabpanel">
    //                     <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
    //                         The reading of all good books is like a conversation with the finest
    //                         minds of past centuries.
    //                     </p>
    //                 </div>
    //                 <div className="hidden opacity-0" id="Rugby" role="tabpanel">
    //                     <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
    //                         Comparing yourself to others is the thief of joy.
    //                     </p>
    //                 </div>
    //             </div>
    //         </div>
    //         <script src="node_modules/@material-tailwind/html/scripts/tabs.js"></script>
    //     </div>
    // );
};

