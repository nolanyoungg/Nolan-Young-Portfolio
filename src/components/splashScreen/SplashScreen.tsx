import './SplashScreen.css'
import { useLottie } from 'lottie-react'
import animationData from '../../assets/lottie/splashAnimation.json'

export default function SplashScreen() {
  const { View } = useLottie({
    animationData,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
      progressiveLoad: true,
    },
  })

  return (
    <div className="splash-container">
      <div className="splash-animation-container">
        {View}
      </div>

      <div className="splash-title-container">
        <span className="grey-color">&lt;</span>
        <span className="splash-title">Nolan Young</span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  )
}
