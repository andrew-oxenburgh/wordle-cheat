import { Suspense } from 'react'
import * as R from 'ramda'
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/welcome'
import Loader from './components/Loader'
import Desktop from './Desktop'
import { LazyComponentType } from './lazyComponents'

const WCRoutes = ({ lazyComponents }: { lazyComponents: LazyComponentType[] }) => {
    return <Routes>
        {R.map((page: LazyComponentType) => {
            const path = page.link || '/' + page.name
            const Comp = page.lazyComponent
            return (
                <Route path={path} key={path} element={<Suspense fallback={<Loader />}>
                    <Comp />
                </Suspense>} />
            )
        }, lazyComponents)}

        <Route path="/welcome" element={<Welcome />} />
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<p>404 page not found </p>} />
        <Route path="/desktop" element={<Desktop />} />

    </Routes>
}

export default WCRoutes
