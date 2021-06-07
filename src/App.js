import './App.css';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';

const App = () => {
  return (
    <div className="App">      
     <Layout>
       <Home/>
     </Layout>
    </div>
  );
}

export default App;
