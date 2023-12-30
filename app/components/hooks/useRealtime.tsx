import { useEffect, useState } from 'react';
import { supabase } from '@/app/supabase';
import { ProductItemType } from '@/types/productItem';
import { useUIStore } from '@/state';

export default function useRealtime(table: 'draft' | 'edited' | 'products') {
  const [tableState, setTableState] = useState<ProductItemType[]>([])
  const { setDraftLength, setEditedLength, setProductsLength } = useUIStore()

  const fetchEdited = async () => {
    let { data: edited, error } = await supabase
      .from(table)
      .select('*')

    if (error) {
      console.log(`Error for operation on table "${table}":`)
      console.log(error.message)
      return
    }
    return edited
  }

  useEffect(() => {
    fetchEdited().then(data => {
      if (data) {
        setTableState(data)
      }
    })

    const channel = supabase.channel(`realtime ${table}`)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: table },
        () => {
          fetchEdited().then(data => {
            if (data) {
              setTableState(data)
              if (table === 'edited') setEditedLength(data.length)
              if (table === 'draft') setDraftLength(data.length)
              if (table === 'products') setProductsLength(data.length)
            }
          })
        }).subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  return tableState

}
