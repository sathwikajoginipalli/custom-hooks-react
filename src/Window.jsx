import {useState,useEffect} from 'react';

export const useWindowEffect=()=>{
    const[windowSize,setWindowSize] = useState(window.innerWidth)
    const[name,setName] = useState('small')

    const handleResize=()=>{
        setWindowSize(window.innerWidth)
    }


    useEffect(()=>{
        window.addEventListener('resize',handleResize);
        if(windowSize>600){
            setName("large")
        }
        else{
            setName("small")
        }
        return ()=>{window.removeEventListener('resize',handleResize);}
    },[windowSize])

    return [name]

}

