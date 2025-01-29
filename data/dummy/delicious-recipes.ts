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
} from '@/assets/images/recipes/delicious';

export const deliciousRecipes: Recipe[] = [
  {
    image: recipe1Img,
    title: 'Mixed Tropical Fruit Salad with Superfood Boosts',
    duration: 30,
    category: 'Healthy',
  },
  {
    image: recipe2Img,
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    duration: 30,
    category: 'Western',
  },
  {
    image: recipe3Img,
    title: 'Healthy Japanese Fried Rise with Aspargus',
    duration: 30,
    category: 'Healthy',
  },
  {
    image: recipe4Img,
    title: 'Cauliflower Walnut Vegetarian Taco Meat',
    duration: 30,
    category: 'Eastern',
  },
  {
    image: recipe5Img,
    title: 'Rainbow Chicken Salad with Almod Honey Mustard Dressing',
    duration: 30,
    category: 'Healthy',
  },
  {
    image: recipe6Img,
    title: 'Barbeque Spicy Sandwiches with Chips',
    duration: 30,
    category: 'Snack',
  },
  {
    image: recipe7Img,
    title: 'Firecracker Vegan Lettuce Wraps - Spicy!',
    duration: 30,
    category: 'Seafood',
  },
  {
    image: recipe8Img,
    title: 'Chicken Ramen Soup with Mushroom',
    duration: 30,
    category: 'Japanese',
  },
];
