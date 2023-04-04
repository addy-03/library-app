const Header = () => {
  return (
    <header>
      <h1>Library App</h1>
      <button className="manage-btn">Manage</button>
      <div className="profile">
        <button>Login / SignUp</button>
        <div className="user">UserName</div>
        <button>Logout</button>
      </div>
    </header>
  );
};

export default Header;
