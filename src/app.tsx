import Header from 'components/header/Header';
import SideMenu from 'components/menu/SideMenu';
import TravelDashboard from 'pages/TravelDashboard';

const App: React.FC = () => {
  return (
    <div className="app-layout">
      <SideMenu />
      <section className="content">
        <Header />
        <TravelDashboard />
      </section>
    </div>
  );
};

export default App;
