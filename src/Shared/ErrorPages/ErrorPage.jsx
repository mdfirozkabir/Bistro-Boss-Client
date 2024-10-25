import { Link } from 'react-router-dom';
import errorImg from '../../assets/404.gif'

const ErrorPage = () => {
    return (

        <div className="mx-auto items-center justify-center">
            <div style={{ backgroundImage: `url("${errorImg}")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className='h-screen flex justify-center items-center'>
                <div className='justify-center items-center text-center'>
                    <h1 className='font-bold text-7xl text-center mb-6 text-red-500'> Oops </h1>
                    <Link className="btn bg-red-500 hover:bg-red-400 border-0 text-white mt-2" to="/">Go back Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;