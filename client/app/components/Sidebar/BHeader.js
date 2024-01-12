import { CiViewList } from "react-icons/ci";

const BHeader = ({ toggle, isOpen }) => {


  return (
    <div className={`BHeader`}>
    <span  className={`${isOpen ? 'Right' : 'Mid'}`}>
        <CiViewList onClick={toggle} className="LIST"/>
    </span>
    </div>

  )
}

export default BHeader