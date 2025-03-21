import teamMemberData from "../../../constant/teamMembers.constant";
import MemberCard from "./MemberCard";

const Members = () => {
  return (
    <div className="mt-9 gap-[1px] flex flex-row ">
      {teamMemberData.map(({ designation, id, name, image }) => (
        <MemberCard
          designation={designation}
          id={id}
          name={name}
          image={image}
          key={id}
        />
      ))}
    </div>
  );
};
export default Members;
