'use client'

import Image from 'next/image'
import styles from './page.module.css'

export default function SykkelverkstedPage() {
  return (
    <div className={styles.container}>
      {/* Hero Image */}
      <div className={styles.heroSection}>
        <Image
          src='/bike-workshop.webp'
          alt='Sykkelverksted'
          className={styles.heroImage}
          width={1200}
          height={600}
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Sykkelverksted</h1>
          <p className={styles.heroSubtitle}>Vi tar vare på sykkelen din</p>
          <div className={styles.bestillTimeCont}>
          <a
            href='https://app.bikefolder.com/customer/invite-book/no?shopId=ea530bfb-efe2-4bc5-8335-7a2d93fad69c&bikeCardId=null'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.bestillTime}
          >
            Bestill time
          </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        <section className={styles.introSection}>
          <p className={styles.introText}>
            Velkommen til vårt sykkelverksted! Enten du trenger en enkel
            justering, en større service eller en reparasjon etter et uhell,
            står vårt erfarne verkstedteam klare til å hjelpe deg. Vi har
            lidenskap for sykler og sørger for at din tohjuling får den beste
            behandlingen – raskt og profesjonelt.
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
              <p>
                Regelmessig service forlenger levetiden på sykkelen din og gir
                en tryggere og mer behagelig sykkelopplevelse.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <h3>Bremse- og girjustering</h3>
              <p>
                Vi sørger for at gir og bremser fungerer som de skal – presist
                og sikkert.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <h3>Dekkskift og slangebytte</h3>
              <p>Punktert? Vi bytter både dekk og slange mens du venter.</p>
            </div>

            <div className={styles.serviceCard}>
              <h3>Hjulretting og eikestramming</h3>
              <p>
                Vi retter skjeve hjul og sørger for at alt ruller som det skal.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <h3>Demper-service</h3>
              <p>
                Vi tilbyr service på dempergaffel og bakdemper – enten det
                gjelder rengjøring, olje- og pakningsbytte eller justering.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <h3>Montering av deler og tilbehør</h3>
              <p>
                Har du kjøpt nye pedaler, kurv, barnesete eller lys? Vi monterer
                det for deg.
              </p>
            </div>
          </div>
        </section>

        {/* Opening Hours Section
        <section className={styles.openingHoursSection}>
          <h2 className={styles.sectionTitle}>🕒 Åpningstider</h2>
          <div className={styles.openingHours}>
            <div className={styles.hoursRow}>
              <span className={styles.day}>Mandag:</span>
              <span className={styles.time}>11:00 – 18:00</span>
            </div>
            <div className={styles.hoursRow}>
              <span className={styles.day}>Tirsdag:</span>
              <span className={styles.time}>11:00 – 18:00</span>
            </div>
            <div className={styles.hoursRow}>
              <span className={styles.day}>Onsdag:</span>
              <span className={styles.time}>11:00 – 18:00</span>
            </div>
            <div className={styles.hoursRow}>
              <span className={styles.day}>Torsdag:</span>
              <span className={styles.time}>11:00 – 18:00</span>
            </div>
            <div className={styles.hoursRow}>
              <span className={styles.day}>Fredag:</span>
              <span className={styles.time}>11:00 – 18:00</span>
            </div>
            <div className={styles.hoursRow}>
              <span className={styles.day}>Lørdag:</span>
              <span className={styles.time}>11:00 – 18:00</span>
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
            <strong>NB:</strong> Vi anbefaler å bestille time på forhånd for
            større servicer.
          </p>
        </section> */}

        {/* Contact and Map Section */}
        <section className={styles.contactSection}>
          <h2 className={styles.sectionTitle}>📍 Besøk oss</h2>
          <div className={styles.contactInfo}>
            <div className={styles.address}>
              <h3>Adresse</h3>
              <p>NeptunSport Sykkelverksted</p>
              <p>Sinsenterrassen 2B</p>
              <p>0574 Oslo</p>
              <p>Norge</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
