import { useSidebar } from "@/App/Sidebar/SidebarContext";
import avatar from "@/assets/avatar.jpeg";
import { CLASSES } from "@/constants";

const Avatar = () => {
  const { isOpen, position } = useSidebar();
  return (
    <div
      className={`rounded-full overflow-hidden border border-secondary-light dark:border-secondary-dark flex items-center justify-center bg-secondary-dark text-white font-bold
        ${
          isOpen
            ? CLASSES.sidebarOpen[position]?.avatarClassname || ""
            : CLASSES.sidebarClose[position]?.avatarClassname || ""
        }
      ${CLASSES.sidebarPosition[position].avatarClassname}
      `}
    >
      {avatar ? (
        <img
          src={avatar}
          alt="Avatar Valentin Rocher"
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="absolute">V</span>
      )}
    </div>
  );
};

export default Avatar;
