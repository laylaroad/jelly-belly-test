
import { FC } from 'react';
import styles from './Home.module.css';
import cherrybelly from '../../images/cherry_belly.jpg';

const Home: FC = () => {

    return (
        <section className={styles.homeContainer}>
            <div className={styles.homeParagraph}>
                <h1 className={styles.homeTitle}>Welcome to the Jelly Belly Beans Website!</h1>
                <p className={styles.homeDescription}>Explore the world of Jelly Belly beans! Use the navigation menu to view different sections of the project.</p>
            </div>
            <img src={cherrybelly} alt="Cherry Jelly Belly" />
        </section>
    );
};

export default Home;
