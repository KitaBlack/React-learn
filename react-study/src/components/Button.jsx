import React from "react";

const Button = ({ text }) => {
    return (
        <button type="button" className="bg-gray-200 text-white rounded p-1 px-2">
            { text }
        </button>
    );
};

export default Button