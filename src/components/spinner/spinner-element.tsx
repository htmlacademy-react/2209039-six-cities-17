function SpinnerElement (): JSX.Element {

  return (
    <p style={{
      fontSize: '30px',
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 'auto',
      marginLeft: 'auto',
      marginBottom: 'auto',
      marginRight: 'auto',
      height: '100%',
      width: '100%'
    }}
    >Loading... Please, wait!
    </p>
  );
}

export { SpinnerElement };
