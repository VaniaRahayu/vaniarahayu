export default function RiwayatPendidikan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2x1">Riwayat Pendidikan</h2>
        <RowRiwayat jenjang="SD" sekolah="SDN Ciherang" tahun="2010 - 2016"/>
        <RowRiwayat jenjang="SMP" sekolah="Pasundan Rancaekek" tahun="2016 - 2019"/>
        <RowRiwayat jenjang="SMK" sekolah="Pasundan Rancaekek" tahun="2019 - 2022"/>
        <RowRiwayat jenjang="S1" sekolah="Ma'soem University" tahun="2022 - sekarang"/>
      </div>
    );
}

interface RowRiwayatProps {
    tahun: string;
    jenjang: string;
    sekolah: string
}

function RowRiwayat(props: RowRiwayatProps) {
    return (
      <div className="border-2 border-indigo-500/75 rounder-lg bg-blue-800 p-2 my-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-4">{props.jenjang}</div>
            <div className="col-span-12 md:col-span-4">{props.sekolah}</div>
            <div className="col-span-12 md:col-span-4">{props.tahun}</div>
            </div>
          </div>
        </div>
    );
   }