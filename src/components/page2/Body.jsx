import BodyComp from "./BodyComps";
import Products from "./ProductData";

const Body = () => {
  return (
    <div className="flex flex-wrap">
      {Products.map(function (elem) {
        return <BodyComp img={elem.img} price= {elem.price} name={elem.productName}/>
      })}
    </div>
  );
};
export default Body;
