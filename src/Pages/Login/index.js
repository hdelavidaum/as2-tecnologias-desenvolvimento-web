import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import firebase from "../../Config/Firebase/index.js";

const PageLogin = () => {
    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({
        email: "",
        pwd: ""
    });
    const [isButtonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        const items = Object.values(loginData)
        const shouldEnableButton = items.filter(item => !!item && item !== '').length === 2
        
        if (shouldEnableButton) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }

        console.log(items)

    }, [loginData])


    
    const handleOnChange = (e) => {
        e.preventDefault();

        const key = e.target.name;
        const value = e.target.value;
        setLoginData(prevState => ({...prevState, [key]: value}));
    }

    const handleOnClick = async (e) => {
        e.preventDefault()

        await firebase.auth().signInWithEmailAndPassword(loginData.email, loginData.pwd)
            .then(res => {
                console.log(res.data)
                navigate("/principal");
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <h1>Login</h1>
            <section className="page-login">
                <input type="email" placeholder="E-mail" name="email" value={loginData.email} onChange={handleOnChange}/>
                <input type="password" placeholder="Senha" name="pwd" value={loginData.pwd} onChange={handleOnChange}/>
                <button className="btn-login" disabled={isButtonDisabled} onClick={handleOnClick}>Login</button>
            </section >
        </>
    )
}

export default PageLogin