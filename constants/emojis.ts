import { FoodEmoji } from '@/types/FoodEmoji'

export const foodEmojis: FoodEmoji[] = [
  // Fruits & Vegetables
  { name: 'red apple', emoji: '🍎', categories: ['fruits_vegetables'] },
  // { name: 'green apple', emoji: '🍏', categories: ['fruits_vegetables'] },
  { name: 'pear', emoji: '🍐', categories: ['fruits_vegetables'] },
  { name: 'peach', emoji: '🍑', categories: ['fruits_vegetables'] },
  { name: 'grapes', emoji: '🍇', categories: ['fruits_vegetables'] },
  { name: 'melon', emoji: '🍈', categories: ['fruits_vegetables'] },
  { name: 'watermelon', emoji: '🍉', categories: ['fruits_vegetables'] },
  { name: 'banana', emoji: '🍌', categories: ['fruits_vegetables'] },
  { name: 'pineapple', emoji: '🍍', categories: ['fruits_vegetables'] },
  { name: 'mango', emoji: '🥭', categories: ['fruits_vegetables'] },
  { name: 'strawberry', emoji: '🍓', categories: ['fruits_vegetables'] },
  { name: 'blueberries', emoji: '🫐', categories: ['fruits_vegetables'] },
  { name: 'cherries', emoji: '🍒', categories: ['fruits_vegetables'] },
  { name: 'kiwi', emoji: '🥝', categories: ['fruits_vegetables'] },
  { name: 'lemon', emoji: '🍋', categories: ['fruits_vegetables'] },
  // { name: 'lime', emoji: '🍋', categories: ['fruits_vegetables'] }, // no dedicated lime emoji, often 🍋 is used
  { name: 'orange', emoji: '🍊', categories: ['fruits_vegetables'] },
  // { name: 'tangerine', emoji: '🍊', categories: ['fruits_vegetables'] },
  { name: 'coconut', emoji: '🥥', categories: ['fruits_vegetables'] },
  { name: 'avocado', emoji: '🥑', categories: ['fruits_vegetables'] },
  { name: 'tomato', emoji: '🍅', categories: ['fruits_vegetables'] },
  { name: 'eggplant', emoji: '🍆', categories: ['fruits_vegetables'] },
  { name: 'potato', emoji: '🥔', categories: ['fruits_vegetables'] },
  { name: 'carrot', emoji: '🥕', categories: ['fruits_vegetables'] },
  { name: 'corn', emoji: '🌽', categories: ['fruits_vegetables'] },
  { name: 'hot pepper', emoji: '🌶️', categories: ['fruits_vegetables'] },
  { name: 'cucumber', emoji: '🥒', categories: ['fruits_vegetables'] },
  { name: 'leafy green', emoji: '🥬', categories: ['fruits_vegetables'] },
  { name: 'broccoli', emoji: '🥦', categories: ['fruits_vegetables'] },
  { name: 'garlic', emoji: '🧄', categories: ['fruits_vegetables'] },
  { name: 'onion', emoji: '🧅', categories: ['fruits_vegetables'] },
  { name: 'mushroom', emoji: '🍄', categories: ['fruits_vegetables'] },
  { name: 'peanuts', emoji: '🥜', categories: ['fruits_vegetables'] },
  { name: 'chestnut', emoji: '🌰', categories: ['fruits_vegetables'] },

  // Grains & Starches
  { name: 'bread', emoji: '🍞', categories: ['grains_starches'] },
  { name: 'baguette bread', emoji: '🥖', categories: ['grains_starches'] },
  { name: 'flatbread', emoji: '🫓', categories: ['grains_starches'] },
  { name: 'croissant', emoji: '🥐', categories: ['grains_starches'] },
  { name: 'pretzel', emoji: '🥨', categories: ['grains_starches'] },
  { name: 'bagel', emoji: '🥯', categories: ['grains_starches'] },
  { name: 'rice', emoji: '🍚', categories: ['grains_starches'] },
  // { name: 'cooked rice', emoji: '🍚', categories: ['grains_starches'] },
  { name: 'steaming bowl', emoji: '🍜', categories: ['grains_starches'] },
  { name: 'spaghetti', emoji: '🍝', categories: ['grains_starches'] },
  { name: 'ramen', emoji: '🍜', categories: ['grains_starches'] },
  { name: 'taco shell', emoji: '🌮', categories: ['grains_starches'] },
  { name: 'burrito wrap', emoji: '🌯', categories: ['grains_starches'] },
  { name: 'flatbread sandwich', emoji: '🥙', categories: ['grains_starches'] },

  // Meat, Seafood, Protein
  { name: 'chicken or poultry', emoji: '🍗', categories: ['meat', 'protein'] },
  { name: 'red meat', emoji: '🥩', categories: ['meat', 'protein'] },
  { name: 'bacon', emoji: '🥓', categories: ['meat', 'protein'] },
  { name: 'shrimp', emoji: '🍤', categories: ['seafood', 'protein'] },
  { name: 'fish', emoji: '🐟', categories: ['seafood', 'protein'] },
  // { name: 'cooked fish', emoji: '🍣', categories: ['seafood', 'protein'] },
  { name: 'sushi', emoji: '🍣', categories: ['seafood'] },
  { name: 'crab', emoji: '🦀', categories: ['seafood', 'protein'] },
  { name: 'lobster', emoji: '🦞', categories: ['seafood', 'protein'] },
  { name: 'shrimp', emoji: '🦐', categories: ['seafood', 'protein'] },
  { name: 'oyster', emoji: '🦪', categories: ['seafood', 'protein'] },
  { name: 'egg', emoji: '🥚', categories: ['dairy', 'protein'] },

  // Dairy & Eggs
  { name: 'glass of milk', emoji: '🥛', categories: ['dairy'] },
  { name: 'cheese wedge', emoji: '🧀', categories: ['dairy'] },

  // Fast Food
  { name: 'hamburger', emoji: '🍔', categories: ['fast_food'] },
  { name: 'french fries', emoji: '🍟', categories: ['fast_food'] },
  { name: 'hot dog', emoji: '🌭', categories: ['fast_food'] },
  { name: 'pizza', emoji: '🍕', categories: ['fast_food'] },
  { name: 'sandwich', emoji: '🥪', categories: ['fast_food'] },

  // Prepared Meals
  { name: 'curry', emoji: '🍛', categories: ['prepared_meals'] },
  { name: 'bento box', emoji: '🍱', categories: ['prepared_meals'] },
  { name: 'cooked dish', emoji: '🥘', categories: ['prepared_meals'] },
  { name: 'fondue', emoji: '🫕', categories: ['prepared_meals'] },
  { name: 'shallow pan of food', emoji: '🥘', categories: ['prepared_meals'] },
  { name: 'stuffed flatbread', emoji: '🥙', categories: ['prepared_meals'] },

  // Sweets & Desserts
  { name: 'ice cream', emoji: '🍨', categories: ['sweets_desserts'] },
  { name: 'shaved ice', emoji: '🍧', categories: ['sweets_desserts'] },
  { name: 'soft ice cream', emoji: '🍦', categories: ['sweets_desserts'] },
  { name: 'doughnut', emoji: '🍩', categories: ['sweets_desserts'] },
  { name: 'cookie', emoji: '🍪', categories: ['sweets_desserts'] },
  { name: 'birthday cake', emoji: '🎂', categories: ['sweets_desserts'] },
  { name: 'shortcake', emoji: '🍰', categories: ['sweets_desserts'] },
  { name: 'cupcake', emoji: '🧁', categories: ['sweets_desserts'] },
  { name: 'chocolate bar', emoji: '🍫', categories: ['sweets_desserts'] },
  { name: 'candy', emoji: '🍬', categories: ['sweets_desserts'] },
  { name: 'lollipop', emoji: '🍭', categories: ['sweets_desserts'] },
  { name: 'custard', emoji: '🍮', categories: ['sweets_desserts'] },
  { name: 'honey', emoji: '🍯', categories: ['sweets_desserts'] },

  // Alcoholic Drinks
  { name: 'glass of wine', emoji: '🍷', categories: ['alcoholic_drinks'] },
  { name: 'cocktail glass', emoji: '🍸', categories: ['alcoholic_drinks'] },
  { name: 'tropical drink', emoji: '🍹', categories: ['alcoholic_drinks'] },
  { name: 'beer', emoji: '🍺', categories: ['alcoholic_drinks'] },
  // { name: 'clinking beer mugs', emoji: '🍻', categories: ['alcoholic_drinks'] },
  // { name: 'clinking glasses', emoji: '🥂', categories: ['alcoholic_drinks'] },
  { name: 'tumbler glass', emoji: '🥃', categories: ['alcoholic_drinks'] },

  // Non-Alcoholic Drinks
  {
    name: 'tea',
    emoji: '🍵',
    categories: ['non_alcoholic_drinks'],
  },
  { name: 'coffee', emoji: '☕', categories: ['non_alcoholic_drinks'] },
  { name: 'cup with straw', emoji: '🥤', categories: ['non_alcoholic_drinks'] },
  { name: 'beverage box', emoji: '🧃', categories: ['non_alcoholic_drinks'] },
  { name: 'bubble tea', emoji: '🧋', categories: ['non_alcoholic_drinks'] },
  {
    name: 'bottle of water',
    emoji: '🍼',
    categories: ['non_alcoholic_drinks'],
  },

  // Misc
  { name: 'salt', emoji: '🧂', categories: ['misc'] },
  // { name: 'spoon', emoji: '🥄', categories: ['misc'] },
  // { name: 'fork and knife', emoji: '🍴', categories: ['misc'] },
  // { name: 'fork and knife with plate', emoji: '🍽️', categories: ['misc'] },
]
