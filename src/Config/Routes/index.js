import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import { PageCadastro, PageHome, PageLogin, PagePrincipal } from '../../Pages'

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact={true} path="/" element={<PageHome />}/>
            <Route exact={true} path="/principal" element={<PagePrincipal />}/>
            <Route exact={true} path="/login" element={<PageLogin />}/>
            <Route exact={true} path="/cadastro" element={<PageCadastro />}/>
            {/* <Route exact={true} path={"*"} component={}/> */}
        </Routes>
    </BrowserRouter>
)

export default AppRoutes