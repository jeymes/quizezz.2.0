import React from 'react';

const Modelo04Preview = ({ imageUrl }: any) => {
    return (
        <div
            style={{ width: '100%' }}
        >
            <img src={imageUrl} alt="Modelo" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
    );
};

export default Modelo04Preview;
