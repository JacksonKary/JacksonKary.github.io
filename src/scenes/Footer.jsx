import MediaIcons from '../components/MediaIcons';
import Underline from '../components/Underline';

function Footer() {
    return (
        <footer className='flex-col'>
            <div className='w-5/6 mx-auto'>
                <p className='font-semi font-montserrat text-2xl mt-7'>Jackson Kary</p>
                <Underline />
            </div>
            
            <div className="flex flex-row justify-evenly mb-12 pt-2">
                <div className="flex flex-col justify-center  items-center">
                    <MediaIcons iconSize={"30px"}/>
                </div>
            </div> 
        </footer>
    );
}
  
export default Footer;