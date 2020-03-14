import React from 'react'
import './menu-item.component.styles.scss'

const MenuItem = ({ title, subtitle, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
  <div style={{ backgroundImage: `url(${imageUrl})` }} className='background-image'/>
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>{subtitle}</span>
    </div>
  </div>
)

export default MenuItem
