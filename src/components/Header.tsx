import {
  AppBar, ButtonBase, TextField, Toolbar,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function Header() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <TextField variant="standard" label="ToDo name" required />
        <ButtonBase>
          <AddIcon fontSize="large" />
        </ButtonBase>
      </Toolbar>
    </AppBar>
  );
}
