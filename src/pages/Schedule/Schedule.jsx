import { events } from '../../data/schedule-data';
import './Schedule.css';

const Schedule = () => {
  return (
    <div className="schedule-page">
      <main className="main-content">
        <section className="practice-times">
          <h1>Practice Times</h1>
          <div className="practice-card">
            <div className="practice-details">
              <h2>Regular Practice Schedule</h2>
              <div className="practice-info">
                <p>
                  <strong>Days:</strong> Tuesday and Thursday
                </p>
                <p>
                  <strong>Time:</strong> 5:30 PM - 7:30 PM
                </p>
                <p>
                  <strong>Location:</strong> Field south of Montana Tech HPER Complex
                  (<a 
                    href="https://maps.app.goo.gl/aCk19QobTHEZLdHX6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Map
                  </a>)
                </p>
                <p className="practice-note">
                ✅ No experience needed—we’ll teach you everything!<br/>
                ✅ Open to everyone age 18+—all fitness levels welcome!<br/>
                ✅ Fun, friendly, and a great workout—meet new people and learn a new sport!<br/>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="events-section">
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
        </section>
      </main>
    </div>
  );
};

export default Schedule; 