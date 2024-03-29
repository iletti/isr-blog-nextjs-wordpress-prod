import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import Menu from "./menu";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Menu />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
