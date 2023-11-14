export async function fetchAllProducts(supabase: any) {
  const { data, error } = await supabase
    .from('products')
    .select('*');

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}
