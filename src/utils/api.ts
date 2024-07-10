
import axios from 'axios';
import { BeanCombo, ApiResponse, BeanFact, Bean, BeanRecipe } from '../types/BeanInterfaces';


export const fetchBeanCombos = async (): Promise<BeanCombo[]> => {
    try {
        const response = await axios.get<ApiResponse<BeanCombo>>('https://jellybellywikiapi.onrender.com/api/Combinations?pageIndex=1&pageSize=10', {
            headers: {
                'Accept': 'application/json',
            },
        });
        console.log("Bean combos:", response.data);

        return response.data.items;
    } catch (error) {
        console.error('Error fetching bean combos:', error);
        throw new Error('Error fetching bean combos');
    }
};

export const fetchBeanFacts = async (): Promise<BeanFact[]> => {
    try {
        const response = await axios.get<ApiResponse<BeanFact>>('https://jellybellywikiapi.onrender.com/api/Facts?pageIndex=1&pageSize=10', {
            headers: {
                'Accept': 'application/json',
            },
        });
        console.log("Bean facts:", response.data);

        return response.data.items;
    } catch (error) {
        console.error('Error fetching bean facts:', error);
        throw new Error('Error fetching bean facts');
    }
};

export const fetchBeans = async (pageIndex: number): Promise<{ beansData: Bean[], hasMoreData: boolean }> => {
    try {
        const response = await axios.get(`https://jellybellywikiapi.onrender.com/api/Beans?pageIndex=${pageIndex}&pageSize=10`, {
            headers: {
                'Accept': 'application/json',
            },
        });

        console.log("API response:", response.data);

        const beansData: Bean[] = response.data.items;
        const hasMoreData: boolean = beansData.length > 0;

        return { beansData, hasMoreData };
    } catch (error) {
        console.error('Error fetching beans:', error);
        throw new Error('Error fetching beans');
    }
};


export const fetchBeanRecipes = async (): Promise<BeanRecipe[]> => {
    try {
        const response = await axios.get<ApiResponse<BeanRecipe>>('https://jellybellywikiapi.onrender.com/api/Recipes?pageIndex=1&pageSize=10', {
            headers: {
                'Accept': 'application/json',
            },
        });
        console.log("Bean recipes:", response.data);

        return response.data.items;
    } catch (error) {
        console.error('Error fetching bean recipes:', error);
        throw new Error('Error fetching bean recipes');
    }
};
