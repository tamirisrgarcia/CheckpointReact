import { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext';
import ScheduleForm from './ScheduleForm';

function ScheduleFormModal() {

  const { theme } = useContext(ThemeContext);
  
  return (
    <div
      className       = {`modal fade`}
      id              = "exampleModal"
      tabIndex        = "-1"
      aria-labelledby = "exampleModalLabel"
      aria-hidden     = "true"
      >
      <div className  = "modal-dialog">
        <div className  = {
          theme === "light"
          ? `modal-content`
          : `modal-content dark`
        }>
          <div className  = "modal-header">
            <h1
              className       = "modal-title fs-5"
              id              = "exampleModalLabel"
            >
              Selecione o dentista, paciente e a data e hora</h1>
            <button
              type            = "button"
              className       = {
                theme === "light"
                ? `btn-close`
                : `btn-close darkButton`
              }
              data-bs-dismiss = "modal"
              aria-label      = "Close"></button>
          </div>
          <div className  = "modal-body">
            <ScheduleForm />
          </div>
        </div>
      </div>
    </div >

  );
};

export default ScheduleFormModal;
