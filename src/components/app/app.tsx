import MainPage from '../pages/main-page/main-page';

type AppScreenProps = {
  placesCount: number;
  cardsCount: number;
}

function App ({placesCount, cardsCount}: AppScreenProps) {
  return (
    <MainPage
    placesCount={placesCount}
    cardsCount={cardsCount}/>
  );
}

export default App;
