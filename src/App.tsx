import "./App.css";
import Form from "./components/ui/Form";
import Header from "./components/ui/Header";
import Trip from "./components/ui/Trip";

function App() {
  return (
    <div className="w-full flex flex-col justify-center font-thin">
      <Header />

      <main className="">
        <section className="w-full bg-white border h-12 flex justify-center">
          <div className="w-4/5">
            {/* Master Price */}
            <h1 className=" text-black text-4xl font-extrabold">
              Master Price
            </h1>

            {/* Trips */}
            <Trip />

            {/* Form */}
            <Form />

          </div>
        </section>
      </main>

      <footer>
        
      </footer>
    </div>
  );
}

export default App;
