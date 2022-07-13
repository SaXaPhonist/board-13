import Header from 'components/header/Header';
import SideMenu from 'components/menu/SideMenu';
import TravelDashboard from 'pages/TravelDashboard';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <TravelDashboard />
      <SideMenu />
    </div>
  );
};

export default App;
