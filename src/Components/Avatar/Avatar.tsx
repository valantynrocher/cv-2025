import { AvatarProps } from "./AvatarProps";

const Avatar = (props: AvatarProps) => {
  const { src, classes } = props;
  return (
    <div
      className={`flex items-center justify-center rounded-full overflow-hidden border border-secondary-light dark:border-secondary-dark bg-secondary-dark text-white font-bold
      ${classes?.main || ""}
      `}
    >
      {src ? (
        <img
          src={src}
          alt="Avatar Valentin Rocher"
          className={`${classes?.img || ""} w-full h-full object-cover`}
        />
      ) : (
        <span className={`${classes?.fallback || ""} absolute`}>V</span>
      )}
    </div>
  );
};

export default Avatar;
