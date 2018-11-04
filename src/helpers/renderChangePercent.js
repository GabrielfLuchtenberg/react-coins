import React from 'react';

const renderChangePercent = (val) => {
    if (val > 0) {
        return <span className="color-green">{val}% &uarr;</span>
    }
    if (val < 0) {
        return <span className="color-red">{val}% &darr; </span>
    }
    return <span>{val}</span>
}

export default renderChangePercent 