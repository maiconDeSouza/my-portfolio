import { Routes, Route } from 'react-router-dom'
import { MyHome } from '../components/Main/MyHome/MyHome'
import { Main } from '../components/Main/Main'
import { Teste } from '../components/Main/Teste/Teste'


export function Router(){
    return (
        <Routes>
            <Route path='/' element={<Main />}>
                <Route path='/'  element={<MyHome />}/>
                <Route path='/teste'  element={<Teste />}/>
            </Route>
        </Routes>
    )
}