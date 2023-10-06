import React from 'react'
import { styled } from 'styled-components'
import {NavLink} from 'react-router-dom'
import {Button} from '../styles/Button'

const HeroSection = ({myData}) => {
    const {name} = myData
  return (
    <Wrapper>
        <div className='container'>
            <div className="grid grid-two-column">
                <div className="hero-section-data">
                    <p className='intro-data'>Welcome to</p>
                    <h1>{name}</h1>
                    <p>
                    Everything we do is designed to rebuild self worth and independence, in order to break free from the cycle of disadvantage.
                    </p>
                    <NavLink>
                        <Button>shop now</Button>
                    </NavLink>
                </div>
                <div className="hero-section-video">
                    <video autoPlay loop className='hero-section-video'>
                        <source src="/Video/HeroVideo.mp4" />
                    </video>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
    padding: 12rem 0;

    .hero-section-data{
        p{
            margin: 2rem 0;
        }
        h1{
            text-transform: capitalize;
            font-weight: bold;
        }

        .intro-data{
            margin-bottom: 0;
        }

    }

    .hero-section-video{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .video-style{
        width: 100%;
        height: auto;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}){
        .grid{
            gap: 10rem;
        }
    }




`;
export default HeroSection