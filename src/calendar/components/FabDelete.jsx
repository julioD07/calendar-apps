import { useCalendarStore, useUiStore } from "../../hooks";

export const FabDelete = () => {

  const {  } = useCalendarStore();

  const handleClickNew = () => {
    
  }

  return (
    <>
      <button className="btn btn-danger fab-danger" onClick={handleClickNew}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </>
  );
};
