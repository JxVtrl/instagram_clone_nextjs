import React, { createContext, useContext, useEffect, useState, useRef } from 'react'
import { getImageFromAPI } from '../services/unsplash/unsplash.js'


const AppContext = createContext()

export function AppProvider({ children }) {

    function FindPhoto() {
        getImageFromAPI('profile')
            .then(response => {
                console.log(response)

            })
    }


    const value = {
        FindPhoto,
     
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
