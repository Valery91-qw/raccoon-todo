const todoHeaderStyles = {
  cardContent: {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '&.MuiCardContent-root:last-child': {
        paddingBottom: '16px',
      },
    },
  },
  typography: {
    fontSize: {
      sm: '1.5rem',
      xs: '1rem',
    },
  },
};

export default todoHeaderStyles;
