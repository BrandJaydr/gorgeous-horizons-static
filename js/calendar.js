// Simple calendar plugin using FullCalendar
// MIT License

document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [
      {
        title: 'Sample Event',
        start: new Date().toISOString().slice(0, 10)
      }
    ]
  });

  calendar.render();
});
