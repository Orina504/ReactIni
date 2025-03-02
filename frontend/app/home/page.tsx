'use client';
import { Box, Button, TextField } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      router.push('/home');
    };
    
    return (
      <Grid
        container
        spacing={2} 
        justifyContent={"center"}
      >
        <Box
          component="form"
          border={1}
          alignItems={"center"}
          sx={{ 
            mt: 1,
            '& .MuiTextField-root': { m: 1, width: '25ch' } 
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            <Button 
                type="button" 
                variant="contained" 
                disabled
                sx={{
                    width: 150,
                    height: 50,
                    margin: 1,
                    fontSize: 20
                }}
            >
                xxxxxxx
            </Button>
            <Button 
                type="button" 
                variant="contained" 
                disabled
                sx={{
                    width: 150,
                    height: 50,
                    margin: 1,
                    fontSize: 20
                }}
            >
                xxxxxxx
            </Button>
            <Button 
                type="button" 
                variant="contained" 
                disabled
                sx={{
                    width: 150,
                    height: 50,
                    margin: 1,
                    fontSize: 20
                }}
            >
                xxxxxxx
            </Button>
          </div>
          <div>
            <Button 
                type="button" 
                variant="contained" 
                disabled
                sx={{
                    width: 150,
                    height: 50,
                    margin: 1,
                    fontSize: 20
                }}
            >
                xxxxxxx
            </Button>
            <Button 
                type="button" 
                variant="contained" 
                disabled
                sx={{
                    width: 150,
                    height: 50,
                    margin: 1,
                    fontSize: 20
                }}
            >
                xxxxxxx
            </Button>
            <Button 
                type="button" 
                variant="contained" 
                disabled
                sx={{
                    width: 150,
                    height: 50,
                    margin: 1,
                    fontSize: 20
                }}
            >
                xxxxxxx
            </Button>
          </div>
        </Box>
      </Grid>
    );
  }
  