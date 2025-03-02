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
      container spacing={2} 
      justifyContent={"center"}
    >        
      <Box
        component="form"
        alignItems={"center"}
        sx={{ 
          '& .MuiTextField-root': { m: 1, width: '25ch' } 
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <TextField id="id" label="id" />
        </div>
        <div>
          <TextField id="password" label="password" />
        </div>
        <div>
          <Button type="submit" variant="contained" sx={{margin: 1}} >ログイン</Button>
        </div>
      </Box>
    </Grid>
  );
}
