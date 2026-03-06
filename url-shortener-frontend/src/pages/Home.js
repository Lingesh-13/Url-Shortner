import UrlForm from "../components/UrlForm";

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0b1120] overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute w-[600px] h-[600px] bg-blue-600 opacity-20 rounded-full blur-3xl top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 rounded-full blur-3xl bottom-[-150px] right-[-150px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">

        <h1 className="text-6xl font-extrabold text-white leading-tight">
          Transform Your Links <br />
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            in a Click
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          Effortlessly shorten, secure, and optimize your links with
          modern performance and powerful tools.
        </p>

        <div className="mt-12">
          <UrlForm />
        </div>

      </div>
    </div>
  );
};

export default Home;