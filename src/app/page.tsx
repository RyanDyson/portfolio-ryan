import { Home } from "./_components/display/Home";
import { Profile } from "./_components/profile/Profile";

export default function Page() {
  return (
    <main className=" bg-blue-950 text-amber-50 scroll-smooth">
      <Home />
      <Profile />
    </main>
  );
}
