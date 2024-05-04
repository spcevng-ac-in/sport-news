import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { TrendingNews } from '../../context/trendingnews/types';
import { useTrendingNewsDetailDispatch, useTrendingNewsDetailState } from '../../context/trendingnewsdetail/context';
import { fetchTrendingNewsDetail } from '../../context/trendingnewsdetail/action';

const TrendingNewsDetail = (args: any) => {
    console.log("Data -> ", args.data);
    let news: TrendingNews = args.data;
    console.log("News:", news);
    let newsID: any = news.id;
    console.log("News ID:", newsID);

    // const formatDate = (isoDate: string) => {
    //     try{
    //         console.log("Date -> ", isoDate);
    //         const dateObj = new Date(isoDate);
    //         const year = dateObj.getFullYear();
    //         const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    //         const day = String(dateObj.getDate()).padStart(2, "0");
    //         return `${year}-${month}-${day}`;
    //     }
    //     catch(error)
    //     {
    //         console.log("Date Formate error -", error);

    //     }
    //     return isoDate;
        
    // };

    const trendingNewsDetailDispatch = useTrendingNewsDetailDispatch();
    useEffect(() => {
        if (newsID) fetchTrendingNewsDetail(trendingNewsDetailDispatch, newsID);
    }, []);

    // const trendingNewsDetailDispacth = useTrendingNewsDetailDispatch();
    // console.log("Trending News Detail Dispatch:", trendingNewsDetailDispacth);
    const trendingNewsDetailState = useTrendingNewsDetailState();
    let { trendingNewsDetail, isLoading, isError, errorMessage } = trendingNewsDetailState;
    console.log("Trending News Details:", trendingNewsDetail);

    if (trendingNewsDetail.length === 0 && isLoading) {
        return <span>Trending News Loading...</span>;
    }

    if (isError) {
        return <span>Trending News Items Detail Page - {errorMessage}</span>;
    }

    let selectedNews = trendingNewsDetail.filter(
        (tempNews) => {
            console.log("tempnews.id", tempNews.id);
            console.log("newsID->", newsID);
            return (tempNews.id === newsID)
        }
    )?.[0];
    console.log("Selcted News:", selectedNews);
    if (selectedNews === undefined) {
        return <span>Trending News Detail Loading</span>
    }



    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }
    const openModal = () => {
        setIsOpen(true)
    }
    
    return (
        <>
            
            <Link to={newsID} key={newsID} >
                <button onClick={openModal}
                    className="bg-transparent border-none"
                >
                    Read More...
                </button>
            </Link>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {selectedNews.title}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <div>
                                            <img
                                                src={selectedNews.thumbnail}
                                                alt={selectedNews.title}
                                                className="w-full"
                                            />
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="justify-self-auto text-purple-950 text-left text-sm" >{selectedNews.sport.name}</div>
                                            {/* <div className="justify-self-auto mr-0">{formatDate(selectedNews.date)}</div> */}
                                        </div>
                                        <div className='text-justify'>
                                            {selectedNews.content}
                                        </div>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
export default TrendingNewsDetail;