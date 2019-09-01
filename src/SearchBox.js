import React from 'react';

const SearchBox = () => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--blue bg-lightest-blue'
                type='search' 
                placeholder='Search robot'
                />
        </div>
    );
}

export default SearchBox;