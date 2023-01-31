import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"


function App() {

  useEffect(() => {
    Aos.init()
    Aos.refresh()
  }, [])

  return <>
    <div className="bg-black flex flex-col p-5 justify-center items-center">
      <div className="w-96 h-52 bg-white m-5 rounded-[20px] p-5" data-aos='fade-right'>
        <p data-aos="fade-up-right" className="text-center text-red-700">TESTE DE LETRAS ANIMATION</p>
      </div>
      <div className="w-96 h-52 bg-white m-5 rounded-[20px] p-5" data-aos='fade-right'>
        <p data-aos="fade-right"
          data-aos-offset="600"
          data-aos-easing="ease-in-sine" className="text-center text-blue-700">TESTE DE LETRAS ANIMATION</p>
      </div>
      <div className="w-96 h-52 bg-white m-5 rounded-[20px] p-5" data-aos='fade-down'></div>
      <div className="w-96 h-52 bg-white m-5 rounded-[20px] p-5" data-aos='fade-down'></div>
      <div className="w-96 h-52 bg-white m-5 rounded-[20px] p-5" data-aos='fade-down'></div>
      <div className="w-96 h-52 bg-white m-5 rounded-[20px] p-5" data-aos='fade-down'></div>
      <div className="w-96 h-52 bg-white m-5 rounded-[20px] p-5" data-aos='fade-down'></div>
      <div className="w-96 h-52 bg-white m-5 rounded-[20px] p-5" data-aos='fade-down'></div>
      <div className="w-96 h-52 bg-white m-5 rounded-[20px] p-5" data-aos='fade-down'></div>
      <div className="w-96 h-52 bg-white m-5 rounded-[20px] p-5" data-aos='fade-down'></div>
    </div>
  </>
}

export default App
