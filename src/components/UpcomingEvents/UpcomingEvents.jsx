import { events } from '../../data/schedule-data';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  // Get current date and date 2 months from now
  const today = new Date();
  const oneMonthsFromNow = new Date();
  oneMonthsFromNow.setMonth(today.getMonth() + 1);

  // Filter events within the next 2 months
  const upcomingEvents = events
    .filter(event => {
      const eventDate = new Date(event.date);
      return eventDate >= today && eventDate <= oneMonthsFromNow;
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="upcoming-events">
      <h2>Upcoming Events</h2>
      <div className="events-list">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map(event => (
            <div key={event.id} className="event-item">
              <div className="event-details">
                <h3 className="event-title">{event.title}</h3>
                <div className="event-info">
                  <p>
                    <strong>Date:</strong> {new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <p>
                    <strong>Type:</strong> {event.type}
                  </p>
                  <p>
                    <strong>Location:</strong> {event.location}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-events">No upcoming events in the next month</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents; 