import './App.css'
import { MuiMode } from './components/mui/mui-node'
import { AppProviders } from './components/providers/app-providers'
import { Users } from './components/user/Users'

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        <Users />
      </div>
    </AppProviders>
  )
}

export default App
