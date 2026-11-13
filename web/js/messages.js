'use strict';

// Mensajes para el usuario, con las notificaciones y las alertas de ez-ui.
import { ezToast } from "../ez-ui/js/toast.js";

const messageRenderer = {
  showSuccessMessage: function (message) {
    ezToast(message, "success");
  },

  /** Muestra un error; si viene de la API, añade su motivo (el campo message de la respuesta). */
  showErrorMessage: function (message, error) {
    const reason = error?.response?.data?.message;
    ezToast(reason ? `${message}: ${reason}` : message, "error", 8000);
  },

  /** Muestra los errores en una alerta de error de ez-ui dentro del contenedor (sin errores, lo vacía):
   *  para los que hay que corregir, como los de un formulario, que no deben desaparecer solos. */
  showErrorsAsAlert: function (container, errors) {
    container.replaceChildren();
    if (errors.length === 0) {
      return;
    }
    const alert = document.createElement("div");
    alert.className = "ez-alert ez-alert--error";
    alert.setAttribute("role", "alert");
    const list = document.createElement("ul");
    for (const error of errors) {
      const item = document.createElement("li");
      item.textContent = error;
      list.append(item);
    }
    alert.append(list);
    container.append(alert);
  },
};

export { messageRenderer };
