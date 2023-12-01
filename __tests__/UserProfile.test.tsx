import { UserProfile } from "@/components/UserProfile";
import { render, screen } from "@testing-library/react";

describe("UserProfile - Rendering", () => {
  it("isEmailVerifiedがtrueのとき「Email Verified:Yes」と表示されること", () => {
    render(
      <UserProfile
        displayName="Makito The Developer"
        userName="Makito Mori"
        email="makito@example.com"
        isEmailVerified={true}
      />
    );
    expect(screen.getByText(/Email Verified:Yes/)).toBeInTheDocument();
  });

  it("isEmailVerifiedがfalseのとき「Email Verified:No」と表示されること", () => {
    render(
      <UserProfile
        displayName="Makito The Developer"
        userName="Makito Mori"
        email="makito@example.com"
        isEmailVerified={false}
      />
    );
    expect(screen.queryByText("Email Verified:Yes")).not.toBeInTheDocument();
    expect(screen.getByText("Email Verified:No")).toBeInTheDocument();
  });

  it("DisplayNameが15文字以上の時10文字になり...が表示されること", () => {
    render(
      <UserProfile
        displayName="Makito The Developer"
        userName="Makito Mori"
        email="makito@example.com"
        isEmailVerified={false}
      />
    );

    const displayNameSpanElement = screen.getByText(/Display Name:/);
    expect(displayNameSpanElement).toHaveTextContent(/.*\.{3}/);
  });

  it("DisplayNameが15文字以下のときはそのまま表示されること", () => {
    render(
      <UserProfile
        displayName="Makito The "
        userName="Makito Mori"
        email="makito@example.com"
        isEmailVerified={false}
      />
    );

    const displayNameSpanElement = screen.getByText(/Display Name:/);
    expect(displayNameSpanElement).not.toHaveTextContent(/.*\.{3}/);
  });
});
