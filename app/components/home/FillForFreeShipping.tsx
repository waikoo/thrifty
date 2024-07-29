"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel"

import { ProductItemType } from '@/types/productItem';
import { Gender, Locales } from '@/types/link';
import { useCartStore } from "@/state/client/cartState"
import { useEffect, useState } from 'react';
import { supabase } from '@/app/supabase';
import ProductItem from '../products/ProductItem';
import { FREE_HOME_DELIVERY_PRICE } from "../data/orderSummary";
import { albert_900 } from "@/utils/fonts";

type NewArrivalsProps = {
  lang: Locales
  gender: Gender
}

export default function FillForFreeShipping({ lang, gender = 'women' }: NewArrivalsProps) {
  const { cart, cartTotalPrice } = useCartStore()
  const isFreeShipping = FREE_HOME_DELIVERY_PRICE - cartTotalPrice <= 0;

  const [accessories, setAccessories] = useState<ProductItemType[] | null>([])

  useEffect(() => {
    const getGendersAndAccessories = async () => {
      const { data: genders } = await supabase
        .from('products')
        .select('*')
        .in('uuid', cart);

      if (genders) {
        const totalGendersInCart = genders.map((gender) => gender.gender);
        const uniqueGendersInCart = Array.from(new Set(totalGendersInCart));

        const { data: accessories, error } = await supabase
          .from('products')
          .select('*')
          .eq('category', 'accessories')
          .order('price', { ascending: true })
          .limit(12);

        if (!error && accessories) {
          const filteredAccessories = accessories.filter((accessory) =>
            uniqueGendersInCart.includes(accessory.gender)
          );
          setAccessories(filteredAccessories);
        }
      }
    };

    getGendersAndAccessories().catch((error) => {
      console.log(error);
    });
  }, [cart]);

  return cart.length === 0 || isFreeShipping ? null : (
    <section className={`bg-t_white w-full flex flex-col pb-10`}>
      <div className={`${'mx-auto w-[80%]'}`}>
        <h3 className={`text-t_black py-10 text-2xl font-bold text-center text-[20px] sm:text-[22px] ${albert_900.className}`}>
          FILL FOR FREE SHIPPING
        </h3>

        <Carousel className="mx-auto w-full sm:w-[94%] mt-[1.5625rem]">
          <CarouselContent className="mx-auto -ml-3">

            {accessories && accessories.map((accessory, i) => (
              <CarouselItem
                key={accessory.uuid}
                className="basis-1/2 sm:basis-1/3 xl:basis-1/4 mx-auto"
              >

                <ProductItem
                  index={i}
                  gender={gender}
                  product={accessory}
                />

              </CarouselItem>
            ))}

          </CarouselContent>

          <CarouselPrevious variant={'ghost'} />
          <CarouselNext variant={'ghost'} />

        </Carousel>
      </div>
    </section>
  )
}
