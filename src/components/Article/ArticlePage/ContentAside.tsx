import Link from "next/link";
import Telegram from "@/components/Other/Telegram/Telegram";

const ContentAside = async () => {
  return (
    <div>
      <div className="sticky top-5 flex flex-col gap-5">
        <p className="text">ads</p>
        <Telegram />
      </div>
    </div>
  );
};

export default ContentAside;
