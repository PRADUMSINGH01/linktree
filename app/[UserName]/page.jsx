import Avatar from "../component/ProfileLins/Avatar";
import Links from "../component/ProfileLins/LinksUI";
import { FETCHUSER } from "../module/FechUser";

export default async function UserLinkPage({ params }) {
  const result = await FETCHUSER();
  const data = result.links;
  return (
    <div className="bg-black h-full w-full p-4 md:p-2 lg:p-2 ">
      <Avatar Profile={"/"} />
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
