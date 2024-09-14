import React from "react";
import zombiecat from "../public/ZombifiedOreo.gif"
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import SidebarRow from "./SidebarRow";
import { signIn, signOut, useSession } from "next-auth/react";
function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col col-span-2 items-center px-4 md:items-start max-h-screen sidebar overflow-scroll ">
      <div className="sidebar2">some test</div>
      <div className="sidebar4 md:flex">gfd</div>
      <img className="h-100" src="https://media.tenor.com/2Esjx1thErUAAAAi/doves-gold-glitter.gif" alt="" />
      <SidebarRow Icon={HomeIcon} pic ="https://animationport.wordpress.com/wp-content/uploads/2015/08/kf3_boss3.gif" title="Home" />
      <SidebarRow Icon={HashtagIcon} pic ="https://media.tenor.com/We3_91s7UjMAAAAi/zombie.gif" title="Explore" />
      <SidebarRow Icon={BellIcon} pic="https://theindiestone.com/forums/uploads/monthly_2018_11/dfebcee35166f17a38bb01e081ed8590.thumb.gif.0019aede8ade1be62dc72f96b03fb3b5.gif" title="Notifications" />
      <SidebarRow Icon={MailIcon} pic ="https://img1.picmix.com/output/stamp/normal/1/9/3/8/1718391_c5414.png" title="Messages" />
      <SidebarRow Icon={BookmarkIcon} pic ="https://media.tenor.com/HhqSuhwef9MAAAAj/lego-spinning.gif" title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} pic ="https://i.redd.it/xebhq4wevdeb1.png" title="Lists" />
      <SidebarRow
        onClick={session ? signOut : signIn}
        Icon={UserIcon}
        title={session ? "Sign Out" : "Sign In"}
        pic ="https://media.tenor.com/2Esjx1thErUAAAAi/doves-gold-glitter.gif"
      />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" pic ="https://media2.giphy.com/media/l3IeQWSC3lPslmyyLa/giphy.gif?cid=6c09b952m6aqsdt28mixdroxlz4jzghuak526sd2w9rq1qrg&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" />
    </div>
  );
}

export default Sidebar;
