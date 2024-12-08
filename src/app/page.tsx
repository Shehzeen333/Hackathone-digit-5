import BlueHeader from "../app/components/blue-header";
import Carausel from "../app/components/caraousel";
import Editors from "../app/components/editorspick";
import Footer from "./components/footer";
import GreenDiv from "../app/components/green-div";
import Navbar from "../app/components/navbar";
import ProductCard from "../app/components/products-card";
import Whitediv from "../app/components/white-dic";

export default function Home(){
  return(
    <div>
      <BlueHeader/>
      <Navbar/>
      <Carausel/>
      <Editors/>
      <ProductCard/>
      <GreenDiv/>
      <Whitediv/>
      <Footer/>
           
    </div>
  )
}