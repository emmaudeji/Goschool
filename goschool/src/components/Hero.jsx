import {Heading } from '../components'

const Hero = () => {
  return (
    <div><section className='hero'>
        <div className='section-container'>
          <div className='section-row'>
            <Heading subtitle='WELCOME TO GOSCHOOL' title='Education made easy and accessible' />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div></div>
  )
}

export default Hero