import frameImage from '../assets/frame.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from 'react-icons/fc'

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {

  return (
    <div className='flex justify-between w-11/12 max-w-290 py-12 mx-auto gap-x-12 gap-y-0'>

        <div className='w-11/12 max-w-112.5'>
            <h1 className='text-[rgb(241,242,255)] font-semibold text-[1.875rem] leading-9.5'>{title}</h1>
            <p className='text-[1.125rem] leading-6.5 mt-4'>
                <span className='text-[rgb(135,142,149)]'>{desc1}</span>
                <br />
                <span className='italic text-blue-200'>{desc2}</span>
            </p>

            {formtype === 'signup'?
            (<SignupForm setIsLoggedIn={setIsLoggedIn} />):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='h-px w-full bg-[rgb(135,142,149)]'></div> 
                <p className='text-[rgb(135,142,149)] font-medium leading-5.5 '>OR</p>
                <div className='h-px w-full bg-[rgb(135,142,149)]'></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-lg font-medium text-[rgb(241,242,255)] border border-[rgb(135,142,149)] px-3 py-2 gap-x-2 mt-6 cursor-pointer'>
                <FcGoogle />
                <p>Sign In with Google</p>
            </button>
        </div>

        <div className='relative w-11/12 max-w-112.5'>
            <img src={frameImage} alt='Pattern' width={558} height={504} loading="lazy" />

            <img src={image} alt='Students' width={558} height={490} loading='lazy'
            className='absolute -top-4 right-4'
            />
        </div>
 
    </div>
  )
}

export default Template