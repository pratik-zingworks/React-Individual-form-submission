import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CreateAccount from "../../components/createAccount/CreateAccount.component";
// import FormButton from '../formButton/FormButton.component'
import './formArray.style.css'
import { useEffect, useState } from 'react';

const FormComponent = () => {
    const [Ids, setIds] = useState(0);
    const [formNo, setFormNo] = useState('');
    const [dumyArray, setDummyArray] = useState([])
    const [flag, setFlag] = useState(true);
    // const [userName, setUserName] = useState([]);
    const [data, setData] = useState([])
    // JSON.parse(window.localStorage.getItem('users'))

    useEffect(() => {
        // setData()
        if(JSON.parse(window.localStorage.getItem('users')) !== null){
            setData(JSON.parse(window.localStorage.getItem('users')))
            // setcustomId(data.length + 1)
          }
        setIds(data.length)

        // console.log(userName)
    }, [data.length, flag])

    const handleFormSubmit = () =>{
        var y = [];
        var i = 1;
        var j = 0;
        var k = 1;
        var x = document.getElementsByTagName('input')
        var formReset = document.getElementsByTagName('form')

            if(x[0].value !== '0' && x[0].value <= 4 && x[0].value !== ""){

            switch(formNo){
                default:
                    // for (let i = 1; i <= dumyArray.length; i++) {
                    y.push({
                        id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
                        userName: x[i + j].value,
                        userEmail: x[i + 1 + j].value,
                    })
                    j++;
                // }
                    break;
                case '2':
                    // for (let i = 1; i < dumyArray.length; i++) {
                    y.push({
                        id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
                        userName: x[i + j].value,
                        userEmail: x[i + 1 + j].value,
                        userData1 : x[i + 1 + j + 1].value,
                        userEmail1 : x[i + 1 + j + 1 + k].value,
                    })
                        j++;
                        k++;
                    // }
                    break;
                    case '3':
                    // for (let i = 1; i < dumyArray.length-1; i++) {
                    y.push({
                        id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
                        userName: x[i + j].value,
                        userEmail: x[i + 1 + j].value,
                        userName1 : x[i + 1 + j + 1].value,
                        userEmail1 : x[i + 1 + j + 1 + k].value,
                        userName2 : x[i + 1 + j + 1 + k + 1].value,
                        userEmail2 : x[i + 1 + j + 1 + k + 1 + k].value,
                    })
                        j++;
                        k++;
                    // }
                    break;

                    case '4':
                    // for (let i = 1; i < dumyArray.length-2; i++) {
                    y.push({
                        id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
                        userName: x[i + j].value,
                        userEmail: x[i + 1 + j].value,
                        userName1 : x[i + 1 + j + 1].value,
                        userEmail1 : x[i + 1 + j + 1 + k].value,
                        userName2 : x[i + 1 + j + 1 + k + 1].value,
                        userEmail2 : x[i + 1 + j + 1 + k + 1 + k].value,
                        userName3 : x[i + 1 + j + 1 + k + 1 + k + 1].value,
                        userEmail3 : x[i + 1 + j + 1 + k + 1 + k + 1 + k].value,
                    })
                        j++;
                        k++;

                    // }
                    break;

            }
            // y.push({
            //         id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
            //         userName: x[i + j].value,
            //         userEmail: x[i + 1 + j].value,
            //         // userData1 : x[i + 1 + j + 1].value,
            //         // userEmail1 : x[i + 1 + j + 1 + k].value,
            //     })
            //         j++;
                    // k++;


                        // console.log(y)

            var userData = [...data, ...y]
            window.localStorage.setItem('users', JSON.stringify(userData))
            // console.log(y, formNo)
            for (let i = 0; i < dumyArray.length; i++) {
                formReset[i].reset();
                }
                setFlag((e) => !e)
                setDummyArray([])
            }
    }

    return (
        <>
        <div className="fc-container">
            <form onSubmit = {(e) => {
                e.preventDefault();
                var alpha = []
                if(formNo <= 4){
                    for(var x = 1; x <= formNo; x++){
                        alpha.push(x)
                    }
                }
                else{
                    alert('You cannot fill form more than limit of 4')
                    
                }
                // for(var x = 1; x <= formNo; x++){
                //     alpha.push(x)
                // }
                setDummyArray(alpha)
                // console.log(dumyArray)
            }}>
                <div className="text-field">
                <TextField
                    id="outlined-required"
                    label="No. of forms"
                    size = "small"
                    onChange = {(e) => setFormNo(e.target.value)}
                />
                </div>
                <div className="btn-field">
                    <Button variant="contained" size = "medium" type = "submit">
                        Create Forms
                    </Button>
                </div>
            </form>
        </div>
            {
                dumyArray.map((e, i) => (
                    <CreateAccount ID = {Ids + i + 1} key = {i}/>
                ))
            }
            {/* <FormButton /> */}
            <div className="fb-container">
                <div className="btn-container">
                    <Button variant="contained" size = "medium" fullWidth
                    onClick = {() => handleFormSubmit()}>
                        Submit Form
                    </Button>
                </div>
            </div>
        </>
     );
}

export default FormComponent;
