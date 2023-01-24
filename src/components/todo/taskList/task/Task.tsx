import {
  ButtonBase, List, ListItemText, Switch,
} from '@mui/material';
import { Delete } from '@mui/icons-material';

export default function Task({ task }: { task: string }) {
  return (
    <List sx={{ display: 'flex' }}>
      <ButtonBase>
        <Delete />
      </ButtonBase>
      <ListItemText>
        {task}
      </ListItemText>
      <Switch />
    </List>
  );
}
