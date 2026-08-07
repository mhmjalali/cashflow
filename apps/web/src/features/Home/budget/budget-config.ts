import {
  Car,
  Utensils,
  Shirt,
  HeartPulse,
  Landmark,
  Gamepad2,
  Home,
  CreditCard,
  MoreHorizontal,
} from 'lucide-react';

export const budgetCategories = [
  { key: 'transport', label: 'حمل و نقل', icon: Car, color: '#1d4ed8' },
  { key: 'food', label: 'خوراک', icon: Utensils, color: '#f59e0b' },
  { key: 'clothing', label: 'پوشاک', icon: Shirt, color: '#7c3aed' },
  {
    key: 'health',
    label: 'بهداشت و درمان',
    icon: HeartPulse,
    color: '#dc2626',
  },
  { key: 'debt', label: 'قرض', icon: Landmark, color: '#0891b2' },
  { key: 'fun', label: 'تفریح', icon: Gamepad2, color: '#db2777' },
  { key: 'home', label: 'خانه', icon: Home, color: '#334155' },
  { key: 'installment', label: 'قسط', icon: CreditCard, color: '#b45309' },
  { key: 'other', label: 'سایر', icon: MoreHorizontal, color: '#64748b' },
] as const;

export type BudgetCategoryKey = (typeof budgetCategories)[number]['key'];

export const fakeBudgetData: Record<
  BudgetCategoryKey,
  { total: number; used: number }
> = {
  transport: { total: 5000000, used: 3200000 },
  food: { total: 12000000, used: 9800000 },
  clothing: { total: 4000000, used: 1500000 },
  health: { total: 6000000, used: 2000000 },
  debt: { total: 10000000, used: 10000000 },
  fun: { total: 3000000, used: 2700000 },
  home: { total: 15000000, used: 11000000 },
  installment: { total: 8000000, used: 8000000 },
  other: { total: 2000000, used: 900000 },
};
