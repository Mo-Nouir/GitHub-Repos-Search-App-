import React from "react";
import { SearchBar } from './SearchBar'
import { useState, useEffect } from 'react'
import axio from '../API/axio'




export function SearchRepo(){
    const [initialRepositories, setInitialRepositories] = useState([])
  const [repositories, setRepositories] = useState([])
  const [userGitHub, setUserGitHub] = useState('')

  function handleUserGitHub(nameUserGitHub: { target: { value: string } }) {
    let value = nameUserGitHub.target.value

    setUserGitHub(value)
  }

  function searchRepositories() {
    axio
      .get(`/${userGitHub}/repos`)
      .then(response => {
        const res = response.data
        if (res.length <= 0) {
          alert('User do not have repositories')
        } else {
          setInitialRepositories(response.data)
          setRepositories(response.data)
        }
      })
      .catch(error => {
        if (!userGitHub) {
          alert('enter a user!')
        } else {
          alert('User can not be found!')
        }
      })
  }

  function handleRepositoryName(repositoryName: { target: { value: string } }) {
    let nameRepository = repositoryName.target.value

    if (!nameRepository) {
      setRepositories(initialRepositories)
    } else {
      let filterRepositories = repositories.filter(getRepositories)

      function getRepositories(value: any) {
        return value.name.includes(nameRepository)
      }

      setRepositories(filterRepositories)
    }
  }

    return(
        <>
 
        

        <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
          <SearchBar
            
            id="userGitHub"
            name="userGitHub"
            label=""
            placeholder="User GitHub"
            onChange={handleUserGitHub}
          />

          <button
            className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-4 "
            onClick={searchRepositories}
          >
            Get Respositories
          </button>
          </div>
          </div> 
        </div>

      <main className=''>
        {repositories.length > 0 ? (
          <div className=" mx-auto	mt-5 mb-3 w-96 ">
            <SearchBar
              id="repositoryName"
              name="repositoryName"
              label=""
              placeholder="Repository Name"
              onChange={handleRepositoryName}
            />
          </div>
        ) : (
          <></>
        )}

<div className="flex flex-wrap justify-center">

          {repositories.map(repository => {
            return (
              <div className="sm:w-full	 block rounded-lg shadow-lg bg-white max-w-sm text-center ml-5 mt-5 mb-5 md:w-1/2  	">
                <h5
                  key={repository.id}
                  className="text-gray-900 text-xl font-medium mb-2 "
                >
                  {repository.name}
                </h5>
                <div
                  className=" text-gray-700 text-base mb-4"
                >
                  {repository.description}
                </div>

                <a
                  href={repository.html_url}
                  target="_blanck"
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mb-2"
                >
                  Check Code
                </a>
                <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                {repository.language}
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </>
    )
}