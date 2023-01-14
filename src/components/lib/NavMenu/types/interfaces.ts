interface MenuItemLink {
  type: 'simple',
  title: string,
  url?: string,
  externalUrl?: boolean,
  menuItems?: INavMenuItem[],
}

interface MenuItemImage {
  type: 'image',
  url?: string,
  externalUrl?: boolean,
  menuItems?: INavMenuItem[]
}

export type INavMenuItem = MenuItemLink | MenuItemImage;
