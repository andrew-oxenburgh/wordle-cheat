import { HashRouter } from 'react-router-dom'
import './bootstrap.min.css'

// dynamic because possibly big imports
import Navigation from './components/structural/Navigation'
import WCRoutes from './WCRoutes'

import './config/firebase'
import './import-fontawesome-icons'

import { lazyComponents } from './lazyComponents'

const App = () => {
    return (
        <>
            <HashRouter>
                <header style={{ padding: 0 }}>
                    <Navigation />
                </header>
                <main style={{ padding: 0, backgroundColor: '#eae4ff' }}>
                    <WCRoutes lazyComponents={lazyComponents} />
                </main>
            </HashRouter>
        </>
    )
}

export default App


