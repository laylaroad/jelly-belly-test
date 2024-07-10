import { Key, ReactNode } from "react";

export interface BeanCombo {
    combinationId: Key | null | undefined;
    comboId: number;
    name: string;
    ingredients: string[];
    directions: string[];
}

export interface BeanFact {
    title: ReactNode;
    description: ReactNode;
    factId: number;
    text: string;
}

export interface Bean {
    imageUrl: string | undefined;
    flavorName: string | undefined;
    beanId: number;
    name: string;
    description: string;
}

export interface BeanRecipe {
    recipeId: number;
    name: string;
    ingredients: string[];
    directions: string[];
}

export interface ApiResponse<T> {
    totalCount: number;
    pageSize: number;
    currentPage: number;
    totalPages: number;
    items: T[];
}
