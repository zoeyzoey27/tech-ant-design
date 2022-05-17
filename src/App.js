import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import AppHeader from './components/common/AppHeader';
import Home from './pages/Home';

const { Header,Content } = Layout;

function App() {
    return (
      <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 999,
          width: '100%',
        }}
      >
         <AppHeader/>
      </Header>
      <Content>
          <Home/>
      </Content>
    </Layout>
  );
}

export default App;
