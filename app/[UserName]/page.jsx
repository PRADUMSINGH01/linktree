import AboutProfile from "@/app/component/ProfileLins/AboutProfile";
import Avatar from "@/app/component/ProfileLins/Avatar";
import Links from "@/app/component/ProfileLins/LinksUI";
import SocailMediaIcons from "@/app/component/ProfileLins/SocialMedia";
import BasicThem from "../component/themes/BasicTheme";
import { FETCHLINK } from "@/LinkModules/FetchLink";
import Themethree from "../component/themes/ThemeThree";
import StanderTheme from "../component/themes/StanderTheme";
export default async function page({ params }) {
  const search = await params;
  const StrgSearch = String(search.UserName);
  const result = await FETCHLINK(StrgSearch);
  const data = result.links;
  const Theme = data.Theme;
  if (!data) {
    return <> There is No Page . Please Check Your Url </>;
  }

  if (Theme === Theme) {
    return (
      <div className="w-full flex justify-center items-center ">
        <BasicThem link={data.link} />
      </div>
    );
  }

  if (Theme === Theme) {
    return (
      <div className="w-full flex justify-center items-center ">
        <Themethree links={"/"} key={"1"} />
      </div>
    );
  }
  return (
    <div className="w-full flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <StanderTheme />
    </div>
  );
}
