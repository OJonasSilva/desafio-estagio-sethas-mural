import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import FeedPage from './pages/FeedPage'
import NewsDetailPage from './pages/NewsDetailPage'
import RegisterNewsPage from './pages/RegisterNewsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FeedPage />} />
          <Route path="noticias/:id" element={<NewsDetailPage />} />
          <Route path="cadastrar" element={<RegisterNewsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
