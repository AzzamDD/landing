import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans w-full">
      {/* Cover */}
      <div className="h-screen w-full relative">
        <Image
          className="dark:invert"
          src="/ror.png"
          alt="ROR logo"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Photo below cover */}

      <div className="flex mt-5 p-3" >
        <img src="/fot.jpeg" alt="favian" className="w-110 h-auto" />
        <img src="/image.png" alt="favian" className="w-110 h-auto "  />
        <img src="/dot.png" alt="favian" className="w-110 h-auto" />
      </div>
      <div className="flex items-center justify-center  w-full bg-white">
      <h1 className="text-7xl  font-extrabold text-orange-600 select-none">
        WHATS UP?
      </h1>
    </div>

      
    </div>
  );
}
