import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/App.scss';
import { HashRouter as Router } from 'react-router-dom';
import Layout from './Layout/Layout';

const App = () => (
    <Router>
      <Layout />
    </Router>
);

export default App;
