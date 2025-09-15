"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save, Upload } from "lucide-react"

const categories = [
  "Kamera & Accessories",
  "CPU",
  "Laptop",
  "Monitor",
  "Printer",
  "Finger Print",
  "Flashdisk & Harddisk Ext",
]

const locations = ["KLASEMAN", "GITO-GATI", "RUKO"]

const statusOptions = ["OK", "RUSAK", "HILANG", "DIJUAL"]

// Sample data for editing (in real app, this would come from API/database)
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
    purchaseDate: "2022-01-20",
    status: "OK",
    description: "Kamera digital profesional untuk dokumentasi",
    specifications: "Resolution: 4K (24,2 MP), Display: LCD 1800 (7,5 cm TFT), Weight: 1,5 kg",
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
    purchaseDate: "2022-06-23",
    status: "OK",
    description: "PC Gaming untuk keperluan desain dan rendering",
    specifications: "Intel i7, 16GB RAM, 512GB SSD, RTX 3050 Graphics Card",
  },
]

export default function EditInventoryPage() {
  const params = useParams()
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    model: "",
    serialNumber: "",
    price: "",
    bookValue: "",
    location: "",
    room: "",
    pic: "",
    purchaseDate: "",
    status: "OK",
    description: "",
    specifications: "",
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load existing data
    const item = inventoryData.find((i) => i.id === params.id)
    if (item) {
      setFormData({
        name: item.name,
        category: item.category,
        brand: item.brand,
        model: item.model,
        serialNumber: item.serialNumber,
        price: item.price,
        bookValue: item.bookValue,
        location: item.location,
        room: item.room,
        pic: item.pic,
        purchaseDate: item.purchaseDate,
        status: item.status,
        description: item.description,
        specifications: item.specifications,
      })
    }
    setLoading(false)
  }, [params.id])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Updated inventory item:", { id: params.id, ...formData })
    alert("Item inventaris berhasil diperbarui!")
    router.push(`/inventory/${params.id}`)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-12">
            <p className="text-muted-foreground">Memuat data...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Button onClick={() => router.push(`/inventory/${params.id}`)} variant="outline" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Detail
          </Button>

          <h1 className="text-3xl font-bold text-foreground mb-2">Edit Item Inventaris</h1>
          <p className="text-muted-foreground">Perbarui informasi perangkat IT</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Informasi Dasar</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nama Perangkat *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Contoh: Sony A6400"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="category">Kategori *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kategori" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="brand">Brand *</Label>
                  <Input
                    id="brand"
                    value={formData.brand}
                    onChange={(e) => handleInputChange("brand", e.target.value)}
                    placeholder="Contoh: Sony"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="model">Model/Tipe *</Label>
                  <Input
                    id="model"
                    value={formData.model}
                    onChange={(e) => handleInputChange("model", e.target.value)}
                    placeholder="Contoh: A6400"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="serialNumber">Serial Number</Label>
                  <Input
                    id="serialNumber"
                    value={formData.serialNumber}
                    onChange={(e) => handleInputChange("serialNumber", e.target.value)}
                    placeholder="Masukkan serial number"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="description">Deskripsi</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Deskripsi singkat perangkat"
                    rows={3}
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="specifications">Spesifikasi</Label>
                  <Textarea
                    id="specifications"
                    value={formData.specifications}
                    onChange={(e) => handleInputChange("specifications", e.target.value)}
                    placeholder="Spesifikasi teknis perangkat"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Financial Information */}
            <Card>
              <CardHeader>
                <CardTitle>Informasi Keuangan</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="price">Harga Pembelian *</Label>
                  <Input
                    id="price"
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    placeholder="Rp 0"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="bookValue">Nilai Buku</Label>
                  <Input
                    id="bookValue"
                    value={formData.bookValue}
                    onChange={(e) => handleInputChange("bookValue", e.target.value)}
                    placeholder="Rp 0"
                  />
                </div>
                <div>
                  <Label htmlFor="purchaseDate">Tanggal Pembelian *</Label>
                  <Input
                    id="purchaseDate"
                    type="date"
                    value={formData.purchaseDate}
                    onChange={(e) => handleInputChange("purchaseDate", e.target.value)}
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Location Information */}
            <Card>
              <CardHeader>
                <CardTitle>Informasi Lokasi</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="location">Lokasi Utama *</Label>
                  <Select value={formData.location} onValueChange={(value) => handleInputChange("location", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih lokasi" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="room">Ruangan *</Label>
                  <Input
                    id="room"
                    value={formData.room}
                    onChange={(e) => handleInputChange("room", e.target.value)}
                    placeholder="Contoh: Ruang IT & Multimedia"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="pic">PIC (Penanggung Jawab) *</Label>
                  <Input
                    id="pic"
                    value={formData.pic}
                    onChange={(e) => handleInputChange("pic", e.target.value)}
                    placeholder="Nama penanggung jawab"
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Status Information */}
            <Card>
              <CardHeader>
                <CardTitle>Status & Foto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="status">Status Kondisi *</Label>
                    <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih status" />
                      </SelectTrigger>
                      <SelectContent>
                        {statusOptions.map((status) => (
                          <SelectItem key={status} value={status}>
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="photo">Foto Perangkat</Label>
                    <div className="flex items-center gap-2">
                      <Input id="photo" type="file" accept="image/*" className="flex-1" />
                      <Button type="button" variant="outline" size="sm">
                        <Upload className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Buttons */}
            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" onClick={() => router.push(`/inventory/${params.id}`)}>
                Batal
              </Button>
              <Button type="submit" className="flex items-center gap-2">
                <Save className="w-4 h-4" />
                Simpan Perubahan
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
