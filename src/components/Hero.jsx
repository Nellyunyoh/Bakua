import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <h1>Empowering creators to Earn More</h1>

     <div className="tags">
  <span className="tag monetise">Monetise</span>
  <span className="tag gigs">Gigs</span>
  <span className="tag savings">Savings</span>
  <span className="tag loans">Loans</span>
</div>


      <p className="get-app">GET THE APP</p>

     <div className="stores">

        <img src="/google-play.png" alt="App Store" className="store-logo" />
        <img src="/appstore.png" alt="Play Store" className="store-logo" />
 

</div>


    </section>
  );
}

export default Hero;
