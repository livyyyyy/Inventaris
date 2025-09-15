"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DeleteConfirmationDialog } from "@/components/delete-confirmation-dialog"
import { ArrowLeft, Calendar, MapPin, User, DollarSign, Hash, Monitor, Edit, Trash2 } from "lucide-react"

const inventoryData = [
  {
    id: "4010012022",
    name: "Sony A6400",
    category: "Kamera & Accessories",
    brand: "Sony",
    model: "A6400",
    serialNumber: "4575353 K/G C1AE-DJJJC-AABA-00027",
    price: "Rp 13.000.000",
    bookValue: "Rp 6.500.000",
    location: "KLASEMAN",
    room: "Ruang IT & Multimedia",
    pic: "M Arifian D W",
    purchaseDate: "20 Jan 2022",
    status: "OK",
    description: "Kamera digital profesional untuk dokumentasi",
    specifications: "Resolution: 4K (24,2 MP), Display: LCD 1800 (7,5 cm TFT), Weight: 1,5 kg",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4020012022",
    name: "MSI Gaming PC",
    category: "CPU",
    brand: "MSI",
    model: "B560M i7 16GB RAM 512SSD RTX 3050",
    serialNumber: "07D2011_LA1E663229",
    price: "Rp 17.260.360",
    bookValue: "Rp 10.428.134",
    location: "GITO-GATI",
    room: "Ruang CNC Bubut",
    pic: "Baguswandianto Rizki",
    purchaseDate: "23 Jun 2022",
    status: "OK",
    description: "PC Gaming untuk keperluan desain dan rendering",
    specifications: "Intel i7, 16GB RAM, 512GB SSD, RTX 3050 Graphics Card",
    image: "/msi-gaming-desktop-computer.jpg",
  },
  {
    id: "4090012023",
    name: "Dell Laptop",
    category: "Laptop",
    brand: "Dell",
    model: "3511 8GB 512SSD i3",
    serialNumber: "JKYQMJ3",
    price: "Rp 6.099.000",
    bookValue: "Rp 4.574.250",
    location: "KLASEMAN",
    room: "Ruang Office Marketing",
    pic: "Indah Kispriyaningrum",
    purchaseDate: "26 Jan 2023",
    status: "OK",
    description: "Laptop untuk keperluan administrasi dan presentasi",
    specifications: "Intel i3, 8GB RAM, 512GB SSD, 15.6 inch Display",
    image: "/dell-laptop-computer.jpg",
  },
  {
    id: "4040012022",
    name: "Fingerspot Premier",
    category: "Finger Print",
    brand: "Fingerspot",
    model: "New Premier Series",
    serialNumber: "A533193560226",
    price: "Rp 1.550.000",
    bookValue: "Rp 1.001.041",
    location: "GITO-GATI",
    room: "Workshop Gito-gati",
    pic: "Ali Imron Romadhon",
    purchaseDate: "26 Agu 2022",
    status: "OK",
    description: "Mesin absensi fingerprint untuk karyawan",
    specifications: "Fingerprint Scanner, LCD Display, Network Connectivity",
    image: "/fingerprint-scanner-device.jpg",
  },
  {
    id: "4050012022",
    name: "Transcend StoreJet",
    category: "Flashdisk & Harddisk Ext",
    brand: "Transcend",
    model: "StoreJet 25H3 2 TB",
    serialNumber: "G89013-0305",
    price: "Rp 1.100.000",
    bookValue: "Rp 641.666",
    location: "KLASEMAN",
    room: "Ruang Marketing",
    pic: "Gede Sudiasa",
    purchaseDate: "13 Mei 2022",
    status: "OK",
    description: "External hard drive untuk backup data marketing",
    specifications: "2TB Storage, USB 3.0, Portable Design",
    image: "/external-hard-drive-storage.jpg",
  },
  {
    id: "4020012019",
    name: "DELL PowerEdge T30",
    category: "CPU",
    brand: "DELL",
    model: "PowerEdge T30",
    serialNumber: "G67JYH2",
    price: "Rp 10.200.000",
    bookValue: "Rp 0",
    location: "KLASEMAN",
    room: "Ruang Server",
    pic: "Ali Imron Romadhon",
    purchaseDate: "01 Jan 2019",
    status: "OK",
    description: "Server untuk infrastruktur IT perusahaan",
    specifications: "Server Grade Hardware, Multiple Drive Bays, Network Ready",
    image: "/dell-server-computer-tower.jpg",
  },
]

