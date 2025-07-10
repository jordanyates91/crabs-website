import { events } from '../../data/schedule-data';
import './Schedule.css';

const Schedule = () => {
  return (
    <div className="schedule-page">
      <main className="main-content">
        <h1>Upcoming Events</h1>
        <div className="events-container">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-header">
                <h2 className="event-title">{event.title}</h2>
                <span className="event-type">{event.type}</span>
              </div>
              <div className="event-details">
                <p className="event-datetime">
                  <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
                  <br />
                  <strong>Time:</strong> {event.time}
                </p>
                <p className="event-location">
                  <strong>Location:</strong> {event.location}
                </p>
                <p className="event-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Schedule; 