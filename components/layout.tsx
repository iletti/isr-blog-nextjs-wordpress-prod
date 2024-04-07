import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import Menu from "./menu";

export default function Layout({  preview, pageTitle, pageDescription, children }) {
  return (
    <>
      <Meta  title={pageTitle} description={pageDescription}  />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Menu />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
