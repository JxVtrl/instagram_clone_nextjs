import React, { createContext, useContext, useEffect, useState, useRef } from 'react'
import { getImageFromAPI } from '../services/unsplash/unsplash.js'
import { Mock } from '../mocks/Mock.js'


const AppContext = createContext()

export function AppProvider({ children }) {
    const [storiesActive, setStoriesActive] = useState(false)

    useEffect(() => {
        FindPhoto();
    },[])


    function FindPhoto() {
        getImageFromAPI('profile')
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.results.length; i++)
                    Mock.users[i].picture = data.results[i].links.download
                
                setStoriesActive(true)
            });
    }


    const value = {
        FindPhoto,
        storiesActive,
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
