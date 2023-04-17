import { useAppDispatch, useAppSelector } from 'store/hooks'
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { showDrawer } from 'store/slices/drawer/drawer.slice'
import { NavMobileContainer, NavMobileItem } from 'components/layout/NavMobile/NavMobile.styles'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import WorkIcon from '@mui/icons-material/Work'
import EmailIcon from '@mui/icons-material/Email'

interface NavListItem {
  name: string,
  icon: React.ReactNode
}

function NavMobile() {
  const open = useAppSelector(state => state.drawer)
  const dispatch = useAppDispatch()

  const listItems: NavListItem[] = [
    { name: 'Home', icon: <HomeIcon /> },
    { name: 'About', icon: <InfoIcon /> },
    { name: 'Skills', icon: <WbIncandescentIcon style={{transform: 'rotate(180deg)', marginBottom: '5px'}} /> },
    { name: 'Projects', icon: <WorkIcon /> },
    { name: 'Contact', icon: <EmailIcon /> },
  ]

  return (
    <Drawer open={open}
            onClose={() => dispatch(showDrawer(false))} sx={{ zIndex: 1 }}
    >
      <Box component="div" style={{ height: '70px' }} />
      <NavMobileContainer>
        <List sx={{ p: 0 }}>
          {
            listItems.map((navItem, index) => {
              return (
                <ListItem key={`nav-item-${index}`} disablePadding onClick={() => dispatch(showDrawer(false))}>
                  <NavMobileItem to={`/#${navItem.name.toLowerCase()}`}>
                    <ListItemButton>
                      <ListItemIcon>
                        {navItem.icon}
                      </ListItemIcon>
                      <ListItemText primary={navItem.name} />
                    </ListItemButton>
                  </NavMobileItem>
                </ListItem>
              )
            })
          }
        </List>
      </NavMobileContainer>
    </Drawer>
  )
}

export default NavMobile
