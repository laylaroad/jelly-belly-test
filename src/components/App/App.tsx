import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styles from './App.module.css';
import Home from '../../pages/Home/Home';
import BeansList from '../../pages/BeansList/BeansList';
import BeanFacts from '../../pages/BeansFacts/BeansFacts';
import BeanCombos from '../../pages/BeansCombos/BeansCombos';
import BeanRecipes from '../../pages/BeansRecipe/BeansRecipe';

const App: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <nav className={styles.navMenu}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to="/">Home</Link></li>
          <li className={styles.navItem}><Link to="/beans">List</Link></li>
          <li className={styles.navItem}><Link to="/facts">Facts</Link></li>
          <li className={styles.navItem}><Link to="/combos">Combinations</Link></li>
          <li className={styles.navItem}><Link to="/recipes">Recipes</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beans" element={<BeansList />} />
        <Route path="/facts" element={<BeanFacts />} />
        <Route path="/combos" element={<BeanCombos />} />
        <Route path="/recipes" element={<BeanRecipes />} />
      </Routes>
    </div>

  );
};

export default App;
