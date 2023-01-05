import { Paper, styled } from "@mui/material";

const GridItem = styled(Paper)(({theme}) => (
    {
       backgroundColor : theme.palette.mode === 'dark' ?  '#1A2027' : '#fff',
    }
));

export default GridItem