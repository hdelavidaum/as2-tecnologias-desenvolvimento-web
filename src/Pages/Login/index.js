import { useEffect, useState } from "react"

const PageLogin = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        pwd: ""
    });
    const [isButtonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        const items = Object.values(setLoginData)
        const shouldEnableButton = items.filter(item => !!item && item !== '').length === 5
        
        if (shouldEnableButton) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }

    }, [setLoginData])


    
    const handleOnChange = (e) => {
        e.preventDefault();

        const key = e.target.name;
        const value = e.target.value;
        setLoginData(prevState => ({...prevState, [key]: value}));
    }

    const handleOnClick = (e) => {
        e.preventDefault()
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