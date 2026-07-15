import './SplashScreen.css'
import { motion } from 'framer-motion'
import { useLottie } from 'lottie-react'
import animationData from '../../assets/lottie/splashAnimation.json'

export default function SplashScreen() {
  const { View } = useLottie({
    animationData,
    loop: true,
    autoplay: true,
  })

  return (
    <motion.div
      className="splash-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <div className="splash-animation-container">
        {View}
      </div>

      <div className="splash-title-container">
        <span className="grey-color">&lt;</span>
        <span className="splash-title">Nolan Young</span>
        <span className="grey-color">/&gt;</span>
      </div>
    </motion.div>
  )
}
