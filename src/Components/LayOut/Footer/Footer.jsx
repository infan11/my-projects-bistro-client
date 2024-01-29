import { useState } from "react";

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
      const mailtoLink = `mailto:infanjiounrahman20606@gmail.com?subject=Subscribe&body=Please subscribe me to your newsletter.%0D%0A%0D%0AEmail: ${email}`;
      window.location.href = mailtoLink;
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn btn-primary join-item" onClick={handleSubscribe}>
        Subscribe
      </button>
    </div>
    </fieldset>
  </form>
</footer>
        </div>
    );
};

export default Footer;