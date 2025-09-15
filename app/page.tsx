"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Monitor,
  Laptop,
  Camera,
  HardDrive,
  Fingerprint,
  Cpu,
  Plus,
  Search,
  Tv,
  Mic,
  Router,
  Printer,
  Phone,
} from "lucide-react"

const inventoryData = [
  {
    id: "4010012020",
    name: "Zhiyun Gimbal Crane M2",
    category: "Kamera & Accessories",
    brand: "Zhiyun",
    model: "Gimbal Crane M2",
    serialNumber: "NONE",
    price: "Rp 2.770.000",
    location: "KLASEMAN",
    room: "Ruang IT & Multimedia",
    purchaseDate: "01 Jan 2020",
    status: "OK",
    icon: Camera,
    description: "Gimbal stabilizer untuk kamera",
    specifications: "Warna: Abu-abu",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4010012022",
    name: "Sony A6400",
    category: "Kamera & Accessories",
    brand: "Sony",
    model: "A6400",
    serialNumber: "4575353 K/G C1AE-DJJJC-AABA-00027",
    price: "Rp 13.000.000",
    location: "KLASEMAN",
    room: "Ruang IT & Multimedia",
    purchaseDate: "20 Jan 2022",
    status: "OK",
    icon: Camera,
    description: "Kamera digital profesional untuk dokumentasi",
    specifications: "Resolution: 4K (24,2 MP), Display: LCD 1800 (7,5 cm TFT), Weight: 1,5 kg, Warna: Hitam",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4010022015",
    name: "Sony SELP1650",
    category: "Kamera & Accessories",
    brand: "Sony",
    model: "SELP1650",
    serialNumber: "9386623A",
    price: "Rp 1.500.000",
    location: "KLASEMAN",
    room: "Ruang IT & Multimedia",
    purchaseDate: "01 Jan 2015",
    status: "OK",
    icon: Camera,
    description: "Lensa kamera Sony",
    specifications: "Lensa: E 3.5-5.6/PZ 16-50 OSS",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4010022019",
    name: "Sony SEL50f18",
    category: "Kamera & Accessories",
    brand: "Sony",
    model: "SEL50f18",
    serialNumber: "3131880",
    price: "Rp 3.199.000",
    location: "KLASEMAN",
    room: "Ruang IT & Multimedia",
    purchaseDate: "01 Jan 2019",
    status: "OK",
    icon: Camera,
    description: "Lensa kamera Sony",
    specifications: "Lensa: 1.8/50 OSS 0.39m/1.28ft",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4010022020",
    name: "Sony SEL16F28",
    category: "Kamera & Accessories",
    brand: "Sony",
    model: "SEL16F28",
    serialNumber: "807418",
    price: "Rp 2.580.000",
    location: "KLASEMAN",
    room: "Ruang IT & Multimedia",
    purchaseDate: "01 Jan 2020",
    status: "OK",
    icon: Camera,
    description: "Lensa kamera Sony",
    specifications: "Lensa: E 2.8/16 0.24m/0.8ft",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4010022022",
    name: "Takara Spirit 3 Light Stand",
    category: "Kamera & Accessories",
    brand: "Takara Spirit 3",
    model: "Light Stand",
    serialNumber: "-",
    price: "Rp 346.750",
    location: "KLASEMAN",
    room: "Ruang IT & Multimedia",
    purchaseDate: "10 Jun 2022",
    status: "OK",
    icon: Camera,
    description: "Light stand untuk fotografi",
    specifications: "Warna: Hitam",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4010032019",
    name: "Battery Pack NP-FW50",
    category: "Kamera & Accessories",
    brand: "Battery Pack",
    model: "NP-FW50",
    serialNumber: "-",
    price: "Rp 125.000",
    location: "KLASEMAN",
    room: "Ruang IT & Multimedia",
    purchaseDate: "01 Jan 2019",
    status: "OK",
    icon: Camera,
    description: "Baterai untuk kamera Sony",
    specifications: "Warna: Hitam",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4010032022",
    name: "Godox ML60 LED",
    category: "Kamera & Accessories",
    brand: "Godox",
    model: "ML60 LED",
    serialNumber: "2H1H00098119",
    price: "Rp 560.000",
    location: "KLASEMAN",
    room: "Ruang IT & Multimedia",
    purchaseDate: "10 Jun 2022",
    status: "OK",
    icon: Camera,
    description: "LED light untuk fotografi",
    specifications: "Light Warna: Putih",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4010042022",
    name: "Godox LED Pocket",
    category: "Kamera & Accessories",
    brand: "Godox",
    model: "LED",
    serialNumber: "NONE",
    price: "Rp 250.000",
    location: "KLASEMAN",
    room: "Ruang IT & Multimedia",
    purchaseDate: "10 Jun 2022",
    status: "OK",
    icon: Camera,
    description: "LED pocket light",
    specifications: "LED Pocket Litemons 6R RGB",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4010062022",
    name: "Taff Studio Green Screen",
    category: "Kamera & Accessories",
    brand: "Taff Studio",
    model: "M139-200",
    serialNumber: "NONE",
    price: "Rp 306.660",
    location: "KLASEMAN",
    room: "Ruang IT & Multimedia",
    purchaseDate: "11 Sep 2022",
    status: "OK",
    icon: Camera,
    description: "Green screen stand untuk video",
    specifications: "Green Screen Stand bentuk T dan Background Hijau Tua Free jepit",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4010072022",
    name: "Canon IXUS 185",
    category: "Kamera & Accessories",
    brand: "Canon",
    model: "IXUS 185",
    serialNumber: "1809C002",
    price: "Rp 2.575.900",
    location: "GITO-GATI",
    room: "Ruang Warehouse",
    purchaseDate: "12 Des 2022",
    status: "OK",
    icon: Camera,
    description: "Kamera digital compact",
    specifications: "16 GB Warna: Hitam",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4020012009",
    name: "AS Rock Fatal1ty Gaming",
    category: "CPU",
    brand: "AS Rock",
    model: "Case: CM Storm",
    serialNumber: "SGC50000KKN11124100888",
    price: "Rp 1.500.000",
    location: "KLASEMAN",
    room: "Ruang Server",
    purchaseDate: "01 Jan 2009",
    status: "OK",
    icon: Cpu,
    description: "PC Gaming untuk server",
    specifications: "AS Rock Fatal1ty Gaming i7-3770K",
    image: "/msi-gaming-desktop-computer.jpg",
  },
  {
    id: "4020012013",
    name: "Gigabyte SPC",
    category: "CPU",
    brand: "Gigabyte",
    model: "SPC",
    serialNumber: "NONE",
    price: "Rp 1.350.000",
    location: "KLASEMAN",
    room: "Ruang HRGA",
    purchaseDate: "01 Jan 2013",
    status: "OK",
    icon: Cpu,
    description: "PC untuk administrasi",
    specifications: "i3-4130 H81M-DS2, Warna: Hitam Merah",
    image: "/msi-gaming-desktop-computer.jpg",
  },
  {
    id: "4020012015",
    name: "HP Proliant ML10 V2",
    category: "CPU",
    brand: "HP",
    model: "Proliant ML10 V2",
    serialNumber: "CN65130EH7",
    price: "Rp 1.500.000",
    location: "KLASEMAN",
    room: "Ruang Server",
    purchaseDate: "01 Jan 2015",
    status: "OK",
    icon: Cpu,
    description: "Server HP untuk infrastruktur",
    specifications: "Warna: Hitam",
    image: "/dell-server-computer-tower.jpg",
  },
  {
    id: "4020012016",
    name: "ECS SPC SX Series",
    category: "CPU",
    brand: "ECS",
    model: "SPC SX",
    serialNumber: "NONE",
    price: "Rp 1.350.000",
    location: "GITO-GATI",
    room: "Ruang R&D",
    purchaseDate: "01 Jan 2016",
    status: "OK",
    icon: Cpu,
    description: "PC untuk R&D",
    specifications: "H81H3-M4 i3-4150, Warna: Hitam Merah",
    image: "/msi-gaming-desktop-computer.jpg",
  },
  {
    id: "4020012019",
    name: "DELL PowerEdge T30",
    category: "CPU",
    brand: "DELL",
    model: "PowerEdge T30",
    serialNumber: "G67JYH2",
    price: "Rp 10.200.000",
    location: "KLASEMAN",
    room: "Ruang Server",
    purchaseDate: "01 Jan 2019",
    status: "OK",
    icon: Cpu,
    description: "Server untuk infrastruktur IT perusahaan",
    specifications: "Warna: Hitam",
    image: "/dell-server-computer-tower.jpg",
  },
  {
    id: "4020012022",
    name: "MSI Gaming PC",
    category: "CPU",
    brand: "MSI",
    model: "Darkflash DK351 Black",
    serialNumber: "07D2011_LA1E663229",
    price: "Rp 17.260.360",
    location: "GITO-GATI",
    room: "Ruang CNC Bubut",
    purchaseDate: "23 Jun 2022",
    status: "OK",
    icon: Cpu,
    description: "PC Gaming untuk keperluan desain dan rendering",
    specifications: "MSI B560M i7 16GB RAM 512SSD RTX 3050",
    image: "/msi-gaming-desktop-computer.jpg",
  },
  {
    id: "4020012023",
    name: "Gigabyte Simbadda BG 109",
    category: "CPU",
    brand: "Gigabyte",
    model: "Simbadda BG 109",
    serialNumber: "NONE",
    price: "Rp 3.278.600",
    location: "GITO-GATI",
    room: "Ruang Warehouse",
    purchaseDate: "05 Mei 2023",
    status: "OK",
    icon: Cpu,
    description: "PC untuk warehouse",
    specifications: "i3 9100 Ram 16GB SSD 240GB VGA GT730",
    image: "/msi-gaming-desktop-computer.jpg",
  },
  {
    id: "4020022013",
    name: "MSI Castello 2822c",
    category: "CPU",
    brand: "MSI",
    model: "Castello 2822c",
    serialNumber: "NONE",
    price: "Rp 1.350.000",
    location: "GITO-GATI",
    room: "Ruang Office Operasional",
    purchaseDate: "01 Jan 2013",
    status: "OK",
    icon: Cpu,
    description: "PC untuk operasional",
    specifications: "H81M-E33 i5-4460, Warna: Hitam Merah LG DVD Drive",
    image: "/msi-gaming-desktop-computer.jpg",
  },
  {
    id: "4020022018",
    name: "MSI Infinity Black",
    category: "CPU",
    brand: "MSI",
    model: "Infinity Black",
    serialNumber: "H916645815",
    price: "Rp 2.500.000",
    location: "GITO-GATI",
    room: "Ruang Quality Control",
    purchaseDate: "01 Jan 2018",
    status: "OK",
    icon: Cpu,
    description: "PC untuk quality control",
    specifications: "B250M PRO-VH i3-7100",
    image: "/msi-gaming-desktop-computer.jpg",
  },
  {
    id: "4020022019",
    name: "AS Rock Enlight",
    category: "CPU",
    brand: "AS Rock",
    model: "Enlight",
    serialNumber: "M80-BA007600973",
    price: "Rp 5.485.000",
    location: "KLASEMAN",
    room: "Ruang Office Marketing",
    purchaseDate: "01 Jan 2019",
    status: "OK",
    icon: Cpu,
    description: "PC untuk marketing",
    specifications: "Ryzen 3 8GB DDR4 AMD Vega 8",
    image: "/msi-gaming-desktop-computer.jpg",
  },
  {
    id: "4020032013",
    name: "ECS Dazumba DVD LG",
    category: "CPU",
    brand: "ECS",
    model: "Dazumba DVD LG",
    serialNumber: "NONE",
    price: "Rp 1.350.000",
    location: "GITO-GATI",
    room: "Ruang Quality Control",
    purchaseDate: "01 Jan 2013",
    status: "OK",
    icon: Cpu,
    description: "PC untuk quality control",
    specifications: "ECS H61H2-M12 Intel Celeron G1610",
    image: "/msi-gaming-desktop-computer.jpg",
  },
  {
    id: "4020032022",
    name: "Asus MSI MAG FORGE M100R",
    category: "CPU",
    brand: "Asus",
    model: "MSI MAG FORGE M100R",
    serialNumber: "230520908600061",
    price: "Rp 16.196.000",
    location: "GITO-GATI",
    room: "Ruang R&D Utara",
    purchaseDate: "08 Nov 2022",
    status: "OK",
    icon: Cpu,
    description: "PC gaming untuk R&D",
    specifications: "i7 Gen 12, 16 GB, RX 6600 XT",
    image: "/msi-gaming-desktop-computer.jpg",
  },
  {
    id: "4040012015",
    name: "Fingerspot Premier",
    category: "Finger Print",
    brand: "Fingerspot",
    model: "Premier",
    serialNumber: "6571143900095",
    price: "Rp 2.600.000",
    location: "RUKO",
    room: "Ruko Lantai 1",
    purchaseDate: "01 Jan 2015",
    status: "OK",
    icon: Fingerprint,
    description: "Mesin absensi fingerprint",
    specifications: "Series Warna: Hitam",
    image: "/fingerprint-scanner-device.jpg",
  },
  {
    id: "4040012022",
    name: "Fingerspot Premier",
    category: "Finger Print",
    brand: "Fingerspot",
    model: "Premier",
    serialNumber: "A533193560226",
    price: "Rp 1.550.000",
    location: "GITO-GATI",
    room: "Workshop Gito-gati",
    purchaseDate: "26 Agu 2022",
    status: "OK",
    icon: Fingerprint,
    description: "Mesin absensi fingerprint untuk karyawan",
    specifications: "Series Warna: Hitam",
    image: "/fingerprint-scanner-device.jpg",
  },
  {
    id: "4040022022",
    name: "Fingerspot Premier",
    category: "Finger Print",
    brand: "Fingerspot",
    model: "Premier",
    serialNumber: "A533193560026",
    price: "Rp 1.550.000",
    location: "KLASEMAN",
    room: "Workshop Klaseman",
    purchaseDate: "08 Sep 2022",
    status: "OK",
    icon: Fingerprint,
    description: "Mesin absensi fingerprint untuk karyawan",
    specifications: "Series Warna: Hitam",
    image: "/fingerprint-scanner-device.jpg",
  },
  {
    id: "4050012017",
    name: "Transcend StoreJet 25H3",
    category: "Flashdisk & Harddisk Ext",
    brand: "Transcend",
    model: "StoreJet 25H3",
    serialNumber: "D407660133",
    price: "Rp 949.000",
    location: "KLASEMAN",
    room: "Ruang Server",
    purchaseDate: "01 Jan 2017",
    status: "OK",
    icon: HardDrive,
    description: "External hard drive untuk email server",
    specifications: "1 TB Warna: Biru Use: Email Server",
    image: "/external-hard-drive-storage.jpg",
  },
  {
    id: "4050012018",
    name: "Seagate Backup Plus Slim",
    category: "Flashdisk & Harddisk Ext",
    brand: "Seagate",
    model: "STDR1000203",
    serialNumber: "NONE",
    price: "Rp 835.000",
    location: "GITO-GATI",
    room: "Ruang R&D Utara",
    purchaseDate: "01 Jan 2018",
    status: "OK",
    icon: HardDrive,
    description: "External hard drive untuk backup",
    specifications: "Backup Plus Slim 1 TB, Warna: Merah",
    image: "/external-hard-drive-storage.jpg",
  },
  {
    id: "4050012019",
    name: "Transcend StoreJet 25H3",
    category: "Flashdisk & Harddisk Ext",
    brand: "Transcend",
    model: "StoreJet 25H3",
    serialNumber: "E86733-0296",
    price: "Rp 800.000",
    location: "GITO-GATI",
    room: "Ruang R&D Utara",
    purchaseDate: "01 Jan 2019",
    status: "OK",
    icon: HardDrive,
    description: "External hard drive untuk R&D",
    specifications: "1 TB Warna: Biru Use: RND",
    image: "/external-hard-drive-storage.jpg",
  },
  {
    id: "4050012022",
    name: "Transcend StoreJet 25H4",
    category: "Flashdisk & Harddisk Ext",
    brand: "Transcend",
    model: "StoreJet 25H4",
    serialNumber: "G89013-0305",
    price: "Rp 1.100.000",
    location: "KLASEMAN",
    room: "Ruang Marketing",
    purchaseDate: "13 Mei 2022",
    status: "OK",
    icon: HardDrive,
    description: "External hard drive untuk backup data marketing",
    specifications: "2 TB Warna: Ungu Use: MKT",
    image: "/external-hard-drive-storage.jpg",
  },
  {
    id: "4050022017",
    name: "Transcend StoreJet 25H5",
    category: "Flashdisk & Harddisk Ext",
    brand: "Transcend",
    model: "StoreJet 25H5",
    serialNumber: "D377920839",
    price: "Rp 949.000",
    location: "KLASEMAN",
    room: "Ruang Server",
    purchaseDate: "01 Jan 2017",
    status: "OK",
    icon: HardDrive,
    description: "External hard drive untuk IT database",
    specifications: "1 TB Warna: Biru Use: IT_DB",
    image: "/external-hard-drive-storage.jpg",
  },
  {
    id: "4050032017",
    name: "Transcend StoreJet 25H6",
    category: "Flashdisk & Harddisk Ext",
    brand: "Transcend",
    model: "StoreJet 25H6",
    serialNumber: "407660132",
    price: "Rp 949.000",
    location: "GITO-GATI",
    room: "Ruang Office Operasional",
    purchaseDate: "01 Jan 2017",
    status: "OK",
    icon: HardDrive,
    description: "External hard drive untuk operasional",
    specifications: "1 TB Warna: Biru Use: OPS",
    image: "/external-hard-drive-storage.jpg",
  },
  {
    id: "4090012011",
    name: "Lenovo G40-70",
    category: "Laptop",
    brand: "Lenovo",
    model: "G40-70",
    serialNumber: "YB09311329",
    price: "Rp 3.795.000",
    location: "GITO-GATI",
    room: "Ruang Warehouse",
    purchaseDate: "01 Jan 2011",
    status: "OK",
    icon: Laptop,
    description: "Laptop untuk warehouse",
    specifications: "Warna: Hitam",
    image: "/dell-laptop-computer.jpg",
  },
  {
    id: "4090012014",
    name: "Lenovo G40-45 80E1",
    category: "Laptop",
    brand: "Lenovo",
    model: "G40-45 80E1",
    serialNumber: "PF059B69",
    price: "Rp 4.730.000",
    location: "GITO-GATI",
    room: "Ruang R&D Utara",
    purchaseDate: "01 Jan 2014",
    status: "OK",
    icon: Laptop,
    description: "Laptop untuk R&D",
    specifications: "Warna: Hitam",
    image: "/dell-laptop-computer.jpg",
  },
  {
    id: "4090012016",
    name: "Lenovo Ideapad 330-14IB",
    category: "Laptop",
    brand: "Lenovo",
    model: "81G2 Ideapad 330-14IB",
    serialNumber: "MP10R63C",
    price: "Rp 3.500.000",
    location: "KLASEMAN",
    room: "Ruang IT & Multimedia",
    purchaseDate: "01 Jan 2016",
    status: "OK",
    icon: Laptop,
    description: "Laptop untuk IT & Multimedia",
    specifications: "Warna: Black",
    image: "/dell-laptop-computer.jpg",
  },
  {
    id: "4090012017",
    name: "Lenovo Ideapad 110-14SK",
    category: "Laptop",
    brand: "Lenovo",
    model: "Ideapad 110-14SK 80UC",
    serialNumber: "MP18UUAD",
    price: "Rp 4.700.000",
    location: "GITO-GATI",
    room: "Ruang Office Operasional",
    purchaseDate: "01 Jan 2017",
    status: "OK",
    icon: Laptop,
    description: "Laptop untuk operasional",
    specifications: "Warna: Hitam",
    image: "/dell-laptop-computer.jpg",
  },
  {
    id: "4090012019",
    name: "Lenovo Ideapad 330-14IKB",
    category: "Laptop",
    brand: "Lenovo",
    model: "81G2 Ideapad 330-14IKB",
    serialNumber: "PF160D7S",
    price: "Rp 7.799.000",
    location: "KLASEMAN",
    room: "Ruang Finance",
    purchaseDate: "01 Jan 2019",
    status: "OK",
    icon: Laptop,
    description: "Laptop untuk finance",
    specifications: "i5 Warna: Grey",
    image: "/dell-laptop-computer.jpg",
  },
  {
    id: "4090012020",
    name: "Avita Pura 14",
    category: "Laptop",
    brand: "Avita",
    model: "Avita Pura 14-Space Grey",
    serialNumber: "2ANA351702",
    price: "Rp 4.499.000",
    location: "RUKO",
    room: "Ruko Lantai 1",
    purchaseDate: "01 Jan 2020",
    status: "OK",
    icon: Laptop,
    description: "Laptop untuk ruko",
    specifications: "AMD A9-9420E. 4GB, DDR4, 256GB SSD, 14 inch",
    image: "/dell-laptop-computer.jpg",
  },
  {
    id: "4090012021",
    name: "Acer Aspire A514-53",
    category: "Laptop",
    brand: "Acer",
    model: "Aspire A514-53",
    serialNumber: "NXHZ6SN0020480C6412N00",
    price: "Rp 7.889.000",
    location: "GITO-GATI",
    room: "Ruang Elektro",
    purchaseDate: "01 Jan 2021",
    status: "OK",
    icon: Laptop,
    description: "Laptop untuk elektro",
    specifications: "i3 Gen10",
    image: "/dell-laptop-computer.jpg",
  },
  {
    id: "4090012022",
    name: "Asus A416EPO",
    category: "Laptop",
    brand: "Asus",
    model: "A416EPO",
    serialNumber: "N3N0CV19M74312B",
    price: "Rp 9.999.000",
    location: "KLASEMAN",
    room: "Ruang R&D Utara",
    purchaseDate: "28 Jun 2022",
    status: "OK",
    icon: Laptop,
    description: "Laptop untuk R&D",
    specifications: "i5 Warna: Grey",
    image: "/dell-laptop-computer.jpg",
  },
  {
    id: "4090012023",
    name: "Dell 3511",
    category: "Laptop",
    brand: "Dell",
    model: "3511",
    serialNumber: "JKYQMJ3",
    price: "Rp 6.099.000",
    location: "KLASEMAN",
    room: "Ruang Office Marketing",
    purchaseDate: "26 Jan 2023",
    status: "OK",
    icon: Laptop,
    description: "Laptop untuk keperluan administrasi dan presentasi",
    specifications: "3511 8GB 512SSD i3 Warna: Black",
    image: "/dell-laptop-computer.jpg",
  },
  {
    id: "4100012017",
    name: "Samsung UA48J5000AKPXD",
    category: "TV LCD",
    brand: "Samsung",
    model: "UA48J5000AKPXD",
    serialNumber: "006Y3NGH800993",
    price: "Rp 5.000.000",
    location: "KLASEMAN",
    room: "Ruang Meeting Direksi",
    purchaseDate: "01 Jan 2017",
    status: "OK",
    icon: Tv,
    description: "TV LCD untuk meeting direksi",
    specifications: "Resolusi: 48 inch",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4100012021",
    name: "Code Vision AVR Development Kit",
    category: "TV LCD",
    brand: "Code Vision AVR",
    model: "Development",
    serialNumber: "7021445200621880",
    price: "Rp 6.028.200",
    location: "GITO-GATI",
    room: "Ruang R&D Utara",
    purchaseDate: "01 Jan 2021",
    status: "OK",
    icon: Tv,
    description: "Development kit untuk R&D",
    specifications: "Kit 9.0 LCD MCGSTPC TPC7062TX",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4100022013",
    name: "Samsung UA40J5100AK",
    category: "TV LCD",
    brand: "Samsung",
    model: "UA40J5100AK",
    serialNumber: "0A5Z3RAGC01159K",
    price: "Rp 1.475.000",
    location: "GITO-GATI",
    room: "Mushola Gito Gati",
    purchaseDate: "01 Jan 2013",
    status: "OK",
    icon: Tv,
    description: "TV LCD untuk mushola",
    specifications: "Resolusi: 40 Inch",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4100022021",
    name: "LG 43LM5500PTA",
    category: "TV LCD",
    brand: "LG",
    model: "43LM5500PTA",
    serialNumber: "104INQU8C196",
    price: "Rp 3.650.000",
    location: "KLASEMAN",
    room: "Ruang Marketing",
    purchaseDate: "01 Jan 2021",
    status: "OK",
    icon: Tv,
    description: "TV LCD untuk marketing",
    specifications: "LED Resolusi: 43 Inch",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4100022022",
    name: "Coocaa 70CUC6500",
    category: "TV LCD",
    brand: "Coocaa",
    model: "70CUC6500",
    serialNumber: "2150029C02833",
    price: "Rp 10.060.000",
    location: "GITO-GATI",
    room: "Ruang Office Operasional",
    purchaseDate: "21 Jul 2022",
    status: "OK",
    icon: Tv,
    description: "Smart TV Android untuk operasional",
    specifications: "LED 70 Android TV",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4110012022",
    name: "SKM9000 Wireless Microphone",
    category: "Microphone",
    brand: "SKM9000",
    model: "SKM9000",
    serialNumber: "NONE",
    price: "Rp 1.500.000",
    location: "KLASEMAN",
    room: "Ruang HRGA",
    purchaseDate: "01 Okt 2021",
    status: "OK",
    icon: Mic,
    description: "Microphone wireless untuk presentasi",
    specifications: "Wireless Microphone System",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4110022022",
    name: "Godox Movelink M2",
    category: "Microphone",
    brand: "Godox",
    model: "Movelink M2",
    serialNumber: "4575353 K/G C1AE-DJJJC-AABA-00027",
    price: "Rp 1.875.000",
    location: "KLASEMAN",
    room: "Ruang IT & Multimedia",
    purchaseDate: "21 Jan 2022",
    status: "OK",
    icon: Mic,
    description: "Microphone clip on wireless",
    specifications: "Mic Clip On Wireless",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4110032022",
    name: "Fifine K690",
    category: "Microphone",
    brand: "Fifine",
    model: "K690",
    serialNumber: "NONE",
    price: "Rp 1.250.000",
    location: "KLASEMAN",
    room: "Ruang Meeting Direksi",
    purchaseDate: "02 Mar 2022",
    status: "OK",
    icon: Mic,
    description: "Microphone USB untuk meeting",
    specifications: "USB",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4120012023",
    name: "Huawei AF78",
    category: "Modem",
    brand: "Huawei",
    model: "AF78",
    serialNumber: "518129",
    price: "Rp 1.387.000",
    location: "GITO-GATI",
    room: "Ruang Quality Control",
    purchaseDate: "24 Nov 2023",
    status: "OK",
    icon: Router,
    description: "Modem dengan antena untuk koneksi internet",
    specifications: "Modem: Huawei AF78, antena LPDA 40 N Male, Extender, Pigtail VW240, T Konektor",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4130012013",
    name: "LG 16EN33SA",
    category: "Monitor",
    brand: "LG",
    model: "16EN33SA",
    serialNumber: "311INPT4T648",
    price: "Rp 655.000",
    location: "KLASEMAN",
    room: "Ruang Server",
    purchaseDate: "01 Jan 2013",
    status: "OK",
    icon: Monitor,
    description: "Monitor untuk server",
    specifications: "Resolusi: 16 Inch",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4130012017",
    name: "LG 20M38H",
    category: "Monitor",
    brand: "LG",
    model: "20M38H",
    serialNumber: "611INMF4L299",
    price: "Rp 1.125.000",
    location: "KLASEMAN",
    room: "Ruang HRGA",
    purchaseDate: "01 Jan 2017",
    status: "OK",
    icon: Monitor,
    description: "Monitor untuk HRGA",
    specifications: "Resolusi: 20 Inch",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4130012022",
    name: "MSI Pro MP242",
    category: "Monitor",
    brand: "MSI",
    model: "Pro MP242",
    serialNumber: "PA1T651C00370",
    price: "Rp 2.195.000",
    location: "KLASEMAN",
    room: "Ruang IT & Multimedia",
    purchaseDate: "22 Apr 2022",
    status: "OK",
    icon: Monitor,
    description: "Monitor untuk IT & Multimedia",
    specifications: "24-Inch 1920x1080 (FHD), Warna: Hitam",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4150012011",
    name: "Panasonic KX TEB308",
    category: "PABX",
    brand: "PANASONIC",
    model: "KX TEB308",
    serialNumber: "2ECCQ010442",
    price: "Rp 315.000",
    location: "RUKO",
    room: "Ruko Lantai 2",
    purchaseDate: "01 Jan 2011",
    status: "OK",
    icon: Phone,
    description: "PABX untuk sistem telepon",
    specifications: "Warna: Putih",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4150012014",
    name: "Panasonic KX - TES824",
    category: "PABX",
    brand: "Panasonic",
    model: "KX - TES824",
    serialNumber: "",
    price: "Rp 750.000",
    location: "KLASEMAN",
    room: "Workshop Klaseman",
    purchaseDate: "01 Jan 2014",
    status: "OK",
    icon: Phone,
    description: "PABX untuk workshop",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4160012013",
    name: "Epson L355",
    category: "Printer",
    brand: "Epson",
    model: "L355",
    serialNumber: "S46K003286",
    price: "Rp 2.650.000",
    location: "GITO-GATI",
    room: "Ruang R&D",
    purchaseDate: "01 Jan 2013",
    status: "OK",
    icon: Printer,
    description: "Printer multifungsi untuk R&D",
    specifications: "Warna: Hitam",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4160012014",
    name: "Brother MFC-J200",
    category: "Printer",
    brand: "Brother",
    model: "MFC-J200",
    serialNumber: "E73186F4F153671",
    price: "Rp 2.399.000",
    location: "KLASEMAN",
    room: "Ruang HRGA",
    purchaseDate: "01 Jan 2014",
    status: "OK",
    icon: Printer,
    description: "Printer multifungsi untuk HRGA",
    specifications: "Warna: Hitam",
    image: "/sony-a6400-camera.jpg",
  },
  {
    id: "4160012018",
    name: "Epson L360 C462H",
    category: "Printer",
    brand: "Epson",
    model: "L360 C462H",
    serialNumber: "X3GW247892",
    price: "Rp 2.050.000",
    location: "GITO-GATI",
    room: "Ruang Warehouse",
    purchaseDate: "01 Jan 2018",
    status: "OK",
    icon: Printer,
    description: "Printer untuk warehouse",
    specifications: "Warna: Hitam",
    image: "/sony-a6400-camera.jpg",
  },
]

