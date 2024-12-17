import React, { useState } from 'react';
import { FAQ_LIST } from '../utils/helper';
import { FaqIcon } from '../utils/icons';

const CustomAccordian = () => {
    const [value, setValue] = useState();

    const clickHandler = (i) => {
        setValue(value === i ? "" : i);
    };

    return (
        <div className='container mx-auto mt-20 flex items-center justify-center flex-col'>
            {FAQ_LIST.map((obj, i) => (
                <div key={i} className='border rounded-2xl mb-4 border-solid border-ghost-gray p-4 border-collapse w-1/2 '>
                    <div className='flex items-center justify-between cursor-pointer'
                        onClick={() => clickHandler(i) }>
                        <h3 className='text-lg text-deep-blue font-medium leading-[28px]  '> {obj.question}</h3>
                        <div>
                            <p className={`duration-500 transition-all ease-in text-black font-bold text-xl ${value === i ? 'rotate-[180deg]' : ''}`}>{<FaqIcon/>}</p>
                        </div>
                    </div>
                    <div
                        className={`md:overflow-hidden overflow-auto transition-all duration-500 ease-in
                        ${value === i ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-base text-gray-600">
                            {obj.discriptionOne}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default CustomAccordian