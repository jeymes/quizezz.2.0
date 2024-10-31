import React from 'react';

const Modelo02Preview = ({ totalPages = 1, currentPage = 1 }) => {
    const progress = (currentPage / totalPages) * 100;

    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '0 20px'
            }}
        >
            <span style={{ color: '#555', marginBlock: 10 }}>{currentPage} / {totalPages}</span>

            <div
                style={{
                    width: '100%',
                    height: 8,
                    backgroundColor: '#e0e0e0',
                    borderRadius: 5,
                    overflow: 'hidden',
                    marginBottom: 8,
                }}
            >
                <div
                    style={{
                        width: `${progress}%`,
                        height: '100%',
                        backgroundColor: '#3b82f6', // Cor do progresso
                        transition: 'width 0.3s ease',
                    }}
                />
            </div>
        </div>
    );
};

export default Modelo02Preview;
