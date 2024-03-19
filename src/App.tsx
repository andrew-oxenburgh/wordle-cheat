import { HashRouter } from 'react-router-dom'

// dynamic because possibly big imports
import Navigation from './components/structural/Navigation'
import WCRoutes from './WCRoutes'
import { lazyComponents } from './lazyComponents'

import './config/firebase'
import './import-fontawesome-icons'
import './bootstrap.min.css'

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

