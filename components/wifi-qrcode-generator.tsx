'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { QRCodeWithBrand } from './qr-code-with-brand'
import { ColorPicker } from './color-picker'
import { QRCodeSVG } from 'qrcode.react';

export function WifiQRCodeGenerator() {
  const [brandName, setBrandName] = useState('')
  const [ssid, setSsid] = useState('')
  const [password, setPassword] = useState('')
  const [encryption, setEncryption] = useState('WPA')
  const [hidden, setHidden] = useState(false)
  const [backgroundColor, setBackgroundColor] = useState('bg-white')

  const generateQRCode = () => {
    return `WIFI:T:${encryption};S:${ssid};P:${password};${hidden ? 'H:true' : ''};B:${brandName};`
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold text-center mb-4">WIFI QRCODE</h1>
      <QRCodeWithBrand value={generateQRCode()} brandName={brandName} backgroundColor={backgroundColor} />
      <div className="space-y-3">
        <div className="space-y-1.5">
          <Label htmlFor="brandName">브랜드 이름</Label>
          <Input id="brandName" value={brandName} onChange={(e) => setBrandName(e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="ssid">네트워크 이름(SSID)</Label>
          <Input id="ssid" value={ssid} onChange={(e) => setSsid(e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="password">비밀번호</Label>
          <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label>암호화 유형</Label>
          <Select value={encryption} onValueChange={setEncryption}>
            <SelectTrigger>
              <SelectValue placeholder="Select encryption" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="WPA">WPA/WPA2</SelectItem>
              <SelectItem value="WEP">WEP</SelectItem>
              <SelectItem value="nopass">None</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ColorPicker selectedColor={backgroundColor} onColorChange={setBackgroundColor} />
        <div className="flex items-center space-x-2 mt-3">
          <Checkbox id="hidden" checked={hidden} onCheckedChange={(checked) => setHidden(checked === true)} />
          <Label htmlFor="hidden">숨김 네트워크</Label>
        </div>
        <Button className="w-full" onClick={() => console.log('QR Code generated')}>
          생성하기
        </Button>
      </div>
      <QRCodeSVG value="your-wifi-data-here" />
    </div>
  )
}

