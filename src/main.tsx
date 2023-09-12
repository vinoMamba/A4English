import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@radix-ui/themes/styles.css';
import { Loading } from './components/Loading.tsx';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const Blackboard = lazy(() => import("./views/Blackboard.tsx"))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index element={<Blackboard />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)

