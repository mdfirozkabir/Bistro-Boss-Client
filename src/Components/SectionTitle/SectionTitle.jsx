
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='my-8 mx-auto text-center w-4/12'>
            <p className='text-yellow-600 mb-2 text-xl'>---{subHeading}---</p>
            <h3 className='text-4xl uppercase border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;