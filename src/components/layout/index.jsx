import Header from "../nestable/Header";
import Footer from "../nestable/Footer";
//Uses config set global components for the layout
export default function Layout({ config, children }) {
  //Create at least a header and footer component
  //Use console.log to determine blok object structure if unsure...
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header blok={config} />
        <main className="flex-grow">{children}</main>
        <Footer blok={config} />{" "}
      </div>
    </>
  );
}
