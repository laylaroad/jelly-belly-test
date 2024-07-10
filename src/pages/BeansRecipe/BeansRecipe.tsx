import React, { useEffect, useState } from 'react';
import styles from './BeansRecipe.module.css';
import Modal from 'react-modal';
import { BeanRecipe } from '../../types/BeanInterfaces';
import { fetchBeanRecipes } from '../../utils/api';

Modal.setAppElement('#root');

const BeanRecipes: React.FC = () => {
    const [recipes, setRecipes] = useState<BeanRecipe[]>([]);
    const [error, setError] = useState<string>('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const factsData = await fetchBeanRecipes();
                setRecipes(factsData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching bean recipes:', error);
                setError('Error fetching bean recipes');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const openModal = (recipeId: number) => {
        setSelectedRecipeId(recipeId);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    if (loading) {
        return <p className={styles.loading}>Loading...</p>;
    }

    if (error) {
        return <p className={styles.error}>{error}</p>;
    }

    return (
        <section className={styles.beansRecipesContainer}>
            <h2 className={styles.recipesTitle}>Beans' Recipes</h2>
            <ul className={styles.recipesList}>
                {recipes.map((recipe) => (
                    <li className={styles.recipesItem} key={recipe.recipeId}>
                        <h3 className={styles.itemTitle}>{recipe.name}</h3>
                        <a className={styles.recipeLink}
                            onClick={() => openModal(recipe.recipeId)}>
                            Check out the recipe
                        </a>
                    </li>
                ))}
            </ul>
            {
                selectedRecipeId !== null && (
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Recipe"
                        className={styles.modal}
                        overlayClassName={styles.overlay}
                    >
                        {recipes.map((recipe, index) => (
                            recipe.recipeId === selectedRecipeId && (
                                <React.Fragment key={`${recipe.recipeId}-${index}`}>
                                    <h2 className={styles.recipeTitle}>{recipe.name}</h2>
                                    <span className={styles.recipeText}>Ingredients: {recipe.ingredients.join(', ')}</span>
                                    <span className={styles.recipeText}>Instructions:</span>
                                    <ul className={styles.recipeList}>
                                        {recipe.directions.map((step, index) => (
                                            <li key={index} className={styles.recipeText}>{step}</li>
                                        ))}
                                    </ul>
                                </React.Fragment>
                            )
                        ))}
                    </Modal>
                )
            }
        </section >
    );
};

export default BeanRecipes;
