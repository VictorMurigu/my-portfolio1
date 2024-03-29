import { Link } from 'react-scroll';


const Intro = () => {
    return (
      <section id="intro">
            <div className="introContent">
                <span className="hello">Hello, </span>
                <span className="introText">I'm
                    <span className="introName"> Victor</span><br />
                    <span className="introProfile">Website Designer</span>
                </span>
                <p className='introParagraph'>I am a skilled and passionate web designer<br /> with experience in creating visually appealing<br /> and user-friendly websites</p>
                
                <Link to="contacts" spy={true} smooth={true} offset={-80} duration={200}>
                    <button className='hire-Btn'>
                        Hire me   
                    </button>
                </Link>
                
                    
                
            </div>
            <div>
                <img src="./images/myimg2.png" alt="profile" className="profileImg"/>

            </div>
            
      </section>
   
  )
}

export default Intro
