import Banner from "./Components/Banner/Banner"
import Brand from "./Components/Brand/Brand"
import Header from "./Components/Header/Header"
import LearnMore from "./Components/LearnMore/LearnMore"
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
    </>
  )
}

export default App