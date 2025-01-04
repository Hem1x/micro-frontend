import { Button } from 'ui/components';
import Couter from './Couter';
import Search from 'remote/Search';

const App = () => {
  return (
    <>
      <Couter />
      <Button>Привет</Button>
      <Search />
    </>
  );
};

export default App;
