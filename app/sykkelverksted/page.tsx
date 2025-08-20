'use client';

import { useEffect } from 'react';
import styles from './page.module.css';

export default function SykkelverkstedPage() {
  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      initMap();
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initMap = () => {
    // Oslo coordinates (you can change this to your actual address)
    const oslo = { lat: 59.9139, lng: 10.7522 };
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const map = new (window as any).google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: oslo,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
        }
      ]
    });

    // Add a marker for the bike workshop
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (window as any).google.maps.Marker({
      position: oslo,
      map: map,
      title: 'NeptunSport Sykkelverksted',
      icon: {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#e74c3c"/>
            <path d="M16 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="white"/>
          </svg>
        `),
        scaledSize: new (window as any).google.maps.Size(32, 32)
      }
    });
  };

  return (
    <div className={styles.container}>
      {/* Hero Image */}
      <div className={styles.heroSection}>
        <img 
          src="/bike-workshop.webp" 
          alt="Sykkelverksted" 
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>🚲 Sykkelverksted</h1>
          <p className={styles.heroSubtitle}>Vi tar vare på sykkelen din</p>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        <section className={styles.introSection}>
          <p className={styles.introText}>
            Velkommen til vårt sykkelverksted! Enten du trenger en enkel justering, en større service eller en reparasjon etter et uhell, står vårt erfarne verkstedteam klare til å hjelpe deg. Vi har lidenskap for sykler og sørger for at din tohjuling får den beste behandlingen – raskt og profesjonelt.
          </p>
        </section>

        {/* Services Section */}
        <section className={styles.servicesSection}>
          <h2 className={styles.sectionTitle}>🔧 Våre tjenester</h2>
          <p className={styles.sectionIntro}>
            Vi tilbyr et bredt spekter av tjenester for alle typer sykler:
          </p>
          
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Service og vedlikehold</h3>
              <p>Regelmessig service forlenger levetiden på sykkelen din og gir en tryggere og mer behagelig sykkelopplevelse.</p>
            </div>
            
            <div className={styles.serviceCard}>
              <h3>Bremse- og girjustering</h3>
              <p>Vi sørger for at gir og bremser fungerer som de skal – presist og sikkert.</p>
            </div>
            
            <div className={styles.serviceCard}>
              <h3>Dekkskift og slangebytte</h3>
              <p>Punktert? Vi bytter både dekk og slange mens du venter.</p>
            </div>
            
            <div className={styles.serviceCard}>
              <h3>Hjulretting og eikestramming</h3>
              <p>Vi retter skjeve hjul og sørger for at alt ruller som det skal.</p>
            </div>
            
            <div className={styles.serviceCard}>
              <h3>Demper-service</h3>
              <p>Vi tilbyr service på dempergaffel og bakdemper – enten det gjelder rengjøring, olje- og pakningsbytte eller justering.</p>
            </div>
            
            <div className={styles.serviceCard}>
              <h3>Montering av deler og tilbehør</h3>
              <p>Har du kjøpt nye pedaler, kurv, barnesete eller lys? Vi monterer det for deg.</p>
            </div>
          </div>
        </section>

        {/* Opening Hours Section */}
        <section className={styles.openingHoursSection}>
          <h2 className={styles.sectionTitle}>🕒 Åpningstider</h2>
          <div className={styles.openingHours}>
            <div className={styles.hoursRow}>
              <span className={styles.day}>Mandag:</span>
              <span className={styles.time}>10:00 – 18:30</span>
            </div>
            <div className={styles.hoursRow}>
              <span className={styles.day}>Tirsdag:</span>
              <span className={styles.time}>10:00 – 17:30</span>
            </div>
            <div className={styles.hoursRow}>
              <span className={styles.day}>Onsdag:</span>
              <span className={styles.time}>10:00 – 18:30</span>
            </div>
            <div className={styles.hoursRow}>
              <span className={styles.day}>Torsdag:</span>
              <span className={styles.time}>10:00 – 18:30</span>
            </div>
            <div className={styles.hoursRow}>
              <span className={styles.day}>Fredag:</span>
              <span className={styles.time}>09:00 – 17:30</span>
            </div>
            <div className={styles.hoursRow}>
              <span className={styles.day}>Lørdag:</span>
              <span className={styles.time}>10:00 – 18:30</span>
            </div>
            <div className={styles.hoursRow}>
              <span className={styles.day}>Søndag:</span>
              <span className={styles.time}>Stengt</span>
            </div>
          </div>
          <p className={styles.openingNote}>
            Åpningstidene kan variere. Kontakt oss gjerne for å være sikker.
          </p>
          <p className={styles.bookingNote}>
            <strong>NB:</strong> Vi anbefaler å bestille time på forhånd for større servicer.
          </p>
        </section>

        {/* Contact and Map Section */}
        <section className={styles.contactSection}>
          <h2 className={styles.sectionTitle}>📍 Besøk oss</h2>
          <div className={styles.contactInfo}>
            <div className={styles.address}>
              <h3>Adresse</h3>
              <p>NeptunSport Sykkelverksted</p>
              <p>Hestehovstien 3E</p>
              <p>2052 Jessheim</p>
              <p>Norge</p>
            </div>
            {/* <div className={styles.mapContainer}>
              <div id="map" className={styles.map}>
                <div className={styles.mapPlaceholder}>
                  <p>📍 NeptunSport Sykkelverksted</p>
                  <p>Hestehovstien 3E, 2052 Jessheim</p>
                  <p>Kart lastes...</p>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}
