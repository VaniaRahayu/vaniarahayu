import foto from "../foto.jpeg";

export default function Hero() {
    return (
        <div className="container mx-auto p-2 text-center">
        <h1 className="text-black font-bold">CV ONLINE</h1>
        <h2 className="text-2x1:">Vania Rahayu</h2>
        <Profile/>
        <p>
            Saya Vania Rahayu, seorang Mahasiswa Di Ma'soem 
       </p>
     </div>
    );
}

function Profile() {
    return <img src={foto.src} alt="Vania Rahayu Profile" className="fotoku" />;
}