// import { ArrowDownIcon } from 'Icons'; //you can use your icons
import { ChevronUpDownIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useRef } from 'react';
import cx from 'classnames';
import { IDropdownProps } from '../../context/favorites/types';



function DropdownTeam({
	labelName,
	// name,
	options,
	placeHolder,
	type,
	required,
	className,
	tabIndex,
	setState
}: IDropdownProps) {

	// const favoritesDispatch = useFavoritesDispatch();
	// console.log("Favorite Dispatch:", favoritesDispatch);


	const [isFocused, setIsFocused] = React.useState(false);
	const [selectedItem, setSelectedItem] = React.useState<number | string>();
	const [selectedID, setSelectedID] = React.useState<number | string>();
	console.log("Selected ID:", selectedID);
	const wrapperRef = useRef<any>(null);

	// useEffect(() => {
	// 	updateSportSelection(favoritesDispatch,{ selectedID, selectedItem});
	// }, []);

	useEffect(() => {
		function handleClickOutside(event: any) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				setIsFocused(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [wrapperRef]);

	// const favoritesState = useFavoritesState();
	// console.log("Favorite State:", favoritesState);


	const onValueChange = (selectedID: string | number, selectedValue: string | number) => {
		setSelectedID(selectedID);
		setSelectedItem(selectedValue);
		setIsFocused(false);
		// setFavoriteTeamState(selectedID);
		// setState(selectedID);
		setState({id:selectedID,name:selectedValue});
	};
	React.useEffect(() => {
		setIsFocused(false);
	}, [selectedItem]);

	const onClear = (e: any) => {
		e.stopPropagation();
		setSelectedItem(placeHolder);
		setIsFocused(false);
	};
	// console.log("Options:", options);
	// console.log("Selected my team id:", selectedID);
	return (
		<div key="DropDownTeam">
			<div ref={wrapperRef} className="text-nowrap w-full pr-2 border-2 border-[#979797] relative  rounded-md p-1">
				<div className="flex flex-row items-center">
					<span className="text-sm text-[#A4A4A4]">{labelName}</span>
					{required && (
						<span className="text-[20px] text-[#FF0000] top-0 ">*</span>
					)}
				</div>
				<div
					tabIndex={tabIndex}
					className={cx(
						'w-full bg-white h-[41px] rounded-lg drop-shadow-input pl-3 focus:outline-0 focus:drop-shadow-none transition relative flex items-center',
						{
							'rounded-b-[0]': isFocused,
						},
						className
					)}
					onClick={() => setIsFocused(!isFocused)}>
					<span>{selectedItem ?? placeHolder}</span>
					{type === 'arrow-down' && (
						<div className="right-3 transform -translate-y-1/2 z-10 absolute top-5">
							{selectedItem && selectedItem !== placeHolder ? (
								<div onClick={(e) => onClear(e)}></div>
							) : (
								<ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
							)}
						</div>
					)}
				</div>
				{isFocused && (
					<ul key="TeamOptions" className=" items-center gap-4 block absolute w-full z-50">
						{options.map(({ id, name }) => (
							<li
								onClick={() => onValueChange(id, name)}
								className="rounded-sm shadow-[inset_1px_0px_0px_rgba(0,0,0,0.2) bg-white drop-shadow-input pl-3 focus:outline-0 focus:drop-shadow-none transition relative flex hover:bg-[#F7B500] ">
								{name}
							</li>
						))}
					</ul>
				)}
			</div>

			{/* <div>

				<FavoritesItems sportID={selectedID} />
			</div> */}
		</div>
	);
}

export default DropdownTeam;

DropdownTeam.defaultProps = {
	name: '',
	type: '',
	className: '',
	placeHolder: '',
	required: false,
	tabIndex: 0,
	labelName: '',
};