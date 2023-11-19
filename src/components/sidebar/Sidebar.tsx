"use client";
import Image from "next/image";
import styles from "./Sidebar.module.css";
import Link from "next/link";
import { links } from "./Sidebar.data";
import clsx from "clsx";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <article className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="logo"
          className={styles.logo}
          priority
        />
        <nav className={styles.container_links}>
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.url}
              className={clsx(styles.link, {
                [styles.active]: pathname === link.url,
              })}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </article>
  );
};

export default Sidebar;
