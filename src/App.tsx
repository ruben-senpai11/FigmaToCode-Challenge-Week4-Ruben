import { useState } from 'react';
import './App.css'
import ThemePopover from './components/ThemePopover';

import logoImg from "./assets/logo 1 (1).svg"
import blackLogoImg from "./assets/logo 1.svg"
import downloadImg from "./assets/download.svg"
import groundImg from "./assets/Rectangle 38.png"
import facebook from "./assets/Button (1).png"
import reddit from "./assets/Button.png"
import twitter from "./assets/Button (2).png"
import discord from "./assets/Button (3).png"
import moreIcon from "./assets/Read More.svg"
import blackMoreIcon from "./assets/Read More Black.svg"
import evrenIllustration from "./assets/evren-illustration.svg"
import evrenMobile from "./assets/Frame 20.png"
import aboutIllustration from "./assets/Group 1000015845.png"
import mobileAbout from "./assets/column.png"
import project1Image from "./assets/image 771.png"
import project1ImageMobile from "./assets/mimage 771.png"
import project2Image from "./assets/image 770.png"
import project2ImageMobile from "./assets/mimage 7712.png"
import project3Image from "./assets/image 770 (1).png"
import project3ImageMobile from "./assets/mimage 7713.png"
import evrenTestimonial from "./assets/Frame 18.png"
import floraTestimonial from "./assets/Frame 18 (1).png"
import menuIcon from "./assets/Vector.svg"

import Skill from "./components/skill"
import gitIcon from "./assets/icon-git.png"
import javscriptIcon from "./assets/icon-javscript.png"
import saasIcon from "./assets/icon-sass.png"
import nextIcon from "./assets/icon-nest.png"
import storybookIcon from "./assets/icon-storybook.png"
import socketIcon from "./assets/icon-socket.png"
import googleLogo from "./assets/google.png"
import youtubeLogo from "./assets/youtube.svg"
import applleLogo from "./assets/apple.svg"

