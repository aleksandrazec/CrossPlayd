import { useNavigate } from 'react-router'

function RegisterSuccessPage(){
    const navigate = useNavigate()
    const goToLogin=async()=>{
        try {
            navigate(`/login`)
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <div>
            <h2>User registered successfully.</h2>
            <button onClick={()=>goToLogin()}>Please click here to log in.</button>
        </div>
    )
}
export default RegisterSuccessPage