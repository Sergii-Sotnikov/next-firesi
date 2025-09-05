// CustomSelect.tsx
"use client";
import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import css from "./CustomSelect.module.css";

export function CustomSelect({
  value,
  onChange,
  products,
  triggerClass,
  ariaLabelledby,
}: {
  value: string;
  onChange: (v: string) => void;
  products: {
    id: string;
    title: string;
    titleMobile: string;
    capacity: string;
    priceEUR: number;
  }[];
  triggerClass?: string;
  ariaLabelledby?: string;
}) {
  const selected = products.find((p) => p.id === value);

  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger
        className={`${triggerClass} ${css.trigger}`}
        aria-labelledby={ariaLabelledby}
      >
        {selected ? (
          <span className={css.triggerValue}>
            <span className={css.title}>
              {selected.titleMobile}
              <span className={css.hiddenMobile}>
                <br className={css.titleAdd} />
                вартістю{" "}
                <span className={css.textBold}>{selected.priceEUR} EUR</span>
              </span>
            </span>
          </span>
        ) : (
          <Select.Value placeholder="— Оберіть товар —" />
        )}
        <Select.Icon>
          <ChevronDown size={16} />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className={css.content}
          position="popper"
          sideOffset={6}
          collisionPadding={8}
        >
          <Select.Viewport className={css.viewport}>
            {products.map((p) => (
              <Select.Item key={p.id} value={p.id} className={css.item}>
                <Select.ItemText>
                  {/* desktop */}
                  <span className={css.row}>
                    <span className={css.title}>{p.title}</span>
                    <span className={css.price}>вартістю {p.priceEUR} EUR</span>
                  </span>

                  {/* mobile — ПОЛНЫЙ вид (с capacity) в выпадающем списке */}
                  <span className={css.rowMobile}>
                    <span className={css.title}>
                      {p.titleMobile}
                      <br className={css.titleAdd} />
                      вартістю {p.priceEUR} EUR
                    </span>
                    <span className={css.price}>{p.capacity}</span>
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
