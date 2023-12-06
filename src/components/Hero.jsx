import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logo} alt="logo" className='w-16 object-contain' />
            <button type='button' onClick={() => {
                window.open('https://github.com/tanishkarao16')
            }} className='black_btn'>
                GitHub
            </button>
        </nav>

        <h1 className="head_text">
            Summarize articles with <br className='max-md:hidden' /> 
            <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className="desc">
        Streamline your reading experience with Summize—a revolutionary open-source article summarizer that magically condenses lengthy articles into crisp, easy-to-digest summaries.
        </h2>

    </header>
  )
}

export default Hero;
