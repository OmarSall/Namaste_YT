import React from 'react';
import {HAMBURGER_ICON_URL, SEARCH_ICON_URL, USER_ICON_URL, YOUTUBE_LOGO_URL} from "../constants/constants";

const Head = () => {
    return (
        <div className="grid grid-flow-col p-2 m-2 shadow-lg">
            <div className="flex mb-2 col-span-1">
                <img
                    className="h-12"
                    alt="menu"
                    src={HAMBURGER_ICON_URL}
                />
                <img
                    className="h-12 mx-2"
                    alt="logo"
                    src={YOUTUBE_LOGO_URL}
                />
            </div>
            <div className="col-span-10 mt-2 pr-36 text-center flex justify-center items-center">
                <input
                    className="w-1/2 py-2 border border-gray-300 rounded-l-full"
                    type="text"
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
                    src={USER_ICON_URL} />
            </div>
        </div>
    );
}

export default Head;