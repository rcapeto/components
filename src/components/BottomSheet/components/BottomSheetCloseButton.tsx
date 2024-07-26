import { FiX } from 'react-icons/fi'
import '../styles.scss'
import { useBottomSheet } from '../context/bottomsheet'

export function BottomSheetCloseButton() {
  const { handleClose } = useBottomSheet()

  return (
    <div role="button" className="buttonCloseBottomSheet" onClick={handleClose}>
      <FiX size={20} color="#8D8D99" />
    </div>
  )
}