const getStatusColor = (status: string) => {
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

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(inventoryData.map((item) => item.category))]
    return uniqueCategories.sort()
  }, [])

  const locations = useMemo(() => {
    const uniqueLocations = [...new Set(inventoryData.map((item) => item.location))]
    return uniqueLocations.sort()
  }, [])

  const filteredData = useMemo(() => {
    return inventoryData.filter((item) => {
      const matchesSearch =
        searchTerm === "" ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.model.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = categoryFilter === "all" || item.category === categoryFilter
      const matchesLocation = locationFilter === "all" || item.location === locationFilter

      return matchesSearch && matchesCategory && matchesLocation
    })
  }, [searchTerm, categoryFilter, locationFilter])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Data Inventaris IT</h1>
              <p className="text-muted-foreground text-lg">Kelola dan pantau semua perangkat IT perusahaan</p>
            </div>
            <Link href="/inventory/add">
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Tambah Item
              </Button>
            </Link>
          </div>

          <div className="bg-card p-6 rounded-lg border space-y-4">
            <h2 className="text-lg font-semibold mb-4">Filter & Pencarian</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Cari nama, kode, atau brand..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Kategori</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Lokasi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Lokasi</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setCategoryFilter("all")
                  setLocationFilter("all")
                }}
              >
                Reset Filter
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-muted-foreground">
            Menampilkan {filteredData.length} dari {inventoryData.length} item
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item) => {
            const IconComponent = item.icon
            return (
              <Card key={item.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <CardDescription className="text-sm">{item.brand}</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{item.description}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Kode:</span>
                      <span className="font-mono">{item.id}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Lokasi:</span>
                      <span>{item.room}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                    <span className="text-sm font-medium text-primary">{item.price}</span>
                  </div>

                  <Link href={`/inventory/${item.id}`} className="block">
                    <Button className="w-full bg-transparent" variant="outline">
                      Lihat Detail Lengkap
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Tidak ada item yang sesuai dengan filter yang dipilih</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">Total {inventoryData.length} perangkat terdaftar</p>
        </div>
      </div>
    </div>
  )
}
