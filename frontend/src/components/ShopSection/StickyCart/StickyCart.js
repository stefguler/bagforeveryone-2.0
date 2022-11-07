import { StickyCartContainer } from "./StickyCart.styled";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IconContext } from "react-icons";

export default function StickyCart(props) {

  const toggleSidebar = props.toggleSidebar


  return (
    <StickyCartContainer>
      <IconContext.Provider value={{ size: "100px" }}>
        <HiOutlineShoppingBag />
      </IconContext.Provider>
      <div>5</div>
    </StickyCartContainer>
  );
}
