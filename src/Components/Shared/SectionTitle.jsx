
const SectionTitle = ({heading , subHeading}) => {
    return (
        <div> 
            <p className="text-[#D99904] font-[Inter] text-2xl font-bold text-center">{heading}</p>
            <h3 className="text-purple-500 text-2xl font-[Inter] text-center">{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;