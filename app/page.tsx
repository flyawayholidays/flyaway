'use client';

import { useState, useMemo } from 'react';

interface Flight {
  id: number;
  airline: string;
  code: string;
  color: string;
  depart: string;
  arrive: string;
  duration: string;
  stops: string;
  stopinfo: string;
  price: number;
  best: boolean;
}

const flights: Flight[] = [
  { id: 1, airline: 'United', code: 'UA', color: '#1a4f8a', depart: '08:05', arrive: '16:27', duration: '5h 22m', stops: 'nonstop', stopinfo: 'Nonstop', price: 284, best: true },
  { id: 2, airline: 'Delta', code: 'DL', color: '#e0103a', depart: '11:40', arrive: '20:30', duration: '5h 50m', stops: 'nonstop', stopinfo: 'Nonstop', price: 312, best: false },
  { id: 3, airline: 'JetBlue', code: 'B6', color: '#0033a0', depart: '06:15', arrive: '17:03', duration: '7h 48m', stops: '1stop', stopinfo: '1 stop • DEN', price: 219, best: false },
  { id: 4, airline: 'Alaska', code: 'AS', color: '#00477c', depart: '14:20', arrive: '23:25', duration: '6h 05m', stops: 'nonstop', stopinfo: 'Nonstop', price: 298, best: false },
  { id: 5, airline: 'American', code: 'AA', color: '#a6192e', depart: '09:55', arrive: '20:07', duration: '8h 12m', stops: '1stop', stopinfo: '1 stop • ORD', price: 201, best: false },
  { id: 6, airline: 'United', code: 'UA', color: '#1a4f8a', depart: '17:30', arrive: '01:48', duration: '5h 18m', stops: 'nonstop', stopinfo: 'Nonstop', price: 329, best: false },
];

type SortType = 'best' | 'price' | 'duration' | 'departure';

