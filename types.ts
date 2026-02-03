// types.ts

export enum AppRoute {
  HOME = 'home',
  CLOSET = 'closet',
  PLAN = 'plan',
  PROFILE = 'profile',
  STUDIO = 'studio',
  BAG = 'bag',
}

export interface NavItem {
  name: string;
  icon: string;
  route: AppRoute | string;
  fillIcon?: boolean;
}

export interface ClothingItem {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  source: 'mine' | 'store' | 'hybrid';
  price?: number;
  sku?: string;
  selected?: boolean; // For selection in grids
}

// New interface for a closet category
export interface ClosetCategory {
  name: string;
  items: ClothingItem[];
}

export interface LookSuggestion {
  id: string;
  name: string;
  occasion: string;
  matchScore: number;
  reasoning: string;
  imageUrl: string;
  items: ClothingItem[];
  tags: string[];
}

export interface BagItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export interface Brand {
  id: string;
  name: string;
  logoUrl?: string;
  isFavorite?: boolean;
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export interface UserProfile {
  name: string;
  email: string;
  height: string;
  weight: string;
  stylePreference: string;
  whatsapp: string;
  gender: Gender;
  avatarUrl: string;
}

export interface WeatherInfo {
  temperature: number;
  condition: string;
  recommendation: string;
}

export interface FeedbackOption {
  label: string;
  value: string;
}

// Atomic Design specific types
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'iconOnly' | 'chip';
export type InputType = 'text' | 'email' | 'password' | 'tel' | 'select';
export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'label' | 'small' | 'quote';
export type IconType = string; // Material Symbols icon name
