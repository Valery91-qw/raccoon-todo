import { Alert, keyframes, Snackbar } from '@mui/material';
import { useFetch } from '../../context/appQueryContext/AppQueryContextProvider';

keyframes();
export default function NewsHeadline() {
  const { response, isError } = useFetch();

  const isOpen = Boolean(response);

  return (
    <Snackbar open={isOpen}>
      <Alert severity={isError ? 'error' : 'info'}>{response}</Alert>
    </Snackbar>
  );
}
