import type { Recipe } from '@/models/recipe';

import {
  recipe1Img,
  recipe2Img,
  recipe3Img,
  recipe4Img,
  recipe5Img,
  recipe6Img,
  recipe7Img,
  recipe8Img,
} from '@/assets/images/recipes/simple-and-tasty';

export const simpleAndTastyRecipes: Recipe[] = [
  {
    image: recipe1Img,
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    category: 'Snack',
    duration: 30,
  },
  {
    image: recipe2Img,
    title: 'Fresh Lime Roasted Salmon with Ginger Sause',
    category: 'Fish',
    duration: 30,
  },
  {
    image: recipe3Img,
    title: 'Strawberry Oatmeal Pancake with Honey Syrup',
    category: 'Breakfast',
    duration: 30,
  },
  {
    image: recipe4Img,
    title: 'Fresh and Healthy Mixed Mayonnaise Salad',
    category: 'Healthy',
    duration: 30,
  },
  {
    image: recipe5Img,
    title: 'Chicken Meatballs with Cream Cheese',
    category: 'Meat',
    duration: 30,
  },
  {
    image: recipe6Img,
    title: 'Fruity Pancake with Orange & Blueberry',
    category: 'Sweet',
    duration: 30,
  },
  {
    image: recipe7Img,
    title: 'The Best Easy One Pot Chicken and Rise',
    category: 'Snack',
    duration: 30,
  },
  {
    image: recipe8Img,
    title: 'The Creamiest Creamy Chicken and Bacon Pasta',
    category: 'Noodles',
    duration: 30,
  },
];
