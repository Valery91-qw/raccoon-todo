import { Snackbar } from '@mui/material';
import { useFetch } from '../../context/appQueryContext/AppQueryContextProvider';
import { text } from './styles.module.css';

export default function NewsLine() {
  const { news } = useFetch();

  const isOpen = Boolean(news);

  return (
    <Snackbar open={isOpen}>
      <span className={text}>{news}</span>
    </Snackbar>
  );
}
