import Avatar from "@/Components/Avatar";
import avatar from "@/assets/avatar-linkedin.jpeg";

const HomeSection = () => {
  return (
    <>
      <Avatar
        src={avatar}
        classes={{
          main: "w-[150px] h-auto",
        }}
      />
      Bienvenue sur mon portfolio !
    </>
  );
};

export default HomeSection;
