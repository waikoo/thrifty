import { images } from '../data/apparelImagesSrc'
import ApparelGridImage from './ApparelGridImage';
import { createTranslation } from '@/i18n/server'
import { Locales } from '@/types/home'

type ApparelGridProps = {
  lang: Locales
}
export default async function ApparelGrid({ lang }: ApparelGridProps) {
  const { t } = await createTranslation(lang, 'home')

  const common = `border-content border-[0.07rem]`;
  const text = "h-full w-full self-end text-right";
  const flex = "flex place-items-end";
  const alignment = "align-self-end w-full justify-self-end p-2 text-sm"

  return (
    <section className="grid h-[40vw] w-screen grid-cols-6 grid-rows-[20%,30%,30%,20%]">
      <div className={`bg-yellow col-span-1 row-span-2 py-10 ${common}`}></div>
      <div className={`bg-pink ${common}`}></div>
      <div className={`bg-white ${common}`}></div>
      <div className={`bg-red ${common}`}></div>
      <div className={`bg-green ${common}`}></div>
      <div className={`bg-purple row-span-2 ${common}`}></div>

      <div className={`bg-green col-span-1 overflow-hidden ${common}`}>
        <ApparelGridImage src={images[0]} alt="clothes" />
      </div>

      <div className={`${flex} ${text} ${common}`}>
        <h4 className={`${alignment}`}><span>{t('apparelGrid.shoes')}</span></h4>
      </div>

      <div className={`bg-blue ${common}`}>
        <ApparelGridImage src={images[1]} alt="shoes"
        />
      </div>

      <div className={`${flex} ${text} ${common}`}>
        <h4 className={`${alignment}`}>{t('apparelGrid.sport')}</h4>
      </div>

      <div className={`bg-orange-400 row-span-2 ${common}`}></div>
      <div className={`${flex} ${text} ${common}`}>
        <h4 className={`${alignment}`}>{t('apparelGrid.clothing')}</h4>
      </div>
      <div className={`bg-purple ${common}`}>
        <ApparelGridImage src={images[2]} alt="accessories" />

      </div>
      <div className={`${flex} ${text} ${common}`}>
        <h4 className={`${alignment}`}>{t('apparelGrid.accessories')}</h4>
      </div>
      <div className={`bg-red ${common}`}>
        <ApparelGridImage src={images[3]}
          alt=""
        />

      </div>
      <div className={`bg-white row-span-2 ${common}`}></div>
      <div className="bg-blue"></div>
      <div className={`bg-yellow ${common}`}></div>
      <div className={`bg-pink ${common}`}></div>
      <div className={`bg-green ${common}`}></div>
    </section>
  );
}

