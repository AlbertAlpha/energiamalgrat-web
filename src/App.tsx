import { BrowserRouter as Router } from 'react-router-dom';

import Layout from '~/layout';
import Routing from '~/router/Routing';

const App = () => (
  <Router>
    <Layout>
      <Routing />
    </Layout>
  </Router>
);
export default App;
