import Icon from "@/components/UI/Icon";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

const Telegram = ({ className }: { className?: string }) => {
  return (
    <Link
      className={clsx("rounded-xl p-5 bg-[#2AABEE] text-white", className)}
      href="https://some.com"
      target="_blank"
    >
      <div className="flex justify-between mb-2">
        <h3 className="text">Telegram</h3>
        <Icon
          width={40}
          height={40}
          name="arrow-right"
          className="-rotate-45 translate-x-1 -translate-y-1"
        />
      </div>
      <p>Присоединиться к нашему сообществу</p>
    </Link>
  );
};

export default Telegram;
