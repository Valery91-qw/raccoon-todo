import { Snackbar } from '@mui/material';
import { useFetch } from '../../context/appQueryContext/AppQueryContextProvider';
import './styles.css';

export default function NewsLine() {
  const { news } = useFetch();

  const isOpen = Boolean(news);

  return (
    <Snackbar
      sx={{ maxWidth: 300, overflow: 'hidden' }}
      open={isOpen}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <span className="text">{news?.title}</span>
    </Snackbar>
  );
}
