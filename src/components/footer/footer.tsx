import { AppBar, Box, Typography, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";



export default function Footer(): JSX.Element {
  return (
    <AppBar position="sticky"  sx={{background: "#063970"}} >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box margin="1rem">
          <Typography>&copy; Copyright, Made By Maryam</Typography>
        </Box>
       
        <Box margin="1rem">
          <Typography>Follow Us</Typography>
          <Link
            color="inherit"
            width="50"
            href="https://www.instagram.com/"
            target="_blank"
          >
            <InstagramIcon />
          </Link>
          <Link
            color="inherit"
            width="50"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <FacebookIcon />
          </Link>
          <Link
            color="inherit"
            width="50"
            href="https://linkedin.com/"
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
        </Box>
      </Box>
    </AppBar>
  );
}