import { useState } from "react"

const PageCadastro = () => {
    const [userData, setUserData] = useState({
        name: "",
        lastName: "",
        birthDate: "",
        email: "",
        pwd: ""
    })

    const handleOnChange = (e) => {
        e.preventDefault()
        setUserData(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    return (
        <div>
            <input type="text" placeholder="Nome" name="name" value={userData.name} onChange={handleOnChange}/>
            <input type="text" placeholder="Sobrenome" name="lastName" value={userData.lastName} onChange={handleOnChange}/>
            <input type="date" placeholder="Data de Nascimento" name="birthDate" value={userData.birthDate} onChange={handleOnChange}/>
            <input type="email" placeholder="E-mail" name="email" value={userData.email} onChange={handleOnChange}/>
            <input type="password" placeholder="Senha" name="pwd" value={userData.pwd} onChange={handleOnChange}/>
        </div>
    )
}

export default PageCadastro