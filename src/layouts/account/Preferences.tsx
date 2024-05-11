import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSportDispatch, useSportState } from '../../context/sports/context';
import { useTeamsDispatch, useTeamsState } from '../../context/teams/context';
import { fetchSports } from '../../context/sports/action';
import { fetchTeams } from '../../context/teams/actions';
import { usePreferencesDispatch, usePreferencesState } from '../../context/preferences/context';
import { fetchPreferences, updatePreferences } from '../../context/preferences/actions';
{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg> */}

const Preferences = (args: any) => {

    const preferencesDispatch = usePreferencesDispatch();
    let preferencesState: any = usePreferencesState();
    const { preferences, isLoading22, isError22, errorMessage22 } = preferencesState;
    console.log("Preference 1-> ", preferences);

    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
        updatePreferences(preferencesDispatch, preferences);
    }

    const openModal = () => {
        setIsOpen(true)
        fetchPreferences(preferencesDispatch);
    }

    const sportsDispatch = useSportDispatch();
    let teamsDispatch = useTeamsDispatch();
    // console.log("Team Dispatch:", teamsDispatch);
    // fetchTeams(teamsDispatch);
    useEffect(() => {
        fetchSports(sportsDispatch);
        fetchTeams(teamsDispatch);
    }, []);


    let sportState: any = useSportState();
    const { sports, isLoading, isError, errorMessage } = sportState;
    // console.log("Sports:", sports, isLoading, isError, errorMessage);
    // console.log("Sport Length:", sports.length);


    let teamState: any = useTeamsState();

    const { teams, isLoading2, isError2, errorMessage2 } = teamState;
    // console.log("Teams:", teams, isLoading2, isError2, errorMessage2);
    // console.log("Teams Length:", teams.length);


    if (sports.length === 0 && isLoading) {
        return <span>Sports News Loading...</span>;
    }

    if (sports.length === 0) {
        return <span>Wait Sports News Loading...</span>;
    }

    if (isError) {
        return <span>Sports News Item Page -{errorMessage}</span>;
    }

    // console.log("Sport Items:", (sports));


    if (teams.length === 0 && isLoading2) {
        return <span>Teams Loading...</span>;
    }

    if (teams.length === 0) {
        return <span>Wait Teams Loading...</span>;
    }

    if (isError) {
        return <span>Teams Item Page -{errorMessage}</span>;
    }

    // console.log("Teams Items:", (teams));

    
    const handleOnChangeSport = (event: React.InputHTMLAttributes<HTMLInputElement>) => {
        // console.log(event.target.checked);
        // console.log("Before Preferences:", preferences.sports);
        
        if (event.target.checked) {
            preferences?.sports.push(Number(event.target.id));
         }
        else {
            preferences.sports = preferences?.sports.filter(item => item !== Number(event.target.id));
        }
        // console.log("After:", preferences.sports);
        
    }

    const handleOnChangeTeam = (event: React.InputHTMLAttributes<HTMLInputElement>) => {
        // console.log(event.target.checked);
        // console.log("Before Preferences:", preferences.teams);
        
        if (event.target.checked) {
            preferences.teams.push(Number(event.target.id));
         }
        else {
            preferences.teams = preferences.teams.filter(item => item !== Number(event.target.id));
        }
        // console.log("After:", preferences.sports);
        
    }


    return (
        <>
            <Cog6ToothIcon onClick={openModal} className="w-8 dark:bg-gray-800 dark:text-white bg-white  text-gray-400  dark:hover:text-blue-500 hover:text-blue-600" />
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
                                <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className='w-full grid-cols-2'>
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        > Your Favorites Sport & Teams
                                        </Dialog.Title>
                                        {/* <XMarkIcon className="h-6 w-6" onClick={closeModal} aria-hidden="true" /> */}
                                        <IconButton
                                            aria-label="close"
                                            onClick={closeModal}
                                            sx={{
                                                position: 'absolute',
                                                right: 8,
                                                top: 8,
                                                color: (theme) => theme.palette.grey[500],
                                            }}
                                        >
                                            <CloseIcon />
                                        </IconButton>
                                        <form
                                        // onSubmit={handleSubmit}
                                        >
                                            <div className="flex-left">
                                                <div className="flex-left text-blue-950 text-left font-bold text-lg m-2" >Sports</div>
                                                <div className='grid grid-cols-4 gap-4'>
                                                    {
                                                        sports.map((sport: any) => {
                                                            // console.log("News:", news.id);
                                                            // fetchTrendingNewsDetail(trendingNewsDetailDispatch, news.id);
                                                            return (

                                                                <div key={sport.id}
                                                                    className="flex m-0 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                                                                >
                                                                    <div className="flex">
                                                                        <input
                                                                            onChange={handleOnChangeSport}
                                                                            defaultChecked={preferences?.sports?.includes(Number(sport.id))}
                                                                            id={sport.id}
                                                                            className="mx-2 w-4"
                                                                            type="checkbox"
                                                                            value={sport.name}
                                                                            
                                                                        />
                                                                        <label
                                                                            className="align-middle text-nowrap"
                                                                            htmlFor={sport.id}
                                                                        >
                                                                            {sport.name}
                                                                        </label>


                                                                    </div>

                                                                </div>
                                                            )

                                                        })
                                                    }
                                                </div>
                                            </div>

                                            <div className="flex-right">
                                                <div className="text-blue-950 text-left font-bold text-lg m-2" >Teams</div>
                                                <div className='grid grid-cols-4 gap-4 m-0'>
                                                    {
                                                        teams.map((team: any) => {
                                                            // console.log("News:", news.id);
                                                            // fetchTrendingNewsDetail(trendingNewsDetailDispatch, news.id);
                                                            return (

                                                                <div key={team.id}
                                                                    className=" flex justify-between bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                                                                >
                                                                    <div>

                                                                        <input
                                                                            id={team.id}
                                                                            className="mx-2 w-4"
                                                                            type="checkbox"
                                                                            value={team.name}
                                                                            onChange={handleOnChangeTeam}
                                                                            defaultChecked={preferences?.teams?.includes(Number(team.id))}
                                                                            
                                                                        />

                                                                        <label
                                                                            className="align-middle text-nowrap"
                                                                            htmlFor={team.id}
                                                                        >
                                                                            {team.name}
                                                                        </label>


                                                                    </div>

                                                                </div>
                                                            )

                                                        })
                                                    }
                                                </div>
                                            </div>
                                           
                                        </form>
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
export default Preferences;