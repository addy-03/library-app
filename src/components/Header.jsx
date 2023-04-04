const Header = () => {
  const toggleLogin = () => {
    let loginEl = document.getElementsByClassName("login-modal-container")[0];
    console.log(loginEl);
    loginEl.classList.toggle("modal-hidden");
  };

  return (
    <header>
      <h1>Library App</h1>
      <button className="manage-btn">Manage</button>
      <div className="profile">
        <button onClick={toggleLogin}>Login / SignUp</button>
        <div className="user">UserName</div>
        <button>Logout</button>
      </div>
    </header>
  );
};

export default Header;
