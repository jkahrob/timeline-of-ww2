import React, { useState } from 'react';
import './Timeline.css';

const Timeline = ({ events }) => {
    const groupedEvents = groupEventsByYear(events);

    return (
        <div className="timeline">
            <div className="event-group-container">
                {Object.keys(groupedEvents).map((year) => (
                    <EventGroup key={year} year={year} events={groupedEvents[year]} />
                ))}
            </div>
        </div>
    );
};

const EventGroup = ({ year, events }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="event-group">
            <button className="year-button" onClick={toggleDropdown}>
                {year}
            </button>
            {isDropdownOpen && (
                <div className="event-dropdown">
                    {events.map((event) => (
                        <div key={event.uniqueKey} className="timeline-event">
                            <div className="event-date">
                                {event.date}
                                <div className="event-details">
                                    {event.link && event.link.length > 0 && (
                                        <>
                                            <ul>
                                                {event.link.map((link, index) => (
                                                    <li key={index}>
                                                        <a
                                                            href={link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            {link.text_in_event}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="event-details">
                                <div className="event-description">{event.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const groupEventsByYear = (events) => {
    const uniqueYears = [];

    return events.reduce((grouped, event, index) => {
        const year = event.date.substring(0, 4);

        if (!uniqueYears.includes(year)) {
            uniqueYears.push(year);
            grouped[year] = [];
        }

        // Generate a random number between 0 and 9999
        const randomNum = Math.floor(Math.random() * 10000);
        const uniqueKey = `${year}-${index}-${randomNum}`;

        grouped[year].push({ ...event, uniqueKey });
        return grouped;
    }, {});
};

export default Timeline;