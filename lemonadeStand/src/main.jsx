//Importerer og opsætter Redux Provider (så alle komponenter kan bruge Redux)
//Importerer og opsætter React Router (<Router>)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux' 
import { store } from './store'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Gør, at hele React-app'en har adgang til Redux-store og kan bruge fx hooks inde i komponenterne*/}
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>
)
