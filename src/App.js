import './style/App.css'
import { Layout } from './components/layout/layout'
import HomePage from './components/homePage/homePage'

function App() {
    return (
        <div className='App'>
            <Layout>
                <HomePage />
            </Layout>
        </div>
    )
}

export default App
