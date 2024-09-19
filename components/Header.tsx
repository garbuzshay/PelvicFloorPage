export default function Header() {
    return (
      <header className="w-full  h-48 relative flex items-center bg-gradient-to-r from-pink-200 to-purple-400 shadow-xl">
        <div className="flex items-center space-x-6 px-2">
          <img 
            src="/279370101_143210021561265_2450032194850391020_n.jpg" 
            alt="Profile" 
            className="lg:h-40 lg:w-40 w-32 h-32 rounded-full shadow-lg border-4 border-white"
          />
        </div>
        <div className="flex flex-col justify-center items-center flex-1 text-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold drop-shadow-lg">אילנה אורונוב גרבוז</h1>
          
          <div className="w-3/5 h-1 bg-gradient-to-r from-white to-pink-300 my-2 rounded"></div>
  
          <p className="text-white text-xl md:text-xl lg:text-2xl drop-shadow-lg">פיזיותרפיסטית מוסמכת לשיקום רצפת האגן</p>
        </div>
      </header>
    );
  }
  