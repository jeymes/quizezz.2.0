import React from 'react';

const Modelo01Preview = ({ imageUrl }: any) => {
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            height: 60,
            justifyContent: 'center',
            alignItems: 'center'
        }}  >
            <img
                src={imageUrl} alt="Modelo"
                style={{ width: 50, borderRadius: '8px' }} />
        </div>
    );
};

export default Modelo01Preview;
