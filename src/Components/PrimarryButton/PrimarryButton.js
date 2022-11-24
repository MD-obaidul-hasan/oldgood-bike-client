import React from 'react';

const PrimarryButton = ({children}) => {
    return (
        <button className="btn bg-gradient-to-r from-primary to-secondary">{children}</button>
    );
};

export default PrimarryButton;