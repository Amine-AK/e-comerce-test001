"use client"
import React, { useState } from 'react'
import SearchManuFacturer from './SearchManuFacturer';

export default function SearchBar() {
  const [manuFacturer, setManufacturer] = useState("");

  const handleSearch = () => {}
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManuFacturer
          manuFacturer = {manuFacturer}
          setManufacturer = {setManufacturer}
        />
      </div>
    </form>
  )
}
