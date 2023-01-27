const inputTaskParamsStyles = {
  box: {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'absolute' as const,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'primary.main',
      border: '2px solid #fff',
      boxShadow: 24,
      p: 4,
    },
    tabIndex: -1,
  },
  iconButton: {
    display: 'block',
    marginTop: '10px',
  },
  multilineTextField: {
    rows: 4,
  },
};
export default inputTaskParamsStyles;
