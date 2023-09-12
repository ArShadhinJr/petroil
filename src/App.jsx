import Banner from "./Components/Banner/Banner"
import Blog from "./Components/Blog/Blog"
import Brand from "./Components/Brand/Brand"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import LearnMore from "./Components/LearnMore/LearnMore"
import Map from "./Components/Map/Map"
import Menu from "./Components/Menu/Menu"
import Services from "./Components/Services/Services"
import Supply from "./Components/Supply/Supply"


const App = () => {
  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <Banner></Banner>
      <Supply></Supply>
      <Services></Services>
      <LearnMore></LearnMore>
      <Brand></Brand>
      <Blog></Blog>
      <Map></Map>
      <Footer></Footer>
    </>
  )
}

export default App