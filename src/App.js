import React from 'react'
import Form from './Form'
import { useWindowEffect } from './Window'

export default function App() {
    const[name] = useWindowEffect('')

    return (
        <div>
            <Form/>
            {name}
        </div>
        
    )
}
