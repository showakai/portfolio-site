import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router'
import Home from './pages/Home'
import Works from './pages/Works'
import WorkDetail from './components/workDetail/WorkDetail'
import Layout from './layout/Layout'
import AboutP from './pages/ AboutP'

const routesLink = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} index />
      <Route path="works" element={<Works />} />
      <Route path="about" element={<AboutP />} />
      <Route path="/works/:site" element={<WorkDetail />} />
      <Route path="*" element={<Error />} />
    </Route>,
  ),
)
export default routesLink
