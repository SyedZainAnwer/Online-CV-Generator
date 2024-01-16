import userIcon from "@/assets/icons/profile.svg";

interface propTypes {
  className?: string;
  size?: number;
  src: File | null;
}

const Avatar = ({ className, size, src }: propTypes) => {
  return (
    <div
      className={`${className} rounded-full overflow-hidden bg-light_gray flex justify-center items-center flex-col`}
      style={{ width: size ?? 80, height: size ?? 80 }}
    >
        {src ? (
              <img
              src={URL.createObjectURL(src)}
              alt="user icon"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
        ) :
        (
            <img
            src={userIcon}
            alt="user icon"
            style={{ width: "50%", height: "50%", objectFit: "cover" }}
          />
        )
    }
    </div>
  );
};

export default Avatar;
