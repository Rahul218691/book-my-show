import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
const App = lazy(() => import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={<h1>Loading...</h1>}>
        <App />
    </Suspense>
);
