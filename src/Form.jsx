import React,{useState} from 'react'
import styles from './styles.css'

export default function Form() {
 
    const[email,setEmail] = useState('');
    const[password,setPass] = useState('');
    const[confirmPassword,setConfirmPass] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(password===confirmPassword){
            console.log("same password")
        }
        else{
            console.log("different password")
        }
        setEmail("");
        setPass("");
        setConfirmPass("");
    
    }
    const changeBackground=(e)=>{
        e.target.style.background = 'blue';
    }

    const changeColor=(e)=>{
        e.target.style.background = 'red';
    }
    return (
        <div>
            <form className="container" style={styles}>
                Email:<input type="email" required value={email} onChange={e=>{setEmail(e.target.value)}}/>
                Password:<input type="password" required value={password} onChange={e=>{setPass(e.target.value)}}/>
                Confirm Password:<input type="password" required value={confirmPassword} onChange={e=>{setConfirmPass(e.target.value)}}/>
                <button onMouseOver={changeBackground} onMouseOut={changeColor} onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
