import { useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import firebase from '../../Config/Firebase/index.js'

const PagePrincipal = () => {
    const navigate = useNavigate()
    const ref = useRef()
    const [userData, setUserData] = useState({
        name: "",
        lastname: "",
        email: "",
        birthdate: ""
    })

    useEffect(() => {
        const getUserData = async () => {
            await firebase.auth().onAuthStateChanged(async user => {
                if(user) {
                    const uid = user.uid;
                    await firebase.firestore().collection("user").doc(uid).get()
                            .then(res => {
                                setUserData({
                                    name: res.data().name,
                                    lastname: res.data().lastname,
                                    email: res.data().email,
                                    birthdate: res.data().birthdate
                                })
                            })
                }

                if(!user) ref.current?.showModal()
            })
        }

        getUserData()
        .catch(error => console.log(error))

    }, [])

    const handleOnClick = async (e) => {
        e.preventDefault()
        firebase.auth().signOut().then(() => navigate("/login"))
    }

    const handleOnClickDialog = (e) => {
        e.preventDefault()
        ref.current?.close();
        navigate("/")
    }

    return (
        <>
            <h1>Principal</h1>
            <section className="page-principal">
                <p>Nome: {userData.name}</p>
                <p>Sobrenome: {userData.lastname}</p>
                <p>Data de Nasimento: {userData.birthdate}</p>
                <p>E-mail de usuário: {userData.email}</p>
                <button className="btn-logout" onClick={handleOnClick}>Sair e ir para o Login</button>
            </section >
            <dialog ref={ref}>
                <p>Sem usuário logado!</p>
                <button autoFocus onClick={handleOnClickDialog}>Fechar</button>
            </dialog>
        </> 
    )
}

export default PagePrincipal