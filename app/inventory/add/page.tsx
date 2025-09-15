"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
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

export default function AddInventoryPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    code: "",
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
    warranty: "",
    supplier: "",
    notes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !formData.name ||
      !formData.category ||
      !formData.brand ||
      !formData.location ||
      !formData.room ||
      !formData.pic
    ) {
      alert("Mohon lengkapi semua field yang wajib diisi!")
      return
    }

    const categoryCode =
      formData.category === "Kamera & Accessories"
        ? "40"
        : formData.category === "CPU"
          ? "41"
          : formData.category === "Laptop"
            ? "42"
            : formData.category === "Monitor"
              ? "43"
              : formData.category === "Printer"
                ? "44"
                : formData.category === "Finger Print"
                  ? "45"
                  : "46"

    const newId = `${categoryCode}${Math.floor(Math.random() * 90000) + 10000}${new Date().getFullYear()}`

    console.log("New inventory item:", { id: newId, ...formData })
    alert(`Item inventaris berhasil ditambahkan dengan kode: ${newId}`)
    router.push("/")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Button onClick={() => router.push("/")} variant="outline" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Daftar Inventaris
          </Button>

          <h1 className="text-3xl font-bold text-foreground mb-2">Tambah Item Inventaris</h1>
          <p className="text-muted-foreground">Masukkan informasi lengkap perangkat IT baru</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Informasi Dasar</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="code">Kode Inventaris (Opsional)</Label>
                  <Input
                    id="code"
                    value={formData.code}
                    onChange={(e) => handleInputChange("code", e.target.value)}
                    placeholder="Akan digenerate otomatis jika kosong"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Format: [Kategori][Nomor][Tahun] - contoh: 40123452024
                  </p>
                </div>
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
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="warranty">Masa Garansi</Label>
                    <Input
                      id="warranty"
                      value={formData.warranty}
                      onChange={(e) => handleInputChange("warranty", e.target.value)}
                      placeholder="Contoh: 2 tahun"
                    />
                  </div>
                  <div>
                    <Label htmlFor="supplier">Supplier/Vendor</Label>
                    <Input
                      id="supplier"
                      value={formData.supplier}
                      onChange={(e) => handleInputChange("supplier", e.target.value)}
                      placeholder="Nama supplier"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="notes">Catatan Tambahan</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    placeholder="Catatan khusus atau informasi tambahan"
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Submit Buttons */}
            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" onClick={() => router.push("/")}>
                Batal
              </Button>
              <Button type="submit" className="flex items-center gap-2">
                <Save className="w-4 h-4" />
                Simpan Item
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
