import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useTrendingNewsDetailDispatch, useTrendingNewsDetailState } from '../../context/trendingnewsdetail/context';
import { fetchTrendingNewsDetail } from '../../context/trendingnewsdetail/action';
import { XMarkIcon } from '@heroicons/react/24/outline';

const TrendingNewsDetail = (args: any) => {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(true)
    const closeModal = () => {
        setIsOpen(false)
        navigate("../")
    }
    // const openModal = () => {
    //     setIsOpen(true)
    // }

    const params = useParams();
    // console.log("Params:", params);
    const newsID = params.articleID;

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
    // console.log("Trending News Details:", trendingNewsDetail);

    if (trendingNewsDetail.length === 0 && isLoading) {
        return <span>Trending News Loading...</span>;
    }

    if (isError) {
        return <span>Trending News Items Detail Page - {errorMessage}</span>;
    }

    let selectedNews = trendingNewsDetail.filter(
        (tempNews) => {
            // console.log("tempnews.id", tempNews.id);
            // console.log("newsID->", newsID);
            return (tempNews.id === Number(newsID))
        }
    )?.[0];
    console.log("Selcted News:", selectedNews);
    if (selectedNews === undefined) {
        return <span>Trending News Detail Loading</span>
    }
    return (
        // isOpen?(
        //     <>
        //      <Link to={selectedNews.id} key={selectedNews.id} >
        //         <button onClick={openModal}
        //             className="bg-transparent border-none"
        //         >
        //             Read More...
        //         </button>
        //     </Link>
        //     </>
        // ):(
        <>
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
                                    <div className='flex justify-between'>
                                        <div>
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg font-medium leading-6 text-gray-900"
                                            >
                                                {selectedNews.title}
                                            </Dialog.Title>
                                        </div>
                                        <div>
                                            <XMarkIcon
                                                className="h-6 w-6"
                                                onClick={closeModal}
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>
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
    // )
}
export default TrendingNewsDetail;