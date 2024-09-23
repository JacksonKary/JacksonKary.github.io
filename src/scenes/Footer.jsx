import MediaIcons from '../components/MediaIcons';

function Footer() {
    return (
        <footer className='flex flex-col bg-stone-300 h-32 md:h-auto justify-center'>
            <div className='w-5/6 mx-auto'>
                <p className='font-montserrat text-2xl mt-7'>Jackson Kary</p>
            </div>

            <div className="flex flex-row justify-evenly mt-2 mb-7">
                <div className="flex flex-col justify-center  items-center">
                    <MediaIcons iconSize={"30px"} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;