export interface MenuItem {
  name: string;
  description: string;
  image?: string;
}

export interface MenuSection {
  title: string;
  section: MenuItem[];
  description: string;
}
