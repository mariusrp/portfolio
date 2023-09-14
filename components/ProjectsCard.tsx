import React from 'react';
import { Card, CardBody, Col, Button } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { ProjectType } from '../types/sections';

const ProjectsCard = ({
  name,
  desc,
  github,
  link,
  projectImg,
}: ProjectType) => {
  return (
    <Col lg="6">
      <Fade left duration={2000}>
        <Card className="shadow-lg--hover shadow mt-4 p-1">
          <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4">
                <h3>{name}</h3>
                <img
                  src={projectImg}
                  style={{
                    objectFit: 'cover',
                    left: 0,
                    right: 0,
                    top: '7rem',
                    marginBottom: '1rem',
                    marginTop: '1rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '24rem',
                    height: '14rem',
                  }}
                  className="shadow mb-3"
                  alt={name}
                />
                <p className="description mt-3">{desc}</p>
                {github ? (
                  <Button
                    className="btn-icon"
                    color="github"
                    href={github}
                    target="_blank"
                    rel="noopener"
                    aria-label="Github"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-github" />
                    </span>
                  </Button>
                ) : null}
                {link ? (
                  <Button
                    className="btn-icon"
                    color="success"
                    href={link}
                    target="_blank"
                    rel="noopener"
                    aria-label="Twitter"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-arrow-right mr-2" />
                    </span>
                    <span className="nav-link-inner--text ml-1">Demo</span>
                  </Button>
                ) : null}
              </div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
