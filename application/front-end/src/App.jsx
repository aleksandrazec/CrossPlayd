import './App.css';
import TabContainer from './components/tab-navigator/TabContainer';
import { Outlet } from 'react-router';
import { useState, useEffect } from 'react';
import { UserContext } from './Context'

function App(props) {

  const [user, setUser] = useState({
    role: 'Guest',
    user_id: -1
  });

  return (
    <div>
      {
        <UserContext.Provider value={{...user, setUser}}>
          <TabContainer>
            <Outlet />
          </TabContainer>
        </UserContext.Provider>
      }
    </div>
  )
}
export default App;