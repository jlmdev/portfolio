import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

// import images
import bgMasthead from './components/img/bg-masthead.jpg'
import bgSignup from './components/img/bg-signup.jpg'
import ipad from './components/img/ipad.png'
import demo1 from './components/img/demo-image-01.jpg'
import demo2 from './components/img/demo-image-02.jpg'
import inventoryApp from './components/img/InventoryApp.png'
import reactoCatsHooks from './components/img/ReactoCatsHooks.png'
import party1989 from './components/img/Party1989.png'


function App() {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Portfolio</title>
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
        {/* <!-- Font Awesome icons (free version)--> */}
        <script src="https://use.fontawesome.com/releases/v5.13.0/js/all.js" crossOrigin="anonymous"></script>
        {/* <!-- Google fonts--> */}
        <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
        {/* <!-- Core theme CSS (includes Bootstrap)--> */}
        <link href="css/styles.css" rel="stylesheet" />
    </head>
    <body id="page-top">
        {/* <!-- Navigation--> */}
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">JLMANN</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* <!-- Masthead--> */}
        <header className="masthead">
            <div className="container d-flex h-100 align-items-center">
                <div className="mx-auto text-center">
                    <h1 className="mx-auto my-0 text-uppercase">Josh Mann</h1>
                    <h2 className="text-white-50 mx-auto mt-2 mb-5">Full-Stack Developer - IT Consultant</h2>
                    <a className="btn btn-primary js-scroll-trigger" href="#about">Get Started</a>
                </div>
            </div>
        </header>
        {/* <!-- About--> */}
        <section className="about-section text-center" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h2 className="text-white mb-4">Web Applications for all your devices</h2>
                        <p className="text-white-50">
                            Web applications designed to be accessible from your smartphone or tablet as well as a desktop system.
                        </p>
                    </div>
                </div>
                <img className="img-fluid" src={ipad} alt="" />
            </div>
        </section>
        {/* <!-- Projects--> */}
        <section className="projects-section bg-light" id="projects">
            <div className="container">
                {/* <!-- Featured Project Row--> */}
                <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src={inventoryApp} alt="" /></div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4><a href="http://jlmdev-inventory-app.herokuapp.com">Inventory App</a></h4>
                            <p className="text-black-50 mb-0">A C#/React proof of concept app to maintain an IT inventory optimized for smartphones and tablets. While it's intended for use on small devices, it will work on desktop browsers as well.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- Project One Row--> */}
                <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div className="col-lg-6"><img className="img-fluid" src={reactoCatsHooks} alt="" /></div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">Reactocats with Hooks</h4>
                                    <p className="mb-0 text-white-50">This was a fun homework assignment recreating the Octocats images at GitHub. All of these images are theirs. The project uses the API to fetch the data and render it on the page with React with Hooks. The page uses responsive design to change the sizing of the entries based on view width.</p>
                                    <hr className="d-none d-lg-block mb-0 ml-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Project Two Row--> */}
                <div className="row justify-content-center no-gutters">
                    <div className="col-lg-6"><img className="img-fluid" src={party1989} alt="" /></div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white"><a href="https://party-like-its-1989-no-hooks-joshmann.netlify.app">Party like it's 1989</a></h4>
                                    <p className="mb-0 text-white-50">This project uses an API to to connect to themoviedb.org and renders them with React. This assignment uses an '80s theme with retro text and formatting to look like it's from that era. The site also includes a search function to filter the display and features responsive design based on view width.</p>
                                    <hr className="d-none d-lg-block mb-0 mr-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Signup--> */}
        {/* <section className="signup-section" id="signup">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-lg-8 mx-auto text-center">
                        <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 className="text-white mb-5">Subscribe to receive updates!</h2>
                        <form className="form-inline d-flex">
                            <input className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" type="email" placeholder="Enter email address..." />
                            <button className="btn btn-primary mx-auto" type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </section> */}
        {/* <!-- Contact--> */}
        <section className="contact-section bg-black" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Location</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">Tampa, Florida</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50"><a href="mailto:josh@jlmann.com">josh@jlmann.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Phone</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">+1 (813) 784-6365</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="social d-flex justify-content-center">
                    <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
                </div> */}
            </div>
        </section>
        {/* <!-- Footer--> */}
        <footer className="footer bg-black small text-center text-white-50"><div className="container">jlmann.com 2020</div></footer>
        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Third party plugin JS--> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="js/scripts.js"></script>
    </body>
    </>
  )
}

export default App
