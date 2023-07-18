import { motion , AnimatePresence} from 'framer-motion';
import { useSnapshot } from 'valtio';
import { CustomButton } from '../components';
import state from '../store';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';
const Home = () => {

  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img 
              src='./threejs.png'
              alt="logo"
              className='w-8 h-8 object-contain'
            />
          </motion.header>
          
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                LET'S <br className='xl:block hidden' /> DO IT.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className='flex flex-col gap-5'
            >
              <p className='max-w-md font-normal text-gray-600 text-base'>
                Looking for a way to create you unique and exclusive T-shirt?
                Our brand new customization tool is here to help.
                <strong>Unleash your Imagination</strong>{" "}
                and define who you are.
              </p>
              <CustomButton 
                type="filled"
                title="Let's get Started"
                handleClick={() => state.intro=false}
                customStyles='w-fit px-4 py-2.5 font-bold text-sm'
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home