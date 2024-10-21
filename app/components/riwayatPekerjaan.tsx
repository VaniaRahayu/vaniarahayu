export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2x1">Riwayat Pekerjaan</h2>
        <RowRiwayat tahun="SD" instansi="Toko Komputer" sebagai="Staff"/>
        <RowRiwayat tahun="SMP" instansi="Gacoan" sebagai="Manajer"/>
        <RowRiwayat tahun="SMK" instansi="Perpustakaan Sekolah" sebagai="Admin"/>
        <RowRiwayat tahun="S1" instansi="Hikmah Fashion" sebagai="Desainer"/>
      </div>
    );
}

interface RowRiwayatProps {
    tahun: string;
    instansi: string;
    sebagai: string
}

function RowRiwayat(props: RowRiwayatProps) {
    return (
      <div className="border-2 border-indigo-500/75 rounder-lg bg-blue-800 p-2 my-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-4">{props.tahun}</div>
            <div className="col-span-12 md:col-span-4">{props.instansi}</div>
            <div className="col-span-12 md:col-span-4">{props.tahun}</div>
            </div>
          </div>
        </div>
    );
   }