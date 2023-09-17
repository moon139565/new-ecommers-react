
import FeatherProducts from './components/FeatherProducts';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';

const Home = () => {
  const data ={
    name: "Moon Store",
  }
  return (
    <>
      <HeroSection myData={data}/>
      <FeatherProducts />
      <Services />
      <Trusted />
    </>
  )
}

export default Home