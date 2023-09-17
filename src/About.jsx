
import HeroSection from './components/HeroSection'
import { useProductContext } from './context/Productcontex'

const About = () => {
  const {myName} = useProductContext()



  const data = {
    name : "Moon Ecommerce",
  }
  return (
    <>
    {myName}
     <HeroSection myData={data}/>
    </>
  )
}

export default About