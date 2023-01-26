import { Snackbar, Typography } from '@mui/material';
import { useFetch } from '../../context/AppQueryContextProvider';
import './styles.css';

export default function NewsLine() {
  const { news } = useFetch();

  return (
    <Snackbar
      sx={{ maxWidth: 300, overflow: 'hidden' }}
      open={!!news}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <span className="text">{news?.title}</span>
    </Snackbar>
  );
}