function getStatusColor(status: string) {
  switch (status) {
    case "OK":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "RUSAK":
    case "HILANG":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
    case "Open":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

export default function InventoryDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [item, setItem] = useState<any>(null)

  useEffect(() => {
    const foundItem = inventoryData.find((i) => i.id === params.id)
    setItem(foundItem)
  }, [params.id])

  const handleDelete = () => {
    console.log(`Deleting item: ${item.id} - ${item.name}`)
    // In a real app, this would make an API call to delete the item
    // For now, we'll just show a success message and redirect
    alert(`Item "${item.name}" berhasil dihapus dari inventaris!`)
    router.push("/")
  }

  if (!item) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8 text-center">
              <h1 className="text-2xl font-bold text-foreground mb-4">Item Tidak Ditemukan</h1>
              <p className="text-muted-foreground mb-6">Item inventaris yang Anda cari tidak ditemukan.</p>
              <Button onClick={() => router.push("/")} className="bg-primary hover:bg-primary/90">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Daftar Inventaris
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Button onClick={() => router.push("/")} variant="outline" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Daftar Inventaris
          </Button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Detail Inventaris IT</h1>
              <p className="text-muted-foreground">Informasi lengkap perangkat inventaris</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => router.push(`/inventory/${item.id}/edit`)}>
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <DeleteConfirmationDialog
                itemName={item.name}
                itemId={item.id}
                onConfirm={handleDelete}
                trigger={
                  <Button variant="destructive">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Hapus
                  </Button>
                }
              />
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">{item.name}</h2>
                      <p className="text-lg text-muted-foreground">
                        {item.brand} - {item.model}
                      </p>
                      <p className="text-muted-foreground mt-1">{item.category}</p>
                    </div>
                    <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                  <div className="text-2xl font-bold text-primary">{item.price}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Info Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Hash className="w-5 h-5 mr-2 text-primary" />
                  Informasi Dasar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Kode Inventaris</label>
                  <p className="text-lg font-mono font-semibold text-foreground">{item.id}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Brand</label>
                  <p className="text-foreground">{item.brand}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Model/Tipe</label>
                  <p className="text-foreground">{item.model}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Serial Number</label>
                  <p className="text-foreground font-mono">{item.serialNumber}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Spesifikasi</label>
                  <p className="text-foreground">{item.specifications}</p>
                </div>
              </CardContent>
            </Card>

            {/* Financial Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                  Informasi Keuangan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Harga Pembelian</label>
                  <p className="text-2xl font-bold text-green-600">{item.price}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Nilai Buku</label>
                  <p className="text-lg font-semibold text-foreground">{item.bookValue}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Tanggal Pembelian</label>
                  <p className="text-foreground flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                    {item.purchaseDate}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <MapPin className="w-5 h-5 mr-2 text-red-600" />
                Informasi Lokasi
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Lokasi Utama</label>
                <p className="text-lg font-semibold text-foreground">{item.location}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Ruangan</label>
                <p className="text-foreground">{item.room}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">PIC (Penanggung Jawab)</label>
                <p className="text-foreground flex items-center">
                  <User className="w-4 h-4 mr-2 text-muted-foreground" />
                  {item.pic}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Status Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Monitor className="w-5 h-5 mr-2 text-purple-600" />
                Status Perangkat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Status Kondisi</label>
                  <div className="mt-1">
                    <Badge className={`${getStatusColor(item.status)} text-sm px-3 py-1`}>{item.status}</Badge>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Keterangan</label>
                  <p className="text-foreground mt-1 p-3 bg-muted rounded-lg">
                    Perangkat dalam kondisi baik dan berfungsi normal
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
