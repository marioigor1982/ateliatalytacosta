export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  category: 'earring' | 'necklace';
}

export type SectionRefs = {
  home: React.RefObject<HTMLDivElement>;
  about: React.RefObject<HTMLDivElement>;
  products: React.RefObject<HTMLDivElement>;
  contact: React.RefObject<HTMLDivElement>;
};
