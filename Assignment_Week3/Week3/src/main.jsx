import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import TextUpdater from './TextUpdater.jsx'
import FormLogger from './FormLogger.jsx'
import UserCard from './UserCard.jsx'
import LoginForm from './LoginForm.jsx'
// import './TextUpdater.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header /> */}
    <TextUpdater />
    <FormLogger />
    <UserCard />
    <LoginForm />
    {/* <App /> */}
  </StrictMode>,
)
