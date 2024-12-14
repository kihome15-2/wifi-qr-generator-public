import { QRCodeSVG } from 'qrcode.react'

interface QRCodeWithBrandProps {
  value: string
  brandName: string
  backgroundColor: string
}

export function QRCodeWithBrand({ value, brandName, backgroundColor }: QRCodeWithBrandProps) {
  return (
    <div className={`w-full aspect-square flex flex-col items-center justify-center rounded-lg p-2 ${backgroundColor}`}>
      <QRCodeSVG value={value} size={200} />
      {brandName && (
        <p className="mt-1 text-sm font-semibold text-center break-all">
          {brandName}
        </p>
      )}
    </div>
  )
}

