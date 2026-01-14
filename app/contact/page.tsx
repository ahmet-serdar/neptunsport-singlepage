import styles from './page.module.css'

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <h1 className={styles.sectionTitle}>Kontaktinformasjon</h1>
        <section className={styles.card}>
          <dl className={styles.list}>
            <div className={styles.row}>
              <dt className={styles.term}>Handelsnavn</dt>
              <dd className={styles.detail}>Zorlu Neptunsport</dd>
            </div>
            <div className={styles.row}>
              <dt className={styles.term}>Telefonnummer</dt>
              <dd className={styles.detail}>
                <a className={styles.link} href="tel:+4794067689">+47 940 67 689</a>
              </dd>
            </div>
            <div className={styles.row}>
              <dt className={styles.term}>E-postadresse</dt>
              <dd className={styles.detail}>
                <a className={styles.link} href="mailto:neptunsport21@hotmail.com">neptunsport21@hotmail.com</a>
              </dd>
            </div>
            <div className={styles.row}>
              <dt className={styles.term}>Fysisk adresse</dt>
              <dd className={styles.detail}>
                <address className={styles.address}>Zorlu, Sinsenterrassen 2B, 0574 Oslo, Norge</address>
              </dd>
            </div>
          </dl>
        </section>
      </main>
    </div>
  );
}

