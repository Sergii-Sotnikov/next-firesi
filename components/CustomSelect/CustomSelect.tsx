// CustomSelect.tsx
"use client";
import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

export function CustomSelect({
  value,
  onChange,
  products,
  triggerClass,
  ariaLabelledby,
}: {
  value: string;
  onChange: (v: string) => void;
  products: { id: string; title: string; priceEUR: number }[];
  triggerClass?: string;
  ariaLabelledby?: string; 
}) {
  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger
        className={triggerClass}
        aria-labelledby={ariaLabelledby}   // <-- важно: именно aria-labelledby
      >
        <Select.Value placeholder="— Оберіть товар —" />
        <Select.Icon><ChevronDown size={16} /></Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="rdxContent" position="popper" sideOffset={6} collisionPadding={8}>
          <Select.Viewport className="rdxViewport">
            {products.map((p) => (
              <Select.Item key={p.id} value={p.id} className="rdxItem">
                <Select.ItemText>
                  <span className="row">
                    <span className="title">{p.title}</span>
                    <span className="price">вартістю {p.priceEUR} EUR</span>
                  </span>
                </Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
