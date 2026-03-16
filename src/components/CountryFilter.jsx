import React from 'react';

const CountryFilter = ({ currentCountry, onFilterChange }) => {
    const options = [
        { label: 'Top News', value: 'in,us' },
        { label: 'India', value: 'in' },
        { label: 'USA', value: 'us' }
    ];

    return (
        <div className="country-filter">
            {options.map((option) => (
                <button
                    key={option.value}
                    className={`filter-btn ${currentCountry === option.value ? 'active' : ''}`}
                    onClick={() => onFilterChange(option.value)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
};

export default CountryFilter;