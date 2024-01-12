import { RiArrowDropDownLine } from "react-icons/ri";

const Filter = ({ openModal, setOpenModal, conName, grype }) => {
  return (
    <div className='C-Flex Filter'>
        <span className='C-Flex Filter-Item' onClick={setOpenModal}>
            <span>{conName === '' ? grype[0].container_name : conName}</span>
            <span >
                <RiArrowDropDownLine className={`Drop ${openModal ? 'R-Down' : ''}`}/>
            </span>
        </span>
    </div>
  )
}

export default Filter