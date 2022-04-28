import React, { createContext, useContext, useEffect, useState, useRef } from 'react'
import { getImageFromAPI } from '../services/unsplash/unsplash.js'

const AppContext = createContext()

export function AppProvider({ children }) {
    const [users, setUsers] = useState([])
    const [storiesActive, setStoriesActive] = useState(false)

    useEffect(() => {
        // FindPhoto();
        getUsers();
    }, [])

    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()


        const response1 = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data1 = await response1.json()

        data1.map((photo, index) => {
            if (index < users.length) 
                data[index].profilePhoto = photo.url
        })


        setUsers(data)
    }



    

    const FindPhoto = () => {
        getImageFromAPI('profile')
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.results.length; i++)
                    users[i].picture = data.results[i].links.download
                
                setStoriesActive(true)
            });
    }


    const value = {
        // FindPhoto,
        storiesActive,
        users
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    return useContext(AppContext)
}
