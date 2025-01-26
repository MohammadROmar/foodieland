import type { Category } from '@/models/category';

import {
  breakfastImg,
  chocolateImg,
  dessertImg,
  lunchImg,
  meatImg,
  veganImg,
} from '@/assets/images/categories';

export const categories: Category[] = [
  { name: 'Breakfast', image: breakfastImg.src, color: '#f4f5f0' },
  { name: 'Vegan', image: veganImg.src, color: '#f2faed' },
  { name: 'Meat', image: meatImg.src, color: '#fbf1f0' },
  { name: 'Dessert', image: dessertImg.src, color: '#fff7ea' },
  { name: 'Lunch', image: lunchImg.src, color: '#f5f5f5' },
  { name: 'Chocolate', image: chocolateImg.src, color: '#f4f4f4' },
];
