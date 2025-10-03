import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState } from 'react'

export default function Home() {
  const [rsvpStatus, setRsvpStatus] = useState({
    friday: null,
    saturday: null,
    sunday: null,
    mondayTour: null,
    mondayLunch: null
  })

  const handleRSVP = (eventId, status) => {
    setRsvpStatus(prev => ({
      ...prev,
      [eventId]: status
    }))
  }

  const RSVPButtons = ({ eventId, label }) => (
    <div className="rsvp-buttons">
      <p><strong>RSVP for {label}:</strong></p>
      <div className="button-group">
        <button 
          className={`rsvp-btn rsvp-yes ${rsvpStatus[eventId] === 'yes' ? 'active' : ''}`}
          onClick={() => handleRSVP(eventId, 'yes')}
        >
          ✅ Yes, I'm In!
        </button>
        <button 
          className={`rsvp-btn rsvp-maybe ${rsvpStatus[eventId] === 'maybe' ? 'active' : ''}`}
          onClick={() => handleRSVP(eventId, 'maybe')}
        >
          🤔 Maybe
        </button>
        <button 
          className={`rsvp-btn rsvp-no ${rsvpStatus[eventId] === 'no' ? 'active' : ''}`}
          onClick={() => handleRSVP(eventId, 'no')}
        >
          ❌ Can't Make It
        </button>
      </div>
    </div>
  )

  return (
    <div className="container">
      <Head>
        <title>The Diamond Fest of Danni - May 2026</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="The Diamond Fest of Danni" />
        <div className="event-container">
          
          <div className="event-day">
            <h2>🌅 Friday 8 May 2026</h2>
            
            <div className="event-item">
              <h3>3:00 PM - The Twilight Sydney Harbour Bridge Climb on Danni's Bridge</h3>
              <p>People wanting to join us should book directly using the link <a href="https://www.bridgeclimb.com/" target="_blank" rel="noopener noreferrer">Sydney Harbour BridgeClimb Official Site | Book Direct</a> and select Twilight Start time between 3pm-4. Fees $415 per head for those who dare 😊.</p>
            </div>

            <div className="event-item">
              <h3>7:00 PM - Hacienda Bar and Lounge</h3>
              <p><a href="https://www.pullmanquaygrand.com.au/dining/hacienda/" target="_blank" rel="noopener noreferrer">Wine and Cocktail Bar and Lounge | Hacienda | Sydney</a> Mezzanine/Level 1 Pullman Quay Grand on Danni's Circular Quay, 61 Macquarie St Sydney</p>
              <p>Drinks and Nibbles to celebrate PJ's birthday (the Fairy Princess Danni is likely to smoke-bomb out of their to rest for her big event the following day).</p>
              <p><strong>This is a free event for all that attend until the money on the bar runs out!</strong></p>
            </div>
            
            <RSVPButtons eventId="friday" label="Friday Events" />
          </div>

          <div className="event-day main-event">
            <h2>✨ Saturday 9 May 2026 - THE MAIN EVENT</h2>
            
            <div className="event-item">
              <h3>1:00 PM in the bar for 1:30 PM - A Lusciously Long Lunch</h3>
              <p>A lusciously long lunch with a fabulous view of Danni's Harbour at <strong>Cafe Sydney</strong>, Customs House, 5th Floor, 31 Alfred St, Sydney - <a href="https://cafesydney.com/" target="_blank" rel="noopener noreferrer">https://cafesydney.com/</a></p>
              
              <p><strong>If it is just one event people attend, I am asking that they please make it The Lusciously Long Lunch</strong></p>
              
              <div className="rsvp-info">
                <p><strong>RSVP Required:</strong> Please express interest so numbers can be finalized, then pay $100 per head towards lunch via PayID <strong>0431 470 995</strong>. The rest will be subsidized.</p>
                <p><strong>RSVP Deadline:</strong> 28 April 2026</p>
                <p><strong>Time:</strong> Lunch is from 1:30pm to 4:30pm and we will let the mood take us wherever it needs to afterwards... 😊</p>
              </div>
            </div>
            
            <RSVPButtons eventId="saturday" label="Saturday Main Event" />
          </div>

          <div className="event-day">
            <h2>🏳️‍🌈 Sunday 10 May 2026</h2>
            
            <div className="event-item">
              <h3>2:00 PM - Cultural History Walk with the Sisters of Perpetual Indulgence</h3>
              <p>Website: <a href="https://universaljoy.com.au/" target="_blank" rel="noopener noreferrer">https://universaljoy.com.au/</a></p>
              <p>We will gather at <strong>QTOPIA</strong> <a href="https://www.qtopia.com.au/" target="_blank" rel="noopener noreferrer">Qtopia Sydney - The home of Queer History and Culture</a> in Taylor Square at Paddington to meet the Sisters and wander around and down to Hyde Park.</p>
              <p><strong>This event will be free (hosted by me) but tips for our guides very welcome.</strong></p>
              <p>The Sisters have suggested lunch at the Oxford Hotel and a quick visit to QTOPIA before we meet up with them so we'll definitely see who's keen closer to the time.</p>
            </div>
            
            <RSVPButtons eventId="sunday" label="Sunday Cultural Walk" />
          </div>

          <div className="event-day birthday">
            <h2>🎂 Monday 11 May 2026 - My Big, Big Day</h2>
            
            <div className="event-item">
              <h3>6:45 AM - The Backstage Tour at Danni's House - The Sydney Opera House</h3>
              <p>Followed by breakfast in the Green Room. <strong>Maximum 12 people.</strong></p>
              <p>The group is booked so it's first in best dressed. If people could express an interest and wait for confirmation, then pay directly $199 per head via PayID <strong>0431 470 995</strong> that would be perfect.</p>
              <p><a href="https://www.sydneyoperahouse.com/visit-us/tours/backstage-tour" target="_blank" rel="noopener noreferrer">The Backstage Tour | Sydney Opera House</a></p>
              
              <RSVPButtons eventId="mondayTour" label="Opera House Tour" />
            </div>

            <div className="event-item">
              <h3>1:00 PM - Lunch at Watsons Bay</h3>
              <p><strong>Lunch is confirmed and is PAYG for those who attend.</strong></p>
              <p>We will catch the Ferry to Watsons Bay at <strong>12:20pm</strong> in time for lunch at <a href="https://www.doyles.com.au/watsons-bay/garden-bar/" target="_blank" rel="noopener noreferrer">Doyle's Garden Bar</a> at 1pm</p>
              <p>11 Marine Pde Watsons Bay, NSW 2030</p>
              <p><strong>RSVP Required:</strong> Numbers need to be finalized with the restaurant by 28 April 2026.</p>
              
              <RSVPButtons eventId="mondayLunch" label="Watsons Bay Lunch" />
            </div>

            <div className="birthday-finale">
              <h3>❤️💎🥂 After this, everyone is on their own! Happy birthday to me 💎🥂❤️</h3>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
