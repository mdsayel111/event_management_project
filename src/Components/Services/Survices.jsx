import React from 'react';
import Survice from './Survice';

const Survices = ({data}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#D5E0E3] mt-[-5px] lg:grid-cols-3 py-8 px-8'>
            {
                data.map(item => <Survice key={item.id} survice={item} />)
            }
        </div>
    );
};

export default Survices;