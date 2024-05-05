import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import { PageCadastro, PageLogin, PagePrincipal } from '../../Pages'

const AppRoutes = ({children}) => (
    <BrowserRouter>
        {children}
        <Routes>
            <Route exact={true} path="/" element={<PageLogin />}/>
            <Route exact={true} path="/principal" element={<PagePrincipal />}/>
            <Route exact={true} path="/cadastro" element={<PageCadastro />}/>
        </Routes>
    </BrowserRouter>
)

export default AppRoutes