import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author2Alt: 'Jane Smith, Teacher',
  author3Position: 'Sign Language Interpreter',
  author3Src:
    'https://images.unsplash.com/photo-1702482527875-e16d07f0d91b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjIyMjg0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  review3:
    'I use this sign language translator in my daily work, and it has significantly enhanced my ability to communicate effectively with my clients.',
  author4Position: 'Parent of a Deaf Child',
  author1Alt: 'John Doe, CEO of Company ABC',
  author2Position: 'Teacher',
  author4Src:
    'https://images.unsplash.com/photo-1627843221135-995cc6e9f723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjIyMjg0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Testimonials',
  content1:
    'See what our users have to say about their experience with our sign language translator.',
  author1Position: 'CEO, Company ABC',
  review4:
    'Having a deaf child can be challenging, but this translator has made it easier for me to understand and communicate with my child. Thank you!',
  author2Name: 'Jane Smith',
  author4Alt: 'Sarah Lee, Parent of a Deaf Child',
  author3Alt: 'David Johnson, Sign Language Interpreter',
  review1:
    'The sign language translator has been a game-changer for our organization. It has improved communication with our hearing-impaired employees and clients.',
  author1Name: 'John Doe',
  author2Src:
    'https://images.unsplash.com/photo-1536331307320-5316320e97cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjIyMjg0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Src:
    'https://images.unsplash.com/photo-1531854253260-44f0d06e3d26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjIyMjg0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  review2:
    'As a teacher working with students who are deaf or hard of hearing, this tool has been invaluable in bridging the communication gap in the classroom.',
  author4Name: 'Sarah Lee',
  author3Name: 'David Johnson',
}

Testimonial.propTypes = {
  author2Alt: PropTypes.string,
  author3Position: PropTypes.string,
  author3Src: PropTypes.string,
  review3: PropTypes.string,
  author4Position: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Position: PropTypes.string,
  author4Src: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  author1Position: PropTypes.string,
  review4: PropTypes.string,
  author2Name: PropTypes.string,
  author4Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  review1: PropTypes.string,
  author1Name: PropTypes.string,
  author2Src: PropTypes.string,
  author1Src: PropTypes.string,
  review2: PropTypes.string,
  author4Name: PropTypes.string,
  author3Name: PropTypes.string,
}

export default Testimonial
