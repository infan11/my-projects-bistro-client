

const Footer = () => {
  const handleButtonClick = () => {
    const gmailComposeLink = 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new';
    window.open(gmailComposeLink, '_blank');
  };
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form>
    <h6 className="footer-title">Newsletter</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
      <input
        type="text"
        placeholder="username@site.com"
        className="input input-bordered join-item"
       
     
      />
      <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">
      <button className="btn btn-primary join-item" onClick={handleButtonClick}>
        Subscribe
      </button>
    </a>
    </div>
    </fieldset>
  </form>
</footer>
        </div>
    );
};

export default Footer;