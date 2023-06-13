import { SearchManuFacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useState , Fragment } from 'react'
import { manufacturers } from '@/constants/constants'

export default function SearchManuFacturer({manuFacturer, setManufacturer}:SearchManuFacturerProps): React.JSX.Element {
  const [query, setQuery] = useState('')

  const filterManuFactur = query === "" 
  ?manufacturers
  :manufacturers.filter((item) =>{
    return (
      item.toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, ''))
    )
  });
  return(
    <div className="search-manufacturer">
      <Combobox>
        <div className='relative w-full'>
          <Combobox.Button className="absolute top-[14px]">
            <Image 
              src="/logo.png"
              width={20} height={20}
              alt="logo discription"
              className='ml-4'/>
          </Combobox.Button>
          <Combobox.Input 
            placeholder='product'
            className="search-manufacturer__input"
            displayValue={(manuFacturer:string) => manuFacturer} 
            onChange={(e)=>e.target.value}
          >
          </Combobox.Input>
          <Transition
            as = {Fragment}
            leave="transition ease-in duration-100 "
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={()=>setQuery('')}
          >
            <Combobox.Options>
              { filterManuFactur.length === 0 && query != "" && (
                 <Combobox.Option
                 value={query}
                 className="search-manufacturer_option">
                   Creat : {query}
                 </Combobox.Option>
              ) : (
                filterManuFactur.map((item) => (
                  <Combobox.Option
                    value
                    key={item}
      className={({active}) => (`relative search-manufacturer__option ${active ? 'bg-premary-blue text-white':'text-gray-900'}`) }
                  >  
                  </Combobox.Option>
                  )
              ))}

            </Combobox.Options>

          </Transition>
        </div>
      </Combobox>

    </div>
  )
}
