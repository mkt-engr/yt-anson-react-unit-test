import { FC } from "react";

type Props = {
  displayName: string;
  userName: string;
  email: string;
  isEmailVerified: boolean;
};

export const UserProfile: FC<Props> = ({
  displayName,
  userName,
  email,
  isEmailVerified,
}) => {
  return (
    <div>
      <div>
        <span>
          Display Name:
          {displayName.length > 15
            ? displayName.slice(0, 10).concat("...")
            : displayName}
        </span>
      </div>
      <div>
        <span>Username Name:{userName}</span>
      </div>
      <div>
        <span>Email:{email}</span>
      </div>
      <div>
        <span>Email Verified:{isEmailVerified ? "Yes" : "No"}</span>
      </div>
    </div>
  );
};
