import { useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import firebase from "../../Config/Firebase/index.js";

const PageCadastro = () => {
    const navigate = useNavigate()
    const refDateInput = useRef()
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
        setButtonDisabled(true)
        
        try {
                await firebase.auth().createUserWithEmailAndPassword(userData.email, userData.pwd)
                    .then(async res => {
                            await firebase.firestore().collection("user").doc(res.user.uid).set({
                                name: userData.name,
                                lastname: userData.lastname,
                                birthdate: userData.birthdate,
                                email: userData.email
                            })
                    });
                navigate("/principal")
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
                <label htmlFor='userName'>Nome:</label>
                <input id="userName" type="text" placeholder="Nome" name="name" value={userData.name} onChange={handleOnChange}/>
                
                <label htmlFor='userLastname'>Sobrenome:</label>
                <input id="userLastname" type="text" placeholder="Sobrenome" name="lastname" value={userData.lastname} onChange={handleOnChange}/>
                
                <label htmlFor='userBirthdate'>Data de Nascimento:</label>
                <input id="userBirthdate" type="date" placeholder="Data de Nascimento" name="birthdate" value={userData.birthdate} onChange={handleOnChange}/>
                
                <label htmlFor='userEmail'>E-mail:</label>
                <input id="userEmail" type="email" placeholder="E-mail" name="email" value={userData.email} onChange={handleOnChange}/>
                
                <label htmlFor='userPassword'>Senha:</label>
                <input id="userPassword" type="password" placeholder="Senha" name="pwd" value={userData.pwd} onChange={handleOnChange}/>
                
                <button className="btn-register" disabled={isButtonDisabled} onClick={handleOnClick}>Cadastrar</button>
            </section >
        </>
    )
}

export default PageCadastro