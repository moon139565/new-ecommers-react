
import { styled } from 'styled-components';
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';
import { FaDiscord, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>
            <div>
              <Button>
                <NavLink to="/contact">Get started</NavLink>
              </Button>
            </div>
          </div>
        </section>


        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>moon</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </div>

            <div className="footer-subscribe">
              <h3>subscribe to get important pruducts</h3>
              <form action="#">
                <input type="email" name="email" placeholder='email' />
                <input type="submit" value="subscribe" />
              </form>
            </div>

            <div className='footer-social'>
              <h3>follow us</h3>
              <div className="footer-social-icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaLinkedin className="icons" />
                </div>
                <div>
                  <NavLink to="https://www.instagram.com/mrmoon15/" target='_blank' ><FaInstagram className="icons" /></NavLink>
                </div>
              </div>
            </div>

            <div className='footer-contact'>
              <h3>Help Line</h3>
              <h3><a href="tel:01303207353">+880 01303207353</a></h3>
            </div>
          </div>

          <div className="footer-bottom-section">
            <hr />
            <div className="container grid grid-two-column">
              <p>&copy; {new Date().getFullYear()} moon. All Right Reserved</p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social-icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;

        }
      }
    }
  }
  .footer-contact a{
    color: white;
  }

  .footer-bottom-section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom-section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer