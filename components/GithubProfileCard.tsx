import React from 'react';
import { Card, Col, Row, Container } from 'reactstrap';
import { GithubUserType } from '../types';
import SocialLinks from './SocialLinks';
import { contactMessage } from '../portfolio';

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <section id="githubCard">
      <Card className="section-lg bg-gradient-blue shadow-lg border-0">
        <Container>
          <div className="p-2">
            <Row className="">
              <Col className="order-lg-2" lg="4">
                <img
                  src={avatar_url}
                  style={{ width: '200px' }}
                  alt=""
                  className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
                />
              </Col>
              <Col lg="8" className="order-lg-1">
                <h2 className="text-white">{contactMessage}</h2>
                <p className="text-white mt-3">{bio}</p>
                <div className="my-3 icon-shape bg-gradient-white shadow rounded text-blue">
                  <i className="ni ni-pin-3 text-blue mr-2" />
                  {location}
                </div>
                <SocialLinks />
              </Col>
            </Row>
          </div>
        </Container>
      </Card>
    </section>
  );
};

export default GithubProfileCard;
