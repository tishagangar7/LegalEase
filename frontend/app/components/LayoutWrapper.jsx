import Header from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({ 
  children, 
  showBackButton = false 
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header showBackButton={showBackButton} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}