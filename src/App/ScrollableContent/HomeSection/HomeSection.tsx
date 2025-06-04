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
      <h1>Valentin Rocher</h1>
      <h2>Développeur front-end TypeScript / React </h2>
      <h3>
        + de 3 ans d’expérience | Polyvalent | Curieux | De retour d'une pause
        professionnelle dédiée au voyage.
      </h3>
    </>
  );
};

export default HomeSection;
