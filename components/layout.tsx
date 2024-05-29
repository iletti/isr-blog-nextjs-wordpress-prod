import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import Menu from "./menu";
import { GoogleTagManager } from '@next/third-parties/google'


export default function Layout({  preview, pageTitle, pageDescription, children }) {
  return (
    <>
    <GoogleTagManager gtmId="GTM-KXQLCHDS" />
      <Meta  title={pageTitle} description={pageDescription}  />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Menu  />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
