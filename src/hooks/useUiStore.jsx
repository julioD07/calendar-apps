import { useSelector, useDispatch } from "react-redux";
import { onCloseDateModal, onOpenDateModal } from "../store";

export const useUiStore = () => {
  const dispatch = useDispatch();

  const { isDateModalOpen } = useSelector((state) => state.ui);

  const OpenDateModal = () => {
    dispatch(onOpenDateModal());
  };

  const CloseDateModal = () => {
    dispatch(onCloseDateModal());
  };

  const toggleDateModal = () => {
      (isDateModalOpen) ? OpenDateModal() : CloseDateModal();
  }

  return {
    //*Properties
    isDateModalOpen,
    //*Metodos
    OpenDateModal,
    CloseDateModal,
    toggleDateModal,
  };
};
