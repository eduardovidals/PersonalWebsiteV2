interface MenuItemLink {
  type: 'simple',
  title: string,
  url?: string,
  menuItems?: INavMenuItem[],
}

interface MenuItemImage {
  type: 'image',
  url?: string,
  menuItems?: INavMenuItem[]
}

interface MenuItemTheme {
  type: 'theme',
  menuItems?: INavMenuItem[]
}

export type INavMenuItem = MenuItemLink | MenuItemImage | MenuItemTheme;
