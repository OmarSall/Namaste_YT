import React, {useCallback, useEffect, useState} from 'react';
import {
    HAMBURGER_ICON_URL,
    SEARCH_ICON_URL,
    USER_ICON_URL,
    YOUTUBE_LOGO_URL,
    YOUTUBE_SEARCH_API
} from "../constants/constants";
import {toggleMenu} from "../utils/appSlice";
import {useDispatch} from "react-redux";

const Head = () => {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // API call
        // make an API call after every key press
        // but if the difference between 2 API calls is <200ms
        // decline the API call
        const timer = setTimeout(() => getSearchSuggestions(), 200);

        return () => clearTimeout(timer);

    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json = await data.json();
        console.log(json);
    }

    const dispatch = useDispatch();

    const toggleMenuHandle = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className="grid grid-flow-col p-2 m-2 shadow-lg">
            <div className="flex mb-2 col-span-1">
                <img
                    onClick={() => toggleMenuHandle()}
                    className="h-12 cursor-pointer"
                    alt="menu"
                    src={HAMBURGER_ICON_URL}
                />
                <a href="/">
                    <img
                        className="h-12 mx-2"
                        alt="logo"
                        src={YOUTUBE_LOGO_URL}
                    />
                </a>
            </div>
            <div className="col-span-10 mt-2 pr-36 text-center flex justify-center items-center">
                <input
                    className="w-1/2 py-2 border border-gray-300 rounded-l-full"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="py-2 px-4 border border-gray rounded-r-full bg-gray-200">
                    <img
                        className="w-6"
                        alt="search"
                        src={SEARCH_ICON_URL}
                    />
                </button>
            </div>
            <div className="col-span-1">
                <img
                    className="h-12 -mt-2 "
                    alt="user"
                    src={USER_ICON_URL}/>
            </div>
        </div>
    );
}

export default Head;