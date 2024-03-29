import './styles/main.css'
import logoImg from './assets/logonlw.png'
import { MagnifyingGlassPlus, ArrowRight, ArrowLeft } from 'phosphor-react'

function App() {
  return (

    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img className='max-w-[500px]' src={logoImg} alt='logo' />

      <h1 className='text-6xl text-white font-black mt-20'>Seu
        <span className='bg-nlw-gradient bg-clip-text text-transparent'> duo</span> está aqui
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16 relative'>

        <a href="" className='relative rounded-l overflow-hidden'>
          <img className='transition-all hover:scale-110' src="/jogo1.png" alt="" />

          <div className='w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0'>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 block mt-1'>4 anúncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-l overflow-hidden'>
          <img className='transition-all hover:scale-110' src="/jogo2.png" alt="" />

          <div className='w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-l overflow-hidden'>
          <img className='transition-all hover:scale-110' src="/jogo3.png" alt="" />

          <div className='w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0'>
            <strong className='font-bold text-white block'>Counter - Strike</strong>
            <span className='text-zinc-300 block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-l overflow-hidden'>
          <img className='transition-all hover:scale-110' src="/jogo4.png" alt="" />

          <div className='w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0'>
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <span className='text-zinc-300 block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-l overflow-hidden'>
          <img className='transition-all hover:scale-110' src="/jogo5.png" alt="" />

          <div className='w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-zinc-300 block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-l overflow-hidden'>
          <img className='transition-all hover:scale-110' src="/jogo6.png" alt="" />

          <div className='w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0'>
            <strong className='font-bold text-white block'>World of War Craft</strong>
            <span className='text-zinc-300 block mt-1'>4 anúncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou o seu duo</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players</span>
          </div>
          <button className='bg-violet-500 py-3 px-4 hover:bg-violet-600 transition-all text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anuncio</button>
        </div>
      </div>
    </div>
  )
}

export default App
