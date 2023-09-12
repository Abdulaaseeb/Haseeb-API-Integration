import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Coments from '../../pages/coments'
import AddComments from '../../pages/AddComments'


export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path='/' element = {<Coments/>}/>
                <Route path='AddComments' element = {<AddComments/>}/>
                <Route path='AddComments/:id' element = {<AddComments/>}/>
            </Routes>
        </Router>
    )
}
