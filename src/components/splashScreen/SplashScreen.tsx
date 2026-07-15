import './SplashScreen.css'
import Lottie from 'lottie-react'
import animationData from '../../assets/lottie/splashAnimation.json'

export default function SplashScreen() {
  return (
    <div className="splash-container">
      <div className="splash-animation-container">
        <Lottie
          animationData={animationData}
          loop
          autoplay
        />
      </div>

      <div className="splash-title-container">
        <span className="grey-color">&lt;</span>
        <span className="splash-title">Nolan Young</span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  )
}
