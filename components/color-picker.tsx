import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface ColorPickerProps {
  selectedColor: string
  onColorChange: (color: string) => void
}

export function ColorPicker({ selectedColor, onColorChange }: ColorPickerProps) {
  const colors = [
    { name: "White", value: "bg-white" },
    { name: "Light Gray", value: "bg-gray-100" },
    { name: "Light Blue", value: "bg-blue-100" },
    { name: "Light Green", value: "bg-green-100" },
    { name: "Light Yellow", value: "bg-yellow-100" },
  ]

  return (
    <div className="space-y-2">
      <Label>배경색</Label>
      <RadioGroup value={selectedColor} onValueChange={onColorChange} className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <div key={color.value} className="flex items-center space-x-2">
            <RadioGroupItem value={color.value} id={color.value} className="sr-only" />
            <Label
              htmlFor={color.value}
              className={`w-8 h-8 rounded-full cursor-pointer ring-2 ring-offset-2 ${
                color.value
              } ${selectedColor === color.value ? "ring-black" : "ring-transparent"}`}
            />
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

