import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import './ViewDetail.style.css'
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';


const ViewDetails = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if(JSON.parse(window.localStorage.getItem('users')) !== null){
            setData(JSON.parse(window.localStorage.getItem('users')))
        }

    },[]);

    var param = useParams();
    var newData = data.filter((e) => e.id === parseInt(param.id))

    return ( 
        <div>
        {
            newData.map(dta => (
                <div className="viewData" key = {dta.id}>
                    <div className="profileContainer">

                    </div>
                    <div className="profileDetails">
                        <h4>{dta.userName}</h4>
                        <p>{dta.userEmail}</p>
                    </div>
                    <Button size = "large" 
                       onClick = {() => navigate('/display')}
                       >Back</Button>
                </div>
            ))
        }
        </div>
       
     );
}
 
export default ViewDetails;