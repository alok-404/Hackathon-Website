import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from "lucide-react";

const countries = [
  { code: 'in', name: 'India', flag: 'https://flagcdn.com/in.svg', currency: { symbol: '₹', code: 'INR' } },
  { code: 'us', name: 'USA', flag: 'https://flagcdn.com/us.svg', currency: { symbol: '$', code: 'USD' } },
  { code: 'fr', name: 'France', flag: 'https://flagcdn.com/fr.svg', currency: { symbol: '€', code: 'EUR' } },
  { code: 'jp', name: 'Japan', flag: 'https://flagcdn.com/jp.svg', currency: { symbol: '¥', code: 'JPY' } },
  { code: 'be', name: 'Belgium', flag: 'https://flagcdn.com/be.svg', currency: { symbol: '€', code: 'EUR' } },
  { code: 'gb', name: 'United Kingdom', flag: 'https://flagcdn.com/gb.svg', currency: { symbol: '£', code: 'GBP' } },
  { code: 'ca', name: 'Canada', flag: 'https://flagcdn.com/ca.svg', currency: { symbol: '$', code: 'CAD' } },
  { code: 'au', name: 'Australia', flag: 'https://flagcdn.com/au.svg', currency: { symbol: '$', code: 'AUD' } },
  { code: 'cn', name: 'China', flag: 'https://flagcdn.com/cn.svg', currency: { symbol: '¥', code: 'CNY' } },
  { code: 'br', name: 'Brazil', flag: 'https://flagcdn.com/br.svg', currency: { symbol: 'R$', code: 'BRL' } },
  { code: 'mx', name: 'Mexico', flag: 'https://flagcdn.com/mx.svg', currency: { symbol: '$', code: 'MXN' } },
  { code: 'ch', name: 'Switzerland', flag: 'https://flagcdn.com/ch.svg', currency: { symbol: 'CHF', code: 'CHF' } },
  { code: 'ru', name: 'Russia', flag: 'https://flagcdn.com/ru.svg', currency: { symbol: '₽', code: 'RUB' } },
  { code: 'kr', name: 'South Korea', flag: 'https://flagcdn.com/kr.svg', currency: { symbol: '₩', code: 'KRW' } },
  { code: 'ae', name: 'UAE', flag: 'https://flagcdn.com/ae.svg', currency: { symbol: 'د.إ', code: 'AED' } }
];

const Countries = ({ selected, onChange }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedCountry = countries.find((c) => c.name === selected) || countries[0];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative text-xs z-50">
      <div
        className="flex items-center gap-2 w-55 ml-auto mr-6 rounded px-3 py-1 cursor-pointer bg-transparent"
        onClick={() => setOpen(!open)}
      >
        <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-5 h-5 rounded-full" />
        <span className='flex items-center'>
          {selectedCountry.name} ({selectedCountry.currency.code} {selectedCountry.currency.symbol})
          <ChevronDown size={18} className="ml-1 transition-transform duration-200 md:rotate-0 rotate-180" />
        </span>
      </div>

      {open && (
        <>
          {/* Desktop Dropdown */}
          <div className="hidden md:block absolute top-10 right-7 w-85 max-h-100 overflow-y-auto rounded bg-zinc-300 shadow z-50 mt-1">
            {countries.map((country) => (
              <div
                key={country.code}
                className="flex items-center gap-2 px-7 py-1.5 text-xs hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  onChange(country.name);
                  setOpen(false);
                }}
              >
                <img src={country.flag} alt={country.name} className="w-5 h-5 rounded-full" />
                <span>{country.name} ({country.currency.code} {country.currency.symbol})</span>
              </div>
            ))}
          </div>

          {/* Mobile Slide Dropdown */}
          <div className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden" onClick={() => setOpen(false)}></div>

          <div className={`fixed top-0 right-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
            <div className="flex items-center justify-between px-4 py-4 border-b">
              <button onClick={() => setOpen(false)} className="text-sm">Back</button>
              <h2 className="text-lg font-bold text-center">Select Country</h2>
              <span className="text-transparent">X</span>
            </div>

            <div className="overflow-y-auto max-h-full py-3">
              {countries.map((country) => (
                <div
                  key={country.code}
                  className="flex items-center gap-2 px-8 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    onChange(country.name);
                    setOpen(false);
                  }}
                >
                  <img src={country.flag} alt={country.name} className="w-5 h-5 rounded-full" />
                  <span>{country.name} ({country.currency.code} {country.currency.symbol})</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Countries;
