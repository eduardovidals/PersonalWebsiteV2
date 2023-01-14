import { INavMenuItem } from 'components/lib/NavMenu/types/interfaces'

export const menuItems:INavMenuItem[] = [
  {
    type: 'simple',
    title: 'Home',
    url: '',
  },
  {
    type: 'simple',
    title: 'About',
    url: 'about',
    menuItems: [
      {
        type: 'simple',
        title: 'home',
        url: 'home',
      }
    ]
  },
  {
    type: 'simple',
    title: 'Skills',
    url: 'skills'
  },
  {
    type: 'simple',
    title: 'Projects',
    url: 'projects'
  },
  {
    type: 'simple',
    title: 'Contact',
    url: 'contact'
  }
]
