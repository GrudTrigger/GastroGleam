import Sidebar from "../sidebar/Sidebar";
import styles from "./MainLayout.module.css";
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className={styles.container}>
      <Sidebar />
      <section>{children}</section>
    </main>
  );
};

export default MainLayout;
