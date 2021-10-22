

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n != 1);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    " and ": "y",
    "%(sel)s of %(cnt)s selected": [
      "%(sel)s de %(cnt)s seleccionado",
      "%(sel)s de  %(cnt)s seleccionados"
    ],
    "6 a.m.": "6 a.m.",
    "6 p.m.": "6 p.m.",
    "Account": "Cuenta",
    "Account Information": "Informaci\u00f3n de la cuenta",
    "Account Settings": "Configuraci\u00f3n de la cuenta",
    "Account deletion, including removal from email lists, may take a few weeks to fully process through our system. If you want to opt-out of emails before then, please unsubscribe from the footer of any email.": "La eliminaci\u00f3n de la cuenta, incluida la eliminaci\u00f3n de las listas de correo electr\u00f3nico, puede demorar algunas semanas en procesarse por completo a trav\u00e9s de nuestro sistema. Si deseas optar por no recibir correos electr\u00f3nicos antes de esa fecha, anula la suscripci\u00f3n desde el pie de p\u00e1gina de cualquier correo electr\u00f3nico.",
    "Advanced": "Avanzado",
    "April": "Abril",
    "Are you sure?": "\u00bfEst\u00e1s seguro?",
    "August": "Agosto",
    "Available %s": "%s Disponibles",
    "Cancel": "Cancelar",
    "Changes to steps that are not selected as part of the assignment will not be saved.": "Los cambios en los pasos que no est\u00e1n seleccinados como parte de la actividad no se guardar\u00e1n.",
    "Choose": "Elegir",
    "Choose a Date": "Elija una fecha",
    "Choose a Time": "Elija una hora",
    "Choose a time": "Elija una hora",
    "Choose all": "Selecciona todos",
    "Choose new file": "Elegir nuevo archivo",
    "Chosen %s": "%s elegidos",
    "Click to choose all %s at once.": "Haga clic para seleccionar todos los %s de una vez",
    "Click to remove all chosen %s at once.": "Haz clic para eliminar todos los %s elegidos",
    "Close": "Cerrar",
    "Collapse All": "Colapsar todo",
    "Congratulations!": "\u00a1Enhorabuena!",
    "Could not retrieve download url.": "No se ha podido obtener la url de descarga.",
    "Could not retrieve upload url.": "No se ha podido obtener la url de subida",
    "Couldn't Save This Assignment": "No se ha podido guardar esta tarea",
    "Country": "Pa\u00eds ",
    "Country or Region of Residence": "Pa\u00eds o regi\u00f3n de residencia",
    "Course End": "Final del curso",
    "Criterion Added": "Criterio a\u00f1adido",
    "Criterion Deleted": "Criterio eliminado",
    "December": "Diciembre",
    "Default (Local Time Zone)": "Predeterminado (zona horaria local)",
    "Delete": "Delete",
    "Delete My Account": "Borrar mi cuenta",
    "Deleting": "Borrando",
    "Device with Camera": "Dispositivo con c\u00e1mara",
    "Discussion": "Discusi\u00f3n",
    "Display Name": "Nombre para mostrar",
    "Download": "Descargar",
    "Edit": "Editar",
    "Error": "Error",
    "Error:": "Error:",
    "Explanation": "Explicaci\u00f3n",
    "February": "Febrero",
    "File": "Documento",
    "File format not supported. Please upload a file with a {ext} extension.": "Formato de archivo no soportado. Por favor, cargue un archivo con una extensi\u00f3n {ext}.",
    "Filter": "Filtro",
    "Gender": "G\u00e9nero",
    "Headers": "Encabezados",
    "Help Translate into {beta_language}": "Ayuda a traducir a {beta_language}",
    "Hide": "Esconder",
    "If you still wish to continue and delete your account, please enter your account password:": "Si a\u00fan deseas continuar y eliminar tu cuenta, ingresa la contrase\u00f1a de tu cuenta:",
    "Insert": "Insertar",
    "January": "Enero",
    "July": "Julio",
    "June": "Junio",
    "Linked Accounts": "Cuentas vinculadas",
    "Loading": "Cargando",
    "Loading...": "Cargando...",
    "Make sure we can verify your identity with the photos and information you have provided.": "Aseg\u00farate de que podamos verificar tu identidad con las fotos y la informaci\u00f3n que has proporcionado.",
    "March": "Marzo",
    "May": "Mayo",
    "Middle": "Secundaria",
    "Midnight": "Medianoche",
    "Name": "Nombre",
    "Next": "Siguiente",
    "None": "Ninguno",
    "Noon": "Mediod\u00eda",
    "Not Selected": "No seleccionado",
    "Note: You are %s hour ahead of server time.": [
      "Nota: Usted esta a %s horas por delante de la hora del servidor.",
      "Nota: Usted va %s horas por delante de la hora del servidor."
    ],
    "Note: You are %s hour behind server time.": [
      "Nota: Usted esta a %s hora de retraso de tiempo de servidor.",
      "Nota: Usted va %s horas por detr\u00e1s de la hora del servidor."
    ],
    "November": "Noviembre",
    "Now": "Ahora",
    "October": "Octubre",
    "One or more rescheduling tasks failed.": "Una o m\u00e1s tareas reprogramadas han fallado.",
    "OpenAssessment Save Error": "Error de guardado de OpenAssessment",
    "Option Deleted": "Opci\u00f3n eliminada",
    "Optionally, link your personal accounts to the social media icons on your edX profile.": "Opcionalmente, vincula tus cuentas personales a los \u00edconos de redes sociales en tu perfil de edX.",
    "Order History": "Historial de pedidos",
    "Organization:": "Organizaci\u00f3n",
    "Other": "Otro",
    "Password": "Contrase\u00f1a",
    "Password is incorrect": "La contrase\u00f1a es incorrecta",
    "Photo Identification": "Identificaci\u00f3n con foto",
    "Please correct the outlined fields.": "Por favor, corrige los campos marcados.",
    "Profile": "Perfil",
    "Question": "Pregunta",
    "Remove": "Remover",
    "Remove all": "Eliminar todos",
    "Reset Password": "Restablecer la contrase\u00f1a",
    "Retake Photo": "Tomar foto nuevamente",
    "Return to Your Dashboard": "Volver a tu \u00e1rea personal",
    "Review Your Photos": "Revisa tus fotos",
    "Save": "Guardar",
    "Saving": "Guardando",
    "Saving...": "Guardando...",
    "Search Results": "Resultados de b\u00fasqueda",
    "Section": "Secci\u00f3n",
    "Select employment status": "Seleccionar situaci\u00f3n laboral",
    "Select military status": "Seleccionar estado militar",
    "September": "Septiembre",
    "Show": "Mostrar",
    "Social Media Links": "Enlaces de redes sociales",
    "Sorry, there was an error trying to process your request. Please try again later.": "Lo sentimos, hubo un error al intentar procesar tu solicitud. Por favor, int\u00e9ntalo de nuevo m\u00e1s tarde.",
    "State": "Estado/provincia",
    "Status": "Estado",
    "Status of Your Response": "Estado de tu respuesta",
    "Student": "Estudiante",
    "Studio's having trouble saving your work": "Studio est\u00e1 teniendo problemas para guardar tu trabajo",
    "Submit": "Enviar",
    "Subsection": "Subsecci\u00f3n",
    "Take Photo": "Tomar foto",
    "Take a Photo of Your ID": "Toma una foto de tu identificaci\u00f3n ",
    "The country or region where you live.": "El pa\u00eds o regi\u00f3n donde vives.",
    "The name that is used for ID verification and that appears on your certificates.": "El nombre que se utiliza para la verificaci\u00f3n de identidad y que aparece en tus certificados.",
    "The server could not be contacted.": "No se pudo contactar con el servidor.",
    "The submission could not be removed from the grading pool.": "La entrega no pudo eliminarse del tabl\u00f3n de calificaciones.",
    "There was an error during the upload process.": "Hubo un error durante el proceso de carga.",
    "There was an error while importing the new library to our database.": "Se produjo un error al importar la nueva biblioteca a nuestra base de datos",
    "There was an error while unpacking the file.": "Se produjo un error al descomprimir el archivo.",
    "There was an error while verifying the file you submitted.": "Se produjo un error al verificar el archivo que envi\u00f3.",
    "These settings include basic information about your account.": "Esta configuraci\u00f3n incluye informaci\u00f3n b\u00e1sica sobre tu cuenta.",
    "This assessment could not be submitted.": "Este examen no ha podido enviarse.",
    "This feedback could not be submitted.": "Los comentarios no han podido enviarse.",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Esta es la lista de %s disponibles. Puede elegir algunos seleccion\u00e1ndolos en la caja inferior y luego haciendo clic en la flecha \"Elegir\" que hay entre las dos cajas.",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Esta es la lista de los %s elegidos. Puede elmininar algunos seleccion\u00e1ndolos en la caja inferior y luego haciendo click en la flecha \"Eliminar\" que hay entre las dos cajas.",
    "This link will open in a modal window": "Este enlace se abrir\u00e1 en una ventana modal.",
    "This link will open in a new browser window/tab": "Este enlace se abrir\u00e1 en una nueva ventana / pesta\u00f1a del navegador",
    "This may be happening because of an error with our server or your internet connection. Try refreshing the page or making sure you are online.": "Esto puede estar ocurriendo debido a un error en nuestro servidor o su conexi\u00f3n a Internet. Intente actualizar la p\u00e1gina o asegurarse de que est\u00e1 en l\u00ednea.",
    "This problem could not be saved.": "Este ejercicio no ha podido guardarse.",
    "This problem has already been released. Any changes will apply only to future assessments.": "Este ejercicio ya se ha enviado. Cualquier otro cambio se aplicar\u00e1 solamente a calificaciones futuras.",
    "This response could not be saved.": "Esta respuesta no ha podido guardarse.",
    "This response could not be submitted.": "Esta respuesta no ha podido enviarse.",
    "This response has been saved but not submitted.": "Esta respuesta se ha guardado pero no se ha enviado",
    "This response has not been saved.": "Esta respuesta no se ha guardado.",
    "This section could not be loaded.": "Esta secci\u00f3n no ha podido cargarse.",
    "Title": "T\u00edtulo ",
    "To take a successful photo, make sure that:": "Para tomar una foto exitosa, aseg\u00farate de que:",
    "Today": "Hoy",
    "Tomorrow": "Ma\u00f1ana",
    "Type into this box to filter down the list of available %s.": "Escriba en este cuadro para filtrar la lista de %s disponibles",
    "Unable to delete account": "No se pudo borrar la cuenta",
    "Unit": "Unidad",
    "Unknown": "Desconocido",
    "Unnamed Option": "Opci\u00f3n sin nombre",
    "Upgrade Deadline": "Fecha l\u00edmite de actualizaci\u00f3n",
    "Username": "Nombre de usuario",
    "Verification Deadline": "Verificaci\u00f3n de fecha l\u00edmite",
    "Video ID": "ID de v\u00eddeo",
    "View Live": "Ver directo",
    "Warning": "Advertencia",
    "We use your verification photos to confirm your identity and ensure the validity of your certificate.": "Usamos tus fotos de verificaci\u00f3n para confirmar tu identidad y asegurar la validez de tu certificado.",
    "What if I have difficulty holding my ID in position relative to the camera?": "\u00bfQu\u00e9 sucede si tengo dificultades para mantener mi identificaci\u00f3n en posici\u00f3n relativa a la c\u00e1mara?",
    "What if I have difficulty holding my head in position relative to the camera?": "\u00bfQu\u00e9 pasa si tengo dificultades para mantener la cabeza en posici\u00f3n relativa a la c\u00e1mara?",
    "Why does edX collect this information?": "\u00bfPor qu\u00e9 edX recopila esta informaci\u00f3n?",
    "Yes, Delete": "Si, borrar",
    "Yesterday": "Ayer",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Ha seleccionado una acci\u00f3n y no hs hecho ning\u00fan cambio en campos individuales. Probablemente est\u00e9 buscando el bot\u00f3n Ejecutar en lugar del bot\u00f3n Guardar.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Ha seleccionado una acci\u00f3n, pero no ha guardado los cambios en los campos individuales todav\u00eda. Pulse OK para guardar. Tendr\u00e1 que volver a ejecutar la acci\u00f3n.",
    "You have set your language to {beta_language}, which is currently not fully translated. You can help us translate this language fully by joining the Transifex community and adding translations from English for learners that speak {beta_language}.": "Has configurado tu idioma en {beta_language}, que actualmente no est\u00e1 completamente traducido. T\u00fa puedes ayudarnos a traducir este idioma completamente uni\u00e9ndote a la comunidad de Transifex y agregando traducciones del ingl\u00e9s para estudiantes que hablan {beta_language}.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Tiene cambios sin guardar en campos editables individuales. Si ejecuta una acci\u00f3n, los cambios no guardados se perder\u00e1n.",
    "You have unsaved changes. Do you really want to leave this page?": "Tienes cambios sin guardar. \u00bfDe verdad quieres dejar esta p\u00e1gina?",
    "You need a valid ID that contains your full name and photo.": "Necesitas una identificaci\u00f3n v\u00e1lida que contenga tu nombre completo y foto.",
    "You're about to submit your response for this assignment. After you submit this response, you can't change it or submit a new response.": "Est\u00e1s a punto de enviar tu respuesta para este ejercicio. Despu\u00e9s de enviar esta respuesta, no podr\u00e1s cambiarla o enviar una nueva.",
    "Your entire face fits inside the frame.": "Todo tu rostro cabe dentro del marco.",
    "Your face is well-lit.": "Tu rostro est\u00e1 bien iluminado.",
    "one letter Friday\u0004F": "V",
    "one letter Monday\u0004M": "L",
    "one letter Saturday\u0004S": "S",
    "one letter Sunday\u0004S": "D",
    "one letter Thursday\u0004T": "J",
    "one letter Tuesday\u0004T": "M",
    "one letter Wednesday\u0004W": "M"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "j \\d\\e F \\d\\e Y \\a \\l\\a\\s H:i",
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S",
      "%d/%m/%Y %H:%M:%S.%f",
      "%d/%m/%Y %H:%M",
      "%d/%m/%y %H:%M:%S",
      "%d/%m/%y %H:%M:%S.%f",
      "%d/%m/%y %H:%M",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j \\d\\e F \\d\\e Y",
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y",
      "%d/%m/%y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j \\d\\e F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d/m/Y H:i",
    "SHORT_DATE_FORMAT": "d/m/Y",
    "THOUSAND_SEPARATOR": ".",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F \\d\\e Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));

