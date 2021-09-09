import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMediumM, faGithub  } from '@fortawesome/free-brands-svg-icons'
import { Footer, Button, Svg } from './Footer-Styles'

export default props => 
  <Footer>
    <Button 
      href={`https://github.com/funador/${props.githubRepo}`}
      title='Github repo'
      provider='github'
    >
      <Svg>
        <FontAwesomeIcon icon={faGithub} size='3x' color='#fff' />
      </Svg>
    </Button>
  </Footer>