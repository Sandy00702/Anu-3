"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Heart, Sparkles, Gift, Cake } from "lucide-react"

export default function BirthdayCelebration() {
  const [isCardOpen, setIsCardOpen] = useState(false)

  return (
    <div className="flex flex-col items-center px-4">
      {/* Heading */}
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.3,
        }}
        className="relative mb-2 text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-pink-600 mb-2">Happy Birthday!</h1>
        <div className="flex justify-center gap-3">
          <Cake className="w-8 h-8 text-pink-500" />
          <Sparkles className="w-8 h-8 text-yellow-500" />
          <Heart className="w-8 h-8 text-pink-500" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-pink-600 mt-2">To My Fav Jellyfish</h3>
      </motion.div>

      {/* Birthday Card */}
      <motion.div
        className="w-full max-w-md mx-auto my-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div
          className={`relative cursor-pointer transition-all duration-700 ease-in-out transform ${isCardOpen ? "rotate-0" : "rotate-2"
            }`}
          onClick={() => setIsCardOpen(!isCardOpen)}
        >
          {/* Card Outer Cover */}
          <div
            className={`bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl p-14 sm:p-10 shadow-lg transition-all duration-700 transform ${isCardOpen ? "scale-95" : "scale-100"
              }`}
          >
            <div className="absolute top-2 right-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-yellow-200" />
              </motion.div>
            </div>

            <div className="text-center text-white">
              <p className="text-lg font-medium mb-4">
                Tap to {isCardOpen ? "close" : "open"} your card
              </p>
              <div className="flex justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Gift className="w-14 h-14 text-white" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Card Inner Message */}
          <AnimatePresence>
            {isCardOpen && (
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl px-6 py-8 sm:px-10 shadow-xl shadow-rose-100 w-fit max-w-[90%] text-center z-10"
                initial={{ rotate: 2, rotateX: -90, opacity: 0 }}
                animate={{
                  rotate: 0,
                  rotateX: 0,
                  opacity: 1,
                }}
                exit={{ rotateX: -90, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-purple-700 mb-3">
                  Just wanted to remind you—you're my favorite person. My days are better, smiles are wider, and life is sweeter because of you.
                </p>
                <p className="text-pink-600 font-medium mb-2">
                  I hope your birthday is full of love, magic, and everything that makes you smile 💖
                </p>
                <a
                  href="https://drive.google.com/file/d/1uz4zVPH_LQmOvZBsSZBHpU9Mg9UWwoRw/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 font-medium underline block mb-4"
                >
                  Click me, I have a small surprise for you
                </a>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart className="w-8 h-8 stroke-none fill-rose-500 mx-auto" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Final Message */}
      <motion.div
        className="w-full max-w-md mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="text-center">
          <p className="text-lg text-purple-700 mb-4">
            May every wish you make today come true. You deserve the world, and I’ll always be here to remind you of that.
          </p>
          <p className="text-pink-600 font-medium">
            Let’s always stay like this... together, forever 🫶
          </p>
        </div>
      </motion.div>
    </div>
  )
}
