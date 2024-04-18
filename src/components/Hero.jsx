import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>

            <img src={logo} alt='pistechs_logo' className='w-28 object-contain'/>

            <button type='button'
            onClick={() => window.open('https://pistechs.co/')} className='black_btn'>
                Visit Us
            </button>
        </nav>

        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden'/>
            <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
<h2 className='desc'>
Streamline your reading with Pistechs Summerizer: your go-to open-source tool for transforming lengthy articles into snappy summaries! Say goodbye to information overload and hello to clear, concise content.
</h2>
    </header>
  )
}

export default Hero