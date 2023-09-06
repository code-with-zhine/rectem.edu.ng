import { gemsbuck } from "@/app/page";

export default function Calendar({month, date, activity}) {
  return (
    <article className="max-[430px]:max-w-full min-h-[250px] max-w-[250px] border-[1px] bg-white ">
      <div className="tracking-wider text-gray-500 p-4 pt-6">
        <h4 className="font-medium">{month}</h4>
        <h2 className="text-7xl text-blue-800 font-extrabold">{date}</h2>
        <hr className="w-1/2 pb-4" />
        <a className="text-[0.85rem] min-h-[100px] font-medium line-clamp-4 text-gray-600">{activity}</a>
      </div>
    </article>
  );
}
