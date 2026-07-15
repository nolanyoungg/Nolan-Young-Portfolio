import './SplashScreen.css'
import { useLottie } from 'lottie-react'
import animationData from '../../assets/lottie/splashAnimation.json'

export default function SplashScreen() {
  const { View } = useLottie({
    animationData,
    // The animation runs for 80 frames (about 1.33 seconds). Playing it once
    // prevents its first frame from popping back in before the 1.75 second
    // splash timeout completes.
    loop: false,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
      // Build every SVG layer before playback. The cube artwork introduces
      // layers as it animates, so progressive loading can look like a hitch.
      progressiveLoad: false,
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
