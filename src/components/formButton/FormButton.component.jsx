import Button from '@mui/material/Button';
import './FormButton.style.css'
const FormButton = () => {
    return ( 
        <div className="fb-container">
            <div className="btn-container">
                <Button variant="contained" size = "medium" type = "submit" fullWidth>
                    Submit Form
                </Button>
            </div>
        </div>
     );
}
 
export default FormButton;