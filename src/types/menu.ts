export interface MenuItem {
  name: string;
  description: string;
  image?: string;
}

export interface MenuSection {
  section: MenuItem[];
  description: string;
}
