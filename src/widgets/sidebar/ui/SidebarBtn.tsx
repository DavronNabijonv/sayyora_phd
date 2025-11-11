'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarMenuItem } from '../lib/data';
import * as Icons from 'lucide-react';
import { useState } from 'react';

const SidebarBtn = ({ item }: { item: SidebarMenuItem }) => {
  const pathname = usePathname();

  const currentPath = pathname.replace(/^\/(uz|ru|ki)/, '');
  const isActive = item.link === currentPath;
  const hasActiveChild =
    item.children?.some((child) => child.link === currentPath) ?? false;

  const [showMenu, setShowMenu] = useState<boolean>(hasActiveChild);

  function getLucideIcon(name: string) {
    const IconComponent = Icons[name as keyof typeof Icons] as
      | Icons.LucideIcon
      | undefined;
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
  }

  return (
    <div className="flex flex-col gap-1">
      {/* CASE 1: Link + Children */}
      {item.link && item.children ? (
        <div
          onClick={() => setShowMenu((prev) => !prev)}
          className="flex items-center justify-between rounded hover:bg-gray-100 duration-75"
        >
          <Link
            href={item.link}
            className={`px-4 py-3 flex items-center gap-1 w-full 
              ${isActive || hasActiveChild ? 'bg-gray-100 text-black' : ''}`}
          >
            {item.icon && getLucideIcon(item.icon)}
            <span>{item.label}</span>
          </Link>

          <div
            className={`px-2 cursor-pointer text-neutral-600
              ${showMenu ? 'rotate-180' : 'rotate-0'} duration-300`}
          >
            <Icons.ChevronDown size={20} />
          </div>
        </div>
      ) : null}

      {/* CASE 2: Parent without link but has children */}
      {!item.link && item.children ? (
        <div
          onClick={() => setShowMenu((prev) => !prev)}
          className={`px-4 py-3 flex items-center justify-between gap-1 cursor-pointer rounded hover:bg-gray-100 duration-75
            ${hasActiveChild ? 'bg-gray-100 text-black' : ''}`}
        >
          <div className="flex items-center gap-1">
            {item.icon && getLucideIcon(item.icon)}
            <span>{item.label}</span>
          </div>

          <div
            className={`${
              showMenu ? 'rotate-180' : 'rotate-0'
            } text-neutral-600 duration-300`}
          >
            <Icons.ChevronDown size={20} />
          </div>
        </div>
      ) : null}

      {/* CASE 3: Only Link */}
      {item.link && !item.children ? (
        <Link
          href={item.link}
          className={`px-4 py-3 flex items-center gap-1 rounded hover:bg-gray-100 duration-75 
            ${isActive ? 'bg-gray-100 text-black' : ''}`}
        >
          {item.icon && getLucideIcon(item.icon)}
          <span>{item.label}</span>
        </Link>
      ) : null}

      {/* CHILDREN */}
      {item.children && (
        <div
          className={`overflow-hidden transition-[max-height] duration-500 flex flex-col ml-7 border-l border-dashed border-gray-400`}
          style={{ maxHeight: showMenu ? '999px' : '0px' }}
        >
          {item.children.map((child, index) => (
            <SidebarBtn key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarBtn;
