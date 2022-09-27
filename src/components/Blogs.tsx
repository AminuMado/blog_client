import Card from "./Card";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <header className="blogs-header">
          <h1 className="blogs-title"> Graphite</h1>
          <p className="blogs-subTitle">Thoughts, stories and ideas</p>
        </header>
        <div className="blogs-container">
          <div className="blogs">
            {
              <>
                <Card />
                <Card />
                <Card />
              </>
            }
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
