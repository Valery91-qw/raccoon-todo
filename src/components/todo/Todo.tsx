import {
  Card, Grid,
} from '@mui/material';
import TodoHeader from './TodoHeader';

export default function Todo({ name, tasks }: { name: string, tasks: [] }) {
  return (
    <Grid item md={4} sm={6} xs={12} textAlign="center">
      <Card>
        <TodoHeader name={name} />
      </Card>
    </Grid>
  );
}
