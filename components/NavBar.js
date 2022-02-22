import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();

  return (
    <>
      <nav>
        <Link href="/">
          <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
        </Link>
      </nav>
      {/* javascript 문자열.. color : ${props.color} 가능 */}
      <style jsx>
        {`
          nav {
            background-color: tomato;
          }
          a {
            text-decoration: none;
            font-size: 5rem;
            margin-right: 1em;
          }

          .active {
            color: blue;
          }
        `}
      </style>
    </>
  );
}
