import React, { Fragment, useEffect } from "react";
import { useSportDispatch, useSportState } from "../../context/sports/context";
import { fetchSports } from "../../context/sports/action";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Tabs from "./Tabs";
import Tab from "./Tab";
import TrendingNewsItems from "./TrendingNewsItems";
import { Sport } from "../../context/sports/types";



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

    return (
        <>
            <Disclosure as="nav" className="border-b border-slate-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <Tabs>
                            {
                                sports.map((item: Sport) => {
                                    return (<Tab title={item.name}>
                                        <div >
                                            <TrendingNewsItems sportID={item.id} />
                                        </div>
                                    </Tab>)

                                })}
                        </Tabs>

                    </div >

                </div >
                
            </Disclosure>
        </>
    );

};

