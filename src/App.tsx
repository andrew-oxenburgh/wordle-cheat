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
        <div style={{ height: '100%' }}>
            <HashRouter>
                <header style={{ padding: 0, height: '40px' }}>
                    <Navigation />
                </header>
                <main style={{ height: 'calc(100% - 40px)', padding: 0, backgroundColor: '#eae4ff' }}>
                    <WCRoutes lazyComponents={lazyComponents} />
                </main>
            </HashRouter>
        </div>
    )
}

export default App