export default function FlightsPage() {
  const [priceFilter, setPriceFilter] = useState(612);
  const [stopsFilter, setStopsFilter] = useState(new Set(['nonstop', '1stop']));
  const [airlinesFilter, setAirlinesFilter] = useState(new Set(['United', 'Delta', 'JetBlue', 'Alaska', 'American']));
  const [sortBy, setSortBy] = useState<SortType>('best');
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [showModal, setShowModal] = useState(false);

  const getDurationMins = (dur: string) => {
    const match = dur.match(/(\d+)h\s(\d+)m/);
    if (!match) return 0;
    return parseInt(match[1]) * 60 + parseInt(match[2]);
  };

  const filteredAndSorted = useMemo(() => {
    let filtered = flights.filter(f =>
      f.price <= priceFilter &&
      stopsFilter.has(f.stops) &&
      airlinesFilter.has(f.airline)
    );

    if (sortBy === 'price') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'duration') {
      filtered.sort((a, b) => getDurationMins(a.duration) - getDurationMins(b.duration));
    } else if (sortBy === 'departure') {
      filtered.sort((a, b) => a.depart.localeCompare(b.depart));
    } else {
      filtered.sort((a, b) => (b.best ? 1 : 0) - (a.best ? 1 : 0) || a.price - b.price);
    }

    return filtered;
  }, [priceFilter, stopsFilter, airlinesFilter, sortBy]);

  const toggleStop = (stop: string) => {
    const newStops = new Set(stopsFilter);
    if (newStops.has(stop)) {
      newStops.delete(stop);
    } else {
      newStops.add(stop);
    }
    setStopsFilter(newStops);
  };

  const toggleAirline = (airline: string) => {
    const newAirlines = new Set(airlinesFilter);
    if (newAirlines.has(airline)) {
      newAirlines.delete(airline);
    } else {
      newAirlines.add(airline);
    }
    setAirlinesFilter(newAirlines);
  };

  const selectFlight = (flight: Flight) => {
    setSelectedFlight(flight);
    setShowModal(true);
  };

  const bookFlight = () => {
    if (!selectedFlight) return;
    alert(`Booking with ${selectedFlight.airline} for $${selectedFlight.price}\n\nRedirecting to payment...`);
    setShowModal(false);
    setSelectedFlight(null);
  };

  return (
    <>
      <style jsx>{`
        :root {
          --primary-blue: #006CE4;
          --primary-blue-dark: #0051B3;
          --primary-blue-darker: #003B95;
          --link-blue: #0071C2;
          --genius-orange: #F56700;
          --warm-gold: #FFB700;
          --light-gold: #FEBB02;
          --coral-red: #E56B74;
          --success-green: #008234;
          --error-red: #D4111E;
          --text-primary: #1A1A1A;
          --text-secondary: #595959;
          --text-tertiary: #2B2B2B;
          --text-dark: #242424;
          --white: #FFFFFF;
          --light-gray: #F5F5F5;
          --border-gray: #D9D9D9;
          --black: #000000;
          --spacing-xs: 4px;
          --spacing-sm: 8px;
          --spacing-md: 16px;
          --spacing-lg: 24px;
          --spacing-xl: 32px;
          --spacing-2xl: 48px;
          --spacing-3xl: 64px;
          --shadow-sm: rgba(26, 26, 26, 0.08) 0px 2px 4px 0px;
          --shadow-md: rgba(26, 26, 26, 0.16) 0px 4px 8px 0px;
          --shadow-lg: rgba(26, 26, 26, 0.16) 0px 2px 8px 0px;
          --shadow-xl: rgba(26, 26, 26, 0.24) 0px 12px 32px 0px;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
          color: var(--text-primary);
          background: var(--light-gray);
          font-size: 14px;
          line-height: 20px;
          -webkit-font-smoothing: antialiased;
        }

        h1 { font-size: 24px; font-weight: 700; line-height: 32px; }
        h2 { font-size: 20px; font-weight: 700; line-height: 28px; }
        h3 { font-size: 16px; font-weight: 700; line-height: 24px; }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--spacing-xl);
        }

        .search-section {
          background: var(--primary-blue);
          padding: var(--spacing-3xl) var(--spacing-xl);
          color: var(--white);
        }

        .search-title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: var(--spacing-xl);
          color: var(--white);
        }

        .search-form {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-md);
          align-items: flex-end;
        }

        .form-group {
          margin-bottom: 0;
        }

        .form-group label {
          display: block;
          color: rgba(255, 255, 255, 0.9);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: var(--spacing-sm);
        }

        .form-group input,
        .form-group select {
          width: 100%;
          padding: 12px 16px;
          height: 44px;
          border: none;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-primary);
          font-family: inherit;
          background: var(--white);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.15s ease;
          font-family: inherit;
          min-height: 44px;
        }

        .btn-primary {
          background: var(--primary-blue);
          color: var(--white);
          font-size: 16px;
          height: 54px;
          padding: 8px 24px;
          box-shadow: var(--shadow-lg);
        }

        .btn-primary:hover {
          background: var(--primary-blue-dark);
          box-shadow: var(--shadow-md);
        }

        .btn-secondary {
          background: var(--white);
          color: var(--text-primary);
          border: 1px solid var(--border-gray);
          font-size: 14px;
          height: 44px;
          padding: 4px 8px;
        }

        .btn-secondary:hover {
          background: var(--light-gray);
          border-color: var(--text-secondary);
        }

        main {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--spacing-2xl) var(--spacing-xl);
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: var(--spacing-2xl);
        }

        .filters {
          background: var(--white);
          border: 1px solid var(--border-gray);
          border-radius: 4px;
          padding: var(--spacing-lg);
          height: fit-content;
          box-shadow: var(--shadow-sm);
        }

        .filter-group {
          margin-bottom: var(--spacing-lg);
          padding-bottom: var(--spacing-lg);
          border-bottom: 1px solid var(--border-gray);
        }

        .filter-group:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }

        .filter-group h3 {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-md);
        }

        .filter-option {
          display: flex;
          align-items: center;
          margin-bottom: var(--spacing-sm);
          cursor: pointer;
        }

        .filter-option input {
          width: 20px;
          height: 20px;
          margin-right: var(--spacing-sm);
          cursor: pointer;
          accent-color: var(--primary-blue);
        }

        .filter-option label {
          display: flex;
          align-items: center;
          flex: 1;
          cursor: pointer;
          margin: 0;
        }

        .filter-option .count {
          color: var(--text-secondary);
          font-size: 12px;
          margin-left: auto;
        }

        .price-slider {
          width: 100%;
          height: 4px;
          border-radius: 2px;
          background: var(--border-gray);
          outline: none;
          accent-color: var(--primary-blue);
          cursor: pointer;
        }

        .results-header {
          margin-bottom: var(--spacing-xl);
        }

        .results-header h1 {
          margin-bottom: var(--spacing-sm);
        }

        .results-meta {
          color: var(--text-secondary);
          font-size: 14px;
        }

        .sort-chips {
          display: flex;
          gap: var(--spacing-sm);
          margin: var(--spacing-lg) 0;
          flex-wrap: wrap;
        }

        .sort-chip {
          padding: 8px 16px;
          border: 1px solid var(--border-gray);
          background: var(--white);
          border-radius: 20px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.15s ease;
          user-select: none;
        }

        .sort-chip:hover {
          border-color: var(--primary-blue);
          color: var(--primary-blue);
        }

        .sort-chip.active {
          background: var(--primary-blue);
          color: var(--white);
          border-color: var(--primary-blue);
        }

        .flight-card {
          background: var(--white);
          border: 1px solid var(--border-gray);
          border-radius: 4px;
          margin-bottom: var(--spacing-md);
          display: flex;
          align-items: center;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.15s ease;
          box-shadow: var(--shadow-sm);
        }

        .flight-card:hover {
          box-shadow: var(--shadow-md);
          border-color: var(--primary-blue);
        }

        .flight-card.selected {
          background: rgba(0, 108, 228, 0.05);
          border-color: var(--primary-blue);
        }

        .flight-main {
          flex: 1;
          padding: var(--spacing-lg);
          display: grid;
          grid-template-columns: auto 1fr auto auto;
          gap: var(--spacing-lg);
          align-items: center;
        }

        .airline-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-xs);
          min-width: 70px;
        }

        .airline-logo {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          font-weight: 700;
          font-size: 16px;
        }

        .airline-name {
          font-size: 12px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .route-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-lg);
        }

        .time-block {
          text-align: center;
          min-width: 80px;
        }

        .time {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .airport-code {
          font-size: 12px;
          color: var(--text-secondary);
          margin-top: var(--spacing-xs);
        }

        .flight-duration {
          flex: 1;
          text-align: center;
          color: var(--text-secondary);
          font-size: 13px;
        }

        .flight-duration::before {
          content: '✈';
          display: block;
          font-size: 18px;
          color: var(--primary-blue);
          margin: var(--spacing-xs) 0;
        }

        .stops-info {
          text-align: right;
          min-width: 100px;
          font-size: 13px;
        }

        .stops-info.nonstop {
          color: var(--success-green);
          font-weight: 600;
        }

        .price-section {
          padding: var(--spacing-lg);
          border-left: 1px solid var(--border-gray);
          background: var(--light-gray);
          min-width: 180px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .price-best {
          font-size: 12px;
          color: var(--success-green);
          margin-bottom: var(--spacing-sm);
        }

        .flight-price {
          font-size: 28px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--spacing-xs);
        }

        .price-label {
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-md);
        }

        .flight-card .btn-primary {
          height: 44px;
          padding: 8px 20px;
          font-size: 14px;
        }

        .flight-card.selected .btn-primary {
          background: var(--success-green);
        }

        .flight-card.selected .btn-primary:hover {
          background: #006b2c;
        }

        .empty-state {
          text-align: center;
          padding: var(--spacing-3xl) var(--spacing-xl);
          color: var(--text-secondary);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-overlay.hidden {
          display: none;
        }

        .modal {
          background: var(--white);
          border-radius: 4px;
          max-width: 600px;
          width: 90%;
          max-height: 85vh;
          overflow-y: auto;
          box-shadow: var(--shadow-xl);
        }

        .modal-header {
          padding: var(--spacing-lg);
          border-bottom: 1px solid var(--border-gray);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-header h2 {
          margin: 0;
        }

        .modal-close {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: var(--text-secondary);
          padding: 0;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-close:hover {
          color: var(--text-primary);
        }

        .modal-body {
          padding: var(--spacing-lg);
        }

        .modal-footer {
          padding: var(--spacing-lg);
          border-top: 1px solid var(--border-gray);
          display: flex;
          gap: var(--spacing-md);
        }

        .modal-footer .btn {
          flex: 1;
        }

        @media (max-width: 768px) {
          main {
            grid-template-columns: 1fr;
          }

          .flight-main {
            grid-template-columns: 1fr;
          }

          .flight-card {
            flex-direction: column;
          }

          .price-section {
            border-left: none;
            border-top: 1px solid var(--border-gray);
            width: 100%;
          }
        }
      `}</style>

      <section className="search-section">
        <div className="container">
          <h2 className="search-title">Find &amp; Book Your Perfect Flight</h2>
          <form className="search-form">
            <div className="form-group">
              <label htmlFor="from">From</label>
              <input type="text" id="from" placeholder="Departure city" defaultValue="SFO" />
            </div>
            <div className="form-group">
              <label htmlFor="to">To</label>
              <input type="text" id="to" placeholder="Destination city" defaultValue="JFK" />
            </div>
            <div className="form-group">
              <label htmlFor="depart">Depart</label>
              <input type="date" id="depart" defaultValue="2026-06-19" />
            </div>
            <div className="form-group">
              <label htmlFor="return">Return</label>
              <input type="date" id="return" defaultValue="2026-06-24" />
            </div>
            <div className="form-group">
              <label htmlFor="travelers">Travelers</label>
              <select id="travelers">
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>3 Adults</option>
              </select>
            </div>
            <button type="button" className="btn btn-primary">Search Flights</button>
          </form>
        </div>
      </section>

      <main>
        <aside className="filters">
          <div className="filter-group">
            <h3>Price</h3>
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <small style={{ color: 'var(--primary-blue)', fontWeight: '600' }}>
                ${priceFilter}
              </small>
            </div>
            <input
              type="range"
              className="price-slider"
              min="184"
              max="612"
              value={priceFilter}
              onChange={(e) => setPriceFilter(parseInt(e.target.value))}
            />
          </div>

          <div className="filter-group">
            <h3>Stops</h3>
            <div className="filter-option">
              <input
                type="checkbox"
                id="nonstop"
                checked={stopsFilter.has('nonstop')}
                onChange={() => toggleStop('nonstop')}
              />
              <label htmlFor="nonstop">Nonstop</label>
              <span className="count">12</span>
            </div>
            <div className="filter-option">
              <input
                type="checkbox"
                id="onestop"
                checked={stopsFilter.has('1stop')}
                onChange={() => toggleStop('1stop')}
              />
              <label htmlFor="onestop">1 stop</label>
              <span className="count">28</span>
            </div>
            <div className="filter-option">
              <input
                type="checkbox"
                id="twostop"
                checked={stopsFilter.has('2plus')}
                onChange={() => toggleStop('2plus')}
              />
              <label htmlFor="twostop">2+ stops</label>
              <span className="count">9</span>
            </div>
          </div>

          <div className="filter-group">
            <h3>Airlines</h3>
            {['United', 'Delta', 'JetBlue', 'Alaska', 'American'].map((airline) => (
              <div key={airline} className="filter-option">
                <input
                  type="checkbox"
                  id={airline.toLowerCase()}
                  checked={airlinesFilter.has(airline)}
                  onChange={() => toggleAirline(airline)}
                />
                <label htmlFor={airline.toLowerCase()}>{airline}</label>
                <span className="count">{airline === 'United' ? '15' : airline === 'Delta' ? '11' : airline === 'JetBlue' ? '9' : '7'}</span>
              </div>
            ))}
          </div>
        </aside>

        <section>
          <div className="results-header">
            <h1>SFO → JFK</h1>
            <p className="results-meta">Fri, Jun 19 · {filteredAndSorted.length} flights found</p>
          </div>

          <div className="sort-chips">
            {(['best', 'price', 'duration', 'departure'] as const).map((sort) => (
              <button
                key={sort}
                className={`sort-chip ${sortBy === sort ? 'active' : ''}`}
                onClick={() => setSortBy(sort)}
              >
                {sort === 'best' ? 'Best' : sort === 'price' ? 'Cheapest' : sort === 'duration' ? 'Fastest' : 'Departure'}
              </button>
            ))}
          </div>

          {filteredAndSorted.length === 0 ? (
            <div className="empty-state">
              <h2>No flights found</h2>
              <p>Try adjusting your filters</p>
            </div>
          ) : (
            filteredAndSorted.map((flight) => (
              <div
                key={flight.id}
                className={`flight-card ${selectedFlight?.id === flight.id ? 'selected' : ''}`}
                onClick={() => selectFlight(flight)}
              >
                <div className="flight-main">
                  <div className="airline-badge">
                    <div className="airline-logo" style={{ backgroundColor: flight.color }}>
                      {flight.code}
                    </div>
                    <div className="airline-name">{flight.airline}</div>
                  </div>

                  <div className="route-info">
                    <div className="time-block">
                      <div className="time">{flight.depart}</div>
                      <div className="airport-code">SFO</div>
                    </div>
                    <div className="flight-duration">{flight.duration}</div>
                    <div className="time-block">
                      <div className="time">{flight.arrive}</div>
                      <div className="airport-code">JFK</div>
                    </div>
                  </div>

                  <div className={`stops-info ${flight.stops === 'nonstop' ? 'nonstop' : ''}`}>
                    {flight.stopinfo}
                  </div>
                </div>

                <div className="price-section">
                  {flight.best && <div className="price-best">✓ Best Value</div>}
                  <div className="flight-price">${flight.price}</div>
                  <div className="price-label">per person</div>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      selectFlight(flight);
                    }}
                  >
                    Select
                  </button>
                </div>
              </div>
            ))
          )}
        </section>
      </main>

      <div className={`modal-overlay ${!showModal ? 'hidden' : ''}`}>
        <div className="modal">
          <div className="modal-header">
            <h2>{selectedFlight ? `${selectedFlight.airline} ${selectedFlight.code} • $${selectedFlight.price}` : 'Flight Details'}</h2>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              ×
            </button>
          </div>
          <div className="modal-body">
            {selectedFlight && (
              <>
                <div className="form-group">
                  <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Departure</h3>
                  <p style={{ fontSize: '18px', marginBottom: 'var(--spacing-xs)' }}>
                    {selectedFlight.depart} <strong>SFO</strong>
                  </p>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    San Francisco International
                  </p>
                </div>

                <div className="form-group">
                  <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Arrival</h3>
                  <p style={{ fontSize: '18px', marginBottom: 'var(--spacing-xs)' }}>
                    {selectedFlight.arrive} <strong>JFK</strong>
                  </p>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    John F. Kennedy International
                  </p>
                </div>

                <div className="form-group">
                  <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Duration &amp; Stops</h3>
                  <p>{selectedFlight.duration} • {selectedFlight.stopinfo}</p>
                </div>

                <div className="form-group">
                  <h3 style={{ marginBottom: 'var(--spacing-md)' }}>What&apos;s Included</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)' }}>
                    <div><span style={{ color: 'var(--success-green)', marginRight: '8px' }}>✓</span> Carry-on bag</div>
                    <div><span style={{ color: 'var(--success-green)', marginRight: '8px' }}>✓</span> Personal item</div>
                    <div><span style={{ color: 'var(--success-green)', marginRight: '8px' }}>✓</span> Seat selection</div>
                    <div><span style={{ color: 'var(--success-green)', marginRight: '8px' }}>✓</span> In-flight beverage</div>
                  </div>
                </div>

                <div className="form-group" style={{ borderTop: '1px solid var(--border-gray)', paddingTop: 'var(--spacing-lg)' }}>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>
                    Price per person (round trip)
                  </p>
                  <p style={{ fontSize: '28px', fontWeight: '700', color: 'var(--text-primary)' }}>
                    ${selectedFlight.price}
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={bookFlight}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}