function App() {
  const userTheme:string|null = localStorage.getItem("theme");

  const [mobileNav, setmobileNav] = useState(false);
  
  const toogleMenu = ()=>{
    if (mobileNav == false){
      setmobileNav(true)
    }else{
      setmobileNav(false)
    }
  }
  const setNavFalse =()=>{
    setmobileNav(false)
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional smooth scrolling behavior
    });
  }

  return (
    <>
      <nav className='header d-flex space-between'>
        <div className="logo d-flex">
          <img src={logoImg} alt="logo" />
          <h5>Personal</h5>
        </div>
        <ul className={(mobileNav == true ? 'mobile-menu ' : '') + 'nav-links d-flex space-between gap-32'}>
          <li onClick={setNavFalse} >About me</li>
          <li onClick={setNavFalse} >Skills</li>
          <li onClick={setNavFalse} >Project</li>
          <li onClick={setNavFalse} >Contact me</li>
        </ul>
        <div className="nav-cta">
          <button className="cta">
            Resume
            <img src={downloadImg} alt="download" />
          </button>
        </div>
        <div className="menu-icons">
            <img src={menuIcon} alt="menuIcon"  className='menuIcon' onClick={toogleMenu} />
          </div>
      </nav>
      <section className="hero d-flex align-center">
        <div className="container">
          <div className="evren d-flex space-between">
            <div className="infos flex-column gap-32">
              <div className="infos-texts flex-column gap-28">
                <h4 className='d-flex gap-16'><span className="f-400">Hello I'am </span><span className="f-800"> Evren Shah.</span></h4>
                <h4 className='d-flex gap-16'><span className="f-800">Frontend </span><span className="f-800 text-outlined">Developer</span></h4>
                <h4 className='d-flex gap-16'><span className="f-400">Based In </span><span className="f-800"> India.</span></h4>
                <p className="light-text-gray text-gray">I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
              </div>
            </div>
            <div className="hero-illustration">
              <img src={evrenIllustration} alt="" className='desktop-tablet' />
              <img src={evrenMobile} alt="" className='s-mobile' />
            </div>
          </div>
          <div className="media-and-ground d-flex gap-32 space-between align-center">
            <div className="media d-flex gap-32 ">
              <img src={facebook} alt="social media" />
              <img src={reddit} alt="social media" />
              <img src={twitter} alt="social media" />
              <img src={discord} alt="social media" />
            </div>
            <div className="ground">
              <img src={groundImg} alt="illustration-ground" />
            </div>
          </div>
        </div>
      </section>
      <section className="skills">
        <div className="container d-flex flex-column justify-center gap-32">
          <h2 className='d-flex gap-16'><span className="f-400">My</span><span className="f-800">Skills</span></h2>
          <div className="skills-container desktop">
            <div className="skills-row">
              <Skill skillIcon={gitIcon} skillLabel="Git" />
              <Skill skillIcon={javscriptIcon} skillLabel="Javascript" />
              <Skill skillIcon={saasIcon} skillLabel="Saas/Scss" />
              <Skill skillIcon={nextIcon} skillLabel="Next.Js" />
              <Skill skillIcon={storybookIcon} skillLabel="Storybook" />
            </div>
            <div className="skills-row">
              <Skill skillIcon={nextIcon} skillLabel="Next.Js" />
              <Skill skillIcon={gitIcon} skillLabel="Git" />
              <Skill skillIcon={storybookIcon} skillLabel="Storybook" />
              <Skill skillIcon={socketIcon} skillLabel="Socket.io" />
              <Skill skillIcon={saasIcon} skillLabel="Saas/Scss" />
            </div>
          </div>
          <div className="skills-container tablet">
            <div className="skills-row">
              <Skill skillIcon={gitIcon} skillLabel="Git" />
              <Skill skillIcon={javscriptIcon} skillLabel="Javascript" />
              <Skill skillIcon={saasIcon} skillLabel="Saas/Scss" />
              <Skill skillIcon={nextIcon} skillLabel="Next.Js" />
            </div>
            <div className="skills-row">
              <Skill skillIcon={storybookIcon} skillLabel="Storybook" />
              <Skill skillIcon={nextIcon} skillLabel="Next.Js" />
              <Skill skillIcon={gitIcon} skillLabel="Git" />
              <Skill skillIcon={storybookIcon} skillLabel="Storybook" />
              {/* <Skill skillIcon={socketIcon} skillLabel="Socket.io" />
              <Skill skillIcon={saasIcon} skillLabel="Saas/Scss" /> */}
            </div>
          </div>
          <div className="skills-container mobile">
            <div className="skills-row">
              <Skill skillIcon={gitIcon} skillLabel="Git" />
              <Skill skillIcon={javscriptIcon} skillLabel="Javascript" />
            </div>
            <div className="skills-row">
              <Skill skillIcon={saasIcon} skillLabel="Saas/Scss" />
              <Skill skillIcon={nextIcon} skillLabel="Next.Js" />
            </div>
            <div className="skills-row">
              <Skill skillIcon={storybookIcon} skillLabel="Storybook" />
              <Skill skillIcon={nextIcon} skillLabel="Next.Js" />
            </div>
            <div className="skills-row">
              <Skill skillIcon={gitIcon} skillLabel="Git" />
              <Skill skillIcon={storybookIcon} skillLabel="Storybook" />
            </div>
            <div className="skills-row">
              <Skill skillIcon={socketIcon} skillLabel="Socket.io" />
              <Skill skillIcon={saasIcon} skillLabel="Saas/Scss" />
            </div>
          </div>
        </div>
      </section>
      <section className="experience">
        <div className="black-container flex-column align-center">
          <h2 className='d-flex gap-16'><span className="f-400">My</span><span className="f-800">Experience</span></h2>
          <div className="enterprises flex-column gap-32">
            <div className="enterprise flex-column gap-28">
              <div className="enterprise-label d-flex space-between">
                <span className="d-flex gap-16">
                  <img src={googleLogo} alt="Google Logo" />
                  <h4 className="">Lead Software Engineer at Google</h4>
                </span>
                <p className="text-gray f-600">Nov 2019 - Present</p>
              </div>
              <h6 className="text-gray">
                As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.
              </h6>
            </div>
            <div className="enterprise flex-column gap-28 background-gray">
              <div className="enterprise-label d-flex space-between">
                <span className="d-flex gap-16">
                  <img src={youtubeLogo} alt="Google Logo" />
                  <h4 className="">Software Engineer at Youtube</h4>
                </span>
                <p className="text-gray f-600">Jan 2017 - Oct 2019</p>
              </div>
              <h6 className="text-gray">
                At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.
              </h6>
            </div>
            <div className="enterprise flex-column gap-28">
              <div className="enterprise-label d-flex space-between">
                <span className="d-flex gap-16">
                  <img src={applleLogo} alt="Google Logo" />
                  <h4 className="">Junior Software Engineer at Apple</h4>
                </span>
                <p className="text-gray f-600">Jan 2016 - Dec 2017</p>
              </div>
              <h6 className="text-gray">
                During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.
              </h6>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container d-flex space-between gap-32">
          <div className="illustation-side">
            <img src={aboutIllustration} alt="Illustration" className='desktop'/>
            <img src={mobileAbout} alt="Illustration" className='mobile'/>
          </div>
          <div className="text-side">
            <h2 className='d-flex gap-16'><span className="f-400">About</span><span className="f-800">Me</span></h2>
            <div className="about-pitch flex-column gap-28">
              <p className="light-text-gray text-gray">I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
              <p className="light-text-gray text-gray">I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
              <p className="light-text-gray text-gray">When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="black-container flex-column align-center gap-32">
          <h2 className='d-flex gap-16'><span className="f-400">My</span><span className="f-800">Projects</span></h2>

          <div className="projects-container flex-column gap-48">
            <div className="project d-flex space-between gap-48">
              <div className="project-image d-flex">
                <img src={project1Image} alt="Project image" className='desktop'/>
                <img src={project1ImageMobile} alt="Project image" className='mobile'/>
              </div>
              <div className="project-infos flex-column gap-28">
                <h2>01</h2>
                <h3>Crypto Screener Application</h3>
                <p className="text-gray">I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                <img width={20} height={20} src={moreIcon} alt="More Icon" />
                <img width={20} height={20} src={blackMoreIcon} alt="More Icon" className='d-none' />
              </div>
            </div>
            <div className="project project-inverted d-flex space-between gap-48">
              <div className="project-image d-flex">
                <img src={project2Image} alt="Project image" className='desktop'/>
                <img src={project2ImageMobile} alt="Project image" className='mobile'/>
              </div>
              <div className="project-infos flex-column gap-28">
                <h2>02</h2>
                <h3>Euphoria - Ecommerce (Apparels) Website Template</h3>
                <p className="text-gray">I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book. <br /> when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                <img width={20} height={20} src={moreIcon} alt="More Icon" />
                <img width={20} height={20} src={blackMoreIcon} alt="More Icon" className='d-none' />
              </div>
            </div>
            <div className="project d-flex space-between gap-48">
              <div className="project-image d-flex">
                <img src={project3Image} alt="Project image" className='desktop'/>
                <img src={project3ImageMobile} alt="Project image" className='mobile'/>
              </div>
              <div className="project-infos flex-column gap-28">
                <h2>03</h2>
                <h3>Blog Website Template</h3>
                <p className="text-gray">I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                <img width={20} height={20} src={moreIcon} alt="More Icon" />
                <img width={20} height={20} src={blackMoreIcon} alt="More Icon" className='d-none' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <div className="container flex-column align-center">
          <h2 className='d-flex gap-16'><span className="f-400">My</span><span className="f-800">Testimonial</span></h2>
          <div className="testimonials d-flex space-between gap-16">
            <div className="testimonial flex-column align-center">
              <img width={96} height={96} src={evrenTestimonial} alt="Designer Image" />
              <p className="description">I recently had to jump on 10+ different calls across eight different countries to find the right owner.</p>
              <hr />
              <p className="name f-800">Evren Shah</p>
              <p className="role">Designer</p>
            </div>
            <div className="testimonial black-testimo flex-column align-center">
              <img width={96} height={96} src={floraTestimonial} alt="Designer Image" />
              <p className="description">I recently had to jump on 10+ different calls across eight different countries to find the right owner.</p>
              <hr />
              <p className="name f-800">Flora Sheen</p>
              <p className="role">Designer</p>
            </div>
            <div className="testimonial flex-column align-center">
              <img width={96} height={96} src={evrenTestimonial} alt="Designer Image" />
              <p className="description">I recently had to jump on 10+ different calls across eight different countries to find the right owner.</p>
              <hr />
              <p className="name f-800">Evren Shah</p>
              <p className="role">Designer</p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="container d-flex space-between gap-48">
          <div className="contact-form flex-column gap-20">
            <input type="text" name="name" id="" placeholder='Your name' />
            <input type="email" name="email" id="" placeholder='Email' />
            <input type="text" name="website" id="" placeholder='Your website (If exists)' />
            <textarea name="message" id="" placeholder='How can I help?*' aria-rowcount={4}></textarea>
            <div className="contact-buttons d-flex space-between">
              <button className="cta">Get in Touch</button>
              <div className="media d-flex gap-32 ">
                <img src={facebook} alt="social media" />
                <img src={reddit} alt="social media" />
                <img src={twitter} alt="social media" />
                <img src={discord} alt="social media" />
              </div>
            </div>
          </div>
          <div className="contact-infos flex-column gap-40">
            <h4 className=''><span className="f-800">Let's </span><span className="f-800 text-outlined">talk </span><span className="f-800">for Something special</span></h4>
            <p className="gray-text">I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
            <div className="flex-column gap-16">
              <h5><a href="https://mailto:albanhonfovou@gmail.com.com?subject=Get%20in%20touch&body=I%20saw%20your%20portfolio%20and%20I%20wanna%20book%20a%20journey" target='blank'>albanhonfovou@gmail.com</a></h5>
              <h5><a href="https://wa.me/+22996404757" target='blank'>+229 96404757</a></h5>
            </div>
          </div>
        </div>
      </section>
      <nav className="footer black-container">
        <div className="logo d-flex">
          <img src={blackLogoImg} alt="logo" />
          <h5>Personal</h5>
        </div>
        <div className="copyright flex-column">
          <p>@ 2019-2023 Personal</p>
          <p>Made In Figma</p>  
        </div>    
      </nav>
      <div className="theme-float">
        <ThemePopover/>
      </div>
    </>
  )
}

export default App
