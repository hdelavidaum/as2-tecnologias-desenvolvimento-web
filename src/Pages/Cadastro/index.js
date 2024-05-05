import { useEffect, useState } from "react"
import firebase from "../../Config/Firebase/index.js";

const PageCadastro = () => {
    const [userData, setUserData] = useState({
        name: "",
        lastname: "",
        birthdate: "",
        email: "",
        pwd: ""
    });
    const [isButtonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        const items = Object.values(userData)
        const shouldEnableButton = items.filter(item => !!item && item !== '').length === 5
        
        if (shouldEnableButton) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }

    }, [userData])

    const handleOnChange = (e) => {
        e.preventDefault();

        const key = e.target.name;
        const value = e.target.value;
        setUserData(prevState => ({...prevState, [key]: value}));
    }

    const handleOnClick = async (e) => {
        e.preventDefault();
        
        try {
            setButtonDisabled(true)
            await firebase.firestore().collection("user").add({
                name: userData.name,
                lastname: userData.lastname,
                birthdate: userData.birthdate,
                email: userData.email,
                pwd: userData.pwd
                
            });
        } catch (error) {
            console.error(error)
        } finally {
            setButtonDisabled(false)
        }
    }

    return (
        <>
            <h1>Cadastro de Usuário</h1>
            <section className="page-register">
                <input type="text" placeholder="Nome" name="name" value={userData.name} onChange={handleOnChange}/>
                <input type="text" placeholder="Sobrenome" name="lastname" value={userData.lastname} onChange={handleOnChange}/>
                <input type="date" placeholder="Data de Nascimento" name="birthdate" value={userData.birthdate} onChange={handleOnChange}/>
                <input type="email" placeholder="E-mail" name="email" value={userData.email} onChange={handleOnChange}/>
                <input type="password" placeholder="Senha" name="pwd" value={userData.pwd} onChange={handleOnChange}/>
                <button className="btn-register" disabled={isButtonDisabled} onClick={handleOnClick}>Cadastrar</button>
            </section >
        </>
    )
}

export default PageCadastro