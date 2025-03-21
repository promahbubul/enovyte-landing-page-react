const MemberCard = ({ designation, name, image }) => {
  return (
    <div>
      <div className="">
        <img src={image} className="w-full" />
      </div>
      <div className="bg-[#0A2C8C] py-6 px-5 text-left text-white">
        <h5 className="mb-2 text-xl font-semibold font-inter">{name}</h5>
        <p className="text-base font-semibold font-inter">{designation}</p>
      </div>
    </div>
  );
};
export default MemberCard;
