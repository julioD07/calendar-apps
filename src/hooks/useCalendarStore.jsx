import { useSelector, useDispatch } from "react-redux"
import { onAddNewEvent, onSetActiveEvent } from "../store";


export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);
    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSavingEvent = async (calendarEvent) => {
        //TODO: Llegar al backend

        //TODO bien
        if (calendarEvent._id) {
          //Actualizar evento
        } else {
          //Agregar evento

          dispatch(onAddNewEvent({
            ...calendarEvent,
            _id: new Date().getTime(),
          }));
        }

    }

  return {
    //* Propiedades de la calendario
    events,
    activeEvent,

    //*Metodos
    setActiveEvent,
    startSavingEvent,
  }
}
