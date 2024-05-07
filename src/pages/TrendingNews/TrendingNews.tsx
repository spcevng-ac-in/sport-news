import React, { useEffect } from "react";
import TrendingNewsItems from "./TrendingNewsItems";
import { useSportDispatch, useSportState } from "../../context/sports/context";
import { fetchSports } from "../../context/sports/action";

const TrendingNews: React.FC = () => {
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
    for (let i = 0; i < sports.length; i++) {
        console.log("Element:", sports[i]);
    };
    if (sports.length === 0 && isLoading) {
        return <span>Sports News Loading...</span>;
    }

    if (isError) {
        return <span>Sports News Item Page -{errorMessage}</span>;
    }
    return (
        <div className="w-2/3">
            <div className="relative right-0">
                <ul
                    className="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60"
                    data-tabs="tabs"
                    role="list"
                >

                    {

                        sports.map((sport: any) => {
                            console.log("Sport:", sport);
                            return (
                                <li className="z-30 flex-auto text-center">
                                    <a
                                        className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                                        data-tab-target=""
                                        // active={sport.name}
                                        role="tab"
                                        aria-selected="true"
                                        aria-controls="app"
                                    >
                                        <span className="ml-1">{sport.name}</span>
                                    </a>
                                </li>
                            );
                        })
                    }


                </ul>
                <div data-tab-content="" className="p-5">
                    <div className="block opacity-100" id="all" role="tabpanel">
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
                            Because it's about motivating the doers. Because I'm here to follow
                            my dreams and inspire other people to follow their dreams, too.
                        </p>
                    </div>
                    <div className="hidden opacity-0" id="message" role="tabpanel">
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
                            The reading of all good books is like a conversation with the finest
                            minds of past centuries.
                        </p>
                    </div>
                    <div className="hidden opacity-0" id="settings" role="tabpanel">
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
                            Comparing yourself to others is the thief of joy.
                        </p>
                    </div>
                </div>
            </div>
            <script src="node_modules/@material-tailwind/html/scripts/tabs.js"></script>
        </div>
    );
};

export default TrendingNews;