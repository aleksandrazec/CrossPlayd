import './App.css';
import TabContainer from './components/tab-navigator/TabContainer';
import { Outlet } from 'react-router';
import { useState, useEffect } from 'react';
import { UserContext } from './Context'
import userapi from "./services/userapi";

function App(props) {

  const [user, setUser] = useState({
    role: undefined,
    user_id: undefined
  });

   useEffect(() => {
    const isUserLoggedIn = async () => {
      try {
        userapi.post(`/supabase/users/session`)
          .then((result) => {
            console.log(result.data);
            if (result.data.user_id!==-1) {
              setUser({ role: result.data.role, user_id: result.data.user_id })
            }else{
              setUser({ role: 'Guest', user_id: -1 })
            }
          })
          .catch(err => console.error('api error: ', err));
      } catch (error) {
        console.error('error: ', error)
      }
    }
    isUserLoggedIn()
  }, [])

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