"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type CategoryProps = {};

const Category = ({ }: CategoryProps) => {
  const categories = ['men', 'women', 'kids'];
  const [, currentLocale, currentCategory,] = usePathname().split('/');

  return (
    <nav className="w-5/12 mx-auto pt-2">
      <ul className="grid grid-cols-3 w-full justify-items-center cursor-pointer">
        {categories.map((category) => (
          <li
            key={category}
            className={`text-${currentCategory === category ? 'content font-extrabold' : 'faded'
              }`}
          >
            <Link
              href={`/${currentLocale}/${category}`}
            >
              {category.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Category;

