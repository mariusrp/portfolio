import React, { use, useEffect } from 'react';
import { greetings } from '../portfolio';
import { Button, Container, Row, Col } from 'reactstrap';
import GreetingLottie from '../components/DisplayLottie';
import SocialLinks from '../components/SocialLinks';
import Typed from 'react-typed';
import { useScreenWidth } from '../utils';

const Greetings = () => {
  const screenWidth = useScreenWidth();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

  return (
    <main>
      <link
        href="https://fonts.googleapis.com/css2?family=Acme&display=swap"
        rel="stylesheet"
      ></link>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250 greetings">
          <div className="shape shape-style-1 bg-gradient-blue"></div>
          <Container className="py-lg-md d-flex">
            <div className="col px-0 greetings-padding">
              <Row>
                <Col lg="6">
                  <h1 className="display-3 text-white greetings-title">
                    {greetings.title + ' '}
                  </h1>
                  <p>
                    <strong className="text-slider">
                      <Typed
                        strings={greetings.jobTitle}
                        typeSpeed={80}
                        backDelay={1100}
                        backSpeed={30}
                        loop
                      />
                    </strong>
                  </p>
                  <SocialLinks />
                  {greetings.resumeLink && (
                    <div className="btn-wrapper my-4">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        href={greetings.resumeLink}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-file" />
                        </span>
                        <span className="btn-inner--text">See my CV</span>
                      </Button>
                    </div>
                  )}
                </Col>
                <Col lg="6">
                  <GreetingLottie animationPath="/lottie/coding.json" />
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Greetings;
