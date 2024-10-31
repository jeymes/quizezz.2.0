import React from 'react';

const Modelo01 = ({ imageUrl }: any) => {
    return (
        <div>
            <img src={imageUrl} alt="Modelo" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
    );
};

export default Modelo01;
