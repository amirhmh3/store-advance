import Bottom from "./Bottom";
import Middle from "./Middle";
import Top from "./Top";

const Index = ({category,products}) => {
    return ( <>
    <Top category={category} products={products}/>
    <Middle/>
    <Bottom/>
    </> );
}
 
export default Index;