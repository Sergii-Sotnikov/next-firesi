import ButtonOrderProduct from "../ButtonOrderProduct/ButtonOrderProduct";
import ChoiceMobileSlider from "./ChoiceMobileSlider";
import css from "./Сhoice.module.css";
import {price} from "@/src/data/products"

export default function Choice() {
  return (
    <section className={css.choice} id="order">
      <div className={css.container}>
        <h3 className={css.title}>
          Вибери свого<br className={css.titleAdd}/> надійного<br className={css.titleAdd}/> захисника
        </h3>
        <div className={css.choiceMobileSwiper}>
          <ChoiceMobileSlider />
        </div>
        <ul className={css.productList}>
          <li className={css.productItem}>
            <p className={css.productTitle}>вогнегасник</p>
            <p className={css.productName}>
              Fire<span className={css.productNameLogo}>si</span> FRSE-FS
            </p>
            <div className={css.product}>
              <div className={css.productDescription}>
                <p className={css.descriptionName}>
                  Спрей: <span className={css.descriptionNameAdd}>FRSE-FS</span>
                </p>
                <ul className={css.descriptionList}>
                  <li className={css.descriptionItem}>
                    <p className={css.descriptionItemText}>
                      Тип вогнегасника: водно-пінний
                    </p>
                  </li>
                  <li className={css.descriptionItem}>
                    <p className={css.descriptionItemText}>
                      Обʼєм заряду: 400 мл
                    </p>
                  </li>
                  <li className={css.descriptionItem}>
                    <p className={css.descriptionItemText}>
                      Вогнегасна здатність: 34A, 183B, C, D, 75F, Li-ion,
                      LiFePo4
                    </p>
                  </li>
                  <li className={css.descriptionItem}>
                    <p className={css.descriptionItemText}>
                      Для використання на пожежах під напругою до 400В
                    </p>
                  </li>
                  <li className={css.descriptionItem}>
                    <p className={css.descriptionItemText}>
                      Можна керувати однією рукою, працює в будь-якому положенні.
                    </p>
                  </li>
                  <li className={css.descriptionItem}>
                    <p className={css.descriptionItemText}>
                      Дальність гасіння 1–2 метри
                    </p>
                  </li>
                  <li className={css.descriptionItem}>
                    <p className={css.descriptionItemText}>
                      Температурний діапазон експлуатації: від -15°C до +50°C
                    </p>
                  </li>
                </ul>
              </div>
              <picture className={css.productImage}>
                <source
                  srcSet="/img/webp/FRSE_FS.webp 1x, /img/webp/FRSE_FS@2x.webp 2x"
                  type="image/webp"
                />
                <img src="/img/webp/FRSE_FS.webp" alt="FRSE FS" />
              </picture>
            </div>
            <div className={css.classes}>
              <p className={css.classText}>🔥 Гасіння всіх класів пожеж:</p>
              <p className={css.classText}>
                🟩 A — тверді речовини (дерево, папір, текстиль)
              </p>
              <p className={css.classText}>
                🟨 B — рідини (бензин, олія, лакофарби)
              </p>
              <p className={css.classText}>
                🟥 C — гази (пропан, метан, бутан)
              </p>
              <p className={css.classText}>
                ⬛ D — метали (магній, натрій, титан)*
              </p>
              <p className={css.classText}>
                🔌 E — електрообладнання під напругою
              </p>
              <p className={css.classText}>
                🍳 F — кухонні жири й масла, може загасити до 20 літрів
                рослинної олії.
              </p>
            </div>
            <p className={css.textPrice}>вартість {price["FRSE-FS"]} eur</p>
            <p className={css.textPriceExchange}>
              розрахунок в гривнях по курсу НБУ
            </p>
            <ButtonOrderProduct productId="FRSE-FS" />
          </li>

          <li className={css.productItem}>
            <p className={css.productTitle}>вогнегасник</p>
            <p className={css.productName}>
              Fire<span className={css.productNameLogo}>si</span> FRSE-F2
            </p>
            <div className={css.product}>
              <div className={css.productDescription}>
                <p className={css.descriptionName}>
                  Модель:{" "}
                  <span className={css.descriptionNameAdd}>FRSE-F2</span>
                </p>
                <ul className={css.descriptionList}>
                  <li className={css.descriptionItem}>
                    <p className={css.descriptionItemText}>
                      Тип вогнегасника: водно-пінний
                    </p>
                  </li>
                  <li className={css.descriptionItem}>
                    <p className={css.descriptionItemText}>
                      Обʼєм заряду: 2 літри
                    </p>
                  </li>
                  <li className={css.descriptionItem}>
                    <p className={css.descriptionItemText}>
                      Вогнегасна здатність: 34A, 183B, C, D, 75F, Li-ion,
                      LiFePo4
                    </p>
                  </li>
                  <li className={css.descriptionItem}>
                    <p className={css.descriptionItemText}>
                      Для використання на пожежах під напругою до 1000В
                    </p>
                  </li>
                  <li className={css.descriptionItem}>
                    <p className={css.descriptionItemText}>
                      Гасіння літієвих акумуляторів (Li-ion, LiFePo4)
                    </p>
                  </li>
                  <li className={css.descriptionItem}>
                    <p className={css.descriptionItemText}>
                      Дальність гасіння 1-2 метри
                    </p>
                  </li>
                  <li className={css.descriptionItem}>
                    <p className={css.descriptionItemText}>
                      Температурний діапазон експлуатації: від -15°C до +60°C
                    </p>
                  </li>
                </ul>
              </div>
              <picture className={css.productImage}>
                <source
                  srcSet="/img/webp/FRSE-F2.webp 1x, /img/webp/FRSE-F2@2x.webp 2x"
                  type="image/webp"
                />
                <img src="/img/webp/FRSE-F2.webp" alt="FRSE FS" />
              </picture>
            </div>
            <div className={css.classes}>
              <p className={css.classText}>🔥 Гасіння всіх класів пожеж:</p>
              <p className={css.classText}>
                🟩 A — тверді речовини (дерево, папір, текстиль)
              </p>
              <p className={css.classText}>
                🟨 B — рідини (бензин, олія, лакофарби)
              </p>
              <p className={css.classText}>
                🟥 C — гази (пропан, метан, бутан)
              </p>
              <p className={css.classText}>
                ⬛ D — метали (магній, натрій, титан)*
              </p>
              <p className={css.classText}>
                🔌 E — електрообладнання під напругою
              </p>
              <p className={css.classText}>
                🍳 F — кухонні жири й масла, може загасити до 100 літрів
                рослинної олії.
              </p>
            </div>
            <p className={css.textPrice}>вартість {price["FRSE-F2"]} eur</p>
            <p className={css.textPriceExchange}>
              розрахунок в гривнях по курсу НБУ
            </p>
            <ButtonOrderProduct productId="FRSE-F2" />
          </li>

          <li className={css.productItem}>
            <p className={css.productTitle}>вогнегасник</p>
            <p className={css.productName}>
              Fire<span className={css.productNameLogo}>si</span> FRSE-F6
            </p>
            <div className={css.product}>
              <div className={css.productDescription}>
                <p className={css.descriptionName}>
                  Модель:{" "}
                  <span className={css.descriptionNameAdd}>FRSE-F6</span>
                </p>
                <ul className={css.descriptionList}>
                  <li className={css.descriptionItem}>
                    <p className={css.descriptionItemText}>
                      Тип вогнегасника: водно-пінний
                    </p>
                  </li>
                  <li className={css.descriptionItem}>
                    <p className={css.descriptionItemText}>
                      Обʼєм заряду: 6 літрів
                    </p>
                  </li>
                  <li className={css.descriptionItem}>
                    <p className={css.descriptionItemText}>
                      Вогнегасна здатність: 34A, 183B, C, D, 75F, Li-ion,
                      LiFePo4
                    </p>
                  </li>
                  <li className={css.descriptionItem}>
                    <p className={css.descriptionItemText}>
                      Для використання на пожежах під напругою до 1000В
                    </p>
                  </li>
                  <li className={css.descriptionItem}>
                    <p className={css.descriptionItemText}>
                      Гасіння літієвих акумуляторів (Li-ion, LiFePo4)
                    </p>
                  </li>
                  <li className={css.descriptionItem}>
                    <p className={css.descriptionItemText}>
                      Дальність гасіння 1-2 метри
                    </p>
                  </li>
                  <li className={css.descriptionItem}>
                    <p className={css.descriptionItemText}>
                      Температурний діапазон експлуатації: від -15°C до +60°C
                    </p>
                  </li>
                </ul>
              </div>
              <picture className={css.productImage}>
                <source
                  srcSet="/img/webp/FRSE-F6.webp 1x, /img/webp/FRSE-F6@2x.webp 2x"
                  type="image/webp"
                />
                <img src="/img/webp/FRSE-F6.webp" alt="FRSE FS" />
              </picture>
            </div>
            <div className={css.classes}>
              <p className={css.classText}>🔥 Гасіння всіх класів пожеж:</p>
              <p className={css.classText}>
                🟩 A — тверді речовини (дерево, папір, текстиль)
              </p>
              <p className={css.classText}>
                🟨 B — рідини (бензин, олія, лакофарби)
              </p>
              <p className={css.classText}>
                🟥 C — гази (пропан, метан, бутан)
              </p>
              <p className={css.classText}>
                ⬛ D — метали (магній, натрій, титан)*
              </p>
              <p className={css.classText}>
                🔌 E — електрообладнання під напругою
              </p>
              <p className={css.classText}>
                🍳 F — кухонні жири й масла, може гасити до 300 літрів рослинної
                олії.
              </p>
            </div>
            <p className={css.textPrice}>вартість {price["FRSE-F6"]} eur</p>
            <p className={css.textPriceExchange}>
              розрахунок в гривнях по курсу НБУ
            </p>
            <ButtonOrderProduct productId="FRSE-F6" />
          </li>
        </ul>
      </div>
    </section>
  );
}
