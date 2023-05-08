import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const AdminNav = () => {
  return (
   <header className='admin_header'>
    <div className="admin_nav-top">
        <Container>
            <div className="admin_nav-wrapper-top">
                <div className="logo">
                    <h2>MariDonasi</h2>
                </div>
            </div>
        </Container>
    </div>
   </header>
  )
}

export default AdminNav