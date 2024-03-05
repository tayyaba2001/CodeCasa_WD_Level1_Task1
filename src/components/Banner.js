import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/37673.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Banner(){
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "React Web Developer", "Python programmer", "Software Engineer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
/*
Inside the if (isDeleting) block, setDelta(prevDelta => prevDelta / 2) is called. 
This line of code updates the delta state variable, which controls the speed of the ticker effect.
By halving the value of delta, the effect of the ticker animation speeds up when deleting characters. This means the characters will disappear more quickly from the screen.

if (isDeleting):
This condition checks if isDeleting is true.
If true, it reduces the delta by half (setDelta(prevDelta => prevDelta / 2)).
if (!isDeleting && updatedText === fullText):

This condition checks if isDeleting is false and if updatedText equals fullText.
If true, it:
Sets isDeleting to true (setIsDeleting(true)).
Decreases the index by 1 (setIndex(prevIndex => prevIndex - 1)).
Resets delta to the initial value of period.
else if (isDeleting && updatedText === ''):

This condition checks if isDeleting is true and if updatedText 
is an empty string.
If true, it:
Sets isDeleting to false (setIsDeleting(false)).
Increases loopNum by 1 (setLoopNum(loopNum + 1)).
Resets index to 1.
Sets delta to 500.
else:

If none of the above conditions are met, it:
Increases the index by 1 (setIndex(prevIndex => prevIndex + 1)).




xs={12} means that the column will take up the full width of the screen 
on extra small devices (like phones) with a grid size of 12 columns.
md={6} means that the column will take up half the width of the screen on medium devices
 (like tablets) with a grid size of 12 columns.
xl={5} means that the column will take up 5/12th of the width of the screen on extra large
 devices (like desktops) with a grid size of 12 columns.
*/
  return (
   <>
    <section className="banner" id="home">
         <br /> <br /> <br /> <br /> <br />
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Tayyaba`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I'm a dedicated web developer with a keen interest in exploring the latest trends and technologies in the ever-evolving world of web development.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section></>
  );
}
export default Banner;