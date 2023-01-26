const inputTaskParamsStyles = {
  box: {
    style: {
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
  },
  multilineTextField: {
    rows: 4,
  },
};
export default inputTaskParamsStyles;
