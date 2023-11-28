import React from 'react'

const Alert = ({ type, text }) => {
    return (
        <div className='fixed top-20 left-0 right-0 lg:mt-1 flex items-center justify-center z-50'>
            <div
                className={`p-2 ${type === "danger" ? "bg-red-800" : "bg-pink-700"
                    } items-center text-indigo-100 rounded-md leading-none lg:rounded-full flex lg:inline-flex`}
                role='alert'
            >
                <p
                    className={`flex rounded-full ${type === "danger" ? "bg-red-500" : "bg-pink-300"
                        } uppercase px-2 py-1 text-xs font-semibold mr-3 `}
                >
                    {type === "danger" ? "Failed!" : "Success!"}
                </p>
                <p className='mr-2 text-left'>{text}</p>
            </div>
        </div>
    );
};

export default Alert;