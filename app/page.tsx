import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroImageContainer}>
            <Image
              className={styles.heroImage}
              src='/hero-image.jpg'
              alt='Hero image'
              width={1200}
              height={600}
              priority
            />
            <div className={styles.overlay}></div>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>Welcome to Neptunsport</h1>
              <p className={styles.heroSubtitle}>
                Sykler og sportsutstyr for alle eventyr!
              </p>
              <Link href='/sykkelverksted'>
                <button className={styles.heroButton}>Sykkel Verksted</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Sykkelvedlikeholdstips Section */}
        <section className={styles.maintenanceSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Sykkelvedlikeholdstips</h2>
            <p className={styles.sectionSubtitle}>
              Hvordan holde sykkelen i topp stand
            </p>
          </div>

          {/* Tip 1: Image left, text right */}
          <div className={styles.tipContainer}>
            <div className={styles.tipImage}>
              <Image
                src='/bike-cleaning.webp'
                alt='Sykkelrengjøring'
                width={500}
                height={300}
                className={styles.tipImageStyle}
              />
            </div>
            <div className={styles.tipContent}>
              <h3 className={styles.tipTitle}>Regelmessig rengjøring</h3>
              <p className={styles.tipText}>
                Hold sykkelen ren ved å vaske den regelmessig med mild såpe og
                vann. Fokus på kjede, gir og bremser. Bruk en mjuk børste for å
                fjerne skitt fra vanskelige steder. Etter vask, tørk sykkelen
                grundig for å forhindre rust.
              </p>
            </div>
          </div>

          {/* Tip 2: Image right, text left */}
          <div className={`${styles.tipContainer} ${styles.tipReversed}`}>
            <div className={styles.tipContent}>
              <h3 className={styles.tipTitle}>Kjedevedlikehold</h3>
              <p className={styles.tipText}>
                Kjeden er hjertet av sykkelen din. Smør den regelmessig med
                kjedelubrikant for å forhindre slitasje og rust. Sjekk
                kjedeutstrekking hver måned. En slitt kjede kan skade gir og
                kassett, så bytt den når den når 0.75% utstrekking.
              </p>
            </div>
            <div className={styles.tipImage}>
              <Image
                src='/chain-maintenance.jpeg'
                alt='Kjedevedlikehold'
                width={500}
                height={300}
                className={styles.tipImageStyle}
              />
            </div>
          </div>

          {/* Tip 3: Image left, text right */}
          <div className={styles.tipContainer}>
            <div className={styles.tipImage}>
              <Image
                src='/tire-pressure.webp'
                alt='Dekktrykk'
                width={500}
                height={300}
                className={styles.tipImageStyle}
              />
            </div>
            <div className={styles.tipContent}>
              <h3 className={styles.tipTitle}>Riktig dekktrykk</h3>
              <p className={styles.tipText}>
                Sjekk dekktrykket før hver tur. Riktig trykk gir bedre grep,
                reduserer rullemotstand og forhindrer punktering. Bruk en
                kvalitetspumpe med trykkmåler. Trykket varierer basert på
                dekktype og vekt - sjekk dekkets sidevegg for anbefalt trykk.
              </p>
            </div>
          </div>

          {/* Tip 4: Image right, text left */}
          <div className={`${styles.tipContainer} ${styles.tipReversed}`}>
            <div className={styles.tipContent}>
              <h3 className={styles.tipTitle}>Bremsesystemet</h3>
              <p className={styles.tipText}>
                Sjekk bremseklosser regelmessig for slitasje. Erstatt dem når de
                er mindre enn 1mm tykke. Juster bremsekabler hvis bremsene føles
                slappe. For skivebremser, sjekk bremseflate og skive for
                slitasje. Hold bremseflater rene fra olje og smøremidler.
              </p>
            </div>
            <div className={styles.tipImage}>
              <Image
                src='/brake-maintenance.webp'
                alt='Bremsesystem'
                width={500}
                height={300}
                className={styles.tipImageStyle}
              />
            </div>
          </div>

          {/* Tip 5: Image left, text right */}
          <div className={styles.tipContainer}>
            <div className={styles.tipImage}>
              <Image
                src='/storage-maintenance.webp'
                alt='Lagring og vedlikehold'
                width={500}
                height={300}
                className={styles.tipImageStyle}
              />
            </div>
            <div className={styles.tipContent}>
              <h3 className={styles.tipTitle}>Lagring og sesongvedlikehold</h3>
              <p className={styles.tipText}>
                Lagre sykkelen på et tørt og kjølig sted. Før vintersesongen, gå
                gjennom en grundig inspeksjon: sjekk alle bolter, juster gir,
                smør bevegelige deler og vurder om dekk bør byttes. En årlig
                service hos profesjonell mekaniker anbefales.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  )
}
