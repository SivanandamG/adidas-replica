import Button from '@mui/material/Button';

export const Btn=({value})=>{
    return(
        <div id="button_div">
            <Button
                 onClick={() => {
                 alert('clicked');
                 }}
            >
            {value}
            </Button>
            
        </div>
    )
}