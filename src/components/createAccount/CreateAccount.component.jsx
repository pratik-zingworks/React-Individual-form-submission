import './CreateAccount.style.css'
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

const CreateAccount = ({ID}) => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [data, setData] = useState('');
    const [customId, setcustomId] = useState(1);
    const [flag, setFlag] = useState(true)

    
  useEffect(() => {
    if(JSON.parse(window.localStorage.getItem('users')) !== null){
      setData(JSON.parse(window.localStorage.getItem('users')))
      setcustomId(data.length + 1)    
    }

    
  }, [data.length, flag]);


  const handleForm = () => {
    // console.log(userName, userEmail, data)
    var userData = [...data, {id: customId, userName, userEmail}]

    window.localStorage.setItem('users', JSON.stringify(userData))

    setUserName('');
    setUserEmail('');
    setFlag((e) => !e)
  }
  
  
  // if(!submitFlag){
  //   handleForm();
  // }

    return ( 
      <>
    <div className = "app-body">
    <div className = "container">
    <div className = "title">
      <h3>Create Account - {ID}</h3>
    </div>
    <form onSubmit = {(e) => {
      e.preventDefault();
      handleForm();
      // console.log('hi')
    }}>
      <TextField
        id="outlined-required"
        label="userName"
        fullWidth
        value = {userName}
        onChange = {(e) => setUserName(e.target.value)}
      />
      <TextField
        id="outlined-required"
        label="userEmail"
        fullWidth
        value = {userEmail}
        onChange = {(e) => setUserEmail(e.target.value)}
      />
      {/* <Button variant="contained" size = "large" type = "submit">Create Account</Button> */}
    </form>
  </div> 
  </div>
  </>
  );
}
 
export default CreateAccount;