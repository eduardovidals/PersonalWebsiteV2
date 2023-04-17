import { MainChildContainer, MainContainer } from 'components/layout/Main/Main.styles'
import Header from 'components/layout/Header/Header'
import React from 'react'
import { useAppSelector } from 'store/hooks'
import NavMobile from 'components/layout/NavMobile/NavMobile'


interface MainProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[]
}

function Main(props: MainProps) {
  const { children, ...rest } = props

  return (
      <MainContainer>
        <MainChildContainer {...rest}>
          {children}
        </MainChildContainer>
      </MainContainer>
  )
}

export default Main
