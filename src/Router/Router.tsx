import { Routes, Route } from 'react-router-dom'
import { MyHome } from '../components/Main/MyHome/MyHome'
import { Main } from '../components/Main/Main'
import { MyStack } from '../components/Main/MyStack/MyStack'
import { AboutMe } from '../components/Main/AboutMe/AboutMe'
import { MyPortfolio } from '../components/Main/MyPortfolio/MyPortfolio'


export function Router(){
    return (
        <Routes>
            <Route path='/' element={<Main />}>
                <Route path='/'  element={<MyHome />}/>
                <Route path='/about-me'  element={<AboutMe />}/>
                <Route path='/stacks'  element={<MyStack />}/>
                <Route path='/portfolio'  element={<MyPortfolio />}/>
            </Route>
        </Routes>
    )
}