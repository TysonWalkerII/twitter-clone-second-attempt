import React, { SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  onClick?: () => {};
  pic:string;
}

function SidebarRow({ Icon, title, pic, onClick }: Props) {
  return (
    <div
      onClick={() => onClick?.()}
      className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all duration-200 group max-w-fit"
    >
      {/* <Icon className="h-6 w-6" /> */}
      
      <img src={pic} className="h-12"></img>
      <p className="">
        {title}
      </p>
    </div>
  );
}

export default SidebarRow;
