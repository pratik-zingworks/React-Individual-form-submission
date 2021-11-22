import './DisplayCard.style.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';


const DisplayCard = ({Title, Email, Id, changeFlag}) => {
    const [data, setData] = useState([]);
    const [visibility, setVisibility] = useState(true)
    const navigate = useNavigate();

    
    
    useEffect(() => {
        if(JSON.parse(window.localStorage.getItem('users')) !== null){
            setData(JSON.parse(window.localStorage.getItem('users')))
        }

    },[]);

    const deleteCard = (e) => {
        var newData = data.filter(x => x.id !== e)
        window.localStorage.setItem('users', JSON.stringify(newData))
        
        changeFlag();
    }

    return ( 
        <div className="card-container">
            <div className="profile-photo-container">
                <div className="profile-photo"></div>
            </div>
            <div className="user-info">
                <div className="personal-info">
                    <h4>{Title}</h4>
                    <p>{Email}</p>
                </div>
            </div>
            <div className="card-action">
                    <DeleteIcon sx = {{
                        color: "red",
                        float: "right",
                        position: "absolute",
                        top: "14px",
                        right: "20px",
                    }}
                    onClick = {() => setVisibility((v) => !v)}
                    />
                    <EditIcon color = "secondary" sx = {{
                        float: "right",
                        marginRight: "12px",
                        position: "absolute",
                        top: "44px",
                        right: "10px",
                    }} />
                    <Button size = "small" onClick = {() => navigate(`/user/${Id}`)}>View Details</Button>
                    {
                       !visibility?
                       <div className="deleteScreen">
                       <div className="deleteButton">
                           <DeleteIcon sx = {{
                               fontSize: "40px",
                               color: "#fff",
                           }}
                           onClick = {() => deleteCard(Id)}
                           />
                       </div>
                       <div className="cancleButton">
                       <Button size = "small" sx = {{
                           color : "#fff",
                       }}
                       onClick = {() => setVisibility((v) => !v)}
                       >cancle</Button>
                      </div>
                   </div>
                   :
                   <></>
                    }
                    
            </div>
        </div>
     );
}
 
export default DisplayCard;