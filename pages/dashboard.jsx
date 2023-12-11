import styles from '@/styles/Dashboard.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <div className={styles.logo}>
              <img src="navLogo.svg" className={styles.logo} alt="Thrive logo" />
            </div>
            <div className={styles.divNavButton}>
              <button className={styles.navHome}>HOME</button>
              <button className={styles.navBut}>ABOUT US</button>
            </div>
          </nav>
        </header>
        <section className={styles.mainCont}>
            <h1 className={styles.heading}>Welcome to Your Dashboard</h1>
            <div className={styles.maincont}>
                <div className={styles.widget}>
                    <h2>
                    EXERCISE LOG
                    </h2>

                </div>
                <div className={styles.widget}>
                    <h2>
                    CALENDER
                    </h2>
                    
                </div>
                <div className={styles.widget}>
                    <h2>
                    WEIGHT LOG
                    </h2>
                    
                </div>
                <div className={styles.widget}>
                    <h2>
                    MEAL TRACKER
                    </h2>
                    
                </div>
            </div>
        </section>
      </main>
    </>
  );
}