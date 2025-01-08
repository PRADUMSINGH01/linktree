import AboutProfile from "../component/ProfileLins/AboutProfile";
import Avatar from "../component/ProfileLins/Avatar";
import Links from "../component/ProfileLins/LinksUI";
import SocailMediaIcons from "../component/ProfileLins/SocialMedia";

import { FETCHLINK } from "@/LinkModules/FetchLink";
export default async function UserLinkPage({ params }) {
  const search = await params;
  const StrgSearch = String(search.UserName);
  const result = await FETCHLINK(StrgSearch);
  const data = result.links;
  if (!data) {
    return <> There is No Page . Please Check Your Url </>;
  }
  return (
    <div className="bg-gradient-to-r from-black via-[#ecc69d] to-[#ebd5bb] h-full w-full p-4 md:p-2 lg:p-2 ">
      <Avatar Profile={"/"} />
      <AboutProfile Bio={"Gamer || Twitch "} />
      <div className="w-full flex justify-center items-center ">
        <SocailMediaIcons />
      </div>
      {data ? (
        data.map((items, index) => (
          <div
            key={index}
            className="w-full flex flex-col justify-center items-center"
          >
            <Links
              Url={items.url}
              link={items.title}
              color={items.color}
              font={items.font}
              text={""}
            />
          </div>
        ))
      ) : (
        <>Loading</>
      )}
    </div>
  );
}
