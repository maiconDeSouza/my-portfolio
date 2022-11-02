import { Routes, Route } from 'react-router-dom'
import { MyHome } from '../components/Main/MyHome/MyHome'
import { Main } from '../components/Main/Main'
import { Teste } from '../components/Main/AboutMe/AboutMe'


export function Router(){
    return (
        <Routes>
            <Route path='/' element={<Main />}>
                <Route path='/'  element={<MyHome />}/>
                <Route path='/about-me'  element={<Teste />}/>
            </Route>
        </Routes>
    )
}