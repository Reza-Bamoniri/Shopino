import userSvg from "../../../assets/images/user-icon.png"


const UserProfile = ({name = "Anonymous User", email = "example@gmail.com"}) => {
  return (
    <div className="flex-ic gap-1.5">
      <img
        src={userSvg}
        className="size-10 rounded-full"
        alt={name}
      />
      <div className="space-y-0.5 ">
        <p className="text-xs text-slate-700">
          <strong>{name}</strong>
        </p>
        <p className="text-xs text-slate-400 select-none font-light">{email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
