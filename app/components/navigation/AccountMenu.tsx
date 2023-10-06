const AccountMenu = () => {
  const menuItems = ['My Profile', 'Orders', 'Returns', 'Settings', 'Help', 'Contact', 'About us']
  return (
    <nav>
      <ul>
        {menuItems.map(item => <li>{item}</li>)}
        <div>
          <li>Log Out</li>
        </div>
      </ul>
    </nav>
  )
}

export default AccountMenu
