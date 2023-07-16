// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './styles/App.scss';

import Board from './components/board/Board';
import SidePanel from './components/sidepanel/SidePanel';

function App() {
  return (
    <main>
      <Board />
      <SidePanel />
    </main>
  )
}

export default App
