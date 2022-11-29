import React from 'react'

type Input = {
  label: string
  id: string
  name: string
  placeholder: string
  onChange: any
}

export function SearchBar(props: Input) {
  return (
    <>
      <input
        id={props.id}
        name={props.name}
        className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  )
}

export default SearchBar;