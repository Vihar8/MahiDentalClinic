import React from 'react'
import ContainerAdmin from '../commoncomponents/Container/ContainerAdmin'
import Wallets from '../components/Wallet/Wallets'

const Wallet = () => {
  return (
    <React.Fragment>
        <ContainerAdmin >
            <Wallets />
        </ContainerAdmin>
    </React.Fragment>
  )
}

export default Wallet
