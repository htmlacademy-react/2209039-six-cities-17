import MainPage from '../pages/main-page/main-page';

type AppScreenProps = {
  placesCount: number;
}

function App ({placesCount}: AppScreenProps) {
  return (
    <MainPage placesCount={placesCount}/>
  );
}

export default App;
